/** @typedef {{ name: string, hex: string }} NamedColor */

export function normalizeHexInput(input) {
  const clean = (input || '').trim().replace(/^#/, '');
  if (clean.length === 3 && /^[a-fA-F0-9]{3}$/.test(clean)) {
    const expanded = clean
      .split('')
      .map((c) => c + c)
      .join('');
    return `#${expanded.toUpperCase()}`;
  }
  if (/^[a-fA-F0-9]{6}$/.test(clean)) {
    return `#${clean.toUpperCase()}`;
  }
  return null;
}

export function hexToRgb(hex) {
  const normalized = normalizeHexInput(hex);
  if (!normalized) return null;
  return {
    r: parseInt(normalized.slice(1, 3), 16),
    g: parseInt(normalized.slice(3, 5), 16),
    b: parseInt(normalized.slice(5, 7), 16),
  };
}

export function rgbToHex({ r, g, b }) {
  const toHex = (v) =>
    Math.max(0, Math.min(255, Math.round(v)))
      .toString(16)
      .padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

export function rgbToHsl(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case rn:
        h = ((gn - bn) / delta) % 6;
        break;
      case gn:
        h = (bn - rn) / delta + 2;
        break;
      default:
        h = (rn - gn) / delta + 4;
        break;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  return {
    h,
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function rgbToCmyk(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const k = 1 - Math.max(rn, gn, bn);
  if (k >= 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }
  const c = Math.round(((1 - rn - k) / (1 - k)) * 100);
  const m = Math.round(((1 - gn - k) / (1 - k)) * 100);
  const y = Math.round(((1 - bn - k) / (1 - k)) * 100);
  return { c, m, y, k: Math.round(k * 100) };
}

export function formatRgb({ r, g, b }) {
  return `rgb(${r}, ${g}, ${b})`;
}

export function formatHsl({ h, s, l }) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function formatCmyk({ c, m, y, k }) {
  return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
}

export function rgbDistance(a, b) {
  return (a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2;
}

/**
 * @param {{ r: number, g: number, b: number }} rgb
 * @param {NamedColor[]} database
 */
export function findClosestNamedColor(rgb, database) {
  let best = null;
  let bestDist = Infinity;
  for (const entry of database) {
    const sample = hexToRgb(entry.hex);
    if (!sample) continue;
    const dist = rgbDistance(rgb, sample);
    if (dist < bestDist) {
      bestDist = dist;
      best = { ...entry, distance: dist };
    }
  }
  return best;
}

/**
 * @param {{ r: number, g: number, b: number }} rgb
 * @param {NamedColor[]} database
 * @param {number} count
 */
export function findSimilarNamedColors(rgb, database, count = 5) {
  const ranked = database
    .map((entry) => {
      const sample = hexToRgb(entry.hex);
      if (!sample) return null;
      return { ...entry, distance: rgbDistance(rgb, sample) };
    })
    .filter(Boolean)
    .sort((a, b) => a.distance - b.distance);

  const seen = new Set();
  const results = [];
  for (const item of ranked) {
    const key = item.hex.toUpperCase();
    if (seen.has(key)) continue;
    seen.add(key);
    results.push(item);
    if (results.length >= count + 1) break;
  }

  return results.slice(1, count + 1);
}

export function getColorResult(hexInput, database) {
  const hex = normalizeHexInput(hexInput);
  if (!hex) return null;
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
  const closest = findClosestNamedColor(rgb, database);
  const similar = findSimilarNamedColors(rgb, database, 5);

  return {
    hex,
    rgb,
    hsl,
    cmyk,
    rgbFormatted: formatRgb(rgb),
    hslFormatted: formatHsl(hsl),
    cmykFormatted: formatCmyk(cmyk),
    closest,
    similar,
  };
}
