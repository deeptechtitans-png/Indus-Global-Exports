import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, FileCheck2, Globe2, PackageCheck, ShieldCheck, UsersRound } from 'lucide-react';

const PRODUCT_EXPERTISE = [
  {
    title: 'Indian Spices & Condiments',
    copy: [
      'India is a major origin for spices used by food brands, ingredient distributors, hospitality suppliers and ethnic retail businesses. Indus Global Exports helps international buyers source Indian spices and condiments in whole, ground and buyer-requested formats. Our working range includes turmeric, black pepper, cumin, red chilli, cardamom and other spices selected around the intended application, market and commercial brief.',
      'For each spice enquiry, we align product variety, grade, cleanliness, moisture, colour, aroma, particle size, packaging and shipping documents before an order is confirmed. This structured approach is useful for buyers procuring bulk ingredients, retail packs, foodservice supply, seasoning inputs or private-label lines. It keeps the discussion focused on measurable requirements rather than broad product claims.'
    ],
  },
  {
    title: 'Indian Textiles & Fabrics',
    copy: [
      'Indian textiles offer buyers a broad sourcing base across woven cotton, silk, linen, yarn and embroidered fabrics. We support fashion labels, garment manufacturers, wholesalers, retailers, home-textile buyers and interior projects looking for an Indian merchant exporter that can coordinate sourcing around a defined fabric brief. Requirements may include weave, width, GSM, colour, pattern, finish, hand feel and packing format.',
      'Our role is to help international buyers translate a product brief into a workable sourcing route. Available options can include greige, bleached, dyed and printed fabrics, depending on the design, order volume and supplier capability. We coordinate clear communication on sampling, specification alignment, inspection points and export-ready packing so procurement teams can plan with greater confidence.'
    ],
  },
  {
    title: 'Indian Leather Goods',
    copy: [
      'For buyers sourcing leather bags, wallets, belts, travel accessories and corporate gifts, India combines skilled craftsmanship with flexible manufacturing options. Indus Global Exports assists retailers, brands, distributors and promotional-product buyers with product sourcing that starts from practical design, material, finish, hardware, packaging and order-volume requirements.',
      'Leather goods enquiries are handled around the commercial details that matter to B2B buyers: approved samples, construction expectations, material selection, branding requirements, packing protection and delivery schedule. Whether the need is a wholesale leather accessories programme, a private-label collection or a customised gifting order, we help organise the sourcing and export handover through one accountable point of contact.'
    ],
  },
  {
    title: 'Indian Agricultural Products',
    copy: [
      'Our agricultural sourcing portfolio is built for importers, food distributors, wholesalers, supermarkets and manufacturers seeking staples from India. It includes rice, pulses, millets, grains and oilseeds selected around buyer-approved specifications. Different products require different commercial checks, from grain size and broken percentage to moisture, sorting, packaging and destination-market documentation.',
      'We help buyers create a clearer path from product enquiry to shipment by confirming the intended use, volume, packaging format and delivery requirement early in the process. Agricultural commodities can be supplied for retail, foodservice, industrial processing and distribution programmes. The objective is reliable coordination around the agreed product specification, not a one-size-fits-all catalogue offer.'
    ],
  },
  {
    title: 'Indian Rice',
    copy: [
      'India is a recognised source for aromatic basmati rice and a wide range of non-basmati varieties. Indus Global Exports supports international buyers looking for 1121 and 1509 basmati rice, non-basmati rice and other buyer-requested options for supermarkets, foodservice businesses, ethnic retail, distributors and branded retail programmes. The right rice selection depends on the target market, cooking profile, pack size and commercial positioning.',
      'A rice enquiry should establish variety, grain length, broken percentage, moisture, ageing preference where relevant, packing format, labelling and shipment volume. We coordinate those requirements with suitable supply partners and support the documentation needed for international trade. This gives procurement teams a clearer way to compare offers and plan wholesale rice supply from India.'
    ],
  },
  {
    title: 'Indian Pulses',
    copy: [
      'Pulses remain a practical sourcing category for food importers, wholesale suppliers, manufacturers and retail chains serving value-conscious markets. Indian pulses may be required for household cooking, foodservice, ready-to-cook products, ingredient supply or ethnic grocery distribution. We help buyers source according to the required pulse type, grade, cleaning level, packaging format and destination-market requirements.',
      'The best commercial outcome starts with a clear product brief. We support buyers in aligning quantity, desired quality parameters, packaging, labelling and shipping preference before finalising supply. This makes bulk pulses sourcing more transparent for international buyers and reduces avoidable changes after the production or packing process has started.'
    ],
  },
  {
    title: 'Indian Millets',
    copy: [
      'Interest in millets has expanded among food brands, healthy-food retailers, ingredient distributors and hospitality buyers looking for versatile grain options. Our Indian millet sourcing support is designed around product format, end use, cleaning, packing and buyer-approved quality requirements. Options may include whole grains, milled products or buyer-requested formats, subject to availability and supplier capability.',
      'For global buyers, successful millet procurement depends on matching the product to the intended application and market. We coordinate the sourcing conversation around variety, grain condition, packaging, documentation and shipment planning. That disciplined process helps buyers assess supply options clearly for retail, foodservice, manufacturing and private-label programmes.'
    ],
  },
  {
    title: 'Indian Handicrafts & Home Decor',
    copy: [
      'Indian handicrafts and home decor give retailers, interior projects, hospitality buyers and gift programmes access to a wide material and design vocabulary. Indus Global Exports sources brassware, metalware, woodcraft, pottery, marble decor, wall art, gift items and decorative accessories around defined buyer requirements. The value lies in matching a collection brief to the right material, finish, dimensions and packing plan.',
      'Every international handicrafts order needs attention to practical as well as aesthetic details. We coordinate product selection, sample expectations, finish, dimensions, protective packing and export documentation so items are ready for international transit. This is particularly helpful for buyers building seasonal collections, private-label decor ranges, corporate gifting programmes or hospitality interiors.'
    ],
  },
  {
    title: 'Natural Jaggery & Sweeteners',
    copy: [
      'Indian sugarcane jaggery is a traditional sweetener used in food, beverage, bakery and confectionery applications. We support international buyers seeking jaggery in blocks, cubes, powder or granulated formats for wholesale supply, retail distribution, ethnic grocery, horeca and private-label food programmes. The right format depends on the intended use, pack size, market positioning and buyer specification.',
      'Jaggery enquiries are coordinated around form, colour, texture, moisture, packaging, labelling and export documentation. By clarifying these requirements at the beginning, we help importers and food businesses compare sourcing options with greater accuracy. Our approach is focused on practical trade coordination and dependable communication from enquiry through dispatch.'
    ],
  },
];

