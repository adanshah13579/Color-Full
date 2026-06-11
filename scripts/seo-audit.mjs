import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const APP = path.join(ROOT, 'app');

const TOOL_PATHS = [
  '/tools/palette-generator',
  '/tools/contrast-checker',
  '/tools/color-mixer',
  '/tools/color-name-finder',
  '/tools/tint-shade-generator',
  '/tools/color-palette-preview',
];

const CLUSTER_MAP = {
  'forest-green': {
    pillar: '/blog/forest-green-hex-code',
    pages: [
      '/blog/forest-green',
      '/blog/forest-green-hex-code',
      '/blog/forest-green-color-palette',
      '/blog/forest-green-rgb',
      '/blog/olive-green-hex-code',
      '/blog/yellow-green-hex-code',
    ],
  },
  'sage-green': {
    pillar: '/blog/sage-green-hex-code',
    pages: [
      '/blog/sage-green-hex-code',
      '/blog/dusty-rose-hex-code',
      '/blog/olive-green-hex-code',
    ],
  },
  'navy-blue': {
    pillar: '/blog/navy-blue-hex-code',
    pages: ['/blog/navy-blue-hex-code', '/blog/navy-blue-color-palette'],
  },
  terracotta: {
    pillar: '/blog/terracotta-hex-code',
    pages: ['/blog/terracotta-hex-code', '/blog/terracotta-color-palette'],
  },
  burgundy: {
    pillar: '/blog/burgundy-hex-code',
    pages: ['/blog/burgundy-hex-code', '/blog/burgundy-color-palette'],
  },
  sunset: {
    pillar: '/blog/sunset-color-palette',
    pages: ['/blog/sunset-color-palette', '/blog/sunset-vibes'],
  },
  'pink-purple': {
    pillar: '/blog/pink-purple-color-name',
    pages: [
      '/blog/pink-purple-color-name',
      '/blog/pink-and-purple-color',
      '/blog/what-color-does-pink-and-purple-make',
      '/blog/mauve-color',
      '/blog/lavender-hex-code',
      '/blog/c4b5fd-color',
      '/blog/purple-dream',
      '/blog/pink-and-blue-color',
    ],
  },
  'dark-mode': {
    pillar: '/blog/dark-mode-color-palette',
    pages: [
      '/blog/dark-mode-color-palette',
      '/blog/accessible-dark-mode-color-palette',
      '/blog/discord-dark-mode-colors',
      '/blog/charcoal-hex-code',
    ],
  },
  'color-mixing': {
    pillar: '/blog/what-color-does-red-and-yellow-make',
    pages: [
      '/blog/what-color-does-red-and-yellow-make',
      '/blog/what-color-does-blue-and-yellow-make',
      '/blog/what-color-does-red-and-white-make',
      '/blog/what-color-does-pink-and-purple-make',
      '/blog/pink-and-purple-color',
      '/blog/pink-and-blue-color',
    ],
  },
  accessibility: {
    pillar: '/blog/how-to-check-color-contrast-accessibility',
    pages: [
      '/blog/how-to-check-color-contrast-accessibility',
      '/blog/accessibility-color-contrast-checker',
      '/blog/wcag-accessible-buttons-and-links',
      '/blog/accessible-dark-mode-color-palette',
      '/tools/contrast-checker',
    ],
  },
  'palette-preview': {
    pillar: '/tools/color-palette-preview',
    pages: [
      '/tools/color-palette-preview',
      '/tools/color-palette-preview/dashboard',
      '/tools/color-palette-preview/landing-page',
      '/tools/color-palette-preview/mobile-app',
    ],
  },
  'ocean-breeze': {
    pillar: '/blog/ocean-breeze-hex-code',
    pages: ['/blog/ocean-breeze', '/blog/ocean-breeze-hex-code'],
  },
  lavender: {
    pillar: '/blog/lavender-hex-code',
    pages: ['/blog/lavender-hex-code', '/blog/c4b5fd-color'],
  },
  'palette-strategy': {
    pillar: '/blog/how-to-generate-color-palette-for-brand',
    pages: [
      '/blog/how-to-generate-color-palette-for-brand',
      '/blog/60-30-10-color-rule',
      '/blog/best-neutral-colors-pair-with-brand',
      '/blog/color-palette-ideas-for-small-business',
      '/blog/ecommerce-color-palettes-product-first-vs-brand-first',
      '/blog/best-color-palette-tools-for-designers',
    ],
  },
};

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (['node_modules', '.next'].includes(ent.name)) continue;
      walk(p, files);
    } else if (ent.name === 'page.js' || ent.name === 'page.jsx') {
      files.push(p);
    }
  }
  return files;
}

function routeFromFile(f) {
  let rel = path.relative(APP, f).replace(/\\/g, '/');
  rel = rel.replace(/\/page\.(js|jsx)$/, '');
  if (!rel || rel === 'page.js') return '/';
  return `/${rel}`;
}

function extract(content, pattern) {
  const m = content.match(pattern);
  return m ? m[1] : null;
}

function countWords(content) {
  const text = content
    .replace(/import[\s\S]*?from\s+['"][^'"]+['"];?/g, ' ')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/.*/g, ' ')
    .replace(/className=\{?`[^`]*`}?/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[{}();,=`$]/g, ' ');
  return text.split(/\s+/).filter((w) => w.length > 2 && /[a-zA-Z]/.test(w)).length;
}

function getCluster(route) {
  for (const [name, cluster] of Object.entries(CLUSTER_MAP)) {
    if (cluster.pages.includes(route) || cluster.pillar === route) return { name, pillar: cluster.pillar };
  }
  return { name: null, pillar: null };
}

