
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-blue-50 pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Streamline Your <span className="text-fee-blue-600">Student Fees</span> Management
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              A comprehensive solution for educational institutions to manage student fees efficiently, track payments, and generate reports easily.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="bg-fee-blue-600 hover:bg-fee-blue-700 text-white font-medium">
                <Link to="/login">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-fee-blue-500 text-fee-blue-600 hover:bg-fee-blue-50 font-medium">
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-fee-blue-600" />
                <span className="text-gray-700">Easy Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-fee-blue-600" />
                <span className="text-gray-700">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-fee-blue-600" />
                <span className="text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -right-4 -top-4 bg-fee-blue-100 text-fee-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                New
              </div>
              <div className="bg-gray-100 h-64 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Powerful Dashboard</h3>
              <p className="text-gray-600 text-sm mb-4">Track payments, manage fees, and generate reports with our intuitive dashboard.</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-gray-500 text-sm">+ 258 institutions</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-[180px] animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center justify-center mb-2 bg-green-100 text-green-600 w-10 h-10 rounded-full">
                <CheckCircle size={20} />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">98% of users</span> report improved fee collection rates
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="hidden lg:block absolute top-40 right-0 w-1/3 h-64 bg-fee-blue-100 rounded-l-full opacity-20 -z-10"></div>
      <div className="hidden lg:block absolute bottom-20 left-0 w-1/4 h-40 bg-fee-blue-100 rounded-r-full opacity-20 -z-10"></div>
    </div>
  );
};

export default Hero;
