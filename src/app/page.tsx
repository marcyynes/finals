import { Inter } from "next/font/google";
import { KpiCard } from "~/app/components/KpiCard"; 
import RevenueChart from "~/app/components/RevenueChart"; 
import CategoryChart from "~/app/components/CategoryChart";
import RecentOrdersTable from "~/app/components/RecentOrdersTable"; 
import { Header } from "~/app/components/Header"; 
import { Sidebar } from "~/app/components/Sidebar"; 
import { kpiData } from "../data/mockData"; 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      
      <Sidebar /> 

      <div className="flex-1 flex flex-col bg-gray-100">
        
        <Header /> 

        <main className={`p-4 sm:p-8 ${inter.className} flex-1 overflow-y-auto`}>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            E-Commerce Sales Overview
          </h1>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {kpiData.map((kpi) => (
              <KpiCard key={kpi.title} {...kpi} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            
            <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg h-[400px]">
                <RevenueChart />
            </div>
            
            <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-[400px]">
                <CategoryChart />
            </div>
            
            <div className="lg:col-span-4 bg-white p-0 rounded-xl shadow-lg">
                <RecentOrdersTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}