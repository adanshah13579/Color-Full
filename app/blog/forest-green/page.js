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
  path: '/blog/forest-green',
  title: 'Forest Green Color Palette: Hex Codes, Shades & Pairings',
  description:
    'Forest green palette hex codes starting with #228B22. Get all shades from light mint to deep hunter green, with UI examples and palette pairings.',
  keywords: ['forest green', 'natural palette', 'green hex', '#228B22', 'Theme & Color'],
});

const PALETTE = [
  { hexCode: '#228B22', colorName: 'Forest (CSS)', rgbCode: 'rgb(34, 139, 34)' },
  { hexCode: '#166534', colorName: 'Deep evergreen', rgbCode: 'rgb(22, 101, 52)' },
  { hexCode: '#15803D', colorName: 'Rich green', rgbCode: 'rgb(21, 128, 61)' },
  { hexCode: '#86EFAC', colorName: 'Light mint', rgbCode: 'rgb(134, 239, 172)' },
  { hexCode: '#DCFCE7', colorName: 'Pale mist', rgbCode: 'rgb(220, 252, 231)' },
];

const QUICK_ROWS = [
  { label: 'Forest (canonical)', value: '#228B22' },
  { label: 'Deep evergreen', value: '#166534' },
  { label: 'Rich green', value: '#15803D' },
  { label: 'Light mint', value: '#86EFAC' },
  { label: 'Pale mist tint', value: '#DCFCE7' },
];

const SHADES = [
  { name: 'Green mist', hex: '#F0FDF4' },
  { name: 'Pale mint', hex: '#DCFCE7' },
  { name: 'Honey mint', hex: '#BBF7D0' },
  { name: 'Light mint', hex: '#86EFAC' },
  { name: 'Forest (CSS)', hex: '#228B22' },
  { name: 'Rich green', hex: '#15803D' },
  { name: 'Deep evergreen', hex: '#166534' },
  { name: 'Pine shadow', hex: '#052E16' },
];

const FOREST_PAIRINGS = [
  {
    title: 'Forest + warm white',
    body: 'Off-white and warm gray (#FAFAF9, #F5F5F4) keep product UI calm while #166534 anchors navigation.',
    swatches: ['#166534', '#FAFAF9', '#DCFCE7'],
  },
  {
    title: 'Forest + brass accent',
    body: 'Muted brass (#B45309) on deep green reads premium for editorial and wellness—use brass sparingly for rules and icons.',
    swatches: ['#166534', '#B45309', '#FFFBEB'],
  },
  {
    title: 'Forest + Ocean teal bridge',
    body: 'Teal #14B8A6 links forest brands to water and clarity; good for dashboards that pair sustainability with analytics.',
    swatches: ['#228B22', '#14B8A6', '#F8FAFC'],
  },
  {
    title: 'Forest + dusty rose',
    body: 'Soft rose (#FDA4AF) as a rare accent warms green-heavy layouts without neon clash.',
    swatches: ['#15803D', '#FDA4AF', '#FFF1F2'],
  },
];

