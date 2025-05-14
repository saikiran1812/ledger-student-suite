
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  // Login form
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Register form
  const [registerCredentials, setRegisterCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentId: "",
    agreeTerms: false,
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginCredentials({
      ...loginCredentials,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterCredentials({
      ...registerCredentials,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to appropriate dashboard based on role in a real app
      // For demo, we'll just check a simple condition
      if (loginCredentials.email.includes("admin")) {
        navigate("/admin-dashboard");
      } else {
        navigate("/student-dashboard");
      }
    }, 1500);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/student-dashboard");
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
      <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={loginCredentials.email}
                onChange={handleLoginChange}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-fee-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  value={loginCredentials.password}
                  onChange={handleLoginChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-fee-blue-600 focus:ring-fee-blue-600"
                checked={loginCredentials.rememberMe}
                onChange={handleLoginChange}
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-fee-blue-600 hover:bg-fee-blue-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Sign In <ArrowRight size={16} />
                </div>
              )}
            </Button>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                New to EduPay?{" "}
                <a href="#" className="text-fee-blue-600 hover:underline" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[data-state="inactive"][value="register"]')?.click();
                }}>
                  Create an account
                </a>
              </p>
            </div>
          </form>
        </TabsContent>
        
        <TabsContent value="register">
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                value={registerCredentials.name}
                onChange={handleRegisterChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <Input
                id="register-email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={registerCredentials.email}
                onChange={handleRegisterChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                name="studentId"
                type="text"
                placeholder="ST12345"
                required
                value={registerCredentials.studentId}
                onChange={handleRegisterChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-password">Password</Label>
              <div className="relative">
                <Input
                  id="register-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  value={registerCredentials.password}
                  onChange={handleRegisterChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                value={registerCredentials.confirmPassword}
                onChange={handleRegisterChange}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-fee-blue-600 focus:ring-fee-blue-600"
                checked={registerCredentials.agreeTerms}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-fee-blue-600 hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-fee-blue-600 hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-fee-blue-600 hover:bg-fee-blue-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Registering...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Create Account <ArrowRight size={16} />
                </div>
              )}
            </Button>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="#" className="text-fee-blue-600 hover:underline" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[data-state="inactive"][value="login"]')?.click();
                }}>
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginForm;
