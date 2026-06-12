const SITE_URL = 'https://themeandcolor.com';
const SITE_NAME = 'Theme & Color';
const TITLE_SUFFIX = ' | Theme & Color';

/**
 * Standard SEO metadata for Theme & Color pages (canonical, Open Graph, Twitter).
 * @param {object} opts
 * @param {string} opts.path - URL path starting with / (e.g. "/about", "/blog/ocean-breeze")
 * @param {string} opts.title - Page title without suffix, or full title if it already includes "| Theme & Color"
 * @param {string} opts.description
 * @param {string[]|string} [opts.keywords]
 * @param {'website'|'article'} [opts.openGraphType]
 * @param {Record<string, unknown>} [opts.openGraph] - merged after defaults (e.g. images, publishedTime)
 * @param {Record<string, unknown>} [opts.twitter] - merged after defaults (e.g. images)
 * @param {import('next').Metadata['robots']} [opts.robots] - override default index/follow
 */
export function buildPageMetadata({
  path,
  title,
  description,
  keywords = [],
  openGraphType = 'website',
  openGraph: openGraphExtra = {},
  twitter: twitterExtra = {},
  robots: robotsOverride,
}) {
  const pathClean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  const url = `${SITE_URL}${pathClean}`;
  const fullTitle = title.includes('| Theme & Color') ? title : `${title}${TITLE_SUFFIX}`;
  const shortTitle = fullTitle.replace(/\s*\|\s*Theme & Color\s*$/, '').trim();

  let keywordArray = [];
  if (Array.isArray(keywords)) {
    keywordArray = keywords;
  } else if (typeof keywords === 'string') {
    keywordArray = keywords
      .split(',')
      .map((k) => k.trim())
      .filter(Boolean);
  }

  const defaultOgImage = {
    url: '/og-default.png',
    width: 1200,
    height: 630,
    alt: shortTitle,
  };

  return {
    title: fullTitle,
    description,
    keywords: keywordArray,
    robots: robotsOverride ?? {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: shortTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: openGraphType,
      images: [defaultOgImage],
      ...openGraphExtra,
    },
    twitter: {
      card: 'summary_large_image',
      title: shortTitle,
      description,
      images: ['/og-default.png'],
      ...twitterExtra,
    },
    alternates: {
      canonical: url,
    },
  };
}
