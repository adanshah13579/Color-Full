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

export const metadata = buildPageMetadata({
  path: '/blog/purple-dream',
  title: 'Purple Dream Color Palette: Hex Codes, Shades & Pairings',
  description:
    'Purple dream palette hex codes: #7C3AED (royal purple) to #EDE9FE (lavender). Copy hex codes, see shades, and explore pairings for creative and luxury brands.',
  keywords: ['purple palette', 'lavender hex', '#7C3AED', 'brand colors', 'Theme & Color'],
});

const PALETTE = [
  { hexCode: '#7C3AED', colorName: 'Royal violet', rgbCode: 'rgb(124, 58, 237)' },
  { hexCode: '#8B5CF6', colorName: 'Purple', rgbCode: 'rgb(139, 92, 246)' },
  { hexCode: '#A78BFA', colorName: 'Soft lavender', rgbCode: 'rgb(167, 139, 250)' },
  { hexCode: '#C4B5FD', colorName: 'Pastel lavender', rgbCode: 'rgb(196, 181, 253)' },
  { hexCode: '#EDE9FE', colorName: 'Mist lavender', rgbCode: 'rgb(237, 233, 254)' },
];

const QUICK_ROWS = [
  { label: 'Royal violet', value: '#7C3AED' },
  { label: 'Purple', value: '#8B5CF6' },
  { label: 'Soft lavender', value: '#A78BFA' },
  { label: 'Pastel lavender', value: '#C4B5FD' },
  { label: 'Mist lavender', value: '#EDE9FE' },
];

const SHADES = [
  { name: 'Snow violet', hex: '#FAF5FF' },
  { name: 'Mist lavender', hex: '#EDE9FE' },
  { name: 'Pale violet', hex: '#DDD6FE' },
  { name: 'Pastel lavender', hex: '#C4B5FD' },
  { name: 'Soft lavender', hex: '#A78BFA' },
  { name: 'Purple', hex: '#8B5CF6' },
  { name: 'Royal violet', hex: '#7C3AED' },
  { name: 'Deep aubergine', hex: '#4C1D95' },
];

const PURPLE_PAIRINGS = [
  {
    title: 'Purple Dream + warm cream',
    body: 'Cream and sand (#FFFBEB, #F5F5F4) keep luxury beauty layouts soft while violets handle CTAs.',
    swatches: ['#7C3AED', '#FFFBEB', '#EDE9FE'],
  },
  {
    title: 'Purple Dream + charcoal frame',
    body: 'Charcoal #111827 for body copy and dividers balances expressive purple heroes without dulling the brand.',
    swatches: ['#8B5CF6', '#111827', '#F8FAFC'],
  },
  {
    title: 'Purple Dream + blush accent',
    body: 'Dusty blush (#FBCFE8) as a rare secondary accent reads modern for skincare and creator brands.',
    swatches: ['#A78BFA', '#FBCFE8', '#FFFFFF'],
  },
  {
    title: 'Purple Dream + muted gold',
    body: 'Muted gold (#CA8A04) on deep violet reads upscale for premium drops—keep gold to rules, icons, and thin strokes.',
    swatches: ['#7C3AED', '#CA8A04', '#FEFCE8'],
  },
];

