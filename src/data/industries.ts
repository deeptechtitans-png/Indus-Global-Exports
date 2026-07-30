export interface Industry {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  description: string;
  products: string[];
  image: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'food-beverage',
    title: 'Food & Beverage',
    icon: 'Wheat',
    blurb: 'Spices, rice, tea and pulses for manufacturers, distributors and retail chains.',
    description:
      'We supply raw and semi-processed food commodities to food manufacturers, spice blenders, tea packers and retail chains worldwide. Our sourcing network spans primary agri-belts, and every consignment meets destination-country food safety regulations.',
    products: ['Spices & Condiments', 'Agricultural Products', 'Tea & Beverages'],
    image:
      'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'fashion-apparel',
    title: 'Fashion & Apparel',
    icon: 'Shirt',
    blurb: 'Fabrics and textiles for fashion houses, designers and garment manufacturers.',
    description:
      'We serve fashion brands, garment manufacturers and interior designers with woven and embroidered fabrics, trims and finished textile products. Our partners rely on us for consistent weave quality, colour fastness and on-time delivery across seasons.',
    products: ['Textiles & Fabrics', 'Leather Goods'],
    image:
      'https://images.pexels.com/photos/5383375/pexels-photo-5383375.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'retail-distribution',
    title: 'Retail & Distribution',
    icon: 'ShoppingBag',
    blurb: 'Ready-to-sell packaged goods for supermarket and specialty retail.',
    description:
      'For retail chains and distributors, we provide private-label ready packaged spices, rice, tea and handicraft lines — complete with compliant labelling, barcoding and retail-ready packaging tailored to destination market requirements.',
    products: ['Spices & Condiments', 'Agricultural Products', 'Tea & Beverages', 'Handicrafts & Decor'],
    image:
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'hospitality-horeca',
    title: 'Hospitality & HoReCa',
    icon: 'UtensilsCrossed',
    blurb: 'Bulk supplies for hotels, restaurants and catering operations.',
    description:
      'Hotels, restaurant chains and caterers source bulk spices, rice, tea and decor from us. We understand the operational rhythm of hospitality buyers and offer flexible volumes, consistent quality and reliable replenishment cycles.',
    products: ['Spices & Condiments', 'Agricultural Products', 'Tea & Beverages'],
    image:
      'https://images.pexels.com/photos/2611817/pexels-photo-2611817.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'home-interiors',
    title: 'Home & Interiors',
    icon: 'Sofa',
    blurb: 'Handcrafted decor and furnishings for interior brands and studios.',
    description:
      'Interior designers, home studios and decor brands source handcrafted textiles, brassware, woodcraft and marble inlay from us. Each piece is made to specification and packed to survive international freight without damage.',
    products: ['Handicrafts & Decor', 'Textiles & Fabrics'],
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'gifting-corporate',
    title: 'Corporate Gifting',
    icon: 'Gift',
    blurb: 'Curated leather and handicraft gift sets for corporate buyers.',
    description:
      'We curate premium leather and handcrafted gift sets for corporate buyers, event planners and premium retailers. From branded packaging to custom inserts, we handle the full assembly and export process.',
    products: ['Leather Goods', 'Handicrafts & Decor'],
    image:
      'https://images.pexels.com/photos/6621337/pexels-photo-6621337.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];
