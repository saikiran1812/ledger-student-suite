
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  ArrowRight, 
  FileText, 
  CreditCard, 
  CalendarCheck, 
  PieChart, 
  Users,
  ShieldCheck,
  Bell,
  FileBarChart,
  Mail,
  Smartphone,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Fee Management <span className="text-fee-blue-600">Features</span>
              </h1>
              <p className="text-lg text-gray-600">
                Explore our rich set of features designed to make fee management simple, efficient, and effective for educational institutions of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-fee-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-fee-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fee Structure Management</h3>
                <p className="text-gray-600 mb-6">
                  Create custom fee structures based on courses, grades, terms, and scholarship categories. Easily update fee components as needs change.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Flexible fee components
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Grade-wise fee configuration
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Scholarship & concession support
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-fee-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-fee-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Processing</h3>
                <p className="text-gray-600 mb-6">
                  Accept payments through multiple methods including credit cards, bank transfers, and cash. Integrated payment gateway for online transactions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Multiple payment methods
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Secure payment processing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Instant receipt generation
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-fee-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CalendarCheck className="h-6 w-6 text-fee-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Tracking</h3>
                <p className="text-gray-600 mb-6">
                  Keep track of all payments, dues, and pending fees. Monitor payment status with intuitive dashboards and detailed reports.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Real-time payment status
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Overdue payment tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Payment history logs
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-fee-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileBarChart className="h-6 w-6 text-fee-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reports & Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Generate detailed reports on collections, dues, and financial forecasting. Gain insights with visual analytics and exportable data.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Collection efficiency reports
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Financial forecasting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Exportable data (PDF, Excel)
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-fee-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-fee-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Management</h3>
                <p className="text-gray-600 mb-6">
                  Maintain comprehensive student profiles with payment histories, outstanding balances, and academic information all in one place.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Student profiles & records
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Bulk student imports
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Parent portal access
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-fee-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-fee-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Notifications</h3>
                <p className="text-gray-600 mb-6">
                  Set up automatic reminders for upcoming and overdue payments. Notify students and parents through email, SMS, or app notifications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Payment reminders
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Receipt notifications
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Custom notification templates
                  </li>
                </ul>
              </div>

              {/* Feature 7 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-fee-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-fee-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Admin Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive admin interface with all the tools needed to manage fees, students, payments, and reports efficiently.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Role-based access control
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Collection analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    System activity logs
                  </li>
                </ul>
              </div>

              {/* Feature 8 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-fee-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-fee-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Compliance</h3>
                <p className="text-gray-600 mb-6">
                  Bank-grade encryption for all financial transactions and student information. Compliant with relevant financial and data protection regulations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Data encryption
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Regular security audits
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Regulatory compliance
                  </li>
                </ul>
              </div>

              {/* Feature 9 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-fee-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-fee-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Platform Access</h3>
                <p className="text-gray-600 mb-6">
                  Access the fee management system from any device - desktop, tablet, or mobile. Responsive design ensures optimal experience on all screen sizes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Responsive web interface
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Mobile application
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-fee-blue-500 rounded-full mr-2"></span>
                    Offline capabilities
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-fee-blue-50 rounded-2xl p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Fee Management Process?
                </h2>
                <p className="text-gray-600 mb-8">
                  Join thousands of educational institutions that have streamlined their fee collection and improved their cash flow with EduPay.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-fee-blue-600 hover:bg-fee-blue-700 text-white font-medium"
                  >
                    <Link to="/login" className="flex items-center gap-2">
                      Get Started <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-fee-blue-500 text-fee-blue-600 hover:bg-fee-blue-50 font-medium"
                  >
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
