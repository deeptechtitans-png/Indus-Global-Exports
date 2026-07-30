export interface Market {
  slug: string;
  region: string;
  title: string;
  blurb: string;
  description: string;
  highlights: string[];
  image: string;
}

export const MARKETS: Market[] = [
  {
    slug: 'europe',
    region: 'Europe',
    title: 'European Union & United Kingdom',
    blurb: 'Compliance-ready supply to EU and UK buyers.',
    description:
      'We are experienced in exporting to EU and UK markets with full compliance to REACH, EU food safety regulations and phytosanitary requirements. Our documentation team ensures smooth customs clearance at major ports including Rotterdam, Hamburg and Felixstowe.',
    highlights: ['REACH compliant', 'Phytosanitary certified', 'EU labelling support', 'HS-code advisory'],
    image:
      'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'middle-east',
    region: 'Middle East',
    title: 'Middle East & GCC',
    blurb: 'High-volume supply to Gulf and Levant markets.',
    description:
      'The Middle East is one of our strongest markets, with regular shipments of basmati rice, spices, tea and textiles to the UAE, Saudi Arabia, Qatar, Kuwait and Oman. We understand HALAL certification requirements and regional packaging preferences.',
    highlights: ['HALAL certified supply', 'Arabic labelling', 'Jebel Ali & Dammam routing', 'High-volume FCL'],
    image:
      'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'north-america',
    region: 'North America',
    title: 'United States & Canada',
    blurb: 'FDA-ready documentation and FDA-prior-notice support.',
    description:
      'We supply FDA-registered facilities in the United States and Canada with spices, agricultural products and handicrafts. Our team manages FDA prior notice, FSVP documentation and custom packaging requirements for North American retail and food service buyers.',
    highlights: ['FDA prior notice', 'FSVP support', 'English / French labelling', 'FCL & LCL options'],
    image:
      'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'asia-pacific',
    region: 'Asia-Pacific',
    title: 'South-East Asia & Asia-Pacific',
    blurb: 'Regional trade partnerships across APAC.',
    description:
      'We actively export to South-East Asia and the broader Asia-Pacific region, including Singapore, Malaysia, Vietnam, Japan and Australia. Proximity allows shorter lead times and flexible shipment scheduling for both FCL and LCL consignments.',
    highlights: ['Short lead times', 'FCL & LCL flexible', 'Bilingual documentation', 'ASEAN tariff advisory'],
    image:
      'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'africa',
    region: 'Africa',
    title: 'Africa',
    blurb: 'Reliable supply to East and West African markets.',
    description:
      'We supply buyers across East and West Africa, including Kenya, Nigeria, Ghana and Ethiopia. Our shipments include rice, textiles and leather goods, with documentation structured for efficient clearance at African ports.',
    highlights: ['Direct port routing', 'Pre-shipment inspection', 'Flexible payment terms', 'Volume incentives'],
    image:
      'https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'latin-america',
    region: 'Latin America',
    title: 'Latin America',
    blurb: 'Growing partnerships across Central and South America.',
    description:
      'We are expanding our footprint in Latin America, with growing partnerships in Brazil, Mexico and Chile. We help buyers navigate import regulations and provide Spanish documentation support where required.',
    highlights: ['Spanish documentation', 'Import regulation advisory', 'Consolidated shipments', 'Sample programs'],
    image:
      'https://cdn.getyourguide.com/img/location/5cced3a1a6f81.jpeg/99.jpg',
  },
];
