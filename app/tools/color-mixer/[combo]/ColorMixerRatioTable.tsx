'use client';

import { useState } from 'react';
import type { ComboRatioRow } from './comboSeoContent';

const copyIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

export default function ColorMixerRatioTable({ rows }: { rows: ComboRatioRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            <th className="px-3 py-2.5 font-semibold">Mix</th>
            <th className="px-3 py-2.5 font-semibold">Name</th>
            <th className="px-3 py-2.5 font-semibold w-16">Swatch</th>
            <th className="px-3 py-2.5 font-semibold">Hex</th>
            <th className="px-3 py-2.5 font-semibold w-24">Copy</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <RatioRow key={row.hex + row.ratio} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RatioRow({ row }: { row: ComboRatioRow }) {
  const [copied, setCopied] = useState(false);
  const display = row.hex.toUpperCase();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(display);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <tr className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
      <td className="px-3 py-3 text-gray-800 dark:text-gray-200 align-middle">{row.ratio}</td>
      <td className="px-3 py-3 font-medium text-gray-900 dark:text-white align-middle">{row.label}</td>
      <td className="px-3 py-2 align-middle">
        <div
          className="h-9 w-12 rounded-md border border-gray-200 dark:border-gray-600 shadow-inner"
          style={{ backgroundColor: row.hex }}
          aria-hidden
        />
      </td>
      <td className="px-3 py-3 font-mono text-gray-800 dark:text-gray-200 align-middle">{display}</td>
      <td className="px-3 py-2 align-middle">
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2.5 py-1.5 text-xs font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
          aria-label={`Copy ${display}`}
        >
          {copied ? (
            <span className="text-green-600 dark:text-green-400">Copied</span>
          ) : (
            <>
              {copyIcon}
              Copy
            </>
          )}
        </button>
      </td>
    </tr>
  );
}
