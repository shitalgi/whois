// Presentation Layer - Main App Component

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import footer from '../presentation/components/footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes as needed */}
          <Route path="/domains" element={<div className="p-8 text-center">Domains Page - Coming Soon</div>} />
          <Route path="/hosting" element={<div className="p-8 text-center">Hosting Page - Coming Soon</div>} />
          <Route path="/servers" element={<div className="p-8 text-center">Servers Page - Coming Soon</div>} />
          <Route path="/email" element={<div className="p-8 text-center">Email Page - Coming Soon</div>} />
          <Route path="/security" element={<div className="p-8 text-center">Security Page - Coming Soon</div>} />
          <Route path="/whois" element={<div className="p-8 text-center">Whois Page - Coming Soon</div>} />
          <Route path="/deals" element={<div className="p-8 text-center">Deals Page - Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
