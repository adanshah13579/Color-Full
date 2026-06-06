const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

const getLuminance = (hex) => {
  const { r, g, b } = hexToRgb(hex);
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const channel = val / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

export function getContrastRatio(color1, color2) {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** Prefer `preferred` on `background` when contrast is sufficient; otherwise use white. */
export function pickReadableText(background, preferred, fallback = '#FFFFFF') {
  const preferredContrast = getContrastRatio(background, preferred);
  const fallbackContrast = getContrastRatio(background, fallback);
  if (preferredContrast >= 4.5) return preferred;
  return fallbackContrast > preferredContrast ? fallback : preferred;
}
