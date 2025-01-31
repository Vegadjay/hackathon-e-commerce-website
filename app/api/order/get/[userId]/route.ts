import { NextResponse } from "next/server";
import Order from "@/models/Order"; // Adjust the import path as per your structure
import Product from "@/models/Product"; // Adjust the import path as per your structure
import connectToDatabase from "@/lib/dbConnect"; // Utility to connect to MongoDB

export async function GET(
	req: Request,
	{ params }: { params: { userId: string } }
) {
	const { userId } = params;

	if (!userId) {
		return NextResponse.json(
			{ success: false, error: "Login Needed" },
			{ status: 400 }
		);
	}

	try {
		await connectToDatabase();

		// Fetch user's orders
		const orders = await Order.find({ userId: userId });

		if (!orders || orders.length === 0) {
			return NextResponse.json(
				{ success: false, error: "No Orders Found" },
				{ status: 400 }
			);
		}

		// Fetch detailed product information for each product ID
		const enrichedOrders = await Promise.all(
			orders.map(async (order) => {
				const detailedProducts = await Promise.all(
					order.products.map(async (productId: string) => {
						const productDetails = await Product.findById(productId);
						return productDetails || { id: productId, error: "Not Found" }; // Return error if product not found
					})
				);
				return { ...order._doc, products: detailedProducts };
			})
		);

		return NextResponse.json(
			{ success: true, data: enrichedOrders },
			{ status: 200 }
		);
	} catch (err) {
		console.error("Error fetching orders:", err);
		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
