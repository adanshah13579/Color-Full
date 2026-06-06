export const DEFAULT_PALETTE = {
  primary: '1E40AF',
  secondary: '3B82F6',
  accent: 'F59E0B',
  background: 'F8FAFC',
  text: '1E293B',
};

export const PALETTE_LABELS = ['Primary', 'Secondary', 'Accent', 'Background', 'Text'];

export const PALETTE_KEYS = ['primary', 'secondary', 'accent', 'background', 'text'];

const hslToHex = (h, s, l) => {
  const hue = ((h % 360) + 360) % 360;
  const sat = s / 100;
  const light = l / 100;
  const a = sat * Math.min(light, 1 - light);
  const f = (n) => {
    const k = (n + hue / 30) % 12;
    const color = light - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `${f(0)}${f(8)}${f(4)}`.toUpperCase();
};

export function generateHarmoniousPalette() {
  const hue = Math.floor(Math.random() * 360);
  return {
    primary: hslToHex(hue, 70, 35),
    secondary: hslToHex(hue + 30, 60, 55),
    accent: hslToHex(hue + 60, 80, 50),
    background: hslToHex(hue, 20, 97),
    text: hslToHex(hue, 30, 15),
  };
}

export function normalizeHexParam(raw) {
  if (!raw || typeof raw !== 'string') return null;
  const cleaned = raw.trim().replace(/^#/, '');
  if (!/^[a-fA-F0-9]{6}$/.test(cleaned)) return null;
  return cleaned.toUpperCase();
}

export function parsePaletteFromSearchParams(searchParams) {
  const paramMap = {
    primary: 'primary',
    secondary: 'secondary',
    accent: 'accent',
    bg: 'background',
    background: 'background',
    text: 'text',
  };

  const next = { ...DEFAULT_PALETTE };
  let hasAny = false;

  for (const [param, key] of Object.entries(paramMap)) {
    const value = normalizeHexParam(searchParams.get(param));
    if (value) {
      next[key] = value;
      hasAny = true;
    }
  }

  return hasAny ? next : null;
}

export function buildPaletteQueryString(palette) {
  return new URLSearchParams({
    primary: palette.primary,
    secondary: palette.secondary,
    accent: palette.accent,
    bg: palette.background,
    text: palette.text,
  }).toString();
}

export function appendPaletteToHref(href, palette) {
  const path = href.split('?')[0];
  return `${path}?${buildPaletteQueryString(palette)}`;
}

export function buildShareUrl(palette, originOrOptions) {
  let origin;
  let pathname = '/tools/color-palette-preview';

  if (typeof originOrOptions === 'string') {
    origin = originOrOptions;
  } else if (originOrOptions) {
    origin = originOrOptions.origin;
    if (originOrOptions.pathname) pathname = originOrOptions.pathname;
  }

  const base =
    origin || (typeof window !== 'undefined' ? window.location.origin : 'https://themeandcolor.com');

  if (!originOrOptions?.pathname && typeof window !== 'undefined') {
    pathname = window.location.pathname;
  }

  return `${base}${pathname}?${buildPaletteQueryString(palette)}`;
}

export function resolvePaletteColors(palette, defaults = DEFAULT_PALETTE) {
  const resolved = {};
  for (const key of PALETTE_KEYS) {
    const hex = palette[key];
    resolved[key] = hex?.length === 6 ? `#${hex}` : `#${defaults[key]}`;
  }
  return resolved;
}

export function applyDarkModeSwap(colors) {
  return {
    ...colors,
    background: colors.text,
    text: colors.background,
  };
}

export function formatPaletteCssVariables(colors) {
  return `:root {
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
  --color-background: ${colors.background};
  --color-text: ${colors.text};
}`;
}

export function formatPaletteTailwind(colors) {
  return `colors: {
  primary: '${colors.primary}',
  secondary: '${colors.secondary}',
  accent: '${colors.accent}',
  background: '${colors.background}',
  text: '${colors.text}',
}`;
}
