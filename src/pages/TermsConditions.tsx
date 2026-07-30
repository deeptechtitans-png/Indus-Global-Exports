import { FileText } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE } from '../data/site';

const HERO_IMG = 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1600';

const SECTIONS = [
  {
    h: '1. Acceptance of Terms',
    p: [
      'By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.',
    ],
  },
  {
    h: '2. Use of Our Website',
    p: [
      'You may use our website for lawful purposes only. You agree not to use the site in any way that could damage, disable, overburden or impair it, or interfere with any other party\'s use and enjoyment.',
      'You must not attempt to gain unauthorised access to any part of the website, its server, or any database connected to it. Unauthorized use may result in legal action.',
    ],
  },
  {
    h: '3. Enquiries and Quotations',
    p: [
      'All quotations provided by Indusglobal Export are valid for 30 days from the date of issue unless otherwise stated. Quotations are based on prevailing costs of raw materials, packaging, freight and exchange rates, which are subject to market fluctuation.',
      'Samples are provided for quality evaluation purposes. While we strive for consistency between samples and bulk shipments, minor variations may occur in natural and handcrafted products.',
    ],
  },
  {
    h: '4. Orders and Contracts',
    p: [
      'A binding export contract is formed only upon our written confirmation of your order, following receipt of an accepted purchase order and agreed payment terms. All orders are subject to product availability and export regulations in force at the time of dispatch.',
      'We reserve the right to decline or cancel any order before dispatch, in which case any advance payment received will be refunded in full.',
    ],
  },
  {
    h: '5. Pricing and Payment',
    p: [
      'Unless otherwise agreed in writing, all prices are quoted in US Dollars (USD) on an FOB or CIF basis as specified in the proforma invoice. Payment terms are mutually agreed and stated in the proforma invoice.',
      'The buyer is responsible for any bank charges, duties, taxes and levies applicable at the destination, unless explicitly included in a CIF or DDP quotation.',
    ],
  },
  {
    h: '6. Delivery and Shipping',
    p: [
      'Shipping schedules are indicative and based on vessel availability, production timelines and customs processing. While we make every effort to meet stated delivery dates, we are not liable for delays caused by factors beyond our reasonable control, including force majeure events.',
      'Title and risk in goods pass in accordance with the agreed Incoterms stated on the commercial invoice and contract.',
    ],
  },
  {
    h: '7. Quality and Claims',
    p: [
      'All products are inspected and graded to export standards before dispatch. Any claim for shortage or damage must be notified in writing within 7 days of receipt of the consignment, supported by surveyor or port authority documentation.',
      'Our liability for any valid claim is limited to the replacement of the affected goods or refund of the invoiced value of the affected quantity, at our discretion.',
    ],
  },
  {
    h: '8. Intellectual Property',
    p: [
      'All content on this website — including text, graphics, logos, images and design — is the property of Indusglobal Export or its content providers and is protected by intellectual property laws. You may not reproduce, distribute or use any content without our prior written consent.',
    ],
  },
  {
    h: '9. Governing Law',
    p: [
      'These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Chandigarh, India.',
    ],
  },
];

export default function TermsConditions() {
  usePageMeta('Terms & Conditions', 'Terms and conditions governing the use of the Indusglobal Export website and export services.');
  useScrollReveal();

  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="The terms that govern the use of our website and the export services we provide."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
        image={HERO_IMG}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge max-w-3xl">
          <div className="reveal flex items-center gap-3 rounded-2xl bg-navy-50 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
              <FileText className="h-5 w-5" />
            </span>
            <p className="text-sm text-navy-600">
              Last updated: January 2025. These terms apply to all visitors and customers of {SITE.name}.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {SECTIONS.map((s, i) => (
              <div key={i} className="reveal">
                <h2 className="font-display text-xl font-bold text-navy-900">{s.h}</h2>
                <div className="mt-3 space-y-3">
                  {s.p.map((para, j) => (
                    <p key={j} className="leading-relaxed text-navy-700">{para}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="reveal rounded-2xl bg-navy-50 p-6">
              <h2 className="font-display text-xl font-bold text-navy-900">10. Contact</h2>
              <p className="mt-3 leading-relaxed text-navy-700">
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-navy-600">
                <li>Email: <a href={`mailto:${SITE.email}`} className="font-medium text-navy-900 hover:text-gold-600">{SITE.email}</a></li>
                <li>Phone: {SITE.phones.join(' · ')}</li>
                <li>Address: {SITE.address.full}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
