'use client';

import { useState } from 'react';

// Color Swatch Component with Copy Functionality
export default function ColorSwatch({ color, name, hexCode, showHexCopyIcon = false }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
      : null;
  };

  return (
    <div className="group relative">
      <div
        className="w-20 h-20 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform border-2 border-gray-200 dark:border-gray-700"
        style={{ backgroundColor: hexCode }}
        title={name}
        onClick={() => copyToClipboard(hexCode)}
      />
      <div className="mt-2 text-center">
        <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">{name}</p>
        <div className="flex items-center justify-center gap-1">
          <button
            onClick={() => copyToClipboard(hexCode)}
            className="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            {copied ? 'Copied!' : hexCode}
          </button>
          {showHexCopyIcon && (
            <button
              type="button"
              onClick={() => copyToClipboard(hexCode)}
              className="p-0.5 rounded text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400 shrink-0"
              aria-label={`Copy ${hexCode}`}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          )}
        </div>
        <button
          onClick={() => copyToClipboard(hexToRgb(hexCode))}
          className="block text-xs font-mono text-gray-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mt-1"
        >
          {hexToRgb(hexCode)}
        </button>
      </div>
    </div>
  );
}

