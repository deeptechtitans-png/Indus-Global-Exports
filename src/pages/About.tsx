import { Link } from 'react-router-dom';
import { CheckCircle2, Leaf, Award, Users, Target, Eye, Compass, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import StatsBand from '../components/StatsBand';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';

const HERO_IMG = 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600';
const TEAM_IMG = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200';
const VALUES_IMG = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200';

const PILLARS = [
  {
    icon: Leaf,
    title: 'Sourced Responsibly',
    text: 'Verified suppliers and responsible sourcing across India.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    text: 'Specification-led quality checks before every shipment.',
  },
  {
    icon: Users,
    title: 'Partner First',
    text: 'Clear updates, dependable follow-through and lasting relationships.',
  },
];

const VALUES = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To make sourcing from India simple, transparent and dependable for global buyers through verified suppliers, quality-focused coordination and reliable export support.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be a trusted Global Export Partner connecting Indian capability with international markets through responsible trade and long-term buyer relationships.',
  },
  {
    icon: Compass,
    title: 'Our Values',
    text: 'Integrity, quality, transparency and customer success guide every sourcing decision, supplier relationship, inspection and shipment we manage.',
  },
];

export default function About() {
  usePageMeta(
    'Global Export Partner for Indian Products | Indusglobal',
    'Indusglobal Export helps international buyers source quality Indian products with reliable export support, documentation and worldwide shipping.',
  );
  useScrollReveal();

  return (
    <>
      <PageHero
        title="Global Export Partner for International Buyers"
        subtitle="Source quality Indian products with reliable product sourcing, export documentation and worldwide shipping support."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        image={HERO_IMG}
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-900/5">
              <img src={TEAM_IMG} alt="Indusglobal Export team coordinating international product sourcing and export logistics" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 right-6 hidden rounded-2xl bg-gold-500 px-6 py-5 text-white shadow-xl sm:block lg:-right-8">
              <div className="font-display text-3xl font-extrabold leading-none">15+</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gold-100">Years in global trade</div>
            </div>
          </div>

          <div className="reveal [transition-delay:120ms]">
            <span className="chip"><Users className="h-3.5 w-3.5" /> Our Story</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Connecting Indian capability with global opportunity
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Indusglobal Export helps international buyers source from India with greater clarity and control. We connect importers, wholesalers, retailers and OEM buyers with verified producers across selected product categories. Our role is not only to find products, but to turn sourcing requirements into a dependable export plan aligned on specification, quality, packaging and delivery.
            </p>
            <p className="mt-4 leading-relaxed text-navy-500">
              As a Global Export Partner, we manage the details that protect buyer confidence: supplier coordination, quality checks, export documentation and shipment updates. Whether you need bulk supply, private-label support or recurring international orders, you receive one accountable team and clear communication at every stage.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.title} className="card p-4 hover:-translate-y-1 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div className="mt-3 text-sm font-semibold text-navy-900">{p.title}</div>
                  <div className="text-xs text-navy-500">{p.text}</div>
                </div>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'End-to-end export coordination',
                'Verified Indian supplier network',
                'Quality checks and documentation',
                'Flexible packaging and volumes',
                'Dedicated buyer communication',
                'Worldwide shipping updates',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-navy-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-50 pb-20 lg:pb-28">
        <div className="container-edge">
          <StatsBand />
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="What Drives Us" title="Built for dependable international trade" subtitle="Our mission, vision and values guide every sourcing decision, buyer relationship, quality review and shipment." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <div key={v.title} className="reveal card p-8 hover:-translate-y-1 hover:shadow-md" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950 text-white shadow-lg shadow-navy-900/20">
                  <v.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-navy-900">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values image band */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
        <div className="absolute inset-0">
          <img src={VALUES_IMG} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
        </div>
        <div className="container-edge relative">
          <div className="reveal max-w-2xl">
            <span className="chip-light">Our Commitment</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
              Every shipment carries our reputation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-300">
              Every shipment carries our name and your confidence. Before dispatch, we coordinate approved specifications, packaging, quality checks and the documents needed for a smooth handover. We stay accountable from production through international shipping, keeping the process clear and responding quickly when details change. Our approach is informed by trusted export bodies including the <a href="https://www.dgft.gov.in/" target="_blank" rel="noopener noreferrer">DGFT</a>, <a href="https://apeda.gov.in/" target="_blank" rel="noopener noreferrer">APEDA</a> and <a href="https://www.fieo.org/" target="_blank" rel="noopener noreferrer">FIEO</a>. The goal is simple: goods arrive as expected, and every order strengthens a long-term partnership.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600">
              Contact our export specialists <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}