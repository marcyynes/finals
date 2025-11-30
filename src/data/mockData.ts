// src/data/mockData.ts

// --- 1. KPI Data ---
export const kpiData = [
  {
    title: "Total Revenue",
    value: "$2.4M",
    change: "+12.5%",
    isPositive: true,
    icon: "💵",
  },
  {
    title: "Total Orders",
    value: "15,890",
    change: "+4.1%",
    isPositive: true,
    icon: "📦",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-0.5%",
    isPositive: false,
    icon: "🛒",
  },
  {
    title: "Avg. Order Value (AOV)",
    value: "$150.99",
    change: "+8.2%",
    isPositive: true,
    icon: "🛍️",
  },
];

// --- 2. Monthly Revenue Data (for Line Chart) ---
export const monthlyRevenue = [
  { name: 'Jan', Sales: 65000 },
  { name: 'Feb', Sales: 72000 },
  { name: 'Mar', Sales: 81000 },
  { name: 'Apr', Sales: 69000 },
  { name: 'May', Sales: 95000 },
  { name: 'Jun', Sales: 102000 },
  { name: 'Jul', Sales: 115000 },
  { name: 'Aug', Sales: 128000 },
  { name: 'Sep', Sales: 110000 },
  { name: 'Oct', Sales: 135000 },
  { name: 'Nov', Sales: 145000 },
  { name: 'Dec', Sales: 155000 },
];

// --- 3. Product Category Breakdown (for Bar Chart) ---
export const categorySales = [
  { category: 'Electronics', sales: 450000 },
  { category: 'Apparel', sales: 320000 },
  { category: 'Home Goods', sales: 210000 },
  { category: 'Books', sales: 150000 },
  { category: 'Outdoor Gear', sales: 90000 },
];

// --- 4. Recent Orders (for Data Table) ---
export const recentOrders = [
  { id: '#1001', customer: 'Alice Johnson', status: 'Shipped', total: 259.99 },
  { id: '#1002', customer: 'Bob Smith', status: 'Pending', total: 12.50 },
  { id: '#1003', customer: 'Charlie Brown', status: 'Delivered', total: 899.00 },
  { id: '#1004', customer: 'Diana Prince', status: 'Shipped', total: 45.99 },
  { id: '#1005', customer: 'Eve Adams', status: 'Cancelled', total: 30.00 },
];