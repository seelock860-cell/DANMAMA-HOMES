import {
  ArrowLeft,
  Bath,
  BedDouble,
  Check,
  FileText,
  Info,
  MapPin,
  Maximize2,
  Send,
} from 'lucide-react';
import { useState } from 'react';
import { Property } from '../types/realEstate';
import { ImageWithFallback } from './ImageWithFallback';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PropertyDetailsViewProps {
  property: Property;
  onBack: () => void;
  onOpenWhatsApp: (presetMessage?: string) => void;
}

export function PropertyDetailsView({
  property,
  onBack,
  onOpenWhatsApp,
}: PropertyDetailsViewProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    `Hello Abbas Umar & DANMAMA HOMES team, I would like to request full details and arrange a consultation regarding "${property.title}".`
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (name.trim().length < 2) nextErrors.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (phone.trim().length < 7) nextErrors.phone = 'Please enter a valid phone number.';
    if (message.trim().length < 10) nextErrors.message = 'Please include a short message.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <main className="bg-white pb-24">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-semibold text-[#0B172A] transition-colors hover:text-[#937029]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to All Properties</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Properties</span>
            <span aria-hidden="true">/</span>
            <span>{property.category}</span>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#0B172A]">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        {/* Sample Placeholder Disclosure */}
        <div className="mb-8 flex items-start gap-3 rounded-md border border-[#B89242]/35 bg-[#B89242]/8 px-4 py-3 text-sm text-[#0B172A]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#937029]" aria-hidden="true" />
          <p>
            <strong>Sample Placeholder Listing:</strong> This listing demonstrates layout, pricing
            formatting, and property specifications. Replace with verified live inventory and
            confirmed availability prior to publication.
          </p>
        </div>

        {/* Header Summary */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#937029] uppercase">
              <span>{property.category}</span>
              <span aria-hidden="true">·</span>
              <span>{property.intent === 'Buy' ? 'For Sale' : 'For Rent'}</span>
              <span aria-hidden="true">·</span>
              <span>{property.yearOrStatus}</span>
            </div>

            <h1 className="mt-2 font-display text-3xl font-semibold text-[#0B172A] sm:text-5xl">
              {property.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-base text-slate-600">
              <MapPin className="h-4 w-4 shrink-0 text-[#B89242]" aria-hidden="true" />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="lg:text-right">
            <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
              Indicative Guide Price
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#0B172A] tabular-nums sm:text-4xl">
              {property.priceDisplay}
              {property.rentPeriod && (
                <span className="ml-1.5 text-base font-normal text-slate-500">
                  {property.rentPeriod}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Split Layout: Gallery & Details + Consultation Panel */}
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
              <ImageWithFallback
                src={property.image}
                alt={property.title}
                fallbackTitle={property.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Key Architectural Specifications */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 sm:grid-cols-4">
              <div>
                <p className="text-xs text-slate-500">Bedrooms</p>
                <p className="mt-1 flex items-center gap-1.5 text-base font-semibold text-[#0B172A] tabular-nums">
                  <BedDouble className="h-4 w-4 text-[#B89242]" aria-hidden="true" />
                  <span>{property.bedrooms > 0 ? property.bedrooms : 'N/A'}</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Bathrooms</p>
                <p className="mt-1 flex items-center gap-1.5 text-base font-semibold text-[#0B172A] tabular-nums">
                  <Bath className="h-4 w-4 text-[#B89242]" aria-hidden="true" />
                  <span>{property.bathrooms > 0 ? property.bathrooms : 'Serviced'}</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Property Size</p>
                <p className="mt-1 flex items-center gap-1.5 text-base font-semibold text-[#0B172A] tabular-nums">
                  <Maximize2 className="h-4 w-4 text-[#B89242]" aria-hidden="true" />
                  <span>{property.sizeDisplay}</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Transaction</p>
                <p className="mt-1 text-base font-semibold text-[#0B172A]">
                  {property.intent === 'Buy' ? 'Purchase' : 'Lease'}
                </p>
              </div>
            </div>

            {/* Architectural Overview */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-[#0B172A]">
                Property Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{property.description}</p>
            </div>

            {/* Key Highlights */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-[#0B172A]">
                Key Features &amp; Specifications
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {property.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-md border border-slate-200 bg-white p-3.5 text-sm text-slate-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#937029]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Investment & Documentation */}
            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-[#937029] uppercase">
                  Consultancy Perspective
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {property.investmentNote}
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#937029] uppercase">
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Documentation Note</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {property.titleDocument}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Property Enquiry Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#937029] uppercase">
                Property Advisory
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-[#0B172A]">
                Enquire About This Property
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Consult directly with Abbas Umar &amp; the DANMAMA HOMES advisory team to schedule a
                private viewing or request due-diligence documentation.
              </p>

              {/* Direct WhatsApp Button */}
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    `Hello DANMAMA HOMES, I am interested in "${property.title}" (${property.location}, listed at ${property.priceDisplay}). Please share availability and next steps.`
                  )
                }
                className="mt-5 inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-[#16A34A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#15803D]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>WhatsApp About This Property</span>
              </button>

              <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                <span>Or submit an enquiry</span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              {submitted ? (
                <div className="rounded-md border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
                  <p className="font-semibold">Enquiry Prepared</p>
                  <p className="mt-1 text-emerald-800">
                    Thank you, {name}. Your property enquiry for{' '}
                    <span className="font-medium">{property.title}</span> has been validated. You
                    can also send this immediately via WhatsApp for faster response.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 cursor-pointer text-xs font-semibold text-[#0B172A] underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="detail-name"
                      className="mb-1 block text-xs font-semibold text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="detail-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="h-11 w-full rounded-md border border-slate-300 bg-white px-3.5 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="detail-email"
                      className="mb-1 block text-xs font-semibold text-slate-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="detail-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="h-11 w-full rounded-md border border-slate-300 bg-white px-3.5 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="detail-phone"
                      className="mb-1 block text-xs font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="detail-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 ..."
                      className="h-11 w-full rounded-md border border-slate-300 bg-white px-3.5 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="detail-message"
                      className="mb-1 block text-xs font-semibold text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="detail-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-md border border-slate-300 bg-white p-3.5 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0B172A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#132542]"
                  >
                    <Send className="h-4 w-4 text-[#D4B062]" aria-hidden="true" />
                    <span>Request Property Consultation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
