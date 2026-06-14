import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { PaletteQuickAnswer, PaletteShadesTable } from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';

export const metadata = buildPageMetadata({
  path: '/blog/forest-green-color-palette',
  canonicalPath: '/blog/forest-green-hex-code',
  title: 'Forest Green Color Palette: Hex Codes, Shades & Combinations',
  description:
    'Forest green color palette hex codes starting with #228B22. See shades, pairings with brown, cream and terracotta, and UI examples for eco and wellness brands.',
  keywords: [
    'forest green color palette',
    'forest green color scheme',
    'forest green combinations',
    '#228B22',
    'eco palette',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: '2026-05-21T00:00:00.000Z',
  },
});
const articleSchema = getBlogArticleSchema(
  'Forest Green Color Palette: Hex Codes, Shades & Combinations',
  'Forest green color palette hex codes starting with #228B22. See shades, pairings with brown, cream and terracotta, and UI examples for eco and wellness brands.',
  'forest-green-color-palette',
  getBlogArticleDatePublished('forest-green-color-palette'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const QUICK_ROWS = [
  { label: 'Hex', value: '#228B22' },
  { label: 'RGB', value: 'rgb(34, 139, 34)' },
  { label: 'Deep UI green', value: '#065F46' },
];

const FOREST_COMBINATIONS = [
  {
    title: 'Forest + Cream + Brown + Tan',
    body: 'Earthy editorial and outdoor brands: forest anchors (#228B22), cream reading surfaces (#FFF8F0), brown typography (#5C4033), and tan (#D2B48C) for borders and illustration fills.',
    swatches: [
      { hex: '#228B22', label: 'Forest' },
      { hex: '#FFF8F0', label: 'Cream' },
      { hex: '#5C4033', label: 'Brown' },
      { hex: '#D2B48C', label: 'Tan' },
    ],
  },
  {
    title: 'Forest + Terracotta + Sand + White',
    body: 'Wellness and Mediterranean lifestyle: terracotta CTAs (#E2725B), sand section backgrounds (#D4C4A8), white product cards (#FFFFFF), forest for navigation and trust.',
    swatches: [
      { hex: '#228B22', label: 'Forest' },
      { hex: '#E2725B', label: 'Terracotta' },
      { hex: '#D4C4A8', label: 'Sand' },
      { hex: '#FFFFFF', label: 'White' },
    ],
  },
  {
    title: 'Forest + Navy + White + Gold',
    body: 'Premium eco-finance and heritage outdoor: navy structure (#000080) with forest success states (#228B22), gold rules (#FFD700), white data panels.',
    swatches: [
      { hex: '#228B22', label: 'Forest' },
      { hex: '#000080', label: 'Navy' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#FFD700', label: 'Gold' },
    ],
  },
  {
    title: 'Forest + Black + White + Light Gray',
    body: 'Minimal product UI: charcoal-black text (#111827) on white, forest primary buttons (#228B22), light gray (#E5E7EB) zebra rows—high contrast without neon accents.',
    swatches: [
      { hex: '#228B22', label: 'Forest' },
      { hex: '#111827', label: 'Black' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#E5E7EB', label: 'Light gray' },
    ],
  },
  {
    title: 'Forest + Dusty Rose + Cream + Sage',
    body: 'Spa, beauty, and calm lifestyle: dusty rose highlights (#D4A5A5), cream body (#FAF9F6), sage secondary (#B2AC88), forest for headers and eco badges.',
    swatches: [
      { hex: '#228B22', label: 'Forest' },
      { hex: '#D4A5A5', label: 'Dusty rose' },
      { hex: '#FAF9F6', label: 'Cream' },
      { hex: '#B2AC88', label: 'Sage' },
    ],
  },
];

const FOREST_SHADES = [
  { name: 'Honeydew', hex: '#F0FFF0' },
  { name: 'Mint cream', hex: '#F5FFFA' },
  { name: 'Light green', hex: '#90EE90' },
  { name: 'Medium sea green', hex: '#3CB371' },
  { name: 'Forest green (CSS)', hex: '#228B22' },
  { name: 'Office green', hex: '#008000' },
  { name: 'Hunter green', hex: '#355E3B' },
  { name: 'Bottle green', hex: '#006A4E' },
  { name: 'Dark green', hex: '#006400' },
  { name: 'Deep forest', hex: '#1A4D1A' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#228B22', colorName: 'Forest', rgbCode: 'rgb(34, 139, 34)' },
  { hexCode: '#E2725B', colorName: 'Terracotta', rgbCode: 'rgb(226, 114, 91)' },
  { hexCode: '#FFF8F0', colorName: 'Cream', rgbCode: 'rgb(255, 248, 240)' },
  { hexCode: '#B2AC88', colorName: 'Sage', rgbCode: 'rgb(178, 172, 136)' },
  { hexCode: '#065F46', colorName: 'Deep UI green', rgbCode: 'rgb(6, 95, 70)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a forest green color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A forest green color palette centers on #228B22 (CSS forestgreen) or a deeper UI green such as #065F46, plus neutrals (cream, tan, gray) and one warm accent (terracotta, dusty rose, or gold). Name each role in your design system so web and print stay aligned.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good forest green color scheme for websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strong forest green color schemes use forest for navigation and primary actions, off-white or cream for content wells, charcoal or brown for body text, and terracotta or rose sparingly for CTAs. Verify every text-on-green pair with a WCAG contrast checker.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best forest green combinations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popular forest green combinations include forest + cream + brown + tan for earthy brands, forest + terracotta + sand + white for wellness, forest + navy + gold for premium eco-finance, and forest + dusty rose + sage for spa and lifestyle products.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many greens should a forest palette include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use one canonical forest hex, three to five tints or shades for surfaces and borders, plus two neutrals and one accent. More than eight greens without token names causes teams to pick random hex values in mockups.',
      },
    },
  ],
};

function ForestCombinationCard({ combo }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{combo.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{combo.body}</p>
      <div className="grid grid-cols-4 gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 mb-2">
        {combo.swatches.map((s) => (
          <div key={s.hex} className="aspect-[4/3] min-h-[2.5rem]" style={{ backgroundColor: s.hex }} title={`${s.label} ${s.hex}`} aria-hidden />
        ))}
      </div>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-gray-600 dark:text-gray-400">
        {combo.swatches.map((s) => (
          <li key={s.hex}>
            <span className="text-gray-500 dark:text-gray-500">{s.label}:</span> {s.hex}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function ForestGreenColorPalettePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="forest-green-color-palette" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Forest Green Color Palette: Hex Codes, Shades &amp; Combinations
            </h1>
            <p className="text-emerald-100 text-lg max-w-3xl mb-6">
              Build a complete <strong className="text-white font-semibold">forest green color palette</strong> from #228B22—five copy-ready{' '}
              <strong className="text-white font-semibold">forest green combinations</strong> for eco, wellness, and outdoor brands.
            </p>
            <div className="flex items-center gap-4 text-emerald-100 text-sm">
              <time dateTime="2026-05-21">May 21, 2026</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <PaletteQuickAnswer
                  theme="forest"
                  ariaLabel="Forest green palette quick answer"
                  headline="Forest Green = #228B22"
                  subtext="CSS named color forestgreen—copy hex or RGB, or use #065F46 for deeper UI chrome."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    A mature <strong className="text-gray-900 dark:text-white">forest green color palette</strong> balances one recognizable anchor (
                    <strong className="text-gray-900 dark:text-white">#228B22</strong>), stepped greens for hover and borders, warm neutrals for long reading, and a single accent that carries emotion—terracotta for Mediterranean warmth, dusty rose for spa calm, navy and gold for premium trust. Unlike a one-swatch mood board, a full{' '}
                    <strong className="text-gray-900 dark:text-white">forest green color scheme</strong> names roles: primary, surface, text, accent. That discipline keeps engineers, marketers, and agencies aligned when campaigns ship weekly.
                  </p>
                </div>

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40 p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Forest Green Color Palette Combinations</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Five four-color <strong className="text-gray-900 dark:text-white">forest green combinations</strong> with swatches and hex labels. Use forest for roughly 60% of visible structure, neutrals for 30%, and accent for 10%—see our{' '}
                    <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 color rule</InlineTagLink> for proportion tips.
                  </p>
                  <ul className="space-y-4">
                    {FOREST_COMBINATIONS.map((combo) => (
                      <ForestCombinationCard key={combo.title} combo={combo} />
                    ))}
                  </ul>
                </div>

                <PaletteShadesTable
                  title="Forest Green Shades"
                  description="Ten greens from airy tints to deep forest. Use lighter rows for backgrounds; #228B22 or hunter green for navigation and primary actions."
                  shades={FOREST_SHADES}
                />

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 bg-white dark:bg-gray-800/40">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Forest Green in UI &amp; Web Design</h2>
                  <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Sustainability dashboards.</strong> Deep UI green (#065F46) for sidebar chrome, #228B22 for positive metrics and primary buttons, cream (#FFF8F0) canvas, and tan (#D2B48C) chart gridlines. White numerals on forest pass at large sizes—validate 14px table text with the{' '}
                      <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Wellness checkout flows.</strong> Terracotta pay buttons (#E2725B) on white cards, forest progress steps (#228B22), sand section dividers (#D4C4A8). Keep error states a distinct red so success green is never confused with warnings.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Outdoor retail and membership apps.</strong> Forest + black + white + light gray delivers crisp product grids: #111827 body copy, #228B22 loyalty badges, #E5E7EB skeleton loaders. Generate hover ramps from #228B22 in the{' '}
                      <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> instead of lightening green by eye—which often shifts hue toward mint unintentionally.
                    </p>
                    <p>
                      Across UI patterns, treat the <strong className="text-gray-900 dark:text-white">forest green color scheme</strong> as structure: photography and charts carry saturation; green carries navigation, success, and eco credentials. Re-test focus rings whenever border radius or font weight changes—rounded forest buttons fail contrast sooner than square ones.
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Forest Green in Branding</h2>
                  <p className="mb-4">
                    Eco labels, outdoor gear, and agricultural cooperatives adopt a <strong className="text-gray-900 dark:text-white">forest green color palette</strong> because it signals growth and responsibility without the acidity of neon green. Pair forest with cream and brown for heritage storytelling—think trail maps, kraft packaging, and farm-to-table menus. The terracotta-and-sand combination mirrors Mediterranean clay and sun-bleached stone; it works for skincare, yoga studios, and boutique hotels that want warmth without abandoning natural cues.
                  </p>
                  <p className="mb-4">
                    Fintech and insurance products increasingly blend forest with navy and gold to say “stable and sustainable.” Use navy for legal density and forest for positive deltas or ESG scores so users parse trust versus progress at a glance. Black-and-white minimal schemes help DTC brands that sell technical outerwear: forest becomes the only chromatic brand mark on monochrome lookbooks.
                  </p>
                  <p className="mb-4">
                    Beauty and spa brands soften forest with dusty rose and sage—see the fifth combination above—so clinical green does not dominate sensitive categories. Document both CSS forestgreen (#228B22) and your production UI green (#065F46) in guidelines; stakeholders often conflate them in slide decks. When print vendors enter the mix, add Pantone references beside hex so paper bags and web headers stay cousins, not strangers.
                  </p>
                  <p className="mb-6">
                    Before you finalize any <strong className="text-gray-900 dark:text-white">forest green combinations</strong>, show three real artifacts: logo on cream, app navigation, and social template. Approvers understand proportion when they see 60% neutral fields versus 10% terracotta accent—not when they stare at four equal swatches in a PDF.
                  </p>
                  <p className="mb-6">
                    For canonical hex values, RGB, and an expanded copy-paste reference, open the{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">forest green hex code guide</InlineTagLink>. Muted partners live in the{' '}
                    <InlineTagLink href="/blog/sage-green-hex-code">sage green hex</InlineTagLink> and{' '}
                    <InlineTagLink href="/blog/terracotta-hex-code">terracotta hex</InlineTagLink> posts—combine those accents with the palettes above without reinventing warm neutrals.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <BlogToolsCTA />

                  <p className="mt-8 mb-6 text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Related:</strong>{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">Forest Green Hex Code</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/sage-green-hex-code">Sage Green Hex Code</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/terracotta-hex-code">Terracotta Hex Code</InlineTagLink>
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Forest + terracotta (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Forest palette" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
