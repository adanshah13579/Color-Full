import { hexToRgb, normalizeHexInput, rgbToHex } from './colorNameFinderUtils';

export function mixWithWhite(rgb, whitePercent) {
  const t = whitePercent / 100;
  return {
    r: Math.round(rgb.r + (255 - rgb.r) * t),
    g: Math.round(rgb.g + (255 - rgb.g) * t),
    b: Math.round(rgb.b + (255 - rgb.b) * t),
  };
}

export function mixWithBlack(rgb, blackPercent) {
  const t = blackPercent / 100;
  return {
    r: Math.round(rgb.r * (1 - t)),
    g: Math.round(rgb.g * (1 - t)),
    b: Math.round(rgb.b * (1 - t)),
  };
}

const TINT_PERCENTS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95];
const SHADE_PERCENTS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95];

export function generateTintShadeScale(hexInput) {
  const baseHex = normalizeHexInput(hexInput);
  const rgb = hexToRgb(baseHex);
  if (!rgb) return null;

  const tints = TINT_PERCENTS.map((pct) => {
    const mixed = mixWithWhite(rgb, pct);
    return {
      percent: pct,
      label: `${pct}% white`,
      hex: rgbToHex(mixed),
      rgb: mixed,
    };
  });

  const shades = SHADE_PERCENTS.map((pct) => {
    const mixed = mixWithBlack(rgb, pct);
    return {
      percent: pct,
      label: `${pct}% black`,
      hex: rgbToHex(mixed),
      rgb: mixed,
    };
  });

  return { baseHex, rgb, tints, shades };
}

export function formatCssVariables(scale) {
  const lines = [':root {'];
  for (const t of scale.tints) {
    lines.push(`  --color-tint-${t.percent}: ${t.hex};`);
  }
  lines.push(`  --color-base: ${scale.baseHex};`);
  for (const s of scale.shades) {
    lines.push(`  --color-shade-${s.percent}: ${s.hex};`);
  }
  lines.push('}');
  return lines.join('\n');
}

/** Map 10 tints + base + 10 shades → Tailwind 100–900 (500 = base). */
export function formatTailwindConfig(scale) {
  const pickTint = (idx) => scale.tints[idx]?.hex ?? scale.baseHex;
  const pickShade = (idx) => scale.shades[idx]?.hex ?? scale.baseHex;
  const lastTint = scale.tints.length - 1;
  const lastShade = scale.shades.length - 1;

  return `colors: {
  brand: {
    100: '${pickTint(lastTint)}',
    200: '${pickTint(Math.max(0, lastTint - 2))}',
    300: '${pickTint(Math.max(0, lastTint - 4))}',
    400: '${pickTint(Math.max(0, lastTint - 6))}',
    500: '${scale.baseHex}',
    600: '${pickShade(1)}',
    700: '${pickShade(3)}',
    800: '${pickShade(5)}',
    900: '${pickShade(lastShade)}',
  }
}`;
}
