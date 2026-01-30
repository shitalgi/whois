// Presentation Layer - Hero Component

import React, { useState } from 'react';
import { useDomainSearch } from '../hooks/useDomainExtensions';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchDomain, searching, result } = useDomainSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchDomain(searchQuery);
    }
  };

  return (
    <section className="bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 py-20 relative overflow-hidden">
      {/* Decorative Background Icons */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">🔒</div>
        <div className="absolute top-40 right-20 text-6xl">✉️</div>
        <div className="absolute bottom-20 left-1/4 text-6xl">⚙️</div>
        <div className="absolute top-1/2 right-10 text-6xl">📊</div>
        <div className="absolute bottom-32 right-1/3 text-6xl">🛒</div>
        <div className="absolute top-32 right-1/4 text-6xl">📢</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Every Great Idea Starts With a{' '}
            <span className="text-primary-600">Great Domain Name</span>
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find a great domain name"
                className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
              />
              <button
                type="submit"
                disabled={searching}
                className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {searching ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Searching...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    SEARCH
                  </>
                )}
              </button>
            </div>

            {result !== null && (
              <div className={`mt-4 p-4 rounded-lg ${result ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {result ? '✓ Domain is available!' : '✗ Domain is not available'}
              </div>
            )}
          </form>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#offers" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
              Special Offers »
            </a>
            <a href="#whois" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
              Whois Lookup »
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
