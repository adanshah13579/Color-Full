import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
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
  ForestGreenRgbFormatBox,
  ForestGreenConversionTable,
  ForestGreenRgbShadesTable,
} from './ForestGreenRgbLead';

const LAST_MODIFIED = '2026-06-11T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/forest-green-rgb',
  title: 'Forest Green RGB: RGB(34,139,34) — Color Code, Hex & HSL Values',
  description:
    'Forest green RGB value is RGB(34, 139, 34). Hex code #228B22 · HSL(120°,61%,34%) · CMYK(76,0,76,45). Copy all forest green color formats instantly.',
  keywords: [
    'forest green rgb',
    'forest green rgb code',
    'forest green rgb value',
    'RGB(34,139,34)',
    '#228B22',
    'forest green color code',
    'Theme & Color',
  ],
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
  'Forest Green RGB: RGB(34,139,34) — Color Code, Hex & HSL Values',
  'Forest green RGB value is RGB(34, 139, 34). Hex code #228B22 · HSL(120°,61%,34%) · CMYK(76,0,76,45). Copy all forest green color formats instantly.',
  'forest-green-rgb',
  getBlogArticleDatePublished('forest-green-rgb'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const SIDEBAR_PALETTE = [
  { hexCode: '#228B22', colorName: 'Forest green', rgbCode: 'rgb(34, 139, 34)' },
  { hexCode: '#065F46', colorName: 'Deep UI green', rgbCode: 'rgb(6, 95, 70)' },
  { hexCode: '#10B981', colorName: 'Emerald', rgbCode: 'rgb(16, 185, 129)' },
  { hexCode: '#34D399', colorName: 'Mint', rgbCode: 'rgb(52, 211, 153)' },
  { hexCode: '#355E3B', colorName: 'Hunter green', rgbCode: 'rgb(53, 94, 59)' },
];

const HERO_SWATCHES = [
  { hexCode: '#228B22', colorName: 'Forest green', rgbCode: 'rgb(34, 139, 34)' },
  { hexCode: '#3CB371', colorName: 'Sea green', rgbCode: 'rgb(60, 179, 113)' },
  { hexCode: '#355E3B', colorName: 'Hunter green', rgbCode: 'rgb(53, 94, 59)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the forest green RGB value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The forest green RGB value is RGB(34, 139, 34)—red 34, green 139, blue 34. In CSS write color: rgb(34, 139, 34). This equals hex #228B22 and HSL(120, 61%, 34%).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the forest green RGB code in CSS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use rgb(34, 139, 34) or the keyword forestgreen in CSS—both resolve to the same appearance as #228B22. Modern syntax also accepts rgb(34 139 34 / 1) without commas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you convert forest green RGB to hex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RGB(34, 139, 34) converts to hex #228B22. Red 34 = 0x22, green 139 = 0x8B, blue 34 = 0x22. Design tools and browser DevTools perform this conversion automatically when you paste either format.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is forest green RGB the same as sage or olive green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Forest green RGB(34,139,34) is a saturated yellow-green. Sage (#B2AC88) is RGB(178,172,136)—muted gray-green. Olive (#808000) is RGB(128,128,0)—equal red and green with no blue. Use separate tokens for each.',
      },
    },
  ],
};

