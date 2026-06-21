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

const LAST_MODIFIED = '2026-06-19T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/burgundy-color-palette',
  title: 'Burgundy Color Palette #800020 — Copy Hex Codes',
  description:
    'Burgundy color palette #800020 · RGB(128,0,32). Copy burgundy hex codes, wine red shades, gold & cream pairings. Luxury palette for web & brand design.',
  keywords: [
    'burgundy color palette',
    'burgundy color code',
    'burgundy hex code',
    'burgundy color hex',
    'burgundy color number',
    'burgundy rgb',
    'hex code for burgundy',
    '#800020',
    'wine red palette',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-30T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Burgundy Color Palette #800020 — Copy Hex Codes',
  'Burgundy color palette #800020 · RGB(128,0,32). Copy burgundy hex codes, wine red shades, gold & cream pairings. Luxury palette for web & brand design.',
  'burgundy-color-palette',
  getBlogArticleDatePublished('burgundy-color-palette'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const QUICK_ROWS = [
  { label: 'Hex', value: '#800020' },
  { label: 'RGB', value: 'rgb(128, 0, 32)' },
  { label: 'HSL', value: 'hsl(345, 100%, 25%)' },
];

const BURGUNDY_COMBINATIONS = [
  {
    title: 'Burgundy + Gold + Cream + Charcoal',
    body: 'Luxury wine and jewelry: burgundy structure (#800020), gold accents (#FFD700), cream content wells (#FFF8F0), charcoal (#374151) for body copy and captions.',
    swatches: [
      { hex: '#800020', label: 'Burgundy' },
      { hex: '#FFD700', label: 'Gold' },
      { hex: '#FFF8F0', label: 'Cream' },
      { hex: '#374151', label: 'Charcoal' },
    ],
  },
  {
    title: 'Burgundy + Navy + White + Silver',
    body: 'University and preppy institutional brands: navy navigation (#000080), burgundy crest accents (#800020), white fields (#FFFFFF), silver borders (#C0C0C0).',
    swatches: [
      { hex: '#800020', label: 'Burgundy' },
      { hex: '#000080', label: 'Navy' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#C0C0C0', label: 'Silver' },
    ],
  },
  {
    title: 'Burgundy + Blush + Cream + Tan',
    body: 'Modern feminine fashion and beauty: blush highlights (#E8B4B8), cream backgrounds (#FFF8F0), tan dividers (#D4C4A8), burgundy mastheads and primary buttons.',
    swatches: [
      { hex: '#800020', label: 'Burgundy' },
      { hex: '#E8B4B8', label: 'Blush' },
      { hex: '#FFF8F0', label: 'Cream' },
      { hex: '#D4C4A8', label: 'Tan' },
    ],
  },
  {
    title: 'Burgundy + Terracotta + Ivory + Brown',
    body: 'Warm editorial and food brands: terracotta CTAs (#E2725B), ivory reading surfaces (#FFFFF0), brown typography (#78350F), burgundy hero bands.',
    swatches: [
      { hex: '#800020', label: 'Burgundy' },
      { hex: '#E2725B', label: 'Terracotta' },
      { hex: '#FFFFF0', label: 'Ivory' },
      { hex: '#78350F', label: 'Brown' },
    ],
  },
  {
    title: 'Burgundy + Black + Gold + Warm Gray',
    body: 'High-fashion evening and gala aesthetics: near-black (#1A1A1A) backgrounds, burgundy panels (#800020), gold foil (#D4AF37), warm gray (#9CA3AF) for secondary text.',
    swatches: [
      { hex: '#800020', label: 'Burgundy' },
      { hex: '#1A1A1A', label: 'Near black' },
      { hex: '#D4AF37', label: 'Gold' },
      { hex: '#9CA3AF', label: 'Warm gray' },
    ],
  },
];

const BURGUNDY_SHADES = [
  { name: 'Blush', hex: '#F8E8EA' },
  { name: 'Rose dust', hex: '#E8B4B8' },
  { name: 'Dusty rose', hex: '#C9848A' },
  { name: 'Muted berry', hex: '#A0525C' },
  { name: 'Burgundy', hex: '#800020' },
  { name: 'Wine', hex: '#722F37' },
  { name: 'Deep wine', hex: '#5C1A1A' },
  { name: 'Oxblood', hex: '#4A0E0E' },
  { name: 'Dark burgundy', hex: '#3D0814' },
  { name: 'Near-black wine', hex: '#2A0610' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#800020', colorName: 'Burgundy', rgbCode: 'rgb(128, 0, 32)' },
  { hexCode: '#FFD700', colorName: 'Gold', rgbCode: 'rgb(255, 215, 0)' },
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#FFF8F0', colorName: 'Cream', rgbCode: 'rgb(255, 248, 240)' },
  { hexCode: '#722F37', colorName: 'Wine', rgbCode: 'rgb(114, 47, 55)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the burgundy color code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard burgundy color code is #800020 in hex, RGB(128, 0, 32), and HSL(345, 100%, 25%). Wine (#722F37) and oxblood (#4A0E0E) are common darker companions for navigation and hover states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go in a burgundy color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strong burgundy palettes pair gold (#FFD700) and cream (#FFF8F0) for luxury, navy (#000080) and white for institutional brands, blush (#E8B4B8) for fashion, and charcoal (#374151) for readable body copy. Always test contrast on burgundy buttons.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between burgundy and maroon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Burgundy (#800020) leans wine-purple with blue undertones. Maroon (#800000) is a purer red-brown. In design systems, name tokens explicitly so teams do not swap them in hover states.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is burgundy good for website UI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—for headers, footers, and accent bands in luxury ecommerce, wine, and fashion sites. Avoid full-viewport saturated burgundy; alternate with cream or white content wells and validate gold or white labels with a contrast checker.',
      },
    },
  ],
};

function BurgundyCombinationCard({ combo }) {
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

export default function BurgundyColorPalettePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="burgundy-color-palette" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-[#1F0A0D] via-[#4A0E0E] to-[#800020] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-rose-100/90 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Burgundy Color Palette: Hex Codes, Shades &amp; Combinations
            </h1>
            <p className="text-rose-100/95 text-lg max-w-3xl mb-6">
              Build a complete <strong className="text-white font-semibold">burgundy color palette</strong> from #800020—five luxury combinations with gold, navy, and cream, plus ten shades from blush to oxblood.
            </p>
            <div className="flex items-center gap-4 text-rose-100/90 text-sm">
              <time dateTime="2026-05-30">May 30, 2026</time>
              <span>•</span>
              <span>9 min read</span>
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
                  theme="terracotta"
                  ariaLabel="Burgundy palette quick answer"
                  headline="Burgundy = #800020"
                  subtext="The canonical burgundy hex code and burgundy rgb (128, 0, 32)—copy hex, RGB, or HSL for CSS variables and brand tokens."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    Whether you search for a <strong className="text-gray-900 dark:text-white">burgundy hex code</strong>, a{' '}
                    <strong className="text-gray-900 dark:text-white">burgundy color hex</strong>, or the plain{' '}
                    <strong className="text-gray-900 dark:text-white">burgundy color code</strong> #800020, you are looking for the same wine-deep anchor. The{' '}
                    <strong className="text-gray-900 dark:text-white">hex code for burgundy</strong> maps to{' '}
                    <strong className="text-gray-900 dark:text-white">burgundy rgb</strong> values 128, 0, 32—sometimes listed as the{' '}
                    <strong className="text-gray-900 dark:text-white">burgundy color number</strong> in vendor swatch books. This guide packages ten shades, five four-color combinations, and UI patterns so luxury, fashion, and wine brands ship one coherent palette—not three slightly different reds.
                  </p>
                </div>

                <PaletteShadesTable
                  title="Burgundy Shades — Hex Code Table"
                  description="Ten stops from light blush to near-black wine. Use lighter rows for backgrounds and tags; anchor headers and primary buttons on #800020 or #722F37."
                  shades={BURGUNDY_SHADES}
                />

                <div className="not-prose rounded-2xl border border-rose-200/80 dark:border-rose-900/50 bg-rose-50/40 dark:bg-stone-900/50 p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Burgundy Color Palette Combinations</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Each card lists four hex codes with swatches. Treat burgundy as the structural color—headers, footers, hero bands—and keep cream or white for long reading areas so users are not staring at saturated wine red across the entire viewport.
                  </p>
                  <ul className="space-y-4">
                    {BURGUNDY_COMBINATIONS.map((combo) => (
                      <BurgundyCombinationCard key={combo.title} combo={combo} />
                    ))}
                  </ul>
                </div>

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 bg-white dark:bg-gray-800/40">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Burgundy in UI Design</h2>
                  <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Luxury ecommerce.</strong> Burgundy headers (#800020) with cream product grids (#FFF8F0) keep jewelry, wine, and hotel sites feeling editorial. Gold (#FFD700) works for borders and icons—not small labels on burgundy without a{' '}
                      <InlineTagLink href="/tools/contrast-checker">contrast check</InlineTagLink>.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">University portals.</strong> Burgundy plus navy (#000080) is a classic pairing—assign navy to global navigation and burgundy to school-specific accents. White login cards prevent endless burgundy scroll fatigue.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Seasonal campaigns.</strong> Blush rows (#E8B4B8) make soft highlight backgrounds; reserve #800020 for primary submits and sale ribbons. Seed burgundy in the{' '}
                      <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> to build Valentine or holiday tint ramps on the same hue angle.
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Burgundy in Branding</h2>
                  <p className="mb-4">
                    Wineries, chocolatiers, private banks, and heritage fashion houses use a burgundy color palette because it signals maturity and ritual—wax seals, velvet seating, fall collections. Gold + cream pairings avoid the austerity of black + gold while staying formal. Navy + burgundy reads collegiate; blush + burgundy updates the story for beauty and bridal without losing warmth.
                  </p>
                  <p className="mb-6">
                    Print burgundy often shifts toward Pantone 195 C or similar; note the delta from #800020 on screen when packaging must match web hero imagery. Document one canonical burgundy hex in your design system and map wine and oxblood rows from the shade table to semantic roles—never let marketing decks introduce a fourth red without contrast testing.
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
                    <InlineTagLink href="/blog/burgundy-hex-code">Burgundy Hex Code (#800020)</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/navy-blue-color-palette">Navy Blue Color Palette</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/terracotta-hex-code">Terracotta Hex Code</InlineTagLink>
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Burgundy + gold (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Burgundy palette" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
