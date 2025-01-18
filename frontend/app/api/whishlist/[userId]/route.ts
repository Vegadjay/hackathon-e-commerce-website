import { NextResponse } from "next/server";
import Wishlist from "@/models/Whishlist";
import connectToDatabase from "lib/dbConnect";

export async function GET(
	req: Request,
	{ params }: { params: { userId: string } }
) {
	const { userId } = params;

	if (!userId) {
		return NextResponse.json(
			{ success: false, error: "User ID is required" },
			{ status: 400 }
		);
	}

	try {
		await connectToDatabase();

		const wishlist = await Wishlist.findOne({ userId: userId });

		if (!wishlist) {
			return NextResponse.json(
				{ success: false, error: "Wishlist not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ success: true, data: wishlist }, { status: 200 });
	} catch (error) {
		console.error("Error fetching wishlist:", error);
		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { userId: string } }
) {
	const { userId } = params;

	if (!userId) {
		return NextResponse.json(
			{ success: false, error: "User ID is required" },
			{ status: 400 }
		);
	}

	try {
		const body = await req.json();
		const { productId } = body;

		if (!productId) {
			return NextResponse.json(
				{ success: false, error: "Product ID is required" },
				{ status: 400 }
			);
		}

		await connectToDatabase();

		// Find the wishlist for the given userId
		//populate code remaining
		const wishlist = await Wishlist.findOne({ userId: userId });

		if (!wishlist) {
			return NextResponse.json(
				{ success: false, error: "Wishlist not found" },
				{ status: 404 }
			);
		}

		const productIndex = wishlist.products.indexOf(productId);
		if (productIndex === -1) {
			return NextResponse.json(
				{ success: false, error: "Product not found in wishlist" },
				{ status: 404 }
			);
		}

		// Remove the product from the wishlist
		wishlist.products.splice(productIndex, 1);

		if (wishlist.products.length === 0) {
			await Wishlist.deleteOne({ userId: userId });
			return NextResponse.json(
				{ success: true, message: "Product removed from wishlist", data: null },
				{ status: 200 }
			);
		}

		await wishlist.save();

		return NextResponse.json(
			{ success: true, message: "Product removed from wishlist", data: wishlist },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error removing product from wishlist:", error);
		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
