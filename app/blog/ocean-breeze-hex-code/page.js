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
  path: '/blog/ocean-breeze-hex-code',
  title: 'Ocean Breeze Hex Codes: Blue & Teal Color Codes (Copy-Paste)',
  description:
    'Ocean breeze hex codes include #0EA5E9, #06B6D4, #14B8A6 and more. Copy 10 shades, UI use cases, palette pairings, and build your own with our free color tools.',
  keywords: ['ocean breeze hex', 'teal hex codes', 'blue palette', 'copy paste colors', 'Theme & Color'],
});

const OCEAN_BREEZE = [
  { hexCode: '#0EA5E9', colorName: 'Sky Blue', rgbCode: 'rgb(14, 165, 233)' },
  { hexCode: '#06B6D4', colorName: 'Cyan', rgbCode: 'rgb(6, 182, 212)' },
  { hexCode: '#14B8A6', colorName: 'Teal', rgbCode: 'rgb(20, 184, 166)' },
  { hexCode: '#10B981', colorName: 'Emerald', rgbCode: 'rgb(16, 185, 129)' },
  { hexCode: '#34D399', colorName: 'Mint', rgbCode: 'rgb(52, 211, 153)' },
];

const QUICK_ROWS = [
  { label: 'Sky Blue', value: '#0EA5E9' },
  { label: 'Cyan', value: '#06B6D4' },
  { label: 'Teal', value: '#14B8A6' },
  { label: 'Emerald', value: '#10B981' },
  { label: 'Mint', value: '#34D399' },
];

const OCEAN_SHADES = [
  { name: 'Ice wash', hex: '#F0F9FF' },
  { name: 'Pale sky', hex: '#E0F2FE' },
  { name: 'Sky blue', hex: '#0EA5E9' },
  { name: 'Cyan', hex: '#06B6D4' },
  { name: 'Bright aqua', hex: '#22D3EE' },
  { name: 'Teal', hex: '#14B8A6' },
  { name: 'Emerald', hex: '#10B981' },
  { name: 'Mint', hex: '#34D399' },
  { name: 'Deep teal', hex: '#0F766E' },
  { name: 'Ocean navy', hex: '#0C4A6E' },
];

const OCEAN_PAIRINGS = [
  {
    title: 'Ocean Breeze + white (clean SaaS)',
    body: 'White (#FFFFFF) or off-white (#F8FAFC) content wells with #0EA5E9 primary buttons and #0C4A6E headings keep interfaces airy and trustworthy.',
    swatches: ['#0EA5E9', '#FFFFFF', '#0C4A6E'],
  },
  {
    title: 'Ocean Breeze + sand (travel & wellness)',
    body: 'Warm sand (#F5E6D3) or cream (#FFFBEB) backgrounds soften cool blues for hospitality, spas, and coastal brands without losing calm.',
    swatches: ['#14B8A6', '#F5E6D3', '#06B6D4'],
  },
  {
    title: 'Ocean Breeze + coral (energetic accent)',
    body: 'Coral #FF6B6B or salmon #FA8072 as a single warm CTA against teal navigation prevents an all-cool UI from feeling clinical.',
    swatches: ['#06B6D4', '#FF6B6B', '#F0F9FF'],
  },
  {
    title: 'Ocean Breeze + charcoal (data-heavy UI)',
    body: 'Charcoal body text (#111827) on mint-tinted stripes (#ECFDF5) with #10B981 success states reads professional for dashboards and analytics.',
    swatches: ['#10B981', '#111827', '#ECFDF5'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the Ocean Breeze hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core Ocean Breeze palette uses #0EA5E9 (sky blue), #06B6D4 (cyan), #14B8A6 (teal), #10B981 (emerald), and #34D399 (mint). Extended shades run from ice #F0F9FF to deep ocean navy #0C4A6E.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main Ocean Breeze color hex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most teams anchor Ocean Breeze on #0EA5E9 for primary actions and #14B8A6 for secondary accents. Pick one sky hex and one teal hex as tokens, then document tints in a style guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ocean Breeze color or colour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both spellings describe the same blue-to-mint family. Hex and RGB values do not change by region—only copy spelling differs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Ocean Breeze for UI text colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Ocean Breeze for buttons, links, charts, and highlights—not long body text on light backgrounds. Pair with charcoal or navy for paragraphs and verify every combination with a WCAG contrast checker.',
      },
    },
  ],
};

