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
    <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-b border-slate-300/80 dark:border-slate-600/80 last:border-0">
      <div className="min-w-0 flex-1">
        <div className="text-xs font-medium text-slate-700/80 dark:text-slate-300/80 uppercase tracking-wide">{label}</div>
        <div className={`mt-0.5 text-gray-900 dark:text-slate-50 break-all ${mono ? 'font-mono text-sm sm:text-base' : 'text-sm'}`}>
          {value}
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/50 px-3 py-1.5 text-sm font-medium text-slate-900 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-700 transition-colors shadow-sm"
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

const CHARCOAL_SHADES = [
  { name: 'Ghost white', hex: '#F8F9FA' },
  { name: 'Light gray', hex: '#E2E8F0' },
  { name: 'Silver gray', hex: '#CBD5E1' },
  { name: 'Cool gray', hex: '#94A3B8' },
  { name: 'Slate', hex: '#64748B' },
  { name: 'Charcoal', hex: '#36454F' },
  { name: 'Dark slate', hex: '#2D3748' },
  { name: 'Gunmetal', hex: '#1F2937' },
  { name: 'Near black', hex: '#111827' },
  { name: 'Deep charcoal', hex: '#0A0E12' },
];

const CHARCOAL_RGB = 'RGB(54,69,79)';

const FORMAT_ROWS = [
  { label: 'HEX', value: '#36454F' },
  { label: 'RGB', value: 'rgb(54, 69, 79)' },
  { label: 'HSL', value: 'hsl(206, 19%, 26%)' },
  { label: 'CMYK', value: 'C:32 M:13 Y:0 K:69' },
  { label: 'Common name', value: 'charcoal gray', mono: false },
];

export function CharcoalRgbSection() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CHARCOAL_RGB);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="not-prose space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Charcoal RGB Code</h2>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        The <strong className="text-gray-900 dark:text-white">charcoal rgb</strong> value is{' '}
        <strong className="text-gray-900 dark:text-white">RGB(54, 69, 79)</strong>—red 54, green 69, blue 79. Use the copy button below for handoff to Figma, Android resources, or dark UI tokens.
      </p>
      <div
        className="w-full rounded-2xl border-2 border-slate-500/80 dark:border-slate-600 bg-[#36454F] shadow-lg ring-4 ring-slate-900/20 p-5 sm:p-6 md:p-7"
        role="region"
        aria-label="Copy charcoal RGB code"
      >
        <p className="text-white/90 text-sm font-medium uppercase tracking-wider mb-3">Charcoal RGB — click to copy</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
          <code className="text-white font-mono font-bold text-2xl sm:text-3xl md:text-4xl leading-none tracking-tight">
            {CHARCOAL_RGB}
          </code>
          <button
            type="button"
            onClick={copy}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-[#36454F] shadow-lg hover:bg-slate-50 transition-colors min-w-[8.5rem]"
            aria-label={copied ? 'Copied charcoal RGB' : 'Copy charcoal RGB code RGB(54,69,79)'}
          >
            {copied ? (
              <>
                <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                {copyIcon}
                Copy
              </>
            )}
          </button>
        </div>
        <p className="mt-3 text-white/80 text-sm font-mono">rgb(54, 69, 79) · hsl(206, 19%, 26%)</p>
      </div>
    </div>
  );
}

export function CharcoalFormatCodesSection() {
  return (
    <div className="not-prose space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        Charcoal Color Code for Different Formats
      </h2>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        Whether you need the <strong className="text-gray-900 dark:text-white">charcoal rgb code</strong>, hex, HSL, or CMYK, every format for #36454F is listed below—each with its own copy button.
      </p>
      <div className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50/95 dark:bg-slate-900/40 p-5 sm:p-6 shadow-sm">
        <div className="rounded-xl bg-white/70 dark:bg-slate-800/30 px-4 py-1 border border-slate-200 dark:border-slate-700/80">
          {FORMAT_ROWS.map((row) => (
            <CopyRow key={row.label} label={row.label} value={row.value} mono={row.mono !== false} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CharcoalQuickAnswer() {
  return (
    <div
      className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50/95 dark:bg-slate-900/40 p-5 sm:p-6 shadow-sm"
      role="region"
      aria-label="Charcoal quick reference"
    >
      <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Charcoal Hex Code: #36454F</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Cool blue-gray for typography, dark UI chrome, and professional layouts — copy values for CSS or tokens.</p>
      <div className="rounded-xl bg-white/70 dark:bg-slate-800/30 px-4 py-1 border border-slate-200 dark:border-slate-700/80">
        <CopyRow label="Hex" value="#36454F" />
        <CopyRow label="RGB" value="rgb(54, 69, 79)" />
        <CopyRow label="HSL" value="hsl(206, 19%, 26%)" />
      </div>
    </div>
  );
}

export function CharcoalShadesTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Charcoal shades (lightest → darkest)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Ten stops from airy tints to near-black charcoal. Copy any hex for surfaces, borders, or dark-mode tokens.
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
            {CHARCOAL_SHADES.map((row) => (
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
