import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ChartData {
    month: string;
    revenue: number;
}

const RevenueChart = ({ data }: { data: ChartData[] }) => {
    return (
        <Card className="w-full mt-8">
            <CardHeader>
                <CardTitle>Last One Year Product Demand</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                            <XAxis
                                dataKey="month"
                                className="text-xs"
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-2 border rounded-lg shadow-lg">
                                                <p className="text-sm font-medium">
                                                    Month: {payload[0].payload.month}
                                                </p>
                                                <p className="text-sm text-blue-600">
                                                    Selles: {payload[0].value}
                                                </p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="revenue"
                                stroke="#2563eb"
                                strokeWidth={2}
                                dot={{
                                    fill: '#2563eb',
                                    r: 4
                                }}
                                activeDot={{
                                    r: 6,
                                    fill: '#2563eb'
                                }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default RevenueChart;