import { Quote, Star, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const ITEMS = [
  {
    quote: 'Indusglobal Export has been our trusted spice supplier for three years. Consistent quality, fair pricing and deliveries that are always on schedule.',
    name: 'Amelia Hartmann',
    role: 'Procurement Head, EuroFoods GmbH',
    location: 'Hamburg, Germany',
  },
  {
    quote: 'Their textile sourcing team understands fabric like few others. The embroidered cottons we receive arrive perfectly packed and exactly to spec.',
    name: 'Rashid Al-Mansouri',
    role: 'Director, Threads & Co.',
    location: 'Dubai, UAE',
  },
  {
    quote: 'From documentation to delivery, the entire process was seamless. Their team is responsive, knowledgeable and genuinely dependable.',
    name: 'Sarah Whitfield',
    role: 'Buyer, Crestline Retail',
    location: 'London, United Kingdom',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by buyers worldwide"
          subtitle="Long-standing relationships built on consistent quality and dependable delivery."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ITEMS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal card flex h-full flex-col p-7 hover:-translate-y-1.5 hover:shadow-lg"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center justify-between">
                <Quote className="h-8 w-8 text-navy-200" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-navy-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 font-display text-base font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold text-navy-900">{t.name}</div>
                  <div className="text-xs text-navy-500">{t.role}</div>
                  <div className="mt-0.5 flex items-center gap-1 text-xs text-navy-400">
                    <MapPin className="h-3 w-3" />
                    {t.location}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
