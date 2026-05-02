'use client';

import { useState } from 'react';

const THEMES = {
  ocean: {
    container: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50/95 dark:bg-cyan-950/40',
    inner: 'border-cyan-100 dark:border-cyan-800/80 bg-white/70 dark:bg-cyan-900/30',
    rowBorder: 'border-cyan-200/80 dark:border-cyan-800/80',
    label: 'text-cyan-900/70 dark:text-cyan-200/80',
    copyBtn:
      'border-cyan-300/90 dark:border-cyan-600 bg-white/80 dark:bg-cyan-950/50 text-cyan-900 dark:text-cyan-100 hover:bg-white dark:hover:bg-cyan-900',
  },
  sunset: {
    container: 'border-orange-200 dark:border-orange-900/80 bg-orange-50/95 dark:bg-orange-950/30',
    inner: 'border-orange-100 dark:border-orange-800/80 bg-white/70 dark:bg-orange-900/20',
    rowBorder: 'border-orange-200/80 dark:border-orange-800/60',
    label: 'text-orange-900/75 dark:text-orange-200/85',
    copyBtn:
      'border-orange-300/90 dark:border-orange-700 bg-white/80 dark:bg-orange-950/50 text-orange-900 dark:text-orange-100 hover:bg-white dark:hover:bg-orange-900',
  },
  forest: {
    container: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/95 dark:bg-emerald-950/40',
    inner: 'border-emerald-100 dark:border-emerald-800/80 bg-white/70 dark:bg-emerald-900/30',
    rowBorder: 'border-emerald-200/80 dark:border-emerald-800/80',
    label: 'text-emerald-900/70 dark:text-emerald-200/80',
    copyBtn:
      'border-emerald-300/90 dark:border-emerald-600 bg-white/80 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-100 hover:bg-white dark:hover:bg-emerald-900',
  },
  purple: {
    container: 'border-violet-200 dark:border-violet-800 bg-violet-50/95 dark:bg-violet-950/40',
    inner: 'border-violet-100 dark:border-violet-800/80 bg-white/70 dark:bg-violet-900/30',
    rowBorder: 'border-violet-200/80 dark:border-violet-800/80',
    label: 'text-violet-900/70 dark:text-violet-200/80',
    copyBtn:
      'border-violet-300/90 dark:border-violet-600 bg-white/80 dark:bg-violet-950/50 text-violet-900 dark:text-violet-100 hover:bg-white dark:hover:bg-violet-900',
  },
};

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

function CopyRow({ label, value, themeKey }) {
  const t = THEMES[themeKey];
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
    <div className={`flex flex-wrap items-center justify-between gap-2 py-2 border-b last:border-0 ${t.rowBorder}`}>
      <div className="min-w-0 flex-1">
        <div className={`text-xs font-medium uppercase tracking-wide ${t.label}`}>{label}</div>
        <div className="mt-0.5 text-gray-900 dark:text-gray-100 break-all font-mono text-sm sm:text-base">{value}</div>
      </div>
      <button
        type="button"
        onClick={copy}
        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors shadow-sm ${t.copyBtn}`}
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

export function PaletteQuickAnswer({ theme, headline, subtext, rows, ariaLabel }) {
  const t = THEMES[theme];
  return (
    <div className={`rounded-2xl border p-5 sm:p-6 shadow-sm ${t.container}`} role="region" aria-label={ariaLabel}>
      <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">{headline}</p>
      {subtext ? <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{subtext}</p> : null}
      <div className={`rounded-xl px-4 py-1 border ${t.inner}`}>
        {rows.map((row) => (
          <CopyRow key={row.label} label={row.label} value={row.value} themeKey={theme} />
        ))}
      </div>
    </div>
  );
}

export function PaletteShadesTable({ title, description, shades }) {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
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
            {shades.map((row) => (
              <ShadeTableRow key={row.hex} name={row.name} hex={row.hex} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ShadeTableRow({ name, hex }) {
  const [copied, setCopied] = useState(false);
  const raw = hex.startsWith('#') ? hex : `#${hex}`;
  const display = raw.length === 7 ? `#${raw.slice(1).toUpperCase()}` : raw;

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

export function PalettePairingsSection({ title, intro, pairings }) {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40 p-5 sm:p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">{intro}</p>
      <ul className="space-y-4">
        {pairings.map((p) => (
          <li key={p.title} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{p.body}</p>
            <div className="flex gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 h-9">
              {p.swatches.map((hex) => (
                <div key={hex} className="flex-1 min-w-0" style={{ backgroundColor: hex }} title={hex} aria-hidden />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PaletteUiUsageSection({ title, children }) {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 bg-white dark:bg-gray-800/40">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-3">{children}</div>
    </div>
  );
}
