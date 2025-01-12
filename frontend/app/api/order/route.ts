import { NextResponse } from 'next/server';
import Order from '@/models/Order';
import connectToDatabase from '@/lib/dbConnect';
import { z } from 'zod';
import User from '@/models/User';

const ProductSchema = z.object({
	productId: z.string().nonempty("Product ID is required"),
	name: z.string().nonempty("Product name is required"),
	quantity: z.number().positive("Quantity must be greater than 0"),
	size: z.string().nonempty("Size is required"),
	price: z.string().nonempty("Price is required")
});

const ShippingAddressSchema = z.object({
	street: z.string().nonempty("Street is required"),
	city: z.string().nonempty("City is required"),
	state: z.string().nonempty("State is required"),
	zipCode: z.string().regex(/^\d{5}$/, "Invalid ZIP code"),
	country: z.string().nonempty("Country is required")
});

const ShippingDetailsSchema = z.object({
	carrier: z.string().optional(),
	trackingNumber: z.string().optional(),
	estimatedDeliveryDate: z.string().optional(),
	actualDeliveryDate: z.string().optional()
});

const OrderSchema = z.object({
	userId: z.string().nonempty("User ID is required"),
	products: z.array(ProductSchema).nonempty("Products list cannot be empty"),
	totalPrice: z.number().positive("Total price must be greater than 0"),
	shippingAddress: ShippingAddressSchema,
	status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']).optional(),
	paymentMethod: z.enum(['credit_card', 'paypal', 'bank_transfer', 'cod', 'upi']),
	paymentStatus: z.enum(['pending', 'completed', 'failed', 'refunded']).optional(),
	orderNotes: z.string().optional(),
	urgent: z.boolean().optional(),
	shippingDetails: ShippingDetailsSchema.optional()
});

export async function POST(req: Request) {
	try {
		await connectToDatabase();

		const body = await req.json();
		const parsedData = OrderSchema.parse(body);

		const user = await User.findById(parsedData.userId);
		if (!user) {
			return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
		}

		const calculatedTotalPrice = parsedData.products.reduce((total, product) => {
			return total + (parseFloat(product.price) * product.quantity);
		}, 0);

		if (calculatedTotalPrice !== parsedData.totalPrice) {
			return NextResponse.json({ success: false, error: 'Total price mismatch' }, { status: 400 });
		}

		const newOrder = new Order({
			userId: parsedData.userId,
			products: parsedData.products,
			totalPrice: calculatedTotalPrice,
			shippingAddress: parsedData.shippingAddress,
			status: 'pending',
			paymentMethod: parsedData.paymentMethod,
			paymentStatus: parsedData.paymentStatus || 'pending',
			orderNotes: parsedData.orderNotes || '',
			urgent: parsedData.urgent || false,
			shippingDetails: parsedData.shippingDetails || {}
		});

		const savedOrder = await newOrder.save();
		user.orders.push(savedOrder._id);
		await user.save();
		return NextResponse.json({ success: true, data: savedOrder }, { status: 200 });

	} catch (error) {
		if (error instanceof z.ZodError) {
			const validationErrors = error.errors.map((err) => ({
				path: err.path.join('.'),
				message: err.message
			}));
			return NextResponse.json({ success: false, error: 'Validation failed', details: validationErrors }, { status: 400 });
		}

		console.error('Error creating order:', error);
		return NextResponse.json({ success: false, error: 'Failed to create order' }, { status: 500 });
	}
}