'use client';

import { useRouter } from 'next/navigation';
import { appendPaletteToHref } from '../../../../lib/paletteUtils';

export default function PresetPaletteGrid({ presets, basePath }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {presets.map((preset) => (
        <button
          key={preset.name}
          type="button"
          onClick={() =>
            router.push(
              appendPaletteToHref(basePath, {
                primary: preset.primary,
                secondary: preset.secondary,
                accent: preset.accent,
                background: preset.background,
                text: preset.text,
              })
            )
          }
          className="text-left rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all"
        >
          <p className="font-semibold text-gray-900 dark:text-white mb-3">{preset.name}</p>
          <div className="flex gap-1.5 mb-3">
            {[preset.primary, preset.secondary, preset.accent, preset.background, preset.text].map((hex) => (
              <span
                key={`${preset.name}-${hex}`}
                className="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-600 shrink-0"
                style={{ backgroundColor: `#${hex}` }}
                aria-hidden
              />
            ))}
          </div>
          <p className="text-xs font-mono text-gray-500 dark:text-gray-400 leading-relaxed">
            #{preset.primary} · #{preset.secondary} · #{preset.accent} · #{preset.background} · #{preset.text}
          </p>
        </button>
      ))}
    </div>
  );
}