export default function PurpleDreamPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-violet-900 via-purple-600 to-purple-300 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Purple Dream Color Palette: Hex Codes, Shades &amp; Pairings
            </h1>
            <p className="text-purple-100 text-lg max-w-3xl mb-6">
              Royal violet through mist lavender for creative, beauty, and luxury-adjacent brands that want expressive color with a coherent ramp.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#7C3AED]"
              role="img"
              aria-label="Purple Dream royal violet"
            />
            <div className="flex items-center gap-4 text-purple-100 text-sm">
              <time dateTime="2025-02-10">February 10, 2025</time>
              <span>•</span>
              <span>9 min read</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              {PALETTE.map((c) => (
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
                  ariaLabel="Purple Dream hex quick reference"
                  headline="Purple Dream — core hex codes"
                  subtext="Five-step ramp from airy mist to royal violet. Need a deeper anchor? Add #4C1D95 sparingly for footers and dark heroes."
                  rows={QUICK_ROWS}
                />
                <PaletteShadesTable
                  title="Purple Dream shades (light → dark)"
                  description="Eight lavender-to-aubergine stops—use light rows for surfaces, saturated rows for CTAs, deep row for type on tinted cards."
                  shades={SHADES}
                />
                <PalettePairingsSection
                  title="Palette pairings"
                  intro="Purple Dream fails when every surface is saturated. These neutrals and accents give hierarchy without killing personality."
                  pairings={PURPLE_PAIRINGS}
                />
                <PaletteUiUsageSection title="When to use Purple Dream in UI">
                  <p>
                    Anchor dark UI with <strong className="text-gray-900 dark:text-white">#7C3AED</strong>, use{' '}
                    <strong className="text-gray-900 dark:text-white">#8B5CF6</strong> for primary buttons on white, and{' '}
                    <strong className="text-gray-900 dark:text-white">#EDE9FE</strong> / <strong className="text-gray-900 dark:text-white">#C4B5FD</strong> for
                    cards and backgrounds. Run every white-on-purple pair through the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>
                    .
                  </p>
                  <p>
                    Build focus, hover, and disabled ramps with the <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> from #7C3AED
                    or #8B5CF6 so states stay in-gamut.
                  </p>
                </PaletteUiUsageSection>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    Purple Dream is a monochromatic purple palette that runs from mist lavender to royal violet. It reads as creative and expressive, and can lean
                    luxurious when paired with cream, charcoal, or restrained gold accents.
                  </p>
                  <p className="mb-6">
                    The trade-off is simple: Purple Dream helps you stand out, but it amplifies weak strategy. If your positioning is sharp and your system is
                    tight, it differentiates beauty, fashion, tech, and creative brands.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What Is the Purple Dream Palette?</h2>
                  <p className="mb-4">This palette is built around five steps of purple:</p>
                  <p className="mb-4 font-mono text-sm text-gray-600 dark:text-gray-400">
                    #7C3AED · #8B5CF6 · #A78BFA · #C4B5FD · #EDE9FE
                  </p>
                  <p className="mb-4">
                    Because it&apos;s monochromatic, the ramp is coherent by default—your job is contrast. Dark violets anchor navigation and heroes; mid tones
                    carry buttons; mist tones carry large surfaces behind dark text.
                  </p>
                  <p className="mb-6">
                    Extend into complementary schemes with the <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, then test real
                    components—not flat swatches.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    The Psychology of Purple: Where It Helps and Where It Hurts
                  </h2>
                  <p className="mb-4">Purple carries a specific set of associations that differ from blue or green:</p>
                  <ul className="mb-6">
                    <li>
                      <strong>Creativity and imagination</strong>: Purple is strongly linked with art, fantasy, and original thinking.
                    </li>
                    <li>
                      <strong>Luxury and indulgence</strong>: Deep violets can feel premium—if typography and layout are equally considered.
                    </li>
                    <li>
                      <strong>Individuality</strong>: Purple is less common in mainstream corporate brands—an asset when positioning is genuinely different.
                    </li>
                  </ul>
                  <p className="mb-6">
                    The flip side: purple can feel childish or &quot;fake premium&quot; when over-saturated or paired with random neons. Color amplifies strategy—it
                    does not replace it.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Hex Codes and Roles in the Palette</h2>
                  <p className="mb-4">Treat each color as a tool with a job:</p>
                  <ul className="mb-6">
                    <li>
                      <strong>#7C3AED – Royal violet</strong>: Primary anchor for dark heroes, navigation, and high-emphasis bands.
                    </li>
                    <li>
                      <strong>#8B5CF6 – Purple</strong>: Primary actions on white; secondary emphasis beside royal violet.
                    </li>
                    <li>
                      <strong>#A78BFA – Soft lavender</strong>: Cards, tabs, and chart fills where you need purple identity without harsh contrast.
                    </li>
                    <li>
                      <strong>#C4B5FD – Pastel lavender</strong>: Large soft surfaces; pair with charcoal type for paragraphs.
                    </li>
                    <li>
                      <strong>#EDE9FE – Mist lavender</strong>: Airy backgrounds and subtle dividers in light UI.
                    </li>
                  </ul>
                  <p className="mb-6">
                    Always verify exact combos in the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>; default to dark text on
                    mist/pastel for long reading.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Best Uses in Branding and Visual Identity</h2>
                  <p className="mb-4">Purple Dream works when positioning aligns with at least one of these directions:</p>
                  <ul className="mb-6">
                    <li>
                      <strong>Beauty and skincare</strong>: Purple signals indulgence when paired with clean photography and white space.
                    </li>
                    <li>
                      <strong>Creative studios and agencies</strong>: Differentiates from blue-and-gray agency defaults.
                    </li>
                    <li>
                      <strong>Modern tech and SaaS</strong>: Expressive identity for AI, design, and creator tools.
                    </li>
                    <li>
                      <strong>Entertainment and lifestyle</strong>: Events, music, and gaming brands that want bold, slightly surreal energy.
                    </li>
                  </ul>
                  <p className="mb-6">
                    If your promise is ultra-conservative or compliance-first, Purple Dream may belong in campaigns—not the entire core system.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Purple Dream in Web and UI Design</h2>
                  <p className="mb-4">Practical UI guidelines:</p>
                  <ul className="mb-6">
                    <li>
                      <strong>Use royal violet strategically</strong>: Headers, footers, and key sections—not endless full-bleed scroll.
                    </li>
                    <li>
                      <strong>Keep long copy on light surfaces</strong>: White or mist lavender with charcoal body text.
                    </li>
                    <li>
                      <strong>One primary action hue</strong>: Pick #7C3AED or #8B5CF6 as the main CTA and avoid competing brights.
                    </li>
                    <li>
                      <strong>Gradients with intent</strong>: Controlled hero gradients work; avoid smearing purple behind every module.
                    </li>
                  </ul>
                  <p className="mb-6">
                    For dense dashboards, keep Purple Dream on chrome and states; keep chart grids on neutral grays for legibility.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Color Combinations That Elevate Purple Dream</h2>
                  <p className="mb-4">Pairing ideas beyond the cards above:</p>
                  <ul className="mb-6">
                    <li>
                      <strong>Purple + Warm Neutrals</strong>: Cream and sand warm the system and reduce digital coldness.
                    </li>
                    <li>
                      <strong>Purple + Charcoal Gray</strong>: Adds seriousness for hybrid B2B / creative products.
                    </li>
                    <li>
                      <strong>Purple + Soft Pink</strong>: Beauty-forward when typography stays sharp and layouts stay minimal.
                    </li>
                    <li>
                      <strong>Purple + Forest Green</strong>: High-contrast editorial moves—manage hierarchy so both hues are not fighting at full saturation.
                    </li>
                  </ul>
                  <p className="mb-6">
                    Validate combinations in the <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> and lock passing pairs with
                    the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When Purple Dream Is the Wrong Call</h2>
                  <p className="mb-4">It&apos;s a bad fit when:</p>
                  <ul className="mb-6">
                    <li>Your audience expects conservative visuals and you have not earned expressive color.</li>
                    <li>You stack purple on an already loud system and lose hierarchy.</li>
                    <li>You rely on purple for &quot;luxe&quot; while layout, copy, and photography still feel cheap.</li>
                  </ul>
                  <p className="mb-6">
                    In those cases, simplify the system or reserve Purple Dream for launches and seasonal art direction.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Should You Build Your Brand on Purple Dream?</h2>
                  <p className="mb-4">Before you commit:</p>
                  <ul className="mb-6">
                    <li>
                      <strong>Does your brand benefit from feeling creative, expressive, and slightly unconventional?</strong>
                    </li>
                    <li>
                      <strong>Can you keep type, layout, and imagery as disciplined as the color is expressive?</strong>
                    </li>
                    <li>
                      <strong>Will you use purple consistently across product, marketing, and offline touchpoints?</strong>
                    </li>
                  </ul>
                  <p className="mb-8">
                    If the answer is &quot;yes,&quot; Purple Dream can anchor identity. If not, use it as accent and explore{' '}
                    <InlineTagLink href="/blog/forest-green">Forest Green</InlineTagLink> or <InlineTagLink href="/blog/ocean-breeze">Ocean Breeze</InlineTagLink>{' '}
                    for calmer bases.
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={PALETTE} designTitle="Purple Dream" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
