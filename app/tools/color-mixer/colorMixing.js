export const PRESET_COLORS = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Green', hex: '#008000' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Purple', hex: '#800080' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#000000' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Brown', hex: '#8B4513' },
];

const RYB_ANCHORS = [
  { ryb: [0, 0, 0], rgb: [0, 0, 0] },
  { ryb: [1, 0, 0], rgb: [255, 0, 0] },
  { ryb: [0, 1, 0], rgb: [255, 255, 0] },
  { ryb: [0, 0, 1], rgb: [0, 0, 255] },
  { ryb: [1, 1, 0], rgb: [255, 165, 0] },
  { ryb: [0, 1, 1], rgb: [0, 128, 0] },
  { ryb: [1, 0, 1], rgb: [128, 0, 128] },
  { ryb: [1, 1, 1], rgb: [255, 255, 255] },
];

const NAMED_COLORS = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Green', hex: '#008000' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Olive Green', hex: '#808000' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Navy', hex: '#000080' },
  { name: 'Brown', hex: '#8B4513' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'Violet', hex: '#7F00FF' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Lime', hex: '#32CD32' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
];

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function toLinear(v) {
  return Math.pow(v / 255, 2.2);
}

function fromLinear(v) {
  return Math.round(Math.pow(clamp01(v), 1 / 2.2) * 255);
}

function normalizeHex(hex) {
  const clean = (hex || '').trim().replace('#', '');
  if (!/^[a-fA-F0-9]{6}$/.test(clean)) return '#000000';
  return `#${clean.toUpperCase()}`;
}

export function hexToRgb(hex) {
  const normalized = normalizeHex(hex);
  return {
    r: parseInt(normalized.slice(1, 3), 16),
    g: parseInt(normalized.slice(3, 5), 16),
    b: parseInt(normalized.slice(5, 7), 16),
  };
}

