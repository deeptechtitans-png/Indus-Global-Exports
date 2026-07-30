export interface Product {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  description: string;
  image: string;
  tags: string[];
  specs: { label: string; value: string }[];
  grades?: string[];
}

export const PRODUCTS: Product[] = [
  {
  slug: 'spices-condiments',
  title: 'Indian Spices & Condiments',
  short: 'Bulk Indian spices for importers, wholesalers and private-label buyers.',
  blurb:
    'Export-quality whole and ground Indian spices—including turmeric, black pepper, cumin, red chilli and cardamom—for food brands, distributors and global buyers.',
  description:
    'Indusglobal Export is an Indian spices exporter supplying export-quality spices and condiments to importers, food manufacturers, wholesalers, distributors and private-label buyers worldwide. Our bulk spices range includes turmeric, black pepper, cumin, red chilli, cardamom and other buyer-requested Indian spice varieties in whole or ground formats. We work with suitable sourcing partners to support consistent quality, practical packaging and dependable international supply. Each requirement is coordinated around buyer-approved specifications such as spice variety, grade, cleanliness, moisture, colour, aroma, particle size where applicable, packing format and export documentation. Whether you need wholesale Indian spices for foodservice, retail distribution, supermarket programmes, seasoning production or private-label packs, our team helps make sourcing from India clearer and more manageable. As a bulk spices supplier, we focus on responsive communication from enquiry through dispatch, helping buyers plan orders with confidence. From product sourcing and quality coordination to packaging and worldwide shipping support, Indusglobal Export provides a reliable route to source Indian spices and condiments for international markets.',
  image:
    'https://i.postimg.cc/MKMRChvw/2377a28d-23a2-4292-9b83-a65cf7c8d5a3.png',
  tags: ['Turmeric', 'Black Pepper', 'Cumin', 'Red Chilli', 'Cardamom'],
  grades: ['Whole', 'Ground', 'Organic Certified'],
  specs: [
    { label: 'Packaging', value: '25 kg multi-wall paper bags / custom' },
    { label: 'Shelf life', value: '24 months from packing' },
    { label: 'Certifications', value: 'FSSAI, ISO 22000, HACCP' },
    { label: 'MOQ', value: '500 kg per variety' },
  ],
},
  {
  slug: 'textiles-fabrics',
  title: 'Indian Textiles & Fabrics',
  short: 'Bulk cotton, silk, linen and embroidered fabrics from India.',
  blurb:
    'Export-quality Indian cotton, silk, linen and embroidered fabrics for fashion labels, retailers, home-textile buyers and private-label programmes.',
  description:
    'Indusglobal Export is an Indian textile exporter supplying quality fabrics to fashion brands, garment manufacturers, wholesalers, retailers, interior designers and private-label buyers worldwide. Our textiles and fabrics range includes woven cotton, silk, linen, yarn and embroidered fabrics for apparel, home textiles, accessories and interior applications. We work with suitable Indian mills and artisan clusters to help buyers source fabrics that align with their design, quality and commercial requirements. Each fabric order is planned around buyer-approved specifications, including weave, width, GSM, colour, pattern, finish, hand feel, packing and export documentation. Available options include greige, bleached, dyed and printed fabrics, subject to the product requirement and order volume. Before dispatch, consignments are coordinated for weave consistency, colour fastness and dimensional stability as required. Whether you need a wholesale fabric supplier in India for recurring production, a silk fabric supplier for premium collections or embroidered fabrics for a private-label range, our team provides clear communication from sourcing through international shipment. We make Indian fabric sourcing more reliable for global buyers through practical coordination, quality-focused processes and dependable export support.',
  image:
    'https://i.postimg.cc/jq3bm17b/730e9e60-88e2-41f4-88de-cabc599a5084.png',
  tags: ['Cotton', 'Silk', 'Embroidery', 'Linen', 'Yarn'],
  grades: ['Greige', 'Bleached', 'Dyed & Printed'],
  specs: [
    { label: 'Width', value: '44" to 58" standard' },
    { label: 'GSM range', value: '80 to 320' },
    { label: 'Certifications', value: 'OEKO-TEX, GOTS (organic lines)' },
    { label: 'MOQ', value: '1,000 metres per design' },
  ],
},
  {
  slug: 'agricultural-products',
  title: 'Indian Agricultural Products',
  short: 'Bulk basmati rice, pulses, millets and grains for global buyers.',
  blurb:
    'Export-quality Indian basmati rice, pulses, millets, grains and oilseeds—cleaned, graded and packed for wholesale food buyers worldwide.',
  description:
    'Indusglobal Export supplies Indian agricultural products to importers, wholesalers, food distributors, retailers, hospitality buyers and private-label brands worldwide. Our bulk food commodity range includes 1121 and 1509 basmati rice, non-basmati rice, pulses, millets, wheat, grains and oilseeds sourced for international trade requirements. We help buyers source products according to agreed specifications for variety, grain length, broken percentage, moisture, cleanliness, sorting, packaging and export documentation. Basmati rice is available for buyers seeking aromatic long-grain rice for retail, foodservice and distribution programmes, while our pulses, millets and grains support everyday food supply and value-added product requirements. Products are machine-cleaned, sortex-graded where required and packed in food-grade formats suitable for storage and sea transit. Whether you need a reliable basmati rice exporter, a bulk pulses supplier, Indian millet sourcing or wholesale agricultural products from India, our team coordinates the details from product enquiry through dispatch. We focus on clear buyer communication, practical packaging options and dependable worldwide shipping support for recurring international orders.',
  image:
    'https://i.postimg.cc/9MPVwXxG/c8efa232-dc99-4868-8101-94aca0afe7aa.png',
  tags: ['Basmati Rice', 'Pulses', 'Millets', 'Wheat', 'Oilseeds'],
  grades: ['Grade A', 'Sortex', 'Organic'],
  specs: [
    { label: 'Packaging', value: '5 kg, 25 kg, 50 kg / custom' },
    { label: 'Broken percentage', value: 'Max 2% (basmati)' },
    { label: 'Certifications', value: 'APEDA, FSSAI, ISO 22000' },
    { label: 'MOQ', value: '1 MT (20 ft FCL)' },
  ],
},
  {
    slug: 'leather-goods',
    title: 'Indian Leather Goods',
    short: 'Finely finished leather bags, wallets and accessories.',
    blurb:
      'Finely finished leather bags, wallets and accessories crafted by skilled artisans, combining heritage technique with modern design.',
    description:
      'Our leather goods are crafted by skilled artisans in established leather clusters, combining traditional tanning and finishing techniques with contemporary design. The range includes handbags, wallets, belts, travel accessories and corporate gifting items, finished to a premium standard.',
    image:
      'https://i.postimg.cc/3NcKYSfY/83371bc1-50c0-4456-8a18-55352f4e6832.png',
    tags: ['Bags', 'Wallets', 'Belts', 'Travel', 'Accessories'],
    grades: ['Full-grain', 'Top-grain', 'Vegan leather'],
    specs: [
      { label: 'Material', value: 'Buffalo / goat / sheep leather' },
      { label: 'Finish', value: 'Aniline, semi-aniline, PU coated' },
      { label: 'Certifications', value: 'REACH compliant, LWG audited tanneries' },
      { label: 'MOQ', value: '100 pcs per design' },
    ],
  },
  {
  slug: 'handicrafts-decor',
  title: 'Indian Handicrafts & Home Decor',
  short: 'Wholesale Indian home decor, brassware, woodcraft and artisan-made gifts.',
  blurb:
    'Export-quality Indian handicrafts, brassware, woodcraft, pottery and home decor for retailers, hospitality buyers, interior projects and private-label collections.',
  description:
    'Indusglobal Export is an Indian handicrafts exporter supplying handcrafted home decor and artisan-made products to importers, wholesalers, retailers, interior designers, hospitality buyers and private-label brands worldwide. Our Indian handicrafts range includes brassware, metalware, hand-carved wooden decor, blue pottery, marble inlay, wall decor, gift items and decorative accessories. Each product reflects the material skill, finishing detail and regional artistry that make Indian home decor valuable for global lifestyle and retail collections. We help buyers source products around agreed requirements for material, finish, dimensions, design, quantity, protective packing and export documentation. Whether you need a wholesale brassware supplier, Indian woodcraft for a home decor collection, decorative pottery for retail shelves or customised artisan gifts for a hospitality project, our team coordinates sourcing and shipment with clear communication. Products are packed using suitable foam, cartons or wooden crates to support safe international transit. From initial product selection to final dispatch, we make sourcing Indian handicrafts and home decor more reliable for international buyers.',
  image:
    'https://www.trade4asia.com/category-image/mini-image/wall-art-paintings-sculptures.webp',
  tags: ['Brassware', 'Woodcraft', 'Pottery', 'Marble', 'Decor'],
  specs: [
    { label: 'Material', value: 'Wood, brass, marble, ceramic' },
    { label: 'Finish', value: 'Hand-polished, oxidised, lacquered' },
    { label: 'Packing', value: 'Custom foam + carton / wooden crate' },
    { label: 'MOQ', value: '50 pcs per design' },
  ],
},
{
  slug: 'tea-beverages',
  title: 'Indian Tea & Beverages',
  short: 'Bulk Assam, Darjeeling, Nilgiri and green teas for global buyers.',
  blurb:
    'Export-quality Indian tea from Assam, Darjeeling, Nilgiri and Kangra—available for wholesale, private-label, retail and foodservice programmes.',
  description:
    'Indusglobal Export is an Indian tea exporter supplying quality teas to importers, distributors, retailers, hospitality buyers, foodservice businesses and private-label brands worldwide. Our tea range includes single-origin Assam, Darjeeling, Nilgiri and Kangra teas, alongside green tea, masala chai, CTC tea, orthodox tea and specialty whole-leaf selections. We help buyers source teas around agreed requirements for origin, grade, leaf appearance, aroma, cup profile, blend, packing format, labelling and export documentation. Available formats include bulk tea, tea bags, retail tins and buyer-specific packs, making the range suitable for supermarkets, cafés, gifting collections and branded tea programmes. Tea is packed in vacuum-sealed foil and cartons to help preserve freshness and aroma during international transit. Whether you need a reliable Assam tea supplier, wholesale Darjeeling tea, a bulk green tea exporter or private-label Indian tea support, our team coordinates sourcing and shipment with clear communication. From product enquiry to final dispatch, we make Indian tea sourcing more dependable for international buyers.',
  image:
    'https://i.postimg.cc/QxG4nkdk/44861195-0a16-4a52-bc92-177dc012ac6d.png',
  tags: ['Assam', 'Darjeeling', 'Green Tea', 'Masala Chai', 'Nilgiri'],
  grades: ['CTC', 'Orthodox', 'Specialty / Whole leaf'],
  specs: [
    { label: 'Format', value: 'Bulk, teabags, retail tins' },
    { label: 'Packing', value: 'Vacuum-sealed foil + carton' },
    { label: 'Certifications', value: 'Tea Board of India, Rainforest Alliance' },
    { label: 'MOQ', value: '500 kg per grade' },
  ],
},
{
  slug: 'jaggery',
  title: 'Indian Jaggery & Natural Sweeteners',
  short: 'Bulk Indian jaggery cubes, blocks and powder for global food buyers.',
  blurb:
    'Export-quality sugarcane jaggery from India, available in blocks, cubes and powder for wholesale, retail and private-label food programmes.',
  description:
    'Indusglobal Export supplies Indian sugarcane jaggery to importers, food manufacturers, wholesalers, distributors, retailers and private-label brands worldwide. Jaggery is a traditional cane-based sweetener valued for its rich caramel colour, distinctive flavour and versatility across food, beverage, bakery and confectionery applications. Our export range can be sourced in blocks, cubes, powder and granulated formats according to buyer requirements and product availability. Each order is coordinated around agreed specifications for form, colour, texture, moisture, packaging, labelling and export documentation. Suitable formats can be arranged for bulk food supply, retail shelves, ethnic grocery distribution, horeca requirements and branded private-label packs. Whether you need a reliable Indian jaggery exporter, bulk jaggery cubes, jaggery powder for food production or packaged natural sweeteners for international markets, our team provides clear coordination from sourcing through dispatch. We focus on practical packing, buyer-approved quality requirements and dependable worldwide shipping support for recurring orders.',
  image:
    'https://i.postimg.cc/RV2HTXS8/c5923d16-72d3-46fe-b91d-e5c7014d478a.png',
  tags: ['Jaggery Blocks', 'Jaggery Cubes', 'Jaggery Powder', 'Sugarcane', 'Natural Sweetener'],
  grades: ['Blocks', 'Cubes', 'Powder'],
  specs: [
    { label: 'Forms', value: 'Blocks, cubes, powder / custom' },
    { label: 'Packaging', value: 'Retail packs, bulk cartons / custom' },
    { label: 'Quality', value: 'Buyer-approved specifications' },
    { label: 'MOQ', value: 'Available on request' },
  ],
},

];
