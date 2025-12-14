'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Dummy blog posts data
const blogPosts = [
  {
    id: 1,
    title: '10 Color Trends for 2024: What Designers Need to Know',
    description: 'Discover the most popular color palettes and trends shaping design in 2024. From vibrant neons to calming pastels, explore what\'s hot this year.',
    image: '/api/placeholder/600/400',
    category: 'Trends',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Color Scheme for Your Project',
    description: 'A comprehensive guide to selecting colors that work harmoniously together. Learn about color theory, complementary colors, and creating balanced palettes.',
    image: '/api/placeholder/600/400',
    category: 'Tutorial',
    date: '2024-01-10',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Color Psychology in Design: Understanding User Emotions',
    description: 'Understanding how colors affect emotions and user behavior in design. Learn which colors to use for different purposes and target audiences.',
    image: '/api/placeholder/600/400',
    category: 'Psychology',
    date: '2024-01-05',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Creating Accessible Color Combinations',
    description: 'Learn how to ensure your color choices are accessible to all users, including those with color vision deficiencies. WCAG guidelines and best practices.',
    image: '/api/placeholder/600/400',
    category: 'Accessibility',
    date: '2024-01-01',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Monochromatic vs. Complementary: Color Scheme Basics',
    description: 'Explore different types of color schemes and when to use each. From monochromatic to triadic, understand the fundamentals of color harmony.',
    image: '/api/placeholder/600/400',
    category: 'Basics',
    date: '2023-12-28',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'The Science Behind Color Perception',
    description: 'Dive into the fascinating science of how humans perceive color. Learn about the biology and physics behind color vision.',
    image: '/api/placeholder/600/400',
    category: 'Science',
    date: '2023-12-25',
    readTime: '9 min read',
  },
  {
    id: 7,
    title: 'Color Tools Every Designer Should Know',
    description: 'A curated list of the best color tools and resources for designers. From palette generators to contrast checkers, find your next favorite tool.',
    image: '/api/placeholder/600/400',
    category: 'Tools',
    date: '2023-12-20',
    readTime: '6 min read',
  },
  {
    id: 8,
    title: 'Brand Colors: How to Choose and Implement',
    description: 'Learn how successful brands choose their colors and how to implement a consistent color strategy across all touchpoints.',
    image: '/api/placeholder/600/400',
    category: 'Branding',
    date: '2023-12-15',
    readTime: '7 min read',
  },
  {
    id: 9,
    title: 'Seasonal Color Palettes: Spring, Summer, Fall, Winter',
    description: 'Explore color palettes inspired by the four seasons. Discover how nature influences color trends throughout the year.',
    image: '/api/placeholder/600/400',
    category: 'Trends',
    date: '2023-12-10',
    readTime: '5 min read',
  },
];

const categories = ['All', 'Trends', 'Tutorial', 'Psychology', 'Accessibility', 'Basics', 'Science', 'Tools', 'Branding'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Color Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Discover the latest color trends, design tips, and expert insights
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 relative overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-semibold text-gray-900 dark:text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:underline">
                    Read More →
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2"
        >
          <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
            1
          </button>
          <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            2
          </button>
          <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            3
          </button>
          <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Next
          </button>
        </motion.div>

        {/* Ad Space Placeholder */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Ad Space (728x90)
          </p>
        </div>
      </div>
    </div>
  );
}

