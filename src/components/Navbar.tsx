import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
  onBackToHome: () => void;
  isDetailPage: boolean;
}

const NAV_LINKS = [
  { label: 'Properties', target: 'properties' },
  { label: 'About', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Investment', target: 'investment' },
  { label: 'Contact', target: 'contact' },
];

export function Navbar({ onNavigateSection, onBackToHome, isDetailPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (target: string) => {
    setMobileOpen(false);
    onNavigateSection(target);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled || isDetailPage
          ? 'border-b border-slate-200/80 bg-white/95 backdrop-blur-md'
          : 'border-b border-white/10 bg-[#0B172A]/90 text-white backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 lg:h-[72px] lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={onBackToHome}
          className={`font-display cursor-pointer text-xl font-semibold tracking-[0.14em] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B89242] sm:text-2xl ${
            scrolled || isDetailPage ? 'text-[#0B172A]' : 'text-white'
          }`}
        >
          DANMAMA HOMES
        </button>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleLinkClick(item.target)}
              className={`cursor-pointer border-b border-transparent py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B89242] ${
                scrolled || isDetailPage
                  ? 'text-slate-600 hover:border-[#B89242] hover:text-[#0B172A]'
                  : 'text-slate-200 hover:border-[#D4B062] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="hidden cursor-pointer rounded-md bg-[#B89242] px-5 py-2.5 text-sm font-semibold text-[#0B172A] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#D4B062] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B062] md:inline-flex"
          >
            Consult Team
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md transition-colors md:hidden ${
              scrolled || isDetailPage
                ? 'text-[#0B172A] hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 text-[#0B172A] shadow-lg md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleLinkClick(item.target)}
                className="flex min-h-[44px] w-full cursor-pointer items-center border-b border-slate-100 text-left text-base font-medium text-slate-700 transition-colors hover:text-[#0B172A]"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="mt-4 flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-md bg-[#0B172A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#132542]"
            >
              Consult Team
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
