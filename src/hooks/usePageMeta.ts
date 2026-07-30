import { useEffect } from 'react';

/**
 * Sets document.title and meta description for SEO.
 * Pass a page title (the company name is appended automatically).
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title.includes('Indusglobal')
      ? title
      : `${title} | Indusglobal Export`;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
