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

export const metadata = buildPageMetadata({
  path: '/blog/terracotta-hex-code',
  title: 'Terracotta Hex Code: #E2725B — Shades, Palettes & UI Examples',
  description:
    'Terracotta hex code is #E2725B. Copy hex codes for terracotta shades, see palette pairings with sage, cream and navy, and explore branding and UI examples.',
  keywords: ['terracotta hex', '#E2725B', 'terracotta shades', 'palette', 'UI color', 'Theme & Color'],
});

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

const TERRACOTTA_PAIRINGS = [
  {
    title: 'Terracotta + Sage (modern organic)',
    body: 'Sage #B2AC88 cools terracotta’s heat so interfaces feel botanical rather than alarmist. Use sage for page chrome and section backgrounds, terracotta for primary buttons, badges, and illustration accents—especially in wellness and food retail.',
    swatches: ['#E2725B', '#B2AC88', '#F5F0E8'],
  },
  {
    title: 'Terracotta + Cream (soft hospitality)',
    body: 'Cream #FFFDD0 keeps typography legible while terracotta carries brand warmth in headers and CTAs. Watch small terracotta text on cream: bump to rust or chocolate for captions under 14px.',
    swatches: ['#E2725B', '#FFFDD0', '#FAF0E6'],
  },
  {
    title: 'Terracotta + Navy (structured contrast)',
    body: 'Navy #000080 gives editorial weight next to terracotta highlights—useful for finance-adjacent lifestyle brands and travel sites. Reserve terracotta for actions and navy for navigation so hierarchy stays obvious.',
    swatches: ['#E2725B', '#000080', '#F1F5F9'],
  },
  {
    title: 'Terracotta + Warm gray (quiet retail)',
    body: 'Warm gray #9E9E9E (use darker #616161 for body copy) lets product photography stay the hero while terracotta marks sales ribbons and loyalty tiers.',
    swatches: ['#E2725B', '#9E9E9E', '#E0E0E0'],
  },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#E2725B', colorName: 'Terracotta', rgbCode: 'rgb(226, 114, 91)' },
  { hexCode: '#B2AC88', colorName: 'Sage', rgbCode: 'rgb(178, 172, 136)' },
  { hexCode: '#FFFDD0', colorName: 'Cream', rgbCode: 'rgb(255, 253, 208)' },
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#9E9E9E', colorName: 'Warm gray', rgbCode: 'rgb(158, 158, 158)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the terracotta hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard terracotta hex code used in digital palettes is #E2725B, approximately RGB(226, 114, 91) and HSL(11, 70%, 62%). Clay and tile references vary; pick one canonical hex for your design system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors pair well with terracotta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sage green (#B2AC88), cream (#FFFDD0), navy (#000080), and warm gray (#9E9E9E) are reliable partners for web and interior palettes. Always verify text and button contrast with a contrast checker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is terracotta a good color for buttons and CTAs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes for filled primary buttons on white or cream when label text is white or very dark and passes WCAG contrast. Avoid terracotta-on-rust for small type; use the shade table to pick darker anchors for captions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between terracotta and burnt sienna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terracotta (#E2725B) reads as a muted orange-red clay. Burnt sienna (#E97451) is often slightly brighter and more orange in digital swatches. Rust and chocolate rows are deeper for hover states and typography.',
      },
    },
  ],
};

