import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import Cookies from 'js-cookie';

const updateUserSchema = z.object({
	username: z.string().min(3, 'Username must be at least 3 characters long').optional(),
	email: z.string().email('Invalid email address').optional(),
	password: z.string().min(6, 'Password must be at least 6 characters long').optional(),
	phone: z
		.string()
		.regex(/^\d{10}$/, 'Phone number must be 10 digits')
		.optional(),
	address: z.object({
		street: z.string().nonempty('Street is required').optional(),
		city: z.string().nonempty('City is required').optional(),
		state: z.string().nonempty('State is required').optional(),
		zipCode: z.string().regex(/^\d{6}$/, 'Zip code must be 6 digits').optional(),
		country: z.string().nonempty('Country is required').optional(),
	}).optional(),
});

async function authenticate(req: Request) {
	try {
		// Retrieve the token from cookies (server-side)
		const token = req.headers.get('cookie')?.split('; ').find(c => c.startsWith('token='))?.split('=')[1];

		if (!token) {
			throw new Error('Unauthorized: Token is missing');
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

		if (decoded && typeof decoded === 'object' && 'userId' in decoded) {
			return decoded; // Return the decoded token object
		}

		throw new Error('Unauthorized: Invalid token payload');
	} catch (error: any) {
		console.error('Authentication error:', error.message);
		throw new Error('Unauthorized: Invalid token');
	}
}

export async function PUT(req: Request) {
	try {
		const body = await req.json();
		const validatedData = updateUserSchema.parse(body);

		const authenticatedUser = await authenticate(req);

		await dbConnect();

		if (!authenticatedUser) {
			return NextResponse.json(
				{ error: 'You are not authorized to update this account' },
				{ status: 403 }
			);
		}

		let updatedUser = await User.findOneAndUpdate(
			{ email: authenticatedUser.userId },
			validatedData,
			{ new: true }
		);

		if (!updatedUser) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 });
		}

		if (validatedData.password) {
			updatedUser.password = await bcrypt.hash(validatedData.password, 10);
			await updatedUser.save();
		}

		return NextResponse.json(
			{
				message: 'User updated successfully',
				user: {
					id: updatedUser._id,
					username: updatedUser.username,
					email: updatedUser.email,
					phone: updatedUser.phone,
					address: updatedUser.address,
				},
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: (error as Error).message || 'Internal server error' },
			{ status: 500 }
		);
	}
}

export async function GET(req: Request,
	{ params }: { params: { userId: string } }
) {
	const { userId } = params;
	if (!userId) {
		return NextResponse.json({ success: false, error: "User ID is required" }, { status: 400 });
	}
	try {
		await dbConnect();
		const user = await User.findById(userId);
		if (!user) {
			return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
		}
		return NextResponse.json({ success: true, data: user }, { status: 200 });
	}
	catch (error) {
		return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
	}
}