export default function ForestGreenPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-600 to-emerald-400 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Forest Green Color Palette: Hex Codes, Shades &amp; Pairings
            </h1>
            <p className="text-emerald-100 text-lg max-w-3xl mb-6">
              From CSS forest green (#228B22) through deep evergreen and airy mint tints—built for eco, fintech, and wellness interfaces.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#228B22]"
              role="img"
              aria-label="Forest green primary swatch"
            />
            <div className="flex items-center gap-4 text-emerald-100 text-sm">
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
                  theme="forest"
                  ariaLabel="Forest Green hex quick reference"
                  headline="Forest Green — core hex codes"
                  subtext="Five stops from mist tint to deep evergreen. For HSL, named CSS forestgreen, and alternate UI greens, see the dedicated hex reference."
                  rows={QUICK_ROWS}
                />
                <PaletteShadesTable
                  title="Forest green shades (light → dark)"
                  description="Eight stops from airy mint backgrounds to near-black pine—pair tints with dark text, not white, until you verify contrast."
                  shades={SHADES}
                />
                <PalettePairingsSection
                  title="Palette pairings"
                  intro="Forest green wins when neutrals do the typography work and green signals structure, growth, or sustainability."
                  pairings={FOREST_PAIRINGS}
                />
                <PaletteUiUsageSection title="When to use Forest Green in UI">
                  <p>
                    Anchor chrome with <strong className="text-gray-900 dark:text-white">#166534</strong> or{' '}
                    <strong className="text-gray-900 dark:text-white">#15803D</strong>, use <strong className="text-gray-900 dark:text-white">#228B22</strong> for
                    brand moments that must match CSS <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">forestgreen</code>, and reserve{' '}
                    <strong className="text-gray-900 dark:text-white">#DCFCE7</strong> / <strong className="text-gray-900 dark:text-white">#86EFAC</strong> for
                    surfaces and success. Validate every text-on-green pair in the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                  </p>
                  <p>
                    Generate hover, border, and dark-mode ramps from any anchor with the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>—start from #166534 for UI systems or #228B22 for literal
                    CSS parity.
                  </p>
                </PaletteUiUsageSection>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    Forest Green is a grounded palette that moves from pale mint mist to deep evergreen. It evokes real landscapes—trees, moss, foliage—and
                    signals stability, growth, and sustainability for serious modern brands.
                  </p>
                  <p className="mb-6">
                    For named-color RGB/HSL and Ocean Breeze cross-reference, open the{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">Forest Green hex code guide</InlineTagLink>. To preview mixes, use the{' '}
                    <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What Is the Forest Green Palette?</h2>
                  <p className="mb-4">The palette on this page is built around five greens that step from mist tint to deep evergreen:</p>
                  <p className="mb-4 font-mono text-sm text-gray-600 dark:text-gray-400">
                    #228B22 · #166534 · #15803D · #86EFAC · #DCFCE7
                  </p>
                  <p className="mb-4">
                    Together, these shades support full interfaces: dark tones anchor navigation and type on light UI, mid tones handle CTAs, and tints carry
                    backgrounds and success states.
                  </p>
                  <p className="mb-6">
                    Need more steps? Use the <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> from any anchor hex.
                  </p>

                  <p className="mb-6 text-gray-600 dark:text-gray-400 text-base">
                    Copy-ready swatches for every stop live in the sticky sidebar on large screens (and at the top of this page).
                  </p>

                  <div className="not-prose my-8 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/90 dark:bg-emerald-950/50 p-6 md:p-8">
                    <h3 className="text-xl font-bold text-emerald-950 dark:text-emerald-100 mb-2">
                      Palette generator: Forest Green shades and codes
                    </h3>
                    <p className="text-emerald-900/90 dark:text-emerald-200/90 text-base leading-relaxed mb-4">
                      Open our free{' '}
                      <Link
                        href="/tools/palette-generator"
                        className="font-semibold text-emerald-800 dark:text-emerald-300 underline underline-offset-2 hover:text-emerald-950 dark:hover:text-white"
                      >
                        color palette generator
                      </Link>{' '}
                      with any Forest anchor. Choose <strong className="text-emerald-950 dark:text-emerald-50">Monochromatic</strong> for hover, borders, and
                      surfaces, or try analogous or complementary harmonies.
                    </p>
                    <p className="text-sm font-medium text-emerald-950 dark:text-emerald-100 mb-3">
                      Monochromatic shades from each plate (one-click):
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {PALETTE.map((c) => (
                        <Link
                          key={`gen-mono-${c.hexCode}`}
                          href={`/tools/palette-generator?hex=${c.hexCode.replace('#', '')}&harmony=monochromatic`}
                          className="inline-flex items-center rounded-lg bg-emerald-700 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-800 dark:hover:bg-emerald-600 transition-colors"
                        >
                          Shades from {c.colorName}
                        </Link>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-emerald-950 dark:text-emerald-100 mb-2">
                      From deep evergreen (#166534), explore full harmonies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href="/tools/palette-generator?hex=166534&harmony=analogous"
                        className="inline-flex rounded-lg border border-emerald-700 bg-white/80 dark:bg-emerald-900/60 px-3 py-2 text-sm font-medium text-emerald-900 dark:text-emerald-100 hover:bg-white dark:hover:bg-emerald-900 transition-colors"
                      >
                        Analogous palette
                      </Link>
                      <Link
                        href="/tools/palette-generator?hex=166534&harmony=complementary"
                        className="inline-flex rounded-lg border border-emerald-700 bg-white/80 dark:bg-emerald-900/60 px-3 py-2 text-sm font-medium text-emerald-900 dark:text-emerald-100 hover:bg-white dark:hover:bg-emerald-900 transition-colors"
                      >
                        Complementary palette
                      </Link>
                      <Link
                        href="/tools/palette-generator?hex=166534&harmony=triadic"
                        className="inline-flex rounded-lg border border-emerald-700 bg-white/80 dark:bg-emerald-900/60 px-3 py-2 text-sm font-medium text-emerald-900 dark:text-emerald-100 hover:bg-white dark:hover:bg-emerald-900 transition-colors"
                      >
                        Triadic palette
                      </Link>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Psychology of Forest Green</h2>
                  <p className="mb-4">Forest Green is not a playful or impulsive color. It carries specific, repeatable associations you can lean on:</p>
                  <ul className="mb-6">
                    <li>
                      <strong>Stability and long-term thinking</strong>: Dark greens feel rooted and established, ideal for brands that want to signal durability
                      rather than trends.
                    </li>
                    <li>
                      <strong>Sustainability and nature</strong>: These tones instantly read as organic and earth-linked—perfect for eco, climate, outdoor, and
                      wellness brands.
                    </li>
                    <li>
                      <strong>Quiet luxury</strong>: When paired with warm neutrals or brass accents, Forest Green leans into a premium, under-stated aesthetic
                      instead of loud &quot;premium&quot; tropes.
                    </li>
                    <li>
                      <strong>Calm focus</strong>: In interfaces, deep greens can lower visual noise and support concentration, especially when backgrounds stay
                      light and typography is clear.
                    </li>
                  </ul>
                  <p className="mb-6">
                    If your product is built around speed, hype, or constant novelty, this palette will likely fight your story. But if your value proposition is
                    trust, depth, and responsibility, Forest Green is often a better strategic choice than another generic dark blue.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Hex Codes and Roles in the Palette</h2>
                  <p className="mb-4">A small, intentional system where each shade has a job:</p>
                  <ul className="mb-6">
                    <li>
                      <strong>#228B22 – CSS Forest</strong>: Canonical web forestgreen; use when specs demand the named color or for brand marks tied to classic
                      web green.
                    </li>
                    <li>
                      <strong>#166534 – Deep evergreen</strong>: Navigation bars, footers, and high-emphasis UI on light backgrounds.
                    </li>
                    <li>
                      <strong>#15803D – Rich green</strong>: Primary buttons, filled badges, and strong accents on white or mist surfaces.
                    </li>
                    <li>
                      <strong>#86EFAC – Light mint</strong>: Secondary highlights, charts, and soft borders—avoid tiny white text on top.
                    </li>
                    <li>
                      <strong>#DCFCE7 – Pale mist</strong>: Section backgrounds, cards, and success washes; pair with charcoal body copy.
                    </li>
                  </ul>
                  <p className="mb-6">
                    Always verify with the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before shipping white type on mid greens.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Best Uses in Branding and Visual Identity</h2>
                  <p className="mb-4">
                    Forest Green is a good fit for brands that need to feel credible and modern without leaning on the overused &quot;enterprise blue&quot;
                    palette. It&apos;s especially strong for:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Climate and sustainability</strong>: Climate tech, non-profits, and ESG initiatives that need to back up their message visually.
                    </li>
                    <li>
                      <strong>Finance and fintech</strong>: Products that manage money, savings, or investments and want to signal longevity and responsibility.
                    </li>
                    <li>
                      <strong>Outdoors and lifestyle</strong>: Hiking, camping, and slow travel brands that want to mirror real-world landscapes, not cartoon
                      palettes.
                    </li>
                    <li>
                      <strong>Wellness and slow living</strong>: Meditation, sleep, and mental health products where calm visuals support the product promise.
                    </li>
                  </ul>
                  <p className="mb-6">
                    The mistake to avoid is using Forest Green while your brand story shouts speed, trend-chasing, or maximalist energy. In those cases, keep this
                    palette in a supporting role or choose a more vibrant primary and let green appear as an accent only.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Forest Green in Web and UI Design</h2>
                  <p className="mb-4">
                    In interfaces, Forest Green works best when you treat it as a structural color, not a full-page paint bucket. A few practical patterns:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Hero sections</strong>: Use the darkest greens for a hero background with generous padding, large type, and plenty of breathing room.
                    </li>
                    <li>
                      <strong>Navigation and headers</strong>: A slim dark-green header with white type can anchor the page without feeling heavy.
                    </li>
                    <li>
                      <strong>Primary actions</strong>: Reserve one mid-to-dark green for your primary CTAs and keep it consistent across the product.
                    </li>
                    <li>
                      <strong>Feedback states</strong>: Lighter greens are excellent for success messages, confirmation banners, and progress indicators.
                    </li>
                  </ul>
                  <p className="mb-6">
                    Overusing full-bleed, dark green backgrounds on long pages can make content feel dense and tiring to read. Aim for contrast: alternate Forest
                    Green sections with white or off-white content blocks so the eye can rest and hierarchy stays clear.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Color Combinations That Actually Work</h2>
                  <p className="mb-4">
                    Forest Green is surprisingly flexible, as long as you avoid pairing it with overly saturated rivals. Strong, reliable combinations include:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Forest Green + Warm Neutrals</strong>: Cream, beige, and soft taupe create a cozy, organic feel that works well for editorial sites
                      and lifestyle brands.
                    </li>
                    <li>
                      <strong>Forest Green + Crisp White</strong>: Clean, minimal, and highly legible—ideal for product marketing sites and SaaS dashboards.
                    </li>
                    <li>
                      <strong>Forest Green + Brass/Gold</strong>: Adds quiet luxury without tipping into cliché black-and-gold territory.
                    </li>
                    <li>
                      <strong>Forest Green + Dusty Pink</strong>: A modern, editorial pairing that feels current but still grounded. Use it carefully in accents,
                      not everywhere.
                    </li>
                  </ul>
                  <p className="mb-6">
                    If you want to quickly test these pairings, plug Forest Green and your supporting colors into the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> and preview them as UI blocks rather than flat swatches.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When Forest Green Is the Wrong Choice</h2>
                  <p className="mb-4">Every palette has failure modes. Forest Green becomes a liability when:</p>
                  <ul className="mb-6">
                    <li>You rely heavily on tiny white text over mid-tone greens without checking contrast.</li>
                    <li>
                      Your brand voice is high-energy, youthful, or meme-driven, but your visuals are heavy and serious.
                    </li>
                    <li>You mix Forest Green with too many loud primaries, creating visual noise instead of hierarchy.</li>
                    <li>You use dark green for huge content blocks, making pages feel cramped and fatiguing.</li>
                  </ul>
                  <p className="mb-6">
                    If you recognize your brand in that list, demote Forest Green to an accent color. Use it for success states, badges, or illustrations instead
                    of anchoring the entire experience around it.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Should You Build Your Brand on Forest Green?</h2>
                  <p className="mb-4">Before you commit, pressure-test the idea with three questions:</p>
                  <ul className="mb-6">
                    <li>
                      <strong>Does your product benefit from feeling grounded and long-term?</strong> If you&apos;re selling trust, safety, or durability, Forest
                      Green earns its place.
                    </li>
                    <li>
                      <strong>Can you keep the supporting palette muted and intentional?</strong> If everything else is loud, Forest Green will get drowned out
                      or look misplaced.
                    </li>
                    <li>
                      <strong>Will you use it consistently across UI, marketing, and physical touchpoints?</strong> The color only becomes brand equity when it
                      shows up everywhere with discipline.
                    </li>
                  </ul>
                  <p className="mb-8">
                    If those answers are &quot;yes,&quot; Forest Green is more than an aesthetic preference—it&apos;s a strategic signal of who you are. If not,
                    keep the palette handy for accents and explore other options like{' '}
                    <InlineTagLink href="/blog/ocean-breeze">Ocean Breeze</InlineTagLink> or <InlineTagLink href="/blog/purple-dream">Purple Dream</InlineTagLink>
                    .
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={PALETTE} designTitle="Forest Green" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