const INDUSTRIES = [
  ['Importers', 'Reliable product information, specifications and document coordination for recurring international procurement.'],
  ['Distributors', 'Flexible sourcing support for regional distribution networks, foodservice customers and wholesale channels.'],
  ['Wholesalers', 'Bulk quantities, practical packing options and clear commercial communication for high-volume supply.'],
  ['Retailers & Retail Chains', 'Product, packaging and private-label coordination for shelves, seasonal collections and category expansion.'],
  ['Supermarkets', 'Support for retail-ready food, beverage, home and lifestyle product programmes from India.'],
  ['Food Industry', 'Ingredient-focused sourcing for spices, rice, pulses, millets, tea and natural sweeteners.'],
  ['Hospitality', 'Products for kitchens, gifting, interiors and guest-facing programmes with export-ready packing.'],
  ['Textile Industry', 'Fabric sourcing support for apparel, home textiles, accessories and design-led collections.'],
  ['Manufacturers & Procurement Teams', 'A single export partner for supplier coordination, quality alignment and shipping documentation.'],
];

const FAQS = [
  ['What products does Indus Global Exports supply?', 'We source Indian spices, textiles, leather goods, agricultural products, rice, pulses, millets, tea, handicrafts, home decor and natural jaggery. Product availability, specification and commercial terms are confirmed for each enquiry.'],
  ['Who do you work with?', 'We work with international importers, distributors, wholesalers, retail chains, supermarkets, sourcing companies, food businesses, hospitality buyers, manufacturers, private-label buyers and government procurement teams.'],
  ['Can I request a product quotation?', 'Yes. Share the product, specification, quantity, destination country, preferred packaging and expected delivery timeline. Our team can then assess suitable sourcing and provide a practical quotation route.'],
  ['What is the minimum order quantity?', 'MOQ varies by product, grade, packaging format and supplier. We confirm the applicable MOQ as part of the quotation so buyers can plan an order that is commercially workable.'],
  ['Do you offer samples?', 'Sample availability depends on the product and supplier. Tell us the product requirements and destination, and we will advise on sample options, expected preparation time and dispatch arrangements.'],
  ['Can you support private-label products?', 'Yes, private-label support can be explored for suitable products. Buyers should share branding, pack format, label requirements, quantity and market details so feasibility can be reviewed early.'],
  ['How do you handle quality inspection?', 'Quality expectations are aligned with buyer-approved specifications. The relevant checks can cover product condition, grade, packaging and shipment readiness before dispatch, depending on the product category and order requirement.'],
  ['Can you arrange customised packaging?', 'Packaging can be discussed around product type, order volume, retail needs, destination requirements and shipping method. We help buyers identify practical export-ready packing options.'],
  ['Which export documents can you coordinate?', 'Depending on the product and destination, documentation may include commercial invoice, packing list, certificate of origin, transport documents and other buyer or market-specific papers.'],
  ['Do you provide worldwide shipping support?', 'Yes. We coordinate shipment planning and work with freight partners to support international delivery. Final routing, incoterms, transit times and freight costs depend on the destination and shipment profile.'],
  ['Which countries do you serve?', 'We support buyers across North America, Europe, the Middle East, Asia-Pacific and Africa, including markets such as the USA, Canada, the United Kingdom, Germany, the UAE, Saudi Arabia, Singapore and Australia.'],
  ['How long does an export order take?', 'Lead time varies by product, volume, production requirements, inspection, packing and shipping route. We provide a realistic timeline once the specification and order details are agreed.'],
  ['Can you help with product labelling requirements?', 'We can coordinate labelling discussions with the relevant supplier and buyer. Final labels should always be reviewed against the legal and commercial requirements of the destination market.'],
  ['Can government buyers or institutions send enquiries?', 'Yes. Government buyers and institutional procurement teams can share the required product, specification, tender or procurement terms, quantity and destination for an initial feasibility review.'],
  ['How do I start sourcing from India?', 'Send an enquiry through our contact page with your product list and commercial requirements. We will review the brief, clarify key details and guide the next steps for sourcing, quotation and shipment planning.'],
];

