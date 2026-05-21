'use client';

import { useRef } from 'react';

/**
 * High-contrast hex input for tool pages — input area stays white/dark gray,
 * never the live preview color (fixes invisible text in light theme).
 */
export default function ToolHexInput({
  id,
  label,
  value,
  onChange,
  onPickerChange,
  previewHex,
  placeholder = '228B22',
  accent = 'emerald',
  pickerId,
}) {
  const colorInputRef = useRef(null);
  const safeHex = previewHex?.startsWith('#') ? previewHex : `#${previewHex || '228B22'}`;
  const pickerValue = /^#[0-9A-Fa-f]{6}$/.test(safeHex) ? safeHex : '#228B22';

  const focusRing =
    accent === 'purple'
      ? 'focus-within:border-purple-500 dark:focus-within:border-purple-400'
      : 'focus-within:border-emerald-500 dark:focus-within:border-emerald-400';

  return (
    <div>
      {label ? (
        <label htmlFor={id} className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          {label}
        </label>
      ) : null}
      <div className="relative flex flex-wrap items-stretch gap-3">
        <div
          className={`tool-hex-field flex flex-1 min-w-[12rem] items-center rounded-xl border-2 border-gray-300 dark:border-gray-600 overflow-hidden ${focusRing}`}
        >
          <div
            className="w-12 sm:w-14 self-stretch shrink-0 border-r border-gray-200 dark:border-gray-600"
            style={{ backgroundColor: pickerValue }}
            aria-hidden
          />
          <span className="tool-hex-prefix pl-3 pr-1 text-xl font-mono font-bold">#</span>
          <input
            id={id}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="tool-hex-input flex-1 py-3 pr-4 text-xl font-mono font-semibold outline-none uppercase min-w-0"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <input
          ref={colorInputRef}
          id={pickerId}
          type="color"
          value={pickerValue}
          onChange={onPickerChange}
          className="absolute w-px h-px opacity-0 pointer-events-none overflow-hidden"
          tabIndex={-1}
          aria-hidden
        />
        <button
          type="button"
          onClick={() => colorInputRef.current?.click()}
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Pick color
        </button>
      </div>
    </div>
  );
}
