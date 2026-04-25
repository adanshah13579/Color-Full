import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = 'https://themeandcolor.com';
const APP_DIR = path.join(process.cwd(), 'app');
const BLOG_DIR = path.join(APP_DIR, 'blog');
const DYNAMIC_BLOG_PAGE = path.join(BLOG_DIR, '[slug]', 'page.js');

async function getBlogSlugsFromFolders() {
  const entries = await readdir(BLOG_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => !slug.startsWith('[') && slug !== 'components');
}

/**
 * Pull slugs defined in `staticPosts` from `app/blog/[slug]/page.js`.
 * This keeps sitemap aligned with dynamic route fallback content.
 */
async function getBlogSlugsFromDynamicSource() {
  const source = await readFile(DYNAMIC_BLOG_PAGE, 'utf8');
  const slugs = new Set();
  const slugKeyRegex = /'([^']+)'\s*:\s*\{/g;

  for (const match of source.matchAll(slugKeyRegex)) {
    const candidate = match[1];
    if (candidate && !candidate.includes(' ')) {
      slugs.add(candidate);
    }
  }

  return Array.from(slugs);
}

async function getAllBlogSlugs() {
  const [folderSlugs, dynamicSlugs] = await Promise.all([
    getBlogSlugsFromFolders(),
    getBlogSlugsFromDynamicSource(),
  ]);

  return Array.from(new Set([...folderSlugs, ...dynamicSlugs])).sort();
}

/** Static routes (non-blog). No URL changes. */
const staticRoutes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: 'about', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: 'terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: 'tools', priority: 0.9, changeFrequency: 'weekly' },
  { path: 'tools/palette-generator', priority: 0.9, changeFrequency: 'weekly' },
  { path: 'tools/contrast-checker', priority: 0.9, changeFrequency: 'weekly' },
  { path: 'blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: 'use-cases/colors-for-ui-and-web-design', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'use-cases/colors-for-branding-and-logos', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'use-cases/colors-for-fashion-design', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'use-cases/colors-for-automotive-design', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'use-cases/colors-for-industrial-products', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'palettes/black-and-gold', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'palettes/luxury-automotive-color-palettes', priority: 0.7, changeFrequency: 'monthly' },
];

export default async function sitemap() {
  const blogSlugs = await getAllBlogSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    path: `blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly',
  }));
  const routes = [...staticRoutes, ...blogRoutes];
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified,
    changeFrequency,
    priority,
  }));
}
