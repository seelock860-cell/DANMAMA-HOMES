import { Check, Pencil, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { TestimonialItem } from '../types/realEstate';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
  onUpdateTestimonials: (next: TestimonialItem[]) => void;
  onResetTestimonials: () => void;
}

export function TestimonialsSection({
  testimonials,
  onUpdateTestimonials,
  onResetTestimonials,
}: TestimonialsSectionProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleFieldChange = (
    id: string,
    field: keyof TestimonialItem,
    value: string
  ) => {
    onUpdateTestimonials(
      testimonials.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <section id="testimonials" className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#937029] uppercase">
              Client Perspectives · Sample Placeholders
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0B172A] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Editable Client Testimonials
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              These entries are sample placeholder templates—not real customer reviews. Click{' '}
              <strong>Edit Placeholders</strong> to customize them with verified client feedback
              before publishing.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsEditing((prev) => !prev)}
              className={`inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                isEditing
                  ? 'bg-[#0B172A] text-white hover:bg-[#132542]'
                  : 'border border-slate-300 bg-white text-[#0B172A] hover:border-[#0B172A]'
              }`}
            >
              {isEditing ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#D4B062]" aria-hidden="true" />
                  <span>Done Editing</span>
                </>
              ) : (
                <>
                  <Pencil className="h-3.5 w-3.5 text-[#937029]" aria-hidden="true" />
                  <span>Edit Placeholders</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onResetTestimonials}
              className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 whitespace-nowrap transition-colors hover:text-[#0B172A]"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-7"
            >
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-500">
                      Service Category
                    </label>
                    <input
                      type="text"
                      value={item.category}
                      onChange={(e) => handleFieldChange(item.id, 'category', e.target.value)}
                      className="h-9 w-full rounded border border-slate-300 px-3 text-xs text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-500">
                      Testimonial Quote
                    </label>
                    <textarea
                      rows={4}
                      value={item.quote}
                      onChange={(e) => handleFieldChange(item.id, 'quote', e.target.value)}
                      className="w-full rounded border border-slate-300 p-2.5 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-500">
                      Client Name
                    </label>
                    <input
                      type="text"
                      value={item.author}
                      onChange={(e) => handleFieldChange(item.id, 'author', e.target.value)}
                      className="h-9 w-full rounded border border-slate-300 px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-500">
                      Role / Context
                    </label>
                    <input
                      type="text"
                      value={item.role}
                      onChange={(e) => handleFieldChange(item.id, 'role', e.target.value)}
                      className="h-9 w-full rounded border border-slate-300 px-3 text-xs text-slate-600 focus:border-[#B89242] focus:outline-none"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-[#937029] uppercase">
                      {item.category} · Sample Placeholder
                    </p>
                    <blockquote className="mt-4 text-base leading-relaxed text-slate-700">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-display text-lg font-semibold text-[#0B172A]">
                      {item.author}
                    </p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
