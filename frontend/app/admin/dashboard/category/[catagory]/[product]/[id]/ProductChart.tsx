'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartData {
    month: string;
    revenue: number;
}

export function ProductChart({ chartData }: { chartData: ChartData[] }) {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Sales Performance</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={chartData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" className="text-gray-200" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip
                                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                                contentStyle={{ background: '#fff', border: '1px solid #e2e8f0' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="revenue"
                                stroke="#2563eb"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}