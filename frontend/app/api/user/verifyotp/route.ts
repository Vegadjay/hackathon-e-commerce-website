import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { z } from 'zod';

const otpSchema = z.object({
	email: z.string().email('Invalid email address'),
	otp: z.string().regex(/^\d{6}$/, 'OTP must be a 6-digit number'),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { email, otp } = otpSchema.parse(body);

		await dbConnect();

		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 });
		}

		if (!user.otp || !user.otpExpiry) {
			return NextResponse.json({ error: 'OTP not found. Request a new one.' }, { status: 400 });
		}

		const currentTime = new Date();
		if (currentTime > new Date(user.otpExpiry)) {
			return NextResponse.json({ error: 'OTP has expired. Request a new one.' }, { status: 400 });
		}

		const isOtpValid = user.otp == otp;
		if (!isOtpValid) {
			return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
		}

		user.otp = null;
		user.otpExpiry = null;
		user.verified.email = true;
		await user.save();

		return NextResponse.json({ success: true, message: 'OTP verified successfully' }, { status: 200 });
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ error: error.errors.map((err) => err.message) },
				{ status: 400 }
			);
		}
		console.error(error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
