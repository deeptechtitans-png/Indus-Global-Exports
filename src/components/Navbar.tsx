import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe2, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SITE } from '../data/site';
import { PRODUCTS } from '../data/products';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-navy-950 text-navy-200 lg:block">
        <div className="container-edge flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Globe2 className="h-3.5 w-3.5 text-gold-400" />
            <span className="tracking-wide">Merchant Exporter · {SITE.address.line}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
              {SITE.email}
            </a>
            <span className="h-3 w-px bg-navy-700" />
            <a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5 text-gold-400" />
              {SITE.phones[0]}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-sm shadow-navy-900/5 backdrop-blur-md' : 'bg-white'
        }`}
      >
        <nav className="container-edge flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="group flex items-center gap-3" aria-label={SITE.name}>
            <Logo />
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-extrabold tracking-tight text-navy-900 lg:text-lg">
                Indusglobal
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-500">
                Export
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.label === 'Products' ? (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(location.pathname, link.href)
                        ? 'text-navy-900'
                        : 'text-navy-700 hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Mega dropdown */}
                  <div
                    className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200 ${
                      productsOpen ? 'visible opacity-100' : 'invisible opacity-0'
                    }`}
                  >
                    <div className="max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-navy-100 bg-white p-2 shadow-xl shadow-navy-900/10">
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.slug}
                          to={`/products/${p.slug}`}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-navy-50"
                        >
                          <img src={p.image} alt="" className="h-10 w-10 shrink-0 rounded-lg object-cover" />
                          <div>
                            <div className="text-sm font-semibold text-navy-900">{p.title}</div>
                            <div className="text-xs text-navy-500">{p.short}</div>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/products"
                        className="mt-1 flex items-center justify-between rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                      >
                        View all products
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(location.pathname, link.href)
                        ? 'text-navy-900'
                        : 'text-navy-700 hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-800 transition-colors hover:bg-navy-50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-navy-100 px-5">
            <span className="font-display text-lg font-extrabold text-navy-900">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-50"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 overflow-y-auto px-4 py-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/privacy-policy"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-500 transition-colors hover:bg-navy-50"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-500 transition-colors hover:bg-navy-50"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
          <div className="mt-auto space-y-3 border-t border-navy-100 p-5">
            <Link to="/contact" className="btn-primary w-full">
              Request a Quote
            </Link>
            <a
              href={`tel:${SITE.phones[0].replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-navy-700"
            >
              <Phone className="h-4 w-4 text-gold-500" />
              {SITE.phones[0]}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

function Logo() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy-900 shadow-lg shadow-navy-900/30 ring-1 ring-navy-900/10 transition-transform duration-300 group-hover:scale-105">
      <img
        src="/brand/indusglobalexport.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-[-42%] w-[265%] max-w-none -translate-x-1/2"
      />
    </span>
  );
}
