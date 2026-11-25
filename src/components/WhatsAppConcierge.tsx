import { ExternalLink, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CompanyContactConfig } from '../types/realEstate';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WhatsAppConciergeProps {
  isOpen: boolean;
  presetMessage: string;
  contactConfig: CompanyContactConfig;
  onUpdateContactConfig: (next: CompanyContactConfig) => void;
  onOpen: (preset?: string) => void;
  onClose: () => void;
}

export function WhatsAppConcierge({
  isOpen,
  presetMessage,
  contactConfig,
  onUpdateContactConfig,
  onOpen,
  onClose,
}: WhatsAppConciergeProps) {
  const [message, setMessage] = useState(presetMessage);
  const [numberInput, setNumberInput] = useState(contactConfig.whatsapp);

  useEffect(() => {
    setMessage(presetMessage);
  }, [presetMessage]);

  useEffect(() => {
    setNumberInput(contactConfig.whatsapp);
  }, [contactConfig.whatsapp]);

  const cleanedNumber = numberInput.replace(/[^\d]/g, '');
  const encodedMsg = encodeURIComponent(message);
  const waHref = cleanedNumber
    ? `https://wa.me/${cleanedNumber}?text=${encodedMsg}`
    : `https://wa.me/?text=${encodedMsg}`;

  const handleSaveNumber = () => {
    onUpdateContactConfig({
      ...contactConfig,
      whatsapp: numberInput,
      isConfigured: Boolean(cleanedNumber) || contactConfig.isConfigured,
    });
  };

  return (
    <>
      {/* Floating Pumping WhatsApp Action Button */}
      <div className="fixed right-5 bottom-5 z-40 sm:right-7 sm:bottom-7">
        <div className="relative inline-flex items-center">
          <span
            className="whatsapp-ring pointer-events-none absolute -inset-1 rounded-full bg-emerald-500/35"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={() =>
              onOpen(
                'Hello DANMAMA HOMES, I would like to speak with Abbas Umar regarding a property enquiry.'
              )
            }
            aria-label="Open WhatsApp property enquiry"
            className="whatsapp-pump relative inline-flex h-12 cursor-pointer items-center gap-2.5 rounded-full bg-[#16A34A] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#15803D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B172A] sm:h-13 sm:px-5"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            <span className="hidden whitespace-nowrap sm:inline">WhatsApp Enquiry</span>
          </button>
        </div>
      </div>

      {/* WhatsApp Concierge Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#060E1B]/70 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-modal-title"
        >
          <div className="w-full max-w-md overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-[#0B172A] px-6 py-4 text-white">
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="h-5 w-5 text-[#22C55E]" />
                <div>
                  <h2 id="whatsapp-modal-title" className="font-display text-xl font-semibold">
                    DANMAMA HOMES WhatsApp
                  </h2>
                  <p className="text-[11px] text-slate-300">
                    Direct Property Consultation Desk
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close WhatsApp modal"
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 p-6">
              <div>
                <label
                  htmlFor="wa-target-number"
                  className="mb-1 block text-xs font-semibold text-slate-700"
                >
                  Company WhatsApp Number (Editable Placeholder)
                </label>
                <div className="flex gap-2">
                  <input
                    id="wa-target-number"
                    type="tel"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                    placeholder="Enter digits with country code (e.g. 2348000000000)"
                    className="h-10 flex-1 rounded-md border border-slate-300 px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleSaveNumber}
                    className="cursor-pointer rounded-md border border-slate-300 bg-slate-50 px-3 text-xs font-semibold text-[#0B172A] hover:bg-slate-100"
                  >
                    Save
                  </button>
                </div>
                {!cleanedNumber && (
                  <p className="mt-1 text-[11px] text-slate-500">
                    No WhatsApp number set yet. Add the official number above or open WhatsApp to
                    select a contact manually.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="wa-message"
                  className="mb-1 block text-xs font-semibold text-slate-700"
                >
                  Your Message
                </label>
                <textarea
                  id="wa-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-md border border-slate-300 p-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="min-h-[42px] cursor-pointer rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSaveNumber}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[#16A34A] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#15803D]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Open in WhatsApp</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
