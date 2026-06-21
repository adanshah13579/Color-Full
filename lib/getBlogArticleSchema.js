const SITE_URL = 'https://themeandcolor.com';

export const BLOG_ARTICLE_DATE_MODIFIED = '2026-06-19';
export const BLOG_ARTICLE_DEFAULT_PUBLISHED = '2025-01-15';

/** @type {Record<string, string>} */
const BLOG_ARTICLE_PUBLISHED_DATES = {
  'forest-green-hex-code': '2026-04-11',
  'sage-green-hex-code': '2026-04-17',
  'navy-blue-hex-code': '2026-05-01',
  'navy-blue-color-palette': '2026-05-03',
  'forest-green-color-palette': '2026-05-03',
  'terracotta-hex-code': '2026-05-01',
  'terracotta-color-palette': '2026-05-10',
  'burgundy-hex-code': '2026-05-10',
  'burgundy-color-palette': '2026-05-10',
  'sunset-color-palette': '2026-05-15',
  'pink-purple-color-name': '2026-05-15',
  'discord-dark-mode-colors': '2026-05-15',
  'dark-mode-color-palette': '2026-05-10',
  'lavender-hex-code': '2026-05-15',
  'mauve-color': '2026-05-20',
  'forest-green-rgb': '2026-05-20',
  'charcoal-hex-code': '2026-05-20',
  'dusty-rose-hex-code': '2026-05-20',
  'yellow-green-hex-code': '2026-05-20',
  'olive-green-hex-code': '2026-05-20',
};

/**
 * @param {string} slug - Blog post slug (e.g. "forest-green-hex-code")
 * @returns {string} ISO date string YYYY-MM-DD
 */
export function getBlogArticleDatePublished(slug) {
  const clean = slug.replace(/^\/blog\//, '').replace(/^\//, '');
  return BLOG_ARTICLE_PUBLISHED_DATES[clean] ?? BLOG_ARTICLE_DEFAULT_PUBLISHED;
}

/**
 * Build JSON-LD Article schema for blog posts.
 * @param {string} title - Article headline (without site suffix)
 * @param {string} description
 * @param {string} slug - Blog post slug or /blog/slug path
 * @param {string} datePublished - YYYY-MM-DD
 * @param {string} [dateModified] - YYYY-MM-DD
 */
export function getBlogArticleSchema(title, description, slug, datePublished, dateModified = BLOG_ARTICLE_DATE_MODIFIED) {
  const slugClean = slug.replace(/^\/blog\//, '').replace(/^\//, '');

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slugClean}`,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'Theme & Color',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Theme & Color',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-default.png`,
      },
    },
  };
}
