'use client';

import { useState } from 'react';

const copyIcon = (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

function normalizeHex(hex) {
  const h = hex.trim();
  if (!h) return '#000000';
  return h.startsWith('#') ? h : `#${h}`;
}

export default function CopyableHex({ hex, className = '' }) {
  const normalized = normalizeHex(hex);
  const display = normalized.length === 7 ? normalized.toUpperCase() : normalized;
  const [copied, setCopied] = useState(false);

  const copy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(display);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <span className={`inline-flex items-center gap-1 align-baseline ${className}`}>
      <span className="font-mono tabular-nums">{display}</span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex shrink-0 rounded p-0.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
        aria-label={copied ? 'Copied' : `Copy ${display}`}
      >
        {copied ? (
          <svg className="w-3.5 h-3.5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          copyIcon
        )}
      </button>
    </span>
  );
}
