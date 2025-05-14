
import React, { useState } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import AdminDashboardContent from "../components/dashboard/AdminDashboardContent";

const AdminDashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader onMobileMenuToggle={toggleSidebar} userType="admin" />
      <div className="flex">
        <DashboardSidebar userType="admin" isOpen={sidebarOpen} />
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : ""}`}>
          <AdminDashboardContent />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
