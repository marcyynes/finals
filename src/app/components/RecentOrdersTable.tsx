"use client";
import React from 'react';
import { recentOrders } from "~/data/mockData"; 

// 1. Define the Interface for a single order item
interface Order {
  id: string;
  customer: string;
  status: 'Delivered' | 'Shipped' | 'Pending' | 'Cancelled';
  total: number;
}

// 2. Define the Interface for the StatusBadge props
interface StatusBadgeProps {
  status: Order['status']; // Reuse the status type from the Order interface
}

// 3. Apply the StatusBadgeProps interface
const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let color = 'bg-gray-200 text-gray-800';
  if (status === 'Delivered') color = 'bg-green-100 text-green-700';
  else if (status === 'Shipped') color = 'bg-blue-100 text-blue-700';
  else if (status === 'Pending') color = 'bg-yellow-100 text-yellow-700';
  else if (status === 'Cancelled') color = 'bg-red-100 text-red-700';

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${color}`}>
      {status}
    </span>
  );
};

const RecentOrdersTable: React.FC = () => {
  // NOTE: You would typically cast recentOrders as Order[] if the file structure allowed,
  // but for a clean component, we assume the import is correct.
  const data = recentOrders as Order[];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 cursor-pointer">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  ${order.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrdersTable;