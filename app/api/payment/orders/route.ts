import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto"

export async function POST(req: Request) {
	const { amount } = await req.json();
	(amount);
	try {
		const instance = new Razorpay({
			key_id: process.env.RAZORPAY_KEY_ID as string,
			key_secret: process.env.RAZORPAY_KEY_SECRET as string,
		});

		const options = {
			amount: amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		const order = await new Promise((resolve, reject) => {
			instance.orders.create(options, (error, order) => {
				if (error) {
					reject(error);
				} else {
					resolve(order);
				}
			});
		});

		return NextResponse.json({ success: true, data: order }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, message: "Internal Server Error!" }, { status: 500 });
	}
}