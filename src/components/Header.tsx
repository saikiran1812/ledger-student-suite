
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-fee-blue-600 text-white font-bold text-xl p-2 rounded">
              EP
            </div>
            <span className="font-heading font-bold text-xl text-fee-blue-800">
              EduPay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`nav-link ${isActive("/features") ? "active" : ""}`}
            >
              Features
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="font-medium border-fee-blue-500 text-fee-blue-600 hover:bg-fee-blue-50"
            >
              <Link to="/login">Log In</Link>
            </Button>
            <Button 
              size="sm" 
              asChild
              className="font-medium bg-fee-blue-600 hover:bg-fee-blue-700"
            >
              <Link to="/login">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-fee-blue-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-gray-800 py-2 ${isActive("/") ? "font-semibold text-fee-blue-600" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className={`text-gray-800 py-2 ${isActive("/features") ? "font-semibold text-fee-blue-600" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/contact"
                className={`text-gray-800 py-2 ${isActive("/contact") ? "font-semibold text-fee-blue-600" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col pt-2 space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="w-full justify-center border-fee-blue-500 text-fee-blue-600 hover:bg-fee-blue-50"
                >
                  <Link to="/login">Log In</Link>
                </Button>
                <Button 
                  size="sm" 
                  asChild
                  className="w-full justify-center bg-fee-blue-600 hover:bg-fee-blue-700"
                >
                  <Link to="/login">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
