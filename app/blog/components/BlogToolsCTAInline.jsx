'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogToolsCTAInline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4 }}
      className="my-8 flex flex-wrap gap-4 justify-center"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
        <Link
          href="/tools/palette-generator"
          className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all border border-white/20"
        >
          <span className="text-2xl" aria-hidden>🌈</span>
          <span>Try Palette Generator</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
        <Link
          href="/tools/contrast-checker"
          className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all border border-white/20"
        >
          <span className="text-2xl" aria-hidden>✓</span>
          <span>Try Contrast Checker</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );
}
