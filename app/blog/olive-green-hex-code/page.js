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
import {
  OliveGreenQuickAnswer,
  OliveGreenRgbSection,
  OliveGreenFormatCodesSection,
  OliveGreenShadesTable,
} from './OliveGreenHexLead';

const LAST_MODIFIED = '2026-06-11T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/olive-green-hex-code',
  title: 'Olive Green Hex Code: #808000 — Copy + RGB, Shades & Pairings',
  description:
    'Olive green hex code is #808000. Copy instantly. RGB(128,128,0), 10 olive green shades, palette pairings with terracotta and navy. One click copy.',
  keywords: ['olive green hex code', 'olive green hex', '#808000', 'olive shades', 'olive palette', 'RGB', 'HSL', 'Theme & Color'],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Olive Green Hex Code: #808000 — Copy + RGB, Shades & Pairings',
  'Olive green hex code is #808000. Copy instantly. RGB(128,128,0), 10 olive green shades, palette pairings with terracotta and navy. One click copy.',
  'olive-green-hex-code',
  getBlogArticleDatePublished('olive-green-hex-code'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const OLIVE_PALETTE = [
  { hexCode: '#808000', colorName: 'Olive', rgbCode: 'rgb(128, 128, 0)' },
  { hexCode: '#556B2F', colorName: 'Dark olive', rgbCode: 'rgb(85, 107, 47)' },
  { hexCode: '#E2725B', colorName: 'Terracotta', rgbCode: 'rgb(226, 114, 91)' },
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#FFF8F0', colorName: 'Cream', rgbCode: 'rgb(255, 248, 240)' },
];

const RUST_ACCENT = [
  { hexCode: '#B7410E', colorName: 'Rust', rgbCode: 'rgb(183, 65, 14)' },
  { hexCode: '#808000', colorName: 'Olive', rgbCode: 'rgb(128, 128, 0)' },
  { hexCode: '#FFF8F0', colorName: 'Cream', rgbCode: 'rgb(255, 248, 240)' },
  { hexCode: '#5C4033', colorName: 'Brown', rgbCode: 'rgb(92, 64, 51)' },
];

const HERO_SWATCHES = [
  { hexCode: '#808000', colorName: 'CSS olive', rgbCode: 'rgb(128, 128, 0)' },
  { hexCode: '#556B2F', colorName: 'Dark olive green', rgbCode: 'rgb(85, 107, 47)' },
  { hexCode: '#3D4A1F', colorName: 'Moss', rgbCode: 'rgb(61, 74, 31)' },
];

const OLIVE_PAIRINGS = [
  {
    title: 'Olive + Terracotta (warm Mediterranean)',
    body: 'Olive structure (#808000) with terracotta CTAs (#E2725B) and cream reading wells (#FFF8F0). Ideal for food, ceramics, and outdoor hospitality brands that want sun-baked warmth without neon orange.',
    swatches: ['#808000', '#E2725B', '#FFF8F0'],
  },
  {
    title: 'Olive + Cream (soft editorial)',
    body: 'Cream backgrounds (#FFF8F0) keep long-form copy calm; olive navigation and section bands add earthy structure. Pair charcoal (#36454F) for body type so 14px text stays legible on pale fields.',
    swatches: ['#808000', '#FFF8F0', '#36454F'],
  },
  {
    title: 'Olive + Navy (heritage trust)',
    body: 'Navy headers (#000080) and olive secondary badges (#808000) signal institutional weight—universities, outdoor clubs, and heritage retail. Add gold (#FFD700) sparingly for crests and awards.',
    swatches: ['#808000', '#000080', '#FFD700'],
  },
  {
    title: 'Olive + Rust (autumn utility)',
    body: 'Rust accents (#B7410E) on olive chrome (#808000) read as workwear and harvest campaigns. Keep product photography on neutral sand (#D4C4A8) so two warm hues do not compete.',
    swatches: ['#808000', '#B7410E', '#D4C4A8'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the olive green hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The CSS named color olive is #808000, which is RGB(128, 128, 0) and HSL(60, 100%, 25%). Product teams often use darker olives such as #556B2F for navigation—document your canonical hex in a style guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the olive green RGB code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For #808000, the olive green RGB code is RGB(128,128,0)—the same as rgb(128, 128, 0) in CSS. Dark olive #556B2F uses RGB(85,107,47) for navigation and pressed states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors pair with olive green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terracotta (#E2725B), cream (#FFF8F0), navy (#000080), rust (#B7410E), and charcoal (#36454F) are reliable olive partners. Always verify text and button contrast with a WCAG checker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is olive green the same as army green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not exactly. Olive (#808000) is a balanced yellow-green at 25% lightness. Army green (#4B5320) is darker and grayer. Use separate tokens so UI hover states do not drift between them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is olive green good for websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—for outdoor, sustainability, and heritage brands when used as structure—not as full-screen saturated fills. Pair with cream or off-white content wells and test white-on-olive text for accessibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between olive green and sage green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Olive (#808000) is a saturated yellow-green with equal red and green channels. Sage (#B2AC88) is a muted gray-green with lower chroma. Use olive for bold navigation; sage for calm wellness backgrounds.',
      },
    },
  ],
};

