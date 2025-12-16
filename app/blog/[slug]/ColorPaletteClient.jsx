'use client';

import { useState } from 'react';

export default function ColorPaletteClient({ colors, designTitle, className = '' }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const copyAllColors = async () => {
    const allColors = colors.map(c => c.hexCode).join(', ');
    try {
      await navigator.clipboard.writeText(allColors);
      setCopiedIndex('all');
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!colors || colors.length === 0) return null;

  return (
    <div
      className={`mb-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 ${className}`}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {designTitle || 'Color Palette'}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Full color codes and practical usage notes for this palette.
        </p>

        {/* Mini swatch strip */}
        <div className="mt-4 flex gap-1.5 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          {colors.map((color, i) => (
            <div
              key={i}
              className="flex-1 h-3"
              style={{ backgroundColor: color.hexCode }}
              title={`${color.colorName || `Color ${i + 1}`} (${color.hexCode})`}
            />
          ))}
        </div>
      </div>

      {/* Color Cards Grid */}
      <div className="p-6 md:p-7 lg:p-8">
        <div className="grid grid-cols-1 gap-5">
          {colors.map((color, i) => (
            <div
              key={i}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
            >
              {/* Color Swatch - Large */}
              <div className="mb-4">
                <div
                  className="w-full h-24 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md group-hover:scale-[1.02] transition-transform"
                  style={{ backgroundColor: color.hexCode }}
                />
              </div>

              {/* Color Information */}
              <div className="space-y-4">
                {/* Color Name */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Color
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {color.colorName || `Color ${i + 1}`}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(color.hexCode, `hex-badge-${i}`)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-[11px] font-semibold text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors"
                    >
                      <span>{copiedIndex === `hex-badge-${i}` ? 'HEX Copied' : 'Copy HEX'}</span>
                    </button>
                  </div>

                  {/* Codes row */}
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="flex items-center justify-between gap-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2">
                      <span className="font-semibold text-gray-500 dark:text-gray-400">HEX</span>
                      <code className="font-mono text-sm text-gray-900 dark:text-white">
                        {color.hexCode}
                      </code>
                    </div>

                    {color.rgbCode && (
                      <div className="flex items-center justify-between gap-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2">
                        <span className="font-semibold text-gray-500 dark:text-gray-400">RGB</span>
                        <code className="font-mono text-sm text-gray-900 dark:text-white">
                          {color.rgbCode}
                        </code>
                      </div>
                    )}
                  </div>

                  {/* Usage Note */}
                  {color.usageNote && (
                    <div className="mt-2 rounded-md border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-3 py-2">
                      <p className="text-[11px] font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-1">
                        Usage
                      </p>
                      <p className="text-xs text-blue-900 dark:text-blue-100 leading-relaxed">
                        {color.usageNote}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Copy All Colors Button */}
        <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={copyAllColors}
            className="w-full px-4 py-3.5 bg-gray-900 dark:bg-gray-100 hover:bg-black dark:hover:bg-white text-white dark:text-gray-900 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copiedIndex === 'all' ? 'All Colors Copied!' : 'Copy All Color Codes'}
          </button>
        </div>
      </div>
    </div>
  );
}

