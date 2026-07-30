import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ArrowUp, ArrowRight,
} from 'lucide-react';
import { SITE, NAV_LINKS } from '../data/site';
import { PRODUCTS } from '../data/products';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-300">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-edge relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy-900 shadow-lg shadow-navy-900/40 ring-1 ring-white/10">
                <img
                  src="/brand/indusglobalexport.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute left-1/2 top-[-42%] w-[265%] max-w-none -translate-x-1/2"
                />
              </span>
              <div className="leading-none">
                <div className="font-display text-lg font-extrabold text-white">Indusglobal</div>
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
                  Export
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-400">
              A merchant export company headquartered in Chandigarh, India, delivering the finest
              Indian spices, textiles, agricultural products and handicrafts to buyers worldwide.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
                { icon: Instagram, href: SITE.social.instagram, label: 'Instagram' },
                { icon: Facebook, href: SITE.social.facebook, label: 'Facebook' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-800 text-navy-400 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-navy-400 transition-colors hover:text-gold-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="mt-5 space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-sm text-navy-400 transition-colors hover:text-gold-400"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-sm text-navy-400 transition-colors hover:text-gold-400"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <div className="flex flex-col gap-1">
                  {SITE.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="text-sm text-navy-400 transition-colors hover:text-gold-400"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span className="text-sm text-navy-400">{SITE.address.full}</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
            >
              Become a Partner
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-7 sm:flex-row">
          <p className="text-xs text-navy-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-navy-500 transition-colors hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-xs text-navy-500 transition-colors hover:text-gold-400">
              Terms &amp; Conditions
            </Link>
            <a
              href="#home"
              className="flex items-center gap-2 text-xs font-medium text-navy-400 transition-colors hover:text-gold-400"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
