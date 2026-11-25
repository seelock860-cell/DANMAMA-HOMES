import { ArrowRight, Search } from 'lucide-react';
import { HERO_IMAGE, PROPERTY_CATEGORIES, SAMPLE_LOCATIONS } from '../data/properties';
import { ListingIntent, PriceRangeKey, PropertyCategory, SearchFilters } from '../types/realEstate';
import { ImageWithFallback } from './ImageWithFallback';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSectionProps {
  filters: SearchFilters;
  onFiltersChange: (next: SearchFilters) => void;
  onSearchSubmit: () => void;
  onExploreProperties: () => void;
  onContactTeam: () => void;
  onOpenWhatsApp: (presetMessage?: string) => void;
}

export function HeroSection({
  filters,
  onFiltersChange,
  onSearchSubmit,
  onExploreProperties,
  onContactTeam,
  onOpenWhatsApp,
}: HeroSectionProps) {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <section id="home" className="relative bg-[#0B172A]">
      {/* Hero Visual Canvas */}
      <div className="relative min-h-[620px] w-full overflow-hidden lg:min-h-[700px]">
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="Luxurious modern architectural villa at twilight with infinity pool by DANMAMA HOMES"
          fallbackTitle="DANMAMA HOMES"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Measured Contrast Scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#060E1B]/95 via-[#0B172A]/75 to-[#0B172A]/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#060E1B]/80 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-between px-6 pt-16 pb-28 lg:min-h-[700px] lg:px-8 lg:pt-24 lg:pb-32">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.22em] text-[#E5CA8B] uppercase">
              DANMAMA HOMES · Real Estate &amp; Property Consultancy
            </p>

            <h1
              className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-[60px]"
              style={{ textWrap: 'balance' }}
            >
              Find Your Dream Property. Build Your Future.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Discover exceptional properties and smart real estate investment opportunities with
              DANMAMA HOMES. We help you make confident property decisions.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreProperties}
                className="inline-flex min-h-[48px] cursor-pointer items-center gap-2.5 rounded-md bg-[#B89242] px-7 py-3.5 text-sm font-semibold text-[#0B172A] transition-colors duration-200 hover:bg-[#D4B062] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B062]"
              >
                Explore Properties
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onContactTeam}
                className="inline-flex min-h-[48px] cursor-pointer items-center rounded-md border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Our Team
              </button>
            </div>
          </div>

          {/* Pumping WhatsApp Direct Concierge in Front of Homepage */}
          <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="text-xs tracking-wide text-slate-300">
              <span>Founded by Abbas Umar</span>
              <span className="mx-2 text-[#D4B062]" aria-hidden="true">·</span>
              <span>Realtor &amp; Property Consultant</span>
              <span className="mx-2 text-[#D4B062]" aria-hidden="true">·</span>
              <span>@danmamahomes</span>
            </div>

            <div className="relative inline-flex items-center">
              <span
                className="whatsapp-ring pointer-events-none absolute -inset-1 rounded-full bg-emerald-500/35"
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    'Hello DANMAMA HOMES, I would like to inquire about available properties and consultation.'
                  )
                }
                className="whatsapp-pump relative inline-flex min-h-[48px] cursor-pointer items-center gap-3 rounded-full bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#15803D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span className="whitespace-nowrap">Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Architectural Property Search Bar */}
      <div className="relative z-20 mx-auto -mt-16 max-w-7xl px-6 pb-8 lg:px-8">
        <form
          onSubmit={handleFormSubmit}
          aria-label="Property search filter"
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-[#0B172A]/10 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
            {/* Location */}
            <div>
              <label
                htmlFor="hero-search-location"
                className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-600 uppercase"
              >
                Property Location
              </label>
              <select
                id="hero-search-location"
                value={filters.location}
                onChange={(e) => onFiltersChange({ ...filters, location: e.target.value })}
                className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
              >
                <option value="All">All Locations (Sample)</option>
                {SAMPLE_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label
                htmlFor="hero-search-type"
                className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-600 uppercase"
              >
                Property Type
              </label>
              <select
                id="hero-search-type"
                value={filters.category}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    category: e.target.value as PropertyCategory | 'All',
                  })
                }
                className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
              >
                <option value="All">All Property Types</option>
                {PROPERTY_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Buy or Rent */}
            <div>
              <label
                htmlFor="hero-search-intent"
                className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-600 uppercase"
              >
                Buy or Rent
              </label>
              <select
                id="hero-search-intent"
                value={filters.intent}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    intent: e.target.value as ListingIntent | 'All',
                  })
                }
                className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
              >
                <option value="All">Buy &amp; Rent</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label
                htmlFor="hero-search-price"
                className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-600 uppercase"
              >
                Price Range
              </label>
              <select
                id="hero-search-price"
                value={filters.priceRange}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    priceRange: e.target.value as PriceRangeKey,
                  })
                }
                className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
              >
                <option value="all">Any Price Range</option>
                <option value="under-350k">Under $350,000</option>
                <option value="350k-750k">$350,000 – $750,000</option>
                <option value="750k-1.5m">$750,000 – $1,500,000</option>
                <option value="over-1.5m">$1,500,000+</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0B172A] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#132542] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B172A]"
              >
                <Search className="h-4 w-4 text-[#D4B062]" aria-hidden="true" />
                <span>Search Properties</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
