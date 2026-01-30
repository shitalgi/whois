// Presentation Layer - Web Hosting Features Component

import React from 'react';

const WebHostingFeatures: React.FC = () => {
  const features = [
    { text: 'Unlimited Data Transfer', checked: true },
    { text: 'Unlimited Email Accounts', checked: true },
    { text: 'Unlimited Disk Space', checked: true },
    { text: 'Reliable & Secure', checked: true },
    { text: 'Powered by cPanel', checked: true },
    { text: '30 day Money Back', checked: true },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-orange-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Server Image */}
            <div className="relative h-full min-h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
              {/* Server Illustration */}
              <div className="relative">
                <div className="space-y-6">
                  {[1, 2].map((server) => (
                    <div key={server} className="bg-gradient-to-br from-gray-800 to-black rounded-lg p-6 shadow-2xl w-72 transform hover:scale-105 transition-transform">
                      {/* Server Lights */}
                      <div className="flex gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      {/* Server Slots */}
                      <div className="space-y-2">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="flex gap-1">
                            {[...Array(12)].map((_, j) => (
                              <div key={j} className="w-4 h-1 bg-gray-700 rounded"></div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-primary-600">Blazing fast</span> Web Hosting
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                for your Domain
              </h3>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="text-6xl font-bold text-gray-900">
                  <span className="text-3xl align-top">$</span>3.48
                  <span className="text-2xl text-gray-600 font-normal">/mo</span>
                </div>
                <button className="px-8 py-4 bg-primary-600 text-white font-bold text-lg rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
                  VIEW PLANS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHostingFeatures;
