import type { BlogBlock } from '../data/blog';

export default function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'heading':
            return (
              <h2 key={i} className="pt-4 font-display text-2xl font-bold leading-tight text-navy-900">
                {b.text}
              </h2>
            );
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-4 border-gold-500 bg-navy-50 py-4 pl-6 pr-4 text-lg font-medium italic leading-relaxed text-navy-800"
              >
                {b.text}
              </blockquote>
            );
          case 'list':
            return (
              <ul key={i} className="space-y-2.5">
                {b.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-navy-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );
          default:
            return (
              <p key={i} className="leading-relaxed text-navy-700">
                {b.text}
              </p>
            );
        }
      })}
    </div>
  );
}
