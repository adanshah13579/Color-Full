'use client';

import Link from 'next/link';

/**
 * Inline tag-style link for use inside body text. Renders as a pill/badge so
 * links stand out and read as clearly clickable.
 */
export default function InlineTagLink({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={
        `inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-sm font-bold uppercase ` +
        `bg-white border-2 border-black ` +
        `dark:bg-white dark:border-black ` +
        `hover:bg-gray-100 dark:hover:bg-gray-100 ` +
        `transition-colors no-underline ${className}`
      }
    >
      <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        {children}
      </span>
      <svg
        className="w-3.5 h-3.5 shrink-0 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </Link>
  );
}
