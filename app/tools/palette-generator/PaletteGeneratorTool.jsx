'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SketchPicker } from 'react-color';

const hexToHsl = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
};

const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const generatePalettes = (baseColor) => {
  const baseHsl = hexToHsl(baseColor);
  return {
    monochromatic: generateMonochromatic(baseHsl),
    analogous: generateAnalogous(baseHsl),
    complementary: generateComplementary(baseHsl),
    triadic: generateTriadic(baseHsl),
    splitComplementary: generateSplitComplementary(baseHsl),
    tetradic: generateTetradic(baseHsl),
  };
};

const generateMonochromatic = (baseHsl) => {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    const lightness = Math.max(10, Math.min(90, baseHsl.l + (i - 2) * 15));
    colors.push(hslToHex(baseHsl.h, baseHsl.s, lightness));
  }
  return colors;
};

const generateAnalogous = (baseHsl) => [
  hslToHex((baseHsl.h - 30 + 360) % 360, baseHsl.s, baseHsl.l),
  hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
  hslToHex((baseHsl.h + 30) % 360, baseHsl.s, baseHsl.l),
  hslToHex((baseHsl.h + 60) % 360, baseHsl.s, baseHsl.l),
  hslToHex((baseHsl.h - 30 + 360) % 360, baseHsl.s, Math.min(90, baseHsl.l + 20)),
];

const generateComplementary = (baseHsl) => {
  const compH = (baseHsl.h + 180) % 360;
  return [
    hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
    hslToHex(baseHsl.h, baseHsl.s, Math.min(90, baseHsl.l + 20)),
    hslToHex(compH, baseHsl.s, baseHsl.l),
    hslToHex(compH, baseHsl.s, Math.min(90, baseHsl.l + 20)),
    hslToHex(baseHsl.h, Math.max(20, baseHsl.s - 30), baseHsl.l),
  ];
};

const generateTriadic = (baseHsl) => {
  const h1 = (baseHsl.h + 120) % 360;
  const h2 = (baseHsl.h + 240) % 360;
  return [
    hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
    hslToHex(h1, baseHsl.s, baseHsl.l),
    hslToHex(h2, baseHsl.s, baseHsl.l),
    hslToHex(baseHsl.h, baseHsl.s, Math.min(90, baseHsl.l + 20)),
    hslToHex(h1, baseHsl.s, Math.min(90, baseHsl.l + 20)),
  ];
};

const generateSplitComplementary = (baseHsl) => {
  const h1 = (baseHsl.h + 150) % 360;
  const h2 = (baseHsl.h + 210) % 360;
  return [
    hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
    hslToHex(h1, baseHsl.s, baseHsl.l),
    hslToHex(h2, baseHsl.s, baseHsl.l),
    hslToHex(baseHsl.h, baseHsl.s, Math.min(90, baseHsl.l + 20)),
    hslToHex(h1, baseHsl.s, Math.min(90, baseHsl.l + 20)),
  ];
};

const generateTetradic = (baseHsl) => {
  const h1 = (baseHsl.h + 90) % 360;
  const h2 = (baseHsl.h + 180) % 360;
  const h3 = (baseHsl.h + 270) % 360;
  return [
    hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
    hslToHex(h1, baseHsl.s, baseHsl.l),
    hslToHex(h2, baseHsl.s, baseHsl.l),
    hslToHex(h3, baseHsl.s, baseHsl.l),
    hslToHex(baseHsl.h, baseHsl.s, Math.min(90, baseHsl.l + 20)),
  ];
};

const paletteNames = {
  monochromatic: 'Monochromatic',
  analogous: 'Analogous',
  complementary: 'Complementary',
  triadic: 'Triadic',
  splitComplementary: 'Split Complementary',
  tetradic: 'Tetradic',
};

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};

export default function PaletteGeneratorTool() {
  const [baseColor, setBaseColor] = useState('#3B82F6');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedPalette, setSelectedPalette] = useState('monochromatic');
  const palettes = generatePalettes(baseColor);

  const copyColor = (color) => navigator.clipboard.writeText(color);
  const copyPalette = (paletteKey) => navigator.clipboard.writeText(palettes[paletteKey].join(', '));

  return (
    <>
      <div className="text-center mb-8">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Use the tool below to pick a base color and generate palettes. Copy hex codes for use in your projects.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <button
            onClick={() => setBaseColor(generateRandomColor())}
            className="px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-bold text-lg md:text-xl transition-all duration-200 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Generate Random Palette
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Base Color</h3>
            <div className="relative mb-4">
              <button
                onClick={() => setShowPicker(!showPicker)}
                className="w-full h-32 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors relative overflow-hidden group"
                style={{ backgroundColor: baseColor }}
              >
                <span className="sr-only">Select base color</span>
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md px-3 py-1.5 rounded bg-black/50">
                    Click to change color
                  </span>
                </span>
                <span className="absolute bottom-2 right-2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </span>
              </button>
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-1.5">Click the color above to open picker</p>
              {showPicker && (
                <div className="absolute z-50 mt-2 left-0">
                  <div className="fixed inset-0" onClick={() => setShowPicker(false)} />
                  <div className="relative">
                    <SketchPicker color={baseColor} onChange={(c) => setBaseColor(c.hex)} disableAlpha />
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">HEX:</span>
              <code className="text-sm font-mono bg-[#ccc] text-gray-900 px-2 py-1 rounded border border-gray-400">{baseColor}</code>
            </div>
            <button
              onClick={() => copyColor(baseColor)}
              className="w-full px-4 py-2 bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700 text-blue-900 dark:text-white rounded-lg text-sm font-medium transition-colors border border-blue-200 dark:border-blue-600"
            >
              Copy HEX
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Palette Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(paletteNames).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPalette(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedPalette === key ? 'bg-blue-600 text-white' : 'bg-[#ccc] text-gray-900 hover:bg-[#bbb] border border-gray-400'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{paletteNames[selectedPalette]} Palette</h3>
              <button
                onClick={() => copyPalette(selectedPalette)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Palette
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {palettes[selectedPalette].map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="cursor-pointer"
                  onClick={() => copyColor(color)}
                >
                  <div className="aspect-square rounded-lg shadow-md hover:shadow-xl transition-shadow relative overflow-hidden" style={{ backgroundColor: color }}>
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-black/75 text-white text-xs font-mono text-center">{color}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">All Palette Types</h3>
            <div className="space-y-6">
              {Object.entries(paletteNames).map(([key, name]) => (
                <div key={key}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{name}</h4>
                    <button
                      onClick={() => copyPalette(key)}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors flex items-center gap-1"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Palette
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {palettes[key].map((color, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03 }}
                        className="cursor-pointer"
                        onClick={() => copyColor(color)}
                      >
                        <div className="aspect-square rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden" style={{ backgroundColor: color }}>
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                          <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-black/75 text-white text-xs font-mono text-center">{color}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
