import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { PaletteQuickAnswer, PaletteShadesTable } from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/navy-blue-color-palette',
  title: 'Navy Blue Color Palette: Hex Codes, Combinations & UI Examples',
  description:
    'Navy blue color palette hex codes and combinations. Pair navy blue (#000080) with gold, white, coral and gray for web, brand and UI design.',
  keywords: [
    'navy blue color palette',
    'navy blue palette',
    'navy blue combinations',
    '#000080',
    'navy hex',
    'UI design',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: '2026-05-21T00:00:00.000Z',
  },
});

const QUICK_ROWS = [{ label: 'Hex', value: '#000080' }, { label: 'RGB', value: 'rgb(0, 0, 128)' }];

const NAVY_COMBINATIONS = [
  {
    title: 'Navy + Gold + White + Light Gray',
    body: 'Classic luxury and finance: navy structure (#000080), gold accents (#FFD700), white content wells (#FFFFFF), and light gray (#E5E7EB) for dividers and table zebra rows.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#FFD700', label: 'Gold' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#E5E7EB', label: 'Light gray' },
    ],
  },
  {
    title: 'Navy + Coral + Cream + Sand',
    body: 'Modern consumer and editorial brands: coral CTAs (#FF6B6B) pop on navy headers while cream (#FFF8F0) and sand (#D4C4A8) soften long-form reading areas.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#FF6B6B', label: 'Coral' },
      { hex: '#FFF8F0', label: 'Cream' },
      { hex: '#D4C4A8', label: 'Sand' },
    ],
  },
  {
    title: 'Navy + Mint + White + Dark Navy',
    body: 'Health and fintech dashboards: mint success states (#6EE7B7) on white cards, with navy chrome (#000080) and dark navy (#0A0A2E) for sidebars and dark mode shells.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#6EE7B7', label: 'Mint' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#0A0A2E', label: 'Dark navy' },
    ],
  },
  {
    title: 'Navy + Red + White + Silver',
    body: 'Patriotic, sports, and alert-heavy UIs: red (#DC2626) for urgency badges, silver (#C0C0C0) for borders and icons, white for body copy on light sections.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#DC2626', label: 'Red' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#C0C0C0', label: 'Silver' },
    ],
  },
  {
    title: 'Navy + Orange + Cream + Brown',
    body: 'Warm hospitality and autumn campaigns: orange highlights (#F97316), cream backgrounds (#FFF8E7), and brown (#78350F) for typography on light fields.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#F97316', label: 'Orange' },
      { hex: '#FFF8E7', label: 'Cream' },
      { hex: '#78350F', label: 'Brown' },
    ],
  },
  {
    title: 'Navy + Pink + White + Lavender',
    body: 'Beauty, lifestyle, and creative SaaS: pink accents (#F472B6) on navy heroes, lavender (#E6E6FA) for soft section backgrounds, white for product cards.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#F472B6', label: 'Pink' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#E6E6FA', label: 'Lavender' },
    ],
  },
];

