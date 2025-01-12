import { NextResponse } from "next/server";
import Review from "@/models/Review";
import connectToDatabase from "@/lib/dbConnect";

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
		console.log("ProductId", productId);
		const review = await Review.find({
			productId: productId,
		});

		const reviewCount = review.length;
		const averageRating = review.reduce((acc, curr) => acc + curr.rating, 0) / reviewCount;

		return NextResponse.json(
			{
				success: true, message: "Review found", data: {
					totalReview: reviewCount,
					average: averageRating,
				}
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