export function rgbToHex({ r, g, b }) {
  const toHex = (value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/**
 * Trilinear interpolation on RYB anchor cube.
 */
export function rybToRgb(ryb) {
  const [rr, yy, bb] = ryb.map(clamp01);
  let sumWeight = 0;
  let r = 0;
  let g = 0;
  let b = 0;

  for (const anchor of RYB_ANCHORS) {
    const [ar, ay, ab] = anchor.ryb;
    const w =
      (ar ? rr : 1 - rr) *
      (ay ? yy : 1 - yy) *
      (ab ? bb : 1 - bb);
    sumWeight += w;
    r += anchor.rgb[0] * w;
    g += anchor.rgb[1] * w;
    b += anchor.rgb[2] * w;
  }

  if (sumWeight === 0) return { r: 0, g: 0, b: 0 };
  return {
    r: Math.round(r / sumWeight),
    g: Math.round(g / sumWeight),
    b: Math.round(b / sumWeight),
  };
}

/**
 * Approximate inverse mapping from RGB to RYB by searching cube.
 * Fast enough for instant UI updates at this scale.
 */
export function rgbToRyb(rgb) {
  const target = [rgb.r, rgb.g, rgb.b];
  let best = { ryb: [0, 0, 0], dist: Number.POSITIVE_INFINITY };
  const steps = [0, 0.5, 1];

  for (const r of steps) {
    for (const y of steps) {
      for (const b of steps) {
        const candidate = rybToRgb([r, y, b]);
        const dist =
          (candidate.r - target[0]) ** 2 +
          (candidate.g - target[1]) ** 2 +
          (candidate.b - target[2]) ** 2;
        if (dist < best.dist) best = { ryb: [r, y, b], dist };
      }
    }
  }

  let [cr, cy, cb] = best.ryb;
  const deltas = [0.25, 0.125, 0.0625, 0.03125];
  for (const delta of deltas) {
    let improved = true;
    while (improved) {
      improved = false;
      const neighbors = [
        [cr + delta, cy, cb],
        [cr - delta, cy, cb],
        [cr, cy + delta, cb],
        [cr, cy - delta, cb],
        [cr, cy, cb + delta],
        [cr, cy, cb - delta],
      ];

      for (const [nr, ny, nb] of neighbors) {
        const candidateRyb = [clamp01(nr), clamp01(ny), clamp01(nb)];
        const candidateRgb = rybToRgb(candidateRyb);
        const dist =
          (candidateRgb.r - target[0]) ** 2 +
          (candidateRgb.g - target[1]) ** 2 +
          (candidateRgb.b - target[2]) ** 2;
        if (dist + 0.0001 < best.dist) {
          best = { ryb: candidateRyb, dist };
          [cr, cy, cb] = candidateRyb;
          improved = true;
        }
      }
    }
  }

  return { r: cr, y: cy, b: cb };
}

export function mixHexColorsRyb(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  const ryb1 = rgbToRyb(rgb1);
  const ryb2 = rgbToRyb(rgb2);
  const mixedRyb = [
    (ryb1.r + ryb2.r) / 2,
    (ryb1.y + ryb2.y) / 2,
    (ryb1.b + ryb2.b) / 2,
  ];

  // Pigment-style darkness behavior via linear-space blending
  const mixedRgbByRyb = rybToRgb(mixedRyb);
  const blended = {
    r: fromLinear((toLinear(rgb1.r) + toLinear(rgb2.r) + toLinear(mixedRgbByRyb.r)) / 3),
    g: fromLinear((toLinear(rgb1.g) + toLinear(rgb2.g) + toLinear(mixedRgbByRyb.g)) / 3),
    b: fromLinear((toLinear(rgb1.b) + toLinear(rgb2.b) + toLinear(mixedRgbByRyb.b)) / 3),
  };

  const hex = rgbToHex(blended);
  return {
    hex,
    rgb: blended,
    ryb: { r: mixedRyb[0], y: mixedRyb[1], b: mixedRyb[2] },
  };
}

export function getClosestNamedColor(hex) {
  const target = hexToRgb(hex);
  let best = null;

  for (const color of NAMED_COLORS) {
    const sample = hexToRgb(color.hex);
    const dist =
      (target.r - sample.r) ** 2 +
      (target.g - sample.g) ** 2 +
      (target.b - sample.b) ** 2;
    if (!best || dist < best.dist) {
      best = { ...color, dist };
    }
  }

  return best?.name || 'Custom Mix';
}

export function getColorLabel(hex) {
  const normalized = normalizeHex(hex);
  const exact = PRESET_COLORS.find((c) => c.hex === normalized);
  return exact?.name || getClosestNamedColor(normalized);
}

export const MIX_COMBINATIONS = [
  ['red', 'blue'],
  ['blue', 'yellow'],
  ['red', 'yellow'],
  ['blue', 'green'],
  ['red', 'green'],
  ['purple', 'yellow'],
  ['orange', 'blue'],
  ['pink', 'purple'],
  ['red', 'white'],
  ['blue', 'white'],
  ['black', 'white'],
  ['red', 'black'],
];

export const PRESET_MAP = Object.fromEntries(
  PRESET_COLORS.map((c) => [c.name.toLowerCase(), c.hex])
);

export function getCombinationMix(color1Name, color2Name) {
  const hex1 = PRESET_MAP[color1Name.toLowerCase()];
  const hex2 = PRESET_MAP[color2Name.toLowerCase()];
  if (!hex1 || !hex2) return null;
  const result = mixHexColorsRyb(hex1, hex2);
  const closestName = getClosestNamedColor(result.hex);
  return {
    color1: { name: getColorLabel(hex1), hex: hex1 },
    color2: { name: getColorLabel(hex2), hex: hex2 },
    result: { ...result, closestName },
  };
}

export function toTitleCase(value) {
  return value
    .split(' ')
    .map((part) => (part ? `${part[0].toUpperCase()}${part.slice(1)}` : part))
    .join(' ');
}
