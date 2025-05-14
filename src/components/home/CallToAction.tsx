
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-fee-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fee Management Process?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of educational institutions that have streamlined their fee collection 
            and improved their cash flow with EduPay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-fee-blue-600 hover:bg-blue-50 font-medium"
            >
              <Link to="/login">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-fee-blue-700 font-medium"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Contact Sales <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
