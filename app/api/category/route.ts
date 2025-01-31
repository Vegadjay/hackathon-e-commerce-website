import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Category from '@/models/Category';

export async function GET(req: Request) {
    try {
        await connectToDatabase();

        const categories = await Category.find({});

        return NextResponse.json({ success: true, data: categories }, { status: 200 });
    } catch (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch categories' }, { status: 500 });
    }
}
