
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard,
  FileText,
  CreditCard,
  CalendarCheck,
  Settings,
  Users,
  PieChart,
  Bell,
  FileBarChart,
  User
} from "lucide-react";

interface SidebarLink {
  icon: React.ReactNode;
  label: string;
  to: string;
  badge?: number;
}

interface DashboardSidebarProps {
  userType: "student" | "admin";
  isOpen: boolean;
}

const DashboardSidebar = ({ userType, isOpen }: DashboardSidebarProps) => {
  const studentLinks: SidebarLink[] = [
    { 
      icon: <LayoutDashboard size={18} />, 
      label: "Dashboard", 
      to: "/student-dashboard" 
    },
    { 
      icon: <FileText size={18} />, 
      label: "Fee Structure", 
      to: "/student-dashboard/fee-structure" 
    },
    { 
      icon: <CreditCard size={18} />, 
      label: "Make Payment", 
      to: "/student-dashboard/payment" 
    },
    { 
      icon: <FileBarChart size={18} />, 
      label: "Payment History", 
      to: "/student-dashboard/payment-history" 
    },
    { 
      icon: <Bell size={18} />, 
      label: "Notifications", 
      to: "/student-dashboard/notifications", 
      badge: 3 
    },
    { 
      icon: <User size={18} />, 
      label: "Profile", 
      to: "/student-dashboard/profile" 
    },
    { 
      icon: <Settings size={18} />, 
      label: "Settings", 
      to: "/student-dashboard/settings" 
    },
  ];

  const adminLinks: SidebarLink[] = [
    { 
      icon: <LayoutDashboard size={18} />, 
      label: "Dashboard", 
      to: "/admin-dashboard" 
    },
    { 
      icon: <Users size={18} />, 
      label: "Students", 
      to: "/admin-dashboard/students" 
    },
    { 
      icon: <FileText size={18} />, 
      label: "Fee Structure", 
      to: "/admin-dashboard/fee-structure" 
    },
    { 
      icon: <CalendarCheck size={18} />, 
      label: "Payments", 
      to: "/admin-dashboard/payments" 
    },
    { 
      icon: <PieChart size={18} />, 
      label: "Reports", 
      to: "/admin-dashboard/reports" 
    },
    { 
      icon: <Bell size={18} />, 
      label: "Notifications", 
      to: "/admin-dashboard/notifications", 
      badge: 5 
    },
    { 
      icon: <Settings size={18} />, 
      label: "Settings", 
      to: "/admin-dashboard/settings" 
    },
  ];

  const links = userType === "admin" ? adminLinks : studentLinks;

  return (
    <aside 
      className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 overflow-hidden transition-all duration-300 z-20 ${
        isOpen ? "w-64" : "w-0 lg:w-64"
      } flex flex-col`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="bg-fee-blue-600 text-white font-bold text-xl p-2 rounded">
            EP
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-fee-blue-800">
              EduPay
            </span>
            <span className="text-xs text-gray-500">
              {userType === "admin" ? "Admin Portal" : "Student Portal"}
            </span>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2.5 rounded-md text-sm transition-colors ${
                    isActive 
                      ? "bg-fee-blue-50 text-fee-blue-600 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                <span className="flex-shrink-0">{link.icon}</span>
                <span className="flex-1">{link.label}</span>
                {link.badge && (
                  <span className="bg-fee-blue-100 text-fee-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 mt-auto">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium mb-1">Need help?</div>
          <p className="text-xs text-gray-600 mb-2">
            Contact our support team for assistance with any issues.
          </p>
          <button className="text-fee-blue-600 text-xs font-medium hover:underline">
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
