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

const FORMAT_ROWS = [
  { label: 'RGB', value: 'RGB(34, 139, 34)' },
  { label: 'RGB (CSS)', value: 'rgb(34, 139, 34)' },
  { label: 'HEX', value: '#228B22' },
  { label: 'HSL', value: 'hsl(120, 61%, 34%)' },
  { label: 'CMYK', value: 'C:76 M:0 Y:76 K:45' },
];

const FOREST_RGB_SHADES = [
  { name: 'Light green', hex: '#90EE90', rgb: 'rgb(144, 238, 144)' },
  { name: 'Medium sea green', hex: '#3CB371', rgb: 'rgb(60, 179, 113)' },
  { name: 'Forest green', hex: '#228B22', rgb: 'rgb(34, 139, 34)' },
  { name: 'Office green', hex: '#008000', rgb: 'rgb(0, 128, 0)' },
  { name: 'Hunter green', hex: '#355E3B', rgb: 'rgb(53, 94, 59)' },
  { name: 'Dark green', hex: '#006400', rgb: 'rgb(0, 100, 0)' },
  { name: 'Bottle green', hex: '#006A4E', rgb: 'rgb(0, 106, 78)' },
  { name: 'Deep forest', hex: '#1A4D1A', rgb: 'rgb(26, 77, 26)' },
];

const CONVERSION_ROWS = [
  { format: 'RGB', value: 'RGB(34, 139, 34)', notes: 'Red 34 · Green 139 · Blue 34' },
  { format: 'Hex', value: '#228B22', notes: 'Web and CSS standard' },
  { format: 'HSL', value: 'hsl(120, 61%, 34%)', notes: 'Hue 120° yellow-green' },
  { format: 'CMYK', value: 'C:76 M:0 Y:76 K:45', notes: 'Coated print approximation' },
  { format: 'CSS name', value: 'forestgreen', notes: 'Browser keyword' },
];

export function ForestGreenRgbFormatBox() {
  return (
    <div
      className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/95 dark:bg-emerald-950/40 p-5 sm:p-6 shadow-sm"
      role="region"
      aria-label="Forest green RGB all formats"
    >
      <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Forest Green — All Formats</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Copy RGB, hex, HSL, or CMYK for handoff.</p>
      <div className="rounded-xl bg-white/70 dark:bg-emerald-900/30 px-4 py-1 border border-emerald-100 dark:border-emerald-800/80">
        {FORMAT_ROWS.map((row) => (
          <CopyRow key={row.label} label={row.label} value={row.value} />
        ))}
      </div>
    </div>
  );
}

export function ForestGreenConversionTable() {
  return (
    <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-900/80 text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            <th className="px-4 py-3 font-semibold">Format</th>
            <th className="px-4 py-3 font-semibold">Value</th>
            <th className="px-4 py-3 font-semibold hidden sm:table-cell">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {CONVERSION_ROWS.map((row) => (
            <tr key={row.format} className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{row.format}</td>
              <td className="px-4 py-3 font-mono text-gray-800 dark:text-gray-200">{row.value}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 hidden sm:table-cell">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ForestGreenRgbShadesTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Forest Green RGB Shades</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Eight greens with both RGB and hex—copy either format for tokens or CSS variables.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Swatch</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Shade</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">RGB</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Hex</th>
            </tr>
          </thead>
          <tbody>
            {FOREST_RGB_SHADES.map((row) => (
              <RgbShadeRow key={row.hex} name={row.name} hex={row.hex} rgb={row.rgb} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RgbShadeRow({ name, hex, rgb }) {
  const [copiedHex, setCopiedHex] = useState(false);
  const [copiedRgb, setCopiedRgb] = useState(false);
  const displayHex = hex.toUpperCase();

  const copyHex = async () => {
    try {
      await navigator.clipboard.writeText(displayHex);
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };

  const copyRgb = async () => {
    try {
      await navigator.clipboard.writeText(rgb);
      setCopiedRgb(true);
      setTimeout(() => setCopiedRgb(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };

  const checkIcon = (
    <svg className="w-3.5 h-3.5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const copySvg = (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );

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
          <code className="font-mono text-gray-800 dark:text-gray-200">{rgb}</code>
          <button type="button" onClick={copyRgb} className="inline-flex rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors" aria-label={`Copy ${rgb}`}>
            {copiedRgb ? checkIcon : copySvg}
          </button>
        </div>
      </td>
      <td className="px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <code className="font-mono text-gray-800 dark:text-gray-200">{displayHex}</code>
          <button type="button" onClick={copyHex} className="inline-flex rounded p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors" aria-label={`Copy ${displayHex}`}>
            {copiedHex ? checkIcon : copySvg}
          </button>
        </div>
      </td>
    </tr>
  );
}
