'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const tools = [
  {
    id: 'palette-generator',
    name: 'Palette Generator',
    description: 'Generate harmonious color palettes based on color theory. Create perfect combinations for your projects.',
    icon: '🌈',
    href: '/tools/palette-generator',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'contrast-checker',
    name: 'Accessibility Contrast Checker',
    description: 'Check color contrast ratios for accessibility compliance. Ensure your designs meet WCAG guidelines.',
    icon: '🔍',
    href: '/tools/contrast-checker',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function ToolsPage() {
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
            Color Tools
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful tools to help you create perfect color schemes and visualize your designs
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                tool.comingSoon ? 'opacity-75' : 'cursor-pointer'
              }`}
            >
              {tool.comingSoon ? (
                <div className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${tool.gradient} rounded-2xl flex items-center justify-center text-3xl`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                    {tool.description}
                  </p>
                  <div className="text-center">
                    <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-sm font-semibold">
                      Coming Soon
                    </span>
                  </div>
                </div>
              ) : (
                <Link href={tool.href}>
                  <div className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${tool.gradient} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                      {tool.description}
                    </p>
                    <div className="text-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-semibold group-hover:shadow-lg transition-shadow">
                        Try Now
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* SEO Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Color Tools for Designers
          </h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
            <p className="mb-4">
              Our collection of color tools helps designers, developers, and creators work more efficiently with colors. 
              Whether you're designing a website, creating a brand identity, or planning an interior space, these tools 
              provide the functionality you need to make informed color decisions.
            </p>
            <p>
              From visualizing colors on real objects to generating harmonious palettes and checking accessibility compliance, 
              our tools are designed to streamline your workflow and improve your design outcomes.
            </p>
          </div>
        </motion.section>

        {/* Ad Space Placeholder */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 text-center max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Ad Space (728x90)
          </p>
        </div>
      </div>
    </div>
  );
}

