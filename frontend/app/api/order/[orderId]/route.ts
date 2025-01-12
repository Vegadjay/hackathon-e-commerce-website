import { NextResponse } from 'next/server';
import Order from '@/models/Order'; // Adjust the import path as per your structure
import connectToDatabase from '@/lib/dbConnect'; // Utility to connect to MongoDB
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

const UpdateOrderSchema = z.object({
	status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']).optional(),
	paymentMethod: z.enum(['credit_card', 'paypal', 'bank_transfer', 'cod', 'upi']).optional(),
	paymentStatus: z.enum(['pending', 'completed', 'failed', 'refunded']).optional(),
	orderNotes: z.string().optional(),
	urgent: z.boolean().optional(),
	shippingDetails: ShippingDetailsSchema.optional(),
	products: z.array(ProductSchema).optional(),
	totalPrice: z.number().positive("Total price must be greater than 0").optional(),
	shippingAddress: ShippingAddressSchema.optional()
});

export async function PUT(req: Request,
	{ params }: { params: { orderId: string } }
) {
	try {
		// Connect to the database

		const { orderId } = params;

		if (!orderId) {
			return NextResponse.json({ success: false, error: 'Order ID is required' }, { status: 400 });
		}

		const body = await req.json();

		const parsedData = UpdateOrderSchema.parse(body);

		await connectToDatabase();

		const order = await Order.findById(orderId);
		if (!order) {
			return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
		}

		const updatedOrder = await Order.findByIdAndUpdate(orderId, parsedData, { new: true });

		return NextResponse.json({ success: true, data: updatedOrder }, { status: 200 });

	} catch (error) {
		if (error instanceof z.ZodError) {
			const validationErrors = error.errors.map((err) => ({
				path: err.path.join('.'),
				message: err.message
			}));
			return NextResponse.json({ success: false, error: 'Validation failed', details: validationErrors }, { status: 400 });
		}

		console.error('Error updating order:', error);
		return NextResponse.json({ success: false, error: 'Failed to update order' }, { status: 500 });
	}
}
