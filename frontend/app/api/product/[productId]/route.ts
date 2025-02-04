import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Product from '@/models/Product';

export async function GET(req: Request,
	{ params }: { params: { productId: string } }
) {

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

	}
	catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to fetch product' }, { status: 500 });
	}
}

export async function DELETE(req: Request,
	{ params }: { params: { productId: string } }
) {
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

		return NextResponse.json({ success: true, message: "Product deleted successfully!" }, { status: 200 });

	}
	catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to fetch product' }, { status: 500 });
	}
}