
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-fee-blue-600 text-white font-bold text-xl p-2 rounded">
                EP
              </div>
              <span className="font-heading font-bold text-xl text-fee-blue-800">
                EduPay
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Streamlining student fee management for educational institutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-fee-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-fee-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-fee-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-fee-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-fee-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-fee-blue-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-fee-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-fee-blue-600 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-fee-blue-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-fee-blue-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-fee-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-fee-blue-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                123 Education Street
              </li>
              <li className="text-gray-600">
                Learning City, ED 12345
              </li>
              <li className="text-gray-600">
                support@edupay.com
              </li>
              <li className="text-gray-600">
                +1 (123) 456-7890
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} EduPay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
