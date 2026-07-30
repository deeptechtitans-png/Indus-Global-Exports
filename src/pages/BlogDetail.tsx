import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, User } from 'lucide-react';
import BlogContent from '../components/BlogContent';
import BlogSidebar from '../components/BlogSidebar';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { BLOG_POSTS } from '../data/blog';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  useScrollReveal(post?.slug);

  usePageMeta(post ? post.title : 'Article', post?.excerpt);

  if (!post) return <Navigate to="/blog" replace />;

  const dateStr = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });

  // related: same category first, then fill with others
  const related = [
    ...BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img src={post.image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-900/50" />
        </div>
        <div className="container-edge relative py-16 lg:py-24">
          <nav className="mb-6 flex items-center gap-2 text-sm text-navy-400">
            <Link to="/" className="transition-colors hover:text-gold-400">Home</Link>
            <span>/</span>
            <Link to="/blog" className="transition-colors hover:text-gold-400">Blog</Link>
            <span>/</span>
            <span className="text-navy-200 line-clamp-1">{post.title}</span>
          </nav>

          <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-300">{post.excerpt}</p>

          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-navy-300">
            <span className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 font-display text-xs font-bold text-white">
                {post.author.charAt(0)}
              </span>
              <span>
                <span className="font-medium text-white">{post.author}</span>
                <span className="block text-xs text-navy-400">{post.authorRole}</span>
              </span>
            </span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {dateStr}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-edge grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Article */}
          <article className="reveal">
            <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-navy-100">
              <img src={post.image} alt={post.title} className="aspect-[16/9] w-full object-cover" loading="lazy" />
            </div>

            <div className="mt-10">
              <BlogContent blocks={post.content} />
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-navy-100 pt-6">
              <Tag className="h-4 w-4 text-navy-400" />
              {post.tags.map((t) => (
                <span key={t} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                  {t}
                </span>
              ))}
            </div>

            {/* Author box */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-navy-50 p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-950 font-display text-lg font-bold text-white">
                {post.author.charAt(0)}
              </span>
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-navy-900">
                  <User className="h-4 w-4 text-navy-500" /> {post.author}
                </div>
                <div className="text-sm text-navy-600">{post.authorRole} at Indusglobal Export</div>
              </div>
            </div>

            {/* Back link */}
            <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </article>

          {/* Sidebar */}
          <BlogSidebar currentSlug={post.slug} search="" onSearch={() => {}} onCategory={() => {}} currentCategory="" />
        </div>
      </section>

      {/* Related articles */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="container-edge">
          <div className="flex items-center justify-between">
            <h2 className="reveal font-display text-2xl font-bold text-navy-900 sm:text-3xl">Related articles</h2>
            <Link to="/blog" className="hidden items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600 sm:inline-flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="reveal group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold text-navy-500">{p.category}</span>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-navy-900 transition-colors group-hover:text-navy-700">
                    {p.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
