import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import dbConnect from 'lib/dbConnect';
import User from '@/models/User';

const loginSchema = z.object({
	identifier: z
		.string()
		.nonempty('Email or Phone Number is required')
		.refine(
			(value) =>
				/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^[0-9]{10}$/.test(value),
			{
				message: 'Invalid Email or Phone Number',
			}
		),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { identifier, password } = loginSchema.parse(body);

		await dbConnect();

		const user = await User.findOne({
			$or: [{ email: identifier }, { phone: identifier }],
		});

		if (!user) {
			return NextResponse.json({ error: 'User not found' }, { status: 400 });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
		}

		const token = jwt.sign(
			{ id: user._id, role: user.role },
			process.env.JWT_SECRET as string,
			{ expiresIn: '29d' }
		);

		const response = NextResponse.json({
			success: true,
			message: 'Login successful',
			user: {
				id: user._id,
				username: user.username,
				email: user.email,
				role: user.role,
			},
		}, { status: 200 });

		response.cookies.set('token', token, {
			httpOnly: false,
			secure: false,
			maxAge: 29 * 24 * 60 * 60,
			path: '/',
		});
		//set another token userid
		response.cookies.set('userId', user._id, {
			httpOnly: false,
			secure: false,
			maxAge: 29 * 24 * 60 * 60,
		});
		return response;
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ error: error.errors.map((err) => err.message) }, { status: 400 });
		}
		console.error(error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
