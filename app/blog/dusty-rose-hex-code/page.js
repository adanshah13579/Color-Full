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
  DustyRoseQuickAnswer,
  DustyRoseRgbSection,
  DustyRoseFormatCodesSection,
  DustyRoseShadesTable,
} from './DustyRoseHexLead';

const LAST_MODIFIED = '2026-06-11T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/dusty-rose-hex-code',
  title: 'Dusty Rose Hex Code: #DCAE96 — Copy + RGB, Shades & Pairings',
  description:
    'Dusty rose hex code is #DCAE96. Copy instantly. RGB(220,174,150), 10 dusty rose shades, palette pairings with sage, navy and cream. One click copy.',
  keywords: ['dusty rose hex code', 'dusty rose hex', '#DCAE96', 'dusty rose shades', 'dusty rose palette', 'RGB', 'HSL', 'Theme & Color'],
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
  'Dusty Rose Hex Code: #DCAE96 — Copy + RGB, Shades & Pairings',
  'Dusty rose hex code is #DCAE96. Copy instantly. RGB(220,174,150), 10 dusty rose shades, palette pairings with sage, navy and cream. One click copy.',
  'dusty-rose-hex-code',
  getBlogArticleDatePublished('dusty-rose-hex-code'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const DUSTY_ROSE_PALETTE = [
  { hexCode: '#DCAE96', colorName: 'Dusty rose', rgbCode: 'rgb(220, 174, 150)' },
  { hexCode: '#B2AC88', colorName: 'Sage', rgbCode: 'rgb(178, 172, 136)' },
  { hexCode: '#FFF8F0', colorName: 'Cream', rgbCode: 'rgb(255, 248, 240)' },
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#36454F', colorName: 'Charcoal', rgbCode: 'rgb(54, 69, 79)' },
];

const TERRACOTTA_PAIR = [
  { hexCode: '#DCAE96', colorName: 'Dusty rose', rgbCode: 'rgb(220, 174, 150)' },
  { hexCode: '#E2725B', colorName: 'Terracotta', rgbCode: 'rgb(226, 114, 91)' },
  { hexCode: '#FFF8F0', colorName: 'Cream', rgbCode: 'rgb(255, 248, 240)' },
  { hexCode: '#B8846E', colorName: 'Antique rose', rgbCode: 'rgb(184, 132, 110)' },
];

const HERO_SWATCHES = [
  { hexCode: '#DCAE96', colorName: 'Dusty rose', rgbCode: 'rgb(220, 174, 150)' },
  { hexCode: '#E5C4B0', colorName: 'Light dusty', rgbCode: 'rgb(229, 196, 176)' },
  { hexCode: '#8F5E52', colorName: 'Deep dusty', rgbCode: 'rgb(143, 94, 82)' },
];

const DUSTY_ROSE_PAIRINGS = [
  {
    title: 'Dusty rose + Sage (botanical calm)',
    body: 'Sage fields (#B2AC88) with dusty rose accents (#DCAE96) and cream cards (#FFF8F0) read as dried flowers and linen—ideal for wellness, skincare, and organic lifestyle brands.',
    swatches: ['#DCAE96', '#B2AC88', '#FFF8F0'],
  },
  {
    title: 'Dusty rose + Navy (editorial contrast)',
    body: 'Navy headers (#000080) ground airy dusty rose section bands. Charcoal body copy (#36454F) on cream keeps long reads legible while rose handles tags and testimonial highlights.',
    swatches: ['#DCAE96', '#000080', '#36454F'],
  },
  {
    title: 'Dusty rose + Cream (soft hospitality)',
    body: 'Cream backgrounds (#FFF8F0) with dusty rose navigation and pull quotes feel editorial without bubblegum pink. Add terracotta (#E2725B) for primary CTAs so actions stay visible.',
    swatches: ['#DCAE96', '#FFF8F0', '#E2725B'],
  },
  {
    title: 'Dusty rose + Terracotta (warm clay)',
    body: 'Terracotta CTAs (#E2725B) on dusty rose wells (#DCAE96) signal sun-baked ceramics and bridal stationery. Keep photography neutrally graded so two warm hues do not clash.',
    swatches: ['#DCAE96', '#E2725B', '#F5F0E6'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the dusty rose hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A widely used dusty rose hex code is #DCAE96, approximately RGB(220, 174, 150) and HSL(23, 51%, 73%). Paint and textile dusty roses vary; define your canonical hex in the design system so web and print stay aligned.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the dusty rose RGB code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For #DCAE96, the dusty rose RGB code is RGB(220,174,150)—the same as rgb(220, 174, 150) in CSS. Use these channels in design tools, Android resources, and print specs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go well with dusty rose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sage green (#B2AC88), cream (#FFF8F0), navy (#000080), terracotta (#E2725B), and charcoal (#36454F) pair reliably with dusty rose. Always test text and control colors for WCAG contrast.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is dusty rose the same as blush pink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dusty rose (#DCAE96) is a muted pink-brown with warm gray undertones. Blush (#E8B4B8) is cooler and more saturated. Document both separately if your brand uses them in different product lines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is dusty rose good for website backgrounds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes for lifestyle, beauty, and wedding brands when paired with charcoal or navy type. Use lighter dusty rows (#F2E0D4, #EDD5C8) for large calm surfaces; reserve #DCAE96 for accents and section bands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between dusty rose and mauve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dusty rose (#DCAE96) leans warm pink-brown. Mauve (#E0B0FF) leans cool purple-pink. They serve different moods—dusty rose for organic warmth, mauve for vintage editorial violet tones.',
      },
    },
  ],
};

