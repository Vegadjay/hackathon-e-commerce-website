import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET;

const signupSchema = z.object({
	username: z.string().min(3, 'Username must be at least 3 characters long'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
	phone: z
		.string()
		.regex(/^\d{10}$/, 'Phone number must be 10 digits'),
	address: z.object({
		street: z.string().nonempty('Street is required'),
		city: z.string().nonempty('City is required'),
		state: z.string().nonempty('State is required'),
		zipCode: z.string().regex(/^\d{5}$/, 'Zip code must be 5 digits'),
		country: z.string().nonempty('Country is required'),
	}),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		console.log(body);
		const { username, email, password, phone, address } = signupSchema.parse(body);

		await dbConnect();

		const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
		if (existingUser) {
			return NextResponse.json({ error: 'User already exists' }, { status: 400 });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const token = jwt.sign({ userId: email }, JWT_SECRET as string, { expiresIn: '7d' });

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			phone,
			address,
			role: 'user',
			token,
		});

		await newUser.save();

		return NextResponse.json({
			message: 'Signup successful',
			user: {
				id: newUser._id,
				username: newUser.username,
				email: newUser.email,
				role: newUser.role,
				token,
			},
		}, { status: 200 });
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ error: error.errors.map((err) => err.message) }, { status: 400 });
		}
		console.error(error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
