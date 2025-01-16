import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const otpSchema = z.object({
	otp: z
		.string()
		.regex(/^\d{6}$/, 'OTP must be a 6-digit number'),
});

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const parsedData = otpSchema.parse(body);

		const userOtp = parsedData.otp;

		const cookies = req.cookies;
		const hashedOtp = cookies.get('otp')?.value;

		if (!hashedOtp) {
			return NextResponse.json(
				{ success: false, message: 'OTP expired or not found in cookies' },
				{ status: 400 }
			);
		}

		const isMatch = await bcrypt.compare(userOtp, hashedOtp);

		if (isMatch) {
			req.cookies.delete('otp');
			return NextResponse.json(
				{ success: true, message: 'OTP verified successfully' },
				{ status: 200 }
			);
		} else {
			return NextResponse.json(
				{ success: false, message: 'Invalid OTP' },
				{ status: 401 }
			);
		}
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ success: false, message: error.errors.map((err) => err.message).join(', ') },
				{ status: 400 }
			);
		}

		console.error('Error verifying OTP:', error);
		return NextResponse.json(
			{ success: false, message: 'Internal server error' },
			{ status: 500 }
		);
	}
}
