import { ArrowUpRight, Bath, BedDouble, MapPin, Maximize2 } from 'lucide-react';
import { Property } from '../types/realEstate';
import { ImageWithFallback } from './ImageWithFallback';

interface PropertyCardProps {
  property: Property;
  onSelectProperty: (property: Property) => void;
}

export function PropertyCard({ property, onSelectProperty }: PropertyCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-lg hover:shadow-[#0B172A]/8">
      {/* 4:3 High-Resolution Photograph */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <ImageWithFallback
          src={property.image}
          alt={`${property.title} in ${property.location}`}
          fallbackTitle={property.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B172A]/45 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        {/* Zero-Pill Unboxed Metadata Line */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
          <span className="text-[#937029]">{property.category}</span>
          <span aria-hidden="true">·</span>
          <span>{property.intent === 'Buy' ? 'For Sale' : 'For Rent'}</span>
          <span aria-hidden="true">·</span>
          <span>Sample Listing</span>
        </div>

        {/* Title & Price */}
        <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-[#0B172A]">
          {property.title}
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-600">
          <MapPin className="h-4 w-4 shrink-0 text-[#B89242]" aria-hidden="true" />
          <span>{property.location}</span>
        </div>

        <p className="mt-4 text-xl font-bold tracking-tight text-[#0B172A] tabular-nums">
          {property.priceDisplay}
          {property.rentPeriod && (
            <span className="ml-1 text-sm font-normal text-slate-500">
              {property.rentPeriod}
            </span>
          )}
        </p>

        {/* Specifications Row */}
        <div className="mt-5 grid grid-cols-3 gap-3 border-y border-slate-100 py-3.5 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            <span className="tabular-nums">
              {property.bedrooms > 0 ? `${property.bedrooms} Beds` : 'N/A'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            <span className="tabular-nums">
              {property.bathrooms > 0 ? `${property.bathrooms} Baths` : 'Serviced'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            <span className="tabular-nums">{property.sizeDisplay}</span>
          </div>
        </div>

        {/* View Details Action */}
        <div className="mt-5 pt-1">
          <button
            type="button"
            onClick={() => onSelectProperty(property)}
            className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-[#0B172A] bg-white px-4 py-2.5 text-sm font-semibold text-[#0B172A] transition-colors duration-200 hover:bg-[#0B172A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B172A]"
          >
            <span>View Details</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
