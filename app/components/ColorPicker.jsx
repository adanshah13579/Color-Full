'use client';

import { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function ColorPicker({ color, onChange, recentColors, onSelectRecentColor }) {
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (newColor) => {
    onChange(newColor.hex);
  };

  return (
    <div className="space-y-6">
      {/* Main Color Picker */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Color Picker
        </h3>
        <div className="relative">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="w-full h-16 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-colors"
            style={{ backgroundColor: color }}
          >
            <span className="sr-only">Select color</span>
          </button>
          {showPicker && (
            <div className="absolute z-50 mt-2">
              <div className="fixed inset-0" onClick={() => setShowPicker(false)}></div>
              <div className="relative">
                <SketchPicker
                  color={color}
                  onChange={handleColorChange}
                  disableAlpha
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">HEX:</span>
            <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {color}
            </code>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(color);
              // You could add a toast notification here
            }}
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors"
          >
            Copy HEX
          </button>
        </div>
      </div>

      {/* Preset Color Palettes */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Preset Palettes
        </h3>
        <div className="space-y-3">
          {[
            { name: 'Ocean', colors: ['#0EA5E9', '#06B6D4', '#14B8A6', '#10B981'] },
            { name: 'Sunset', colors: ['#F59E0B', '#F97316', '#EF4444', '#EC4899'] },
            { name: 'Forest', colors: ['#065F46', '#047857', '#059669', '#10B981'] },
            { name: 'Purple', colors: ['#581C87', '#7C3AED', '#8B5CF6', '#A78BFA'] },
          ].map((palette, idx) => (
            <div key={idx}>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{palette.name}</p>
              <div className="flex gap-1">
                {palette.colors.map((paletteColor, i) => (
                  <button
                    key={i}
                    onClick={() => onChange(paletteColor)}
                    className="flex-1 h-8 rounded hover:scale-110 transition-transform"
                    style={{ backgroundColor: paletteColor }}
                    title={paletteColor}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Used Colors */}
      {recentColors.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recently Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {recentColors.map((recentColor, idx) => (
              <button
                key={idx}
                onClick={() => onSelectRecentColor(recentColor)}
                className="w-10 h-10 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:scale-110 transition-transform"
                style={{ backgroundColor: recentColor }}
                title={recentColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

