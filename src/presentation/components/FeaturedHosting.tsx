// Presentation Layer - Featured Hosting Component

import React from 'react';
import { useFeaturedPlans } from '../hooks/useHostingPlans';

const FeaturedHosting: React.FC = () => {
  const { plans, loading } = useFeaturedPlans();

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse bg-gray-200 h-48 rounded-xl"></div>
        </div>
      </section>
    );
  }

  const plan = plans[0];
  if (!plan) return null;

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-100">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Side - WordPress Logo */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* WordPress Logo Representation */}
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-40 h-40 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.158 12.786L9.46 20.625c.806.237 1.657.366 2.54.366 1.047 0 2.051-.181 2.986-.51-.024-.038-.046-.079-.065-.123l-2.763-7.572zm-5.97 3.246c-.814-1.49-1.28-3.199-1.28-5.023 0-1.174.196-2.3.555-3.355L7.952 16.032zM19.73 7.656c.002.046.003.093.003.14 0 1.403-.262 2.977-.262 2.977l-2.646 7.654c2.585-1.505 4.324-4.31 4.324-7.517 0-1.544-.403-2.992-1.107-4.246-.359.216-.754.392-1.166.482-.316-.013-.63-.076-.932-.185.001.018 0 .037-.002.056zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.123-12.867c0-.865-.311-1.464-.578-1.931-.355-.578-.689-1.067-.689-1.645 0-.644.489-1.244 1.178-1.244.031 0 .061.003.092.005C14.98 3.437 13.553 3 12 3c-3.316 0-6.231 1.805-7.792 4.479.219.007.425.011.6.011.978 0 2.489-.119 2.489-.119.502-.03.562.709.06.769 0 0-.505.06-1.066.089l3.394 10.098 2.039-6.116-1.451-3.982c-.502-.029-1.007-.089-1.007-.089-.503-.03-.443-.799.06-.769 0 0 1.541.119 2.458.119.978 0 2.489-.119 2.489-.119.502-.03.562.709.059.769 0 0-.505.06-1.066.089l3.369 10.02.93-3.108c.4-1.285.707-2.2.707-2.994z"/>
                  </svg>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                WORDPRESS<br />
                <span className="text-blue-600">HOSTING</span>
              </h2>
              
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 text-lg flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Enhanced Performance
                </li>
                <li className="text-gray-700 text-lg flex items-center gap-2">
                  <span className="text-blue-600">✓</span> User Friendly
                </li>
                <li className="text-gray-700 text-lg flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Simplified Dashboard
                </li>
              </ul>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold text-gray-900">
                  ${plan.price}
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHosting;
