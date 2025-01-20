import dbConnect from '@/lib/dbConnect';
import Coupon from '@/models/Coupon';
import { z } from 'zod';
import { NextResponse } from 'next/server';

const couponSchema = z.object({
	code: z.string().nonempty().toUpperCase(),
	discountType: z.enum(['percentage', 'fixed']),
	discountValue: z.number().min(0),
	minPurchaseAmount: z.number().optional(),
	maxDiscountAmount: z.number().optional(),
	usageLimit: z.number().optional(),
	startDate: z.date(),
	expiryDate: z.date(),
	applicableProducts: z.array(z.string().regex(/^[0-9a-fA-F]{24}$/)).optional(),
	applicableCategories: z.array(z.string()).optional(),
	isActive: z.boolean().default(true),
});

export async function POST(req: Request) {

	try {
		const validatedData = couponSchema.parse(req.body);

		await dbConnect();

		const newCoupon = new Coupon({
			...validatedData,
			usedCount: 0,
			createdAt: new Date(),
			updatedAt: new Date(),
		});

		await newCoupon.save();

		return NextResponse.json({
			success: true,
			data: newCoupon,
		}, { status: 200 });
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ errors: error.errors }, { status: 400 });
		}
		return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
	}
}