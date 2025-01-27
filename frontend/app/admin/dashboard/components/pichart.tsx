'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Sector, Label, Legend } from 'recharts';

const data = [
    { month: "January", sales: 3186, fill: "#4F46E5" },
    { month: "February", sales: 2305, fill: "#60A5FA" },
    { month: "March", sales: 4237, fill: "#22C55E" },
    { month: "April", sales: 4173, fill: "#FACC15" },
    { month: "May", sales: 5209, fill: "#F87171" },
    { month: "June", sales: 3412, fill: "#34D399" },
    { month: "July", sales: 2891, fill: "#9333EA" },
    { month: "August", sales: 4102, fill: "#FB923C" },
    { month: "September", sales: 3789, fill: "#3B82F6" },
    { month: "October", sales: 4920, fill: "#EF4444" },
    { month: "November", sales: 4592, fill: "#FBBF24" },
    { month: "December", sales: 5300, fill: "#10B981" },
];

function PieChartComponent() {
    const [activeMonth, setActiveMonth] = useState<string>(data[0].month);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Ensures client-side rendering
    }, []);

    const activeIndex = useMemo(
        () => data.findIndex((item) => item.month === activeMonth),
        [activeMonth]
    );

    if (!isMounted) {
        return null; // Render nothing on the server to prevent mismatch
    }

    return (
        <div className="p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Monthly Sales Overview</h1>
                <p className="text-gray-600">
                    Click on a section of the pie chart to view detailed sales data.
                </p>
            </div>

            {/* Active Month Info */}
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-semibold capitalize text-gray-700">{activeMonth}</h2>
                <p className="text-gray-500">
                    Total sales for <strong>{activeMonth}</strong>:{' '}
                    <span className="text-indigo-600 font-bold">
                        {data[activeIndex]?.sales.toLocaleString()}
                    </span>
                </p>
            </div>

            {/* Pie Chart Section */}
            <div className="flex justify-center">
                <PieChart width={600} height={400}>
                    <Pie
                        data={data}
                        dataKey="sales"
                        nameKey="month"
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={150}
                        activeIndex={activeIndex}
                        activeShape={({ outerRadius = 0, ...props }) => (
                            <g>
                                <Sector {...props} outerRadius={outerRadius + 12} />
                                <Sector
                                    {...props}
                                    outerRadius={outerRadius + 22}
                                    innerRadius={outerRadius + 14}
                                />
                            </g>
                        )}
                        onClick={(data) => setActiveMonth(data.month)}
                        animationDuration={500}
                    >
                        {/* Centered Label */}
                        <Label
                            content={({ viewBox }) =>
                                viewBox && 'cx' in viewBox && 'cy' in viewBox ? (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className="text-lg font-semibold text-gray-800"
                                    >
                                        {data[activeIndex]?.sales.toLocaleString()}
                                    </text>
                                ) : null
                            }
                        />
                    </Pie>
                    <Tooltip />
                    <Legend layout="vertical" align="right" verticalAlign="middle" />
                </PieChart>
            </div>
        </div>
    );
}

export default PieChartComponent;
