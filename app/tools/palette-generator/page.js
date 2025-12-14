'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SketchPicker } from 'react-color';

// Convert hex to HSL
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

// Convert HSL to hex
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

// Generate color palettes
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

const generateAnalogous = (baseHsl) => {
  return [
    hslToHex((baseHsl.h - 30 + 360) % 360, baseHsl.s, baseHsl.l),
    hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
    hslToHex((baseHsl.h + 30) % 360, baseHsl.s, baseHsl.l),
    hslToHex((baseHsl.h + 60) % 360, baseHsl.s, baseHsl.l),
    hslToHex((baseHsl.h - 30 + 360) % 360, baseHsl.s, Math.min(90, baseHsl.l + 20)),
  ];
};

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

// Generate random color
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function PaletteGeneratorPage() {
  const [baseColor, setBaseColor] = useState('#3B82F6');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedPalette, setSelectedPalette] = useState('monochromatic');

  const handleRandomPalette = () => {
    const randomColor = generateRandomColor();
    setBaseColor(randomColor);
  };

  const palettes = generatePalettes(baseColor);

  const handleColorChange = (color) => {
    setBaseColor(color.hex);
  };

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    // You could add a toast notification here
  };

  const copyPalette = (paletteKey) => {
    const palette = palettes[paletteKey];
    const paletteString = palette.join(', ');
    navigator.clipboard.writeText(paletteString);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Color Palette Generator
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Generate harmonious color palettes based on color theory. Create perfect combinations for your projects.
          </p>
          
          {/* Generate Random Palette Button - Big and Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <button
              onClick={handleRandomPalette}
              className="px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-bold text-lg md:text-xl transition-all duration-200 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Generate Random Palette
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Color Picker Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Base Color
              </h3>
              <div className="relative mb-4">
                <button
                  onClick={() => setShowPicker(!showPicker)}
                  className="w-full h-32 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                  style={{ backgroundColor: baseColor }}
                >
                  <span className="sr-only">Select base color</span>
                </button>
                {showPicker && (
                  <div className="absolute z-50 mt-2">
                    <div className="fixed inset-0" onClick={() => setShowPicker(false)}></div>
                    <div className="relative">
                      <SketchPicker
                        color={baseColor}
                        onChange={handleColorChange}
                        disableAlpha
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">HEX:</span>
                <code className="text-sm font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {baseColor}
                </code>
              </div>
              <button
                onClick={() => copyColor(baseColor)}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors"
              >
                Copy HEX
              </button>
            </div>
          </motion.div>

          {/* Palette Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            {/* Palette Type Selector */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Palette Type
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(paletteNames).map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPalette(key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedPalette === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Palette */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {paletteNames[selectedPalette]} Palette
                </h3>
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
              <div className="grid grid-cols-5 gap-2 mb-4">
                {palettes[selectedPalette].map((color, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="aspect-square rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group relative overflow-hidden"
                    style={{ backgroundColor: color }}
                    onClick={() => copyColor(color)}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/70 text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      {color}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {palettes[selectedPalette].map((color, index) => (
                  <button
                    key={index}
                    onClick={() => copyColor(color)}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-sm font-mono text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* All Palettes Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                All Palette Types
              </h3>
              <div className="space-y-6">
                {Object.entries(paletteNames).map(([key, name]) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {name}
                      </h4>
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
                    <div className="grid grid-cols-5 gap-2 mb-3">
                      {palettes[key].map((color, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.03 }}
                          className="aspect-square rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative overflow-hidden"
                          style={{ backgroundColor: color }}
                          onClick={() => copyColor(color)}
                        >
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-black/70 text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-center">
                            {color}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {palettes[key].map((color, index) => (
                        <button
                          key={index}
                          onClick={() => copyColor(color)}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-xs font-mono text-gray-700 dark:text-gray-300 transition-colors"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Color Theory Explained
          </h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Monochromatic:</strong> Variations of a single color using different shades, tints, and tones.</li>
              <li><strong>Analogous:</strong> Colors that are adjacent to each other on the color wheel, creating harmonious combinations.</li>
              <li><strong>Complementary:</strong> Colors opposite each other on the color wheel, providing high contrast.</li>
              <li><strong>Triadic:</strong> Three colors evenly spaced around the color wheel, offering balanced contrast.</li>
              <li><strong>Split Complementary:</strong> A base color plus the two colors adjacent to its complement.</li>
              <li><strong>Tetradic:</strong> Four colors arranged in two complementary pairs, providing rich color variety.</li>
            </ul>
          </div>
        </motion.section>

        {/* Ad Space Placeholder */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 text-center max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Ad Space (728x90)
          </p>
        </div>
      </div>
    </div>
  );
}

