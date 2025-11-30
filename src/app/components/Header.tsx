// src/app/components/Header.tsx
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 shadow-md flex items-center justify-between z-10 sticky top-0">
      
      <div className="relative flex items-center w-full max-w-lg">
        <input
          type="text"
          placeholder="Search reports, products, or customers..."
          className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          readOnly
        />
        <span className="absolute left-3 text-gray-400">🔍</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-xl text-gray-500 cursor-pointer hover:text-blue-500">🔔</span>
        <div className="flex items-center space-x-2 cursor-pointer p-1 rounded-full hover:bg-gray-100">
          <span className="text-gray-700 font-medium text-sm hidden sm:block">Admin</span>
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">A</div>
        </div>
      </div>
    </header>
  );
};