import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const CSS = [
  ['Alice Blue', '#F0F8FF'], ['Antique White', '#FAEBD7'], ['Aqua', '#00FFFF'], ['Aquamarine', '#7FFFD4'],
  ['Azure', '#F0FFFF'], ['Beige', '#F5F5DC'], ['Bisque', '#FFE4C4'], ['Black', '#000000'],
  ['Blanched Almond', '#FFEBCD'], ['Blue', '#0000FF'], ['Blue Violet', '#8A2BE2'], ['Brown', '#A52A2A'],
  ['Burlywood', '#DEB887'], ['Cadet Blue', '#5F9EA0'], ['Chartreuse', '#7FFF00'], ['Chocolate', '#D2691E'],
  ['Coral', '#FF7F50'], ['Cornflower Blue', '#6495ED'], ['Cornsilk', '#FFF8DC'], ['Crimson', '#DC143C'],
  ['Cyan', '#00FFFF'], ['Dark Blue', '#00008B'], ['Dark Cyan', '#008B8B'], ['Dark Goldenrod', '#B8860B'],
  ['Dark Gray', '#A9A9A9'], ['Dark Green', '#006400'], ['Dark Khaki', '#BDB76B'], ['Dark Magenta', '#8B008B'],
  ['Dark Olive Green', '#556B2F'], ['Dark Orange', '#FF8C00'], ['Dark Orchid', '#9932CC'], ['Dark Red', '#8B0000'],
  ['Dark Salmon', '#E9967A'], ['Dark Sea Green', '#8FBC8F'], ['Dark Slate Blue', '#483D8B'],
  ['Dark Slate Gray', '#2F4F4F'], ['Dark Turquoise', '#00CED1'], ['Dark Violet', '#9400D3'], ['Deep Pink', '#FF1493'],
  ['Deep Sky Blue', '#00BFFF'], ['Dim Gray', '#696969'], ['Dodger Blue', '#1E90FF'], ['Firebrick', '#B22222'],
  ['Floral White', '#FFFAF0'], ['Forest Green', '#228B22'], ['Fuchsia', '#FF00FF'], ['Gainsboro', '#DCDCDC'],
  ['Ghost White', '#F8F8FF'], ['Gold', '#FFD700'], ['Goldenrod', '#DAA520'], ['Gray', '#808080'], ['Green', '#008000'],
  ['Green Yellow', '#ADFF2F'], ['Honeydew', '#F0FFF0'], ['Hot Pink', '#FF69B4'], ['Indian Red', '#CD5C5C'],
  ['Indigo', '#4B0082'], ['Ivory', '#FFFFF0'], ['Khaki', '#F0E68C'], ['Lavender', '#E6E6FA'],
  ['Lavender Blush', '#FFF0F5'], ['Lawn Green', '#7CFC00'], ['Lemon Chiffon', '#FFFACD'], ['Light Blue', '#ADD8E6'],
  ['Light Coral', '#F08080'], ['Light Cyan', '#E0FFFF'], ['Light Goldenrod Yellow', '#FAFAD2'], ['Light Gray', '#D3D3D3'],
  ['Light Green', '#90EE90'], ['Light Pink', '#FFB6C1'], ['Light Salmon', '#FFA07A'], ['Light Sea Green', '#20B2AA'],
  ['Light Sky Blue', '#87CEEB'], ['Light Slate Gray', '#778899'], ['Light Steel Blue', '#B0C4DE'],
  ['Light Yellow', '#FFFFE0'], ['Lime', '#00FF00'], ['Lime Green', '#32CD32'], ['Linen', '#FAF0E6'],
  ['Magenta', '#FF00FF'], ['Maroon', '#800000'], ['Medium Aquamarine', '#66CDAA'], ['Medium Blue', '#0000CD'],
  ['Medium Orchid', '#BA55D3'], ['Medium Purple', '#9370DB'], ['Medium Sea Green', '#3CB371'],
  ['Medium Slate Blue', '#7B68EE'], ['Medium Spring Green', '#00FA9A'], ['Medium Turquoise', '#48D1CC'],
  ['Medium Violet Red', '#C71585'], ['Midnight Blue', '#191970'], ['Mint Cream', '#F5FFFA'], ['Misty Rose', '#FFE4E1'],
  ['Moccasin', '#FFE4B5'], ['Navajo White', '#FFDEAD'], ['Navy', '#000080'], ['Old Lace', '#FDF5E6'], ['Olive', '#808000'],
  ['Olive Drab', '#6B8E23'], ['Orange', '#FFA500'], ['Orange Red', '#FF4500'], ['Orchid', '#DA70D6'],
  ['Pale Goldenrod', '#EEE8AA'], ['Pale Green', '#98FB98'], ['Pale Turquoise', '#AFEEEE'], ['Pale Violet Red', '#DB7093'],
  ['Papaya Whip', '#FFEFD5'], ['Peach Puff', '#FFDAB9'], ['Peru', '#CD853F'], ['Pink', '#FFC0CB'], ['Plum', '#DDA0DD'],
  ['Powder Blue', '#B0E0E6'], ['Purple', '#800080'], ['Rebecca Purple', '#663399'], ['Red', '#FF0000'],
  ['Rosy Brown', '#BC8F8F'], ['Royal Blue', '#4169E1'], ['Saddle Brown', '#8B4513'], ['Salmon', '#FA8072'],
  ['Sandy Brown', '#F4A460'], ['Sea Green', '#2E8B57'], ['Seashell', '#FFF5EE'], ['Sienna', '#A0522D'], ['Silver', '#C0C0C0'],
  ['Sky Blue', '#87CEEB'], ['Slate Blue', '#6A5ACD'], ['Slate Gray', '#708090'], ['Snow', '#FFFAFA'],
  ['Spring Green', '#00FF7F'], ['Steel Blue', '#4682B4'], ['Tan', '#D2B48C'], ['Teal', '#008080'], ['Thistle', '#D8BFD8'],
  ['Tomato', '#FF6347'], ['Turquoise', '#40E0D0'], ['Violet', '#EE82EE'], ['Wheat', '#F5DEB3'], ['White', '#FFFFFF'],
  ['White Smoke', '#F5F5F5'], ['Yellow', '#FFFF00'], ['Yellow Green', '#9ACD32'],
];

