import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Order from '@/models/Order';
import User from '@/models/User';
import { Types } from 'mongoose';

export async function POST(req: Request) {
	const { email, orderId } = await req.json();
	if (!email || !orderId) {
		return NextResponse.json({ success: false, error: 'Email and orderId are required' }, { status: 400 });
	}
	try {
		await connectToDatabase();

		const user:any = await User.findOne({email:email});

		if(!user){
			return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
		}
		const orderDetails: any = await Order.findOne({ userId: user._id, _id: new Types.ObjectId(orderId) },{
			status:1,
			shippingDetails:1,
			_id:0
		});

		if (!orderDetails) {
			return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
		}

		return NextResponse.json({ success: true, data: orderDetails }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, error: 'Failed to retrive order status' }, { status: 500 });
	}
}
