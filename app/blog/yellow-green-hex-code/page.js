import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import BlogToolsCTA from '../components/BlogToolsCTA';
import {
  PaletteQuickAnswer,
  PaletteShadesTable,
  PalettePairingsSection,
} from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';

const LAST_MODIFIED = '2026-05-30T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/yellow-green-hex-code',
  title: 'Yellow Green Hex Code: #9ACD32 — Shades, RGB & Palette Pairings',
  description:
    'Yellow green hex code is #9ACD32. Copy hex codes for yellow-green shades, see palette pairings and find out what colors go with yellow-green.',
  keywords: [
    'yellow green hex code',
    'yellow-green hex',
    '#9ACD32',
    'chartreuse hex',
    'lime green hex',
    'yellowgreen css',
    'green yellow',
    'palette pairings',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-30T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Yellow Green Hex Code: #9ACD32 — Shades, RGB & Palette Pairings',
  'Yellow green hex code is #9ACD32. Copy hex codes for yellow-green shades, see palette pairings and find out what colors go with yellow-green.',
  'yellow-green-hex-code',
  getBlogArticleDatePublished('yellow-green-hex-code'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const QUICK_ROWS = [
  { label: 'Hex', value: '#9ACD32' },
  { label: 'RGB', value: 'rgb(154, 205, 50)' },
  { label: 'HSL', value: 'hsl(80, 61%, 50%)' },
];

const YELLOW_GREEN_SHADES = [
  { name: 'Light yellow-green', hex: '#E8F5C8' },
  { name: 'Chartreuse', hex: '#7FFF00' },
  { name: 'Green yellow', hex: '#ADFF2F' },
  { name: 'Lawn green', hex: '#7CFC00' },
  { name: 'Yellow green', hex: '#9ACD32' },
  { name: 'Lime green', hex: '#32CD32' },
  { name: 'Kelly green', hex: '#4CBB17' },
  { name: 'Yellow-green dark', hex: '#6A8E2E' },
  { name: 'Olive drab', hex: '#6B8E23' },
  { name: 'Dark olive', hex: '#556B2F' },
];

const YELLOW_GREEN_PAIRINGS = [
  {
    title: 'Yellow green + Navy + White',
    body: 'Sports and outdoor retail: navy structure (#000080), yellow-green CTAs (#9ACD32) for energy, white product cards. Navy carries trust; yellow-green signals action without pure red urgency.',
    swatches: ['#9ACD32', '#000080', '#FFFFFF'],
  },
  {
    title: 'Yellow green + Charcoal + Off-white',
    body: 'Dashboards and data viz: charcoal chrome (#374151), off-white surfaces (#FAFAF9), yellow-green for positive trends and success chips—validate small numerals on charcoal with the contrast checker.',
    swatches: ['#9ACD32', '#374151', '#FAFAF9'],
  },
  {
    title: 'Yellow green + Purple + Cream',
    body: 'Creative campaigns and festival branding: purple heroes (#7C3AED), cream body (#FFF8F0), yellow-green accents for tickets and badges—high energy without clashing warm and cool at equal weight.',
    swatches: ['#9ACD32', '#7C3AED', '#FFF8F0'],
  },
  {
    title: 'Yellow green + Orange + Dark gray',
    body: 'Agriculture and sustainability UI: orange harvest highlights (#F97316), dark gray navigation (#1F2937), yellow-green progress bars and map markers for growth metrics.',
    swatches: ['#9ACD32', '#F97316', '#1F2937'],
  },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#9ACD32', colorName: 'Yellow green', rgbCode: 'rgb(154, 205, 50)' },
  { hexCode: '#7FFF00', colorName: 'Chartreuse', rgbCode: 'rgb(127, 255, 0)' },
  { hexCode: '#32CD32', colorName: 'Lime green', rgbCode: 'rgb(50, 205, 50)' },
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#374151', colorName: 'Charcoal', rgbCode: 'rgb(55, 65, 81)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the yellow green hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard yellow green hex code is #9ACD32—CSS named color yellowgreen—approximately RGB(154, 205, 50) and HSL(80, 61%, 50%). Chartreuse (#7FFF00) and lime green (#32CD32) are brighter neighbors on the same hue family.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go with yellow-green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Navy (#000080), charcoal (#374151), white, purple (#7C3AED), and orange (#F97316) pair well with yellow-green. Use yellow-green sparingly as an accent—CTAs, charts, badges—not as large body-text fields.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between chartreuse and yellow green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chartreuse (#7FFF00) is neon-bright and high saturation. Yellow green (#9ACD32) is slightly muted and better for UI that must sit next to white backgrounds. Name tokens explicitly so hover states do not jump between them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is yellow-green good for website backgrounds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rarely for full-page backgrounds—too much saturation fatigues readers. Use light yellow-green tints (#E8F5C8) for subtle sections and reserve #9ACD32 for buttons, tags, and chart series. Always test text contrast.',
      },
    },
  ],
};

