import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Product from '@/models/Product';

export async function GET(req: any, { params }: any) {
	const { productId } = params;
	if (!productId) {
		return NextResponse.json({ success: false, error: 'Product ID is required' }, { status: 400 });
	}

	try {
		await connectToDatabase();
		const product = await Product.findById(productId);

		if (!product) {
			return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
		}

		return NextResponse.json({ success: true, data: product }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to fetch product' }, { status: 500 });
	}
}

export async function DELETE(req: any, { params }: any) {
	const { productId } = params;
	if (!productId) {
		return NextResponse.json({ success: false, error: 'Product ID is required' }, { status: 400 });
	}

	try {
		await connectToDatabase();
		const product = await Product.findByIdAndDelete(productId);

		if (!product) {
			return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
		}

		return NextResponse.json({ success: true, message: 'Product deleted successfully!' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to delete product' }, { status: 500 });
	}
}

export async function PUT(req: any, { params }: any) {
	const { productId } = params;
	if (!productId) {
		return NextResponse.json({ success: false, error: 'Product ID is required' }, { status: 400 });
	}

	try {
		await connectToDatabase();
		const productData = await req.json();
		console.log(productData);
		const updatedProduct = await Product.findByIdAndUpdate(productId, productData);
		if (!updatedProduct) {
			return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
		}
		// console.log(updatedProduct);

		return NextResponse.json({ success: true, data: updatedProduct }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to update product' }, { status: 500 });
	}
}
