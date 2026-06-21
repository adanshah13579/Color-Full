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
import { MauveQuickAnswer, MauveFormatCodesSection, MauveShadesTable } from './MauveColorLead';

const LAST_MODIFIED = '2026-06-19T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/mauve-color',
  title: 'Mauve Color #E0B0FF — Hex Code Between Pink & Purple',
  description:
    'Mauve color hex code #E0B0FF · RGB(224,176,255). Copy mauve colour code instantly. Is mauve pink or purple? Shades, pairings & palette ideas.',
  keywords: ['mauve color', 'mauve hex code', 'mauve colour', 'is mauve pink or purple', '#E0B0FF', 'mauve rgb', 'Theme & Color'],
  openGraphType: 'article',
  openGraph: {
    publishedTime: LAST_MODIFIED,
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Mauve Color #E0B0FF — Hex Code Between Pink & Purple',
  'Mauve color hex code #E0B0FF · RGB(224,176,255). Copy mauve colour code instantly. Is mauve pink or purple? Shades, pairings & palette ideas.',
  'mauve-color',
  getBlogArticleDatePublished('mauve-color'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const SIDEBAR_PALETTE = [
  { hexCode: '#E0B0FF', colorName: 'Mauve', rgbCode: 'rgb(224, 176, 255)' },
  { hexCode: '#DDA0DD', colorName: 'Plum', rgbCode: 'rgb(221, 160, 221)' },
  { hexCode: '#374151', colorName: 'Charcoal', rgbCode: 'rgb(55, 65, 81)' },
  { hexCode: '#FFF8F0', colorName: 'Cream', rgbCode: 'rgb(255, 248, 240)' },
  { hexCode: '#9966CC', colorName: 'Amethyst', rgbCode: 'rgb(153, 102, 204)' },
];

const HERO_SWATCHES = [
  { hexCode: '#E0B0FF', colorName: 'Mauve', rgbCode: 'rgb(224, 176, 255)' },
  { hexCode: '#DDA0DD', colorName: 'Plum', rgbCode: 'rgb(221, 160, 221)' },
  { hexCode: '#A875C4', colorName: 'Deep mauve', rgbCode: 'rgb(168, 117, 196)' },
];

const MAUVE_PAIRINGS = [
  {
    title: 'Mauve + Charcoal + White',
    body: 'Mauve section bands (#E0B0FF), charcoal body copy (#374151) on white cards—clean editorial for magazines, skincare lookbooks, and lifestyle blogs.',
    swatches: ['#E0B0FF', '#374151', '#FFFFFF'],
  },
  {
    title: 'Mauve + Cream + Gold',
    body: 'Cream backgrounds (#FFF8F0) with mauve accents and muted gold rules (#C9A227) suit wedding stationery, luxury beauty, and invitation design.',
    swatches: ['#E0B0FF', '#FFF8F0', '#C9A227'],
  },
  {
    title: 'Mauve + Sage + Blush',
    body: 'Sage (#B2AC88) grounds airy mauve fields; dusty blush (#E8B4B8) adds warmth for botanical and wellness brands without neon pink.',
    swatches: ['#E0B0FF', '#B2AC88', '#E8B4B8'],
  },
  {
    title: 'Mauve + Navy + Lavender',
    body: 'Navy headers (#000080) with mauve highlights and lavender (#E6E6FA) content wells—creative confidence for portfolios and beauty SaaS.',
    swatches: ['#E0B0FF', '#000080', '#E6E6FA'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the mauve hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard mauve hex code is #E0B0FF, which is RGB(224, 176, 255) and HSL(276, 100%, 85%). Lighter mauves use #F5E6FF or #E8D4FF; deeper accents use #A875C4 or #8B5A9E.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is mauve pink or purple?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mauve is both and neither—it sits between pink and purple on the color wheel, leaning more toward purple. It has more blue than hot pink (#FF69B4) but is lighter and dustier than magenta (#FF00FF) or deep violet.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the mauve RGB value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Canonical mauve #E0B0FF has RGB value (224, 176, 255)—red 224, green 176, blue 255. In CSS write rgb(224, 176, 255) or the compact form RGB(224,176,255) in design handoffs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go with mauve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Charcoal (#374151), cream (#FFF8F0), sage green (#B2AC88), navy (#000080), and gold (#C9A227) pair reliably with mauve. Always verify text and button contrast with a WCAG checker.',
      },
    },
  ],
};

export default function MauveColorPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="mauve-color" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-fuchsia-700 via-purple-600 to-violet-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-fuchsia-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Mauve Color: Hex Code #E0B0FF, RGB &amp; What Makes It Pink-Purple
            </h1>
            <p className="text-fuchsia-100 text-lg max-w-3xl mb-6">
              Everything about <strong className="text-white font-semibold">mauve color</strong>—hex #E0B0FF, RGB(224,176,255), eight shades, palette pairings, and why mauve sits between pink and purple.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#E0B0FF]"
              role="img"
              aria-label="Mauve color sample, hex E0B0FF"
            />
            <div className="flex items-center gap-4 text-fuchsia-100 text-sm flex-wrap">
              <time dateTime="2026-06-11">June 11, 2026</time>
              <span>•</span>
              <span>8 min read</span>
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
                <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-white leading-relaxed border-l-4 border-fuchsia-500 bg-fuchsia-50/90 dark:bg-fuchsia-950/30 dark:border-fuchsia-400 pl-5 pr-4 py-4 rounded-r-xl">
                  Mauve is a soft, muted pink-purple color with hex code #E0B0FF and RGB value of (224, 176, 255). It sits between pink and purple on the color spectrum, leaning more toward purple. The name comes from the French word for the mallow flower.
                </p>

                <MauveQuickAnswer />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">Is Mauve Pink or Purple?</h2>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Mauve is closer to purple than pink</strong>, but it lives in the pink-purple borderland. On the RGB color wheel, mauve (#E0B0FF) has high blue (255) and moderate red (224)—more blue channel activity than hot pink (#FF69B4), which is red-heavy. Compared to magenta (#FF00FF), mauve is lighter, dustier, and less saturated.
                  </p>
                  <p className="mb-4">
                    Visually: if you place mauve beside blush pink, mauve reads cooler and more violet. Beside deep purple (#800080), mauve reads softer and more pastel. That is why designers use mauve for editorial backgrounds and beauty packaging—it signals femininity without the aggression of neon pink or the weight of royal purple.
                  </p>
                  <p className="mb-6">
                    For the full list of pink-purple names including magenta, fuchsia, and orchid, see our{' '}
                    <InlineTagLink href="/blog/pink-purple-color-name">pink-purple colour names guide</InlineTagLink>.
                  </p>
                </div>

                <MauveFormatCodesSection />
                <MauveShadesTable />

                <PalettePairingsSection
                  title="What Colors Go with Mauve?"
                  intro="Four mauve palette combinations with copy-ready hex codes—charcoal editorial, cream luxury, sage botanical, and navy creative."
                  pairings={MAUVE_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Mauve in Fashion and Design</h2>
                  <p className="mb-4">
                    Mauve exploded into fashion after the first synthetic dye—mauveine—was discovered in 1856. Today the <strong className="text-gray-900 dark:text-white">mauve colour</strong> still signals vintage elegance: dusty, slightly melancholic, and more sophisticated than bubblegum pink. On the web, <CopyableHex hex="#E0B0FF" /> works for skincare hero bands, wedding landing pages, and creative portfolios where you want softness without losing structure.
                  </p>
                  <p className="mb-4">
                    In UI, treat mauve as a surface color—not default body text. Charcoal (#374151) on pale mauve (#F5E6FF) passes contrast for paragraphs; white on mid-tone mauve often fails at 14px. Reserve deeper mauve rows (#A875C4, #8B5A9E) for navigation, tags, and illustration accents. Pair with{' '}
                    <InlineTagLink href="/blog/lavender-hex-code">lavender #E6E6FA</InlineTagLink> when you need an even airier wash, or{' '}
                    <InlineTagLink href="/blog/purple-dream">Purple Dream</InlineTagLink> ramps when you need saturated violet CTAs.
                  </p>
                  <p className="mb-4">
                    British teams searching <strong className="text-gray-900 dark:text-white">mauve colour</strong> use the same hex as US <strong className="text-gray-900 dark:text-white">mauve color</strong>—only spelling changes. Document #E0B0FF once in your style guide and derive tints programmatically in the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> so hover and disabled states stay on the same hue angle.
                  </p>
                  <p className="mb-6">
                    Print and textile mauves often skew pinker than screen #E0B0FF; note CMYK approximations (C:12 M:31 Y:0 K:0) in vendor specs so packaging does not surprise brand reviewers. When stakeholders say “dusty purple,” show mauve first, then plum (#DDA0DD) and thistle (#D8BFD8) from the shade table as lighter companions.
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
                      <InlineTagLink href="/blog/pink-purple-color-name">Pink-Purple Colour Names</InlineTagLink> — mauve, magenta, fuchsia and more
                    </li>
                    <li>
                      <InlineTagLink href="/blog/lavender-hex-code">Lavender Hex Code</InlineTagLink> — airier violet wash for wellness UI
                    </li>
                    <li>
                      <InlineTagLink href="/blog/purple-dream">Purple Dream Palette</InlineTagLink> — full violet ramp from #7C3AED to #EDE9FE
                    </li>
                  </ul>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Mauve palette (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Mauve" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
