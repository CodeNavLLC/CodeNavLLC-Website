import { useEffect } from 'react';

// Lightweight, dependency-free per-route document title (no react-helmet).
// Usage: usePageTitle('About');  ->  "About | CodeNav LLC"
export default function usePageTitle(title) {
  useEffect(() => {
    const base = 'CodeNav LLC';
    document.title = title ? `${title} | ${base}` : base;
    return () => {
      document.title = base;
    };
  }, [title]);
}
