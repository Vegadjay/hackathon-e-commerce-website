import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Cart } from '@/models/Cart';
import User from '@/models/User';

export async function DELETE(
	request: Request,
	{ params }: { params: { cartId: string } }
) {
	try {
		await dbConnect();

		const { cartId } = params;
		const { productId } = await request.json();

		if (!cartId || !productId) {
			return NextResponse.json(
				{ success: false, error: 'Invalid Credentials' },
				{ status: 400 }
			);
		}

		const cart = await Cart.findById(cartId);

		if (!cart) {
			return NextResponse.json(
				{ success: false, error: 'Cart not found' },
				{ status: 404 }
			);
		}

		// filtering cart to remove
		const updatedProducts = cart.products.filter(
			(product: any) => product.productId.toString() !== productId
		);

		if (updatedProducts.length === cart.products.length) {
			return NextResponse.json(
				{ success: false, error: 'Product not found in cart' },
				{ status: 404 }
			);
		}

		//if the length is zero then delete the cart
		if (updatedProducts.length === 0) {
			await Cart.findByIdAndDelete(cartId);
			//also delete from user.cart
			await User.findOneAndUpdate(
				{ cart: cartId },
				{ $unset: { cart: 1 } }
			);
			return NextResponse.json(
				{ success: true, data: null },
				{ status: 200 }
			);
		}

		// Update the cart
		cart.products = updatedProducts;
		cart.totalPrice = updatedProducts.reduce(
			(acc: number, product: any) =>
				acc + product.quantity * parseFloat(product.price),
			0
		);
		await cart.save();

		return NextResponse.json(
			{ success: true, data: cart },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: (error as Error).message },
			{ status: 500 }
		);
	}
}
