import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  image: string;
}

export default function PageHero({ title, subtitle, crumbs, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-edge relative py-16 lg:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-navy-400">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-gold-400">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-navy-200">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-navy-600" />}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-300">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
