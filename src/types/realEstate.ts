export type PropertyCategory =
  | 'Luxury Houses'
  | 'Apartments'
  | 'Residential Properties'
  | 'Commercial Properties'
  | 'Land and Plots';

export type ListingIntent = 'Buy' | 'Rent';

export type PriceRangeKey = 'all' | 'under-350k' | '350k-750k' | '750k-1.5m' | 'over-1.5m';

export interface Property {
  id: string;
  slug: string;
  title: string;
  category: PropertyCategory;
  intent: ListingIntent;
  location: string;
  district: string;
  price: number;
  priceDisplay: string;
  rentPeriod?: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqm: number;
  sizeDisplay: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  investmentNote: string;
  titleDocument: string;
  yearOrStatus: string;
  isPlaceholder: true;
}

export interface SearchFilters {
  location: string;
  category: PropertyCategory | 'All';
  intent: ListingIntent | 'All';
  priceRange: PriceRangeKey;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: string;
}

export interface CompanyContactConfig {
  phone: string;
  whatsapp: string;
  email: string;
  officeAddress: string;
  isConfigured: boolean;
}
