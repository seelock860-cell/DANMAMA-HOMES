import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/properties';

interface ServicesSectionProps {
  onInquireService: (serviceTitle: string) => void;
}

export function ServicesSection({ onInquireService }: ServicesSectionProps) {
  return (
    <section id="services" className="border-t border-slate-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#937029] uppercase">
            Our Services
          </p>
          <h2
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0B172A] sm:text-4xl lg:text-[42px]"
            style={{ textWrap: 'balance' }}
          >
            End-to-End Real Estate Advisory &amp; Asset Services
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            From your first property search to ongoing asset management, DANMAMA HOMES delivers
            focused representation across every stage of ownership.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col justify-between bg-white p-8 transition-colors duration-200 hover:bg-slate-50"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-3xl font-semibold text-[#B89242] tabular-nums">
                    {service.number}.
                  </span>
                  <span className="text-xs font-medium text-slate-500">{service.deliverable}</span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-[#0B172A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => onInquireService(service.title)}
                  className="inline-flex cursor-pointer items-center gap-2 text-xs font-semibold tracking-wider text-[#0B172A] uppercase transition-colors hover:text-[#937029]"
                >
                  <span>Enquire About {service.title}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
