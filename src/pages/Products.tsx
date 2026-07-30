import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { PRODUCTS } from '../data/products';

const HERO_IMG = 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Products() {
  usePageMeta('Products', 'Explore our export portfolio — spices, textiles, agricultural products, leather goods, handicrafts and tea sourced from India.');
  useScrollReveal();

  return (
    <>
      <PageHero
        title="A diverse portfolio of Indian exports"
        subtitle="From farm-fresh spices to handcrafted textiles, we source, grade and ship the products the world trusts India for — with quality and compliance built in."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
        image={HERO_IMG}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge">
          <div className="grid gap-8 lg:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="reveal group grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-2"
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <span className="absolute right-3 top-3 flex h-9 w-9 -rotate-12 items-center justify-center rounded-full bg-white/90 text-navy-800 opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="font-display text-xl font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">{t}</span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
                    View details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality assurance band */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-edge">
          <SectionHeading
            eyebrow="Quality Assurance"
            title="Every product, inspected and certified"
            subtitle="Our quality process ensures that what arrives at your port matches what you approved in the sample."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Sourcing verification', text: 'We verify every source partner against quality and compliance criteria.' },
              { title: 'Pre-shipment inspection', text: 'Each consignment is inspected for grade, moisture, packaging and labelling.' },
              { title: 'Lab testing', text: 'Accredited lab tests for food safety, microbial load and residue limits.' },
              { title: 'Documentation', text: 'Certificates of analysis and compliance accompany every shipment.' },
            ].map((q, i) => (
              <div key={q.title} className="reveal card p-6" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a product not listed here?"
        subtitle="We source on demand across many more categories. Tell us your requirement and we will find the right Indian source for you."
        primaryLabel="Request a Quote"
        secondaryLabel="Talk to Us"
      />
    </>
  );
}
