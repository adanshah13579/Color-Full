'use client';

import { useMemo, useRef, useState } from 'react';
import {
  formatCssVariables,
  formatTailwindConfig,
  generateTintShadeScale,
} from '../../../lib/tintShadeUtils';
const DEFAULT_HEX = '228B22';

function CopyButton({ value, label, className = '' }) {
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
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${className}`}
      aria-label={copied ? 'Copied' : `Copy ${label}`}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function ScaleRow({ row }) {
  return (
    <li className="flex flex-wrap items-center gap-3 py-2.5 border-b border-gray-100 dark:border-gray-700/80 last:border-0">
      <div
        className="w-12 h-12 rounded-lg border border-gray-300/80 dark:border-gray-600 shadow-inner shrink-0"
        style={{ backgroundColor: row.hex }}
        aria-hidden
      />
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400">{row.label}</div>
        <code className="text-sm font-mono text-gray-900 dark:text-white">{row.hex}</code>
      </div>
      <CopyButton value={row.hex} label={row.hex} />
    </li>
  );
}

export default function TintShadeGeneratorTool() {
  const [hexInput, setHexInput] = useState(DEFAULT_HEX);
  const [bulkCopied, setBulkCopied] = useState(null);
  const colorInputRef = useRef(null);

  const scale = useMemo(() => generateTintShadeScale(hexInput), [hexInput]);
  const previewHex = scale?.baseHex ?? `#${DEFAULT_HEX}`;
  const pickerValue = previewHex;

  const handlePickerChange = (e) => {
    setHexInput(e.target.value.replace('#', '').toUpperCase());
  };

  const copyBulk = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setBulkCopied(key);
      setTimeout(() => setBulkCopied(null), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        <label htmlFor="base-hex" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Base color
        </label>
        <div className="flex flex-wrap items-stretch gap-3 mb-6">
          <div className="flex flex-1 min-w-[12rem] items-center rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 overflow-hidden focus-within:border-emerald-500 dark:focus-within:border-emerald-400">
            <span className="pl-4 pr-1 text-xl font-mono font-bold text-gray-500 dark:text-gray-400">#</span>
            <input
              id="base-hex"
              type="text"
              value={hexInput}
              onChange={(e) => setHexInput(e.target.value.replace(/[^a-fA-F0-9]/g, '').slice(0, 6))}
              placeholder={DEFAULT_HEX}
              className="flex-1 py-3 pr-4 text-xl font-mono font-semibold text-gray-900 dark:text-white bg-transparent outline-none uppercase"
              spellCheck={false}
            />
          </div>
          <input
            ref={colorInputRef}
            type="color"
            value={pickerValue}
            onChange={handlePickerChange}
            className="sr-only"
            tabIndex={-1}
            aria-hidden
          />
          <button
            type="button"
            onClick={() => colorInputRef.current?.click()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 dark:border-gray-600 px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Pick color
          </button>
        </div>
        <div
          className="w-full rounded-2xl border-2 border-gray-200 dark:border-gray-600 shadow-inner"
          style={{ backgroundColor: previewHex, minHeight: 200 }}
          role="img"
          aria-label={`Base color preview ${previewHex}`}
        />
      </div>

      {scale ? (
        <>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => copyBulk(formatCssVariables(scale), 'css')}
              className="inline-flex items-center rounded-xl bg-gray-900 dark:bg-gray-100 px-5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
            >
              {bulkCopied === 'css' ? 'Copied CSS variables' : 'Copy all as CSS variables'}
            </button>
            <button
              type="button"
              onClick={() => copyBulk(formatTailwindConfig(scale), 'tailwind')}
              className="inline-flex items-center rounded-xl border-2 border-emerald-600 dark:border-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors"
            >
              {bulkCopied === 'tailwind' ? 'Copied Tailwind config' : 'Copy as Tailwind config'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 sm:p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Tints</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Base color mixed with white (lighter)</p>
              <ul className="not-prose">
                {scale.tints.map((row) => (
                  <ScaleRow key={row.percent} row={row} />
                ))}
              </ul>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 sm:p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Shades</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Base color mixed with black (darker)</p>
              <ul className="not-prose">
                {scale.shades.map((row) => (
                  <ScaleRow key={row.percent} row={row} />
                ))}
              </ul>
            </section>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">Enter a valid hex code to generate tints and shades.</p>
      )}
    </div>
  );
}
