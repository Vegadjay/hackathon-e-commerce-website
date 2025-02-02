import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Coupon from '@/models/Coupon';

export async function GET(
	request: Request,
	{ params }: { params: { code: string } }
) {
	const { code } = params;

	// Validate coupon code presence
	if (!code) {
		return NextResponse.json(
			{ success: false, error: 'Coupon code is required' },
			{ status: 400 }
		);
	}

	try {
		await dbConnect();

		// Convert coupon code to uppercase for consistency
		const coupon = await Coupon.findOne({ code: code.toUpperCase() });

		if (!coupon) {
			return NextResponse.json(
				{ success: false, error: 'Coupon not found' },
				{ status: 404 }
			);
		}

		const now = new Date();

		if (!coupon.isActive) {
			return NextResponse.json(
				{ success: false, error: 'Coupon is inactive' },
				{ status: 400 }
			);
		}

		if (coupon.startDate > now) {
			return NextResponse.json(
				{ success: false, error: 'Coupon is not yet active' },
				{ status: 400 }
			);
		}

		if (coupon.expiryDate < now) {
			return NextResponse.json(
				{ success: false, error: 'Coupon has expired' },
				{ status: 400 }
			);
		}

		if (coupon.usageLimit !== null && coupon.usedCount >= coupon.usageLimit) {
			return NextResponse.json(
				{ success: false, error: 'Coupon usage limit reached' },
				{ status: 400 }
			);
		}

		coupon.usedCount += 1;
		await coupon.save();

		return NextResponse.json(
			{ success: true, data: coupon },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error applying coupon:', error);
		return NextResponse.json(
			{ success: false, error: 'Server Error' },
			{ status: 500 }
		);
	}
}