export default function ForestGreenRgbPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="forest-green-rgb" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-500 text-white py-12 md:py-16">
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
              Forest Green RGB: RGB(34,139,34) — Color Code, Hex &amp; HSL Values
            </h1>
            <p className="text-emerald-100 text-lg max-w-3xl mb-6">
              Copy the <strong className="text-white font-semibold">forest green RGB</strong> value RGB(34, 139, 34)—plus hex #228B22, HSL, CMYK, CSS examples, and eight RGB shades in one reference.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#228B22]"
              role="img"
              aria-label="Forest green color sample RGB 34 139 34"
            />
            <div className="flex items-center gap-4 text-emerald-100 text-sm flex-wrap">
              <time dateTime="2026-06-11">June 11, 2026</time>
              <span>•</span>
              <span>7 min read</span>
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
                <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-white leading-relaxed border-l-4 border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/30 dark:border-emerald-400 pl-5 pr-4 py-4 rounded-r-xl">
                  Forest green RGB value is RGB(34, 139, 34). This equals hex code #228B22 and HSL(120°, 61%, 34%). In CMYK it is C:76 M:0 Y:76 K:45.
                </p>

                <ForestGreenRgbFormatBox />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">Forest Green RGB Color Code</h2>
                  <p className="mb-4">
                    The <strong className="text-gray-900 dark:text-white">forest green rgb color code</strong> describes how much red, green, and blue light mix on screen to produce the CSS named color <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">forestgreen</code>. For canonical forest green, red is low (34), green is high (139), and blue is low (34)—a yellow-green hue at moderate saturation.
                  </p>
                  <p className="mb-4">
                    Engineers paste <strong className="text-gray-900 dark:text-white">RGB(34, 139, 34)</strong> into Android XML color resources, React Native themes, and Figma variable exports. Designers paste <strong className="text-gray-900 dark:text-white">#228B22</strong> into CSS. Both describe the same appearance; pick one source of truth in your design system and derive the other programmatically so refactors do not drift.
                  </p>
                  <p className="mb-6">
                    If you need the fuller shade ladder and palette pairings, see our{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">forest green hex code guide</InlineTagLink>—this page focuses on RGB-first searches and format conversion.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Convert Forest Green to Other Formats</h2>
                  <p className="mb-4">
                    Searchers looking up <strong className="text-gray-900 dark:text-white">forest green rgb</strong> often need hex, HSL, or CMYK in the same breath. The conversion table below maps every common format for RGB(34, 139, 34):
                  </p>
                </div>

                <ForestGreenConversionTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Forest Green RGB in CSS</h2>
                  <p className="mb-4">
                    Paste forest green RGB directly into stylesheets. All three forms below resolve to the same color in modern browsers:
                  </p>
                  <pre className="not-prose text-sm font-mono bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
{`/* RGB function */
color: rgb(34, 139, 34);
background-color: rgb(34, 139, 34);

/* Hex equivalent */
color: #228B22;

/* CSS named color */
color: forestgreen;`}
                  </pre>
                  <p className="mb-4">
                    For design tokens, store <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-forest: 34 139 34</code> in OKLCH-first systems, or <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-forest: #228B22</code> in hex-first stacks. Use <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">rgb(var(--color-forest) / &lt;alpha-value&gt;)</code> when you need opacity modifiers in Tailwind v4-style pipelines.
                  </p>
                  <p className="mb-6">
                    White text on <CopyableHex hex="#228B22" /> often passes WCAG AA for large bold headings but may fail for 14px body copy—run your exact font through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before shipping production UI.
                  </p>
                </div>

                <ForestGreenRgbShadesTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-4">
                    The shade table lists eight greens with both <strong className="text-gray-900 dark:text-white">forest green rgb</strong> and hex so Android, iOS, and web teams share one reference. Use lighter rows (rgb(144, 238, 144), rgb(60, 179, 113)) for backgrounds; canonical rgb(34, 139, 34) for primary brand green; hunter and deep forest rows for navigation and pressed states.
                  </p>
                  <p className="mb-6">
                    Extend any anchor RGB into hover and disabled ramps with the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, or explore full{' '}
                    <InlineTagLink href="/blog/forest-green-color-palette">forest green color palette</InlineTagLink> combinations with terracotta, cream, and sage.
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
                      <InlineTagLink href="/blog/forest-green-hex-code">Forest Green Hex Code</InlineTagLink> — full hex guide with shades and pairings
                    </li>
                    <li>
                      <InlineTagLink href="/blog/forest-green-color-palette">Forest Green Color Palette</InlineTagLink> — combinations with terracotta, cream, and sage
                    </li>
                  </ul>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Forest green (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Forest Green RGB" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
