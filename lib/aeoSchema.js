const SITE_URL = 'https://themeandcolor.com';

/**
 * Build FAQPage JSON-LD for AEO — use exact phrasing people type into Google and AI chat.
 * @param {{ name: string, text: string }[]} items
 */
export function buildFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ name, text }) => ({
      '@type': 'Question',
      name,
      acceptedAnswer: { '@type': 'Answer', text },
    })),
  };
}

/**
 * WebApplication schema for free tools (AEO + rich results).
 * @param {{ name: string, description: string, path: string, featureList?: string[] }} opts
 */
export function buildWebApplicationSchema({ name, description, path, featureList = [] }) {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    browserRequirements: 'Requires JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    ...(featureList.length > 0 ? { featureList } : {}),
  };
}
