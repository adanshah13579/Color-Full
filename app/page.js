'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Dummy data for featured palettes
const featuredPalettes = [
  { id: 1, name: 'Ocean Breeze', colors: ['#0EA5E9', '#06B6D4', '#14B8A6', '#10B981', '#34D399'] },
  { id: 2, name: 'Sunset Vibes', colors: ['#F59E0B', '#F97316', '#EF4444', '#EC4899', '#A855F7'] },
  { id: 3, name: 'Forest Green', colors: ['#065F46', '#047857', '#059669', '#10B981', '#34D399'] },
  { id: 4, name: 'Purple Dream', colors: ['#581C87', '#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD'] },
];

// Dummy blog posts
const latestPosts = [
  {
    id: 1,
    title: '10 Color Trends for 2024',
    description: 'Discover the most popular color palettes and trends shaping design in 2024.',
    image: '/api/placeholder/400/250',
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Color Scheme',
    description: 'A comprehensive guide to selecting colors that work harmoniously together.',
    image: '/api/placeholder/400/250',
  },
  {
    id: 3,
    title: 'Color Psychology in Design',
    description: 'Understanding how colors affect emotions and user behavior in design.',
    image: '/api/placeholder/400/250',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Design Perfect Color Schemes Instantly
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Explore palettes, templates, and preview colors on real objects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Explore Tools
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-purple-600 dark:hover:border-purple-400 hover:scale-105 transition-all duration-200"
              >
                Browse Color Palettes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Color Palettes Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
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
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
                >
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
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {palette.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tool Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Featured Tool
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Professional tools to generate palettes and ensure accessibility compliance
            </p>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Palette Generator
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    Generate harmonious color palettes using color theory principles.
                  </p>
                  <Link
                    href="/tools/palette-generator"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    Try Now
                  </Link>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Contrast Checker
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    Check color contrast ratios for WCAG accessibility compliance.
                  </p>
                  <Link
                    href="/tools/contrast-checker"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    Try Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
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
                <p className="text-gray-600 dark:text-gray-400">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.description}
                    </p>
                    <Link
                      href="/blog"
                      className="text-purple-600 dark:text-purple-400 hover:underline font-semibold inline-flex items-center"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.article>
              ))}
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

      {/* Ad Space Placeholder */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Ad Space (728x90)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
