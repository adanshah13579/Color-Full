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
  path: '/blog/terracotta-color-palette',
  title: '#E2725B Terracotta Color Palette — Copy Hex Codes',
  description:
    'Terracotta color palette #E2725B · RGB(226,114,91). Copy terracotta hex codes, 10 shades, sage & navy combos. Warm earthy palette for web & brand design.',
  keywords: [
    'terracotta color palette',
    'terracotta color code',
    'terracotta hex code',
    'terracotta colour code',
    'terra cotta color code',
    'terra cotta hex code',
    'terracotta rgb',
    '#E2725B',
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
  '#E2725B Terracotta Color Palette — Copy Hex Codes',
  'Terracotta color palette #E2725B · RGB(226,114,91). Copy terracotta hex codes, 10 shades, sage & navy combos. Warm earthy palette for web & brand design.',
  'terracotta-color-palette',
  getBlogArticleDatePublished('terracotta-color-palette'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const QUICK_ROWS = [
  { label: 'Hex', value: '#E2725B' },
  { label: 'RGB', value: 'rgb(226, 114, 91)' },
  { label: 'HSL', value: 'hsl(11, 70%, 62%)' },
];

const TERRACOTTA_SHADES = [
  { name: 'Linen', hex: '#FAF0E6' },
  { name: 'Peach puff', hex: '#FFDAB9' },
  { name: 'Apricot', hex: '#FBCEB1' },
  { name: 'Light terracotta', hex: '#E8956D' },
  { name: 'Terracotta', hex: '#E2725B' },
  { name: 'Burnt sienna', hex: '#E97451' },
  { name: 'Rust', hex: '#B7410E' },
  { name: 'Burnt umber', hex: '#8A3324' },
  { name: 'Chocolate', hex: '#7B3F00' },
  { name: 'Dark brown', hex: '#5C2E00' },
];

const TERRACOTTA_COMBINATIONS = [
  {
    title: 'Terracotta + Sage + Cream',
    body: 'Modern organic retail: terracotta CTAs (#E2725B), sage navigation (#B2AC88), cream shelves (#FFFDD0), charcoal captions.',
    swatches: [
      { hex: '#E2725B', label: 'Terracotta' },
      { hex: '#B2AC88', label: 'Sage' },
      { hex: '#FFFDD0', label: 'Cream' },
      { hex: '#36454F', label: 'Charcoal' },
    ],
  },
  {
    title: 'Terracotta + Navy + White',
    body: 'Structured contrast: navy heroes (#000080), terracotta accents, white product cards, cool gray secondary text.',
    swatches: [
      { hex: '#E2725B', label: 'Terracotta' },
      { hex: '#000080', label: 'Navy' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#64748B', label: 'Slate' },
    ],
  },
  {
    title: 'Terracotta + Cream + Rust',
    body: 'Hospitality and ceramics: cream walls, rust #B7410E pressed states, terracotta primary buttons on linen #FAF0E6.',
    swatches: [
      { hex: '#E2725B', label: 'Terracotta' },
      { hex: '#FAF0E6', label: 'Linen' },
      { hex: '#B7410E', label: 'Rust' },
      { hex: '#FBCEB1', label: 'Apricot' },
    ],
  },
  {
    title: 'Terracotta + Dusty rose + Ivory',
    body: 'Soft lifestyle editorial: dusty rose tags (#DCAE96), ivory reading wells (#FFFFF0), terracotta mastheads.',
    swatches: [
      { hex: '#E2725B', label: 'Terracotta' },
      { hex: '#DCAE96', label: 'Dusty rose' },
      { hex: '#FFFFF0', label: 'Ivory' },
      { hex: '#8A3324', label: 'Umber' },
    ],
  },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#E2725B', colorName: 'Terracotta', rgbCode: 'rgb(226, 114, 91)' },
  { hexCode: '#B2AC88', colorName: 'Sage', rgbCode: 'rgb(178, 172, 136)' },
  { hexCode: '#FFFDD0', colorName: 'Cream', rgbCode: 'rgb(255, 253, 208)' },
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#B7410E', colorName: 'Rust', rgbCode: 'rgb(183, 65, 14)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the terracotta color code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard terracotta color code is #E2725B in hex and rgb(226, 114, 91). Rust (#B7410E) and burnt umber (#8A3324) are common darker companions for navigation and hover states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the terra cotta hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terra cotta hex code is the same as terracotta: #E2725B. Spelling varies in search (terra cotta vs terracotta); digital values do not change.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go in a terracotta color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pair terracotta with sage (#B2AC88), cream (#FFFDD0), navy (#000080), and charcoal (#36454F). Use rust and umber rows from the shade table for depth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is terracotta good for website UI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes for food, home, travel, and wellness brands. Use terracotta for CTAs and accents, cream or white for reading areas, and validate white or dark labels on terracotta buttons with a contrast checker.',
      },
    },
  ],
};

