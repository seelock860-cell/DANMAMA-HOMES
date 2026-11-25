import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { INVESTMENT_IMAGE } from '../data/properties';
import { ImageWithFallback } from './ImageWithFallback';

interface InvestmentSectionProps {
  onConsultInvestment: () => void;
}

export function InvestmentSection({ onConsultInvestment }: InvestmentSectionProps) {
  const [capital, setCapital] = useState(500000);
  const [annualYieldPct, setAnnualYieldPct] = useState(7.5);
  const [appreciationPct, setAppreciationPct] = useState(8);
  const [years, setYears] = useState(5);

  const projectedValue = Math.round(capital * Math.pow(1 + appreciationPct / 100, years));
  const cumulativeRent = Math.round(capital * (annualYieldPct / 100) * years);
  const totalIllustrativeGain = projectedValue - capital + cumulativeRent;

  return (
    <section id="investment" className="bg-[#0B172A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative & Strategic Pillars */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#E5CA8B] uppercase">
                Property Investment
              </p>
              <h2
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[42px]"
                style={{ textWrap: 'balance' }}
              >
                Build Lasting Wealth Through Strategic Real Estate
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Real estate remains one of the most resilient asset classes for preserving capital,
                generating recurring income, and compounding long-term equity. At DANMAMA HOMES, we
                help investors identify high-growth corridors before demand peaks.
              </p>

              <div className="mt-8 space-y-5 border-t border-white/15 pt-8">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#E5CA8B]">
                    01. Capital Appreciation &amp; Land Value Growth
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Well-located residences and titled land parcels appreciate alongside urban
                    infrastructure expansion and neighborhood maturity.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#E5CA8B]">
                    02. Recurring Rental Yield &amp; Inflation Hedge
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Quality residential and commercial properties produce steady cash flow while
                    adapting naturally to long-term economic shifts.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#E5CA8B]">
                    03. Disciplined Due Diligence
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Every investment recommendation prioritizes verifiable documentation, realistic
                    exit liquidity, and construction integrity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onConsultInvestment}
                className="inline-flex min-h-[46px] cursor-pointer items-center gap-2.5 rounded-md bg-[#B89242] px-6 py-3 text-sm font-semibold text-[#0B172A] transition-colors hover:bg-[#D4B062]"
              >
                <span>Discuss Investment Opportunities</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Photography + Illustrative Estimator */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/15">
              <ImageWithFallback
                src={INVESTMENT_IMAGE}
                alt="Waterfront luxury residential towers illuminated at dusk"
                fallbackTitle="Strategic Real Estate Investment"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Interactive Illustrative Investment Planner */}
            <div className="rounded-lg border border-white/15 bg-[#132542] p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-semibold text-white">
                  Illustrative Investment Horizon Planner
                </h3>
                <span className="text-xs text-slate-300">Educational planning tool</span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <label htmlFor="calc-capital">Property Value</label>
                    <span className="font-semibold text-white tabular-nums">
                      ${capital.toLocaleString()}
                    </span>
                  </div>
                  <input
                    id="calc-capital"
                    type="range"
                    min={100000}
                    max={3000000}
                    step={50000}
                    value={capital}
                    onChange={(e) => setCapital(Number(e.target.value))}
                    className="mt-2 w-full accent-[#D4B062]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <label htmlFor="calc-years">Holding Horizon</label>
                    <span className="font-semibold text-white tabular-nums">{years} Years</span>
                  </div>
                  <input
                    id="calc-years"
                    type="range"
                    min={1}
                    max={15}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="mt-2 w-full accent-[#D4B062]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <label htmlFor="calc-yield">Est. Annual Rental Yield</label>
                    <span className="font-semibold text-white tabular-nums">
                      {annualYieldPct.toFixed(1)}%
                    </span>
                  </div>
                  <input
                    id="calc-yield"
                    type="range"
                    min={3}
                    max={12}
                    step={0.5}
                    value={annualYieldPct}
                    onChange={(e) => setAnnualYieldPct(Number(e.target.value))}
                    className="mt-2 w-full accent-[#D4B062]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <label htmlFor="calc-appreciation">Est. Annual Appreciation</label>
                    <span className="font-semibold text-white tabular-nums">
                      {appreciationPct}%
                    </span>
                  </div>
                  <input
                    id="calc-appreciation"
                    type="range"
                    min={2}
                    max={15}
                    step={1}
                    value={appreciationPct}
                    onChange={(e) => setAppreciationPct(Number(e.target.value))}
                    className="mt-2 w-full accent-[#D4B062]"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/15 pt-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-slate-300">Projected Asset Value</p>
                  <p className="mt-1 text-lg font-bold text-white tabular-nums">
                    ${projectedValue.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-300">Cumulative Gross Rent</p>
                  <p className="mt-1 text-lg font-bold text-[#E5CA8B] tabular-nums">
                    ${cumulativeRent.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-300">Illustrative Total Gain</p>
                  <p className="mt-1 text-lg font-bold text-emerald-300 tabular-nums">
                    +${totalIllustrativeGain.toLocaleString()}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
                Disclaimer: Figures above are hypothetical mathematical illustrations based on your
                slider inputs and do not represent guaranteed returns or past performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
