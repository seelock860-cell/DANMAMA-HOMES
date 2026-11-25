import { RotateCcw } from 'lucide-react';
import { PROPERTY_CATEGORIES } from '../data/properties';
import { Property, PropertyCategory, SearchFilters } from '../types/realEstate';
import { PropertyCard } from './PropertyCard';

interface FeaturedPropertiesProps {
  properties: Property[];
  filters: SearchFilters;
  onSelectCategory: (category: PropertyCategory | 'All') => void;
  onResetFilters: () => void;
  onSelectProperty: (property: Property) => void;
}

export function FeaturedProperties({
  properties,
  filters,
  onSelectCategory,
  onResetFilters,
  onSelectProperty,
}: FeaturedPropertiesProps) {
  const hasActiveFilter =
    filters.location !== 'All' ||
    filters.category !== 'All' ||
    filters.intent !== 'All' ||
    filters.priceRange !== 'all';

  return (
    <section id="properties" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#937029] uppercase">
              Curated Portfolio
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0B172A] sm:text-4xl lg:text-[42px]"
              style={{ textWrap: 'balance' }}
            >
              Featured Properties &amp; Opportunities
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Explore residential homes, luxury apartments, commercial floors, and serviced land
              across our sample portfolio. All sample listings below are clearly marked as
              placeholders ready to be replaced with verified live inventory.
            </p>
          </div>

          {hasActiveFilter && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 self-start rounded-md border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-semibold text-[#0B172A] whitespace-nowrap shrink-0 transition-colors hover:border-[#0B172A] hover:bg-white lg:self-end"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset Filters ({properties.length} shown)</span>
            </button>
          )}
        </div>

        {/* Interactive Category Filter Bar */}
        <div
          className="mt-8 flex flex-wrap items-center gap-2 rounded-lg bg-slate-100 p-1.5"
          role="tablist"
          aria-label="Filter properties by category"
        >
          <button
            type="button"
            role="tab"
            aria-selected={filters.category === 'All'}
            onClick={() => onSelectCategory('All')}
            className={`min-h-[40px] cursor-pointer rounded-md px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 ${
              filters.category === 'All'
                ? 'bg-[#0B172A] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#0B172A]'
            }`}
          >
            All Categories
          </button>

          {PROPERTY_CATEGORIES.map((category) => {
            const active = filters.category === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onSelectCategory(category)}
                className={`min-h-[40px] cursor-pointer rounded-md px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 ${
                  active
                    ? 'bg-[#0B172A] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0B172A]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Properties Grid or Empty State */}
        {properties.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelectProperty={onSelectProperty}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 px-6 py-16 text-center">
            <h3 className="font-display text-2xl font-semibold text-[#0B172A]">
              No matching properties in current sample filters
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
              Try broadening your location, property category, or price range—or contact DANMAMA
              HOMES directly for bespoke off-market property sourcing.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-6 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md bg-[#0B172A] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#132542]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>View All Sample Properties</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
