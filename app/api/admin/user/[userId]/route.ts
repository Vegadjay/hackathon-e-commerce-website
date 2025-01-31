import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET(
	req: Request,
	{ params }: { params: { userId: string } }
) {
	const { userId } = params;

	try {
		await dbConnect();

		const user = await User.findById(userId).select('-password');

		if (!user) {
			return NextResponse.json(
				{ success: false, error: 'User not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json({ success: true, data: user }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, error: 'Failed to fetch user' },
			{ status: 500 }
		);
	}
}

export async function PUT(
	req: Request,
	{ params }: { params: { userId: string } }
) {
	const { userId } = params;

	try {
		const body = await req.json();
		await dbConnect();

		const updatedUser = await User.findByIdAndUpdate(
			userId, body
		).select('-password');

		if (!updatedUser) {
			return NextResponse.json(
				{ success: false, error: 'User not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json({ success: true, data: updatedUser }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, error: 'Failed to update user' },
			{ status: 500 }
		);
	}
}

