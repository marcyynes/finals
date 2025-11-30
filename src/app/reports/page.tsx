import { Inter } from "next/font/google";
import { Sidebar } from "~/app/components/Sidebar"; 
import { Header } from "~/app/components/Header"; 
import RevenueChart from "~/app/components/RevenueChart"; 

const inter = Inter({ subsets: ["latin"] });

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> 
      <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        <Header /> 
        <main className={`p-4 sm:p-8 ${inter.className} flex-1 overflow-y-auto`}>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            📈 Sales Performance Reports
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg h-[500px]">
              <RevenueChart /> 
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">Annual Growth Rate</h3>
                <p className="text-5xl font-extrabold text-green-500">18.5%</p>
                <p className="text-sm text-gray-500 mt-2">Targeting 25% by year-end.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">Top Sales Region</h3>
                <p className="text-4xl font-extrabold text-blue-500">North America</p>
                <p className="text-sm text-gray-500 mt-2">Contributes 40% of total revenue.</p>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Detailed Traffic Sources</h3>
              <p className="text-gray-600">Showing breakdown of revenue by traffic channel.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}