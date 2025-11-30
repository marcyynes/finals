"use client";

import { Inter } from "next/font/google";
import { Sidebar } from "~/app/components/Sidebar"; 
import { Header } from "~/app/components/Header"; 
import React, { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

// --- Interfaces ---
interface Customer {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Inactive" | "New";
  orders: number;
  totalSpent: number;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// --- Mock Data (Expanded for Pagination) ---
const allCustomers: Customer[] = [
  // Page 1 Data
  { id: 101, name: "Maria Anders", email: "maria@example.com", status: "Active", orders: 12, totalSpent: 1250.50 },
  { id: 102, name: "Alfred Schmidt", email: "alfred@example.com", status: "Inactive", orders: 3, totalSpent: 99.99 },
  { id: 103, name: "Françoise B.", email: "fran@example.com", status: "Active", orders: 25, totalSpent: 4500.00 },
  { id: 104, name: "Thomas Hardy", email: "thomas@example.com", status: "New", orders: 1, totalSpent: 15.00 },
  // Page 2 Data
  { id: 105, name: "Christina Berglund", email: "christina@berglunds.com", status: "Active", orders: 8, totalSpent: 850.00 },
  { id: 106, name: "Hanna Moos", email: "hanna@blauer.com", status: "Inactive", orders: 0, totalSpent: 0.00 },
  { id: 107, name: "Fredrique Citeaux", email: "fred@citeaux.com", status: "New", orders: 2, totalSpent: 45.50 },
  { id: 108, name: "Martin Sommer", email: "martin@bolido.com", status: "Active", orders: 15, totalSpent: 3200.00 },
];

// --- Components ---

// 1. Status Pill
const StatusPill: React.FC<{ status: string }> = ({ status }) => { 
    const color = status === "Active" ? "bg-green-100 text-green-700" : status === "Inactive" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700";
    return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${color}`}>{status}</span>
};

// 2. Add Customer Modal
const AddCustomerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-lg transition-opacity">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h3 className="text-xl font-bold text-gray-800">Add New Customer</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
                </div>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Jane Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="jane@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500">
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>New</option>
                        </select>
                    </div>
                    <div className="pt-4 flex space-x-3">
                        <button type="button" onClick={onClose} className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">Cancel</button>
                        <button type="submit" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Create Customer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- Main Page ---
export default function CustomersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Pagination Logic
  const totalPages = Math.ceil(allCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCustomers = allCustomers.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex min-h-screen">
      <Sidebar /> 
      <div className="flex-1 flex flex-col bg-gray-100 min-h-screen"> 
        <Header /> 
        <main className={`p-4 sm:p-8 ${inter.className} flex-1 overflow-y-auto`}>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            👤 Customer Management
          </h1>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-semibold">Customer List</p>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition shadow-sm"
                >
                    + Add New Customer
                </button>
            </div>
            
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead><tr className="bg-gray-50">{["ID", "Name", "Email", "Status", "Orders", "Total Spent"].map(header => (
                        <th key={header} className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                    ))}</tr></thead>
                    <tbody className="bg-white divide-y divide-gray-200">{currentCustomers.map(customer => (
                        <tr key={customer.id} className="hover:bg-gray-50">
                            <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{customer.id}</td>
                            <td className="px-3 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">{customer.name}</td>
                            <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                            <td className="px-3 py-4 whitespace-nowrap"><StatusPill status={customer.status} /></td>
                            <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">{customer.orders}</td>
                            <td className="px-3 py-4 whitespace-nowrap text-sm font-bold text-green-600">${customer.totalSpent.toFixed(2)}</td>
                        </tr>
                    ))}</tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-600 border-t pt-4">
                <span>Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, allCustomers.length)} of {allCustomers.length} entries</span>
                <div className="space-x-1 flex">
                    <button 
                        onClick={handlePrev} 
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    {/* Page 1 Button */}
                    <button 
                        onClick={() => setCurrentPage(1)}
                        className={`px-3 py-1 border rounded-lg ${currentPage === 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                    >
                        1
                    </button>
                    {/* Page 2 Button */}
                    <button 
                        onClick={() => setCurrentPage(2)}
                        className={`px-3 py-1 border rounded-lg ${currentPage === 2 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                    >
                        2
                    </button>
                    <button 
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
          </div>
        </main>

        {/* Modal Injection */}
        <AddCustomerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}