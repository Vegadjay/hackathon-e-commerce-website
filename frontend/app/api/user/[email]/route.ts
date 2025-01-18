import { NextResponse } from 'next/server';
import dbConnect from 'lib/dbConnect';
import User from '@/models/User';
// import jwt from 'jsonwebtoken';

// async function authenticate(req: Request) {
// 	const token = req.headers.get('authorization')?.split(' ')[1];
// 	if (!token) {
// 		throw new Error('Unauthorized: Token is missing');
// 	}

// 	try {
// 		const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
// 		if (decoded?.userId) {
// 			return decoded;
// 		}
// 		return false;
// 	} catch (error) {
// 		throw new Error('Unauthorized: Invalid token');
// 	}
// }

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