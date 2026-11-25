import {
  CompanyContactConfig,
  Property,
  PropertyCategory,
  ServiceItem,
  TestimonialItem,
} from '../types/realEstate';

export const HERO_IMAGE = '/src/assets/images/hero_luxury_villa_1795587658082.jpg';
export const INVESTMENT_IMAGE = '/src/assets/images/investment_skyline_architecture_1795587662231.jpg';
export const FOUNDER_IMAGE = '/src/assets/images/founder_portrait_consultant_1795587660162.jpg';

export const PROPERTY_CATEGORIES: PropertyCategory[] = [
  'Luxury Houses',
  'Apartments',
  'Residential Properties',
  'Commercial Properties',
  'Land and Plots',
];

export const SAMPLE_LOCATIONS = [
  'Victoria Island',
  'Ikoyi',
  'Maitama',
  'Lekki Phase 1',
  'Guzape',
  'Central Business District',
];

/**
 * Sample placeholder property listings for initial presentation.
 * All listings are explicitly marked `isPlaceholder: true` so they can be
 * replaced with live verified inventory prior to publication.
 */
export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    slug: 'the-azure-cantilever-villa',
    title: 'The Azure Cantilever Residence',
    category: 'Luxury Houses',
    intent: 'Buy',
    location: 'Ikoyi, Lagos',
    district: 'Ikoyi',
    price: 1850000,
    priceDisplay: '$1,850,000',
    bedrooms: 5,
    bathrooms: 6,
    sizeSqm: 740,
    sizeDisplay: '740 sqm',
    image: '/src/assets/images/property_luxury_residence_1795587659307.jpg',
    summary:
      'Architectural 5-bedroom detached residence featuring cantilevered oak terraces, private courtyard garden, and double-height living spaces.',
    description:
      'Designed for discerning homeowners and long-term capital preservation, this contemporary detached residence combines board-formed concrete, warm timber soffits, and expansive glazing. The floor plan separates formal entertaining wings from private family suites, complemented by landscaped gardens and automated climate control.',
    highlights: [
      'Private landscaped courtyard and water feature',
      'Chef-grade fitted kitchen with stone waterfall island',
      'Smart home automation and concealed perimeter security',
      'Dedicated two-car enclosed garage and service quarters',
    ],
    investmentNote:
      'Positioned in a prime low-density residential enclave with resilient capital appreciation and strong executive lease demand.',
    titleDocument: 'Placeholder — Replace with Verified Title Details',
    yearOrStatus: 'Sample Architectural Listing',
    isPlaceholder: true,
  },
  {
    id: 'prop-2',
    slug: 'skyline-grand-penthouse',
    title: 'Skyline Grand Penthouse Suite',
    category: 'Apartments',
    intent: 'Buy',
    location: 'Victoria Island, Lagos',
    district: 'Victoria Island',
    price: 920000,
    priceDisplay: '$920,000',
    bedrooms: 3,
    bathrooms: 4,
    sizeSqm: 380,
    sizeDisplay: '380 sqm',
    image: '/src/assets/images/property_penthouse_apartment_1795587659032.jpg',
    summary:
      'Panoramic full-floor sky residence finished in Italian marble, brushed brass accents, and floor-to-ceiling skyline views.',
    description:
      'Perched above the commercial skyline, this refined penthouse apartment offers uninterrupted twilight vistas, bespoke millwork, and private elevator lobby access. Crafted for executives and international investors seeking turnkey urban living with strong corporate rental appeal.',
    highlights: [
      'Floor-to-ceiling acoustic panoramic curtain wall',
      'Private elevator vestibule and 24/7 concierge reception',
      'Bespoke marble dining gallery and bespoke lighting',
      'Residents fitness pavilion and heated infinity deck',
    ],
    investmentNote:
      'High-demand corporate leasing profile suitable for both steady rental yield and executive portfolio diversification.',
    titleDocument: 'Placeholder — Replace with Verified Title Details',
    yearOrStatus: 'Sample Architectural Listing',
    isPlaceholder: true,
  },
  {
    id: 'prop-3',
    slug: 'meridian-executive-terrace',
    title: 'Meridian Gated Terrace Duplex',
    category: 'Residential Properties',
    intent: 'Rent',
    location: 'Maitama, Abuja',
    district: 'Maitama',
    price: 65000,
    priceDisplay: '$65,000',
    rentPeriod: '/ year',
    bedrooms: 4,
    bathrooms: 5,
    sizeSqm: 410,
    sizeDisplay: '410 sqm',
    image: '/src/assets/images/property_residential_duplex_1795587659796.jpg',
    summary:
      'Contemporary 4-bedroom semi-detached terrace home in a secure gated residential court with private driveway and roof balcony.',
    description:
      'Offering balanced proportions for diplomatic and family living, this gated terrace duplex pairs crisp white stucco elevations with dark slate detailing. Spacious en-suite bedrooms, an upper family lounge, and manicured green setbacks deliver quiet comfort minutes from key city districts.',
    highlights: [
      'Gated estate access control and uniformed security',
      'Upper-level glass terrace overlooking landscaped gardens',
      'Dual private parking bays and backup power infrastructure',
      'Flexible lease terms tailored for corporate or family tenants',
    ],
    investmentNote:
      'Turnkey residential leasing option vetted for neighborhood tranquility, infrastructure reliability, and estate governance.',
    titleDocument: 'Placeholder — Replace with Verified Lease Terms',
    yearOrStatus: 'Sample Residential Lease',
    isPlaceholder: true,
  },
  {
    id: 'prop-4',
    slug: 'exchange-plaza-commercial-floor',
    title: 'Exchange Plaza Grade-A Offices',
    category: 'Commercial Properties',
    intent: 'Rent',
    location: 'Central Business District',
    district: 'Central Business District',
    price: 420000,
    priceDisplay: '$420,000',
    rentPeriod: '/ year',
    bedrooms: 0,
    bathrooms: 6,
    sizeSqm: 1250,
    sizeDisplay: '1,250 sqm',
    image: '/src/assets/images/property_commercial_tower_1795587661401.jpg',
    summary:
      'Full-floor Grade-A commercial office space with double-height limestone lobby, bronze-glazed facade, and executive boardrooms.',
    description:
      'Engineered for multinational headquarters, financial institutions, and advisory firms, this commercial floorplate offers column-free flexibility, high-speed fiber redundancy, and institutional facility management. Strategically positioned along a primary transit and corporate corridor.',
    highlights: [
      'Column-free 1,250 sqm adaptable corporate floorplate',
      'Double-height stone reception and visitor management',
      'Dedicated underground executive parking allocation',
      'Central HVAC and uninterrupted redundant power grid',
    ],
    investmentNote:
      'Institutional-grade commercial asset designed for long-term corporate tenancy and predictable operating efficiency.',
    titleDocument: 'Placeholder — Replace with Verified Commercial Lease',
    yearOrStatus: 'Sample Commercial Listing',
    isPlaceholder: true,
  },
  {
    id: 'prop-5',
    slug: 'harborview-serviced-development-plot',
    title: 'Harborview Serviced Corner Plot',
    category: 'Land and Plots',
    intent: 'Buy',
    location: 'Lekki Phase 1, Lagos',
    district: 'Lekki Phase 1',
    price: 540000,
    priceDisplay: '$540,000',
    bedrooms: 0,
    bathrooms: 0,
    sizeSqm: 1600,
    sizeDisplay: '1,600 sqm',
    image: '/src/assets/images/property_prime_land_1795587661417.jpg',
    summary:
      'Fully cleared, dry, and paved corner development parcel suited for boutique residential apartments or private estate construction.',
    description:
      'An exceptional land banking and development opportunity situated within a fast-appreciating urban waterfront corridor. The parcel features paved boulevard access, perimeter drainage, and clear boundary beacons ready for architectural mobilization.',
    highlights: [
      'Dual road frontage corner parcel with asphalt access',
      'Elevated topography with engineered storm drainage',
      'Suitable for multi-family residential or mixed-use build',
      'Subject to full title verification and survey confirmation',
    ],
    investmentNote:
      'Strategic land acquisition positioned along an active infrastructure growth corridor for medium-to-long-term appreciation.',
    titleDocument: 'Placeholder — Replace with Verified C of O / Survey',
    yearOrStatus: 'Sample Land Parcel',
    isPlaceholder: true,
  },
  {
    id: 'prop-6',
    slug: 'crestview-courtyard-mansion',
    title: 'Crestview Horizon Villa',
    category: 'Luxury Houses',
    intent: 'Buy',
    location: 'Guzape, Abuja',
    district: 'Guzape',
    price: 1380000,
    priceDisplay: '$1,380,000',
    bedrooms: 6,
    bathrooms: 7,
    sizeSqm: 890,
    sizeDisplay: '890 sqm',
    image: '/src/assets/images/hero_luxury_villa_1795587658082.jpg',
    summary:
      'Elevated 6-bedroom luxury villa featuring an infinity reflecting pool, travertine stone facades, and panoramic hillside views.',
    description:
      'Commanding elevated views across the district, this residence exemplifies modern architectural poise. Floor-to-ceiling sliding glass opens the grand salon seamlessly onto the infinity pool terrace, creating an extraordinary setting for private living and high-level entertaining.',
    highlights: [
      'Infinity-edge swimming pool and sun lounge deck',
      'Six en-suite bedrooms with custom walk-in dressing rooms',
      'Private cinema lounge, wellness gym, and study',
      'Travertine stonework and recessed architectural lighting',
    ],
    investmentNote:
      'Flagship trophy asset offering scarcity value in an elevated, prestigious residential neighborhood.',
    titleDocument: 'Placeholder — Replace with Verified Title Details',
    yearOrStatus: 'Sample Architectural Listing',
    isPlaceholder: true,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Property Sales',
    description:
      'Curated acquisition and disposition of luxury homes, urban apartments, and residential estates with structured negotiation and end-to-end transaction support.',
    deliverable: 'Buyer & seller representation',
  },
  {
    number: '02',
    title: 'Property Rentals',
    description:
      'Placement of verified residential and corporate tenants in high-standard homes and commercial offices with clear, balanced lease documentation.',
    deliverable: 'Executive & residential leasing',
  },
  {
    number: '03',
    title: 'Real Estate Consultancy',
    description:
      'Independent market advisory, feasibility assessments, and due-diligence guidance led directly by Abbas Umar so clients make confident property decisions.',
    deliverable: 'Strategic market advisory',
  },
  {
    number: '04',
    title: 'Property Investment',
    description:
      'Identification of high-potential residential, commercial, and off-plan opportunities structured around capital appreciation and sustainable rental yields.',
    deliverable: 'Portfolio growth planning',
  },
  {
    number: '05',
    title: 'Land Acquisition',
    description:
      'Sourcing of prime residential, commercial, and development parcels backed by physical site inspections and transparent documentation review.',
    deliverable: 'Vetted land & plot sourcing',
  },
  {
    number: '06',
    title: 'Property Management',
    description:
      'Proactive asset stewardship, tenant coordination, preventative maintenance oversight, and periodic reporting to protect long-term property value.',
    deliverable: 'Ongoing asset stewardship',
  },
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Professional Property Consultancy',
    description:
      'Every engagement is guided by disciplined market analysis, realistic valuation benchmarks, and practical local insight rather than sales pressure.',
  },
  {
    number: '02',
    title: 'Quality Property Opportunities',
    description:
      'We focus on structurally sound homes, reputable developments, and strategically located land parcels worthy of long-term ownership.',
  },
  {
    number: '03',
    title: 'Client-Focused Service',
    description:
      'Your goals, timeline, and budget remain central from initial consultation through inspection, negotiation, and handover.',
  },
  {
    number: '04',
    title: 'Investment Guidance',
    description:
      'We evaluate neighborhood growth drivers, rental demand, and holding horizons so you can allocate capital with conviction.',
  },
  {
    number: '05',
    title: 'Transparent Communication',
    description:
      'Clear updates, candid risk disclosures, and straightforward documentation at every milestone of your property journey.',
  },
];

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Sample testimonial text: Replace with a verified client review describing how DANMAMA HOMES guided their residential purchase from initial shortlist to closing.',
    author: 'Sample Client Name 01',
    role: 'Homebuyer · Placeholder Entry',
    category: 'Property Sales',
  },
  {
    id: 'test-2',
    quote:
      'Sample testimonial text: Replace with a verified investor perspective detailing market research, yield clarity, and transparent communication during acquisition.',
    author: 'Sample Client Name 02',
    role: 'Property Investor · Placeholder Entry',
    category: 'Property Investment',
  },
  {
    id: 'test-3',
    quote:
      'Sample testimonial text: Replace with a verified client note regarding land inspection, consultancy clarity, and smooth transaction coordination.',
    author: 'Sample Client Name 03',
    role: 'Landowner · Placeholder Entry',
    category: 'Land Acquisition',
  },
];

export const DEFAULT_CONTACT_CONFIG: CompanyContactConfig = {
  phone: '[Phone Number Placeholder]',
  whatsapp: '',
  email: '[Email Address Placeholder]',
  officeAddress: '[Office Address Placeholder]',
  isConfigured: false,
};
