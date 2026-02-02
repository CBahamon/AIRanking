export interface LocalizedString {
  es: string;
  en: string;
}

export interface Plan {
  name: string;
  priceFormatted: string; // e.g., "$20 USD" or "Free"
  priceUsd?: number; // Base price for conversion
  billingPeriod: 'monthly' | 'annual' | 'once' | 'token';
  features: string[];
}

export interface UseCase {
  id: string;
  label: string;
}

export interface IAData {
  id: string;
  name: string;
  company: string;
  logo: string;
  websiteUrl: string;
  category: string[]; // Keep as simple strings for now, or localize if needed
  launchDate: string;
  rating: number;
  totalVotes: number;
  userCount: LocalizedString;
  description: LocalizedString;
  models: string[]; // ID references to models

  modelPricing?: {
    free: string[];
    paid: string[];
  };

  ecosystem?: {
    title: LocalizedString;
    description: LocalizedString;
    apps: Array<{ name: string; description: LocalizedString }>;
  };

  pricing: {
    free: {
      available: boolean;
      features: { es: string[]; en: string[] };
      limits: { es: string[]; en: string[] };
    };
    plans: Array<{
      name: string;
      priceFormatted: string;
      priceUsd?: number;
      billingPeriod: string;
      features: { es: string[]; en: string[] };
    }>;
  };

  tools?: Array<{
    name: string;
    description: LocalizedString;
    model?: string;
    purpose: LocalizedString;
  }>;

  strengths: { es: string[]; en: string[] };
  limitations: { es: string[]; en: string[] };
  bestFor: { es: string[]; en: string[] };

  availability: {
    restrictedCountries: string[];
    vpnRequired: boolean;
    paymentMethods: string[];
    platforms: string[];
  };

  benchmarks: {
    spanish: number;
    code: number;
    creativity: number;
    speed: number;
    free?: number;
  };
}
