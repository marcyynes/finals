"use client";

import { Inter } from "next/font/google";
import { Sidebar } from "~/app/components/Sidebar"; 
import { Header } from "~/app/components/Header"; 
import React, { useState } from 'react'; 
import Image from 'next/image'; // Import the Image component

const inter = Inter({ subsets: ["latin"] });

interface Product {
    name: string;
    price: number;
    stock: number;
    sku: string; 
    imageUrl: string; // Added imageUrl to the Product interface
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

const EditProductModal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-lg transition-opacity">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100 border border-gray-100">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h3 className="text-xl font-bold text-gray-800">Edit Product</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        ✕
                    </button>
                </div>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input 
                            type="text" 
                            defaultValue={product.name} 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                            <input 
                                type="number" 
                                defaultValue={product.price} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Stock</label>
                            <input 
                                type="number" 
                                defaultValue={product.stock} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex space-x-3">
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

interface ProductCardProps extends Product {
    onEdit: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, stock, sku, imageUrl, onEdit }) => (
  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-200 flex flex-col h-full justify-between">
    <div> 
      {/* Replaced placeholder div with Next.js Image component */}
      <div className="h-32 relative rounded-lg mb-3 overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={name} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-2xl font-bold text-blue-600 my-1">${price.toFixed(2)}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>SKU: {sku}</span>
        <span className={stock > 10 ? "text-green-500" : "text-red-500"}>
          {stock} in Stock
        </span>
      </div>
    </div> 

    <button 
        onClick={() => onEdit({ name, price, stock, sku, imageUrl })} // Pass imageUrl in onEdit
        className="mt-3 w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
    >
      Edit Details
    </button>
  </div>
);

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    { name: "Luxury Watch", price: 499.99, stock: 15, sku: "#9281", imageUrl: "/display1.png" },
    { name: "Gaming Mouse", price: 79.99, stock: 5, sku: "#4421", imageUrl: "/display2.png" },
    { name: "Coffee Maker", price: 129.50, stock: 30, sku: "#8812", imageUrl: "/display3.png" },
    { name: "Noise Cancelling Headphones", price: 249.00, stock: 22, sku: "#3391", imageUrl: "/display4.png" },
  ];

  const handleEditClick = (product: Product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar /> 
      <div className="flex-1 flex flex-col bg-gray-100 min-h-screen"> 
        <Header /> 
        <main className={`p-4 sm:p-8 ${inter.className} flex-1 overflow-y-auto`}>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            📦 Product Inventory
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
            {products.map((p, i) => (
              <ProductCard 
                key={i} 
                {...p} 
                onEdit={handleEditClick} 
              />
            ))}
          </div>
        </main>

        <EditProductModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            product={selectedProduct} 
        />
      </div>
    </div>
  );
}