export default function DustyRoseHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="dusty-rose-hex-code" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-rose-900 via-rose-700 to-amber-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-rose-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Dusty Rose Hex Code: #DCAE96 — Copy + RGB, Shades &amp; Pairings
            </h1>
            <p className="text-rose-100 text-lg max-w-3xl mb-6">
              Quick reference for dusty rose hex, RGB, HSL, and colour codes—plus ten shades from pale blush to deep rose brown, four palette pairings, and UI notes in one place.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#DCAE96]"
              role="img"
              aria-label="Dusty rose color sample, hex DCAE96"
            />
            <div className="flex items-center gap-4 text-rose-100 text-sm flex-wrap">
              <time dateTime="2026-06-11">June 11, 2026</time>
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
                <DustyRoseQuickAnswer />
                <DustyRoseRgbSection />
                <DustyRoseFormatCodesSection />

                <div className="not-prose space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    What is the Dusty Rose HTML Color Code?
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    The <strong className="text-gray-900 dark:text-white">dusty rose html color code</strong> is{' '}
                    <strong className="text-gray-900 dark:text-white">#DCAE96</strong>. It is a valid CSS and HTML color value—you can paste it directly into stylesheets, inline styles, SVG fills, and React or Vue theme files. For design-system handoffs, document hex and RGB together so engineers and content authors stay aligned.
                  </p>
                </div>

                <DustyRoseShadesTable />

                <PalettePairingsSection
                  title="Dusty Rose Palette Pairings"
                  intro="Four dusty rose combinations with copy-ready hex codes—sage botanical calm, navy editorial contrast, cream hospitality, and terracotta clay warmth."
                  pairings={DUSTY_ROSE_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#DCAE96" />
                    </strong>{' '}
                    is the dusty rose hex code most lifestyle and beauty teams need first. If you searched for <strong className="text-gray-900 dark:text-white">dusty rose hex code</strong>,{' '}
                    <strong className="text-gray-900 dark:text-white">dusty rose color code</strong>, or <strong className="text-gray-900 dark:text-white">dusty rose colour code</strong>, you want a muted pink-brown you can paste into CSS, Figma, or a style guide—not hot pink or cool mauve. This page gives the canonical web value, ten related shades, and four palette pairings with sage, navy, cream, and terracotta.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dusty rose hex code (the usual answers)</h2>
                  <p className="mb-4">
                    Unlike CSS named greens, there is no single browser keyword for dusty rose—teams standardize on hex <CopyableHex hex="#DCAE96" /> in design tokens. At RGB(220, 174, 150) and HSL(23, 51%, 73%) it reads as warm, desaturated pink: enough chroma for accents, low enough saturation to sit behind photography without shouting. Lighter rows in the shade table (#F2E0D4, #EDD5C8) work for full-width backgrounds; deeper stops (#8F5E52, #6B4540) anchor navigation and small type.
                  </p>
                  <p className="mb-6">
                    Not sure what to call a hex from a brand PDF? Use our{' '}
                    <InlineTagLink href="/tools/color-name-finder">color name finder</InlineTagLink> to match screenshots to the nearest named color—especially when clients say “dusty pink” without a number.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dusty rose colour code (UK) and RGB</h2>
                  <p className="mb-4">
                    British English searches for <strong className="text-gray-900 dark:text-white">dusty rose colour code</strong> still expect hex on screen—only spelling in copy changes, not the RGB digits you paste into stylesheets. List hex, RGB, and HSL in one table so handoffs stop drifting between disciplines.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li className="pl-1">
                      <CopyableHex hex="#DCAE96" /> → RGB rgb(220, 174, 150)
                    </li>
                    <li className="pl-1">
                      <CopyableHex hex="#B8846E" /> → RGB rgb(184, 132, 110) for deeper accents
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dusty rose vs blush vs terracotta</h2>
                  <p className="mb-4">
                    Searchers conflate warm pinks. <strong className="text-gray-900 dark:text-white">Dusty rose</strong> (<CopyableHex hex="#DCAE96" />) is muted pink-brown. <strong className="text-gray-900 dark:text-white">Blush</strong> (<CopyableHex hex="#E8B4B8" />) is cooler and more saturated. <strong className="text-gray-900 dark:text-white">Terracotta</strong> (<CopyableHex hex="#E2725B" />) is orange-clay—better for CTAs than large dusty rose fields. Pair dusty rose structure with terracotta buttons; see our{' '}
                    <InlineTagLink href="/blog/terracotta-hex-code">terracotta hex guide</InlineTagLink> for clay-tone ramps.
                  </p>
                  <p className="mb-6">
                    Sage green (<CopyableHex hex="#B2AC88" />) is the other natural partner dusty rose pages link to most often—together they signal botanical calm without clinical white. Our{' '}
                    <InlineTagLink href="/blog/sage-green-hex-code">sage green hex guide</InlineTagLink> lists the full muted green ramp.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dusty rose in UI and accessibility</h2>
                  <p className="mb-4">
                    Dusty rose works for section bands, testimonial cards, and beauty packaging mockups when contrast is verified. Charcoal text (#36454F) on light dusty rows (#F2E0D4) usually passes WCAG AA for body copy; white text on mid-tone #DCAE96 often fails at 14px—use deep dusty (#8F5E52) or navy for buttons instead. Run every pair through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before launch.
                  </p>
                  <p className="mb-4">
                    Dark mode: dusty rose tints can glow pink on #111827. Desaturate section backgrounds by 10% or swap to charcoal wells with dusty rose chips only. Re-test focus rings on both light and dark surfaces.
                  </p>
                  <p className="mb-6">
                    Extend #DCAE96 into hover and disabled ramps with the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, or blend dusty rose with sage in the{' '}
                    <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink> when briefing illustration palettes.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Dusty rose in branding and print</h2>
                  <p className="mb-4">
                    Bridal stationery, skincare, and lifestyle editorial gravitate toward dusty rose because it flatters skin tones in photography better than bubblegum pink. When the <strong className="text-gray-900 dark:text-white">dusty rose color code</strong> anchors invitations or packaging, keep secondary colors restrained—cream, sage, or navy—so the mark does not compete with florals in hero shots.
                  </p>
                  <p className="mb-6">
                    Print inks gain warmth on uncoated stock; digital #DCAE96 may read slightly cooler on low-end displays. Document web hex as source of truth and note CMYK approximations (C:0 M:21 Y:32 K:14) in vendor appendices so manufacturing variance does not surprise brand reviewers.
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
                      <InlineTagLink href="/blog/sage-green-hex-code">Sage Green Hex Code</InlineTagLink> — muted gray-green partner for dusty rose layouts
                    </li>
                    <li>
                      <InlineTagLink href="/blog/terracotta-hex-code">Terracotta Hex Code</InlineTagLink> — warm clay CTA accent beside dusty rose
                    </li>
                    <li>
                      <InlineTagLink href="/blog/pink-purple-color-name">Pink-Purple Color Names</InlineTagLink> — mauve and blush names with hex codes
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Where to go next</h2>
                  <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <li>
                      <InlineTagLink href="/tools/palette-generator">Generate harmonies from dusty rose #DCAE96</InlineTagLink>
                    </li>
                    <li>
                      <InlineTagLink href="/tools/color-mixer">Mix dusty rose with sage or terracotta in the Color Mixing Simulator</InlineTagLink>
                    </li>
                  </ul>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20 space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Dusty rose palette (copy hex)
                    </h3>
                    <ColorPaletteClient colors={DUSTY_ROSE_PALETTE} designTitle="Dusty Rose" showHexCopyIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Dusty rose + terracotta
                    </h3>
                    <ColorPaletteClient colors={TERRACOTTA_PAIR} designTitle="Rose & clay" showHexCopyIcon />
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