export default function TerracottaHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-[#3d1810] via-[#7B3F00] to-[#5C2E00] text-white py-12 md:py-16">
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
              Terracotta Hex Code: #E2725B — Shades, Palettes & UI Examples
            </h1>
            <p className="text-orange-50/95 text-lg max-w-3xl mb-6">
              Sun-baked clay as a digital swatch—ten steps from linen to dark brown, four pairings for product and editorial UI, and notes on why terracotta keeps
              resurfacing in brand and interior trends.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#E2725B]"
              role="img"
              aria-label="Terracotta color swatch hex E2725B"
            />
            <div className="flex items-center gap-4 text-orange-100/85 text-sm">
              <time dateTime="2026-05-12">May 12, 2026</time>
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
                  theme="terracotta"
                  ariaLabel="Terracotta quick reference"
                  headline="Terracotta = #E2725B"
                  subtext="Warm clay orange-red — copy hex, RGB, or HSL for CSS variables, Figma styles, or print handoff."
                  rows={QUICK_ROWS}
                />

                <PaletteShadesTable
                  title="Terracotta Shades — Hex Code Table"
                  description="From airy linen and peach through the core terracotta row into rust, umber, and chocolate. Use light rows for backgrounds, mid rows for brand fills, deep rows for type and pressed states."
                  shades={TERRACOTTA_SHADES}
                />

                <PalettePairingsSection
                  title="Terracotta Palette Pairings"
                  intro="These combinations balance warmth with calm neutrals or cool structure—ideal when you want craft and credibility without defaulting to corporate blue."
                  pairings={TERRACOTTA_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    Terracotta is one of those colors people recognize before they can name it: the rim of a planter, Mediterranean roof tile, a matte lipstick
                    swatch that reads “expensive clay” instead of “neon orange.” On the web,{' '}
                    <strong className="text-gray-900 dark:text-white">#E2725B</strong> captures that mid-chroma warmth without drifting into traffic-cone territory.
                    It carries enough red to feel appetizing for food brands, enough desaturation to sit beside neutrals in fashion, and enough earth to align with
                    sustainability narratives—provided you do not pair it exclusively with beige stock photography that flattens everything into oatmeal.
                  </p>
                  <p className="mb-6">
                    The ladder above matters because terracotta fails when teams use one hex for every role. Hero gradients built from light terracotta and apricot
                    feel airy; navigation pressed states need rust or chocolate so affordances stay visible. If your marketing site and product app share a brand,
                    publish the same ramp in both places—nothing erodes craft credibility faster than five slightly different “terracotta” buttons across surfaces.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Terracotta in UI & Web Design</h2>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Primary actions and promotions.</strong> Terracotta excels as a filled CTA on white or cream
                    when label text is white or near-black and passes automated contrast checks. Before you ship seasonal sale banners, run terracotta-on-cream and
                    white-on-terracotta through our{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> at the exact font size and weight you use in production—rounded
                    pill buttons reduce perceived edge contrast more than square buttons at the same hex.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Forms, alerts, and empty states.</strong> Use peach puff and linen rows for soft warning
                    backgrounds instead of harsh yellow when the tone should be “heads up,” not “emergency.” Pair with charcoal or navy text for legibility. For
                    success, avoid painting success banners the same hue as your primary CTA; reserve terracotta for conversion paths and keep confirmations in sage
                    or green so users learn distinct meanings.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Data visualization and maps.</strong> Terracotta reads as heat, population density, or growth
                    when paired with cool blue-teal diverging scales. Keep chroma consistent across chart series so accessibility filters do not collapse two oranges
                    into one blob. If you export to PDF reports, test rust and chocolate at small point sizes—they carry narrative weight but disappear when
                    anti-aliasing is aggressive.
                  </p>
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white">Dark mode discipline.</strong> Saturated terracotta on near-black can glow uncomfortably on
                    OLED phones. Shift primary buttons to slightly deeper burnt sienna for dark surfaces, keep focus rings visible with a cream outer stroke, and
                    document the two-mode values in tokens. When you need a full ramp quickly, seed{' '}
                    <strong className="text-gray-900 dark:text-white">#E2725B</strong> in the{' '}
                    <Link
                      href="/tools/palette-generator"
                      className="text-orange-700 dark:text-orange-400 font-semibold hover:underline"
                    >
                      palette generator
                    </Link>{' '}
                    and export harmonious neighbors instead of guessing lighter mixes that skew pink.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Terracotta in Branding & Interior Design</h2>
                  <p className="mb-4">
                    Terracotta is trending again because it bridges nostalgia and maturity: it nods to 1970s interiors without demanding shag carpet, and it
                    photographs well under both natural daylight and warm restaurant lighting. On Instagram, terracotta walls behind ceramics and linen tablescapes
                    signal slow living; in SaaS, the same hue signals approachable premium when paired with navy structure instead of bohemian clutter. The trend
                    works when restraint is part of the story—one dominant warm, two neutrals, one cool anchor.
                  </p>
                  <p className="mb-4">
                    Brand strategists like terracotta for challenger food and beverage labels because it differentiates from clinical white-and-green “natural”
                    clichés while still reading as edible. Pair packaging photography with cream fields online so SKUs pop; echo warm gray from the pairing section
                    in typography for ingredient lists where legibility beats romance. For interior-led brands—hotels, cookware, fragrance—translate physical
                    materials (zellige tile, unglazed clay) into hex in your guidelines so digital campaigns match showroom reality.
                  </p>
                  <p className="mb-6">
                    The risk is overuse: when every direct-to-consumer brand adopts terracotta, category blur returns. Escape sameness by choosing a distinctive
                    secondary—sage for botanical calm, navy for editorial authority—and by investing in photography direction rather than another clay-colored hero
                    block. Document minimum contrast ratios for logo reverses on terracotta packaging tape and corrugated cardboard; print browns shift faster than
                    screen hex when suppliers change stock.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Handoff and accessibility habits</h2>
                  <p className="mb-4">
                    Treat terracotta as <em>accent.brandWarm</em> or <em>action.primary</em>, not as a universal text color. Pair every promotional terracotta field
                    with a tested text color in your theme JSON. Designers should attach contrast screenshots to Jira the same way they attach responsive layouts—
                    color is layout for many users.
                  </p>
                  <p className="mb-6">
                    Cross-link related palettes when you brief campaigns: our{' '}
                    <InlineTagLink href="/blog/sage-green-hex-code">sage green hex guide</InlineTagLink> and{' '}
                    <InlineTagLink href="/blog/navy-blue-hex-code">navy blue hex reference</InlineTagLink> use the same pairing hexes you see here, so multi-page
                    sites stay coherent. Re-check after any font change; geometric sans at light weights fails contrast sooner than humanist serifs on identical
                    backgrounds.
                  </p>

                  <div className="not-prose my-10 rounded-2xl border border-orange-200 dark:border-orange-900/50 bg-orange-50/90 dark:bg-stone-900/70 p-6 md:p-8">
                    <p className="text-gray-800 dark:text-gray-200 text-lg font-medium mb-5 text-center">
                      Build ramps from terracotta and verify WCAG contrast before launch.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="/tools/palette-generator"
                        className="inline-flex items-center justify-center rounded-xl bg-[#B7410E] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[#8A3324] transition-colors"
                      >
                        Try our free color palette generator
                      </Link>
                      <Link
                        href="/tools/contrast-checker"
                        className="inline-flex items-center justify-center rounded-xl border-2 border-[#8A3324] bg-white dark:bg-stone-800 px-6 py-3 text-base font-semibold text-[#5C2E00] dark:text-orange-100 hover:bg-orange-100/80 dark:hover:bg-stone-700 transition-colors"
                      >
                        Open the contrast checker
                      </Link>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose">
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is the terracotta hex code?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        <strong>#E2725B</strong> is a widely used digital terracotta—RGB(226, 114, 91), HSL(11, 70%, 62%). Use the shade table for lighter
                        backgrounds and deeper anchors.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What colors go with terracotta?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Sage, cream, navy, and warm gray are strong complements; see the pairing cards for hex codes and layout guidance.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">Is terracotta good for website buttons?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Yes when label contrast is verified—prefer white or very dark text on filled terracotta, and avoid low-contrast orange-on-orange stacks.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">How is terracotta different from burnt sienna?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Terracotta is a muted clay red-orange; burnt sienna in this guide (#E97451) skews slightly brighter. Use rust and chocolate for depth, not
                        as interchangeable fills without testing.
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-8 mb-6">
                    Explore adjacent guides:{' '}
                    <InlineTagLink href="/blog/sage-green-hex-code">Sage green hex codes</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/navy-blue-hex-code">Navy blue hex codes</InlineTagLink>, and the{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink> for every text-on-terracotta decision.
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Terracotta pairings (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Terracotta & accents" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
