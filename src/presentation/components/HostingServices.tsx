// Presentation Layer - Hosting Services Component

import React from 'react';
import { useHostingPlans } from '../hooks/useHostingPlans';

const HostingServices: React.FC = () => {
  const { plans, loading } = useHostingPlans();

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      server: (
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 2h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 8h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2zm0 8h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z" />
          </svg>
        </div>
      ),
      email: (
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-20 h-16 bg-yellow-400 rounded-lg relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-yellow-500 to-yellow-400 rounded-t-lg"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-white/50 rounded"></div>
          </div>
        </div>
      ),
      google: (
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-20 h-20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
      ),
    };
    return icons[iconName] || icons.server;
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-gray-200 animate-pulse mx-auto mb-4"></div>
            <div className="h-6 w-96 bg-gray-200 animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-md animate-pulse">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <div className="h-8 w-40 bg-gray-200 mx-auto mb-4"></div>
                <div className="h-12 w-32 bg-gray-200 mx-auto mb-6"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200"></div>
                  <div className="h-4 bg-gray-200"></div>
                  <div className="h-4 bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hosting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trust your site to one of the Largest Hosting Providers to Small Businesses
          </p>
        </div>

        {/* Hosting Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary-200"
            >
              {/* Icon */}
              {getIcon(plan.icon)}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center mb-4">{plan.description}</p>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-gray-600">$</span>
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price.toFixed(2).split('.')[0]}
                  </span>
                  <span className="text-2xl text-gray-600">
                    .{plan.price.toFixed(2).split('.')[1]}
                  </span>
                  <span className="text-lg text-gray-600">/mo</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 text-center">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all">
                VIEW PLANS
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingServices;
