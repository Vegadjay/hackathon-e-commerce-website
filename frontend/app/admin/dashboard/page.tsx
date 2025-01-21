'use client';

import React from 'react';
import { ShoppingCart, Package, Box, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CategoryGrid from '@/app/admin/dashboard/components/catagorygrid';

const DashboardStats = () => {
    const stats = [
        {
            title: 'Today Order',
            amount: 'Rs. 300',
            bgColor: 'bg-teal-600',
        },
        {
            title: 'This Month',
            amount: 'Rs.5000',
            bgColor: 'bg-blue-500',
        },
        {
            title: 'Total Order',
            amount: 'Rs. 95000',
            bgColor: 'bg-green-600',
        },
    ];

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

    const orderStats = [
        {
            label: 'Total Order',
            value: '169',
            icon: ShoppingCart,
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-500',
        },
        {
            label: 'Order Pending',
            value: '34',
            icon: Package,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-500',
        },
        {
            label: 'Order Processing',
            value: '59',
            icon: Box,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-500',
        },
        {
            label: 'Order Delivered',
            value: '65',
            icon: Check,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-500',
        },
    ];

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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {orderStats.map((stat, index) => (
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
                <h3 className="text-lg font-semibold mb-4">Last Year Sales Overview (2023) </h3>
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
