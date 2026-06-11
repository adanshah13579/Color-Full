import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import { PaletteQuickAnswer, PalettePairingsSection } from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';

const LAST_MODIFIED = '2026-06-11T00:00:00.000Z';

const HEX = '#C4B5FD';

export const metadata = buildPageMetadata({
  path: '/blog/c4b5fd-color',
  title: '#C4B5FD Color: Soft Lavender Purple — Name, RGB & Palettes',
  description:
    '#C4B5FD is soft lavender purple (Tailwind purple-300). RGB(196,181,253) · HSL(252,93%,85%). Copy hex code, see similar colors and palette pairings.',
  keywords: [
    'c4b5fd',
    'c4b5fd color',
    '#C4B5FD',
    'c4b5fd hex',
    'lavender purple hex',
    'purple-300',
    'tailwind purple 300',
    'lavender hex code',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-06-01T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  '#C4B5FD Color: Soft Lavender Purple — Name, RGB & Palettes',
  '#C4B5FD is soft lavender purple (Tailwind purple-300). RGB(196,181,253) · HSL(252,93%,85%). Copy hex code, see similar colors and palette pairings.',
  'c4b5fd-color',
  getBlogArticleDatePublished('c4b5fd-color'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const QUICK_ROWS = [
  { label: 'Name', value: 'Lavender Purple' },
  { label: 'Hex', value: HEX },
  { label: 'RGB', value: 'rgb(196, 181, 253)' },
  { label: 'HSL', value: 'hsl(252, 93%, 85%)' },
];

const SIMILAR_COLORS = [
  { hexCode: '#EDE9FE', colorName: 'Mist lavender', rgbCode: 'rgb(237, 233, 254)' },
  { hexCode: '#DDD6FE', colorName: 'Pale violet', rgbCode: 'rgb(221, 214, 254)' },
  { hexCode: '#C4B5FD', colorName: 'Lavender purple', rgbCode: 'rgb(196, 181, 253)' },
  { hexCode: '#A78BFA', colorName: 'Soft lavender', rgbCode: 'rgb(167, 139, 250)' },
  { hexCode: '#8B5CF6', colorName: 'Purple', rgbCode: 'rgb(139, 92, 246)' },
];

const PAIRINGS = [
  {
    title: 'Lavender + charcoal + white',
    body: 'Use #C4B5FD for section washes and cards, #111827 for body copy, and #7C3AED for primary CTAs so hierarchy stays clear.',
    swatches: ['#C4B5FD', '#111827', '#FFFFFF'],
  },
  {
    title: 'Lavender + cream + royal violet',
    body: 'Cream #FFFBEB reading wells, pastel lavender backgrounds, and #7C3AED buttons suit beauty and creative SaaS brands.',
    swatches: ['#C4B5FD', '#FFFBEB', '#7C3AED'],
  },
  {
    title: 'Lavender + blush accent',
    body: 'Dusty blush #FBCFE8 tags and dividers keep the palette soft; reserve #C4B5FD for highlights—not small gray text.',
    swatches: ['#C4B5FD', '#FBCFE8', '#8B5CF6'],
  },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#C4B5FD', colorName: 'Lavender purple', rgbCode: 'rgb(196, 181, 253)' },
  { hexCode: '#7C3AED', colorName: 'Royal violet', rgbCode: 'rgb(124, 58, 237)' },
  { hexCode: '#EDE9FE', colorName: 'Mist lavender', rgbCode: 'rgb(237, 233, 254)' },
  { hexCode: '#111827', colorName: 'Charcoal', rgbCode: 'rgb(17, 24, 39)' },
  { hexCode: '#FFFBEB', colorName: 'Cream', rgbCode: 'rgb(255, 251, 235)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What color is #C4B5FD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '#C4B5FD is a light lavender-purple in the violet family—RGB(196, 181, 253). It is commonly called lavender purple and matches Tailwind CSS purple-300.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the RGB value of #C4B5FD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The #C4B5FD RGB code is rgb(196, 181, 253)—red 196, green 181, blue 253. In HSL it is approximately hsl(252, 93%, 85%).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is #C4B5FD called in Tailwind CSS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Tailwind CSS v3+, #C4B5FD is the default purple-300 swatch. Use bg-purple-300, text-purple-300, or border-purple-300 in utility classes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go with #C4B5FD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pair #C4B5FD with charcoal (#111827) for type, cream (#FFFBEB) for backgrounds, royal violet (#7C3AED) for CTAs, and blush (#FBCFE8) for soft accents. Test contrast before using light purple for small text.',
      },
    },
  ],
};

function HexColorToolsCTA() {
  return (
    <section className="my-12 not-prose">
      <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/60 dark:bg-violet-950/30 p-6 md:p-7">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Identify and build with this color</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5">
          Paste any hex to find its closest name, or generate a full palette from #C4B5FD.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/tools/color-name-finder"
            className="block rounded-lg border border-violet-200 bg-white px-4 py-3 text-sm font-semibold text-violet-900 shadow-sm hover:border-violet-400 hover:bg-violet-50 dark:border-violet-700 dark:bg-violet-950 dark:text-violet-100 dark:hover:bg-violet-900 transition-colors text-center"
          >
            Color Name Finder
          </Link>
          <Link
            href="/tools/palette-generator"
            className="block rounded-lg border border-violet-200 bg-white px-4 py-3 text-sm font-semibold text-violet-900 shadow-sm hover:border-violet-400 hover:bg-violet-50 dark:border-violet-700 dark:bg-violet-950 dark:text-violet-100 dark:hover:bg-violet-900 transition-colors text-center"
          >
            Color Palette Generator
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function C4B5fdColorPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="c4b5fd-color" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-violet-200 via-purple-300 to-violet-600 text-gray-900 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-violet-900/80 hover:text-violet-950 mb-6 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-violet-950">
              #C4B5FD Color: Soft Lavender Purple — Name, RGB &amp; Palettes
            </h1>
            <p className="text-violet-900/90 text-lg max-w-3xl mb-6">
              You found <strong className="font-semibold">#C4B5FD</strong> in Figma, Tailwind, or a codebase—here is the{' '}
              <strong className="font-semibold">c4b5fd color</strong> name, RGB values, similar swatches, and palette pairings.
            </p>
            <div
              className="w-full max-w-2xl h-40 md:h-52 rounded-2xl border-2 border-violet-400/50 shadow-2xl mb-6 bg-[#C4B5FD]"
              role="img"
              aria-label="Large swatch of color C4B5FD lavender purple"
            />
            <div className="flex items-center gap-4 text-violet-900/80 text-sm">
              <time dateTime="2026-06-11">Updated June 11, 2026</time>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-white leading-relaxed border-l-4 border-violet-400 bg-violet-50/90 dark:bg-violet-950/30 dark:border-violet-500 pl-5 pr-4 py-4 rounded-r-xl">
                  #C4B5FD is a soft lavender purple color, known as Tailwind CSS purple-300. RGB value is (196, 181, 253).
                </p>

                <PaletteQuickAnswer
                  theme="purple"
                  ariaLabel="C4B5FD quick reference"
                  headline="#C4B5FD = Lavender Purple"
                  subtext="Copy the hex, RGB, or HSL for design tokens, CSS variables, and handoff docs."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold mt-2 mb-4">What Color is #C4B5FD?</h2>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">#C4B5FD</strong> is a light{' '}
                    <strong className="text-gray-900 dark:text-white">lavender purple</strong>—a soft violet with high
                    lightness and strong blue undertone. It sits between pale lilac and mid purple on the ramp: not as airy as
                    mist lavender (#EDE9FE), not as saturated as #8B5CF6. Designers paste this hex when they inherit a UI kit,
                    inspect a component in DevTools, or export from Tailwind and need a human-readable name for stakeholders.
                  </p>
                  <p className="mb-4">
                    In the traditional color wheel sense, this is part of the{' '}
                    <strong className="text-gray-900 dark:text-white">violet family</strong>: cool, calm, and slightly playful.
                    It reads feminine and modern without the neon edge of electric purple. Because lightness is high (about 85%
                    in HSL), it works best as a background, border tint, or illustration fill—not as default body text on white
                    (contrast is too low for small type).
                  </p>
                  <p className="mb-6">
                    If you are documenting tokens, label it clearly—e.g.{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">surface.lavender</code>{' '}
                    or <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">purple.300</code>—so
                    engineers do not confuse it with adjacent steps like #DDD6FE or #A78BFA.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Colors Similar to #C4B5FD</h2>
                  <p className="mb-4">
                    These five hex codes bracket #C4B5FD on a typical violet scale. Click any swatch to copy hex or RGB—use
                    lighter neighbors for page backgrounds and darker ones for buttons and links.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 not-prose mb-8">
                  {SIMILAR_COLORS.map((c) => (
                    <ColorSwatch key={c.hexCode} color={c.hexCode} name={c.colorName} hexCode={c.hexCode} showHexCopyIcon />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                  <strong className="text-gray-900 dark:text-white">#EDE9FE</strong> and <strong className="text-gray-900 dark:text-white">#DDD6FE</strong> are
                  lighter tints for cards and empty states. <strong className="text-gray-900 dark:text-white">#A78BFA</strong> and{' '}
                  <strong className="text-gray-900 dark:text-white">#8B5CF6</strong> add enough chroma for accessible CTAs when paired with white labels—always verify
                  with the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                </p>

                <PalettePairingsSection
                  title="#C4B5FD Color Palette Pairings"
                  intro="Three four-color palettes that keep lavender purple as the calm surface while deeper violets and neutrals handle structure."
                  pairings={PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold mt-8 mb-4">Where is #C4B5FD Used?</h2>
                  <p className="mb-4">
                    The most common reference is <strong className="text-gray-900 dark:text-white">Tailwind CSS purple-300</strong>.
                    In Tailwind v3 default theme, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">purple-300</code> resolves to{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">#c4b5fd</code>. You will see it in utility classes such as{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">bg-purple-300</code>,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">text-purple-300</code>, and{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">ring-purple-300</code> across marketing sites, admin dashboards, and component libraries built on Tailwind.
                  </p>
                  <p className="mb-4">
                    Beyond Tailwind, teams adopt #C4B5FD in design systems for creative tech, wellness apps, and education products
                    where purple signals imagination without corporate blue stiffness. It often appears in chart fills, tag
                    chips, and onboarding illustrations. When a brand already uses{' '}
                    <InlineTagLink href="/blog/purple-dream">Purple Dream</InlineTagLink> ramps, #C4B5FD is typically the mid-light
                    background step—not the primary brand purple.
                  </p>
                  <p className="mb-6">
                    Paste #C4B5FD into our{' '}
                    <InlineTagLink href="/tools/color-name-finder">color name finder</InlineTagLink> to see the nearest CSS named
                    color and synonyms, then seed the same hex in the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> to export harmonized tints for
                    hover, focus, and dark mode. That workflow matches why people search raw hex codes: they have the number first
                    and need language and companions second.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <HexColorToolsCTA />

                  <p className="mt-8 mb-6 text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Related:</strong>{' '}
                    <InlineTagLink href="/blog/purple-dream">Purple Dream Palette</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/pink-and-purple-color">Pink and Purple Color Mix</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/navy-blue-hex-code">Navy Blue #000080</InlineTagLink>
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Lavender purple (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="#C4B5FD" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
