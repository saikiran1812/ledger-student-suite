
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../ui/card";
import {
  CalendarCheck,
  AlertCircle,
  FileText,
  ArrowUpRight,
  CheckCircle,
  DollarSign,
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
  BarChart,
  Bar,
  Legend
} from 'recharts';

const paymentHistoryData = [
  { month: 'Jan', amount: 0 },
  { month: 'Feb', amount: 1200 },
  { month: 'Mar', amount: 0 },
  { month: 'Apr', amount: 1200 },
  { month: 'May', amount: 0 },
  { month: 'Jun', amount: 0 },
  { month: 'Jul', amount: 1200 },
  { month: 'Aug', amount: 0 },
  { month: 'Sep', amount: 1200 },
  { month: 'Oct', amount: 0 },
  { month: 'Nov', amount: 0 },
  { month: 'Dec', amount: 0 },
];

const feeBreakdownData = [
  { name: 'Tuition', amount: 8500 },
  { name: 'Library', amount: 500 },
  { name: 'Technology', amount: 1200 },
  { name: 'Sports', amount: 800 },
  { name: 'Exam Fees', amount: 1000 },
];

const StudentDashboardContent = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
        <p className="text-gray-600">Welcome back, John! Here's an overview of your fee status.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Fee Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Fee (2023-24)</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-1" />
              $12,000.00
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Paid: $4,800.00</span>
              <span className="text-sm font-medium text-fee-blue-600">40%</span>
            </div>
            <Progress value={40} className="h-2 mt-2" />
          </CardContent>
        </Card>

        {/* Upcoming Payment Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Upcoming Payment</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-1" />
              $1,200.00
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Due Date</span>
              <div className="flex items-center gap-1 text-amber-600 font-medium">
                <AlertCircle size={14} />
                <span>15 Oct, 2023</span>
              </div>
            </div>
            <Button className="w-full text-sm h-8 bg-fee-blue-600 hover:bg-fee-blue-700" asChild>
              <Link to="/student-dashboard/payment">Pay Now</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Recent Payment</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <DollarSign className="h-5 w-5 text-gray-400 mr-1" />
              $1,200.00
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Sep 1, 2023</span>
              <div className="flex items-center gap-1 text-green-600 font-medium">
                <CheckCircle size={14} />
                <span>Successful</span>
              </div>
            </div>
            <Button variant="outline" className="w-full text-sm h-8 border-fee-blue-500 text-fee-blue-600 hover:bg-fee-blue-50" asChild>
              <Link to="/student-dashboard/payment-history">View Receipt</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment History Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Payment History</CardTitle>
              <Button variant="outline" size="sm" className="h-8 gap-1 text-xs border-fee-blue-500 text-fee-blue-600 hover:bg-fee-blue-50">
                <FileText size={14} />
                <span>Download Statement</span>
              </Button>
            </div>
            <CardDescription>Monthly fee payments for academic year 2023-24</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={paymentHistoryData}
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  formatter={(value) => [`$${value}`, 'Amount']}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#2563eb"
                  fillOpacity={1}
                  fill="url(#colorAmount)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Fee Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Fee Breakdown</CardTitle>
            <CardDescription>Distribution of your total fees</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={feeBreakdownData}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                <Bar dataKey="amount" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Upcoming Fees Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <CalendarCheck className="h-4 w-4 mr-2 text-fee-blue-500" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start p-2 bg-gray-50 rounded-md">
                <div className="flex-1">
                  <p className="text-sm font-medium">Term 2 Tuition Fee</p>
                  <p className="text-xs text-gray-500">Due: Oct 15, 2023</p>
                </div>
                <span className="bg-amber-100 text-amber-600 text-xs px-2 py-1 rounded-full font-medium">
                  Upcoming
                </span>
              </li>
              <li className="flex items-start p-2 bg-gray-50 rounded-md">
                <div className="flex-1">
                  <p className="text-sm font-medium">Library Fee</p>
                  <p className="text-xs text-gray-500">Due: Nov 5, 2023</p>
                </div>
                <span className="bg-amber-100 text-amber-600 text-xs px-2 py-1 rounded-full font-medium">
                  Upcoming
                </span>
              </li>
              <li className="flex items-start p-2 bg-gray-50 rounded-md">
                <div className="flex-1">
                  <p className="text-sm font-medium">Exam Registration Fee</p>
                  <p className="text-xs text-gray-500">Due: Nov 30, 2023</p>
                </div>
                <span className="bg-amber-100 text-amber-600 text-xs px-2 py-1 rounded-full font-medium">
                  Upcoming
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <CreditCard className="h-4 w-4 mr-2 text-fee-blue-500" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-xs">
                    VISA
                  </div>
                  <div>
                    <p className="text-sm font-medium">Visa ending in 4321</p>
                    <p className="text-xs text-gray-500">Expires 05/25</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                  Default
                </span>
              </li>
              <li className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center text-white font-bold text-xs">
                    MC
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mastercard ending in 8765</p>
                    <p className="text-xs text-gray-500">Expires 09/26</p>
                  </div>
                </div>
              </li>
            </ul>
            <Button variant="link" className="mt-3 h-8 p-0 text-sm text-fee-blue-600">
              + Add Payment Method
            </Button>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center">
                <Bell className="h-4 w-4 mr-2 text-fee-blue-500" />
                Recent Notifications
              </CardTitle>
              <Link 
                to="/student-dashboard/notifications"
                className="text-sm text-fee-blue-600 hover:underline flex items-center"
              >
                View All
                <ArrowUpRight size={14} className="ml-1" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-2 bg-gray-50 rounded-md">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-4 w-4 text-fee-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Fee Receipt Generated</p>
                  <p className="text-xs text-gray-500">Your receipt for September payment is ready.</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-2 bg-gray-50 rounded-md">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Payment Reminder</p>
                  <p className="text-xs text-gray-500">Term 2 tuition fee is due in 15 days.</p>
                  <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-2 bg-gray-50 rounded-md">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Payment Successful</p>
                  <p className="text-xs text-gray-500">Your payment of $1,200 was successful.</p>
                  <p className="text-xs text-gray-400 mt-1">3 days ago</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboardContent;
