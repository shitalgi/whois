// Infrastructure Layer - Dependency Injection
// Container for managing dependencies

import { HostingRepositoryImpl, DomainRepositoryImpl } from '../repositories/RepositoryImplementations';
import { 
  GetHostingPlansUseCase, 
  GetFeaturedPlansUseCase,
  GetHostingPlanByIdUseCase 
} from '@application/use-cases/HostingUseCases';
import {
  GetDomainExtensionsUseCase,
  SearchDomainUseCase,
  CheckDomainAvailabilityUseCase
} from '@application/use-cases/DomainUseCases';

class DIContainer {
  // Repositories
  private hostingRepository = new HostingRepositoryImpl();
  private domainRepository = new DomainRepositoryImpl();

  // Hosting Use Cases
  getHostingPlansUseCase = new GetHostingPlansUseCase(this.hostingRepository);
  getFeaturedPlansUseCase = new GetFeaturedPlansUseCase(this.hostingRepository);
  getHostingPlanByIdUseCase = new GetHostingPlanByIdUseCase(this.hostingRepository);

  // Domain Use Cases
  getDomainExtensionsUseCase = new GetDomainExtensionsUseCase(this.domainRepository);
  searchDomainUseCase = new SearchDomainUseCase(this.domainRepository);
  checkDomainAvailabilityUseCase = new CheckDomainAvailabilityUseCase(this.domainRepository);
}

export const container = new DIContainer();
