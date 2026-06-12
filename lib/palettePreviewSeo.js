import { buildPageMetadata } from './buildPageMetadata';
import { hasPaletteQueryParams } from './paletteUtils';

const SITE_URL = 'https://themeandcolor.com';
const NOINDEX_ROBOTS = {
  index: false,
  follow: true,
  googleBot: { index: false, follow: true },
};

/** @typedef {{ path: string; title: string; description: string; keywords: string[]; h1: string; subtitle: string; softwareName: string; softwareDescription: string }} PalettePreviewSeoConfig */

/** Hub — targets “color palette preview”, “palette visualizer”, website/UI mockup intent */
export const PALETTE_PREVIEW_HUB_SEO = {
  path: '/tools/color-palette-preview',
  title: 'Color Palette Preview Tool — Website, Dashboard & App UI',
  description:
    'Free color palette preview tool. See brand colors on website, dashboard, landing page and mobile app mockups before you design. Test UI color schemes online.',
  keywords: [
    'color palette preview',
    'color palette preview tool',
    'palette visualizer',
    'website color palette preview',
    'preview color palette on website',
    'UI color palette mockup',
    'brand color preview tool',
    'test website colors online',
    'color scheme preview tool',
    'web design color preview',
    'website mockup color tool',
    'preview brand colors on UI',
  ],
  h1: 'Color Palette Preview Tool',
  subtitle: 'Preview your color palette on a real website, dashboard, landing page or mobile app UI',
  softwareName: 'Color Palette Preview Tool',
  softwareDescription:
    'Free online color palette preview tool. See brand colors on dashboard, landing page and mobile app mockups before you design or ship code.',
};

/** Dashboard — targets admin/SaaS/data dashboard color scheme queries */
export const PALETTE_PREVIEW_DASHBOARD_SEO = {
  path: '/tools/color-palette-preview/dashboard',
  title: 'Dashboard Color Palette — Preview Admin & SaaS UI Mockup',
  description:
    'Preview your dashboard color palette on an admin UI mockup. Test SaaS sidebar, KPI cards, charts and alert colors before you ship. Free dashboard color scheme tool.',
  keywords: [
    'dashboard color palette',
    'admin dashboard color scheme',
    'SaaS dashboard color palette',
    'UI dashboard color preview',
    'data dashboard colors',
    'dashboard design color palette',
    'dark dashboard color palette',
    'preview colors on dashboard',
    'admin panel color scheme',
    'dashboard mockup colors',
    'analytics dashboard palette',
    'backend admin UI colors',
  ],
  h1: 'Dashboard Color Palette Preview',
  subtitle: 'Preview your dashboard color scheme on a realistic admin and SaaS UI mockup',
  softwareName: 'Dashboard Color Palette Preview',
  softwareDescription:
    'Preview your dashboard color palette on an admin mockup with sidebar, stats cards, charts, and activity lists. Free SaaS UI color scheme tool.',
};

/** Landing page — targets marketing/hero/CTA color scheme queries */
export const PALETTE_PREVIEW_LANDING_SEO = {
  path: '/tools/color-palette-preview/landing-page',
  title: 'Landing Page Color Palette — Preview Hero, CTA & Marketing UI',
  description:
    'Preview your landing page color palette on a marketing mockup. See hero, features, CTA buttons and footer in brand colors. Free landing page color scheme tool.',
  keywords: [
    'landing page color palette',
    'landing page color scheme',
    'website hero color palette',
    'marketing page color palette',
    'landing page design colors',
    'CTA button color preview',
    'hero section color palette',
    'preview landing page colors',
    'conversion page color scheme',
    'startup landing page colors',
    'SaaS landing page palette',
    'free landing page color tool',
  ],
  h1: 'Landing Page Color Palette Preview',
  subtitle: 'Preview your landing page color scheme on a marketing page with hero, features and CTA',
  softwareName: 'Landing Page Color Palette Preview',
  softwareDescription:
    'Preview your landing page color palette on a marketing mockup with hero, features, pricing, CTA, and footer sections. Free color scheme tool.',
};

/** Mobile app — targets app UI / phone mockup color scheme queries */
export const PALETTE_PREVIEW_MOBILE_SEO = {
  path: '/tools/color-palette-preview/mobile-app',
  title: 'Mobile App Color Palette — Preview Phone UI Mockup Online',
  description:
    'Preview your mobile app color palette on a phone UI mockup. Test headers, cards, lists and tab bar colors before development. Free app color scheme preview tool.',
  keywords: [
    'mobile app color palette',
    'app UI color scheme',
    'mobile UI color palette',
    'app design color preview',
    'phone app mockup colors',
    'iOS app color palette',
    'Android app color scheme',
    'mobile interface colors',
    'preview app brand colors',
    'mobile app theme colors',
    'app navigation bar colors',
    'free mobile color palette tool',
  ],
  h1: 'Mobile App Color Palette Preview',
  subtitle: 'Preview your app color scheme on a phone UI with navigation, cards and tab bar',
  softwareName: 'Mobile App Color Palette Preview',
  softwareDescription:
    'Preview your mobile app color palette on a phone mockup with navigation, cards, lists, and bottom tabs. Free app UI color scheme tool.',
};

/**
 * Metadata for palette preview tool pages. Palette query URLs are noindex so Google
 * indexes only the canonical clean URLs.
 * @param {PalettePreviewSeoConfig & { searchParams?: Record<string, string | string[] | undefined> }} opts
 */
export function buildPalettePreviewPageMetadata({ path, title, description, keywords, searchParams }) {
  const noindexStateUrl = hasPaletteQueryParams(searchParams);

  return buildPageMetadata({
    path,
    title,
    description,
    keywords,
    robots: noindexStateUrl ? NOINDEX_ROBOTS : undefined,
  });
}

/**
 * @param {Pick<PalettePreviewSeoConfig, 'path' | 'softwareName' | 'softwareDescription'>} opts
 */
export function buildPalettePreviewSoftwareSchema({ path, softwareName, softwareDescription }) {
  const pathClean = path.startsWith('/') ? path : `/${path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: softwareName,
    description: softwareDescription,
    url: `${SITE_URL}${pathClean}`,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function buildPalettePreviewWebPageSchema({ path, name, description }) {
  const pathClean = path.startsWith('/') ? path : `/${path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${pathClean}#webpage`,
    url: `${SITE_URL}${pathClean}`,
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'en-US',
  };
}

export const PREVIEW_HUB_ITEM_LIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Color palette preview mockups',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Dashboard color palette preview',
      url: `${SITE_URL}/tools/color-palette-preview/dashboard`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Landing page color palette preview',
      url: `${SITE_URL}/tools/color-palette-preview/landing-page`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Mobile app color palette preview',
      url: `${SITE_URL}/tools/color-palette-preview/mobile-app`,
    },
  ],
};