export default function OceanBreezeHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-sky-600 via-cyan-500 to-emerald-500 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-cyan-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Ocean Breeze Hex Codes: Blue &amp; Teal Palette
            </h1>
            <p className="text-cyan-100 text-lg max-w-3xl mb-6">
              Copy-ready sky, cyan, teal, emerald, and mint hex codes—plus ten shades, UI use cases, and pairings for calm digital products.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#0EA5E9]"
              role="img"
              aria-label="Ocean Breeze sky blue swatch"
            />
            <div className="flex items-center gap-4 text-cyan-100 text-sm">
              <time dateTime="2026-04-17">April 17, 2026</time>
              <span>•</span>
              <span>9 min read</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              {OCEAN_BREEZE.map((c) => (
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
                  theme="ocean"
                  ariaLabel="Ocean Breeze hex quick reference"
                  headline="Ocean Breeze — core hex codes"
                  subtext="Five anchors from sky blue to mint. Copy any value for CSS, Figma, or design tokens."
                  rows={QUICK_ROWS}
                />

                <PaletteShadesTable
                  title="Ocean Breeze shades (lightest → darkest)"
                  description="Ten stops from ice wash to ocean navy—use pale rows for backgrounds, mid rows for buttons and charts, dark rows for headers and type on light UI."
                  shades={OCEAN_SHADES}
                />

                <PaletteUiUsageSection title="Ocean Breeze in UI design">
                  <p>
                    <strong className="text-gray-900 dark:text-white">Fintech and health dashboards:</strong> Use #0EA5E9 for primary actions and #10B981 for positive trends. Keep tables on white or #F8FAFC; reserve mint (#34D399) for success badges only after contrast testing in the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Travel and wellness apps:</strong> Hero gradients from #06B6D4 to #14B8A6 over photography feel coastal without cluttering navigation. Pair with sand neutrals (#F5E6D3) for booking flows so cool blues do not dominate every screen.
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Eco and sustainability landing pages:</strong> Emerald (#10B981) and deep teal (#0F766E) signal growth and responsibility. Use ice (#F0F9FF) section backgrounds and charcoal (#111827) body copy; one coral accent (#FF6B6B) can highlight donations or CTAs if contrast passes.
                  </p>
                </PaletteUiUsageSection>

                <PalettePairingsSection
                  title="Ocean Breeze palette pairings"
                  intro="Cool palettes fail when every element competes at full saturation. These four combinations give hierarchy, readable type, and brand flexibility."
                  pairings={OCEAN_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    Ocean Breeze starts with <strong className="text-gray-900 dark:text-white">#0EA5E9</strong> and{' '}
                    <strong className="text-gray-900 dark:text-white">#06B6D4</strong>. If you searched for{' '}
                    <strong className="text-gray-900 dark:text-white">Ocean Breeze color</strong>,{' '}
                    <strong className="text-gray-900 dark:text-white">Ocean Breeze colour</strong>, or{' '}
                    <strong className="text-gray-900 dark:text-white">Ocean Breeze hex code</strong>, you need copy-paste values fast. This page lists every core hex and RGB code, ten named shades with swatches, and practical guidance for UI and brand systems.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Ocean Breeze hex and RGB codes (full list)
                  </h2>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li>
                      <strong className="text-gray-900 dark:text-white">Sky Blue:</strong> #0EA5E9 · rgb(14, 165, 233)
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Cyan:</strong> #06B6D4 · rgb(6, 182, 212)
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Teal:</strong> #14B8A6 · rgb(20, 184, 166)
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Emerald:</strong> #10B981 · rgb(16, 185, 129)
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Mint:</strong> #34D399 · rgb(52, 211, 153)
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Ocean Breeze color vs colour: does spelling matter?
                  </h2>
                  <p className="mb-6">
                    No. <em>Color</em> and <em>colour</em> point to the same palette values. Keep both spellings naturally in your copy, but do not duplicate pages for each variation. One strong URL with clean content outperforms split relevance for UK and US queries.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CSS variables (ready to paste)</h2>
                  <p className="mb-4">
                    Map each shade to a semantic role so product screens do not drift. Developers should reference tokens—not raw hex scattered in components.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm overflow-x-auto mb-6 not-prose">
                    {`:root {
  --ob-sky: #0EA5E9;
  --ob-cyan: #06B6D4;
  --ob-teal: #14B8A6;
  --ob-emerald: #10B981;
  --ob-mint: #34D399;
  --ob-deep: #0C4A6E;
}`}
                  </pre>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Accessibility and contrast</h2>
                  <p className="mb-4">
                    Mint and cyan text on white often fails WCAG AA at small sizes. Use Ocean Breeze for buttons, icons, chart series, and large headings; keep paragraphs in #111827 or #0C4A6E. Run every text-on-tint pair through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before launch, including hover and focus states.
                  </p>
                  <p className="mb-6">
                    Dark mode may need desaturated teals: #14B8A6 on #111827 can glow too brightly. Test reduced-saturation variants generated from the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>.
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

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Related color guides</h2>
                  <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <li>
                      <InlineTagLink href="/blog/forest-green-hex-code">Forest Green Hex Code</InlineTagLink> — natural green anchors that pair with Ocean Breeze mint
                    </li>
                    <li>
                      <InlineTagLink href="/blog/navy-blue-hex-code">Navy Blue Hex Code</InlineTagLink> — deep blue structure for trust-heavy layouts
                    </li>
                    <li>
                      <InlineTagLink href="/blog/sage-green-hex-code">Sage Green Hex Code</InlineTagLink> — muted gray-green for wellness and lifestyle brands
                    </li>
                    <li>
                      <InlineTagLink href="/blog/ocean-breeze">Ocean Breeze palette story</InlineTagLink> — psychology, branding, and extended use cases
                    </li>
                  </ul>

                  <p className="mb-6">
                    Want to test what colors make when mixed like paint? Use the{' '}
                    <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink> to blend Ocean Breeze tones with warm or neutral accents.
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={OCEAN_BREEZE} designTitle="Ocean Breeze" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
