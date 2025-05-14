
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../ui/card";
import {
  TrendingUp,
  TrendingDown,
  Users,
  CreditCard,
  FileBarChart,
  AlertCircle,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle,
  DollarSign,
  Search
} from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Link } from "react-router-dom";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const monthlyCollectionData = [
  { month: 'Jan', collected: 45000, target: 50000 },
  { month: 'Feb', collected: 52000, target: 50000 },
  { month: 'Mar', collected: 48000, target: 50000 },
  { month: 'Apr', collected: 61000, target: 60000 },
  { month: 'May', collected: 55000, target: 60000 },
  { month: 'Jun', collected: 67000, target: 70000 },
  { month: 'Jul', collected: 72000, target: 70000 },
  { month: 'Aug', collected: 69000, target: 70000 },
  { month: 'Sep', collected: 74000, target: 70000 },
  { month: 'Oct', collected: 65000, target: 70000 },
  { month: 'Nov', collected: 0, target: 80000 },
  { month: 'Dec', collected: 0, target: 80000 },
];

const feeStatusData = [
  { name: 'Paid', value: 68 },
  { name: 'Pending', value: 22 },
  { name: 'Overdue', value: 10 },
];

const COLORS = ['#4ade80', '#fbbf24', '#ef4444'];

const AdminDashboardContent = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with fee collections today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Collection Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Collection (This Month)</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-1" />
              $74,000
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">5.8% increase</span>
              <span className="text-xs text-gray-500 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Collection Rate Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Collection Rate</CardDescription>
            <CardTitle className="text-2xl">83%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500">Target: 90%</span>
              <span className="text-xs font-medium text-fee-blue-600">83%</span>
            </div>
            <Progress value={83} className="h-2" />
          </CardContent>
        </Card>

        {/* Pending Payments Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending Payments</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-1" />
              $158,400
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-amber-600">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">154 students</span>
              <span className="text-xs text-gray-500 ml-2">with pending dues</span>
            </div>
          </CardContent>
        </Card>

        {/* Overdue Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Overdue Payments</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-1" />
              $42,500
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-red-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">53 students</span>
              <span className="text-xs text-gray-500 ml-2">with overdue fees</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Monthly Collection Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Monthly Collections</CardTitle>
              <Button variant="outline" size="sm" className="h-8 gap-1 text-xs border-fee-blue-500 text-fee-blue-600 hover:bg-fee-blue-50">
                <FileBarChart size={14} />
                <span>Download Report</span>
              </Button>
            </div>
            <CardDescription>Fee collection analytics for the year 2023-24</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={monthlyCollectionData}
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#64748b" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="collected"
                  name="Collected"
                  stroke="#2563eb"
                  fillOpacity={1}
                  fill="url(#colorCollected)"
                />
                <Area
                  type="monotone"
                  dataKey="target"
                  name="Target"
                  stroke="#64748b"
                  strokeDasharray="5 5"
                  fillOpacity={0}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Fee Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Fee Status Distribution</CardTitle>
            <CardDescription>Current payment status across all students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={feeStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {feeStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities and Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Recent Activities</CardTitle>
              <Button variant="link" className="p-0 h-auto text-sm text-fee-blue-600">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 relative">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gray-200"></div>
                </div>
                <div>
                  <p className="text-sm font-medium flex items-center justify-between">
                    <span>Payment Received</span>
                    <span className="text-xs text-gray-500">10:25 AM</span>
                  </p>
                  <p className="text-sm text-gray-600">Emma Thompson paid $1,200 for Term 2 fees</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 relative">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-4 w-4 text-fee-blue-600" />
                  </div>
                  <div className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gray-200"></div>
                </div>
                <div>
                  <p className="text-sm font-medium flex items-center justify-between">
                    <span>New Student Added</span>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </p>
                  <p className="text-sm text-gray-600">Michael Johnson was added to Grade 10-B</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 relative">
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center">
                    <FileBarChart className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gray-200"></div>
                </div>
                <div>
                  <p className="text-sm font-medium flex items-center justify-between">
                    <span>Report Generated</span>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </p>
                  <p className="text-sm text-gray-600">Monthly collection report for October was generated</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium flex items-center justify-between">
                    <span>Fee Structure Updated</span>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </p>
                  <p className="text-sm text-gray-600">Technology fee was updated for all grades</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions and Upcoming Deadlines */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button className="h-auto py-3 bg-fee-blue-600 hover:bg-fee-blue-700">
                  <div className="flex flex-col items-center">
                    <Users className="h-5 w-5 mb-1" />
                    <span className="text-xs">Add Student</span>
                  </div>
                </Button>
                <Button className="h-auto py-3 bg-fee-blue-600 hover:bg-fee-blue-700">
                  <div className="flex flex-col items-center">
                    <CreditCard className="h-5 w-5 mb-1" />
                    <span className="text-xs">Record Payment</span>
                  </div>
                </Button>
                <Button className="h-auto py-3 bg-fee-blue-600 hover:bg-fee-blue-700">
                  <div className="flex flex-col items-center">
                    <FileBarChart className="h-5 w-5 mb-1" />
                    <span className="text-xs">Generate Report</span>
                  </div>
                </Button>
                <Button className="h-auto py-3 bg-fee-blue-600 hover:bg-fee-blue-700">
                  <div className="flex flex-col items-center">
                    <AlertCircle className="h-5 w-5 mb-1" />
                    <span className="text-xs">Send Reminders</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Student Search */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Quick Student Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search by name or ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fee-blue-500"
                />
              </div>
              <div className="mt-3">
                <div className="text-sm text-gray-500">Recent searches:</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    John Smith (ST10045)
                  </Button>
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    Sarah Johnson (ST10067)
                  </Button>
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    Michael Brown (ST10089)
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Fee Collection Calendar */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center">
              <CalendarCheck className="h-5 w-5 mr-2 text-fee-blue-500" />
              <span>Fee Collection Calendar</span>
            </CardTitle>
            <Link 
              to="/admin-dashboard/payments" 
              className="text-sm text-fee-blue-600 hover:underline flex items-center"
            >
              View Full Calendar
              <ArrowUpRight size={14} className="ml-1" />
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 border border-green-200 bg-green-50 rounded-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Term 2 Tuition</span>
                <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Due Date:</span>
                  <span className="text-gray-900">Oct 15, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Collection:</span>
                  <span className="text-gray-900">68% ($120,400)</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">Progress</span>
                  <span className="text-xs text-green-600 font-medium">68%</span>
                </div>
                <Progress value={68} className="h-1.5" />
              </div>
            </div>
            
            <div className="p-3 border border-blue-200 bg-blue-50 rounded-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Library Fee</span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                  Upcoming
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Due Date:</span>
                  <span className="text-gray-900">Nov 5, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected:</span>
                  <span className="text-gray-900">$45,000</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">Preparation</span>
                  <span className="text-xs text-blue-600 font-medium">75%</span>
                </div>
                <Progress value={75} className="h-1.5" />
              </div>
            </div>
            
            <div className="p-3 border border-blue-200 bg-blue-50 rounded-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Exam Fee</span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                  Upcoming
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Due Date:</span>
                  <span className="text-gray-900">Nov 30, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected:</span>
                  <span className="text-gray-900">$65,000</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">Preparation</span>
                  <span className="text-xs text-blue-600 font-medium">40%</span>
                </div>
                <Progress value={40} className="h-1.5" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardContent;
