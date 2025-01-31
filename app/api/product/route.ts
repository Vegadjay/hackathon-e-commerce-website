import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import { z } from 'zod';
import Product from '@/models/Product';

const ProductSchema = z.object({
	id: z.number().positive("Product ID must be a positive number"),
	name: z.string().nonempty("Product name is required"),
	price: z.number().positive("Product price must be a positive number"),
	rating: z.number().positive("Product rating must be a positive number"),
	reviews: z.number().positive("Product reviews must be a positive number"),
	inStock: z.number().positive("Product stock must be a positive number"),
	delivery: z.string().nonempty("Product delivery information is required"),
	deliveryDate: z.string().nonempty("Product delivery date is required"),
	seller: z.string().nonempty("Product seller is required"),
	color: z.array(z.string()).nonempty("Product color list cannot be empty"),
	category: z.string().nonempty("Product category is required"),
	model: z.string().nonempty("Product model is required"),
	size: z.array(z.string()).nonempty("Product size list cannot be empty"),
	images: z.array(z.string()).nonempty("Product image list cannot be empty"),
	features: z.array(z.string()).nonempty("Product features list cannot be empty"),
	description: z.string().nonempty("Product description is required"),
	chartData: z.array(z.object({
		month: z.string().nonempty("Month is required"),
		revenue: z.number().positive("Revenue must be a positive number")
	})).nonempty("Product chart data list cannot be empty")
});

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
	try {
		await connectToDatabase();

		const body = await req.json();
		const parsedData = ProductSchema.parse(body);

		const product = new Product(parsedData);
		await product.save();

		return NextResponse.json({ success: true, data: product }, { status: 200 });
	} catch (error) {
		if (error instanceof z.ZodError) {
			const validationErrors = error.errors.map((err) => ({
				path: err.path.join('.'),
				message: err.message
			}));
			return NextResponse.json({ success: false, error: 'Validation failed', details: validationErrors }, { status: 400 });
		}

		console.error('Error creating order:', error);
		return NextResponse.json({ success: false, error: 'Failed to create product' }, { status: 500 });
	}
}