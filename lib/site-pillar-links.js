/**
 * Editorial pillars for sitewide internal linking.
 * Used by Footer, blog index, tools hub, and homepage so high-traffic paths
 * pass crawl priority to money/guide URLs without duplicating strings everywhere.
 */
export const PILLAR_GUIDES = [
  { href: '/blog/forest-green-hex-code', label: 'Forest green hex code' },
  { href: '/blog/forest-green', label: 'Forest green palette' },
  { href: '/blog/ocean-breeze-hex-code', label: 'Ocean Breeze hex codes' },
  { href: '/blog/ocean-breeze', label: 'Ocean Breeze palette' },
  { href: '/blog/how-to-check-color-contrast-accessibility', label: 'WCAG contrast guide' },
  { href: '/blog/accessible-dark-mode-color-palette', label: 'Dark mode palettes' },
  { href: '/blog/best-color-palette-tools-for-designers', label: 'Best palette tools' },
];

export const TOOL_HUB_LINKS = [
  { href: '/tools/palette-generator', label: 'Palette generator' },
  { href: '/tools/contrast-checker', label: 'Contrast checker' },
];
