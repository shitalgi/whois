// Presentation Layer - Domain Extensions Component

import React from 'react';
import { useDomainExtensions } from '../hooks/useDomainExtensions';

const DomainExtensions: React.FC = () => {
  const { extensions, loading } = useDomainExtensions();

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 h-32 rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extensions.map((ext) => (
            <div
              key={ext.id}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold text-primary-600 group-hover:scale-110 transition-transform">
                  {ext.extension}
                </h3>
                {ext.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${ext.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm text-gray-600">$</span>
                <span className="text-4xl font-bold text-gray-900">
                  {ext.price.toFixed(2).split('.')[0]}
                </span>
                <span className="text-xl text-gray-600">
                  .{ext.price.toFixed(2).split('.')[1]}
                </span>
              </div>

              <button className="w-full px-4 py-2 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainExtensions;
