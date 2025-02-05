import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Product from '@/models/Product';

// Helper function to validate product data
const validateProductData = (data: any) => {
	const requiredFields = ['name', 'price', 'category'];
	const missingFields = requiredFields.filter(field => !data[field]);

	if (missingFields.length > 0) {
		return {
			isValid: false,
			error: `Missing required fields: ${missingFields.join(', ')}`
		};
	}

	// Validate numeric fields
	if (typeof data.price !== 'number' || data.price < 0) {
		return {
			isValid: false,
			error: 'Price must be a positive number'
		};
	}

	if (data.inStock !== undefined && (typeof data.inStock !== 'number' || data.inStock < 0)) {
		return {
			isValid: false,
			error: 'Stock quantity must be a positive number'
		};
	}

	return { isValid: true };
};

// GET endpoint to fetch a product
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

// PUT endpoint to update a product
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

		// Validate the product data
		const validation = validateProductData(productData);
		if (!validation.isValid) {
			return NextResponse.json(
				{ success: false, error: validation.error },
				{ status: 400 }
			);
		}

		await connectToDatabase();

		// Ensure arrays are properly handled
		const sanitizedData = {
			...productData,
			color: Array.isArray(productData.color) ? productData.color : [],
			size: Array.isArray(productData.size) ? productData.size : [],
			features: Array.isArray(productData.features) ? productData.features : [],
			chartData: Array.isArray(productData.chartData) ? productData.chartData : []
		};

		const updatedProduct = await Product.findByIdAndUpdate(
			productId,
			sanitizedData,
			{
				new: true,
				runValidators: true,
				context: 'query'
			}
		);

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

		// Handle validation errors from Mongoose
		if (error.name === 'ValidationError') {
			const validationErrors = Object.values(error.errors).map((err: any) => err.message);
			return NextResponse.json(
				{
					success: false,
					error: 'Validation failed',
					details: validationErrors
				},
				{ status: 400 }
			);
		}

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