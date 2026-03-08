'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogToolsCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="my-12"
    >
      <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Try our free tools
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.04, y: -6 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Link
            href="/tools/palette-generator"
            className="block relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 dark:from-blue-600 dark:via-cyan-600 dark:to-blue-700 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-300 border border-white/20"
          >
            <motion.span
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
              style={{ width: '50%' }}
            />
            <div className="relative flex flex-col items-center text-center">
              <span className="text-5xl mb-3" aria-hidden>🌈</span>
              <h4 className="text-xl font-bold mb-2">Palette Generator</h4>
              <p className="text-blue-100 text-sm mb-4 max-w-xs">
                Create harmonious color palettes from one base color. Free, no sign-up.
              </p>
              <span className="inline-flex items-center font-semibold text-sm">
                Open tool
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.04, y: -6 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Link
            href="/tools/contrast-checker"
            className="block relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 dark:from-emerald-600 dark:via-green-600 dark:to-teal-700 text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-shadow duration-300 border border-white/20"
          >
            <motion.span
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
              style={{ width: '50%' }}
            />
            <div className="relative flex flex-col items-center text-center">
              <span className="text-5xl mb-3" aria-hidden>✓</span>
              <h4 className="text-xl font-bold mb-2">Contrast Checker</h4>
              <p className="text-emerald-100 text-sm mb-4 max-w-xs">
                Test text & background contrast for WCAG AA and AAA. Instant results.
              </p>
              <span className="inline-flex items-center font-semibold text-sm">
                Open tool
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
        Click above to use our tools — no account required
      </p>
    </motion.section>
  );
}
