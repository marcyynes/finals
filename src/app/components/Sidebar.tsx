"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', icon: '🏠', href: '/' }, 
  { name: 'Products', icon: '📦', href: '/products' },
  { name: 'Customers', icon: '👤', href: '/customers' },
  { name: 'Reports', icon: '📈', href: '/reports' },
  { name: 'Settings', icon: '⚙️', href: '/settings' },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname(); 
  
  return (
    <div className="flex h-screen flex-col bg-gray-900 text-white w-64 p-4 shadow-2xl transition-all duration-300">
      <div className="text-2xl font-bold mb-8 text-blue-400">
        NexCommerce
      </div>
      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center w-full p-3 rounded-lg transition duration-150 ease-in-out ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="text-sm text-gray-500 border-t border-gray-700 pt-4">
        Design by SlayablesWeb
      </div>
    </div>
  );
};