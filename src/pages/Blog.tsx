import { useState, useMemo } from 'react';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import BlogSidebar from '../components/BlogSidebar';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blog';

const HERO_IMG = 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Blog() {
  usePageMeta('Discover export guides, sourcing strategies, market trends, compliance updates, and B2B trade insights for international buyers importing from India.');
  useScrollReveal();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchesCat = !category || p.category === category;
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [search, category]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <PageHero
        title="Trade insights & export expertise"
        subtitle="Practical guides, market analysis and compliance know-how for international buyers sourcing from India."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
        image={HERO_IMG}
      />

      {/* Category pills */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-edge flex flex-wrap gap-2 py-5">
          <button
            onClick={() => setCategory('')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              !category ? 'bg-navy-900 text-white' : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
            }`}
          >
            All
          </button>
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                category === cat ? 'bg-navy-900 text-white' : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-navy-50 py-16 lg:py-24">
        <div className="container-edge grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Main column */}
          <div>
            {filtered.length === 0 ? (
              <div className="card p-12 text-center">
                <p className="text-lg font-semibold text-navy-900">No articles found</p>
                <p className="mt-2 text-sm text-navy-500">Try a different search term or category.</p>
                <button
                  onClick={() => { setSearch(''); setCategory(''); }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                {featured && (
                  <div className="mb-8">
                    <BlogCard post={featured} featured />
                  </div>
                )}
                <div className="grid gap-6 sm:grid-cols-2">
                  {rest.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <BlogSidebar
            search={search}
            onSearch={setSearch}
            currentCategory={category}
            onCategory={setCategory}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