const pages = walk(APP);
const results = [];

for (const file of pages) {
  const content = fs.readFileSync(file, 'utf8');
  const route = routeFromFile(file);

  const title = extract(content, /title:\s*['"]([^'"]+)['"]/);
  const description =
    extract(content, /description:\s*\n\s*['"]([^'"]+)['"]/) ||
    extract(content, /description:\s*['"]([^'"]+)['"]/);
  const lastMod =
    extract(content, /LAST_MODIFIED\s*=\s*['"]([^'"]+)['"]/) ||
    extract(content, /modifiedTime:\s*['"]([^'"]+)['"]/) ||
    (content.includes('modifiedTime: LAST_MODIFIED') ? 'LAST_MODIFIED' : null);

  const hasH1 = /<h1[\s>]/.test(content);
  const hasFAQ = /FAQPage/.test(content);
  const hasSoftwareApp = /SoftwareApplication/.test(content);
  const hasArticle = /openGraphType:\s*['"]article['"]/.test(content);
  const hasCanonical = /buildPageMetadata/.test(content);
  const hasOG = /openGraph/.test(content) && /buildPageMetadata/.test(content);
  const hasBreadcrumb = /BreadcrumbList/.test(content) || /ToolBreadcrumbs/.test(content) || /breadcrumbSchema/.test(content);
  const hasCopyButton = /CopyableHex|CopyRow|showHexCopyIcon|clipboard/.test(content);

  const hrefLinks = [...content.matchAll(/href=["'](\/[^"'#?]+)["']/g)].map((m) => m[1]);
  const inlineLinks = [...content.matchAll(/InlineTagLink href=["'](\/[^"']+)["']/g)].map((m) => m[1]);
  const allLinks = [...new Set([...hrefLinks, ...inlineLinks])];

  const toolLink = TOOL_PATHS.some((t) => allLinks.some((l) => l === t || l.startsWith(`${t}/`)));
  const relatedLink = allLinks.some((l) => l.startsWith('/blog/') && l !== route);
  const { name: clusterName, pillar: clusterPillar } = getCluster(route);
  const clusterLink = clusterPillar ? allLinks.includes(clusterPillar) : false;

  results.push({
    route,
    file: path.relative(ROOT, file),
    title,
    titleLen: title?.length ?? 0,
    description: description ?? '',
    descLen: description?.length ?? 0,
    lastMod,
    hasH1,
    hasFAQ,
    hasSoftwareApp,
    hasArticle,
    hasCanonical,
    hasOG,
    hasBreadcrumb,
    hasCopyButton,
    linksOut: allLinks.length,
    allLinks,
    toolLink,
    relatedLink,
    clusterName,
    clusterPillar,
    clusterLink,
    wordCount: countWords(content),
  });
}

const inbound = {};
for (const r of results) inbound[r.route] = [];
for (const r of results) {
  for (const link of r.allLinks) {
    if (inbound[link]) inbound[link].push(r.route);
  }
}
for (const r of results) r.linksIn = inbound[r.route]?.length ?? 0;

// Cluster connectivity
const clusterReport = {};
for (const [name, cluster] of Object.entries(CLUSTER_MAP)) {
  const existing = cluster.pages.filter((p) => results.some((r) => r.route === p));
  const linksBetween = new Set();
  let totalPossible = existing.length * (existing.length - 1);
  let actual = 0;
  for (const page of existing) {
    const pr = results.find((r) => r.route === page);
    if (!pr) continue;
    for (const other of existing) {
      if (other !== page && pr.allLinks.includes(other)) {
        linksBetween.add(`${page}->${other}`);
        actual++;
      }
    }
  }
  const score = totalPossible === 0 ? 'weak' : actual / totalPossible > 0.15 ? 'strong' : actual / totalPossible > 0.05 ? 'medium' : 'weak';
  clusterReport[name] = { pillar: cluster.pillar, existing, linksBetween: linksBetween.size, score };
}

const blogAndTools = results.filter(
  (r) => r.route.startsWith('/blog/') || r.route.startsWith('/tools/')
);

const output = {
  totalPages: results.length,
  blogAndTools: blogAndTools.map((r) => ({
    route: r.route,
    title: r.title,
    titleLen: r.titleLen,
    descLen: r.descLen,
    description: r.description,
    lastMod: r.lastMod,
    linksOut: r.linksOut,
    linksIn: r.linksIn,
    toolLink: r.toolLink,
    clusterLink: r.clusterLink,
    clusterName: r.clusterName,
    clusterPillar: r.clusterPillar,
    relatedLink: r.relatedLink,
    wordCount: r.wordCount,
    hasH1: r.hasH1,
    hasFAQ: r.hasFAQ,
    hasSoftwareApp: r.hasSoftwareApp,
    hasArticle: r.hasArticle,
    hasCanonical: r.hasCanonical,
    hasOG: r.hasOG,
    hasBreadcrumb: r.hasBreadcrumb,
    hasCopyButton: r.hasCopyButton,
    links: r.allLinks,
  })),
  clusterReport,
  inboundHighlights: Object.fromEntries(
    blogAndTools
      .sort((a, b) => b.linksIn - a.linksIn)
      .slice(0, 15)
      .map((r) => [r.route, r.linksIn])
  ),
  zeroInbound: blogAndTools.filter((r) => r.linksIn === 0).map((r) => r.route),
};

fs.writeFileSync(path.join(ROOT, 'scripts', 'seo-audit-output.json'), JSON.stringify(output, null, 2));
console.log('Wrote scripts/seo-audit-output.json');
console.log('Pages:', output.totalPages, 'Blog+Tools:', blogAndTools.length);