export default function OliveGreenHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="olive-green-hex-code" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-[#2F2F1A] via-[#556B2F] to-[#808000] text-white py-12 md:py-16">
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
              Olive Green Hex Code: #808000 — Copy + RGB, Shades &amp; Pairings
            </h1>
            <p className="text-lime-100/95 text-lg max-w-3xl mb-6">
              Quick reference for olive green hex, RGB, HSL, and colour codes—plus ten shades from pale yellow-green to deep dark olive, four palette pairings, and UI notes in one place.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#808000]"
              role="img"
              aria-label="Olive green color sample, hex 808000"
            />
            <div className="flex items-center gap-4 text-lime-100/90 text-sm flex-wrap">
              <time dateTime="2026-05-21">Published May 21, 2026</time>
              <span>•</span>
              <time dateTime="2026-06-11">Updated June 11, 2026</time>
              <span>•</span>
              <span>10 min read</span>
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
                <OliveGreenQuickAnswer />
                <OliveGreenRgbSection />
                <OliveGreenFormatCodesSection />

                <div className="not-prose space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    What is the Olive Green HTML Color Code?
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    The <strong className="text-gray-900 dark:text-white">olive green html color code</strong> is{' '}
                    <strong className="text-gray-900 dark:text-white">#808000</strong>. It is a valid CSS and HTML color value—you can paste it into stylesheets, inline styles, SVG fills, and React theme files. Browsers also recognize the keyword{' '}
                    <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">olive</code>, which resolves to the same hex.
                  </p>
                </div>

                <OliveGreenShadesTable />

                <PalettePairingsSection
                  title="Olive Green Palette Pairings"
                  intro="Four olive green combinations with copy-ready hex codes—terracotta warmth, cream editorial, navy heritage, and rust autumn accents."
                  pairings={OLIVE_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#808000" />
                    </strong>{' '}
                    is the olive green hex code most designers need first. If you searched for <strong className="text-gray-900 dark:text-white">olive green hex code</strong>,{' '}
                    <strong className="text-gray-900 dark:text-white">olive green color code</strong>, or <strong className="text-gray-900 dark:text-white">olive hex</strong>, you want a muted yellow-green—not bright lawn green and not gray sage. CSS resolves{' '}
                    <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">color: olive;</code> to this exact hex. Deeper UI olives such as{' '}
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#556B2F" />
                    </strong>{' '}
                    and moss <CopyableHex hex="#3D4A1F" /> often feel more premium on navigation than the mid-tone alone.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Olive green hex code (the usual answers)</h2>
                  <p className="mb-4">
                    The canonical <strong className="text-gray-900 dark:text-white">olive green hex</strong> on the web is the CSS named color{' '}
                    <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">olive</code>, which is{' '}
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#808000" />
                    </strong>{' '}
                    — rgb(128, 128, 0). At HSL(60, 100%, 25%) it sits midway between yellow and green: equal red and green channels with no blue, which is why olive reads earthy rather than neon. Not sure what to call a hex from a screenshot? Use our{' '}
                    <InlineTagLink href="/tools/color-name-finder">color name finder</InlineTagLink> to match it to the nearest named color.
                  </p>
                  <p className="mb-6 font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg not-prose flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>CSS named:</span> <CopyableHex hex="#808000" />
                    <span className="text-gray-400">·</span>
                    <span>Dark olive:</span> <CopyableHex hex="#556B2F" />
                    <span className="text-gray-400">·</span>
                    <span>Army green:</span> <CopyableHex hex="#4B5320" />
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Olive green colour code (UK) and RGB</h2>
                  <p className="mb-4">
                    British English searches for <strong className="text-gray-900 dark:text-white">olive green colour code</strong> still expect hex on screen—the digits do not change by region. For accessibility documentation, list hex, RGB, and HSL so developers anywhere implement the same appearance.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li className="pl-1">
                      <CopyableHex hex="#808000" /> → RGB rgb(128, 128, 0)
                    </li>
                    <li className="pl-1">
                      <CopyableHex hex="#556B2F" /> → RGB rgb(85, 107, 47)
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Olive green vs sage green vs forest green</h2>
                  <p className="mb-4">
                    Searchers often conflate natural greens. <strong className="text-gray-900 dark:text-white">Olive</strong> (<CopyableHex hex="#808000" />) is a saturated yellow-green. <strong className="text-gray-900 dark:text-white">Sage</strong> (<CopyableHex hex="#B2AC88" />) is a muted gray-green for wellness UI. <strong className="text-gray-900 dark:text-white">Forest green</strong> (<CopyableHex hex="#228B22" />) is brighter and more purely green. Define which name maps to which hex in your style guide so developers do not swap them in CSS by habit.
                  </p>
                  <p className="mb-6">
                    Avoid stacking olive with forest green in the same layout unless one is clearly secondary—two natural greens fight for “which is the eco brand color.” Pair olive with terracotta or navy instead; see our{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">forest green hex guide</InlineTagLink> and{' '}
                    <InlineTagLink href="/blog/sage-green-hex-code">sage green hex guide</InlineTagLink> for adjacent ramps.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Olive green in UI and accessibility</h2>
                  <p className="mb-4">
                    Olive works for navigation bars, outdoor retail headers, and sustainability badges when contrast is verified. White text on <CopyableHex hex="#808000" /> can pass WCAG AA for large bold headings but may fail for small body copy—always test your exact font weight and size. On light backgrounds, use dark olive like <CopyableHex hex="#556B2F" /> for text and links instead of the mid-tone swatch.
                  </p>
                  <p className="mb-4">
                    Dark mode needs separate tokens: olive headers that feel rich on white can glow too brightly on #111827. Desaturate accent olives by 10–15% for dark surfaces, and re-run contrast for every state. The{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> catches failures before launch.
                  </p>
                  <p className="mb-6">
                    Extend hover and disabled steps from <CopyableHex hex="#808000" /> in the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, or blend olive with terracotta in the{' '}
                    <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink> when you need custom autumn transitions.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Olive green in branding and print</h2>
                  <p className="mb-4">
                    Olive evokes olive oil, dry grasslands, and utilitarian workwear—categories where authenticity beats hyper-saturated digital green. Pair with terracotta and cream for food and hospitality; navy and gold when you need institutional weight. Document web olive (#808000) separately from print Pantone or textile dyes; fabric olive often reads grayer under store lighting.
                  </p>
                  <p className="mb-6">
                    When stakeholders ask for “army green,” show <CopyableHex hex="#4B5320" /> from the shade ladder rather than stretching #808000 darker in Photoshop. CMYK approximations for coated stock often land near <strong className="text-gray-900 dark:text-white">C:0 M:0 Y:100 K:50</strong>, but always request a physical proof when packaging must match a screen token.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Also searched for</h2>
                  <dl className="space-y-6 not-prose mb-8">
                    {faqSchema.mainEntity.slice(0, 4).map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Related colors</h2>
                  <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <li>
                      <InlineTagLink href="/blog/forest-green-hex-code">Forest Green Hex Code</InlineTagLink> — richer yellow-green for eco UI
                    </li>
                    <li>
                      <InlineTagLink href="/blog/sage-green-hex-code">Sage Green Hex Code</InlineTagLink> — muted gray-green partner for olive layouts
                    </li>
                    <li>
                      <InlineTagLink href="/blog/terracotta-hex-code">Terracotta Hex Code</InlineTagLink> — warm clay accent beside olive
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Where to go next</h2>
                  <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <li>
                      <InlineTagLink href="/tools/palette-generator">Generate harmonies from any olive green hex</InlineTagLink>
                    </li>
                    <li>
                      <InlineTagLink href="/tools/color-mixer">Mix olive green with accent colors in the Color Mixing Simulator</InlineTagLink>
                    </li>
                  </ul>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20 space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Olive palette (copy hex)
                    </h3>
                    <ColorPaletteClient colors={OLIVE_PALETTE} designTitle="Olive Green" showHexCopyIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Olive + rust quick copy
                    </h3>
                    <ColorPaletteClient colors={RUST_ACCENT} designTitle="Olive & rust" showHexCopyIcon />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
