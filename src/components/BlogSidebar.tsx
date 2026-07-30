import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight, Tag } from 'lucide-react';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/blog';

interface Props {
  currentSlug?: string;
  currentCategory?: string;
  search: string;
  onSearch: (v: string) => void;
  onCategory: (c: string) => void;
}

export default function BlogSidebar({
  currentSlug, currentCategory, search, onSearch, onCategory,
}: Props) {
  const recent = BLOG_POSTS
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 4);

  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      {/* Search */}
      <div className="card p-5">
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy-900">
          <Search className="h-4 w-4 text-navy-500" /> Search Articles
        </label>
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search the blog…"
            className="w-full rounded-xl border border-navy-200 bg-navy-50/50 px-4 py-2.5 pr-10 text-sm text-navy-800 placeholder:text-navy-400 transition-all focus:border-navy-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-400/20"
          />
          {search && (
            <button
              onClick={() => onSearch('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-2 py-0.5 text-xs font-medium text-navy-400 hover:bg-navy-100 hover:text-navy-700"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="card p-5">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
          Categories
        </h3>
        <ul className="mt-4 space-y-1">
          <li>
            <button
              onClick={() => onCategory('')}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                !currentCategory ? 'bg-navy-900 text-white' : 'text-navy-600 hover:bg-navy-50'
              }`}
            >
              All Articles
              <span className="text-xs opacity-70">{BLOG_POSTS.length}</span>
            </button>
          </li>
          {BLOG_CATEGORIES.map((cat) => {
            const count = BLOG_POSTS.filter((p) => p.category === cat).length;
            return (
              <li key={cat}>
                <button
                  onClick={() => onCategory(cat)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    currentCategory === cat ? 'bg-navy-900 text-white' : 'text-navy-600 hover:bg-navy-50'
                  }`}
                >
                  {cat}
                  <span className="text-xs opacity-70">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Recent posts */}
      <div className="card p-5">
        <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-navy-900">
          <Calendar className="h-4 w-4 text-navy-500" /> Recent Posts
        </h3>
        <ul className="mt-4 space-y-4">
          {recent.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="group flex gap-3"
              >
                <img src={p.image} alt="" className="h-14 w-14 shrink-0 rounded-lg object-cover" loading="lazy" />
                <div>
                  <div className="text-sm font-semibold leading-snug text-navy-800 transition-colors group-hover:text-navy-600">
                    {p.title}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-navy-400">
                    <Tag className="h-3 w-3" /> {p.category}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-6 text-white">
        <h3 className="font-display text-lg font-bold">Need a quote?</h3>
        <p className="mt-2 text-sm text-navy-300">
          Tell us what you need and get pricing within one business day.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
        >
          Request a Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
