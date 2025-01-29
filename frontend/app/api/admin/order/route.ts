import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';

export async function GET(req: Request) {
	try {
		await dbConnect();

		const totalOrders = await Order.find().countDocuments();
		const totalPendingOrders = await Order.find({ status: 'pending' }).countDocuments();
		const totalCancelledOrders = await Order.find({ status: 'cancelled' }).countDocuments();
		const totalDeliveredOrders = await Order.find({ status: 'shipped' }).countDocuments();
		const totalProcessingOrders = await Order.find({ status: 'processing' }).countDocuments();
		const totalMoneyforTodaysOrders = await Order.aggregate([
			{
				$match: {
					createdAt: {
						$gte: new Date(new Date().setHours(0, 0, 0, 0)), // Start of today
						$lte: new Date(new Date().setHours(23, 59, 59, 999)), // End of today
					},
				},
			},
			{
				$group: {
					_id: null,
					total: { $sum: "$totalPrice" },
				},
			},
			{
				$project: {
					_id: 0,
					total: 1,
				},
			},
		]);
		const totalMoney = totalMoneyforTodaysOrders.length > 0 ? totalMoneyforTodaysOrders[0].total : 0;

		const totalMoneyforThisMonthOrders = await Order.aggregate([
			{
				$match: {
					createdAt: {
						$gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
						$lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59, 999),
					},
				},
			},
			{
				$group: {
					_id: null,
					totalMoney: { $sum: "$totalPrice" },
				},
			},
		]);
		const totalMoneyThisMonth = totalMoneyforThisMonthOrders.length > 0 ? totalMoneyforThisMonthOrders[0].totalMoney : 0;

		const totalMoneyTillNow = await Order.aggregate([
			{
				$group: {
					_id: null,
					totalMoney: { $sum: "$totalPrice" },
				},
			},
		]);
		const totalMoneyTillNowValue = totalMoneyTillNow.length > 0 ? totalMoneyTillNow[0].totalMoney : 0;

		return NextResponse.json({
			success: true,
			data: {
				totalOrders,
				totalPendingOrders,
				totalCancelledOrders,
				totalDeliveredOrders,
				totalProcessingOrders,
				totalMoneyToday: totalMoney,
				totalMoneyThisMonth,
				totalMoneyTillNow: totalMoneyTillNowValue,
			}
		}, { status: 200 });

	} catch (e) {
		return NextResponse.json({ success: false, data: null }, { status: 500 });
	}
}