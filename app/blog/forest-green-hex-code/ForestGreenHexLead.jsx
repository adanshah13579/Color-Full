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
    <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-b border-emerald-200/80 dark:border-emerald-800/80 last:border-0">
      <div className="min-w-0 flex-1">
        <div className="text-xs font-medium text-emerald-900/70 dark:text-emerald-200/80 uppercase tracking-wide">{label}</div>
        <div className={`mt-0.5 text-gray-900 dark:text-emerald-50 break-all ${mono ? 'font-mono text-sm sm:text-base' : 'text-sm'}`}>
          {value}
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-300/90 dark:border-emerald-600 bg-white/80 dark:bg-emerald-950/50 px-3 py-1.5 text-sm font-medium text-emerald-900 dark:text-emerald-100 hover:bg-white dark:hover:bg-emerald-900 transition-colors shadow-sm"
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

/** Ten named greens, ordered light → dark by standard sRGB luminance */
const FOREST_SHADES = [
  { name: 'Honeydew', hex: '#F0FFF0' },
  { name: 'Mint cream', hex: '#F5FFFA' },
  { name: 'Light green', hex: '#90EE90' },
  { name: 'Medium sea green', hex: '#3CB371' },
  { name: 'Forest green', hex: '#228B22' },
  { name: 'Office green', hex: '#008000' },
  { name: 'Hunter green', hex: '#355E3B' },
  { name: 'Bottle green', hex: '#006A4E' },
  { name: 'Dark green', hex: '#006400' },
  { name: 'Deep forest', hex: '#1A4D1A' },
];

export function ForestGreenQuickAnswer() {
  return (
    <div
      className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/95 dark:bg-emerald-950/40 p-5 sm:p-6 shadow-sm"
      role="region"
      aria-label="Forest green quick reference"
    >
      <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Forest Green Hex Code: #228B22</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">CSS named color <code className="text-xs bg-white/70 dark:bg-emerald-900/50 px-1.5 py-0.5 rounded">forestgreen</code> — copy values for Figma, CSS, or tokens.</p>
      <div className="rounded-xl bg-white/70 dark:bg-emerald-900/30 px-4 py-1 border border-emerald-100 dark:border-emerald-800/80">
        <CopyRow label="Hex" value="#228B22" />
        <CopyRow label="RGB" value="rgb(34, 139, 34)" />
        <CopyRow label="HSL" value="hsl(120, 61%, 34%)" />
      </div>
    </div>
  );
}

export function ForestGreenShadesTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Forest green shades (lightest → darkest)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Ten related greens from pale mint to deep hunter tones. Use copy on each hex for tokens or CSS.
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
            {FOREST_SHADES.map((row) => (
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
