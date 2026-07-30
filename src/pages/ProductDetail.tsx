import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Package, FileCheck2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { PRODUCTS } from '../data/products';
import CTASection from '../components/CTASection';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);
  useScrollReveal();

  usePageMeta(
    product ? `${product.title}` : 'Product',
    product?.short
  );

  if (!product) return <Navigate to="/products" replace />;

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img src={product.image} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
        </div>
        <div className="container-edge relative py-16 lg:py-24">
          <nav className="mb-6 flex items-center gap-2 text-sm text-navy-400">
            <Link to="/" className="transition-colors hover:text-gold-400">Home</Link>
            <span>/</span>
            <Link to="/products" className="transition-colors hover:text-gold-400">Products</Link>
            <span>/</span>
            <span className="text-navy-200">{product.title}</span>
          </nav>
          <span className="chip-light">Product</span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl">
            {product.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-300">{product.blurb}</p>
        </div>
      </section>

      {/* Detail body */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-edge grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="reveal overflow-hidden rounded-3xl shadow-lg ring-1 ring-navy-100">
              <img src={product.image} alt={product.title} className="aspect-[16/9] w-full object-cover" loading="lazy" />
            </div>

            <div className="reveal mt-10">
              <h2 className="font-display text-2xl font-bold text-navy-900">Overview</h2>
              <p className="mt-4 leading-relaxed text-navy-700">{product.description}</p>
            </div>

            {product.grades && (
              <div className="reveal mt-10">
                <h2 className="font-display text-2xl font-bold text-navy-900">Available grades</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.grades.map((g) => (
                    <span key={g} className="flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-800">
                      <Check className="h-4 w-4 text-gold-500" /> {g}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="reveal mt-10">
              <h2 className="font-display text-2xl font-bold text-navy-900">Key categories</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.tags.map((t) => (
                  <div key={t} className="flex items-center gap-2.5 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-navy-700">
                    <span className="h-2 w-2 rounded-full bg-gold-500" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="reveal card overflow-hidden">
              <div className="bg-gradient-to-br from-navy-800 to-navy-950 p-6 text-white">
                <h3 className="font-display text-lg font-bold">Specifications</h3>
                <dl className="mt-5 space-y-4">
                  {product.specs.map((s) => (
                    <div key={s.label} className="border-b border-white/10 pb-3 last:border-0">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-navy-400">{s.label}</dt>
                      <dd className="mt-1 text-sm font-medium text-white">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gold-600">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="reveal mt-6 card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><ShieldCheck className="h-5 w-5" /></span>
                <div>
                  <div className="text-sm font-semibold text-navy-900">Quality assured</div>
                  <div className="text-xs text-navy-500">Pre-shipment inspected</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><FileCheck2 className="h-5 w-5" /></span>
                <div>
                  <div className="text-sm font-semibold text-navy-900">Full compliance</div>
                  <div className="text-xs text-navy-500">Documentation included</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><Package className="h-5 w-5" /></span>
                <div>
                  <div className="text-sm font-semibold text-navy-900">Flexible volumes</div>
                  <div className="text-xs text-navy-500">FCL & LCL options</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-edge">
          <h2 className="reveal font-display text-2xl font-bold text-navy-900 sm:text-3xl">Related products</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((p, i) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="reveal group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-display text-lg font-bold text-white">{p.title}</h3>
                </div>
                <p className="p-4 text-sm text-navy-600">{p.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