const NAVY_SHADES = [
  { name: 'Alice blue', hex: '#F0F8FF' },
  { name: 'Light steel blue', hex: '#B0C4DE' },
  { name: 'Steel blue', hex: '#4682B4' },
  { name: 'Royal blue', hex: '#4169E1' },
  { name: 'Navy blue', hex: '#000080' },
  { name: 'Midnight blue', hex: '#191970' },
  { name: 'Dark navy', hex: '#0A0A2E' },
  { name: 'Prussian blue', hex: '#003153' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#FFD700', colorName: 'Gold', rgbCode: 'rgb(255, 215, 0)' },
  { hexCode: '#FF6B6B', colorName: 'Coral', rgbCode: 'rgb(255, 107, 107)' },
  { hexCode: '#FFFFFF', colorName: 'White', rgbCode: 'rgb(255, 255, 255)' },
  { hexCode: '#E5E7EB', colorName: 'Light gray', rgbCode: 'rgb(229, 231, 235)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a navy blue color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A navy blue color palette centers on #000080 as the primary anchor, then adds secondary and accent hex codes—often gold, white, coral, mint, or gray—for backgrounds, CTAs, and typography. The best palettes name each role (primary, surface, accent) so web and brand teams stay consistent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go in a navy blue palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common navy blue palette pairings include gold (#FFD700) and white for luxury, coral (#FF6B6B) and cream for modern consumer brands, mint (#6EE7B7) for health UI, and light gray (#E5E7EB) for minimal corporate layouts. Always test text and button contrast on navy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are good navy blue combinations for websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strong navy blue combinations for websites use navy for headers and footers (#000080), white or off-white for content wells, one saturated accent for CTAs, and a neutral gray for borders. Avoid filling entire viewports with saturated navy—alternate bands to reduce eye strain.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I build a navy blue palette from one hex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with #000080, then generate monochromatic tints and shades for surfaces, or pick one complementary accent (gold, coral, pink) plus two neutrals. Document hex codes in a style guide and verify WCAG contrast with a dedicated checker before shipping production UI.',
      },
    },
  ],
};

