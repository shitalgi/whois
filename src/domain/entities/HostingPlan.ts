// Domain Layer - Business Entities
// Core business logic with no external dependencies

export interface HostingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  icon: string;
  popular?: boolean;
}

export class HostingPlanEntity implements HostingPlan {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public features: string[],
    public icon: string,
    public originalPrice?: number,
    public popular?: boolean
  ) {}

  getDiscountPercentage(): number {
    if (!this.originalPrice) return 0;
    return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
  }

  isOnSale(): boolean {
    return !!this.originalPrice && this.originalPrice > this.price;
  }

  getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }
}
