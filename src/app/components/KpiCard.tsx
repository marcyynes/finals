"use client";
import React from 'react';

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({ title, value, change, isPositive, icon }) => {
  const changeColor = isPositive ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100';

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500 transform transition duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500 uppercase">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="mt-1 text-3xl font-extrabold text-gray-900">{value}</p>
      
      <div className="mt-3 flex items-center">
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${changeColor}`}>
          {change}
        </span>
        <span className="ml-2 text-xs text-gray-500">vs. Last Period</span>
      </div>
    </div>
  );
};