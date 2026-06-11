import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import {
  PaletteQuickAnswer,
  PaletteShadesTable,
  PalettePairingsSection,
  PaletteUiUsageSection,
} from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';

const LAST_MODIFIED = '2026-06-11T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/lavender-hex-code',
  title: 'Lavender Hex Code #E6E6FA — Copy + RGB, Shades & Pairings',
  description:
    'Lavender hex code is #E6E6FA. Copy instantly. RGB(230,230,250), 10 lavender shades, palette pairings and purple color codes. One click copy.',
  keywords: [
    'lavender hex code',
    'hex code for lavender purple',
    'lavender purple hex',
    'lavender color code',
    '#E6E6FA',
    'lavender shades',
    'lavender palette',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: LAST_MODIFIED,
    modifiedTime: LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Lavender Hex Code #E6E6FA — Copy + RGB, Shades & Pairings',
  'Lavender hex code is #E6E6FA. Copy instantly. RGB(230,230,250), 10 lavender shades, palette pairings and purple color codes. One click copy.',
  'lavender-hex-code',
  getBlogArticleDatePublished('lavender-hex-code'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const QUICK_ROWS = [
  { label: 'Hex', value: '#E6E6FA' },
  { label: 'RGB', value: 'rgb(230, 230, 250)' },
  { label: 'HSL', value: 'hsl(240, 67%, 94%)' },
];

const LAVENDER_SHADES = [
  { name: 'White Lavender', hex: '#F8F8FF' },
  { name: 'Ghost White', hex: '#F5F5FF' },
  { name: 'Lavender Blush', hex: '#FFF0F5' },
  { name: 'Pale Lavender', hex: '#DCD0FF' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Floral Lavender', hex: '#B57EDC' },
  { name: 'Medium Purple', hex: '#9370DB' },
  { name: 'Amethyst', hex: '#9966CC' },
  { name: 'Dark Lavender', hex: '#734F96' },
  { name: 'Deep Purple', hex: '#4B0082' },
];

const LAVENDER_PAIRINGS = [
  {
    title: 'Lavender + Sage + Cream (wellness calm)',
    body: 'Sage #B2AC88 grounds airy lavender fields; cream #FFF8F0 cards keep typography warm. Ideal for spas, meditation apps, and organic skincare where you want botanical calm without clinical white.',
    swatches: ['#E6E6FA', '#B2AC88', '#FFF8F0', '#734F96'],
  },
  {
    title: 'Lavender + Charcoal + White (modern editorial)',
    body: 'Charcoal #374151 headlines on white content wells with lavender #E6E6FA section bands signal creative confidence. Use floral lavender #B57EDC for links and CTAs so actions stay visible.',
    swatches: ['#E6E6FA', '#374151', '#FFFFFF', '#B57EDC'],
  },
  {
    title: 'Lavender + Gold + Ivory (soft luxury)',
    body: 'Muted gold #C9A227 rules and ivory #FFFBEB backgrounds elevate lavender for jewelry, wedding stationery, and premium beauty. Reserve deep purple #4B0082 for logos and navigation only.',
    swatches: ['#E6E6FA', '#C9A227', '#FFFBEB', '#4B0082'],
  },
  {
    title: 'Lavender + Blush + Dusty rose (romantic lifestyle)',
    body: 'Blush #E8C4B8 and dusty rose #DCAE96 warm up cool lavender for lookbooks and bridal brands. Keep body copy in charcoal so pastel stacks do not wash out at 14px.',
    swatches: ['#E6E6FA', '#E8C4B8', '#DCAE96', '#734F96'],
  },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#E6E6FA', colorName: 'Lavender', rgbCode: 'rgb(230, 230, 250)' },
  { hexCode: '#B57EDC', colorName: 'Floral lavender', rgbCode: 'rgb(181, 126, 220)' },
  { hexCode: '#9370DB', colorName: 'Medium purple', rgbCode: 'rgb(147, 112, 219)' },
  { hexCode: '#734F96', colorName: 'Dark lavender', rgbCode: 'rgb(115, 79, 150)' },
  { hexCode: '#4B0082', colorName: 'Deep purple', rgbCode: 'rgb(75, 0, 130)' },
];

const HERO_SWATCHES = [
  { hexCode: '#E6E6FA', colorName: 'CSS lavender', rgbCode: 'rgb(230, 230, 250)' },
  { hexCode: '#B57EDC', colorName: 'Floral lavender', rgbCode: 'rgb(181, 126, 220)' },
  { hexCode: '#734F96', colorName: 'Dark lavender', rgbCode: 'rgb(115, 79, 150)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the lavender hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The CSS named color lavender is #E6E6FA, which is RGB(230, 230, 250) and HSL(240, 67%, 94%). For deeper UI accents, designers often use floral lavender #B57EDC or dark lavender #734F96.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the hex code for lavender purple?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Canonical web lavender is #E6E6FA. When people search hex code for lavender purple they may also mean medium purple #9370DB or amethyst #9966CC—document which hex maps to each token in your style guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go with lavender?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sage green (#B2AC88), cream (#FFF8F0), charcoal (#374151), gold (#C9A227), and blush pink (#E8C4B8) pair reliably with lavender. Always verify text and button contrast with a WCAG checker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is lavender good for website backgrounds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes for wellness, beauty, and creative portfolios when paired with darker type colors. Use #E6E6FA or ghost white #F5F5FF for large calm surfaces; reserve medium purple and deep purple rows for navigation, links, and CTAs.',
      },
    },
  ],
};

export default function LavenderHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="lavender-hex-code" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-violet-900 via-purple-700 to-indigo-500 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-violet-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Lavender Hex Code #E6E6FA — Copy + RGB, Shades &amp; Pairings
            </h1>
            <p className="text-violet-100 text-lg max-w-3xl mb-6">
              Lavender hex code is <strong className="text-white font-semibold">#E6E6FA</strong> (RGB 230, 230, 250). Copy ten shades from pale white-lavender to deep purple, four palette pairings, and UI notes for soft elegant design.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#E6E6FA]"
              role="img"
              aria-label="Lavender color sample, hex E6E6FA"
            />
            <div className="flex items-center gap-4 text-violet-100 text-sm flex-wrap">
              <time dateTime="2026-06-11">Updated June 11, 2026</time>
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
                <PaletteQuickAnswer
                  theme="purple"
                  ariaLabel="Lavender quick reference"
                  headline="Lavender = #E6E6FA"
                  subtext="CSS named color lavender — copy hex, RGB, or HSL for Figma, CSS variables, or brand tokens."
                  rows={QUICK_ROWS}
                />

                <PaletteShadesTable
                  title="Lavender Hex Code Shades"
                  description="Ten stops from airy white-lavender and blush tints through canonical lavender, floral purple, and deep indigo. Use light rows for backgrounds; mid and dark rows for navigation, type, and CTAs."
                  shades={LAVENDER_SHADES}
                />

                <PalettePairingsSection
                  title="Lavender Color Palette Pairings"
                  intro="Four lavender combinations with copy-ready hex codes—wellness sage, editorial charcoal, soft luxury gold, and romantic blush accents."
                  pairings={LAVENDER_PAIRINGS}
                />

                <PaletteUiUsageSection title="Lavender in UI and Brand Design">
                  <p>
                    <strong className="text-gray-900 dark:text-white">Wellness and beauty.</strong> Lavender backgrounds (#E6E6FA, #F5F5FF) reduce visual noise next to product photography and soft illustration. Pair with charcoal body copy (#374151) and floral lavender buttons (#B57EDC) for primary actions—run white-on-purple and charcoal-on-lavender pairs through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before shipping 14px labels.
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Creative portfolios and events.</strong> Lavender section bands signal imagination without the aggression of pure magenta. Use deep purple (#4B0082) for navigation chrome and amethyst (#9966CC) for hover states so affordances stay obvious on pale fields.
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Wedding and lifestyle brands.</strong> Lavender blush (#FFF0F5) cards on ghost white (#F5F5FF) feel editorial and romantic. Gold accents (#C9A227) on ivory (#FFFBEB) elevate invitations and landing heroes—limit saturated purple to one CTA per viewport so checkout flows stay calm.
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Dark mode.</strong> Lavender tints glow too brightly on #111827. Desaturate accent purples by 10–15% or swap to dark lavender (#734F96) for chips and badges. Re-test focus rings on both light lavender wells and dark charcoal surfaces.
                  </p>
                </PaletteUiUsageSection>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                    Lavender vs Purple — What is the Difference?
                  </h2>
                  <p className="mb-4">
                    Searchers often conflate names. <strong className="text-gray-900 dark:text-white">Lavender</strong> (<strong className="text-gray-900 dark:text-white">#E6E6FA</strong>) is a very light, desaturated blue-violet—94% HSL lightness—designed as a gentle wash, not a bold brand mark. <strong className="text-gray-900 dark:text-white">Purple</strong> in UI usually means something saturated and mid-dark: medium purple (<strong className="text-gray-900 dark:text-white">#9370DB</strong>), amethyst (<strong className="text-gray-900 dark:text-white">#9966CC</strong>), or deep purple (<strong className="text-gray-900 dark:text-white">#4B0082</strong>).
                  </p>
                  <p className="mb-4">
                    When stakeholders say “lavender purple hex,” they may want the pale CSS lavender for backgrounds or a richer floral lavender (<strong className="text-gray-900 dark:text-white">#B57EDC</strong>) for logos. The shade table above lists both families so you can brief “use #E6E6FA for page chrome, #734F96 for headings” instead of debating ad hoc swatches. For adjacent soft purples, compare our{' '}
                    <InlineTagLink href="/blog/mauve-color">mauve color</InlineTagLink> reference and{' '}
                    <InlineTagLink href="/blog/c4b5fd-color">#C4B5FD lavender purple</InlineTagLink> guide.
                  </p>
                  <p className="mb-6">
                    In print and paint, “lavender” skews even pinker than web lavender; digital handoffs should always specify hex. If packaging must match screen, note the delta between #E6E6FA and Pantone or CMYK references so manufacturing variance does not surprise brand reviewers.
                  </p>

                  <p className="mb-6">
                    If you searched <strong className="text-gray-900 dark:text-white">lavender hex code</strong>, <strong className="text-gray-900 dark:text-white">hex code for lavender purple</strong>, or <strong className="text-gray-900 dark:text-white">lavender purple hex</strong>, start with #E6E6FA for canonical web lavender, then pick darker rows from the table for structure. Extend any anchor hex into hover and disabled ramps with our{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> so tints stay on the same hue angle.
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
                      <InlineTagLink href="/blog/c4b5fd-color">#C4B5FD Lavender Purple</InlineTagLink> — softer violet for UI tints and luxury brands
                    </li>
                    <li>
                      <InlineTagLink href="/blog/pink-and-purple-color">Pink and Purple Color</InlineTagLink> — magenta and mauve mixes between pink and purple
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
                    Lavender palette (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Lavender" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
