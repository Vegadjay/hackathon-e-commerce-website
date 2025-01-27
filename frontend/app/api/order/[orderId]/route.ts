import { NextResponse } from 'next/server';
import Order from '@/models/Order';
import connectToDatabase from '@/lib/dbConnect';
import { z } from 'zod';

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

const UpdateOrderSchema = z.object({
	status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned']).optional(),
	paymentStatus: z.enum(['pending', 'completed', 'failed', 'refunded']).optional(),
	shippingAddress: ShippingAddressSchema.optional()
});

export async function PUT(req: Request,
	{ params }: { params: { orderId: string } }
) {
	try {
		const { orderId } = params;

		if (!orderId) {
			return NextResponse.json({ success: false, error: 'Order ID is required' }, { status: 400 });
		}

		const body = await req.json();
		const parsedBody = UpdateOrderSchema.parse(body);

		await connectToDatabase();
		const order = await Order.findById(orderId);

		if (!order) {
			return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
		}

		if (parsedBody.status) {
			order.status = parsedBody.status;
		}

		if (parsedBody.paymentStatus) {
			order.paymentStatus = parsedBody.paymentStatus;
		}

		if (parsedBody.shippingAddress) {
			order.shippingAddress = parsedBody.shippingAddress;
		}

		await order.save();

		return NextResponse.json({ success: true, data: order }, { status: 200 });

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
