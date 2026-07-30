import {
  ShieldCheck, Globe2, Sprout, FileCheck2, Headset, Truck,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const ITEMS = [
  { icon: ShieldCheck, title: 'Specification-Led Quality', text: 'Product, packing and dispatch checks are aligned to the buyer-approved requirements for each order.' },
  { icon: Globe2, title: 'International Trade Focus', text: 'We coordinate product sourcing and shipment planning for buyers operating across major global markets.' },
  { icon: Sprout, title: 'Responsible Sourcing', text: 'Supplier discussions are guided by product suitability, clear requirements and long-term trade relationships.' },
  { icon: FileCheck2, title: 'Documentation Support', text: 'We coordinate commercial and shipment documents around the product, destination and agreed trade terms.' },
  { icon: Headset, title: 'Dedicated Support', text: 'One export contact helps keep sourcing, quality, packing and delivery communication clear from enquiry to dispatch.' },
  { icon: Truck, title: 'Shipment Coordination', text: 'Freight planning and proactive updates help buyers prepare for handover, clearance and receiving.' },
];

const CTA_IMG =
  'https://images.pexels.com/photos/11586145/pexels-photo-11586145.jpeg?auto=compress&cs=tinysrgb&w=1200';

interface Props {
  withCTA?: boolean;
  dark?: boolean;
}

export default function WhyChooseUs({ withCTA = false, dark = false }: Props) {
  return (
    <section id="why-us" className={dark ? 'relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28' : 'bg-white py-20 lg:py-28'}>
      {dark && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-navy-500/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
        </div>
      )}
      <div className="container-edge relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The export partner that buyers rely on"
          subtitle="We combine deep sourcing relationships with rigorous process — so every shipment meets spec, schedule and standard."
          light={dark}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`reveal group p-6 transition-all duration-300 ${dark ? 'card-navy hover:border-gold-400/40 hover:bg-white/[0.07]' : 'card hover:-translate-y-1 hover:shadow-md'}`}
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${dark ? 'bg-gold-500/15 text-gold-400 ring-1 ring-gold-400/20 group-hover:bg-gold-500 group-hover:text-white' : 'bg-navy-50 text-navy-700 group-hover:bg-navy-900 group-hover:text-white'}`}>
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className={`mt-5 font-display text-lg font-bold ${dark ? 'text-white' : 'text-navy-900'}`}>{item.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-navy-300' : 'text-navy-600'}`}>{item.text}</p>
            </div>
          ))}
        </div>

        {withCTA && (
          <div className="reveal mt-16 overflow-hidden rounded-3xl border border-navy-100">
            <div className="grid items-center gap-0 lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
                <img src={CTA_IMG} alt="Lush tea plantation representing ethical sourcing" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 to-transparent" />
              </div>
              <div className="bg-gradient-to-br from-navy-700 to-navy-950 p-8 lg:p-12">
                <h3 className="font-display text-2xl font-extrabold leading-tight text-white text-balance sm:text-3xl">
                  Start sourcing with a partner who delivers
                </h3>
                <p className="mt-3 text-navy-200">
                  From first enquiry to final delivery, our team manages every detail so you can focus on your business.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
