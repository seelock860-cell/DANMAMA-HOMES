import { Instagram } from 'lucide-react';
import { PROPERTY_CATEGORIES } from '../data/properties';
import { CompanyContactConfig, PropertyCategory } from '../types/realEstate';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  contactConfig: CompanyContactConfig;
  onNavigateSection: (sectionId: string) => void;
  onFilterCategory: (category: PropertyCategory) => void;
  onOpenWhatsApp: (presetMessage?: string) => void;
}

export function Footer({
  contactConfig,
  onNavigateSection,
  onFilterCategory,
  onOpenWhatsApp,
}: FooterProps) {
  return (
    <footer className="bg-[#060E1B] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <p className="font-display text-2xl font-semibold tracking-[0.14em] text-white">
              DANMAMA HOMES
            </p>
            <p className="mt-2 font-display text-lg text-[#E5CA8B]">
              Your Future. Your Property. Your Investment.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Real estate sales, rentals, consultancy, and strategic property investment led by
              founder Abbas Umar, Realtor &amp; Property Consultant.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-[#E5CA8B] uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Properties', id: 'properties' },
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Investment', id: 'investment' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigateSection(link.id)}
                    className="cursor-pointer text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-[#E5CA8B] uppercase">
              Property Categories
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PROPERTY_CATEGORIES.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => onFilterCategory(category)}
                    className="cursor-pointer text-slate-300 transition-colors hover:text-white"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-[#E5CA8B] uppercase">
              Contact &amp; Social
            </h3>
            <div className="mt-4 space-y-2.5 text-sm text-slate-300">
              <p>{contactConfig.phone}</p>
              <p>{contactConfig.email}</p>
              <p>{contactConfig.officeAddress}</p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/danmamahomes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded border border-white/20 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:border-[#D4B062] hover:text-[#E5CA8B]"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>@danmamahomes</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    'Hello DANMAMA HOMES, I would like to connect with your real estate team.'
                  )
                }
                className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded bg-[#16A34A] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#15803D]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} DANMAMA HOMES. All rights reserved.</p>
          <p>Sample listings and placeholders shown are editable prior to publication.</p>
        </div>
      </div>
    </footer>
  );
}
