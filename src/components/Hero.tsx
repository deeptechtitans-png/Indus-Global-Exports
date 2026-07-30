import { Link } from 'react-router-dom';
import { ArrowRight, Ship, ShieldCheck, Globe2 } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/23749436/pexels-photo-23749436.jpeg?auto=compress&cs=tinysrgb&w=1600';
const HERO_IMG_2 =
  'https://images.pexels.com/photos/28411491/pexels-photo-28411491/free-photo-of-colorful-spices-at-an-indian-market.jpeg?auto=compress&cs=tinysrgb&w=800';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-navy-200/50 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #0d1f3c 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-edge relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="max-w-xl">
          <span className="chip animate-fade-in">
            <Ship className="h-3.5 w-3.5" />
            Merchant Exporter from India
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 text-balance animate-fade-up sm:text-5xl lg:text-6xl">
            Your Indian merchant exporter for
            {' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-gold-600">global B2B sourcing</span>
              <svg className="absolute -bottom-1 left-0 z-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9C40 3 160 3 198 9" stroke="#0d1f3c" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-navy-600 animate-fade-up [animation-delay:120ms]">
            Indus Global Exports is an export company in India and Global Export Supplier for importers, distributors, wholesalers, retailers and private-label buyers seeking quality Indian products with clear export coordination.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:220ms]">
            <Link to="/contact" className="btn-primary">
              Request an Export Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/products" className="btn-outline">
              Explore Indian Products
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 animate-fade-up [animation-delay:320ms]">
            <Trust icon={ShieldCheck} label="Specification-led sourcing" />
            <Trust icon={Globe2} label="40+ countries served" />
            <Trust icon={Ship} label="On-time delivery" />
          </div>
        </div>

        <div className="relative animate-scale-in [animation-delay:200ms]">
          <div className="relative mx-auto max-w-lg">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20 ring-1 ring-navy-900/5">
              <img src={HERO_IMG} alt="Vibrant Indian textiles and fabrics" className="aspect-[4/5] w-full object-cover" loading="eager" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
              <img src={HERO_IMG_2} alt="Indian spices" className="aspect-square w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -right-4 top-8 animate-float rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-navy-900/5 backdrop-blur sm:-right-8">
              <div className="font-display text-2xl font-extrabold text-navy-900">500+</div>
              <div className="text-xs font-medium text-navy-500">Shipments delivered</div>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Trust({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-700 shadow-sm ring-1 ring-navy-900/5">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium text-navy-700">{label}</span>
    </div>
  );
}

function Marquee() {
  const items = ['Spices', 'Textiles', 'Agriculture', 'Leather Goods', 'Handicrafts', 'Tea', 'Rice & Grains', 'Basmati', 'Cotton & Silk', 'Brassware'];
  const row = [...items, ...items];
  return (
    <div className="border-y border-navy-200/70 bg-white/60 py-4">
      <div className="mask-fade-r overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-sm font-semibold uppercase tracking-wider text-navy-400">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
