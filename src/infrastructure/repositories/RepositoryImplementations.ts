// Infrastructure Layer - Repository Implementations
// Concrete implementations of domain interfaces

import { IHostingRepository, IDomainRepository } from '@domain/repositories/IRepositories';
import { HostingPlan } from '@domain/entities/HostingPlan';
import { DomainExtension } from '@domain/entities/DomainExtension';
import { 
  mockHostingPlans, 
  mockDomainExtensions, 
  mockWordPressHosting 
} from '../data/MockData';

export class HostingRepositoryImpl implements IHostingRepository {
  async getHostingPlans(): Promise<HostingPlan[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockHostingPlans);
      }, 300);
    });
  }

  async getHostingPlanById(id: string): Promise<HostingPlan | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const plan = mockHostingPlans.find(p => p.id === id);
        resolve(plan || null);
      }, 200);
    });
  }

  async getFeaturedPlans(): Promise<HostingPlan[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([mockWordPressHosting]);
      }, 200);
    });
  }
}

export class DomainRepositoryImpl implements IDomainRepository {
  async getDomainExtensions(): Promise<DomainExtension[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockDomainExtensions);
      }, 300);
    });
  }

  async searchDomain(query: string): Promise<boolean> {
    // Simulate API search
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock: random availability
        resolve(Math.random() > 0.5);
      }, 500);
    });
  }

  async checkDomainAvailability(domain: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock: random availability
        resolve(Math.random() > 0.3);
      }, 400);
    });
  }
}
