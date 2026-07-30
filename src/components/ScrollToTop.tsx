import { useEffect } from 'react';

/** Scrolls to top on every route change. */
export default function ScrollToTop() {
  const pathname = window.location.pathname;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}
