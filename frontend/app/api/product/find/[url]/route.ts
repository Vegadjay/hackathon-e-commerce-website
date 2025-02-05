import { NextResponse } from "next/server";
import Product from "@/models/Product";
import dbConnect from "@/lib/dbConnect";

export async function GET(req: Request,
	{ params }: { params: { url: string } }
) {

	const { url } = params;

	if (!url) {
		return NextResponse.json(
			{ error: "fileName query parameter is required" },
			{ status: 400 }
		);
	}

	try {
		await dbConnect();
		const product = await Product.findOne({ images: `/detailphotos/${url}` });
		if (!product) {
			const newUrl = url.replace("jpg", "webp");
			const newProduct = await Product.findOne({ images: `/detailphotos/${newUrl}` });
			if (!newProduct) {
				return NextResponse.json({ success: false, error: "No product found containing the specified file" }, { status: 404 });
			}
			return NextResponse.json({ success: true, data: newProduct }, { status: 200 }
			);
		}

		return NextResponse.json({ success: true, data: product }, { status: 200 });
	} catch (error) {
		console.error("Error fetching product:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
