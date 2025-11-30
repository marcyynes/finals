"use client";

import { Inter } from "next/font/google";
import { Sidebar } from "~/app/components/Sidebar"; 
import { Header } from "~/app/components/Header"; 
import React, { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

interface SettingTabProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}

const SettingTab: React.FC<SettingTabProps> = ({ title, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-150 ${
            isActive 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
        }`}
    >
        {title}
    </button>
);

const GeneralSettingsForm: React.FC = () => (
    <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Account Details</h2>
        
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Display Name</label>
            <input
                type="text"
                id="name"
                defaultValue="Admin"
                className="mt-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
                readOnly
            />
            <p className="mt-2 text-xs text-gray-500">Your name as it appears to other users (simulated).</p>
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
                type="email"
                id="email"
                defaultValue="admin@slayables.com"
                className="mt-1 block w-full max-w-lg rounded-md border-gray-300 shadow-sm bg-gray-50 px-3 py-2"
                readOnly
            />
            <p className="mt-2 text-xs text-red-500">Contact support to change your primary email.</p>
        </div>

        <button className="py-2 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition">
            Save Changes (Simulated)
        </button>
    </div>
);

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('General');

    return (
        <div className="flex min-h-screen">
            <Sidebar /> 
            
            <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
                <Header /> 
                <main className={`p-4 sm:p-8 ${inter.className} flex-1 overflow-y-auto`}>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        ⚙️ Application Settings
                    </h1>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="border-b border-gray-200 mb-6 flex space-x-4">
                            <SettingTab 
                                title="General" 
                                isActive={activeTab === 'General'} 
                                onClick={() => setActiveTab('General')} 
                            />
                            <SettingTab 
                                title="Security" 
                                isActive={activeTab === 'Security'} 
                                onClick={() => setActiveTab('Security')} 
                            />
                            <SettingTab 
                                title="Notifications" 
                                isActive={activeTab === 'Notifications'} 
                                onClick={() => setActiveTab('Notifications')} 
                            />
                        </div>

                        <div className="max-w-4xl">
                            {activeTab === 'General' && <GeneralSettingsForm />}
                            {activeTab === 'Security' && <p className="text-gray-600">Security settings content goes here, focusing on passwords and two-factor authentication.</p>}
                            {activeTab === 'Notifications' && <p className="text-gray-600">Notification preferences content goes here, featuring toggle switches and checkboxes.</p>}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}