const tw = {
  slate: ['f8fafc', 'f1f5f9', 'e2e8f0', 'cbd5e1', '94a3b8', '64748b', '475569', '334155', '1e293b', '0f172a', '020617'],
  gray: ['f9fafb', 'f3f4f6', 'e5e7eb', 'd1d5db', '9ca3af', '6b7280', '4b5563', '374151', '1f2937', '111827', '030712'],
  zinc: ['fafafa', 'f4f4f5', 'e4e4e7', 'd4d4d8', 'a1a1aa', '71717a', '52525b', '3f3f46', '27272a', '18181b', '09090b'],
  neutral: ['fafafa', 'f5f5f5', 'e5e5e5', 'd4d4d4', 'a3a3a3', '737373', '525252', '404040', '262626', '171717', '0a0a0a'],
  stone: ['fafaf9', 'f5f5f4', 'e7e5e4', 'd6d3d1', 'a8a29e', '78716c', '57534e', '44403c', '292524', '1c1917', '0c0a09'],
  red: ['fef2f2', 'fee2e2', 'fecaca', 'fca5a5', 'f87171', 'ef4444', 'dc2626', 'b91c1c', '991b1b', '7f1d1d', '450a0a'],
  orange: ['fff7ed', 'ffedd5', 'fed7aa', 'fdba74', 'fb923c', 'f97316', 'ea580c', 'c2410c', '9a3412', '7c2d12', '431407'],
  amber: ['fffbeb', 'fef3c7', 'fde68a', 'fcd34d', 'fbbf24', 'f59e0b', 'd97706', 'b45309', '92400e', '78350f', '451a03'],
  yellow: ['fefce8', 'fef9c3', 'fef08a', 'fde047', 'facc15', 'eab308', 'ca8a04', 'a16207', '854d0e', '713f12', '422006'],
  lime: ['f7fee7', 'ecfccb', 'd9f99d', 'bef264', 'a3e635', '84cc16', '65a30d', '4d7c0f', '3f6212', '365314', '1a2e05'],
  green: ['f0fdf4', 'dcfce7', 'bbf7d0', '86efac', '4ade80', '22c55e', '16a34a', '15803d', '166534', '14532d', '052e16'],
  emerald: ['ecfdf5', 'd1fae5', 'a7f3d0', '6ee7b7', '34d399', '10b981', '059669', '047857', '065f46', '064e3b', '022c22'],
  teal: ['f0fdfa', 'ccfbf1', '99f6e4', '5eead4', '2dd4bf', '14b8a6', '0d9488', '0f766e', '115e59', '134e4a', '042f2e'],
  cyan: ['ecfeff', 'cffafe', 'a5f3fc', '67e8f9', '22d3ee', '06b6d4', '0891b2', '0e7490', '155e75', '164e63', '083344'],
  sky: ['f0f9ff', 'e0f2fe', 'bae6fd', '7dd3fc', '38bdf8', '0ea5e9', '0284c7', '0369a1', '075985', '0c4a6e', '082f49'],
  blue: ['eff6ff', 'dbeafe', 'bfdbfe', '93c5fd', '60a5fa', '3b82f6', '2563eb', '1d4ed8', '1e40af', '1e3a8a', '172554'],
  indigo: ['eef2ff', 'e0e7ff', 'c7d2fe', 'a5b4fc', '818cf8', '6366f1', '4f46e5', '4338ca', '3730a3', '312e81', '1e1b4b'],
  violet: ['f5f3ff', 'ede9fe', 'ddd6fe', 'c4b5fd', 'a78bfa', '8b5cf6', '7c3aed', '6d28d9', '5b21b6', '4c1d95', '2e1065'],
  purple: ['faf5ff', 'f3e8ff', 'e9d5ff', 'd8b4fe', 'c084fc', 'a855f7', '9333ea', '7e22ce', '6b21a8', '581c87', '3b0764'],
  fuchsia: ['fdf4ff', 'fae8ff', 'f5d0fe', 'f0abfc', 'e879f9', 'd946ef', 'c026d3', 'a21caf', '86198f', '701a75', '4a044e'],
  pink: ['fdf2f8', 'fce7f3', 'fbcfe8', 'f9a8d4', 'f472b6', 'ec4899', 'db2777', 'be185d', '9d174d', '831843', '500724'],
  rose: ['fff1f2', 'ffe4e6', 'fecdd3', 'fda4af', 'fb7185', 'f43f5e', 'e11d48', 'be123c', '9f1239', '881337', '4c0519'],
};
const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

