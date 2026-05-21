'use client';

import { useMemo, useState } from 'react';
import { COLOR_NAME_DATABASE } from '../../../lib/colorNameDatabase';
import { getColorResult, hexToRgb } from '../../../lib/colorNameFinderUtils';
import ToolHexInput from '../components/ToolHexInput';

function relativeLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
    const n = val / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function readableTextOnColor(hex) {
  return relativeLuminance(hex) > 0.45 ? '#111827' : '#ffffff';
}

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

  const result = useMemo(() => getColorResult(hexInput, COLOR_NAME_DATABASE), [hexInput]);

  const previewHex = result?.hex ?? '#228B22';
  const previewName = result?.closest?.name ?? null;
  const previewTextColor = readableTextOnColor(previewHex);
  const previewTextShadow =
    previewTextColor === '#ffffff' ? '0 1px 3px rgba(0,0,0,0.45)' : '0 1px 3px rgba(255,255,255,0.5)';

  const openEyedropper = async () => {
    if (!window.EyeDropper) {
      document.getElementById('hex-input-picker')?.click();
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
        <div className="mb-6">
          <ToolHexInput
            id="hex-input"
            label="Hex color code"
            value={hexInput}
            onChange={(e) => setHexInput(e.target.value.replace(/[^a-fA-F0-9]/g, '').slice(0, 6))}
            onPickerChange={(e) => setHexInput(e.target.value.replace('#', '').toUpperCase())}
            previewHex={previewHex}
            placeholder="228B22"
            accent="purple"
            pickerId="hex-input-picker"
          />
          <button
            type="button"
            onClick={openEyedropper}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/50 px-4 py-3 text-sm font-semibold text-purple-900 dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
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
          className="w-full rounded-2xl border-2 border-gray-200 dark:border-gray-600 shadow-inner transition-colors duration-150 flex flex-col items-center justify-center px-6 py-10 text-center min-h-[12.5rem]"
          style={{ backgroundColor: previewHex, color: previewTextColor }}
          role="img"
          aria-label={
            previewName
              ? `Color preview ${previewHex}, closest name ${previewName}`
              : `Color preview ${previewHex}`
          }
        >
          {previewName ? (
            <>
              <p
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-full"
                style={{ color: previewTextColor, textShadow: previewTextShadow }}
              >
                {previewName}
              </p>
              <p
                className="mt-2 text-sm sm:text-base font-mono opacity-90"
                style={{ color: previewTextColor, textShadow: previewTextShadow }}
              >
                {previewHex}
              </p>
            </>
          ) : (
            <p
              className="text-sm font-medium opacity-80"
              style={{ color: previewTextColor, textShadow: previewTextShadow }}
            >
              Enter a valid hex code to see the color name
            </p>
          )}
        </div>
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
