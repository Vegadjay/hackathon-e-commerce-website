import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Product from '@/models/Product';

export async function GET(req: Request,
	{ params }: { params: { category: string } }
) {
	//get by category
	const { category } = params;

	if (!category) {
		return NextResponse.json({ success: false, error: 'Category is required' }, { status: 400 });
	}

	try {
		await connectToDatabase();

		const products = await Product.find({ category });

		if (!products) {
			return NextResponse.json({ success: false, error: 'Products not found' }, { status: 404 });
		}

		if(products.length === 0){
			return NextResponse.json({ success: false, error: 'No products found' }, { status:
				404 });
		}

		return NextResponse.json({ success: true, data: products }, { status: 200 });

	}
	catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
	}
}