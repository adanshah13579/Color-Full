const SITE_URL = 'https://themeandcolor.com';

/**
 * Build JSON-LD BreadcrumbList schema for blog posts.
 * @param {string} postTitle
 * @param {string} slug - Blog post slug or /blog/slug path
 */
export function getBlogBreadcrumbSchema(postTitle, slug) {
  const slugClean = slug.replace(/^\/blog\//, '').replace(/^\//, '');

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: postTitle,
        item: `${SITE_URL}/blog/${slugClean}`,
      },
    ],
  };
}
