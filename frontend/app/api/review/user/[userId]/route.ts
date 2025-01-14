import { NextResponse } from "next/server";
import Review from "@/models/Review";
import connectToDatabase from "lib/dbConnect";

export async function POST(
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
		// Parse the body of the GET request
		const body = await req.json();
		const { productId } = body;

		if (!productId) {
			return NextResponse.json(
				{ success: false, error: "Product ID is required" },
				{ status: 400 }
			);
		}

		await connectToDatabase();

		// Check for the review in the database
		const review = await Review.findOne({ userId: userId, productId: productId });

		if (!review) {
			return NextResponse.json(
				{ success: false, message: "No review found for this user and product" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ success: true, message: "Review found", data: review },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
