import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import {
  MixRatioTable,
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

const LAST_MODIFIED = '2026-06-05T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/what-color-does-pink-and-purple-make',
  title: 'What Color Does Pink and Purple Make? Magenta & Hex Codes',
  description:
    'Pink and purple mixed make magenta or mauve. See hex codes for every pink-purple mix ratio, color swatches, and palette combinations.',
  keywords: [
    'what color does pink and purple make',
    'pink and purple make what color',
    'pink purple mix hex',
    'magenta hex',
    'mauve hex',
    'pink and purple mixed',
    'color mixing',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: LAST_MODIFIED,
    modifiedTime: LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'What Color Does Pink and Purple Make? Magenta & Hex Codes',
  'Pink and purple mixed make magenta or mauve. See hex codes for every pink-purple mix ratio, color swatches, and palette combinations.',
  'what-color-does-pink-and-purple-make',
  getBlogArticleDatePublished('what-color-does-pink-and-purple-make'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const MIX_ROWS = [
  { ratio: '90% pink + 10% purple', label: 'Light rose magenta', hex: '#FF8FC8' },
  { ratio: '80% pink + 20% purple', label: 'Soft magenta', hex: '#F06BB8' },
  { ratio: '60% pink + 40% purple', label: 'Rose magenta', hex: '#D85AAB' },
  { ratio: '50% pink + 50% purple', label: 'Vibrant magenta-purple', hex: '#BF34CA' },
  { ratio: '40% pink + 60% purple', label: 'Berry purple', hex: '#A640B0' },
  { ratio: '20% pink + 80% purple', label: 'Deep mauve', hex: '#8C2D9A' },
  { ratio: '10% pink + 90% purple', label: 'Rich violet', hex: '#7A2585' },
];

const FAQ = [
  {
    question: 'What color does pink and purple make?',
    answer:
      'Pink and purple mixed together make magenta or mauve depending on the ratio. A balanced 50/50 blend of hot pink (#FF69B4) and purple (#800080) produces #BF34CA—a vibrant pink-purple magenta. More pink yields lighter rosy tones; more purple yields deeper violet and wine-adjacent hues.',
  },
  {
    question: 'What is the hex code for pink and purple mixed?',
    answer:
      'The canonical even mix is #BF34CA. Use #F06BB8 when pink dominates (80/20), #D85AAB for 60/40, #A640B0 for 40/60, and #8C2D9A when purple dominates (20/80). The table above lists seven copy-ready hex codes.',
  },
  {
    question: 'Is magenta pink or purple?',
    answer:
      'Magenta (#FF00FF) is neither pure pink nor pure purple—it sits between them on the RGB color wheel. Visually it reads as a vivid pink-purple: warmer than violet (#EE82EE), cooler and more purple than hot pink (#FF69B4). Mid-mixes like #BF34CA feel magenta without neon saturation.',
  },
  {
    question: 'What color is between pink and purple?',
    answer:
      'The color between pink and purple is most often called mauve (#E0B0FF), magenta (#FF00FF), or fuchsia (#FF00FF). Lighter dusty mixes read as mauve or orchid (#DA70D6); balanced mixes read as magenta; deep mixes lean plum (#DDA0DD) or berry purple (#A640B0).',
  },
  {
    question: 'Do pink and purple go together in design?',
    answer:
      'Yes—for beauty, events, music, and creative portfolios. Limit saturated magenta to one hero or CTA per screen, pair with charcoal (#374151) or cream (#FFF8F0) for reading areas, and run every text-on-color pair through a WCAG contrast checker before launch.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function WhatColorDoesPinkAndPurpleMakePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="what-color-does-pink-and-purple-make" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-pink-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              What Color Does Pink and Purple Make? Magenta &amp; Hex Codes
            </h1>
            <p className="text-lg md:text-xl font-medium text-pink-50/95 leading-relaxed border-l-4 border-amber-300 bg-white/10 pl-5 pr-4 py-4 rounded-r-xl">
              Pink and purple mixed together make magenta or mauve. A 50/50 mix of hot pink (#FF69B4) and purple (#800080)
              produces #BF34CA, a vibrant pink-purple magenta. The more pink you add the lighter and more rosy the result — the
              more purple you add the deeper and more violet it becomes.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div
            className="w-full h-40 md:h-52 rounded-2xl border-2 border-gray-200 dark:border-gray-600 shadow-lg mb-10 bg-[#BF34CA]"
            role="img"
            aria-label="Pink and purple 50/50 mix, vibrant magenta-purple hex BF34CA"
          />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Pink and Purple Mix Ratios — Hex Code Table
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you searched <strong className="text-gray-900 dark:text-white">what color does pink and purple make</strong>, the
              answer lives in the ratio. Pink is a light, warm red; purple adds cool blue-violet depth. Blending them skips true
              red and lands in the magenta–mauve family—romantic, high-energy hues for beauty campaigns and festival creative when
              you anchor them with neutrals. Each row below uses hot pink (#FF69B4) and purple (#800080) as endpoints; copy any hex
              into Figma, CSS, or your brand kit.
            </p>
            <MixRatioTable rows={MIX_ROWS} />
          </section>

          <section className="mb-10 prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
              What is the Color Called When You Mix Pink and Purple?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              There is no single official name—the label depends on lightness and saturation. Lighter, dustier mixes are called{' '}
              <strong className="text-gray-900 dark:text-white">mauve</strong> (<strong className="text-gray-900 dark:text-white">#E0B0FF</strong>) or{' '}
              <strong className="text-gray-900 dark:text-white">orchid</strong> (<strong className="text-gray-900 dark:text-white">#DA70D6</strong>).
              Balanced vibrant mixes are called <strong className="text-gray-900 dark:text-white">magenta</strong> (
              <strong className="text-gray-900 dark:text-white">#FF00FF</strong>) or{' '}
              <strong className="text-gray-900 dark:text-white">fuchsia</strong> (also <strong className="text-gray-900 dark:text-white">#FF00FF</strong> in
              CSS). Deep purple-heavy blends read as <strong className="text-gray-900 dark:text-white">berry</strong> (
              <strong className="text-gray-900 dark:text-white">#A640B0</strong>) or <strong className="text-gray-900 dark:text-white">plum</strong> (
              <strong className="text-gray-900 dark:text-white">#DDA0DD</strong>).
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              For a full dictionary of pink-purple color names with swatches, see our{' '}
              <InlineTagLink href="/blog/pink-purple-color-name">pink-purple color names guide</InlineTagLink>. When stakeholders
              say “pinkish purple” without a hex, point them to the 50/50 row (#BF34CA) first, then adjust lighter or darker using
              the ratio table.
            </p>
          </section>

          <PalettePairingsSection
            title="Pink and Purple Color Combinations"
            intro="Three ready-made palettes that keep pink-purple mixes readable—use one saturated accent per layout and neutrals for body copy."
            pairings={[
              {
                title: 'Magenta glow',
                body: 'Hero gradient from #FF69B4 through #BF34CA to #800080 on charcoal (#111827) type areas—ideal for events and music landing pages.',
                swatches: ['#FF69B4', '#BF34CA', '#800080', '#111827'],
              },
              {
                title: 'Soft mauve editorial',
                body: 'Blush #F06BB8 cards, deep mauve #8C2D9A headlines, cream #FFF8F0 reading wells—calm enough for long-form beauty content.',
                swatches: ['#F06BB8', '#8C2D9A', '#FFF8F0', '#374151'],
              },
              {
                title: 'Beauty luxury',
                body: 'Deep purple #800080 navigation, magenta #BF34CA CTAs, gold #FFD700 accents on white—premium cosmetics and jewelry positioning.',
                swatches: ['#800080', '#BF34CA', '#FFD700', '#FFFFFF'],
              },
            ]}
          />

          <section className="mt-10 mb-10 prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">Is Magenta Pink or Purple?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong className="text-gray-900 dark:text-white">Magenta (#FF00FF)</strong> is technically both and neither. In RGB it
              is full red plus full blue with no green—exactly between red (where pink originates as a tint) and blue-violet (where
              purple lives). That is why magenta reads as a hyper-saturated pink-purple rather than a pastel pink or a deep royal
              purple.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              For UI, compare three anchors: hot pink <strong className="text-gray-900 dark:text-white">#FF69B4</strong> (clearly
              pink-leaning), mid-mix magenta-purple <strong className="text-gray-900 dark:text-white">#BF34CA</strong> (balanced
              pink-purple), and purple <strong className="text-gray-900 dark:text-white">#800080</strong> (clearly violet-leaning).
              Use hot pink and soft magenta rows for backgrounds and cards; reserve #BF34CA and #FF00FF for CTAs; use #800080 and berry
              #A640B0 for navigation and headers.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In subtractive paint mixing, pink and purple pigments behave differently than on-screen RGB—opacity and undertone shift
              results. Treat the hex table as a digital starting point, then proof physical swatches when packaging must match your
              web hero. Simulate ratios interactively in our{' '}
              <InlineTagLink href="/tools/color-mixer/pink-and-purple">pink and purple color mixer</InlineTagLink>.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">FAQ</h2>
            <div className="space-y-6">
              {FAQ.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="my-12 not-prose">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Try it with our free tools</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5">
                Mix pink and purple in the browser, then explore full palette combinations for your project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/tools/color-mixer"
                  className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-fuchsia-400 hover:bg-white hover:text-fuchsia-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-fuchsia-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
                >
                  Color Mixer
                </Link>
                <Link
                  href="/blog/pink-and-purple-color"
                  className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-purple-400 hover:bg-white hover:text-purple-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-purple-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
                >
                  Pink and Purple Color Guide
                </Link>
              </div>
            </div>
          </section>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Validate text on your new palette with our{' '}
            <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>. Related:{' '}
            <InlineTagLink href="/blog/pink-purple-color-name">color between pink and purple names</InlineTagLink>,{' '}
            <InlineTagLink href="/blog/lavender-hex-code">lavender hex code</InlineTagLink>.
          </p>
        </div>
      </div>
    </article>
  );
}
