// Domain Layer - Repository Interfaces (Ports)
// Define contracts without implementation

import { HostingPlan } from '../entities/HostingPlan';
import { DomainExtension } from '../entities/DomainExtension';

export interface IHostingRepository {
  getHostingPlans(): Promise<HostingPlan[]>;
  getHostingPlanById(id: string): Promise<HostingPlan | null>;
  getFeaturedPlans(): Promise<HostingPlan[]>;
}

export interface IDomainRepository {
  getDomainExtensions(): Promise<DomainExtension[]>;
  searchDomain(query: string): Promise<boolean>;
  checkDomainAvailability(domain: string): Promise<boolean>;
}
