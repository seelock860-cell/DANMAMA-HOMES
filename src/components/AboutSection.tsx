import { ArrowRight } from 'lucide-react';
import { FOUNDER_IMAGE } from '../data/properties';
import { ImageWithFallback } from './ImageWithFallback';

interface AboutSectionProps {
  onConsultFounder: () => void;
}

export function AboutSection({ onConsultFounder }: AboutSectionProps) {
  return (
    <section id="about" className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[440px] overflow-hidden rounded-lg border border-slate-200 bg-white">
              <ImageWithFallback
                src={FOUNDER_IMAGE}
                alt="Abbas Umar, Founder, Realtor & Property Consultant at DANMAMA HOMES"
                fallbackTitle="Abbas Umar"
                className="h-full w-full object-cover object-top"
              />
              <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B172A]/95 via-[#0B172A]/70 to-transparent p-6 text-white"
              >
                <p className="font-display text-2xl font-semibold text-white">Abbas Umar</p>
                <p className="mt-0.5 text-xs font-medium tracking-wider text-[#E5CA8B] uppercase">
                  Founder · Realtor &amp; Property Consultant
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Narrative Column */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#937029] uppercase">
              About DANMAMA HOMES
            </p>

            <h2
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#0B172A] sm:text-4xl lg:text-[42px]"
              style={{ textWrap: 'balance' }}
            >
              Clarity, Integrity, and Strategic Guidance in Every Property Decision.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                <strong className="font-semibold text-[#0B172A]">DANMAMA HOMES</strong> is a real
                estate, property consultancy, and property investment firm dedicated to helping
                individuals, families, and institutional buyers acquire quality homes and
                high-potential assets with confidence.
              </p>

              <p>
                Property decisions carry lasting financial and personal significance. Rather than
                rushing transactions, we guide clients through careful market evaluation, location
                analysis, physical inspections, and transparent documentation review—ensuring every
                purchase, lease, or land acquisition aligns with your long-term objectives.
              </p>

              <p>
                Founded by <strong className="font-semibold text-[#0B172A]">Abbas Umar</strong>,
                Realtor &amp; Property Consultant, DANMAMA HOMES combines disciplined advisory
                standards with attentive client service across residential living, commercial
                leasing, and wealth-building real estate investments.
              </p>
            </div>

            {/* Structured Pillars */}
            <div className="mt-8 grid grid-cols-1 gap-6 border-y border-slate-200 py-6 sm:grid-cols-3">
              <div>
                <p className="font-display text-xl font-semibold text-[#0B172A]">
                  Property Discovery
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Shortlisting vetted residences, commercial spaces, and prime land parcels.
                </p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-[#0B172A]">
                  Informed Decisions
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Objective market guidance and clear due-diligence checkpoints.
                </p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-[#0B172A]">
                  Wealth Strategy
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Identifying properties structured for long-term capital growth and yield.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onConsultFounder}
                className="inline-flex min-h-[46px] cursor-pointer items-center gap-2.5 rounded-md bg-[#0B172A] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#132542] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B172A]"
              >
                <span>Schedule a Consultation with Abbas Umar</span>
                <ArrowRight className="h-4 w-4 text-[#D4B062]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
