import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

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