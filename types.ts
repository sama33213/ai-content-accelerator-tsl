export interface ModuleItem {
  title: string;
  points: string[];
  icon?: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export enum PricingTier {
  REGULAR = 'REGULAR',
  DISCOUNT = 'DISCOUNT'
}