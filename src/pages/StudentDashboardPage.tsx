
import React, { useState } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import StudentDashboardContent from "../components/dashboard/StudentDashboardContent";

const StudentDashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader onMobileMenuToggle={toggleSidebar} userType="student" />
      <div className="flex">
        <DashboardSidebar userType="student" isOpen={sidebarOpen} />
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : ""}`}>
          <StudentDashboardContent />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
