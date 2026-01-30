// Domain Layer - Domain Extension Entity

export interface DomainExtension {
  id: string;
  extension: string;
  price: number;
  originalPrice?: number;
}

export class DomainExtensionEntity implements DomainExtension {
  constructor(
    public id: string,
    public extension: string,
    public price: number,
    public originalPrice?: number
  ) {}

  getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }

  getFormattedOriginalPrice(): string {
    if (!this.originalPrice) return '';
    return `$${this.originalPrice.toFixed(2)}`;
  }

  isOnSale(): boolean {
    return !!this.originalPrice && this.originalPrice > this.price;
  }
}
