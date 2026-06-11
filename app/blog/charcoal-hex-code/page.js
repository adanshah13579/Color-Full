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
  CharcoalQuickAnswer,
  CharcoalRgbSection,
  CharcoalFormatCodesSection,
  CharcoalShadesTable,
} from './CharcoalHexLead';

const LAST_MODIFIED = '2026-06-11T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/charcoal-hex-code',
  title: 'Charcoal Hex Code: #36454F — Copy + RGB, Shades & Dark Palettes',
  description:
    'Charcoal hex code is #36454F. Copy instantly. RGB(54,69,79), 10 charcoal shades, dark color palette pairings. Perfect for dark UI and professional design.',
  keywords: ['charcoal hex code', 'charcoal hex', '#36454F', 'charcoal shades', 'dark palette', 'RGB', 'HSL', 'Theme & Color'],
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
  'Charcoal Hex Code: #36454F — Copy + RGB, Shades & Dark Palettes',
  'Charcoal hex code is #36454F. Copy instantly. RGB(54,69,79), 10 charcoal shades, dark color palette pairings. Perfect for dark UI and professional design.',
  'charcoal-hex-code',
  getBlogArticleDatePublished('charcoal-hex-code'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const CHARCOAL_PALETTE = [
  { hexCode: '#36454F', colorName: 'Charcoal', rgbCode: 'rgb(54, 69, 79)' },
  { hexCode: '#F8F9FA', colorName: 'Ghost white', rgbCode: 'rgb(248, 249, 250)' },
  { hexCode: '#818CF8', colorName: 'Indigo accent', rgbCode: 'rgb(129, 140, 248)' },
  { hexCode: '#64748B', colorName: 'Slate', rgbCode: 'rgb(100, 116, 139)' },
  { hexCode: '#111827', colorName: 'Near black', rgbCode: 'rgb(17, 24, 39)' },
];

const DARK_MODE_QUICK = [
  { hexCode: '#121212', colorName: 'Base dark', rgbCode: 'rgb(18, 18, 18)' },
  { hexCode: '#36454F', colorName: 'Charcoal', rgbCode: 'rgb(54, 69, 79)' },
  { hexCode: '#1F2937', colorName: 'Gunmetal', rgbCode: 'rgb(31, 41, 55)' },
  { hexCode: '#F5F5F5', colorName: 'Light text', rgbCode: 'rgb(245, 245, 245)' },
];

const HERO_SWATCHES = [
  { hexCode: '#36454F', colorName: 'Charcoal', rgbCode: 'rgb(54, 69, 79)' },
  { hexCode: '#2D3748', colorName: 'Dark slate', rgbCode: 'rgb(45, 55, 72)' },
  { hexCode: '#111827', colorName: 'Near black', rgbCode: 'rgb(17, 24, 39)' },
];

const CHARCOAL_PAIRINGS = [
  {
    title: 'Charcoal + White + Indigo (modern SaaS)',
    body: 'Charcoal navigation (#36454F) on ghost white content wells (#F8F9FA) with indigo CTAs (#818CF8). A clean dark-UI pattern for dashboards and B2B marketing sites.',
    swatches: ['#36454F', '#F8F9FA', '#818CF8'],
  },
  {
    title: 'Charcoal + Silver + Blue (professional)',
    body: 'Silver gray borders (#CBD5E1) and cool blue links (#3B82F6) on charcoal chrome (#36454F) signal finance and legal brands without pure black harshness.',
    swatches: ['#36454F', '#CBD5E1', '#3B82F6'],
  },
  {
    title: 'Charcoal + Cream + Gold (soft luxury)',
    body: 'Cream reading panels (#FFFBEB) with charcoal type (#36454F) and muted gold rules (#C9A227)—editorial annual reports and heritage portfolios.',
    swatches: ['#36454F', '#FFFBEB', '#C9A227'],
  },
  {
    title: 'Charcoal + Mint + Slate (dark mode UI)',
    body: 'Gunmetal shells (#1F2937), charcoal cards (#36454F), mint success (#6EE7B7), and slate secondary text (#64748B)—matches common dark-mode token stacks.',
    swatches: ['#1F2937', '#36454F', '#6EE7B7', '#64748B'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the charcoal hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A widely used charcoal hex code is #36454F, approximately RGB(54, 69, 79) and HSL(206, 19%, 26%). It is cooler and lighter than pure black (#000000)—ideal for typography and dark UI chrome.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the charcoal RGB code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For #36454F, the charcoal RGB code is RGB(54,69,79)—the same as rgb(54, 69, 79) in CSS. Near-black UI shells often use #111827 or #1F2937 instead for OLED-friendly depth.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors pair with charcoal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'White (#FFFFFF), ghost white (#F8F9FA), indigo (#818CF8), mint (#6EE7B7), cream (#FFFBEB), and gold (#C9A227) pair reliably with charcoal. Always verify contrast for text and interactive states.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is charcoal the same as black?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Charcoal (#36454F) is a cool blue-gray at ~26% lightness. Pure black (#000000) has no hue. Charcoal reads softer on screens and prints more consistently on coated stock.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is charcoal good for dark mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—charcoal works for cards, sidebars, and elevated surfaces above a darker base (#121212 or #111827). Pair light gray text (#F5F5F5) and one saturated accent; see our dark mode color palette guide for full token stacks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between charcoal and slate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Charcoal (#36454F) is darker and slightly more blue-gray. Slate (#64748B) is mid-tone and better for secondary text and borders on white. Use charcoal for headings; slate for captions.',
      },
    },
  ],
};

