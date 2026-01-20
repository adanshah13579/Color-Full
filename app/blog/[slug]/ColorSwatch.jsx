'use client';

import { useState } from 'react';

// Color Swatch Component with Copy Functionality
export default function ColorSwatch({ color, name, hexCode }) {
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
        <button
          onClick={() => copyToClipboard(hexCode)}
          className="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          {copied ? 'Copied!' : hexCode}
        </button>
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