const material = {
  Red: ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C'],
  Pink: ['#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F'],
  Purple: ['#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C'],
  'Deep Purple': ['#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92'],
  Indigo: ['#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E'],
  Blue: ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'],
  Cyan: ['#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064'],
  Teal: ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40'],
  Green: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20'],
  Lime: ['#F9FBE7', '#F0F4C3', '#E6EE9C', '#DCE775', '#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717'],
  Yellow: ['#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17'],
  Orange: ['#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100'],
  Brown: ['#EFEBE9', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E', '#3E2723'],
  Gray: ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#212121'],
};
const matShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const design = [
  ['Navy Blue', '#000080'], ['Sage Green', '#B2AC88'], ['Terracotta', '#E2725B'], ['Burgundy', '#800020'],
  ['Deep UI Green', '#065F46'], ['Ocean Breeze Sky', '#0EA5E9'], ['Sunset Orange', '#F97316'], ['Purple Dream', '#7C3AED'],
  ['Facebook Blue', '#1877F2'], ['Twitter Blue', '#1DA1F2'], ['Google Blue', '#4285F4'], ['Spotify Green', '#1DB954'],
  ['Cream', '#FFF8F0'], ['Charcoal', '#111827'], ['Sand', '#D4C4A8'], ['Coral Accent', '#FF6B6B'],
  ['Mint UI', '#6EE7B7'], ['Hunter Green', '#355E3B'], ['Prussian Blue', '#003153'], ['Wine Red', '#722F37'],
  ['Brass Gold', '#B45309'], ['Ivory', '#FFFFF0'], ['Electric Blue', '#0066FF'], ['Cerulean', '#007BA7'],
  ['Scarlet', '#FF2400'], ['Amaranth', '#E52B50'], ['Taupe', '#483C32'], ['Espresso', '#4E312D'],
  ['Army Green', '#4B5320'], ['Safety Orange', '#FF7900'], ['Success Green', '#28A745'], ['Error Red', '#DC3545'],
  ['iOS Blue', '#007AFF'], ['Android Green', '#3DDC84'], ['Graphite', '#383838'], ['Rose Gold', '#B76E79'],
  ['Periwinkle', '#CCCCFF'], ['Seafoam', '#93E9BE'], ['Mulberry', '#C54B8C'], ['Jet Black', '#0A0A0A'],
];

const all = [
  ...CSS.map(([name, hex]) => ({ name, hex: hex.toUpperCase() })),
  ...Object.entries(tw).flatMap(([fam, vals]) => {
    const title = fam.charAt(0).toUpperCase() + fam.slice(1);
    return vals.map((h, i) => ({ name: `${title} ${shades[i]}`, hex: `#${h.toUpperCase()}` }));
  }),
  ...Object.entries(material).flatMap(([fam, vals]) =>
    vals.map((hex, i) => ({ name: `Material ${fam} ${matShades[i]}`, hex: hex.toUpperCase() }))
  ),
  ...design.map(([name, hex]) => ({ name, hex: hex.toUpperCase() })),
];

const byHex = new Map();
for (const c of all) {
  if (!byHex.has(c.hex)) byHex.set(c.hex, c);
}
const deduped = [...byHex.values()];
console.log('entries', deduped.length);

const out = `/** Auto-generated named color database (${deduped.length} unique colors). Run: node scripts/generate-color-database.mjs */\nexport const COLOR_NAME_DATABASE = ${JSON.stringify(deduped)};\n`;
fs.writeFileSync(path.join(root, 'lib', 'colorNameDatabase.js'), out);
