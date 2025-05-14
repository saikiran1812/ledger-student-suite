
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="py-6 px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-fee-blue-600 text-white font-bold text-xl p-2 rounded">
            EP
          </div>
          <span className="font-heading font-bold text-xl text-fee-blue-800">
            EduPay
          </span>
        </Link>
      </div>
      
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:w-1/2 bg-fee-blue-600 text-white p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Welcome to EduPay</h2>
              <p className="text-blue-100">
                The complete student fee management solution that streamlines payments, tracking, and reporting.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-white text-fee-blue-600 h-6 w-6 rounded-full flex items-center justify-center mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-blue-100">Secure and easy payment collection</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-white text-fee-blue-600 h-6 w-6 rounded-full flex items-center justify-center mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-blue-100">Real-time tracking of fee dues and payments</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-white text-fee-blue-600 h-6 w-6 rounded-full flex items-center justify-center mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-blue-100">Automatic invoicing and receipt generation</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-white text-fee-blue-600 h-6 w-6 rounded-full flex items-center justify-center mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-blue-100">Comprehensive reporting and analytics</p>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-blue-400">
              <p className="text-sm text-blue-100">
                Need assistance? Contact our support team at{" "}
                <a href="mailto:support@edupay.com" className="underline">support@edupay.com</a>
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
      
      <div className="py-6 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} EduPay. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
