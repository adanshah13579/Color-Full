'use client';

import Link from 'next/link';
import InlineTagLink from './components/InlineTagLink';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { PILLAR_GUIDES, TOOL_HUB_LINKS } from '../lib/site-pillar-links';

// Featured palettes (each links to a blog post)
const featuredPalettes = [
  { id: 1, name: 'Ocean Breeze', colors: ['#0EA5E9', '#06B6D4', '#14B8A6', '#10B981', '#34D399'], slug: 'ocean-breeze' },
  { id: 2, name: 'Sunset Vibes', colors: ['#F59E0B', '#F97316', '#EF4444', '#EC4899', '#A855F7'], slug: 'sunset-vibes' },
  { id: 3, name: 'Forest Green', colors: ['#065F46', '#047857', '#059669', '#10B981', '#34D399'], slug: 'forest-green' },
  { id: 4, name: 'Purple Dream', colors: ['#581C87', '#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD'], slug: 'purple-dream' },
];

// Latest blog cards (image-only slider)
const latestPosts = [
  {
    id: 1,
    title: '10 Color Trends for 2025: Modern Color Palettes for Web & UI Design',
    slug: '10-color-trends-for-2025',
    palette: ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'],
    publishedAt: '2025-01-15',
  },
  {
    id: 2,
    title: 'Color Palette Ideas for Small Business: A Practical Guide',
    slug: 'color-palette-ideas-for-small-business',
    palette: ['#1e3a8a', '#ffffff', '#d4af37', '#059669', '#6b7280'],
    publishedAt: '2025-02-08',
  },
  {
    id: 3,
    title: 'Ocean Breeze: A Calm Blue-to-Green Palette',
    slug: 'ocean-breeze',
    palette: ['#0EA5E9', '#06B6D4', '#14B8A6', '#10B981', '#34D399'],
    publishedAt: '2025-02-09',
  },
  {
    id: 4,
    title: 'Sunset Vibes: Bold Orange-to-Purple Palette',
    slug: 'sunset-vibes',
    palette: ['#F59E0B', '#F97316', '#EF4444', '#EC4899', '#A855F7'],
    publishedAt: '2025-02-10',
  },
  {
    id: 5,
    title: 'Forest Green: A Natural Green Palette',
    slug: 'forest-green',
    palette: ['#065F46', '#047857', '#059669', '#10B981', '#34D399'],
    publishedAt: '2025-02-11',
  },
  {
    id: 6,
    title: 'Forest Green Hex Code: #228B22, RGB & UI greens (copy-paste)',
    slug: 'forest-green-hex-code',
    palette: ['#228b22', '#065f46', '#047857', '#10b981', '#34d399'],
    publishedAt: '2026-04-11',
  },
  {
    id: 7,
    title: 'Ocean Breeze Hex Codes: Color & Colour Codes (Copy-Paste)',
    slug: 'ocean-breeze-hex-code',
    palette: ['#0ea5e9', '#06b6d4', '#14b8a6', '#10b981', '#34d399'],
    publishedAt: '2026-04-17',
  },
  {
    id: 8,
    title: 'Purple Dream: Royal to Lavender Palette',
    slug: 'purple-dream',
    palette: ['#581C87', '#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD'],
    publishedAt: '2025-02-12',
  },
  {
    id: 9,
    title: 'How to Check Color Contrast for Accessibility (WCAG Guide)',
    slug: 'how-to-check-color-contrast-accessibility',
    palette: ['#111827', '#374151', '#6b7280', '#9ca3af', '#ffffff'],
    publishedAt: '2025-03-13',
  },
  {
    id: 10,
    title: 'Best Neutral Colors to Pair With Your Brand Color',
    slug: 'best-neutral-colors-pair-with-brand',
    palette: ['#1c1917', '#57534e', '#a8a29e', '#e7e5e4', '#fafaf9'],
    publishedAt: '2025-03-15',
  },
  {
    id: 11,
    title: 'E-commerce Color Palettes: Product-First vs Brand-First Approaches',
    slug: 'ecommerce-color-palettes-product-first-vs-brand-first',
    palette: ['#2563eb', '#0ea5e9', '#f59e0b', '#ef4444', '#111827'],
    publishedAt: '2025-03-19',
  },
  {
    id: 12,
    title: 'How to Build an Accessible Dark Mode Color Palette (With Hex Examples)',
    slug: 'accessible-dark-mode-color-palette',
    palette: ['#0a0a0a', '#171717', '#3f3f46', '#e4e4e7', '#818cf8'],
    publishedAt: '2026-04-01',
  },
  {
    id: 13,
    title: 'WCAG Contrast for Buttons and Links: Hex Examples for Web UI',
    slug: 'wcag-accessible-buttons-and-links',
    palette: ['#ffffff', '#1e40af', '#1d4ed8', '#1e293b', '#0ea5e9'],
    publishedAt: '2026-04-02',
  },
];

