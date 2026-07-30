import { Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { INDUSTRIES } from '../data/industries';
import {
  Wheat, Shirt, ShoppingBag, UtensilsCrossed, Sofa, Gift,
} from 'lucide-react';

const HERO_IMG = 'https://images.pexels.com/photos/5383375/pexels-photo-5383375.jpeg?auto=compress&cs=tinysrgb&w=1600';

const ICONS: Record<string, React.ElementType> = {
  Wheat, Shirt, ShoppingBag, UtensilsCrossed, Sofa, Gift,
};

export default function Industries() {
  usePageMeta('Industries We Serve', 'We serve food and beverage, fashion, retail, hospitality, home interiors and corporate gifting sectors across the globe.');
  useScrollReveal();

  return (
    <>
      <PageHero
        title="Industries we serve"
        subtitle="From food manufacturers to fashion houses, hospitality groups to retail chains — we tailor our sourcing, packaging and documentation to the needs of each industry we serve."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
        image={HERO_IMG}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge">
          <SectionHeading
            eyebrow="Sector Expertise"
            title="Built for the industries that demand reliability"
            subtitle="We understand that a spice importer, a fashion brand and a hotel chain have very different requirements. Our processes flex to meet each one."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ICONS[ind.icon] ?? ShoppingBag;
              return (
                <div
                  key={ind.slug}
                  className="reveal group grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[auto_1fr]"
                  style={{ transitionDelay: `${(i % 2) * 90}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:w-48">
                    <img src={ind.image} alt={ind.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-navy-900">{ind.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{ind.description}</p>
                    <div className="mt-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-navy-400">Products we supply</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {ind.products.map((p) => (
                          <span key={p} className="flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                            <Check className="h-3 w-3 text-gold-500" /> {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we adapt */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-edge">
          <SectionHeading
            eyebrow="Our Approach"
            title="How we adapt to your industry"
            subtitle="Same sourcing integrity, tailored to the way your sector buys, ships and sells."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Custom packaging', text: 'Retail-ready, bulk, or private-label — we package to your channel.' },
              { title: 'Compliance mapping', text: 'We align documentation and certifications to your destination market.' },
              { title: 'Volume flexibility', text: 'From sample quantities to full container loads, we scale with you.' },
              { title: 'Private label', text: 'We help build your own brand with custom specs and labelling.' },
              { title: 'Lead time planning', text: 'We plan around your seasonality and replenishment cycles.' },
              { title: 'Dedicated contact', text: 'One point of contact who understands your industry and account.' },
            ].map((item, i) => (
              <div key={item.title} className="reveal card p-6 hover:-translate-y-1 hover:shadow-md" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <h3 className="font-display text-base font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Does your industry need a reliable Indian source?"
        subtitle="Tell us about your sector and requirements. We will propose a sourcing and supply plan tailored to how you operate."
        primaryLabel="Become a Partner"
        secondaryLabel="View Products"
        secondaryTo="/products"
      />
    </>
  );
}
