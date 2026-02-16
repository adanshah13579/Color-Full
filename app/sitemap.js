const BASE_URL = "https://themeandcolor.com";

/** All indexable blog posts (static + dynamic). Single source of truth for blog URLs. */
const blogPosts = [
  "how-to-generate-color-palette-for-brand",
  "best-color-palette-tools-for-designers",
  "10-color-trends-for-2025",
];

/** Static routes (non-blog). No URL changes. */
const staticRoutes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "about", priority: 0.8, changeFrequency: "monthly" },
  { path: "contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "tools", priority: 0.9, changeFrequency: "weekly" },
  { path: "tools/palette-generator", priority: 0.9, changeFrequency: "weekly" },
  { path: "tools/contrast-checker", priority: 0.9, changeFrequency: "weekly" },
  { path: "blog", priority: 0.9, changeFrequency: "weekly" },
  { path: "use-cases/colors-for-ui-and-web-design", priority: 0.8, changeFrequency: "monthly" },
  { path: "use-cases/colors-for-branding-and-logos", priority: 0.8, changeFrequency: "monthly" },
  { path: "use-cases/colors-for-fashion-design", priority: 0.8, changeFrequency: "monthly" },
  { path: "use-cases/colors-for-automotive-design", priority: 0.8, changeFrequency: "monthly" },
  { path: "use-cases/colors-for-industrial-products", priority: 0.8, changeFrequency: "monthly" },
  { path: "palettes/black-and-gold", priority: 0.7, changeFrequency: "monthly" },
  { path: "palettes/luxury-automotive-color-palettes", priority: 0.7, changeFrequency: "monthly" },
];

const blogRouteEntries = blogPosts.map((slug) => ({
  path: `blog/${slug}`,
  priority: 0.8,
  changeFrequency: "monthly",
}));

const routes = [...staticRoutes, ...blogRouteEntries];

export default async function sitemap() {
  const now = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
