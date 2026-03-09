import BlogClient from './BlogClient'

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
];

export default function BlogPage() {
  return <BlogClient posts={staticPosts} />
}
