'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SketchPicker } from 'react-color';

const getLuminance = (hex) => {
  const rgb = hexToRgb(hex);
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
};

const getContrastRatio = (color1, color2) => {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
};

const getWCAGCompliance = (ratio, size) => {
  const isLarge = size === 'large';
  return {
    aa: isLarge ? ratio >= 3 : ratio >= 4.5,
    aaa: isLarge ? ratio >= 4.5 : ratio >= 7,
    ratio: ratio.toFixed(2)
  };
};

const getColorCombinations = (colors) => {
  const combinations = [];
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      combinations.push({ color1: colors[i], color2: colors[j], index1: i, index2: j });
    }
  }
  return combinations;
};

export default function ContrastCheckerTool() {
  const [colorGroups, setColorGroups] = useState([
    { id: 1, colors: ['#000000', '#FFFFFF'], labels: ['Color 1', 'Color 2'] }
  ]);
  const [textSize, setTextSize] = useState('normal');
  const [openPickers, setOpenPickers] = useState({});

  const addColorGroup = () => {
    const newId = Math.max(...colorGroups.map(g => g.id), 0) + 1;
    setColorGroups([...colorGroups, { id: newId, colors: ['#000000', '#FFFFFF'], labels: ['Color 1', 'Color 2'] }]);
  };

  const removeColorGroup = (id) => {
    if (colorGroups.length > 1) setColorGroups(colorGroups.filter(group => group.id !== id));
  };

  const addColorToGroup = (groupId) => {
    setColorGroups(colorGroups.map(group =>
      group.id === groupId
        ? { ...group, colors: [...group.colors, '#808080'], labels: [...group.labels, `Color ${group.colors.length + 1}`] }
        : group
    ));
  };

  const removeColorFromGroup = (groupId, colorIndex) => {
    setColorGroups(colorGroups.map(group =>
      group.id === groupId && group.colors.length > 2
        ? { ...group, colors: group.colors.filter((_, i) => i !== colorIndex), labels: group.labels.filter((_, i) => i !== colorIndex) }
        : group
    ));
  };

  const updateColorInGroup = (groupId, colorIndex, newColor) => {
    setColorGroups(colorGroups.map(group =>
      group.id === groupId ? { ...group, colors: group.colors.map((c, i) => i === colorIndex ? newColor : c) } : group
    ));
  };

  const togglePicker = (groupId, colorIndex) => {
    const key = `${groupId}-${colorIndex}`;
    setOpenPickers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
        Use the tool below to compare foreground and background colors. Add colors and see contrast ratios for all pairs.
      </p>

      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Text Size (Applies to all checks)</h3>
          <div className="flex gap-3">
            <button
              onClick={() => setTextSize('normal')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${textSize === 'normal' ? 'bg-green-600 text-white' : 'bg-[#ccc] text-gray-900 hover:bg-[#bbb] border border-gray-400'}`}
            >
              Normal
            </button>
            <button
              onClick={() => setTextSize('large')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${textSize === 'large' ? 'bg-green-600 text-white' : 'bg-[#ccc] text-gray-900 hover:bg-[#bbb] border border-gray-400'}`}
            >
              Large (18pt+)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 mb-8">
        {colorGroups.map((group, groupIndex) => {
          const combinations = getColorCombinations(group.colors);
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Color Group #{group.id} ({group.colors.length} colors)</h3>
                <div className="flex gap-2">
                  <button onClick={() => addColorToGroup(group.id)} className="px-3 py-1 bg-green-100 dark:bg-green-900/20 hover:bg-green-200 dark:hover:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg text-sm font-medium transition-colors">+ Add Color</button>
                  {colorGroups.length > 1 && (
                    <button onClick={() => removeColorGroup(group.id)} className="px-3 py-1 bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium transition-colors">Remove Group</button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {group.colors.map((color, colorIndex) => {
                  const pickerKey = `${group.id}-${colorIndex}`;
                  return (
                    <div key={colorIndex} className="bg-white dark:bg-gray-700/30 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                      <label className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">{group.labels[colorIndex]}</label>
                      <div className="relative mb-3">
                        <button onClick={() => togglePicker(group.id, colorIndex)} className="w-full h-24 rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-600 shadow-sm transition-all hover:shadow-md cursor-pointer" style={{ backgroundColor: color }}>
                          <span className="sr-only">Click to change color</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">HEX:</span>
                        <code className="text-xs font-mono bg-[#ccc] text-gray-900 px-2 py-1 rounded border border-gray-400">{color}</code>
                      </div>
                      <button onClick={() => togglePicker(group.id, colorIndex)} className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 mb-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                        Change Color
                      </button>
                      {openPickers[pickerKey] && (
                        <div className="absolute z-50 mt-2 left-0 right-0">
                          <div className="fixed inset-0 bg-black/50" onClick={() => togglePicker(group.id, colorIndex)} />
                          <div className="relative flex justify-center">
                            <SketchPicker color={color} onChange={(newColor) => updateColorInGroup(group.id, colorIndex, newColor.hex)} disableAlpha />
                          </div>
                        </div>
                      )}
                      {group.colors.length > 2 && (
                        <button onClick={() => removeColorFromGroup(group.id, colorIndex)} className="w-full px-2 py-1.5 bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded text-xs font-medium transition-colors">Remove Color</button>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <h4 className="text-md font-semibold mb-4 text-gray-900 dark:text-white">Contrast Matrix - All Color Combinations</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="p-2 text-left font-semibold text-sm text-gray-700 dark:text-gray-300"></th>
                        {group.colors.map((_, index) => (
                          <th key={index} className="p-2 text-center font-semibold text-sm text-gray-700 dark:text-gray-300">{group.labels[index]}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {group.colors.map((color1, rowIndex) => (
                        <tr key={rowIndex}>
                          <td className="p-2 font-medium text-sm text-gray-700 dark:text-gray-300 align-middle">{group.labels[rowIndex]}</td>
                          {group.colors.map((color2, colIndex) => {
                            if (rowIndex === colIndex) {
                              return (
                                <td key={colIndex} className="p-2">
                                  <div className="aspect-square rounded-lg border-2 border-gray-300 dark:border-gray-600 shadow-sm" style={{ backgroundColor: color1 }} title={group.labels[rowIndex]} />
                                </td>
                              );
                            }
                            if (rowIndex > colIndex) return <td key={colIndex} className="p-2"></td>;
                            const contrastRatio = getContrastRatio(color1, color2);
                            const compliance = getWCAGCompliance(contrastRatio, textSize);
                            return (
                              <td key={colIndex} className="p-2">
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  className={`aspect-square rounded-lg border-2 p-2 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all ${compliance.aa ? 'border-green-400 bg-green-50 dark:bg-green-900/20' : 'border-red-400 bg-red-50 dark:bg-red-900/20'}`}
                                  style={{ background: `linear-gradient(135deg, ${color1} 50%, ${color2} 50%)`, borderColor: compliance.aa ? '#4ade80' : '#f87171' }}
                                  title={`${group.labels[rowIndex]} vs ${group.labels[colIndex]}: ${compliance.ratio}:1`}
                                >
                                  <div className="text-xs font-bold mb-1 bg-white/80 dark:bg-gray-900/80 px-1.5 py-0.5 rounded" style={{ color: color1 }}>{compliance.ratio}:1</div>
                                  <div className="flex gap-1">
                                    <span className={`text-xs px-1.5 py-0.5 rounded font-semibold ${compliance.aa ? 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200' : 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200'}`}>AA</span>
                                    <span className={`text-xs px-1.5 py-0.5 rounded font-semibold ${compliance.aaa ? 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200' : 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200'}`}>AAA</span>
                                  </div>
                                </motion.div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-md font-semibold mb-4 text-gray-900 dark:text-white">Detailed Contrast Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {combinations.map((combo, index) => {
                    const contrastRatio = getContrastRatio(combo.color1, combo.color2);
                    const compliance = getWCAGCompliance(contrastRatio, textSize);
                    return (
                      <div key={index} className="bg-white dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded border-2 border-gray-300 dark:border-gray-600" style={{ backgroundColor: combo.color1 }} />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{group.labels[combo.index1]}</span>
                          <span className="text-gray-400">vs</span>
                          <div className="w-8 h-8 rounded border-2 border-gray-300 dark:border-gray-600" style={{ backgroundColor: combo.color2 }} />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{group.labels[combo.index2]}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">{compliance.ratio}:1</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">{contrastRatio >= 7 ? 'Excellent' : contrastRatio >= 4.5 ? 'Good' : contrastRatio >= 3 ? 'Fair' : 'Poor'}</div>
                          </div>
                          <div className="flex gap-2">
                            <span className={`text-xs px-2 py-1 rounded font-semibold ${compliance.aa ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>AA {compliance.aa ? '✓' : '✗'}</span>
                            <span className={`text-xs px-2 py-1 rounded font-semibold ${compliance.aaa ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>AAA {compliance.aaa ? '✓' : '✗'}</span>
                          </div>
                        </div>
                        <div className="mt-3 rounded p-3 text-center" style={{ backgroundColor: combo.color2 }}>
                          <p className={textSize === 'large' ? 'text-lg' : 'text-sm'} style={{ color: combo.color1 }}>Preview Text</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto mb-12">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={addColorGroup}
          className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add Another Color Group
        </motion.button>
      </div>
    </>
  );
}