function CopyBlock({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-base leading-relaxed text-navy-600 sm:text-lg">{children}</p>;
}

export function HomeSchemas() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Indus Global Exports',
      alternateName: 'Indusglobal Export',
      url: 'https://indusglobalexport.com',
      logo: 'https://indusglobalexport.com/brand/indusglobalexport.png',
      email: 'infoindusglobalexport@gmail.com',
      telephone: '+91 7986347937',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chandigarh',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.linkedin.com/in/indus-global-exports-423761411/',
        'https://www.facebook.com/profile.php?id=61587643280632',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Indus Global Exports',
      url: 'https://indusglobalexport.com',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://indusglobalexport.com/' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function HomeSeoContent() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-2 lg:gap-16">
          <article className="reveal">
            <span className="chip"><ShieldCheck className="h-3.5 w-3.5" /> Why Global Buyers Choose Us</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              A Global Export Supplier built around buyer clarity
            </h2>
            <CopyBlock>Choosing an export company in India is not only about comparing product prices. International buyers need a partner that can understand the full commercial brief: the product specification, quantity, target market, packaging requirement, documentation, shipment route and expected delivery date. Indus Global Exports works as an Indian merchant exporter that helps connect these details from the first enquiry. Our role is to make sourcing from India easier to evaluate and easier to manage for businesses buying across borders.</CopyBlock>
            <details className="group mt-6">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-navy-900 marker:content-none transition-colors hover:text-gold-600">
                Read more about our export approach
                <ChevronDown className="h-4 w-4 text-gold-600 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pt-1">
                <CopyBlock>We begin with the information that protects a buyer later in the process. A clear specification reduces confusion around grade, material, size, finish, pack format, labelling and delivery expectations. Instead of treating an enquiry as a simple request for a price, we work to understand the intended use and market. That gives importers, wholesalers, distributors and private-label buyers a stronger basis for comparing options and approving the right product for their programme.</CopyBlock>
                <CopyBlock>Our sourcing model brings together Indian supplier relationships with export coordination. For food and agricultural products, this may mean aligning quality parameters, food-grade packing and shipment documents. For textiles, leather goods and handicrafts, it may mean clarifying material, construction, colour, finish, dimensions and protective packing. Across categories, the objective stays consistent: products should be prepared around an agreed brief and communicated clearly before they move into production or dispatch.</CopyBlock>
                <CopyBlock>Buyers also need dependable communication when timelines, market requirements or logistics conditions change. We provide one accountable export contact to coordinate supplier conversations, quality checkpoints, packaging discussions, commercial documents and shipping updates. This practical coordination is what turns a product sourcing enquiry into a more controlled international supply process. It is designed for companies that value long-term trade relationships, not one-off transactions.</CopyBlock>
              </div>
            </details>
          </article>

          <article className="reveal [transition-delay:120ms]">
            <span className="chip"><UsersRound className="h-3.5 w-3.5" /> About Indus Global Exports</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Indian sourcing expertise for international trade
            </h2>
            <CopyBlock>Indus Global Exports is a Chandigarh-based merchant export company serving international B2B buyers who want a more dependable route to Indian products. India offers deep capability across agriculture, spices, tea, textiles, leather, handicrafts, home decor and natural food products. But a broad supplier market can also make it difficult for overseas buyers to assess product fit, consistency and export readiness. We help turn that complexity into a clearer sourcing process.</CopyBlock>
            <details className="group mt-6">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-navy-900 marker:content-none transition-colors hover:text-gold-600">
                Read more about Indus Global Exports
                <ChevronDown className="h-4 w-4 text-gold-600 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pt-1">
                <CopyBlock>Our work is rooted in the practical demands of international trade. Every product category carries its own sourcing considerations, while every destination market can introduce different expectations for packing, labelling, documents or delivery. We help buyers organise those decisions early, bringing together product requirements, supplier coordination, quality alignment, export paperwork and shipment planning. This creates a more transparent path from enquiry to delivery.</CopyBlock>
                <CopyBlock>As a Global Export Supplier, we serve procurement companies, importers, wholesalers, distributors, retail chains, supermarkets, manufacturers, hospitality groups and private-label buyers. Some customers need a recurring bulk supply programme. Others need a new product line, a seasonal decor collection, a food ingredient source or a made-to-spec textile brief. We respond by first understanding the business need, then identifying an appropriate sourcing and export route rather than pushing a standard catalogue response.</CopyBlock>
                <CopyBlock>Our approach is shaped by the idea that every shipment represents both the buyer's reputation and ours. That is why we focus on specification-led sourcing, straightforward communication and careful export coordination. From initial product discussion through dispatch, Indus Global Exports aims to be the trusted Indian merchant exporter that international businesses can return to as their requirements grow.</CopyBlock>
                <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600">
                  Learn about our export approach <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </details>
          </article>
        </div>
      </section>

      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-edge">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="chip"><PackageCheck className="h-3.5 w-3.5" /> Product Sourcing Expertise</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Indian product categories for global B2B buyers
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">Explore category-specific sourcing guidance for food, lifestyle, textile and natural-product procurement from India.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {PRODUCT_EXPERTISE.map((product, i) => (
              <details key={product.title} className="reveal group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100" style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-bold text-navy-900 marker:content-none">
                  {product.title}
                  <ChevronDown className="h-5 w-5 shrink-0 text-gold-600 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-2">
                  {product.copy.map((paragraph) => <p key={paragraph} className="mt-4 leading-relaxed text-navy-600">{paragraph}</p>)}
                  <Link to="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600">
                    Explore our product portfolio <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="chip"><UsersRound className="h-3.5 w-3.5" /> Industries We Serve</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Built for professional procurement across industries
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">Different buyers need different sourcing models. We shape the export process around the commercial, operational and market needs behind each enquiry.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map(([title, text], i) => (
              <article key={title} className="reveal card p-6 hover:-translate-y-1 hover:shadow-md" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <h3 className="font-display text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{text}</p>
              </article>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link to="/industries" className="btn-outline">Explore industries we serve <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white lg:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-2 lg:gap-16">
          <article className="reveal">
            <span className="chip-light"><FileCheck2 className="h-3.5 w-3.5" /> Quality Assurance</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
              Quality control that begins with the buyer brief
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-300">Quality assurance is most effective when it starts before a product is sourced or packed. We work with buyer-approved specifications that set the reference point for product selection, inspection, packing and dispatch. The relevant checks differ by category: food products may require grade, cleanliness, moisture and pack controls, while textiles, leather goods and decor may require material, dimensions, finish, colour and protective-packing checks.</p>
            <p className="mt-5 leading-relaxed text-navy-300">Our coordination process brings the product brief into the supplier conversation early, so expectations are visible before an order moves forward. Where sampling, pre-shipment checks or market-specific documents are required, those steps can be planned around the agreed commercial requirement. This supports clearer decision-making for buyers and reduces avoidable surprises close to dispatch.</p>
            <p className="mt-5 leading-relaxed text-navy-300">Quality is also about information. Buyers need timely confirmation of progress, packing readiness, document status and shipment handover. We treat those updates as part of the export service, helping procurement teams prepare for receiving, clearance and onward distribution in their own market.</p>
          </article>

          <article className="reveal [transition-delay:120ms]">
            <span className="chip-light"><Globe2 className="h-3.5 w-3.5" /> International Markets</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
              Supporting buyer requirements across key import markets
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-300">We support global buyers across North America, Europe, the Middle East, Asia-Pacific and Africa. Major markets include the USA, Canada, the United Kingdom, Germany, France, Italy, Australia, Singapore, Malaysia, Vietnam, the UAE, Saudi Arabia, Qatar, Oman and South Africa. Each market has its own commercial and regulatory context, which is why destination details are part of the conversation from the beginning.</p>
            <p className="mt-5 leading-relaxed text-navy-300">For buyers in the United States and Canada, product documentation, food requirements and retail packing can be important planning points. European customers may need careful consideration of material, labelling or food-market requirements. Gulf buyers often work with high-volume food, beverage and lifestyle supply programmes, while Asia-Pacific buyers may prioritise flexible routing and shorter regional lead times.</p>
            <p className="mt-5 leading-relaxed text-navy-300">We do not treat every destination alike. We review the product, market, pack format, shipping preference and buyer requirements to build a more practical export plan. Visit our global markets page to understand how we approach regional sourcing and delivery conversations.</p>
            <Link to="/markets" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200">
              Explore global markets <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-edge">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="chip"><CheckCircle2 className="h-3.5 w-3.5" /> Buyer FAQ</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Frequently asked questions about sourcing from India
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">Clear answers to the questions international buyers commonly ask before starting an export enquiry.</p>
          </div>
          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {FAQS.map(([question, answer], i) => (
              <details key={question} className="reveal group rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-navy-100" style={{ transitionDelay: `${Math.min(i, 4) * 60}ms` }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900 marker:content-none">
                  {question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-gold-600 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 pr-8 leading-relaxed text-navy-600">{answer}</p>
              </details>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link to="/contact" className="btn-primary">Ask our export team <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
