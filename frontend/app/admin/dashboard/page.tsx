'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingCart, Package, Box, Check, Ban } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CategoryGrid from '@/app/admin/dashboard/components/catagorygrid';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';

interface OrderStats {
    totalOrders: number;
    totalPendingOrders: number;
    totalCancelledOrders: number;
    totalDeliveredOrders: number;
    totalProcessingOrders: number;
    totalMoneyToday: number;
    totalMoneyThisMonth: number;
    totalMoneyTillNow: number;
}

const DashboardStats = () => {
    const [orderStats, setOrderStats] = useState<OrderStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchOrderStats = async () => {
            try {
                const response = await fetch('/api/admin/order');
                if (!response.ok) throw new Error('Failed to fetch order statistics');
                const result = await response.json();
                if (result.success && result.data) {
                    setOrderStats(result.data);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (err: any) {
                console.error('Error fetching order stats:', err);
                setError(err.message || 'Failed to load order statistics');
            } finally {
                setIsLoading(false);
            }
        };

        fetchOrderStats();
    }, []);

    const handleChnagePage = () => {
        router.push("/admin/dashboard/orders")
    }

    const handleCheckUser = () => {
        router.push("/admin/dashboard/users")
    }

    const stats = orderStats ? [
        {
            title: 'Today Order',
            amount: `₹${orderStats.totalMoneyToday.toLocaleString('en-IN')}`,
            bgColor: 'bg-teal-600',
        },
        {
            title: 'This Month',
            amount: `₹${orderStats.totalMoneyThisMonth.toLocaleString('en-IN')}`,
            bgColor: 'bg-blue-500',
        },
        {
            title: 'Total Revenue',
            amount: `₹${orderStats.totalMoneyTillNow.toLocaleString('en-IN')}`,
            bgColor: 'bg-green-600',
        },
    ] : [];

    const orderStatusCards = orderStats ? [
        {
            label: 'Total Orders',
            value: orderStats.totalOrders.toString(),
            icon: ShoppingCart,
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-500',
        },
        {
            label: 'Orders Pending',
            value: orderStats.totalPendingOrders.toString(),
            icon: Package,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-500',
        },
        {
            label: 'Orders Processing',
            value: orderStats.totalProcessingOrders.toString(),
            icon: Box,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-500',
        },
        {
            label: 'Orders Delivered',
            value: orderStats.totalDeliveredOrders.toString(),
            icon: Check,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-500',
        },
        {
            label: 'Orders Cancelled',
            value: orderStats.totalCancelledOrders.toString(),
            icon: Ban,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-500',
        },
    ] : [];

    const product = [{
        chartData: [
            { month: 'Jan', "Total Sales": 30299 },
            { month: 'Feb', "Total Sales": 29288 },
            { month: 'Mar', "Total Sales": 36805 },
            { month: 'Apr', "Total Sales": 36201 },
            { month: 'May', "Total Sales": 33738 },
            { month: 'Jun', "Total Sales": 31049 },
            { month: 'Jul', "Total Sales": 31570 },
            { month: 'Aug', "Total Sales": 36660 },
            { month: 'Sep', "Total Sales": 37550 },
            { month: 'Oct', "Total Sales": 33678 },
            { month: 'Nov', "Total Sales": 33764 },
            { month: 'Dec', "Total Sales": 29824 },
        ],
    }];

    if (isLoading) {
        return (
            <Loader/>
        );
    }

    if (error) {
        return (
            <div className="p-6">
                <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-6">
                        <h3 className="text-red-600 text-lg font-semibold">Error Loading Dashboard</h3>
                        <p className="text-red-500 mt-2">{error}</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                    <Card key={index} className={`${stat.bgColor} text-white`}>
                        <CardContent className="p-6">
                            <h3 className="text-sm font-medium opacity-80">{stat.title}</h3>
                            <p className="text-2xl font-bold mt-2">{stat.amount}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {orderStatusCards.map((stat, index) => (
                    <Card key={index} className="border">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className={`${stat.bgColor} p-3 rounded-full`}>
                                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                                <p className="text-xl font-bold">{stat.value}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
                <div className='flex justify-between'>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Last Year Sales Overview (2024)</h3>
                    </div>
                    <div className='flex gap-5'>
                        <button className='p-4 bg-blue-300 border border-black rounded-full h-10 w-56 items-center justify-center flex'
                            onClick={handleCheckUser}>Check All Users</button>
                        <button className='p-4 bg-red-300 border border-black rounded-full h-10 w-56 items-center justify-center flex'
                            onClick={handleChnagePage}>Check All Order</button>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={product[0].chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Total Sales" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <CategoryGrid />
        </div>
    );
};

export default DashboardStats;