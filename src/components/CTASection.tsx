import { Link } from 'react-router-dom';
import { ArrowRight, Handshake } from 'lucide-react';

interface Props {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  title = 'Ready to source from India with confidence?',
  subtitle = 'Share your product list and volume — we will respond within one business day with pricing, samples and a delivery timeline.',
  primaryLabel = 'Request a Quote',
  primaryTo = '/contact',
  secondaryLabel = 'Become a Partner',
  secondaryTo = '/contact',
}: Props) {
  return (
    <section className="bg-navy-50 py-20 lg:py-24">
      <div className="container-edge">
        <div className="reveal overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 px-8 py-12 shadow-xl shadow-navy-900/20 lg:px-16 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="chip-light">
                <Handshake className="h-3.5 w-3.5" />
                Partner With Us
              </span>
              <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-navy-300">{subtitle}</p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3 lg:flex-col">
              <Link to={primaryTo} className="btn-gold">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to={secondaryTo} className="btn-outline-light">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
