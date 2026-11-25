import { WHY_CHOOSE_US } from '../data/properties';

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="border-t border-slate-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#937029] uppercase">
              Why Choose Us
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0B172A] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              A Standard Built on Advisory Trust
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every mandate at DANMAMA HOMES is handled with professional discipline, clear
              communication, and an unwavering focus on your long-term outcome.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <div className="sm:col-span-5">
                    <span className="mr-3 font-display text-lg font-semibold text-[#B89242] tabular-nums">
                      {item.number}.
                    </span>
                    <h3 className="inline font-display text-xl font-semibold text-[#0B172A]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 sm:col-span-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
