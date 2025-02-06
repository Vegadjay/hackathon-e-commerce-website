import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Product from '@/models/Product';

export async function GET(req: Request) {
	try {
		await connectToDatabase();

		const products = await Product.find({});

		return NextResponse.json({ success: true, data: products }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
	}
}

export async function POST(req: Request) {
	const body = await req.json();
	try {
		await connectToDatabase();

		await Product.create(body);
		return NextResponse.json({ success: true, message: "Product created successfully!" }, { status: 201 });
	} catch (error: any) {
		return NextResponse.json({ success: false, error: error.message || "Failed to create product" }, { status: 400 });
	}
}
