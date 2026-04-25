'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  PRESET_COLORS,
  getClosestNamedColor,
  getColorLabel,
  hexToRgb,
  mixHexColorsRyb,
} from './colorMixing';

const DEFAULT_COLOR_1 = '#FF0000';
const DEFAULT_COLOR_2 = '#0000FF';

function PresetGrid({ onSelect, activeHex }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {PRESET_COLORS.map((preset) => {
        const isActive = preset.hex === activeHex.toUpperCase();
        return (
          <button
            key={preset.hex}
            type="button"
            onClick={() => onSelect(preset.hex)}
            className={`rounded-lg border p-1.5 text-xs font-medium transition-colors ${
              isActive
                ? 'border-purple-500 ring-1 ring-purple-400'
                : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500'
            }`}
            title={`${preset.name} (${preset.hex})`}
          >
            <span className="block h-6 rounded" style={{ backgroundColor: preset.hex }} />
            <span className="mt-1 block text-gray-700 dark:text-gray-300">{preset.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function ColorMixerTool({ initialColor1 = DEFAULT_COLOR_1, initialColor2 = DEFAULT_COLOR_2, showRelated = false }) {
  const [color1, setColor1] = useState(initialColor1.toUpperCase());
  const [color2, setColor2] = useState(initialColor2.toUpperCase());
  const [copied, setCopied] = useState(false);

  const mixed = useMemo(() => mixHexColorsRyb(color1, color2), [color1, color2]);
  const closestName = useMemo(() => getClosestNamedColor(mixed.hex), [mixed.hex]);
  const color1Label = useMemo(() => getColorLabel(color1), [color1]);
  const color2Label = useMemo(() => getColorLabel(color2), [color2]);
  const sentence = `${color1Label} + ${color2Label} = ${closestName}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(mixed.hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (_) {
      setCopied(false);
    }
  };

  const resetMix = () => {
    setColor1(DEFAULT_COLOR_1);
    setColor2(DEFAULT_COLOR_2);
    setCopied(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1.1fr] gap-4 items-stretch">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Color 1</h2>
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value.toUpperCase())}
            className="w-full h-24 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700"
            aria-label="Select first color"
          />
          <p className="mt-2 text-sm font-mono text-gray-700 dark:text-gray-300">{color1}</p>
          <div className="mt-3">
            <PresetGrid onSelect={setColor1} activeHex={color1} />
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center text-3xl font-bold text-gray-500 dark:text-gray-400">
          +
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Color 2</h2>
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value.toUpperCase())}
            className="w-full h-24 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700"
            aria-label="Select second color"
          />
          <p className="mt-2 text-sm font-mono text-gray-700 dark:text-gray-300">{color2}</p>
          <div className="mt-3">
            <PresetGrid onSelect={setColor2} activeHex={color2} />
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center text-3xl font-bold text-gray-500 dark:text-gray-400">
          =
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Mixed Result</h2>
          <div
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: mixed.hex, minHeight: '200px' }}
            aria-label={`Mixed color result ${mixed.hex}`}
          />
          <div className="mt-3 space-y-1 text-sm">
            <p className="font-mono text-gray-900 dark:text-white">
              HEX: <span>{mixed.hex}</span>
            </p>
            <p className="font-mono text-gray-700 dark:text-gray-300">
              RGB: {mixed.rgb.r}, {mixed.rgb.g}, {mixed.rgb.b}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Closest name: <strong className="text-gray-900 dark:text-white">{closestName}</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300">{sentence}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition-colors"
            >
              {copied ? 'Copied!' : 'Copy hex code'}
            </button>
            <button
              type="button"
              onClick={resetMix}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Try another mix
            </button>
          </div>
        </div>
      </div>

      {showRelated && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Want more mixes? Explore the full{' '}
          <Link href="/tools/color-mixer" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
            Color Mixing Simulator
          </Link>
          .
        </p>
      )}
    </div>
  );
}
