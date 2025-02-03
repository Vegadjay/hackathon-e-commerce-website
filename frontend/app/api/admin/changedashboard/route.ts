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

export async function PUT(req: any) {
    try {
        await dbConnect();
        const { id, updateData } = await req.json();

        const updatedUser = await User.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        }).select('-password');

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
