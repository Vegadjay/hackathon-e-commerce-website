import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';

export async function GET(req: Request,
	{ params }: { params: { orderId: string } }
) {
	const { orderId } = params;

	try {
		await dbConnect();

		const order = await Order.findById(orderId);
		if (!order) {
			return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
		}
		return NextResponse.json({ success: true, data: order }, { status: 200 });

	}
	catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to fetch order' }, { status: 500 });
	}
}

export async function PUT(
	req: Request,
	{ params }: { params: { orderId: string } }
) {
	const { orderId } = params;

	try {
		await dbConnect();

		// Parse the incoming request body
		const body = await req.json();

		// Find and update the order by ID
		const updatedOrder = await Order.findByIdAndUpdate(
			orderId, body
		);

		if (!updatedOrder) {
			return NextResponse.json(
				{ success: false, error: 'Order not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json({ success: true, data: updatedOrder }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, error: 'Failed to update order' },
			{ status: 500 }
		);
	}
}