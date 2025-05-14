
import React from "react";
import { 
  FileText, 
  CreditCard, 
  PieChart, 
  Users, 
  Bell, 
  Shield
} from "lucide-react";

const features = [
  {
    icon: <FileText className="h-6 w-6 text-fee-blue-600" />,
    title: "Fee Structure Management",
    description: "Create and manage various fee structures based on courses, grades, and terms.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-fee-blue-600" />,
    title: "Payment Processing",
    description: "Accept payments through multiple methods including credit cards, bank transfers, and cash.",
  },
  {
    icon: <PieChart className="h-6 w-6 text-fee-blue-600" />,
    title: "Financial Reports",
    description: "Generate detailed reports on collections, dues, and financial forecasting.",
  },
  {
    icon: <Users className="h-6 w-6 text-fee-blue-600" />,
    title: "Student Management",
    description: "Maintain student profiles with payment histories and outstanding balances.",
  },
  {
    icon: <Bell className="h-6 w-6 text-fee-blue-600" />,
    title: "Payment Reminders",
    description: "Automated notifications to remind students and parents about upcoming dues.",
  },
  {
    icon: <Shield className="h-6 w-6 text-fee-blue-600" />,
    title: "Secure Data",
    description: "Bank-grade encryption for all financial transactions and student information.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Student Fees
          </h2>
          <p className="text-gray-600">
            Our comprehensive set of features helps educational institutions streamline fee management, improve collection rates, and save administrative time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-fee-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
