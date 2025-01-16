import { NextResponse } from 'next/server';
import dbConnect from 'lib/dbConnect';
import { IProduct, Cart } from '@/models/Cart';
import { z } from 'zod';
import User from '@/models/User';


const cartSchema = z.object({
	userId: z.string().nonempty("User ID is required"),
	products: z.array(
		z.object({
			productId: z.string().nonempty("Product ID is required"),
			quantity: z.number().min(1, "Quantity must be at least 1"),
			size: z.string().nonempty("Size is required"),
			price: z.string().nonempty("Price is required")
		})
	),
	totalPrice: z.number().min(0, "Total price must be at least 0"),
});

export async function POST(request: Request) {
	try {
		const body = await request.json();
		console.log(body, " is my body");
		const parsedBody = cartSchema.parse(body);

		await dbConnect();
		const user = await User.findById(parsedBody.userId);
		if (!user) {
			return NextResponse.json(
				{ success: false, error: "User not found" },
				{ status: 404 }
			);
		}

		const existingCart = await Cart.findOne({ userId: parsedBody.userId });
		if (existingCart) {
			console.log("the cart is already exists.");
			console.log(existingCart);
			parsedBody.products.forEach((newProduct: IProduct) => {
				const existingProduct = existingCart.products.find(
					(product: IProduct) => product.productId.toString() === newProduct.productId
				);

				if (existingProduct) {
					console.log("the product is already exists.");
					existingProduct.quantity = newProduct.quantity;
					existingProduct.size = newProduct.size;
				} else {
					console.log("the product is not exists.PUSHED!!!!!!!!!!!");
					existingCart.products.push(newProduct);
				}
			});

			existingCart.totalPrice = existingCart.products.reduce(
				(acc: number, product: IProduct) => acc + product.quantity * parseFloat(product.price),
				0
			);

			await existingCart.save();
			user.cart = existingCart._id;
			await user.save();

			return NextResponse.json({ success: true, data: existingCart }, { status: 200 });
		}
		console.log("NEW CART!!!!!!!!!!!!!!");
		const newCart = await Cart.create(parsedBody);

		let totalPrice: number = 0;
		for (const product of newCart.products) {
			totalPrice += product.quantity * Number.parseFloat(product.price);
		}
		newCart.totalPrice = totalPrice;
		await newCart.save();
		user.cart = newCart._id;
		await user.save();

		return NextResponse.json({ success: true, data: newCart }, { status: 200 });

	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ success: false, error: error.errors },
				{ status: 400 }
			);
		}
		return NextResponse.json(
			{ success: false, error: (error as Error).message },
			{ status: 500 }
		);
	}
}