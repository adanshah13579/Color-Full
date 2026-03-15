import BlogClient from './BlogClient'

// Card image: color palette (array of hex) per post — matches Theme & Color brand
const CARD_PALETTES = {
  '10-color-trends-for-2025': ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'],
  'color-palette-ideas-for-small-business': ['#1e3a8a', '#ffffff', '#d4af37', '#059669', '#6b7280'],
  'ocean-breeze': ['#0ea5e9', '#14b8a6', '#2dd4bf', '#6ee7b7', '#a7f3d0'],
  'sunset-vibes': ['#ea580c', '#dc2626', '#ec4899', '#a855f7', '#7c3aed'],
  'forest-green': ['#14532d', '#15803d', '#22c55e', '#4ade80', '#bbf7d0'],
  'purple-dream': ['#4c1d95', '#7c3aed', '#a78bfa', '#c4b5fd', '#e9d5ff'],
  'how-to-check-color-contrast-accessibility': ['#111827', '#374151', '#6b7280', '#9ca3af', '#ffffff'],
  'best-neutral-colors-pair-with-brand': ['#1c1917', '#57534e', '#a8a29e', '#e7e5e4', '#fafaf9'],
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
    title: 'Ocean Breeze: A Calm Blue-to-Green Palette',
    slug: { current: 'ocean-breeze' },
    excerpt: 'A soothing palette of sky blue, teal, and mint green for calm, professional design.',
    publishedAt: '2025-02-10',
  },
  {
    _id: '4',
    title: 'Sunset Vibes: Bold Orange-to-Purple Palette',
    slug: { current: 'sunset-vibes' },
    excerpt: 'Vibrant orange, red, pink, and purple for energetic, creative brands.',
    publishedAt: '2025-02-10',
  },
  {
    _id: '5',
    title: 'Forest Green: A Natural Green Palette',
    slug: { current: 'forest-green' },
    excerpt: 'Deep to light greens for eco brands, wellness, and nature-inspired design.',
    publishedAt: '2025-02-10',
  },
  {
    _id: '6',
    title: 'Purple Dream: Royal to Lavender Palette',
    slug: { current: 'purple-dream' },
    excerpt: 'Royal purple to soft lavender for creative brands and luxury design.',
    publishedAt: '2025-02-10',
  },
  {
    _id: '7',
    title: 'How to Check Color Contrast for Accessibility (WCAG Guide)',
    slug: { current: 'how-to-check-color-contrast-accessibility' },
    excerpt: 'Learn how to check color contrast for accessibility. WCAG AA and AAA ratios, contrast checker tools, and practical tips for readable, compliant text and UI.',
    publishedAt: '2025-03-15',
  },
  {
    _id: '8',
    title: 'Best Neutral Colors to Pair With Your Brand Color',
    slug: { current: 'best-neutral-colors-pair-with-brand' },
    excerpt: 'Neutral colors for branding: grays, off-whites, and warm vs cool neutrals that pair with blue, green, and any brand color. Plus contrast-safe text and background combos.',
    publishedAt: '2025-03-15',
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
