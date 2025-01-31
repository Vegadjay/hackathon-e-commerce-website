import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';
import Product from '@/models/Product';

export async function GET(req: Request,
	{ params }: { params: { category: string } }
) {
	const { category } = params;

	try{
		await dbConnect();

		const products:number = await Product.find({catoegory: category}).countDocuments();
		const totalSales:any = await Order.aggregate([
			{
				$unwind: "$products"
			},
			{
				$lookup: {
					from: "products",
					localField: "products.productId",
					foreignField: "_id",
					as: "productDetails"
				}
			},
			{
				$unwind: "$productDetails"
			},
			{
				$match: {
					"productDetails.category": (category as string)
				}
			},
			{
				$count: "totalOrders"
			}
		]);
		const totalOutOfStockProduct:any = await Product.aggregate([
			{
				$match: {
					category: (category as string),
					inStock: 0
				}
			},
			{
				$count: "outOfStockProducts"
			}
		]);
		const totalRevenue:any = await Order.find({});//have to change


		return NextResponse.json({success: true, data: {
			totalProducts: products,
			totalSales: totalSales.totalOrders,
			outOfStockProduct: totalOutOfStockProduct.outOfStockProducts,
			totalRevenue: totalRevenue
		}}, { status: 200 });
	}
	catch(error){
		return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
	}
}