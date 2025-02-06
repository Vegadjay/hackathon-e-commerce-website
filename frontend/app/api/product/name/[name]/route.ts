import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Product from '@/models/Product';

export async function GET(req: Request, { params }: { params: { name: string } }) {
	const { name } = params;
	//Mulmul Cotton Printed Saree-3499-western
	const [productName, price, ...categoryParts] = name.split('-');
	const category = categoryParts.join('-');
	if (!name) {
		return NextResponse.json(
			{ success: false, error: 'Product Name is required' },
			{ status: 400 }
		);
	}

	try {
		await connectToDatabase();
		const product = await Product.findOne({ name: productName, price: price, category: category });
		if (!product) {
			return NextResponse.json(
				{ success: false, error: 'Product not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json({ success: true, data: product }, { status: 200 });
	} catch (error) {
		console.error('Database error:', error);
		return NextResponse.json(
			{ success: false, error: 'Failed to fetch product' },
			{ status: 500 }
		);
	}
}