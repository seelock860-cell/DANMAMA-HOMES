import { MotionConfig } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FeaturedProperties } from './components/FeaturedProperties';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InvestmentSection } from './components/InvestmentSection';
import { Navbar } from './components/Navbar';
import { PropertyDetailsView } from './components/PropertyDetailsView';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsAppConcierge } from './components/WhatsAppConcierge';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import {
  DEFAULT_CONTACT_CONFIG,
  DEFAULT_TESTIMONIALS,
  SAMPLE_PROPERTIES,
} from './data/properties';
import {
  CompanyContactConfig,
  Property,
  PropertyCategory,
  SearchFilters,
  TestimonialItem,
} from './types/realEstate';

const DEFAULT_FILTERS: SearchFilters = {
  location: 'All',
  category: 'All',
  intent: 'All',
  priceRange: 'all',
};

const STORAGE_KEYS = {
  contact: 'danmama_homes_contact_config_v1',
  testimonials: 'danmama_homes_testimonials_v1',
};

export default function App() {
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
  const [selectedPropertySlug, setSelectedPropertySlug] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#property/')) {
      return window.location.hash.replace('#property/', '');
    }
    return null;
  });

  const [presetContactSubject, setPresetContactSubject] = useState<string | undefined>(undefined);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState(
    'Hello DANMAMA HOMES, I would like to inquire about your properties and consultancy services.'
  );

  const [contactConfig, setContactConfig] = useState<CompanyContactConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.contact);
      return saved ? (JSON.parse(saved) as CompanyContactConfig) : DEFAULT_CONTACT_CONFIG;
    } catch {
      return DEFAULT_CONTACT_CONFIG;
    }
  });

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.testimonials);
      return saved ? (JSON.parse(saved) as TestimonialItem[]) : DEFAULT_TESTIMONIALS;
    } catch {
      return DEFAULT_TESTIMONIALS;
    }
  });

  const selectedProperty = useMemo(
    () => SAMPLE_PROPERTIES.find((p) => p.slug === selectedPropertySlug) ?? null,
    [selectedPropertySlug]
  );

  // Sync browser hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#property/')) {
        setSelectedPropertySlug(window.location.hash.replace('#property/', ''));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSelectedPropertySlug(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // SEO-friendly dynamic document title
  useEffect(() => {
    if (selectedProperty) {
      document.title = `${selectedProperty.title} | DANMAMA HOMES`;
    } else {
      document.title = 'DANMAMA HOMES | Luxury Real Estate, Property Consultancy & Investment';
    }
  }, [selectedProperty]);

  const handleUpdateContactConfig = (next: CompanyContactConfig) => {
    setContactConfig(next);
    try {
      localStorage.setItem(STORAGE_KEYS.contact, JSON.stringify(next));
    } catch {
      // Ignore storage quota errors
    }
  };

  const handleUpdateTestimonials = (next: TestimonialItem[]) => {
    setTestimonials(next);
    try {
      localStorage.setItem(STORAGE_KEYS.testimonials, JSON.stringify(next));
    } catch {
      // Ignore storage quota errors
    }
  };

  const handleResetTestimonials = () => {
    setTestimonials(DEFAULT_TESTIMONIALS);
    try {
      localStorage.removeItem(STORAGE_KEYS.testimonials);
    } catch {
      // Ignore storage quota errors
    }
  };

  const filteredProperties = useMemo(() => {
    return SAMPLE_PROPERTIES.filter((property) => {
      if (filters.location !== 'All' && property.district !== filters.location) {
        return false;
      }
      if (filters.category !== 'All' && property.category !== filters.category) {
        return false;
      }
      if (filters.intent !== 'All' && property.intent !== filters.intent) {
        return false;
      }
      if (filters.priceRange !== 'all') {
        if (filters.priceRange === 'under-350k' && property.price >= 350000) return false;
        if (
          filters.priceRange === '350k-750k' &&
          (property.price < 350000 || property.price > 750000)
        ) {
          return false;
        }
        if (
          filters.priceRange === '750k-1.5m' &&
          (property.price <= 750000 || property.price > 1500000)
        ) {
          return false;
        }
        if (filters.priceRange === 'over-1.5m' && property.price <= 1500000) return false;
      }
      return true;
    });
  }, [filters]);

  const scrollToSection = (sectionId: string) => {
    if (selectedProperty) {
      setSelectedPropertySlug(null);
      window.history.replaceState(null, '', `#${sectionId}`);
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 40);
      });
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProperty = (property: Property) => {
    setSelectedPropertySlug(property.slug);
    window.location.hash = `property/${property.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedPropertySlug(null);
    window.history.replaceState(null, '', '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterFromFooter = (category: PropertyCategory) => {
    setFilters({ ...DEFAULT_FILTERS, category });
    scrollToSection('properties');
  };

  const handleOpenWhatsApp = (preset?: string) => {
    if (preset) {
      setWhatsAppMessage(preset);
    }
    setWhatsAppModalOpen(true);
  };

  const handleInquireSubject = (subject: string) => {
    setPresetContactSubject(subject);
    scrollToSection('contact');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-white text-[#0B172A]">
        <Navbar
          onNavigateSection={scrollToSection}
          onBackToHome={handleBackToHome}
          isDetailPage={Boolean(selectedProperty)}
        />

        {selectedProperty ? (
          <PropertyDetailsView
            property={selectedProperty}
            onBack={() => {
              setSelectedPropertySlug(null);
              window.history.replaceState(null, '', '#properties');
              requestAnimationFrame(() => {
                setTimeout(() => {
                  document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
                }, 40);
              });
            }}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        ) : (
          <main className="flex-1">
            <HeroSection
              filters={filters}
              onFiltersChange={setFilters}
              onSearchSubmit={() => scrollToSection('properties')}
              onExploreProperties={() => scrollToSection('properties')}
              onContactTeam={() => scrollToSection('contact')}
              onOpenWhatsApp={handleOpenWhatsApp}
            />

            <FeaturedProperties
              properties={filteredProperties}
              filters={filters}
              onSelectCategory={(category) => setFilters((prev) => ({ ...prev, category }))}
              onResetFilters={() => setFilters(DEFAULT_FILTERS)}
              onSelectProperty={handleSelectProperty}
            />

            <AboutSection
              onConsultFounder={() => handleInquireSubject('a consultation with Abbas Umar')}
            />

            <ServicesSection onInquireService={handleInquireSubject} />

            <InvestmentSection
              onConsultInvestment={() => handleInquireSubject('Property Investment Advisory')}
            />

            <WhyChooseUsSection />

            <TestimonialsSection
              testimonials={testimonials}
              onUpdateTestimonials={handleUpdateTestimonials}
              onResetTestimonials={handleResetTestimonials}
            />

            <ContactSection
              contactConfig={contactConfig}
              onUpdateContactConfig={handleUpdateContactConfig}
              presetSubject={presetContactSubject}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          </main>
        )}

        <Footer
          contactConfig={contactConfig}
          onNavigateSection={scrollToSection}
          onFilterCategory={handleFilterFromFooter}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        <WhatsAppConcierge
          isOpen={whatsAppModalOpen}
          presetMessage={whatsAppMessage}
          contactConfig={contactConfig}
          onUpdateContactConfig={handleUpdateContactConfig}
          onOpen={handleOpenWhatsApp}
          onClose={() => setWhatsAppModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
