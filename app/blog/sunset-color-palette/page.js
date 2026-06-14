import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import { PaletteQuickAnswer, PaletteShadesTable } from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';

const LAST_MODIFIED = '2026-06-15T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/sunset-color-palette',
  title: 'Sunset Color Palette — Hex #F97316 #EC4899 #8B5CF6 (Copy)',
  description:
    'Sunset color palette hex codes: orange #F97316, coral #FF6B6B, pink #EC4899, purple #8B5CF6. Copy all sunset color codes & gradient RGB values.',
  keywords: [
    'sunset color palettes hex codes',
    'sunset colors rgb',
    'sunset rgb code',
    'sunset hex codes',
    'sunset color palette codes',
    'warm palette',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-06-01T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Sunset Color Palette — Hex #F97316 #EC4899 #8B5CF6 (Copy)',
  'Sunset color palette hex codes: orange #F97316, coral #FF6B6B, pink #EC4899, purple #8B5CF6. Copy all sunset color codes & gradient RGB values.',
  'sunset-color-palette',
  getBlogArticleDatePublished('sunset-color-palette'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const QUICK_ROWS = [
  { label: 'Orange', value: '#F97316' },
  { label: 'Red', value: '#EF4444' },
  { label: 'Pink', value: '#EC4899' },
  { label: 'Purple', value: '#8B5CF6' },
  { label: 'Amber', value: '#F59E0B' },
];

const SUNSET_SHADES = [
  { name: 'Dawn cream', hex: '#FFFBEB' },
  { name: 'Soft amber', hex: '#FDE68A' },
  { name: 'Amber', hex: '#F59E0B' },
  { name: 'Sunset orange', hex: '#F97316' },
  { name: 'Burnt orange', hex: '#EA580C' },
  { name: 'Ember red', hex: '#EF4444' },
  { name: 'Deep red', hex: '#DC2626' },
  { name: 'Twilight pink', hex: '#EC4899' },
  { name: 'Violet', hex: '#8B5CF6' },
  { name: 'Deep violet', hex: '#6D28D9' },
];

const SUNSET_RGB_ROWS = [
  { name: 'Dawn cream', hex: '#FFFBEB', rgb: 'rgb(255, 251, 235)' },
  { name: 'Amber', hex: '#F59E0B', rgb: 'rgb(245, 158, 11)' },
  { name: 'Sunset orange', hex: '#F97316', rgb: 'rgb(249, 115, 22)' },
  { name: 'Ember red', hex: '#EF4444', rgb: 'rgb(239, 68, 68)' },
  { name: 'Twilight pink', hex: '#EC4899', rgb: 'rgb(236, 72, 153)' },
  { name: 'Violet', hex: '#8B5CF6', rgb: 'rgb(139, 92, 246)' },
  { name: 'Deep violet', hex: '#6D28D9', rgb: 'rgb(109, 40, 217)' },
  { name: 'Burnt orange', hex: '#EA580C', rgb: 'rgb(234, 88, 12)' },
  { name: 'Deep red', hex: '#DC2626', rgb: 'rgb(220, 38, 38)' },
  { name: 'Soft amber', hex: '#FDE68A', rgb: 'rgb(253, 230, 138)' },
];

const SUNSET_COMBINATIONS = [
  {
    title: 'Classic sunset gradient',
    body: 'Hero band from #F97316 through #EC4899 to #8B5CF6; charcoal (#111827) type on white below.',
    swatches: [
      { hex: '#F97316', label: 'Orange' },
      { hex: '#EF4444', label: 'Red' },
      { hex: '#EC4899', label: 'Pink' },
      { hex: '#8B5CF6', label: 'Purple' },
    ],
  },
  {
    title: 'Warm editorial',
    body: 'Amber #F59E0B headlines, cream #FFFBEB body wells, ember red #EF4444 CTAs.',
    swatches: [
      { hex: '#F59E0B', label: 'Amber' },
      { hex: '#FFFBEB', label: 'Cream' },
      { hex: '#EF4444', label: 'Red' },
      { hex: '#374151', label: 'Charcoal' },
    ],
  },
  {
    title: 'Festival energy',
    body: 'Deep violet #6D28D9 navigation, pink #EC4899 badges, orange #F97316 primary buttons on black.',
    swatches: [
      { hex: '#6D28D9', label: 'Violet' },
      { hex: '#EC4899', label: 'Pink' },
      { hex: '#F97316', label: 'Orange' },
      { hex: '#0F0F0F', label: 'Near black' },
    ],
  },
  {
    title: 'Soft lifestyle',
    body: 'Dawn cream backgrounds, burnt orange #EA580C accents, slate #64748B secondary text.',
    swatches: [
      { hex: '#FFFBEB', label: 'Cream' },
      { hex: '#EA580C', label: 'Burnt orange' },
      { hex: '#EC4899', label: 'Pink' },
      { hex: '#64748B', label: 'Slate' },
    ],
  },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#F97316', colorName: 'Orange', rgbCode: 'rgb(249, 115, 22)' },
  { hexCode: '#EF4444', colorName: 'Red', rgbCode: 'rgb(239, 68, 68)' },
  { hexCode: '#EC4899', colorName: 'Pink', rgbCode: 'rgb(236, 72, 153)' },
  { hexCode: '#8B5CF6', colorName: 'Purple', rgbCode: 'rgb(139, 92, 246)' },
  { hexCode: '#F59E0B', colorName: 'Amber', rgbCode: 'rgb(245, 158, 11)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the main sunset color palette hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core sunset hex codes are #F97316 (orange), #EF4444 (red), #EC4899 (pink), #8B5CF6 (purple), and #F59E0B (amber). Use them for CTAs, gradients, and accents—not small body text without contrast testing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the sunset rgb code for orange?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sunset orange #F97316 is rgb(249, 115, 22). Pink #EC4899 is rgb(236, 72, 153) and purple #8B5CF6 is rgb(139, 92, 246). Copy RGB rows from the Sunset RGB Values table on this page.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go in a sunset color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pair warm sunset hues with charcoal (#111827), cream (#FFFBEB), or cool slate (#64748B) for readable UI. Limit three saturated primaries per screen for clear hierarchy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a sunset palette good for websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes for lifestyle, events, music, travel, and creative brands. Keep long-form copy on neutrals, use sunset colors for heroes and buttons, and verify WCAG contrast for every text-on-color pair.',
      },
    },
  ],
};