export default function Home() {
  const [blogPage, setBlogPage] = useState(1);
  const BLOG_CARDS_PER_PAGE = 50;
  const totalBlogPages = Math.ceil(latestPosts.length / BLOG_CARDS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (blogPage - 1) * BLOG_CARDS_PER_PAGE;
    const end = start + BLOG_CARDS_PER_PAGE;
    return latestPosts.slice(start, end);
  }, [blogPage]);

  const goToBlogPage = (nextPage) => {
    const page = Math.max(1, Math.min(totalBlogPages, nextPage));
    setBlogPage(page);
    const section = document.getElementById('latest-blog-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(139, 92, 246) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Messaging */}
            <div>
              <p className="inline-flex items-center rounded-full bg-purple-50 dark:bg-purple-900/40 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-200 mb-4 border border-purple-100 dark:border-purple-800">
                Color workflow for designers & developers
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
                Professional color tools for modern brands.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-xl leading-relaxed">
                Generate dependable color systems, verify accessibility, and document palettes your whole team can use—without wrestling with hex codes in a spreadsheet.
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
                Start with the{' '}
                <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>{' '}
                for UI and brand work, then confirm readable text and backgrounds with the{' '}
                <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/tools"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold text-base md:text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                  >
                    <span>Open color tools</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold text-base md:text-lg hover:border-purple-500 dark:hover:border-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    Browse color palettes
                  </Link>
                </motion.div>
              </div>

              <p className="mt-6 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                Built for product designers, front-end engineers, and brand teams who need consistent, accessible color—without guesswork.
              </p>
            </div>

            {/* Right: Product-style preview */}
            <div className="relative">
              <div className="absolute -top-6 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/40 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-6 w-32 h-32 bg-gradient-to-tr from-emerald-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-2xl p-5 md:p-6">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Palette generator
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2 mb-5">
                  {['#0EA5E9', '#06B6D4', '#10B981', '#F97316', '#8B5CF6'].map((color) => (
                    <div key={color} className="flex flex-col gap-2">
                      <div
                        className="h-16 rounded-lg border border-gray-100 dark:border-gray-800"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-[10px] font-medium text-gray-600 dark:text-gray-400 text-center truncate">
                        {color}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start mb-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Contrast check
                    </p>
                    <div className="rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                      <div className="px-3 py-3 bg-gray-900 text-white text-xs flex items-center justify-between">
                        <span>Heading on background</span>
                        <span className="inline-flex items-center rounded-full bg-emerald-500/20 text-emerald-400 px-2 py-0.5 text-[10px] font-semibold">
                          AA 4.6:1
                        </span>
                      </div>
                      <div className="px-3 py-3 text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900">
                        <div className="mb-2">
                          <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-[10px] font-medium text-gray-700 dark:text-gray-200 mr-1">
                            Text
                          </span>
                          <span className="font-mono text-[11px]">#0F172A</span>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-[10px] font-medium text-gray-700 dark:text-gray-200 mr-1">
                            Background
                          </span>
                          <span className="font-mono text-[11px]">#F9FAFB</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Saved palettes
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-gray-800 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400" />
                          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                            Ocean Breeze
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-500 dark:text-gray-400">UI kit</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-gray-800 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 rounded-full bg-gradient-to-br from-emerald-500 to-lime-400" />
                          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                            Forest Green
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-500 dark:text-gray-400">Brand</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Generate, test, and ship color decisions in one place.
                  </p>
                  <Link
                    href="/tools"
                    className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Try it free →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Tools – contextual text links for crawl depth */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Popular Tools</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Use our <InlineTagLink href="/tools/palette-generator">color palette generator</InlineTagLink> to create harmonious palettes from a base color, then verify readability with our <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink> for WCAG-compliant text and background pairs.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Color Palettes Section */}
      <section id="latest-blog-section" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Popular Color Palettes
            </h2>
            <p className="text-center text-gray-800 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover curated color schemes loved by designers worldwide
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPalettes.map((palette, index) => (
                <motion.div
                  key={palette.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${palette.slug}`} className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-transparent">
                    <div className="h-32 flex">
                      {palette.colors.map((color, i) => (
                        <div
                          key={i}
                          className="flex-1"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                        {palette.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 px-4 py-5 sm:px-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
                Guides &amp; hex references
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Jump to our most-read references—then use the{' '}
                {TOOL_HUB_LINKS.map(({ href, label }, i) => (
                  <span key={href}>
                    {i > 0 ? ' or ' : ''}
                    <InlineTagLink href={href}>{label}</InlineTagLink>
                  </span>
                ))}{' '}
                to build and verify palettes.
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm">
                {PILLAR_GUIDES.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ad Space Placeholder (moved where Featured Tool was) */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-400 text-sm">
                Ad Space (728x90)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Articles Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Latest Blog Articles
                </h2>
                <p className="text-gray-800 dark:text-gray-400">
                  Stay updated with the latest color trends and design tips
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:block text-purple-600 dark:text-purple-400 hover:underline font-semibold"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
                      {/* Image-only card */}
                      <div className="h-40 md:h-44 lg:h-48 flex relative overflow-hidden">
                        {post.palette.map((color, i) => (
                          <div
                            key={i}
                            className="flex-1 min-w-0 transition-all duration-300 group-hover:flex-[1.08]"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        <span className="sr-only">{post.title}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
              <button
                onClick={() => goToBlogPage(blogPage - 1)}
                disabled={blogPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Prev
              </button>
              {Array.from({ length: totalBlogPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToBlogPage(page)}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                    blogPage === page
                      ? 'bg-purple-600 text-white'
                      : 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => goToBlogPage(blogPage + 1)}
                disabled={blogPage === totalBlogPages}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Next
              </button>
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link
                href="/blog"
                className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
              >
                View All Articles →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
