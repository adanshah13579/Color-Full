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
];

export default function BlogPage() {
  return <BlogClient posts={staticPosts} />
}
