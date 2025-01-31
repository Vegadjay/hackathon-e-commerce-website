import { NextResponse } from "next/server";
import Wishlist from "@/models/Whishlist";
import connectToDatabase from "@/lib/dbConnect";
import { z } from "zod";

const AddToWishlistSchema = z.object({
	userId: z.string().nonempty("User ID is required"),
	productId: z.string().nonempty("Product ID is required"),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { userId, productId } = AddToWishlistSchema.parse(body);

		await connectToDatabase();

		let wishlist = await Wishlist.findOne({ userId });

		if (wishlist) {
			if (wishlist.products.includes(productId)) {
				return NextResponse.json(
					{ success: false, error: "Product already in wishlist" },
					{ status: 400 }
				);
			}
			else {
				wishlist.products.push(productId);
				await wishlist.save();
			}
		} else {
			wishlist = await Wishlist.create({ userId, products: [productId] });
		}

		return NextResponse.json(
			{ success: true, data: wishlist },
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ success: false, error: "Validation error", details: error.errors },
				{ status: 400 }
			);
		}

		console.error("Error adding to wishlist:", error);
		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
