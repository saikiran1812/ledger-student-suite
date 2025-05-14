
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, 
  Search, 
  Bell, 
  MessageSquare, 
  ChevronDown,
  LogOut,
  Settings,
  User
} from "lucide-react";
import { Button } from "../ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardHeaderProps {
  onMobileMenuToggle: () => void;
  userType: "student" | "admin";
}

const DashboardHeader = ({ onMobileMenuToggle, userType }: DashboardHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="text-gray-600 lg:hidden"
            onClick={onMobileMenuToggle}
          >
            <Menu size={24} />
          </button>
          <Link to={userType === "admin" ? "/admin-dashboard" : "/student-dashboard"} className="flex items-center gap-2">
            <div className="bg-fee-blue-600 text-white font-bold text-sm p-1.5 rounded">
              EP
            </div>
            <span className="font-heading font-bold text-lg text-fee-blue-800 hidden sm:inline">
              EduPay
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
          <Search size={18} className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-fee-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-gray-600 hover:text-fee-blue-600 hover:bg-gray-100 rounded-full relative">
            <Bell size={20} />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
          
          <button className="p-2 text-gray-600 hover:text-fee-blue-600 hover:bg-gray-100 rounded-full">
            <MessageSquare size={20} />
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 hover:bg-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-fee-blue-100 flex items-center justify-center text-fee-blue-600 font-semibold text-sm">
                  {userType === "admin" ? "A" : "S"}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">
                    {userType === "admin" ? "Admin User" : "John Doe"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {userType === "admin" ? "Administrator" : "Student ID: ST12345"}
                  </p>
                </div>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center gap-2 p-2">
                <div className="w-10 h-10 rounded-full bg-fee-blue-100 flex items-center justify-center text-fee-blue-600 font-semibold">
                  {userType === "admin" ? "A" : "S"}
                </div>
                <div>
                  <p className="font-medium">
                    {userType === "admin" ? "Admin User" : "John Doe"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {userType === "admin" ? "admin@edupay.com" : "john.doe@example.com"}
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User size={16} className="mr-2" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings size={16} className="mr-2" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600" asChild>
                <Link to="/login">
                  <LogOut size={16} className="mr-2" />
                  <span>Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
