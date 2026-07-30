import { MapPin, Check, Globe2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { MARKETS } from '../data/markets';

const HERO_IMG = 'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Markets() {
  usePageMeta('Global Markets', 'We export to over 40 countries across Europe, the Middle East, North America, Asia-Pacific, Africa and Latin America.');
  useScrollReveal();

  return (
    <>
      <PageHero
        title="Exporting to six continents"
        subtitle="We understand the compliance, documentation and logistics requirements of every major import market — and we structure every shipment to clear customs smoothly."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Global Markets' }]}
        image={HERO_IMG}
      />

      {/* Market cards */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge">
          <SectionHeading
            eyebrow="Our Reach"
            title="Markets we serve"
            subtitle="Each market has its own regulations, preferences and port requirements. We have shipped to all of these — and know what it takes to get it right."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {MARKETS.map((m, i) => (
              <div
                key={m.slug}
                className="reveal group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div className="relative aspect-[16/7] overflow-hidden">
                  <img src={m.image} alt={m.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-gold-300">
                      <MapPin className="h-3.5 w-3.5" /> {m.region}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">{m.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-navy-600">{m.description}</p>
                  <div className="mt-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-navy-400">Key highlights</div>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {m.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-navy-700">
                          <Check className="h-4 w-4 shrink-0 text-gold-500" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance band */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-navy-500/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
        </div>
        <div className="container-edge relative">
          <div className="reveal max-w-2xl mx-auto text-center">
            <span className="chip-light"><Globe2 className="h-3.5 w-3.5" /> Compliance First</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
              Documentation that clears customs, not delays it
            </h2>
            <p className="mt-4 text-navy-300">
              Whatever your destination, our compliance team prepares the full documentation set —
              certificates of origin, phytosanitary certificates, preferential trade paperwork and
              lab analysis — before your shipment sails.
            </p>
          </div>

          <div className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { region: 'EU & UK', docs: 'REACH, Phytosanitary, EORI' },
              { region: 'Middle East', docs: 'HALAL, Arabic labelling, COO' },
              { region: 'North America', docs: 'FDA prior notice, FSVP' },
              { region: 'Asia-Pacific', docs: 'Bilingual docs, ASEAN tariff' },
            ].map((c) => (
              <div key={c.region} className="card-navy p-6">
                <div className="text-sm font-bold text-gold-400">{c.region}</div>
                <div className="mt-2 text-sm text-navy-300">{c.docs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Shipping to a market we know?"
        subtitle="Tell us your destination port and product — we will outline the compliance, documentation and freight plan for your consignment."
        primaryLabel="Request a Quote"
        secondaryLabel="View Products"
        secondaryTo="/products"
      />
    </>
  );
}
