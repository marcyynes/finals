"use client";

import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { monthlyRevenue } from "~/data/mockData";

interface MonthlyRevenueData {
    name: string;
    Sales: number;
}

const RevenueChart: React.FC = () => {
    const data = monthlyRevenue as MonthlyRevenueData[];

    return (
        <div className="h-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Monthly Revenue Trend</h2>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" stroke="#333" />
                    <YAxis 
                        // FIX: Explicitly cast value to number here
                        tickFormatter={(value) => `$${(value as number).toLocaleString()}`} 
                        stroke="#333" 
                    />
                    <Tooltip 
                        // FIX: Explicitly cast value to number here as well
                        formatter={(value) => [`$${(value as number).toLocaleString()}`, 'Sales']} 
                        labelFormatter={(label) => `Month: ${label}`}
                        contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="Sales" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueChart;