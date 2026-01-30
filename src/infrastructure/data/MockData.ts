// Infrastructure Layer - Data Sources
// Mock data for demonstration

import { HostingPlan } from '@domain/entities/HostingPlan';
import { DomainExtension } from '@domain/entities/DomainExtension';

export const mockHostingPlans: HostingPlan[] = [
  {
    id: '1',
    name: 'Web Hosting',
    description: 'Starting at',
    price: 3.48,
    features: [
      'Unlimited Data Transfer',
      'Unlimited Email Accounts',
      'Unlimited Disk Space'
    ],
    icon: 'server',
  },
  {
    id: '2',
    name: 'Email Hosting',
    description: 'Starting at',
    price: 0.98,
    features: [
      'Simple & Powerful',
      'Powerful Tools For Your Inbox',
      'Works on Mobile & Tablets'
    ],
    icon: 'email',
  },
  {
    id: '3',
    name: 'Google Workspace',
    description: 'Starting at',
    price: 6.88,
    features: [
      'Boost Productivity & Teamwork',
      'Collaborate Seamlessly',
      'Communicate Effectively'
    ],
    icon: 'google',
  }
];

export const mockDomainExtensions: DomainExtension[] = [
  {
    id: '1',
    extension: '.space',
    price: 1.18,
    originalPrice: 29.88,
  },
  {
    id: '2',
    extension: '.TOP',
    price: 1.98,
    originalPrice: 10.88,
  },
  {
    id: '3',
    extension: '.site',
    price: 3.28,
    originalPrice: 31.88,
  },
  {
    id: '4',
    extension: '.online',
    price: 5.28,
    originalPrice: 30.88,
  }
];

export const mockWordPressHosting: HostingPlan = {
  id: 'wordpress',
  name: 'WordPress Hosting',
  description: 'Enhanced Performance, User Friendly, Simplified Dashboard',
  price: 5.48,
  features: [
    'Enhanced Performance',
    'User Friendly',
    'Simplified Dashboard'
  ],
  icon: 'wordpress',
  popular: true,
};

export const mockWebHostingFeatures = {
  title: 'Blazing fast Web Hosting for your Domain',
  price: 3.48,
  features: [
    { text: 'Unlimited Data Transfer', checked: true },
    { text: 'Unlimited Email Accounts', checked: true },
    { text: 'Unlimited Disk Space', checked: true },
    { text: 'Reliable & Secure', checked: true },
    { text: 'Powered by cPanel', checked: true },
    { text: '30 day Money Back', checked: true },
  ]
};
