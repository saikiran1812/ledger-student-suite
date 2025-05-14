
import React from "react";

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-fee-blue-600 font-medium mb-2">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by Educational Institutions Worldwide
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                  RC
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Dr. Rachel Chen</h4>
                <p className="text-gray-500 text-sm">Principal, Westlake Academy</p>
              </div>
            </div>
            <blockquote className="text-gray-700 italic mb-4">
              "EduPay has revolutionized how we handle student fee collection. The platform is intuitive, the reports are comprehensive, and the customer service is exceptional. We've reduced our administrative workload by over 40% since implementing this system."
            </blockquote>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-sm">5.0 rating</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First mini testimonial */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-sm">
                    JM
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">James Miller</h4>
                  <p className="text-gray-500 text-xs">CFO, Springfield College</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Our fee collection rate has improved by 27% since we started using EduPay."
              </p>
            </div>
            
            {/* Second mini testimonial */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-sm">
                    SP
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Patel</h4>
                  <p className="text-gray-500 text-xs">Admin, Greenwood High</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "The automated reminders have significantly reduced our late payments."
              </p>
            </div>
            
            {/* Third mini testimonial */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-sm">
                    TW
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Thomas Wilson</h4>
                  <p className="text-gray-500 text-xs">IT Director, Bay University</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Seamless integration with our existing systems. Excellent technical support."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
