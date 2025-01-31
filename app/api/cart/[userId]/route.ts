import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Cart } from '@/models/Cart';
import Product from '@/models/Product';

export async function GET(
	request: Request,
	{ params }: { params: { userId: string } }
) {
	try {
		await dbConnect();

		const { userId } = params;

		if (!userId) {
			return NextResponse.json(
				{ success: true, error: 'User ID is required' },
				{ status: 400 }
			);
		}

		let cart = await Cart.findOne({ userId: userId });

		if (!cart) {
			return NextResponse.json(
				{ success: true, data: [], totalPrice: 0 },
				{ status: 404 }
			);
		}

		let productsWithDetails: any = await Promise.all(
			cart.products.map(async (item: any) => {
				const product = await Product.findById(item.productId);
				if (product) {
					return {
						...item._doc,
						name: product.name,
						image: product.images[0],
					};
				}
				else {
					return null;
				}
			})
		);

		productsWithDetails = productsWithDetails.filter((item: any) => item !== null);

		let totalPrice: number = 0;
		for (let i = 0; i < productsWithDetails.length; i++) {
			totalPrice += productsWithDetails[i].price * productsWithDetails[i].quantity;
		}

		return NextResponse.json({ success: true, data: productsWithDetails, totalPrice: totalPrice }, { status: 200 });
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