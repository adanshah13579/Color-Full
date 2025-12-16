'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogClient({ posts }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Color Design Blog
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-4">
              Expert insights on color theory, design trends, and accessibility
            </p>
            <p className="text-lg text-purple-200">
              Discover the latest color palettes, design tips, and professional guidance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <svg className="w-24 h-24 mx-auto mb-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  No Posts Yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Create your first blog post in Sanity Studio to get started.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Featured Post (First Post) */}
              {posts.length > 0 && posts[0] && (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-16"
                >
                  <Link href={`/blog/${posts[0].slug.current}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                      <div className="md:flex">
                        {/* Featured Image/Color Palette */}
                        <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 relative">
                          {posts[0].colorPalette && posts[0].colorPalette.length > 0 ? (
                            <div className="absolute inset-0 flex items-center justify-center gap-1 p-6">
                              {posts[0].colorPalette.map((color, i) => (
                                <div
                                  key={i}
                                  className="flex-1 h-full rounded-lg shadow-2xl border-2 border-white/30 transition-transform group-hover:scale-105"
                                  style={{ backgroundColor: color.hexCode }}
                                  title={`${color.colorName || 'Color'} (${color.hexCode})`}
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500" />
                          )}
                          <div className="absolute top-6 left-6">
                            <span className="px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full text-sm font-bold text-gray-900 dark:text-white shadow-lg">
                              Featured
                            </span>
                          </div>
                        </div>
                        
                        {/* Featured Content */}
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                          <div className="mb-4">
                            {posts[0].publishedAt && (
                              <time className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {new Date(posts[0].publishedAt).toLocaleDateString('en-US', {
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric',
                                })}
                              </time>
                            )}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {posts[0].title}
                          </h2>
                          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                            {posts[0].excerpt}
                          </p>
                          <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-3 transition-all">
                            <span>Read Article</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              )}

              {/* Other Posts Grid */}
              {posts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.slice(1).map((post, index) => (
                    <motion.article
                      key={post._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index + 1) * 0.1 }}
                      className="group"
                    >
                      <Link href={`/blog/${post.slug.current}`}>
                        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                          {/* Color Palette Preview */}
                          <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                            {post.colorPalette && post.colorPalette.length > 0 ? (
                              <div className="absolute inset-0 flex items-center justify-center gap-1 p-3">
                                {post.colorPalette.map((color, i) => (
                                  <div
                                    key={i}
                                    className="flex-1 h-full rounded-md shadow-lg border border-white/20 transition-transform group-hover:scale-105"
                                    style={{ backgroundColor: color.hexCode }}
                                    title={`${color.colorName || 'Color'} (${color.hexCode})`}
                                  />
                                ))}
                              </div>
                            ) : (
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400" />
                            )}
                            {post.designTitle && (
                              <div className="absolute bottom-3 left-3 right-3">
                                <span className="px-3 py-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-gray-900 dark:text-white shadow-md">
                                  {post.designTitle}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Post Content */}
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="mb-3">
                              {post.publishedAt && (
                                <time className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                  })}
                                </time>
                              )}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold text-sm group-hover:gap-2 transition-all">
                              <span>Read More</span>
                              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Newsletter/CTA Section */}
          {posts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
                Get the latest color design tips and trends delivered to your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          )}

          {/* Ad Space Placeholder */}
          {posts.length > 0 && (
            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Ad Space (728x90)
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
