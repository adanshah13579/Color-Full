/**
 * Single source of truth for blog post URLs included in sitemap.xml.
 * Keep in sync with each app/blog/{slug}/page.js route and keys in app/blog/[slug]/page.js staticPosts.
 */
export const BLOG_SEGMENT_SLUGS = [
  '60-30-10-color-rule',
  'accessible-dark-mode-color-palette',
  'accessibility-color-contrast-checker',
  'best-color-palette-tools-for-designers',
  'burgundy-hex-code',
  'best-neutral-colors-pair-with-brand',
  'color-palette-ideas-for-small-business',
  'ecommerce-color-palettes-product-first-vs-brand-first',
  'forest-green',
  'forest-green-color-palette',
  'forest-green-hex-code',
  'how-to-check-color-contrast-accessibility',
  'how-to-generate-color-palette-for-brand',
  'olive-green-hex-code',
  'navy-blue-color-palette',
  'navy-blue-hex-code',
  'ocean-breeze',
  'ocean-breeze-hex-code',
  'purple-dream',
  'sage-green-hex-code',
  'sunset-vibes',
  'terracotta-hex-code',
  'wcag-accessible-buttons-and-links',
  'what-color-does-red-and-yellow-make',
  'what-color-does-blue-and-yellow-make',
  'what-color-does-red-and-white-make',
];

/** Posts rendered only via app/blog/[slug]/page.js (see staticPosts keys there). */
export const BLOG_DYNAMIC_SLUGS = ['10-color-trends-for-2025'];

export function getBlogPostPathsForSitemap() {
  const segment = BLOG_SEGMENT_SLUGS.map((slug) => `/blog/${slug}`);
  const dynamic = BLOG_DYNAMIC_SLUGS.map((slug) => `/blog/${slug}`);
  return [...segment, ...dynamic];
}
