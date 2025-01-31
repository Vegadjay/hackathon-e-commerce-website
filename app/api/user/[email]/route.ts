import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET(req: Request, { params }: { params: { email: string } }) {
	try {
		await dbConnect();

		const user = await User.findOne({ email: params.email });
		if (!user) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 });
		}

		// Return user details (excluding sensitive information)
		return NextResponse.json({
			user: {
				id: user._id,
				username: user.username,
				email: user.email,
				phone: user.phone,
				address: user.address,
				role: user.role,
			},
		}, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}