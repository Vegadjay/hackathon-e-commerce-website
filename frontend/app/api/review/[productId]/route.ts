import { NextResponse } from "next/server";
import Review from "@/models/Review";
import User from "@/models/User";
import connectToDatabase from "lib/dbConnect";

export async function GET(
	req: Request,
	{ params }: { params: { productId: string } }
) {
	const { productId } = params;

	if (!productId) {
		return NextResponse.json(
			{ success: false, error: "Product ID is required" },
			{ status: 400 }
		);
	}

	try {
		await connectToDatabase();

		const reviews = await Review.find({ productId })
			.populate({
				path: "userId",
				select: "username",
			})
			.exec();

		if (!reviews || reviews.length === 0) {
			return NextResponse.json(
				{ success: false, message: "No reviews found for this product" },
				{ status: 404 }
			);
		}

		const totalReview = reviews.length;
		const average =
			reviews.reduce((sum, review) => sum + review.rating, 0) / totalReview;

		return NextResponse.json(
			{
				success: true,
				message: "Reviews found",
				data: { totalReview, average, reviews },
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error fetching reviews:", error);
		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
