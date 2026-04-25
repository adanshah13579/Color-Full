import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://themeandcolor.com';

  const combinations = [
    'red-and-blue',
    'blue-and-yellow',
    'red-and-yellow',
    'blue-and-green',
    'red-and-green',
    'purple-and-yellow',
    'orange-and-blue',
    'pink-and-purple',
    'red-and-white',
    'blue-and-white',
    'black-and-white',
    'red-and-black',
    'yellow-and-green',
    'orange-and-red',
    'blue-and-purple',
    'green-and-yellow',
    'pink-and-blue',
    'brown-and-orange',
  ];

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/tools',
    '/tools/color-mixer',
    '/tools/palette-generator',
    '/tools/contrast-checker',
    '/blog',
    '/use-cases/colors-for-ui-and-web-design',
    '/use-cases/colors-for-branding-and-logos',
    '/use-cases/colors-for-fashion-design',
    '/use-cases/colors-for-automotive-design',
    '/use-cases/colors-for-industrial-products',
    '/palettes/black-and-gold',
    '/palettes/luxury-automotive-color-palettes',
  ];

  const blogPosts = [
    '/blog/forest-green',
    '/blog/forest-green-hex-code',
    '/blog/ocean-breeze',
    '/blog/ocean-breeze-hex-code',
    '/blog/sunset-vibes',
    '/blog/purple-dream',
    '/blog/accessible-dark-mode-color-palette',
    '/blog/best-color-palette-tools-for-designers',
    '/blog/how-to-generate-color-palette-for-brand',
    '/blog/how-to-check-color-contrast-accessibility',
    '/blog/10-color-trends-for-2025',
    '/blog/color-palette-ideas-for-small-business',
    '/blog/wcag-accessible-buttons-and-links',
    '/blog/ecommerce-color-palettes-product-first-vs-brand-first',
    '/blog/best-neutral-colors-pair-with-brand',
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const blogUrls = blogPosts.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const comboUrls = combinations.map((combo) => ({
    url: `${baseUrl}/tools/color-mixer/${combo}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...blogUrls, ...comboUrls];
}
