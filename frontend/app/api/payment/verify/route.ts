import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto"

export async function POST(req: Request) {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return NextResponse.json({success:true, message: "Payment verified successfully" }, { status : 200});
		} else {
			return NextResponse.json({success:false, message: "Invalid signature sent!" }, { status : 400});
		}
	} catch (error) {
		NextResponse.json({ success: false, message: "Internal Server Error!" }, { status: 500 });
	}
}