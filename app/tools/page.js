'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PILLAR_GUIDES } from '../../lib/site-pillar-links';

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
  {
    id: 'color-mixer',
    name: 'Color Mixing Simulator',
    description: 'Mix two colors using real paint-style RYB logic. See mixed hex, RGB values, and closest color names instantly.',
    icon: '🎨',
    href: '/tools/color-mixer',
    gradient: 'from-fuchsia-500 to-orange-500',
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
            Color Tools for Designers &amp; Developers
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A focused toolkit for building accessible, on-brand color systems&mdash;from generating palettes
            to checking WCAG contrast for real-world interfaces.
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
            Professional color tools for modern design workflows
          </h2>
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
            <p className="mb-4">
              The Theme &amp; Color tools are built for product designers, front-end developers, and brand teams who
              need reliable, repeatable color decisions&mdash;not guesswork. Instead of juggling screenshots and
              spreadsheets, you can generate palettes, document decisions, and check accessibility in one place.
            </p>
            <h3>Color palette generator</h3>
            <p className="mb-3">
              Use the{' '}
              <Link href="/tools/palette-generator" className="text-purple-600 dark:text-purple-400 font-semibold">
                color palette generator
              </Link>{' '}
              to build harmonious palettes for websites, design systems, or brand identities. Start from a single base
              color and explore complementary, analogous, or triadic schemes with hex values ready to paste into Figma,
              CSS, or your component library.
            </p>
            <h3>Accessibility contrast checker</h3>
            <p className="mb-3">
              The{' '}
              <Link href="/tools/contrast-checker" className="text-purple-600 dark:text-purple-400 font-semibold">
                accessibility contrast checker
              </Link>{' '}
              helps you validate text and background pairs against WCAG contrast ratios. Quickly see which combinations
              pass AA or AAA, then adjust your palette before development so your interface ships accessible by default.
            </p>
            <h3>Color mixing simulator</h3>
            <p className="mb-3">
              Try the{' '}
              <Link href="/tools/color-mixer" className="text-purple-600 dark:text-purple-400 font-semibold">
                color mixing simulator
              </Link>{' '}
              to see what colors make when mixed like paint, not digital light. It uses an RYB color model so combinations
              like blue + yellow resolve to realistic green-style mixes.
            </p>
            <p>
              Together, these free online color tools give you a practical way to design, test, and maintain a
              professional color system across marketing sites, apps, and design systems&mdash;without sacrificing
              performance, legibility, or brand consistency.
            </p>
            <h3 className="mt-8 mb-3 text-gray-900 dark:text-white">Related guides</h3>
            <p className="mb-3">
              Deep dives that pair with these tools:{' '}
              {PILLAR_GUIDES.map(({ href, label }, i) => (
                <span key={href}>
                  {i > 0 ? ', ' : ''}
                  <Link href={href} className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                    {label}
                  </Link>
                </span>
              ))}
              . See the full list on the{' '}
              <Link href="/blog" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                color blog
              </Link>
              .
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

