import { Check, Instagram, Mail, MapPin, Pencil, Phone, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CompanyContactConfig } from '../types/realEstate';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactSectionProps {
  contactConfig: CompanyContactConfig;
  onUpdateContactConfig: (next: CompanyContactConfig) => void;
  presetSubject?: string;
  onOpenWhatsApp: (presetMessage?: string) => void;
}

export function ContactSection({
  contactConfig,
  onUpdateContactConfig,
  presetSubject,
  onOpenWhatsApp,
}: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const [editingPlaceholders, setEditingPlaceholders] = useState(false);
  const [draftConfig, setDraftConfig] = useState<CompanyContactConfig>(contactConfig);

  useEffect(() => {
    setDraftConfig(contactConfig);
  }, [contactConfig]);

  useEffect(() => {
    if (presetSubject) {
      setMessage((prev) =>
        prev.trim()
          ? prev
          : `Hello DANMAMA HOMES, I would like to enquire about ${presetSubject}.`
      );
    }
  }, [presetSubject]);

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!/^[+\d\s()-]{7,20}$/.test(phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number (7–20 digits).';
    }
    if (message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleSavePlaceholders = () => {
    onUpdateContactConfig({
      ...draftConfig,
      isConfigured: true,
    });
    setEditingPlaceholders(false);
  };

  return (
    <section id="contact" className="border-t border-slate-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Details & Editable Placeholders */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#937029] uppercase">
              Contact Our Team
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0B172A] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Speak Directly With DANMAMA HOMES
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Whether you are acquiring a family residence, evaluating an investment parcel, or
              seeking property consultancy from Abbas Umar, our team is ready to assist.
            </p>

            {/* Editable Placeholder Notice & Fields */}
            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#0B172A]">
                    Company Contact Information
                  </h3>
                  <p className="text-xs text-slate-500">
                    {contactConfig.isConfigured
                      ? 'Updated custom contact details'
                      : 'Editable placeholders — replace with real details'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    editingPlaceholders ? handleSavePlaceholders() : setEditingPlaceholders(true)
                  }
                  className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-[#0B172A] transition-colors hover:border-[#0B172A]"
                >
                  {editingPlaceholders ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                      <span>Save</span>
                    </>
                  ) : (
                    <>
                      <Pencil className="h-3.5 w-3.5 text-[#937029]" aria-hidden="true" />
                      <span>Edit Details</span>
                    </>
                  )}
                </button>
              </div>

              {editingPlaceholders ? (
                <div className="mt-4 space-y-3">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-600">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={draftConfig.phone}
                      onChange={(e) => setDraftConfig({ ...draftConfig, phone: e.target.value })}
                      placeholder="Enter official phone number"
                      className="h-10 w-full rounded border border-slate-300 bg-white px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-600">
                      WhatsApp Number (with country code, e.g. 2348000000000)
                    </label>
                    <input
                      type="text"
                      value={draftConfig.whatsapp}
                      onChange={(e) =>
                        setDraftConfig({ ...draftConfig, whatsapp: e.target.value })
                      }
                      placeholder="e.g. 2348000000000"
                      className="h-10 w-full rounded border border-slate-300 bg-white px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-600">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={draftConfig.email}
                      onChange={(e) => setDraftConfig({ ...draftConfig, email: e.target.value })}
                      placeholder="Enter official email address"
                      className="h-10 w-full rounded border border-slate-300 bg-white px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-600">
                      Office Address
                    </label>
                    <input
                      type="text"
                      value={draftConfig.officeAddress}
                      onChange={(e) =>
                        setDraftConfig({ ...draftConfig, officeAddress: e.target.value })
                      }
                      placeholder="Enter office street & city"
                      className="h-10 w-full rounded border border-slate-300 bg-white px-3 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#937029]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-medium text-slate-500">Phone</p>
                      <p className="font-medium text-[#0B172A]">{contactConfig.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#937029]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-medium text-slate-500">Email</p>
                      <p className="font-medium text-[#0B172A]">{contactConfig.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#937029]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-medium text-slate-500">Office Address</p>
                      <p className="font-medium text-[#0B172A]">{contactConfig.officeAddress}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Direct WhatsApp & Instagram Actions */}
              <div className="mt-6 grid grid-cols-1 gap-3 border-t border-slate-200 pt-5 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    onOpenWhatsApp(
                      'Hello DANMAMA HOMES, I would like to connect with your property consultancy team.'
                    )
                  }
                  className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-md bg-[#16A34A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#15803D]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Enquiry</span>
                </button>

                <a
                  href="https://instagram.com/danmamahomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-[#0B172A] bg-white px-4 py-2.5 text-sm font-semibold text-[#0B172A] transition-colors hover:bg-[#0B172A] hover:text-white"
                >
                  <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>@danmamahomes</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <h3 className="font-display text-2xl font-semibold text-[#0B172A] sm:text-3xl">
                Send a Direct Enquiry
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Share your property requirements below and our consultancy team will follow up
                promptly.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
                  <p className="font-display text-2xl font-semibold text-emerald-950">
                    Thank You, {fullName}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                    Your enquiry has been validated and prepared for the DANMAMA HOMES team. For
                    immediate real-time conversation, you can also forward this message directly on
                    WhatsApp.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenWhatsApp(
                          `Hello DANMAMA HOMES, my name is ${fullName} (${phone}, ${email}). ${message}`
                        )
                      }
                      className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md bg-[#16A34A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#15803D]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Continue on WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="inline-flex min-h-[44px] cursor-pointer items-center rounded-md border border-emerald-300 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-950 hover:bg-emerald-100"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={validateAndSubmit} noValidate className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="contact-fullname"
                      className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-700 uppercase"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-700 uppercase"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-700 uppercase"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-700 uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about the property type, location, budget, or advisory service you are looking for..."
                      className="w-full rounded-md border border-slate-300 bg-white p-4 text-sm text-[#0B172A] focus:border-[#B89242] focus:outline-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-[#0B172A] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#132542] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B172A]"
                  >
                    <Send className="h-4 w-4 text-[#D4B062]" aria-hidden="true" />
                    <span>Submit Property Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
