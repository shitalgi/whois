// Application Layer - Domain Use Cases

import { DomainExtension } from '@domain/entities/DomainExtension';
import { IDomainRepository } from '@domain/repositories/IRepositories';

export class GetDomainExtensionsUseCase {
  constructor(private domainRepository: IDomainRepository) {}

  async execute(): Promise<DomainExtension[]> {
    return await this.domainRepository.getDomainExtensions();
  }
}

export class SearchDomainUseCase {
  constructor(private domainRepository: IDomainRepository) {}

  async execute(query: string): Promise<boolean> {
    // Validate domain format
    if (!query || query.trim().length === 0) {
      throw new Error('Domain query cannot be empty');
    }

    return await this.domainRepository.searchDomain(query);
  }
}

export class CheckDomainAvailabilityUseCase {
  constructor(private domainRepository: IDomainRepository) {}

  async execute(domain: string): Promise<boolean> {
    // Basic domain validation
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    
    if (!domainRegex.test(domain)) {
      throw new Error('Invalid domain format');
    }

    return await this.domainRepository.checkDomainAvailability(domain);
  }
}
