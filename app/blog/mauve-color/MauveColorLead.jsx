'use client';

import { useState } from 'react';

const copyIcon = (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

function CopyRow({ label, value, mono = true }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-b border-fuchsia-200/80 dark:border-fuchsia-800/80 last:border-0">
      <div className="min-w-0 flex-1">
        <div className="text-xs font-medium text-fuchsia-900/70 dark:text-fuchsia-200/80 uppercase tracking-wide">{label}</div>
        <div className={`mt-0.5 text-gray-900 dark:text-fuchsia-50 break-all ${mono ? 'font-mono text-sm sm:text-base' : 'text-sm'}`}>
          {value}
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-lg border border-fuchsia-300/90 dark:border-fuchsia-600 bg-white/80 dark:bg-fuchsia-950/50 px-3 py-1.5 text-sm font-medium text-fuchsia-900 dark:text-fuchsia-100 hover:bg-white dark:hover:bg-fuchsia-900 transition-colors shadow-sm"
        aria-label={copied ? 'Copied' : `Copy ${label}`}
      >
        {copied ? (
          <>
            <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied
          </>
        ) : (
          <>
            {copyIcon}
            Copy
          </>
        )}
      </button>
    </div>
  );
}

const MAUVE_SHADES = [
  { name: 'Pale mauve', hex: '#F5E6FF' },
  { name: 'Light mauve', hex: '#E8D4FF' },
  { name: 'Soft mauve', hex: '#E0C8FF' },
  { name: 'Mauve', hex: '#E0B0FF' },
  { name: 'Medium mauve', hex: '#D49FE8' },
  { name: 'Dusty mauve', hex: '#C48FD9' },
  { name: 'Deep mauve', hex: '#A875C4' },
  { name: 'Dark mauve', hex: '#8B5A9E' },
];

const FORMAT_ROWS = [
  { label: 'HEX', value: '#E0B0FF' },
  { label: 'RGB', value: 'rgb(224, 176, 255)' },
  { label: 'HSL', value: 'hsl(276, 100%, 85%)' },
  { label: 'CMYK', value: 'C:12 M:31 Y:0 K:0' },
];

export function MauveQuickAnswer() {
  return (
    <div
      className="rounded-2xl border border-fuchsia-200 dark:border-fuchsia-800 bg-fuchsia-50/95 dark:bg-fuchsia-950/40 p-5 sm:p-6 shadow-sm"
      role="region"
      aria-label="Mauve quick reference"
    >
      <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Mauve = #E0B0FF</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Soft pink-purple — copy hex, RGB, or HSL for CSS and design tokens.</p>
      <div className="rounded-xl bg-white/70 dark:bg-fuchsia-900/30 px-4 py-1 border border-fuchsia-100 dark:border-fuchsia-800/80">
        <CopyRow label="Hex" value="#E0B0FF" />
        <CopyRow label="RGB" value="rgb(224, 176, 255)" />
        <CopyRow label="HSL" value="hsl(276, 100%, 85%)" />
      </div>
    </div>
  );
}

export function MauveFormatCodesSection() {
  return (
    <div className="not-prose space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Mauve Hex Code and Color Values</h2>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        Every format for canonical mauve <strong className="text-gray-900 dark:text-white">#E0B0FF</strong>—each with its own copy button for handoff to CSS, Figma, or print specs.
      </p>
      <div className="rounded-2xl border border-fuchsia-200 dark:border-fuchsia-800 bg-fuchsia-50/95 dark:bg-fuchsia-950/40 p-5 sm:p-6 shadow-sm">
        <div className="rounded-xl bg-white/70 dark:bg-fuchsia-900/30 px-4 py-1 border border-fuchsia-100 dark:border-fuchsia-800/80">
          {FORMAT_ROWS.map((row) => (
            <CopyRow key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function MauveShadesTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Shades of Mauve</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Eight stops from pale mauve to deep violet-mauve. Copy any hex for backgrounds, borders, or UI tokens.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Swatch</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Shade</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Hex</th>
            </tr>
          </thead>
          <tbody>
            {MAUVE_SHADES.map((row) => (
              <ShadeRow key={row.hex} name={row.name} hex={row.hex} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ShadeRow({ name, hex }) {
  const [copied, setCopied] = useState(false);
  const display = hex.toUpperCase();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(display);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <tr className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
      <td className="px-4 py-3 sm:px-5 w-20">
        <div
          className="h-10 w-14 sm:w-16 rounded-md border border-gray-200 dark:border-gray-600 shadow-inner shrink-0"
          style={{ backgroundColor: hex }}
          aria-hidden
        />
      </td>
      <td className="px-4 py-3 sm:px-5 font-medium text-gray-900 dark:text-white">{name}</td>
      <td className="px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <code className="font-mono text-gray-800 dark:text-gray-200">{display}</code>
          <button
            type="button"
            onClick={copy}
            className="inline-flex rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
            aria-label={`Copy ${display}`}
          >
            {copied ? (
              <svg className="w-3.5 h-3.5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        </div>
      </td>
    </tr>
  );
}
