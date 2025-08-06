export interface PricingPlan {
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  popular?: boolean;
  buttonText?: string;
  description?: string;
}

export interface PricingCardProps {
  plan: PricingPlan;
  onSelect?: () => void;
  className?: string;
}
