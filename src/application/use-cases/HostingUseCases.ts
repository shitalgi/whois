// Application Layer - Use Cases
// Business logic orchestration

import { HostingPlan } from '@domain/entities/HostingPlan';
import { IHostingRepository } from '@domain/repositories/IRepositories';

export class GetHostingPlansUseCase {
  constructor(private hostingRepository: IHostingRepository) {}

  async execute(): Promise<HostingPlan[]> {
    return await this.hostingRepository.getHostingPlans();
  }
}

export class GetFeaturedPlansUseCase {
  constructor(private hostingRepository: IHostingRepository) {}

  async execute(): Promise<HostingPlan[]> {
    return await this.hostingRepository.getFeaturedPlans();
  }
}

export class GetHostingPlanByIdUseCase {
  constructor(private hostingRepository: IHostingRepository) {}

  async execute(id: string): Promise<HostingPlan | null> {
    return await this.hostingRepository.getHostingPlanById(id);
  }
}
