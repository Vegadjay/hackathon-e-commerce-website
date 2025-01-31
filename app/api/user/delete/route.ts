import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from 'lib/dbConnect';
import User from '@/models/User';

async function authenticate(req: Request, user: any) {
	const token = req.headers.get('authorization')?.split(' ')[1];
	if (!token) {
		throw new Error('Unauthorized: Token is missing');
	}

	try {
		const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
		if (decoded?.userId !== user.email) {
			return false;
		}
		return true;
	} catch (error) {
		throw new Error('Unauthorized: Invalid token');
	}
}

export async function DELETE(req: Request) {
	try {
		const { userId } = await req.json();

		await dbConnect();

		const user = await User.findById(userId);
		if (!user) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 });
		}

		const authenticatedUser = await authenticate(req, user);

		if (!authenticatedUser) {
			return NextResponse.json({ error: 'You are not authorized to delete this account' }, { status: 403 });
		}

		const deletedUser = await User.findByIdAndDelete(userId);

		if (!deletedUser) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 });
		}

		const response = NextResponse.json({
			message: 'Account deleted successfully',
			user: {
				id: deletedUser._id,
				username: deletedUser.username,
				email: deletedUser.email,
			},
		}, { status: 200 });

		response.cookies.set('token', '', {
			httpOnly: true,
			secure: true,
			maxAge: 0, // Set maxAge to 0 to immediately expire the cookie
			path: '/',
		});

		return response;
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: (error as Error).message || 'Internal server error' }, { status: 500 });
	}
}
