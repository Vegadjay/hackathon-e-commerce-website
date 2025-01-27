import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto"

export async function POST(req: Request) {
	const { amount } = await req.json();
	try {
		const instance = new Razorpay({
			key_id: process.env.RAZORPAY_KEY_ID,
			key_secret: process.env.RAZORPAY_KEY_SECRET,
		});

		const options = {
			amount: amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error:Error, order:any) => {
			if (error) {
				return NextResponse.json({success:false, message: "Something Went Wrong!" }, { status: 500 });
			}
			NextResponse.json({ success: true, data: order }, { status: 200 });
		});
	} catch (error) {
		NextResponse.json({ success: false, message: "Internal Server Error!" }, { status: 500 });
	}
}