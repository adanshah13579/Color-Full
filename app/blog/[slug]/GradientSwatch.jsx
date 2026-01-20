'use client';

import { useState } from 'react';

export default function GradientSwatch({ gradientClass, name, gradientCode }) {
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

  return (
    <div className="group relative">
      <div
        className={`w-20 h-20 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform border-2 border-gray-200 dark:border-gray-700 ${gradientClass}`}
      ></div>
      <div className="mt-2 text-center">
        <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">{name}</p>
        <button
          onClick={() => copyToClipboard(gradientCode)}
          className="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          {copied ? 'Copied!' : 'Gradient'}
        </button>
      </div>
    </div>
  );
}

