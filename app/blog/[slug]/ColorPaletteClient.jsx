'use client';

import { useState, useEffect } from 'react';

export default function ColorPaletteClient({ colors, designTitle, className = '' }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

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
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 ${className}`}
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-base font-bold text-gray-900 dark:text-white mb-1">
          {designTitle || 'Color Palette'}
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
          Click to copy color codes
        </p>

        {/* Mini swatch strip */}
        <div className="flex gap-1 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          {colors.map((color, i) => (
            <div
              key={i}
              className="flex-1 h-4 cursor-pointer hover:opacity-80 transition-opacity"
              style={{ backgroundColor: color.hexCode }}
              title={`${color.colorName || `Color ${i + 1}`} (${color.hexCode})`}
              onClick={() => copyToClipboard(color.hexCode, `swatch-${i}`)}
            />
          ))}
        </div>
      </div>

      {/* Compact Color List */}
      <div className="p-4">
        <div className="space-y-2">
          {colors.map((color, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 p-2 rounded-lg transition-colors cursor-pointer"
              style={{
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                if (!document.documentElement.classList.contains('dark')) {
                  e.currentTarget.style.backgroundColor = '#f9fafb'; // gray-50 - white-related
                } else {
                  e.currentTarget.style.backgroundColor = '#374151'; // gray-700
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              onClick={() => copyToClipboard(color.hexCode, `color-${i}`)}
            >
              {/* Small Color Swatch */}
              <div
                className="w-8 h-8 rounded-md border border-gray-200 dark:border-gray-600 shadow-sm flex-shrink-0"
                style={{ backgroundColor: color.hexCode }}
              />
              
              {/* Color Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                      {color.colorName || `Color ${i + 1}`}
                    </p>
                    <code className="text-xs font-mono text-gray-600 dark:text-gray-400">
                      {color.hexCode}
                    </code>
                  </div>
                  {copiedIndex === `color-${i}` && (
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Copied!</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Copy All Button */}
        <button
          onClick={copyAllColors}
          className="w-full mt-4 px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-xs shadow-sm hover:shadow-md"
          style={{
            backgroundColor: isDark ? '#f3f4f6' : '#000000',
            color: isDark ? '#111827' : '#ffffff'
          }}
          onMouseEnter={(e) => {
            if (isDark) {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#111827';
            } else {
              e.currentTarget.style.backgroundColor = '#111827'; // gray-900
              e.currentTarget.style.color = '#ffffff';
            }
          }}
          onMouseLeave={(e) => {
            if (isDark) {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.color = '#111827';
            } else {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.color = '#ffffff';
            }
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {copiedIndex === 'all' ? 'Copied!' : 'Copy All'}
        </button>
      </div>
    </div>
  );
}

