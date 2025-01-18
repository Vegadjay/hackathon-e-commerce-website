import { NextResponse } from 'next/server';
import dbConnect from 'lib/dbConnect';
import { Cart } from '@/models/Cart';
import User from '@/models/User';

export async function GET(
	request: Request,
	{ params }: { params: { userId: string } }
) {
	try {
		await dbConnect();

		const { userId } = params;
		const user = await User.findById(userId);

		if (!user) {
			return NextResponse.json(
				{ success: false, error: 'User not found' },
				{ status: 404 }
			);
		}

		const cartid = user.cart;

		if (!cartid) {
			return NextResponse.json(
				{ success: false, error: 'Cart not found' },
				{ status: 404 }
			);
		}

		const cart = await Cart.findById(cartid);

		if (!cart) {
			return NextResponse.json(
				{ success: false, error: 'Cart not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json({ success: true, data: cart }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: (error as Error).message },
			{ status: 500 }
		);
	}
};

export async function DELETE(
	request: Request,
	{ params }: { params: { cartId: string } }
) {
	try {
		await dbConnect();
		const { cartId } = params;

		if (!cartId) {
			return NextResponse.json(
				{ success: false, error: 'Cart id is required!' },
				{ status: 400 }
			);
		}

		const cart = await Cart.findById(cartId);

		if (!cart) {
			return NextResponse.json(
				{ success: false, error: 'Cart not found!' },
				{ status: 404 }
			);
		}
		const user = await User.findOne({ cart: cartId });
		if (user) {
			user.cart = undefined;
			await user.save();
		}
		await cart.deleteOne();

		return NextResponse.json({ success: true }, { status: 200 });

	}
	catch (error) {
		return NextResponse.json(
			{ success: false, error: (error as Error).message },
			{ status: 500 }
		);
	}
};