import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET() {
	try {
		await dbConnect();

		const users = await User.find({}).select('-password');

		return NextResponse.json({ success: true, data: users }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, error: 'Failed to fetch users' },
			{ status: 500 }
		);
	}
}