export default function CharcoalHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="charcoal-hex-code" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-slate-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Charcoal Hex Code: #36454F — Copy + RGB, Shades &amp; Dark Palettes
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-6">
              Quick reference for charcoal hex, RGB, HSL, and colour codes—plus ten shades from airy tints to near-black, four dark palette pairings, and dark-mode UI notes in one place.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#36454F]"
              role="img"
              aria-label="Charcoal color sample, hex 36454F"
            />
            <div className="flex items-center gap-4 text-slate-300 text-sm flex-wrap">
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
                <CharcoalQuickAnswer />
                <CharcoalRgbSection />
                <CharcoalFormatCodesSection />

                <div className="not-prose space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    What is the Charcoal HTML Color Code?
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    The <strong className="text-gray-900 dark:text-white">charcoal html color code</strong> is{' '}
                    <strong className="text-gray-900 dark:text-white">#36454F</strong>. It is a valid CSS and HTML color value for typography, navigation chrome, dark cards, and elevated surfaces in dark mode. Document hex and RGB together in your design system so web and mobile teams stay aligned.
                  </p>
                </div>

                <CharcoalShadesTable />

                <PalettePairingsSection
                  title="Charcoal Dark Palette Pairings"
                  intro="Four charcoal combinations with copy-ready hex codes—modern SaaS indigo, professional blue, soft luxury gold, and dark-mode mint accents."
                  pairings={CHARCOAL_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#36454F" />
                    </strong>{' '}
                    is the charcoal hex code most UI and brand teams need first. If you searched for <strong className="text-gray-900 dark:text-white">charcoal hex code</strong>,{' '}
                    <strong className="text-gray-900 dark:text-white">charcoal color code</strong>, or <strong className="text-gray-900 dark:text-white">charcoal grey hex</strong>, you want a cool blue-gray darker than slate but softer than pure black—paste-ready for CSS, Figma, or dark-mode tokens. This page lists the canonical value, ten related shades, and four dark palette pairings for professional design.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Charcoal hex code (the usual answers)</h2>
                  <p className="mb-4">
                    There is no CSS named keyword <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">charcoal</code>—teams standardize on hex <CopyableHex hex="#36454F" />. At RGB(54, 69, 79) and HSL(206, 19%, 26%) it carries a subtle cool undertone that reads more refined than #333333 on screens. For OLED-friendly app shells, pair charcoal cards with a deeper base like <CopyableHex hex="#121212" /> from our{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette guide</InlineTagLink>.
                  </p>
                  <p className="mb-6 font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg not-prose flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>Charcoal:</span> <CopyableHex hex="#36454F" />
                    <span className="text-gray-400">·</span>
                    <span>Gunmetal:</span> <CopyableHex hex="#1F2937" />
                    <span className="text-gray-400">·</span>
                    <span>Near black:</span> <CopyableHex hex="#111827" />
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Charcoal colour code (UK) and RGB</h2>
                  <p className="mb-4">
                    British English searches for <strong className="text-gray-900 dark:text-white">charcoal colour code</strong> use the same hex digits—only spelling changes. List hex, RGB, and HSL in accessibility docs so developers anywhere implement identical contrast ratios.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li className="pl-1">
                      <CopyableHex hex="#36454F" /> → RGB rgb(54, 69, 79)
                    </li>
                    <li className="pl-1">
                      <CopyableHex hex="#64748B" /> → RGB rgb(100, 116, 139) for secondary text
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Charcoal in dark mode UI</h2>
                  <p className="mb-4">
                    Dark mode is where charcoal earns its keep. Use <CopyableHex hex="#121212" /> or <CopyableHex hex="#1F2937" /> as the canvas, <CopyableHex hex="#36454F" /> for elevated cards and sidebars, and light gray (#F5F5F5) for primary text. Discord-style apps layer similar values—compare our{' '}
                    <InlineTagLink href="/blog/discord-dark-mode-colors">Discord dark mode colors guide</InlineTagLink> for chat-specific tokens (#313338, #2B2D31).
                  </p>
                  <p className="mb-4">
                    One saturated accent per screen keeps hierarchy clear: indigo (#818CF8) for links, mint (#6EE7B7) for success, or brand coral on marketing modules only. Never paint entire dashboards charcoal without lighter content wells—eye strain climbs when every surface sits below 30% lightness.
                  </p>
                  <p className="mb-6">
                    Before shipping dark themes, run text, icons, and focus rings through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>. Charcoal-on-charcoal borders fail most often at 1px dividers, not at headline sizes.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Charcoal vs black vs slate</h2>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Pure black</strong> (#000000) maximizes OLED punch but crushes shadow depth—everything flattens. <strong className="text-gray-900 dark:text-white">Charcoal</strong> (<CopyableHex hex="#36454F" />) leaves room for elevation steps. <strong className="text-gray-900 dark:text-white">Slate</strong> (<CopyableHex hex="#64748B" />) is for captions and placeholders on white, not primary navigation.
                  </p>
                  <p className="mb-6">
                    When stakeholders say “use black text,” show charcoal on cream instead of #000 on #FFF—slightly softer, often better for long reading sessions. Extend charcoal ramps programmatically in the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> rather than hand-picking random grays.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Charcoal in branding and print</h2>
                  <p className="mb-4">
                    Law firms, consultancies, and premium editorial brands reach for charcoal because it signals seriousness without funeral-black harshness. Pair with cream stationery (#FFFBEB) and restrained gold (#C9A227) for annual reports; reserve near-black (#111827) for logomarks only at small sizes.
                  </p>
                  <p className="mb-6">
                    CMYK approximations for coated stock often land near <strong className="text-gray-900 dark:text-white">C:32 M:13 Y:0 K:69</strong>, but dot gain shifts cool grays warm on uncoated paper. Request physical proofs when business cards must match dashboard chrome.
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
                      <InlineTagLink href="/blog/dark-mode-color-palette">Dark Mode Color Palette</InlineTagLink> — full dark UI token stacks with WCAG notes
                    </li>
                    <li>
                      <InlineTagLink href="/blog/discord-dark-mode-colors">Discord Dark Mode Colors</InlineTagLink> — chat-app gray ramps and accent hex codes
                    </li>
                    <li>
                      <InlineTagLink href="/blog/navy-blue-hex-code">Navy Blue Hex Code</InlineTagLink> — cool structural blue beside charcoal typography
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Where to go next</h2>
                  <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <li>
                      <InlineTagLink href="/tools/palette-generator">Generate charcoal ramps and dark-mode accents</InlineTagLink>
                    </li>
                    <li>
                      <InlineTagLink href="/tools/color-mixer">Blend charcoal with brand colors in the Color Mixing Simulator</InlineTagLink>
                    </li>
                  </ul>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20 space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Charcoal palette (copy hex)
                    </h3>
                    <ColorPaletteClient colors={CHARCOAL_PALETTE} designTitle="Charcoal" showHexCopyIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Dark mode quick copy
                    </h3>
                    <ColorPaletteClient colors={DARK_MODE_QUICK} designTitle="Dark UI" showHexCopyIcon />
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
