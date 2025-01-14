import { NextResponse } from "next/server";
import { z } from "zod";
import connectToDatabase from "lib/dbConnect";
import Review from "@/models/Review";

const ReviewSchema = z.object({
	productId: z.string().nonempty("Product ID is required"),
	userId: z.string().nonempty("User ID is required"),
	rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
	comment: z.string().max(500, "Comment cannot exceed 500 characters").optional(),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const parsedBody = ReviewSchema.parse(body);

		await connectToDatabase();

		const existingReview = await Review.findOne({
			productId: parsedBody.productId,
			userId: parsedBody.userId,
		});

		if (existingReview) {
			return NextResponse.json(
				{ success: false, error: "User has already reviewed this product" },
				{ status: 400 }
			);
		}

		const newReview = new Review({
			productId: parsedBody.productId,
			userId: parsedBody.userId,
			rating: parsedBody.rating,
			comment: parsedBody.comment,
		});

		const savedReview = await newReview.save();

		return NextResponse.json(
			{ success: true, data: savedReview },
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof z.ZodError) {
			const validationErrors = error.errors.map((err) => ({
				path: err.path.join("."),
				message: err.message,
			}));
			return NextResponse.json(
				{ success: false, error: "Validation failed", details: validationErrors },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
