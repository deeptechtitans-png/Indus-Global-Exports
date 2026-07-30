import { Shield } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE } from '../data/site';

const HERO_IMG = 'https://images.pexels.com/photos/60521/security-protection-lock-house-door-60521.jpeg?auto=compress&cs=tinysrgb&w=1600';

const SECTIONS = [
  {
    h: '1. Information We Collect',
    p: [
      'We collect information that you provide directly to us when you fill out enquiry forms, request quotations, or communicate with us by email or phone. This may include your name, email address, phone number, company name and the details of your enquiry.',
      'We also automatically collect certain technical data such as your IP address, browser type and pages visited, through standard server logs and analytics tools, to improve our website performance and user experience.',
    ],
  },
  {
    h: '2. How We Use Your Information',
    p: [
      'We use the information you provide to respond to your enquiries, prepare quotations, process orders, arrange shipments and maintain business communications with you.',
      'We may also use your contact details to send you relevant trade updates, product information or newsletters. You can opt out of marketing communications at any time by replying to any email we send or contacting us directly.',
    ],
  },
  {
    h: '3. Information Sharing',
    p: [
      'We do not sell, trade or rent your personal information to third parties. We may share your information with trusted service providers such as freight forwarders, customs brokers and banking partners, strictly for the purpose of fulfilling your export orders.',
      'We may also disclose information when required by law, court order or regulatory authority, or to protect our legal rights and interests.',
    ],
  },
  {
    h: '4. Data Security',
    p: [
      'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction. Access to personal data is restricted to authorised personnel who need it to perform their duties.',
      'However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.',
    ],
  },
  {
    h: '5. Cookies',
    p: [
      'Our website may use cookies to enhance your browsing experience and analyse website traffic. Cookies are small text files stored on your device. You can control cookies through your browser settings, but disabling them may affect some website functionality.',
    ],
  },
  {
    h: '6. Your Rights',
    p: [
      'You have the right to request access to the personal information we hold about you, request corrections, or request that we delete your data. To exercise any of these rights, please contact us using the details provided below.',
    ],
  },
  {
    h: '7. Changes to This Policy',
    p: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
    ],
  },
];

export default function PrivacyPolicy() {
  usePageMeta('Privacy Policy', 'How Indusglobal Export collects, uses and protects your personal information.');
  useScrollReveal();

  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains how we collect, use and protect your information."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
        image={HERO_IMG}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge max-w-3xl">
          <div className="reveal flex items-center gap-3 rounded-2xl bg-navy-50 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
              <Shield className="h-5 w-5" />
            </span>
            <p className="text-sm text-navy-600">
              Last updated: January 2025. This policy applies to all visitors and customers of {SITE.name}.
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
              <h2 className="font-display text-xl font-bold text-navy-900">8. Contact Us</h2>
              <p className="mt-3 leading-relaxed text-navy-700">
                If you have any questions about this Privacy Policy, please contact us:
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
