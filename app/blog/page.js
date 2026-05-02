import BlogClient from './BlogClient'
import { buildPageMetadata } from '../../lib/buildPageMetadata'

export const metadata = buildPageMetadata({
  path: '/blog',
  title: 'Color Design Blog',
  description:
    'Articles on color trends, WCAG accessibility, palette ideas, hex codes, and practical guides for web, UI, and brand design — from Theme & Color.',
  keywords: [
    'color blog',
    'design trends',
    'color palettes',
    'WCAG',
    'hex codes',
    'UI color',
    'Theme & Color',
  ],
})

// Card image: color palette (array of hex) per post — matches Theme & Color brand
const CARD_PALETTES = {
  '10-color-trends-for-2025': ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'],
  'color-palette-ideas-for-small-business': ['#1e3a8a', '#ffffff', '#d4af37', '#059669', '#6b7280'],
  'ocean-breeze': ['#0ea5e9', '#06b6d4', '#14b8a6', '#10b981'],
  'sunset-vibes': ['#f97316', '#ef4444', '#ec4899', '#8b5cf6'],
  'forest-green': ['#228b22', '#166534', '#15803d', '#86efac', '#dcfce7'],
  'forest-green-hex-code': ['#228b22', '#065f46', '#047857', '#10b981', '#34d399'],
  'ocean-breeze-hex-code': ['#0ea5e9', '#06b6d4', '#14b8a6', '#10b981', '#34d399'],
  'purple-dream': ['#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ede9fe'],
  'how-to-check-color-contrast-accessibility': ['#111827', '#374151', '#6b7280', '#9ca3af', '#ffffff'],
  'best-neutral-colors-pair-with-brand': ['#1c1917', '#57534e', '#a8a29e', '#e7e5e4', '#fafaf9'],
  'ecommerce-color-palettes-product-first-vs-brand-first': ['#2563eb', '#0ea5e9', '#f59e0b', '#ef4444', '#111827'],
  'accessible-dark-mode-color-palette': ['#0a0a0a', '#171717', '#3f3f46', '#e4e4e7', '#818cf8'],
  'wcag-accessible-buttons-and-links': ['#ffffff', '#1e40af', '#1d4ed8', '#1e293b', '#0ea5e9'],
};

// Static blog posts data
const staticPosts = [
  {
    _id: '1',
    title: '10 Color Trends for 2025: Modern Color Palettes for Web & UI Design',
    slug: { current: '10-color-trends-for-2025' },
    excerpt: 'Discover the most popular color palettes and trends shaping design in 2025.',
    publishedAt: '2025-01-15',
  },
  {
    _id: '2',
    title: 'Color Palette Ideas for Small Business: A Practical Guide',
    slug: { current: 'color-palette-ideas-for-small-business' },
    excerpt: 'Practical color palette ideas for small business: how many colors to use, industry examples, and where to apply them on your website and branding.',
    publishedAt: '2025-02-08',
  },
  {
    _id: '3',
    title: 'Ocean Breeze Color Palette: Hex Codes, Shades & Pairings',
    slug: { current: 'ocean-breeze' },
    excerpt:
      'Ocean breeze hex anchors (#0EA5E9–#10B981), eight blue-teal shades, UI pairings, and links to our palette generator and contrast checker.',
    publishedAt: '2025-02-09',
  },
  {
    _id: '4',
    title: 'Sunset Vibes Color Palette: Hex Codes, Shades & Pairings',
    slug: { current: 'sunset-vibes' },
    excerpt:
      'Sunset vibes hex codes (#F97316, #EF4444, #EC4899, #8B5CF6), eight warm shades, pairings, and UI usage with accessibility reminders.',
    publishedAt: '2025-02-10',
  },
  {
    _id: '5',
    title: 'Forest Green Color Palette: Hex Codes, Shades & Pairings',
    slug: { current: 'forest-green' },
    excerpt:
      'Forest green palette from #228B22 through mint tints—shades table, pairings, UI guidance, and generator links for eco and fintech brands.',
    publishedAt: '2025-02-11',
  },
  {
    _id: '12',
    title: 'Forest Green Hex Code: #228B22, RGB & UI greens (copy-paste)',
    slug: { current: 'forest-green-hex-code' },
    excerpt:
      'Forest green hex code (#228B22 for CSS), deeper UI greens, RGB, a five-color palette, scheme ideas, and Ocean Breeze pairings—with copy-ready swatches.',
    publishedAt: '2026-04-11',
  },
  {
    _id: '13',
    title: 'Ocean Breeze Hex Codes: Color & Colour Codes (Copy-Paste)',
    slug: { current: 'ocean-breeze-hex-code' },
    excerpt:
      'Ocean Breeze color and colour codes with RGB values: #0EA5E9, #06B6D4, #14B8A6, #10B981, and #34D399. Copy-ready swatches, CSS variables, and contrast tips.',
    publishedAt: '2026-04-17',
  },
  {
    _id: '6',
    title: 'Purple Dream Color Palette: Hex Codes, Shades & Pairings',
    slug: { current: 'purple-dream' },
    excerpt:
      'Purple dream hex ramp (#7C3AED–#EDE9FE), eight lavender shades, pairings for luxury and creative brands, plus tool links.',
    publishedAt: '2025-02-12',
  },
  {
    _id: '7',
    title: 'How to Check Color Contrast for Accessibility (WCAG Guide)',
    slug: { current: 'how-to-check-color-contrast-accessibility' },
    excerpt: 'Learn how to check color contrast for accessibility. WCAG AA and AAA ratios, contrast checker tools, and practical tips for readable, compliant text and UI.',
    publishedAt: '2025-03-13',
  },
  {
    _id: '8',
    title: 'Best Neutral Colors to Pair With Your Brand Color',
    slug: { current: 'best-neutral-colors-pair-with-brand' },
    excerpt: 'Neutral colors for branding: grays, off-whites, and warm vs cool neutrals that pair with blue, green, and any brand color. Plus contrast-safe text and background combos.',
    publishedAt: '2025-03-15',
  },
  {
    _id: '9',
    title: 'E-commerce Color Palettes: Product-First vs Brand-First Approaches',
    slug: { current: 'ecommerce-color-palettes-product-first-vs-brand-first' },
    excerpt: 'Learn ecommerce color palette strategies: product-first vs brand-first store colors, with hex examples and WCAG-safe testing using our palette generator and contrast checker.',
    publishedAt: '2025-03-19',
  },
  {
    _id: '10',
    title: 'How to Build an Accessible Dark Mode Color Palette (With Hex Examples)',
    slug: { current: 'accessible-dark-mode-color-palette' },
    excerpt:
      'Define canvas, surface, text, and accent roles for dark UI. Three WCAG-oriented palette examples with hex codes, plus how to test with a contrast checker and palette generator.',
    publishedAt: '2026-04-01',
  },
  {
    _id: '11',
    title: 'WCAG Contrast for Buttons and Links: Hex Examples for Web UI',
    slug: { current: 'wcag-accessible-buttons-and-links' },
    excerpt:
      'Pick link and button colors that pass WCAG AA: filled CTAs, outline buttons, dark bands, focus rings—with hex swatches next to each tip and our contrast checker to verify.',
    publishedAt: '2026-04-02',
  },
];

export { CARD_PALETTES };

export default function BlogPage() {
  return (
    <BlogClient
      posts={staticPosts}
      cardPalettes={CARD_PALETTES}
    />
  )
}
