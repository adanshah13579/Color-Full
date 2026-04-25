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
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Build your palette
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5">
          Use our free tools to create and test your color palette.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/tools/palette-generator"
            className="block rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Color Palette Generator
          </Link>
          <Link
            href="/tools/contrast-checker"
            className="block rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:border-emerald-400 dark:hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
          >
            WCAG Contrast Checker
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
