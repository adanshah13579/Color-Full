'use client';

import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    try {
      const theme = localStorage.getItem('theme');
      if (theme !== 'dark') {
        // Force light mode
        document.documentElement.classList.remove('dark');
        if (document.body) {
          document.body.style.backgroundColor = '#ffffff';
          document.body.style.color = '#171717';
        }
      }
    } catch (e) {
      // Silently fail if localStorage is not available
      console.error('Theme initialization error:', e);
    }
  }, []);

  return null;
}

