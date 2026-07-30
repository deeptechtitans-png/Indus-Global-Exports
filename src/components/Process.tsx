import SectionHeading from './SectionHeading';

const STEPS = [
  { step: '01', title: 'Product Sourcing', text: 'We review product, specification, volume, destination and commercial requirements to identify a suitable sourcing route.' },
  { step: '02', title: 'Quality Inspection', text: 'Product checks are aligned to buyer-approved specifications before dispatch, with the exact process shaped by the category.' },
  { step: '03', title: 'Export Packaging', text: 'We coordinate practical, export-ready packing around product protection, handling, retail needs and shipping method.' },
  { step: '04', title: 'Documentation', text: 'Commercial and shipment documents are prepared around the product, destination and agreed trade terms.' },
  { step: '05', title: 'Shipping', text: 'We coordinate freight planning, handover and shipment updates with the relevant logistics partners.' },
  { step: '06', title: 'Delivery Support', text: 'Our team remains available through arrival planning so buyers have clear information for receiving and onward distribution.' },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy-50 py-20 lg:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear export process from enquiry to delivery"
          subtitle="Six structured stages keep product sourcing, quality, packaging, documentation and shipping aligned to your requirements."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((p, i) => (
            <div key={p.step} className="reveal relative" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950 font-display text-xl font-extrabold text-white shadow-lg shadow-navy-900/30">
                {p.step}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
