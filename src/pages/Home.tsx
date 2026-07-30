import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Leaf, Users, Award, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import StatsBand from '../components/StatsBand';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import BlogCard from '../components/BlogCard';
import HomeSeoContent, { HomeSchemas } from '../components/HomeSeoContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { PRODUCTS } from '../data/products';
import { MARKETS } from '../data/markets';
import { BLOG_POSTS } from '../data/blog';

const ABOUT_IMG =
  'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1200';

const PILLARS = [
  { icon: Leaf, title: 'Sourced responsibly', text: 'Direct from farms & artisans' },
  { icon: Award, title: 'Quality certified', text: 'Inspected to global standards' },
  { icon: Users, title: 'Partner-first', text: 'Long-term buyer relationships' },
];

export default function Home() {
  usePageMeta(
    'Indian Merchant Exporter & Global Export Supplier',
    'Indus Global Exports is an export company in India supplying spices, textiles, agricultural products, leather goods, handicrafts, tea and natural sweeteners to global B2B buyers.',
  );
  useScrollReveal();

  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      <HomeSchemas />
      <Hero />

      {/* About preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-900/5">
              <img src={ABOUT_IMG} alt="Aerial view of cargo ship at a bustling export port" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 right-6 hidden rounded-2xl bg-navy-900 px-6 py-5 text-white shadow-xl sm:block lg:-right-8">
              <div className="font-display text-3xl font-extrabold leading-none">15+</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-navy-300">Years in global trade</div>
            </div>
          </div>

          <div className="reveal [transition-delay:120ms]">
            <span className="chip"><Users className="h-3.5 w-3.5" /> About Us</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              An Indian merchant exporter built for international buyers
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Headquartered in Chandigarh, India, Indus Global Exports helps international buyers source Indian products with clearer specifications, reliable coordination and practical export support. We connect product requirements with suitable supplier relationships, then coordinate quality alignment, packaging, documentation and shipment planning.
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
              {['Specification-led product sourcing', 'Supplier coordination from India', 'Documentation and shipment planning', 'Flexible volumes and packaging'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-navy-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-50 pb-20 lg:pb-28">
        <div className="container-edge">
          <StatsBand />
        </div>
      </section>

      {/* Products preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our Products"
              title="A diverse portfolio of Indian exports"
              subtitle="From farm-fresh spices to handcrafted textiles, we source, grade and ship the products the world trusts India for."
              align="left"
            />
            <Link to="/products" className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600 sm:inline-flex">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 6).map((p, i) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="reveal group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 font-display text-xl font-bold text-white">{p.title}</h3>
                  <span className="absolute right-4 top-4 flex h-9 w-9 -rotate-12 items-center justify-center rounded-full bg-white/90 text-navy-800 opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-navy-600">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link to="/products" className="btn-outline">View all products</Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <WhyChooseUs dark withCTA />

      <HomeSeoContent />

      {/* Process */}
      <Process />

      {/* Markets preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge">
          <SectionHeading
            eyebrow="Global Markets"
            title="Exporting to six continents"
            subtitle="From the USA and Canada to Europe, the Middle East, Asia-Pacific and Africa, we plan sourcing and shipment conversations around destination-market requirements."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETS.map((m, i) => (
              <Link
                key={m.slug}
                to="/markets"
                className="reveal group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={m.image} alt={m.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-gold-300">
                    <MapPin className="h-3.5 w-3.5" /> {m.region}
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-white">{m.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Link to="/markets" className="btn-primary">
              View all markets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Latest blog */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-edge">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Insights"
              title="Latest from our blog"
              subtitle="Practical trade insights, sourcing guidance, compliance context and market analysis for international buyers evaluating products from India."
              align="left"
            />
            <Link to="/blog" className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600 sm:inline-flex">
              View all articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to source from India with a dependable export partner?"
        subtitle="Share your product brief, quantity, destination and packaging requirements. Our team will help you assess the right sourcing, documentation and shipment route."
        primaryLabel="Request an Export Quote"
        secondaryLabel="Speak With Our Export Team"
      />
    </>
  );
}
