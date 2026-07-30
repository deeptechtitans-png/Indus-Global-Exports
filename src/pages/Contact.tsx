import { useState, type FormEvent } from 'react';
import {
  Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageCircle, Handshake,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE } from '../data/site';

const HERO_IMG = 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  usePageMeta('Contact Us', 'Get in touch with Indusglobal Export for export enquiries, quotes and partnerships. Email, phone and WhatsApp available.');
  useScrollReveal();

  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    const subject = encodeURIComponent(`Export enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${data.get('company') || '-'}\nProduct: ${data.get('product') || '-'}\n\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
    form.reset();
  };

  return (
    <>
      <PageHero
        title="Let's start trading together"
        subtitle="Tell us what you need and our team will respond within one business day with pricing, samples and next steps."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        image={HERO_IMG}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="reveal lg:col-span-2">
            <div className="card h-full overflow-hidden">
              <div className="bg-gradient-to-br from-navy-800 to-navy-950 p-7 text-white">
                <h3 className="font-display text-xl font-bold">Contact details</h3>
                <p className="mt-2 text-sm text-navy-300">
                  Reach out directly — we are happy to answer questions about products, pricing or documentation.
                </p>

                <ul className="mt-7 space-y-5">
                  <ContactRow icon={Mail} label="Email">
                    <a href={`mailto:${SITE.email}`} className="break-all text-sm font-medium text-white transition-colors hover:text-gold-400">
                      {SITE.email}
                    </a>
                  </ContactRow>

                  <ContactRow icon={Phone} label="Mobile">
                    <div className="flex flex-col gap-1">
                      {SITE.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="text-sm font-medium text-white transition-colors hover:text-gold-400">
                          {p}
                        </a>
                      ))}
                    </div>
                  </ContactRow>

                  <ContactRow icon={MapPin} label="Address">
                    <span className="text-sm font-medium text-white">{SITE.address.full}</span>
                  </ContactRow>

                  <ContactRow icon={Clock} label="Response time">
                    <span className="text-sm font-medium text-white">Within 1 business day</span>
                  </ContactRow>
                </ul>

                <a
                  href={SITE.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Partner CTA */}
            <div className="mt-6 card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                <Handshake className="h-5 w-5" />
              </span>
              <h4 className="mt-3 font-display text-base font-bold text-navy-900">Become a Partner</h4>
              <p className="mt-1 text-sm text-navy-600">
                Looking for a long-term export partner? We offer dedicated account management, volume pricing and priority production slots.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-3 [transition-delay:120ms]">
            <form onSubmit={onSubmit} className="card space-y-5 p-7 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name">
                  <input id="name" name="name" type="text" required placeholder="Your name" className={inputCls} />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputCls} />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Company (optional)" htmlFor="company">
                  <input id="company" name="company" type="text" placeholder="Company name" className={inputCls} />
                </Field>
                <Field label="Product of interest" htmlFor="product">
                  <select id="product" name="product" className={inputCls} defaultValue="">
                    <option value="" disabled>Select a category</option>
                    <option>Spices & Condiments</option>
                    <option>Textiles & Fabrics</option>
                    <option>Agricultural Products</option>
                    <option>Leather Goods</option>
                    <option>Handicrafts & Decor</option>
                    <option>Tea & Beverages</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>

              <Field label="Message" htmlFor="message">
                <textarea id="message" name="message" rows={5} required placeholder="Tell us about your requirement — product, volume, destination port and timeline." className={`${inputCls} resize-none`} />
              </Field>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-70">
                  <Send className="h-4 w-4" />
                  {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                </button>
                {status === 'sent' && (
                  <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                    Your email client is opening with the enquiry ready to send.
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-sm font-medium text-red-500">Please fill in your name, email and message.</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls =
  'w-full rounded-xl border border-navy-200 bg-navy-50/50 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-400 transition-all duration-200 focus:border-navy-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-400/30';

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-navy-700">{label}</label>
      {children}
    </div>
  );
}

function ContactRow({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-400 ring-1 ring-white/10">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-navy-400">{label}</div>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  );
}