function SunsetCombinationCard({ combo }) {
  return (
    <li className="rounded-xl border border-orange-200/80 dark:border-orange-900/50 bg-white dark:bg-gray-800/60 p-4 shadow-sm">
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

function SunsetRgbTable() {
  return (
    <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-900/80 text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            <th className="px-4 py-3 font-semibold">Swatch</th>
            <th className="px-4 py-3 font-semibold">Color</th>
            <th className="px-4 py-3 font-semibold">Hex</th>
            <th className="px-4 py-3 font-semibold">RGB</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {SUNSET_RGB_ROWS.map((row) => (
            <tr key={row.hex} className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
              <td className="px-4 py-3 w-20">
                <div className="h-10 w-14 rounded-md border border-gray-200 dark:border-gray-600" style={{ backgroundColor: row.hex }} aria-hidden />
              </td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{row.name}</td>
              <td className="px-4 py-3 font-mono text-gray-800 dark:text-gray-200">{row.hex}</td>
              <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">{row.rgb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BlogMixerPaletteCTA() {
  return (
    <section className="my-12 not-prose">
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build your sunset palette</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5">Mix warm hues or generate a full ramp for your brand.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/tools/color-mixer"
            className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-orange-400 hover:bg-white hover:text-orange-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-orange-400 dark:hover:bg-zinc-700 transition-colors text-center"
          >
            Color Mixing Simulator
          </Link>
          <Link
            href="/tools/palette-generator"
            className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-blue-400 hover:bg-white hover:text-blue-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-blue-400 dark:hover:bg-zinc-700 transition-colors text-center"
          >
            Color Palette Generator
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function SunsetColorPalettePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="sunset-color-palette" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-amber-500 via-red-500 to-purple-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-amber-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Sunset Color Palette: Hex Codes #F97316 #EC4899 #8B5CF6 (Copy)
            </h1>
            <p className="text-amber-100 text-lg max-w-3xl mb-6">
              Copy <strong className="text-white font-semibold">sunset color palettes hex codes</strong>—orange #F97316,
              red #EF4444, pink #EC4899, purple #8B5CF6—and matching{' '}
              <strong className="text-white font-semibold">sunset colors rgb</strong> values for UI, social, and brand systems.
            </p>
            <div className="flex items-center gap-4 text-amber-100 text-sm">
              <time dateTime="2026-06-11">Updated June 11, 2026</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              {SIDEBAR_PALETTE.map((c) => (
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
                <PaletteQuickAnswer
                  theme="sunset"
                  ariaLabel="Sunset palette quick answer"
                  headline="Sunset palette — 5 core codes"
                  subtext="Copy sunset hex codes and sunset rgb values for the anchors most brands use in heroes and CTAs."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <p className="mb-6">
                    A <strong className="text-gray-900 dark:text-white">sunset color palette</strong> moves from golden
                    amber through ember red and twilight pink into violet—mimicking the sky, not a single swatch. Teams
                    search for <strong className="text-gray-900 dark:text-white">sunset hex codes</strong> and{' '}
                    <strong className="text-gray-900 dark:text-white">sunset color palette codes</strong> when they need
                    copy-ready values for gradients, event posters, and product UI. Document both hex and RGB so
                    engineers, motion designers, and print vendors stay aligned.
                  </p>
                </div>

                <PaletteShadesTable
                  title="Sunset Color Palette Hex Codes"
                  description="Ten sunset stops from dawn cream to deep violet. Use light rows for backgrounds; saturated rows for buttons, badges, and gradient heroes."
                  shades={SUNSET_SHADES}
                />

                <div className="not-prose space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Sunset RGB Values</h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Android resources, video overlays, and design handoffs often need a{' '}
                    <strong className="text-gray-900 dark:text-white">sunset rgb code</strong> instead of hex. The table
                    below lists the same sunset colors rgb pairs—orange rgb(249, 115, 22), pink rgb(236, 72, 153), purple
                    rgb(139, 92, 246)—alongside hex for quick reference.
                  </p>
                  <SunsetRgbTable />
                </div>

                <div className="not-prose rounded-2xl border border-orange-200/80 dark:border-orange-900/40 bg-orange-50/50 dark:bg-stone-900/45 p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sunset Color Palette Combinations</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Four four-color sunset palettes for campaigns, dashboards, and editorial sites—each with swatches and hex labels.
                  </p>
                  <ul className="space-y-4">
                    {SUNSET_COMBINATIONS.map((combo) => (
                      <SunsetCombinationCard key={combo.title} combo={combo} />
                    ))}
                  </ul>
                </div>

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 bg-white dark:bg-gray-800/40">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sunset Colors in UI and Brand Design</h2>
                  <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Music and events.</strong> Gradient heroes from{' '}
                      #F97316 through #EC4899 to #8B5CF6 signal energy immediately—keep ticket flows and account settings in
                      charcoal on white so users can complete tasks without visual fatigue.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Travel and lifestyle.</strong> Amber #F59E0B and
                      burnt orange #EA580C work for ratings and highlights; reserve deep violet #6D28D9 for navigation chrome
                      in dark mode.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Dashboards.</strong> Neutrals should dominate; use
                      sunset hues only for KPI deltas, alerts, and marketing modules. Run every text-on-sunset pair through
                      the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                    </p>
                    <p>
                      Seed orange #F97316 in the{' '}
                      <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> to export harmonized
                      tints, then blend accents in the{' '}
                      <InlineTagLink href="/tools/color-mixer">color mixer</InlineTagLink> when you need custom sunset
                      transitions between pink and purple.
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <BlogMixerPaletteCTA />

                  <p className="mt-8 mb-6 text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Related:</strong>{' '}
                    <InlineTagLink href="/blog/sunset-vibes">Sunset Vibes Palette</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/terracotta-hex-code">Terracotta Hex Code</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/purple-dream">Purple Dream Palette</InlineTagLink>
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Sunset core (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Sunset palette" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
