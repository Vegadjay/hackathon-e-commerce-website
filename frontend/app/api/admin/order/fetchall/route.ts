import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';

export async function GET(req: Request) {
	try {
		await dbConnect();
		const orders = await Order.find({});
		if (!orders) {
			return NextResponse.json({ success: true, data: [], message: "No order found!" }, { status: 200 });
		}
		return NextResponse.json({ success: true, data: orders }, { status: 200 })
	}
	catch (err: any) {
		return NextResponse.json({ success: false, error: err?.message }, { status: 500 });
	}
}