import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { PalettePairingsSection } from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';
import CopyableHex from '../forest-green-hex-code/CopyableHex';
import { BurgundyQuickAnswer, BurgundyShadesTable } from './BurgundyHexLead';

export const metadata = buildPageMetadata({
  path: '/blog/burgundy-hex-code',
  title: 'Burgundy Hex Code: #800020 — Shades, Palettes & Copy-Paste',
  description:
    'Burgundy hex code is #800020. Copy hex codes for burgundy shades, see palette pairings with gold, cream and navy, and explore branding examples.',
  keywords: ['burgundy hex', '#800020', 'burgundy shades', 'wine red', 'RGB', 'HSL', 'Theme & Color'],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: '2026-05-21T00:00:00.000Z',
  },
});
const articleSchema = getBlogArticleSchema(
  'Burgundy Hex Code: #800020 — Shades, Palettes & Copy-Paste',
  'Burgundy hex code is #800020. Copy hex codes for burgundy shades, see palette pairings with gold, cream and navy, and explore branding examples.',
  'burgundy-hex-code',
  getBlogArticleDatePublished('burgundy-hex-code'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const BURGUNDY_PALETTE = [
  { hexCode: '#800020', colorName: 'Burgundy', rgbCode: 'rgb(128, 0, 32)' },
  { hexCode: '#722F37', colorName: 'Wine', rgbCode: 'rgb(114, 47, 55)' },
  { hexCode: '#FFD700', colorName: 'Gold', rgbCode: 'rgb(255, 215, 0)' },
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#FFF8F0', colorName: 'Cream', rgbCode: 'rgb(255, 248, 240)' },
];

const HERO_SWATCHES = [
  { hexCode: '#800020', colorName: 'Burgundy', rgbCode: 'rgb(128, 0, 32)' },
  { hexCode: '#722F37', colorName: 'Wine', rgbCode: 'rgb(114, 47, 55)' },
  { hexCode: '#4A0E0E', colorName: 'Oxblood', rgbCode: 'rgb(74, 14, 14)' },
];

const BURGUNDY_PAIRINGS = [
  {
    title: 'Burgundy + Gold + Cream',
    body: 'Luxury wine, jewelry, and gala invitations: burgundy hero (#800020), gold foil accents (#FFD700), cream stationery (#FFF8F0). Keep gold off small type on burgundy unless contrast passes.',
    swatches: ['#800020', '#FFD700', '#FFF8F0'],
  },
  {
    title: 'Burgundy + Navy + White',
    body: 'Preppy institutional and university brands: navy structure (#000080), burgundy secondary crest color (#800020), white fields for clarity.',
    swatches: ['#800020', '#000080', '#FFFFFF'],
  },
  {
    title: 'Burgundy + Cream + Tan',
    body: 'Editorial lifestyle and beauty: cream backgrounds (#FFF8F0), tan dividers (#D4C4A8), burgundy mastheads—soft enough for long reads, bold enough for covers.',
    swatches: ['#800020', '#FFF8F0', '#D4C4A8'],
  },
  {
    title: 'Burgundy + Blush + Charcoal',
    body: 'Modern feminine brands: blush highlights (#E8B4B8), charcoal body text (#374151), burgundy for logos and primary buttons on white.',
    swatches: ['#800020', '#E8B4B8', '#374151'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the burgundy hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A widely used burgundy hex code is #800020, which is RGB(128, 0, 32) and HSL(345, 100%, 25%). Wine (#722F37) and oxblood (#4A0E0E) are common darker companions for navigation and hover states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors pair with burgundy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gold (#FFD700), cream (#FFF8F0), navy (#000080), blush (#E8B4B8), and charcoal (#374151) pair well with burgundy. Verify WCAG contrast for white or gold text on burgundy buttons.',
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
      name: 'Is burgundy good for branding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—for wine, luxury fashion, universities, and premium food brands that want depth without black. Use burgundy as accent or header bands, not full-screen saturated fields, and pair with cream or white content areas.',
      },
    },
  ],
};

export default function BurgundyHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="burgundy-hex-code" />
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
              Burgundy Hex Code: #800020 — Shades, Palettes &amp; Copy-Paste
            </h1>
            <p className="text-rose-100/95 text-lg max-w-3xl mb-6">
              Burgundy hex code is <strong className="text-white font-semibold">#800020</strong> (RGB 128, 0, 32). Copy ten wine-to-oxblood shades, four palette pairings with gold and navy, and branding notes below.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#800020]"
              role="img"
              aria-label="Burgundy color sample, hex 800020"
            />
            <div className="flex items-center gap-4 text-rose-100/90 text-sm flex-wrap">
              <time dateTime="2026-05-21">May 21, 2026</time>
              <span>•</span>
              <span>9 min read</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              {HERO_SWATCHES.map((c) => (
                <ColorSwatch key={c.hexCode} color={c.hexCode} name={c.colorName} hexCode={c.hexCode} showHexCopyIcon />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <BurgundyQuickAnswer />
                <BurgundyShadesTable />

                <PalettePairingsSection
                  title="Burgundy Palette Pairings"
                  intro="Four burgundy combinations with hex codes—luxury gold, institutional navy, soft cream, and modern blush accents."
                  pairings={BURGUNDY_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#800020" />
                    </strong>{' '}
                    is the burgundy hex code teams paste into CSS, Figma, and slide decks when they want wine depth without flat red. Burgundy sits between fire-engine red and near-black maroon: enough blue undertone to feel refined, enough red to stay warm on cream paper. If you need a darker press-friendly anchor,{' '}
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#722F37" />
                    </strong>{' '}
                    (wine) and <CopyableHex hex="#4A0E0E" /> (oxblood) from the shade table cover navigation, hovers, and embossed packaging mockups.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Burgundy in UI &amp; web design</h2>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Luxury ecommerce and bookings.</strong> Burgundy headers with cream product grids (#FFF8F0) keep jewelry, wine, and hotel sites feeling editorial. Gold text (#FFD700) on burgundy rarely passes small-type contrast—use gold for borders and icons, white or cream for labels, and validate with the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">University and club portals.</strong> Burgundy plus navy (#000080) is a classic pairing—assign navy to global navigation and burgundy to school-specific accents so multi-campus systems stay parseable. White login cards prevent endless burgundy scroll fatigue.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Forms and seasonal campaigns.</strong> Blush rows (#E8B4B8) make soft error or highlight backgrounds; reserve <CopyableHex hex="#800020" /> for primary submits and sale ribbons. Generate tint ramps from burgundy in the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> so Valentine or holiday skins reuse the same hue angle.
                  </p>
                  <p className="mb-6">
                    Dark mode needs separate tokens: burgundy glows on charcoal. Desaturate or deepen accent burgundy by ~10% on #111827 surfaces and re-test focus rings.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Burgundy in branding</h2>
                  <p className="mb-4">
                    Wineries, chocolatiers, private banks, and heritage fashion houses use burgundy because it signals maturity and ritual—think wax seals, velvet seating, and fall collections. Gold + cream pairings avoid the austerity of black + gold while staying formal. Navy + burgundy reads collegiate and timeless; blush + burgundy updates the story for beauty and bridal without losing warmth.
                  </p>
                  <p className="mb-6">
                    Print burgundy often shifts toward Pantone 195 C or similar; note the delta from #800020 on screen when cartons must match web hero imagery. Never use pure red CTAs beside burgundy brand fields—users cannot tell which action is primary.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose mb-8">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Related colors</h2>
                  <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <li>
                      <InlineTagLink href="/blog/forest-green-hex-code">Forest Green Hex Code</InlineTagLink> — natural green contrast for seasonal campaigns
                    </li>
                    <li>
                      <InlineTagLink href="/blog/sage-green-hex-code">Sage Green Hex Code</InlineTagLink> — muted partner for soft lifestyle layouts
                    </li>
                    <li>
                      <InlineTagLink href="/blog/terracotta-hex-code">Terracotta Hex Code</InlineTagLink> — warm clay accent adjacent to wine reds
                    </li>
                    <li>
                      <InlineTagLink href="/blog/navy-blue-hex-code">Navy Blue Hex Code</InlineTagLink> — structural blue for burgundy + navy brands
                    </li>
                  </ul>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Burgundy palette (copy hex)
                  </h3>
                  <ColorPaletteClient colors={BURGUNDY_PALETTE} designTitle="Burgundy" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
