// Presentation Layer - Home Page

import React from 'react';
import Hero from '../components/Hero';
import DomainExtensions from '../components/DomainExtensions';
import FeaturedHosting from '../components/FeaturedHosting';
import WebHostingFeatures from '../components/WebHostingFeatures';
import HostingServices from '../components/HostingServices';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DomainExtensions />
      <FeaturedHosting />
      <WebHostingFeatures />
      <HostingServices />
    </div>
  );
};

export default HomePage;
