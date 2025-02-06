import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Product from '@/models/Product';

export async function GET(req: Request, { params }: { params: { productId: string } }) {
	const { productId } = params;

	if (!productId) {
		return NextResponse.json(
			{ success: false, error: 'Product ID is required' },
			{ status: 400 }
		);
	}

	try {
		await connectToDatabase();
		const product = await Product.findById(productId);

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

export async function PUT(req: Request, { params }: { params: { productId: string } }) {
	const { productId } = params;

	if (!productId) {
		return NextResponse.json(
			{ success: false, error: 'Product ID is required' },
			{ status: 400 }
		);
	}

	try {
		const productData = await req.json();


		await connectToDatabase();

		const sanitizedData = {
			...productData,
			color: Array.isArray(productData.color) ? productData.color : [],
			size: Array.isArray(productData.size) ? productData.size : [],
			features: Array.isArray(productData.features) ? productData.features : [],
			chartData: Array.isArray(productData.chartData) ? productData.chartData : []
		};

		const updatedProduct = await Product.findByIdAndUpdate(
			productId,
			sanitizedData);

		if (!updatedProduct) {
			return NextResponse.json(
				{ success: false, error: 'Product not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: updatedProduct,
				message: 'Product updated successfully'
			},
			{ status: 200 }
		);
	} catch (error: any) {
		console.error('Update error:', error);

		return NextResponse.json(
			{ success: false, error: 'Failed to update product' },
			{ status: 500 }
		);
	}
}

export async function DELETE(req: Request, { params }: { params: { productId: string } }) {
	const { productId } = params;

	if (!productId) {
		return NextResponse.json(
			{ success: false, error: 'Product ID is required' },
			{ status: 400 }
		);
	}

	try {
		await connectToDatabase();
		const deletedProduct = await Product.findByIdAndDelete(productId);

		if (!deletedProduct) {
			return NextResponse.json(
				{ success: false, error: 'Product not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				message: 'Product deleted successfully',
				data: deletedProduct
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error('Delete error:', error);
		return NextResponse.json(
			{ success: false, error: 'Failed to delete product' },
			{ status: 500 }
		);
	}
}