export default function YellowGreenHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="yellow-green-hex-code" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-lime-900 via-green-800 to-emerald-950 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-lime-100/90 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Yellow Green Hex Code: #9ACD32 — Shades, RGB &amp; Palette Pairings
            </h1>
            <p className="text-lime-100/95 text-lg max-w-3xl mb-6">
              Copy the canonical <strong className="text-white font-semibold">yellow green hex code</strong> #9ACD32 plus chartreuse, lime, and lawn green neighbors—pairings for sports, agriculture, and energetic UI.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#9ACD32]"
              role="img"
              aria-label="Yellow green color swatch hex 9ACD32"
            />
            <div className="flex items-center gap-4 text-lime-100/85 text-sm">
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
                  theme="sage"
                  ariaLabel="Yellow green quick reference"
                  headline="Yellow Green = #9ACD32"
                  subtext="CSS yellowgreen — copy hex, RGB rgb(154, 205, 50), or HSL for tokens, charts, and accent buttons."
                  rows={QUICK_ROWS}
                />

                <PaletteShadesTable
                  title="Yellow Green Shades — Hex Code Table"
                  description="Ten stops from light tint through chartreuse, lawn green, and the canonical #9ACD32 row to dark olive. Brighter rows suit badges; #9ACD32 balances energy and readability on white."
                  shades={YELLOW_GREEN_SHADES}
                />

                <PalettePairingsSection
                  title="Yellow Green Palette Pairings"
                  intro="Four combinations with hex codes—navy structure, charcoal dashboards, creative purple, and agriculture orange accents."
                  pairings={YELLOW_GREEN_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    The <strong className="text-gray-900 dark:text-white">yellow green hex code</strong> #9ACD32 is the same value browsers expose as CSS{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">yellowgreen</code>—a balanced mix between yellow and green that reads energetic without neon glare. It sits between chartreuse (#7FFF00) and lime green (#32CD32): bright enough for CTAs and chart highlights, muted enough to pair with navy and charcoal in professional dashboards.
                  </p>
                  <p className="mb-6">
                    Designers often confuse adjacent names. <strong className="text-gray-900 dark:text-white">Green yellow</strong> (#ADFF2F) and{' '}
                    <strong className="text-gray-900 dark:text-white">lawn green</strong> (#7CFC00) skew yellower; lime green (#32CD32) skews purer green. Document which hex you mean in design tokens—especially when engineering maps “success green” to #32CD32 while marketing uses #9ACD32 on slide decks.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Yellow Green in UI &amp; Web Design</h2>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Sports and outdoor brands.</strong> Yellow-green CTAs on navy heroes (#000080) signal go/action without alarm red. White product cards keep catalogs readable; use chartreuse (#7FFF00) only for small badges where saturation helps visibility.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Agriculture and climate dashboards.</strong> Map growth metrics with #9ACD32 series colors; pair with orange (#F97316) for harvest seasons and charcoal (#374151) for chrome. Run yellow-green on white through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>—large buttons often pass; small caption text may need dark olive (#556B2F).
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Health and fitness apps.</strong> Lime green (#32CD32) suits completion states; yellow-green (#9ACD32) works for progress rings that should feel upbeat but not clinical. Generate harmonized ramps from #9ACD32 in the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> so hover and disabled steps stay on-hue.
                  </p>
                  <p className="mb-6">
                    Avoid full-screen yellow-green backgrounds—they fatigue readers and fail accessibility for gray placeholder text. Use light tints (#E8F5C8) for section washes and reserve saturated rows for the 10% accent budget in your layout system.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Yellow Green in Branding</h2>
                  <p className="mb-4">
                    Energy drinks, youth sports, eco-startups, and festival brands reach for yellow-green because it reads as growth and motion. Pair with deep navy or charcoal so the brand does not feel like pure neon. Purple secondary accents add creative edge for music and entertainment identities.
                  </p>
                  <p className="mb-6">
                    Print and packaging may shift yellow-green toward Pantone 382 C or similar; note screen vs ink delta when cartons must match app icons. Lock #9ACD32 as your digital canonical and map chartreuse and lime to explicit roles—never “whichever green looks fine.”
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

                  <p className="mb-6">
                    Compare with{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">forest green hex codes</InlineTagLink> for deeper botanical UI,{' '}
                    <InlineTagLink href="/blog/olive-green-hex-code">olive green hex reference</InlineTagLink> for muted yellow-greens, or{' '}
                    <InlineTagLink href="/blog/sage-green-hex-code">sage green hex code</InlineTagLink> for calm wellness palettes.
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Yellow-green ramp (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Yellow green" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
