import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '../data/blog';

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const dateStr = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  if (featured) {
    return (
      <article className="reveal group grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:shadow-xl lg:grid-cols-2">
        <Link to={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        </Link>
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <div className="flex items-center gap-3 text-xs font-medium text-navy-500">
            <span className="rounded-full bg-navy-50 px-3 py-1 font-semibold text-navy-700">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {dateStr}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-navy-900 text-balance">
            <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-navy-700">
              {post.title}
            </Link>
          </h2>
          <p className="mt-3 leading-relaxed text-navy-600">{post.excerpt}</p>
          <Link
            to={`/blog/${post.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
          >
            Read article
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="reveal group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <Link to={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs font-medium text-navy-500">
          <span className="rounded-full bg-navy-50 px-3 py-1 font-semibold text-navy-700">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-900">
          <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-navy-700">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4">
          <span className="text-xs text-navy-400">{dateStr}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-navy-900 transition-colors hover:text-gold-600"
          >
            Read more <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
