"use client";
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { categorySales } from "~/data/mockData";

const CategoryChart: React.FC = () => {
  return (
    <div className="h-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales by Category</h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart 
          data={categorySales} 
          layout="vertical" 
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" horizontal={false} />
          <XAxis type="number" stroke="#333" tickFormatter={(value) => `$${(value as number / 1000).toFixed(0)}k`} />
          <YAxis dataKey="category" type="category" stroke="#333" />
          <Tooltip 
            formatter={(value) => [`$${(value as number).toLocaleString()}`, 'Total Sales']}
            contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <Bar 
            dataKey="sales" 
            fill="#8884d8" 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;