function NavyCombinationCard({ combo }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{combo.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{combo.body}</p>
      <div className="grid grid-cols-4 gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 mb-2">
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

export default function NavyBlueColorPalettePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-200/90 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Navy Blue Color Palette: Hex Codes, Combinations &amp; UI Examples
            </h1>
            <p className="text-blue-100/95 text-lg max-w-3xl mb-6">
              Build a complete <strong className="text-white font-semibold">navy blue color palette</strong> from #000080—six ready-made{' '}
              <strong className="text-white font-semibold">navy blue combinations</strong> with copy-ready hex codes for web, brand, and product design.
            </p>
            <div className="flex items-center gap-4 text-blue-200/90 text-sm">
              <time dateTime="2026-05-21">May 21, 2026</time>
              <span>•</span>
              <span>8 min read</span>
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
                  theme="navy"
                  ariaLabel="Navy blue palette quick answer"
                  headline="Navy Blue = #000080"
                  subtext="Canonical anchor for any navy blue palette—copy hex or RGB for CSS variables and design tokens."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    A practical <strong className="text-gray-900 dark:text-white">navy blue palette</strong> does more than repeat one deep blue. You need a primary anchor (
                    <strong className="text-gray-900 dark:text-white">#000080</strong>), lighter blues for hover and borders, neutrals for long reading sessions, and one accent that carries emotion—gold for prestige, coral for energy, mint for health. This guide packages six four-color{' '}
                    <strong className="text-gray-900 dark:text-white">navy blue combinations</strong> you can paste into Figma or token files today, then walks through UI and branding patterns so the palette survives real products—not just mood boards.
                  </p>
                </div>

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40 p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Navy Blue Color Palette Combinations</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Each card lists four hex codes with swatches. Treat navy as the 60% structural color in the{' '}
                    <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 rule</InlineTagLink>, assign one secondary neutral, and reserve the accent for CTAs and badges.
                  </p>
                  <ul className="space-y-4">
                    {NAVY_COMBINATIONS.map((combo) => (
                      <NavyCombinationCard key={combo.title} combo={combo} />
                    ))}
                  </ul>
                </div>

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 bg-white dark:bg-gray-800/40">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Navy Blue in UI Design</h2>
                  <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Finance dashboards.</strong> Use #000080 for the top navigation bar and account summary band, #FFFFFF for card surfaces, #FFD700 sparingly for positive trend chips, and #E5E7EB for table dividers. White labels on navy often pass WCAG AA at large sizes—run small numerals through the{' '}
                      <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before launch.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Marketing landing pages.</strong> A navy hero (#000080) with coral CTA (#FF6B6B) on cream body (#FFF8F0) creates clear hierarchy without a third competing hue. Keep paragraph text in charcoal (#1F2937) on cream rather than white-on-navy paragraphs, which fatigue readers on long pages.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">SaaS settings and admin.</strong> Mint success toasts (#6EE7B7) on white panels, navy sidebar (#000080), and dark navy (#0A0A2E) for collapsed rails or dark mode give developers semantic roles: <code className="rounded px-1 py-0.5 text-xs font-mono bg-gray-100 dark:bg-slate-800">surface.sidebar</code>,{' '}
                      <code className="rounded px-1 py-0.5 text-xs font-mono bg-gray-100 dark:bg-slate-800">status.success</code>, <code className="rounded px-1 py-0.5 text-xs font-mono bg-gray-100 dark:bg-slate-800">surface.canvas</code>. Plug #000080 into the{' '}
                      <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> to auto-build hover and disabled steps instead of hand-mixing blues.
                    </p>
                    <p>
                      Across patterns, the <strong className="text-gray-900 dark:text-white">navy blue palette</strong> wins when it stays structural: charts, photography, and illustration carry saturation; navy carries navigation, trust, and typographic hierarchy. Re-test after every font or radius change—rounded buttons and thin weights alter perceived contrast on #000080 more than flat rectangles do.
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Navy Blue in Branding</h2>
                  <p className="mb-4">
                    Industries reach for a <strong className="text-gray-900 dark:text-white">navy blue color palette</strong> because it signals stability without the harshness of black. Retail banking, insurers, and wealth managers pair navy with gold or silver to echo coins and metal cards. Government and civic brands use navy plus red and white for official recognition—document exact hex values so print vendors and web teams do not drift to different blues after one election cycle.
                  </p>
                  <p className="mb-4">
                    Maritime logistics, defense contractors, and nautical lifestyle labels lean on literal “sea” metaphor, but the same palette works for tech when you modernize typography: geometric sans, generous whitespace, and a single warm accent (orange or coral) so the brand does not read as 1990s corporate. Healthcare and clinical networks adopt navy for consent flows and portal headers because patients associate deep blue with competence; soften waiting-room screens with lavender or light gray rather than saturated navy fields.
                  </p>
                  <p className="mb-6">
                    Luxury fashion and hospitality often alternate navy packaging with cream and sand neutrals—see the coral-and-cream combination above for DTC brands that want energy without abandoning trust. When you pitch a new <strong className="text-gray-900 dark:text-white">navy blue palette</strong> to stakeholders, show three applications (logo lockup, app chrome, slide template) so approvers see proportion, not just a flat swatch strip.
                  </p>
                </div>

                <PaletteShadesTable
                  title="Navy Blue Shades"
                  description="Eight blues from airy tints to near-black navy. Use lighter rows for backgrounds; anchor UI chrome on #000080 or #191970."
                  shades={NAVY_SHADES}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <p className="mb-4">
                    When two teams disagree on “which navy,” the fix is governance: publish one primary (#000080 or your audited brand blue), map tints in the shades table to semantic names, and forbid one-off hex picks in marketing decks. Export the six combinations as JSON or CSS custom properties so engineers and designers share the same source. If you A/B test accents, change only the 10% accent slot—never the navy header without retesting every white label and focus ring on blue.
                  </p>
                  <p className="mb-6">
                    Whether you are refreshing a legacy brand or launching a B2B product, start with one canonical navy hex, pick one of the six <strong className="text-gray-900 dark:text-white">navy blue combinations</strong> above, then expand into a full token scale. For the single-code reference—including RGB, HSL, and a larger shade table—see our{' '}
                    <InlineTagLink href="/blog/navy-blue-hex-code">navy blue hex code guide</InlineTagLink>. To balance accent weight across layouts, read the{' '}
                    <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 color rule</InlineTagLink> next.
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
                    <InlineTagLink href="/blog/navy-blue-hex-code">Navy Blue Hex Code (#000080)</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 Color Rule</InlineTagLink>
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Navy + gold (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Navy palette" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
