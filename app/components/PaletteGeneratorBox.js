'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  DEFAULT_PALETTE,
  PALETTE_KEYS,
  PALETTE_LABELS,
  appendPaletteToHref,
  buildShareUrl,
  formatPaletteCssVariables,
  generateHarmoniousPalette,
  parsePaletteFromSearchParams,
  resolvePaletteColors,
} from '../../lib/paletteUtils';

/**
 * Read resolved palette colors (#hex) from the current URL query params.
 * Use on preview pages that render mockups without mounting PaletteGeneratorBox.
 */
export function usePaletteFromUrl() {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const fromUrl = parsePaletteFromSearchParams(searchParams);
    return resolvePaletteColors(fromUrl || DEFAULT_PALETTE);
  }, [searchParams]);
}

function SwatchField({ id, label, value, placeholder, onChange, onPickerChange, compact, row }) {
  const pickerRef = useRef(null);
  const safeHex = value.length === 6 ? `#${value}` : `#${placeholder}`;
  const pickerValue = /^#[0-9A-Fa-f]{6}$/.test(safeHex) ? safeHex : `#${placeholder}`;
  const swatchClass = compact ? 'w-10 h-10 rounded-lg' : 'w-[60px] h-[60px] rounded-xl';

  const hexInput = (
    <div
      className={`flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 overflow-hidden ${row ? 'flex-1 min-w-0' : compact ? 'w-full max-w-[5.5rem] mt-1.5' : 'w-full max-w-[7.5rem] mt-1.5'}`}
    >
      <span className="pl-1.5 text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400">#</span>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-1.5 pr-1.5 text-[10px] font-mono font-semibold uppercase bg-transparent text-gray-900 dark:text-white outline-none min-w-0"
        spellCheck={false}
        autoComplete="off"
        aria-label={`${label} hex code — type your own color`}
      />
    </div>
  );

  if (row) {
    return (
      <div className="flex items-center gap-3 min-w-0">
        <span className="w-[5.5rem] shrink-0 text-xs font-semibold text-gray-900 dark:text-white">{label}</span>
        <button
          type="button"
          onClick={() => pickerRef.current?.click()}
          className={`${swatchClass} border-2 border-gray-300 dark:border-gray-600 shadow-sm hover:ring-2 hover:ring-purple-500/40 transition-shadow shrink-0 cursor-pointer`}
          style={{ backgroundColor: pickerValue }}
          aria-label={`Pick ${label} color — opens color picker`}
          title="Click to choose your own color"
        />
        <input
          ref={pickerRef}
          id={`${id}-picker`}
          type="color"
          value={pickerValue}
          onChange={onPickerChange}
          className="sr-only"
          tabIndex={-1}
        />
        {hexInput}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-w-0">
      <span className={`font-semibold text-gray-900 dark:text-white mb-1.5 ${compact ? 'text-[10px]' : 'text-xs sm:text-sm'}`}>
        {label}
      </span>
      <button
        type="button"
        onClick={() => pickerRef.current?.click()}
        className={`${swatchClass} border-2 border-gray-300 dark:border-gray-600 shadow-sm hover:ring-2 hover:ring-purple-500/40 transition-shadow shrink-0 cursor-pointer`}
        style={{ backgroundColor: pickerValue }}
        aria-label={`Pick ${label} color — opens color picker`}
        title="Click to choose your own color"
      />
      <input
        ref={pickerRef}
        id={`${id}-picker`}
        type="color"
        value={pickerValue}
        onChange={onPickerChange}
        className="sr-only"
        tabIndex={-1}
      />
      {hexInput}
    </div>
  );
}

/**
 * @param {object} props
 * @param {{ label: string, href: string }[]} [props.previewLinks]
 * @param {(colors: Record<string, string>) => React.ReactNode} [props.children]
 * @param {(colors: Record<string, string>) => void} [props.onPaletteChange]
 * @param {boolean} [props.compact] Smaller swatches and tighter layout
 * @param {boolean} [props.separatePreview] Render preview outside the palette card
 * @param {boolean} [props.splitLayout] Palette left, preview right on desktop
 */
export default function PaletteGeneratorBox({
  previewLinks = [],
  children,
  onPaletteChange,
  compact = false,
  separatePreview = false,
  splitLayout = false,
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [palette, setPalette] = useState(DEFAULT_PALETTE);
  const [copiedKey, setCopiedKey] = useState(null);
  const [urlReady, setUrlReady] = useState(false);

  useEffect(() => {
    const fromUrl = parsePaletteFromSearchParams(searchParams);
    if (fromUrl) setPalette(fromUrl);
    setUrlReady(true);
  }, [searchParams]);

  const resolvedColors = useMemo(() => resolvePaletteColors(palette), [palette]);

  useEffect(() => {
    onPaletteChange?.(resolvedColors);
  }, [resolvedColors, onPaletteChange]);

  useEffect(() => {
    if (!urlReady || typeof window === 'undefined') return;
    const next = buildShareUrl(palette, { pathname });
    window.history.replaceState(null, '', next);
  }, [palette, pathname, urlReady]);

  const showCopied = useCallback((key) => {
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  }, []);

  const copyText = useCallback(
    async (text, key) => {
      try {
        await navigator.clipboard.writeText(text);
        showCopied(key);
      } catch (e) {
        console.error(e);
      }
    },
    [showCopied]
  );

  const updateColor = (key, rawValue) => {
    const cleaned = rawValue.replace(/[^a-fA-F0-9]/g, '').slice(0, 6).toUpperCase();
    setPalette((prev) => ({ ...prev, [key]: cleaned }));
  };

  const handlePickerChange = (key, e) => {
    setPalette((prev) => ({
      ...prev,
      [key]: e.target.value.replace('#', '').toUpperCase(),
    }));
  };

  const outlineBtn = compact
    ? 'inline-flex flex-1 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2.5 py-2 text-xs font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-w-[7rem]'
    : 'inline-flex flex-1 items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-w-[9rem]';

  const randomBtn = compact
    ? 'inline-flex flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-2 text-xs font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all min-w-[7rem]'
    : 'inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-sm font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all hover:shadow-lg min-w-[9rem]';

  const palettePanel = (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 ${compact ? 'p-4' : 'p-5 sm:p-6 shadow-lg'}`}
    >
      <div className={compact ? 'mb-3' : 'mb-4'}>
        <h2 className={`font-bold text-gray-900 dark:text-white ${compact ? 'text-base mb-1' : 'text-lg mb-1.5'}`}>
          Your palette
        </h2>
        <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${compact ? 'text-xs' : 'text-sm'}`}>
          <strong className="text-gray-800 dark:text-gray-200">Pick your own colors:</strong> click any swatch to open
          the color picker, or type a hex code in the field below each swatch. You can also use Generate Random Palette
          or load a preset from the page below — every change updates the preview instantly.
        </p>
      </div>

      <div
        className={`${splitLayout && compact ? 'space-y-3' : 'grid grid-cols-5 gap-2 sm:gap-3'} ${compact ? 'mb-4' : 'mb-6'}`}
      >
        {PALETTE_KEYS.map((key, index) => (
          <SwatchField
            key={key}
            id={`palette-box-${key}`}
            label={PALETTE_LABELS[index]}
            value={palette[key]}
            placeholder={DEFAULT_PALETTE[key]}
            onChange={(e) => updateColor(key, e.target.value)}
            onPickerChange={(e) => handlePickerChange(key, e)}
            compact={compact}
            row={splitLayout && compact}
          />
        ))}
      </div>

      <div className={`flex flex-col gap-2 ${splitLayout ? '' : 'sm:flex-row flex-wrap'} ${previewLinks.length > 0 ? 'mb-4' : ''}`}>
        <button type="button" onClick={() => setPalette(generateHarmoniousPalette())} className={randomBtn}>
          Generate Random Palette
        </button>
        <button type="button" onClick={() => copyText(formatPaletteCssVariables(resolvedColors), 'css')} className={outlineBtn}>
          {copiedKey === 'css' ? 'Copied!' : 'Copy as CSS Variables'}
        </button>
        <button type="button" onClick={() => copyText(buildShareUrl(palette, { pathname }), 'share')} className={outlineBtn}>
          {copiedKey === 'share' ? 'Copied!' : 'Share Palette'}
        </button>
      </div>

      {previewLinks.length > 0 ? (
        <nav className="flex flex-wrap gap-2 pt-3 border-t border-gray-200 dark:border-gray-700" aria-label="Preview pages">
          {previewLinks.map((link) => {
            const href = appendPaletteToHref(link.href, palette);
            const isActive = pathname === link.href.split('?')[0];
            return (
              <Link
                key={link.href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </div>
  );

  const previewContent = typeof children === 'function' ? children(resolvedColors) : children;

  if (separatePreview && splitLayout) {
    return (
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        <div className="w-full lg:w-[40%] lg:shrink-0">{palettePanel}</div>
        {previewContent ? (
          <section aria-label="Live preview" className="w-full lg:w-[60%] lg:min-w-0">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Live preview</h2>
            {previewContent}
          </section>
        ) : null}
      </div>
    );
  }

  if (separatePreview) {
    return (
      <div className="space-y-5">
        {palettePanel}
        {previewContent ? (
          <section aria-label="Live preview">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Live preview</h2>
            {previewContent}
          </section>
        ) : null}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {palettePanel}
      {previewContent ? <div>{previewContent}</div> : null}
    </div>
  );
}