function TerracottaCombinationCard({ combo }) {
  return (
    <li className="rounded-xl border border-orange-200/80 dark:border-stone-600 bg-white dark:bg-stone-800/60 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{combo.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{combo.body}</p>
      <div className="grid grid-cols-4 gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-stone-600 mb-2">
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

export default function TerracottaColorPalettePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="terracotta-color-palette" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-[#3d1810] via-[#7B3F00] to-[#E2725B] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-orange-100/90 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Terracotta Color Palette: Hex Codes, Shades &amp; Combinations
            </h1>
            <p className="text-orange-50/95 text-lg max-w-3xl mb-6">
              Build a complete <strong className="text-white font-semibold">terracotta color palette</strong> from #E2725B—ten
              clay-to-brown shades, four combinations with sage and navy, and branding notes for warm earthy design.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#E2725B]"
              role="img"
              aria-label="Terracotta color swatch hex E2725B"
            />
            <div className="flex items-center gap-4 text-orange-100/85 text-sm">
              <time dateTime="2026-06-01">June 1, 2026</time>
              <span>•</span>
              <span>10 min read</span>
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
                  ariaLabel="Terracotta palette quick answer"
                  headline="Terracotta = #E2725B"
                  subtext="Canonical terracotta hex code and terracotta rgb (226, 114, 91)—copy hex, RGB, or HSL for tokens."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    Whether you search for a <strong className="text-gray-900 dark:text-white">terracotta hex code</strong>, a{' '}
                    <strong className="text-gray-900 dark:text-white">terracotta colour code</strong> in UK guides, or the split
                    spelling <strong className="text-gray-900 dark:text-white">terra cotta color code</strong>, you want the same
                    sun-baked clay anchor: <strong className="text-gray-900 dark:text-white">#E2725B</strong>. The{' '}
                    <strong className="text-gray-900 dark:text-white">terracotta color code</strong> maps to rgb(226, 114, 91)—a
                    muted orange-red that reads artisanal on cream and credible next to sage or navy. This guide packages ten
                    shades, four four-color combinations, and UI patterns so home, food, and travel brands ship one coherent{' '}
                    <strong className="text-gray-900 dark:text-white">terracotta color palette</strong> instead of five similar
                    oranges from different decks.
                  </p>
                  <p className="mb-6">
                    Paint catalogs and tile showrooms often label swatches “terra cotta” without a digital hex—document #E2725B as
                    your canonical <strong className="text-gray-900 dark:text-white">terra cotta hex code</strong> in Figma and
                    CSS so web, app, and print stay aligned. When packaging must match photography of real clay, note the delta
                    between screen terracotta and Pantone or CMYK specs in your brand PDF.
                  </p>
                </div>

                <PaletteShadesTable
                  title="Terracotta Shades — Hex Code Table"
                  description="From airy linen and peach through core terracotta to rust, umber, and chocolate. Light rows for backgrounds; #E2725B and rust for CTAs and pressed states."
                  shades={TERRACOTTA_SHADES}
                />

                <div className="not-prose rounded-2xl border border-orange-200/90 dark:border-orange-950/50 bg-orange-50/70 dark:bg-stone-900/50 p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Terracotta Color Palette Combinations</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Four ready-made palettes with copy-ready hex codes. Use terracotta as the warm accent—CTAs, badges, illustration
                    fills—and keep cream or white for long reading so pages do not feel like solid clay.
                  </p>
                  <ul className="space-y-4">
                    {TERRACOTTA_COMBINATIONS.map((combo) => (
                      <TerracottaCombinationCard key={combo.title} combo={combo} />
                    ))}
                  </ul>
                </div>

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 bg-white dark:bg-gray-800/40">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Terracotta in UI Design</h2>
                  <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Food and CPG.</strong> Terracotta #E2725B primary buttons
                      on white or cream (#FFFDD0) echo packaging without neon orange alarm. Rust #B7410E suits hover and active
                      states; validate white label text with the{' '}
                      <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Home and travel.</strong> Pair terracotta with sage #B2AC88
                      for Mediterranean calm, or navy #000080 for editorial structure. Linen #FAF0E6 section backgrounds keep
                      photography forward.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Forms and seasonal skins.</strong> Apricot #FBCEB1 makes
                      soft highlight wells; reserve saturated terracotta for submits and sale ribbons. Seed #E2725B in the{' '}
                      <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> to build autumn tint ramps on
                      one hue angle.
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Terracotta in Branding</h2>
                  <p className="mb-4">
                    Terracotta signals craft, earth, and warmth—ceramic studios, farm-to-table grocers, boutique hotels, and
                    sustainable fashion use a terracotta color palette because it feels human next to kraft brown and corporate
                    blue. Sage + cream reads organic; navy + white reads trustworthy; dusty rose + ivory updates the story for
                    beauty without losing heat.
                  </p>
                  <p className="mb-4">
                    Logo marks on white need rust or umber companions for small-size legibility; logos on terracotta fields should
                    invert to cream or white with tested stroke weights. Document forbidden pairs—such as light terracotta captions
                    on peach backgrounds—in your design system README so CMS authors do not drift off-palette.
                  </p>
                  <p className="mb-6">
                    Multi-channel teams should list one digital terracotta hex (#E2725B) and a separate print reference when ink gain
                    shifts clay toward brown. Teams that skip that split inevitably compensate in each export and lose a coherent
                    brand color story across social, web, and packaging.
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
                    <InlineTagLink href="/blog/terracotta-hex-code">Terracotta Hex Code (#E2725B)</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/sage-green-hex-code">Sage Green Hex Code</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/burgundy-color-palette">Burgundy Color Palette</InlineTagLink>
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Terracotta palette (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Terracotta palette" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
