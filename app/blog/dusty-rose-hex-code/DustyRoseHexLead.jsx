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
    <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-b border-rose-200/80 dark:border-rose-800/80 last:border-0">
      <div className="min-w-0 flex-1">
        <div className="text-xs font-medium text-rose-900/70 dark:text-rose-200/80 uppercase tracking-wide">{label}</div>
        <div className={`mt-0.5 text-gray-900 dark:text-rose-50 break-all ${mono ? 'font-mono text-sm sm:text-base' : 'text-sm'}`}>
          {value}
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-lg border border-rose-300/90 dark:border-rose-600 bg-white/80 dark:bg-rose-950/50 px-3 py-1.5 text-sm font-medium text-rose-900 dark:text-rose-100 hover:bg-white dark:hover:bg-rose-900 transition-colors shadow-sm"
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

const DUSTY_ROSE_SHADES = [
  { name: 'Pale dusty', hex: '#F2E0D4' },
  { name: 'Soft blush', hex: '#EDD5C8' },
  { name: 'Light dusty rose', hex: '#E5C4B0' },
  { name: 'Dusty pink', hex: '#DDB89E' },
  { name: 'Dusty rose', hex: '#DCAE96' },
  { name: 'Muted rose', hex: '#C99A82' },
  { name: 'Antique rose', hex: '#B8846E' },
  { name: 'Clay rose', hex: '#A67362' },
  { name: 'Deep dusty', hex: '#8F5E52' },
  { name: 'Dark rose brown', hex: '#6B4540' },
];

const DUSTY_ROSE_RGB = 'RGB(220,174,150)';

const FORMAT_ROWS = [
  { label: 'HEX', value: '#DCAE96' },
  { label: 'RGB', value: 'rgb(220, 174, 150)' },
  { label: 'HSL', value: 'hsl(23, 51%, 73%)' },
  { label: 'CMYK', value: 'C:0 M:21 Y:32 K:14' },
  { label: 'Common name', value: 'dusty rose', mono: false },
];

export function DustyRoseRgbSection() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(DUSTY_ROSE_RGB);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="not-prose space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Dusty Rose RGB Code</h2>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        The <strong className="text-gray-900 dark:text-white">dusty rose rgb</strong> value is{' '}
        <strong className="text-gray-900 dark:text-white">RGB(220, 174, 150)</strong>—red 220, green 174, blue 150. Use the copy button below for handoff to Figma, Android resources, or print specs.
      </p>
      <div
        className="w-full rounded-2xl border-2 border-rose-300/80 dark:border-rose-700 bg-[#DCAE96] shadow-lg ring-4 ring-rose-900/10 p-5 sm:p-6 md:p-7"
        role="region"
        aria-label="Copy dusty rose RGB code"
      >
        <p className="text-white/90 text-sm font-medium uppercase tracking-wider mb-3">Dusty rose RGB — click to copy</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
          <code className="text-white font-mono font-bold text-2xl sm:text-3xl md:text-4xl leading-none tracking-tight">
            {DUSTY_ROSE_RGB}
          </code>
          <button
            type="button"
            onClick={copy}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-[#8F5E52] shadow-lg hover:bg-rose-50 transition-colors min-w-[8.5rem]"
            aria-label={copied ? 'Copied dusty rose RGB' : 'Copy dusty rose RGB code RGB(220,174,150)'}
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
        <p className="mt-3 text-white/80 text-sm font-mono">rgb(220, 174, 150) · hsl(23, 51%, 73%)</p>
      </div>
    </div>
  );
}

export function DustyRoseFormatCodesSection() {
  return (
    <div className="not-prose space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        Dusty Rose Color Code for Different Formats
      </h2>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        Whether you need the <strong className="text-gray-900 dark:text-white">dusty rose rgb code</strong>, hex, HSL, or CMYK, every format for #DCAE96 is listed below—each with its own copy button.
      </p>
      <div className="rounded-2xl border border-rose-200 dark:border-rose-800 bg-rose-50/95 dark:bg-rose-950/40 p-5 sm:p-6 shadow-sm">
        <div className="rounded-xl bg-white/70 dark:bg-rose-900/30 px-4 py-1 border border-rose-100 dark:border-rose-800/80">
          {FORMAT_ROWS.map((row) => (
            <CopyRow key={row.label} label={row.label} value={row.value} mono={row.mono !== false} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function DustyRoseQuickAnswer() {
  return (
    <div
      className="rounded-2xl border border-rose-200 dark:border-rose-800 bg-rose-50/95 dark:bg-rose-950/40 p-5 sm:p-6 shadow-sm"
      role="region"
      aria-label="Dusty rose quick reference"
    >
      <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Dusty Rose Hex Code: #DCAE96</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Muted pink-brown for lifestyle and beauty UI — copy values for Figma, CSS, or tokens.</p>
      <div className="rounded-xl bg-white/70 dark:bg-rose-900/30 px-4 py-1 border border-rose-100 dark:border-rose-800/80">
        <CopyRow label="Hex" value="#DCAE96" />
        <CopyRow label="RGB" value="rgb(220, 174, 150)" />
        <CopyRow label="HSL" value="hsl(23, 51%, 73%)" />
      </div>
    </div>
  );
}

export function DustyRoseShadesTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Dusty rose shades (lightest → darkest)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Ten stops from pale blush to deep rose brown. Copy any hex for backgrounds, borders, or UI tokens.
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
            {DUSTY_ROSE_SHADES.map((row) => (
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
