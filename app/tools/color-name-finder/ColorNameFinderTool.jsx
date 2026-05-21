'use client';

import { useMemo, useRef, useState } from 'react';
import { COLOR_NAME_DATABASE } from '../../../lib/colorNameDatabase';
import { getColorResult } from '../../../lib/colorNameFinderUtils';

function CopyButton({ value, label }) {
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
      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm shrink-0"
      aria-label={copied ? 'Copied' : `Copy ${label}`}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</div>
        <div className="mt-0.5 font-mono text-sm sm:text-base text-gray-900 dark:text-white break-all">{value}</div>
      </div>
      <CopyButton value={value} label={label} />
    </div>
  );
}

export default function ColorNameFinderTool() {
  const [hexInput, setHexInput] = useState('228B22');
  const colorInputRef = useRef(null);

  const result = useMemo(() => getColorResult(hexInput, COLOR_NAME_DATABASE), [hexInput]);

  const previewHex = result?.hex ?? '#228B22';
  const pickerValue = previewHex.startsWith('#') ? previewHex : `#${previewHex}`;

  const handlePickerChange = (e) => {
    const v = e.target.value.replace('#', '').toUpperCase();
    setHexInput(v);
  };

  const openPicker = () => colorInputRef.current?.click();

  const openEyedropper = async () => {
    if (!window.EyeDropper) {
      openPicker();
      return;
    }
    try {
      const dropper = new window.EyeDropper();
      const { sRGBHex } = await dropper.open();
      setHexInput(sRGBHex.replace('#', '').toUpperCase());
    } catch {
      /* user cancelled */
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        <label htmlFor="hex-input" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Hex color code
        </label>
        <div className="flex flex-wrap items-stretch gap-3 mb-6">
          <div className="flex flex-1 min-w-[12rem] items-center rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 overflow-hidden focus-within:border-purple-500 dark:focus-within:border-purple-400">
            <span className="pl-4 pr-1 text-xl font-mono font-bold text-gray-500 dark:text-gray-400">#</span>
            <input
              id="hex-input"
              type="text"
              value={hexInput}
              onChange={(e) => setHexInput(e.target.value.replace(/[^a-fA-F0-9]/g, '').slice(0, 6))}
              placeholder="228B22"
              className="flex-1 py-3 pr-4 text-xl font-mono font-semibold text-gray-900 dark:text-white bg-transparent outline-none uppercase"
              spellCheck={false}
              autoComplete="off"
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
            onClick={openPicker}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 dark:border-gray-600 px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            Pick color
          </button>
          <button
            type="button"
            onClick={openEyedropper}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/50 px-4 py-3 text-sm font-semibold text-purple-900 dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
            title="Sample a color from your screen (Chrome/Edge)"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M4.136 4.136l-1.72-1.72M2.239 7.188l2.897.777M4.136 19.864l-1.72 1.72M7.188 21.761l.777-2.897M19.864 19.864l1.72 1.72M21.761 16.812l-2.897-.777"
              />
            </svg>
            Eyedropper
          </button>
        </div>

        <div
          className="w-full rounded-2xl border-2 border-gray-200 dark:border-gray-600 shadow-inner transition-colors duration-150"
          style={{ backgroundColor: previewHex, minHeight: 200 }}
          role="img"
          aria-label={`Color preview ${previewHex}`}
        />
      </div>

      {result ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Closest color name</h2>
          <p className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-300 mb-6">
            {result.closest?.name ?? 'Unknown'}
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/50 px-4 py-1">
            <ResultRow label="Hex" value={result.hex} />
            <ResultRow label="RGB" value={result.rgbFormatted} />
            <ResultRow label="HSL" value={result.hslFormatted} />
            <ResultRow label="CMYK" value={result.cmykFormatted} />
          </div>

          {result.similar.length > 0 ? (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Similar named colors</h3>
              <div className="flex flex-wrap gap-3">
                {result.similar.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setHexInput(c.hex.replace('#', ''))}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-gray-200 dark:border-gray-600 p-2 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all min-w-[5.5rem]"
                    title={`${c.name} ${c.hex}`}
                  >
                    <div
                      className="w-14 h-14 rounded-lg border border-gray-300/80 dark:border-gray-600 shadow-inner"
                      style={{ backgroundColor: c.hex }}
                      aria-hidden
                    />
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200 text-center leading-tight px-1">
                      {c.name}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">{c.hex}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">Enter a valid 3- or 6-digit hex code to see results.</p>
      )}
    </div>
  );
}
