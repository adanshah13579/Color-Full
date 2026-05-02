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
  path: '/blog/ocean-breeze',
  title: 'Ocean Breeze Color Palette: Hex Codes, Shades & Pairings',
  description:
    'The ocean breeze color palette uses #0EA5E9, #06B6D4, and #14B8A6. Get all hex codes, shades, and UI pairings for this calm blue-teal palette.',
  keywords: ['ocean breeze palette', 'blue teal hex', 'calm colors', 'UI palette', 'Theme & Color'],
});

const PALETTE = [
  { hexCode: '#0EA5E9', colorName: 'Sky Blue', rgbCode: 'rgb(14, 165, 233)' },
  { hexCode: '#06B6D4', colorName: 'Cyan', rgbCode: 'rgb(6, 182, 212)' },
  { hexCode: '#14B8A6', colorName: 'Teal', rgbCode: 'rgb(20, 184, 166)' },
  { hexCode: '#10B981', colorName: 'Emerald', rgbCode: 'rgb(16, 185, 129)' },
];

const QUICK_ROWS = [
  { label: 'Sky blue', value: '#0EA5E9' },
  { label: 'Cyan', value: '#06B6D4' },
  { label: 'Teal', value: '#14B8A6' },
  { label: 'Emerald (mint family)', value: '#10B981' },
];

const SHADES = [
  { name: 'Ice', hex: '#F0F9FF' },
  { name: 'Aqua haze', hex: '#E0F2FE' },
  { name: 'Soft sky', hex: '#7DD3FC' },
  { name: 'Sky blue', hex: '#0EA5E9' },
  { name: 'Cyan', hex: '#06B6D4' },
  { name: 'Teal', hex: '#14B8A6' },
  { name: 'Deep teal', hex: '#0F766E' },
  { name: 'Abyss teal', hex: '#134E4A' },
];

const PAIRINGS = [
  {
    title: 'Ocean Breeze + warm white',
    body: 'Use near-white warm neutrals for page backgrounds so sky and cyan CTAs stay crisp. Body text stays charcoal or slate for readability.',
    swatches: ['#0EA5E9', '#FAFAF9', '#F8FAFC'],
  },
  {
    title: 'Ocean Breeze + slate structure',
    body: 'Pair teal accents with #0F172A or #1E293B for navigation, type, and data tables. Reserve blues for actions and links.',
    swatches: ['#14B8A6', '#0F172A', '#E2E8F0'],
  },
  {
    title: 'Ocean Breeze + sand',
    body: 'Warm sand or stone (#E7E5E4, #D6D3D1) softens clinical blue UI—good for wellness, hospitality, and editorial layouts.',
    swatches: ['#06B6D4', '#E7E5E4', '#F5F5F4'],
  },
  {
    title: 'Ocean Breeze + deep green anchor',
    body: 'A deep forest accent (#166534) signals sustainability next to water tones. Keep green to supporting chips and icons so hierarchy stays blue-first.',
    swatches: ['#0EA5E9', '#14B8A6', '#166534'],
  },
];

export default function OceanBreezePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-cyan-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Ocean Breeze Color Palette: Hex Codes, Shades &amp; Pairings
            </h1>
            <p className="text-cyan-100 text-lg max-w-3xl mb-6">
              Calm sky-to-teal ramp for dashboards, wellness, and travel brands—with copy-ready hex codes and UI-first guidance.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#0EA5E9]"
              role="img"
              aria-label="Ocean Breeze primary sky blue"
            />
            <div className="flex items-center gap-4 text-cyan-100 text-sm">
              <time dateTime="2025-02-10">February 10, 2025</time>
              <span>•</span>
              <span>6 min read</span>
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
                  theme="ocean"
                  ariaLabel="Ocean Breeze hex quick reference"
                  headline="Ocean Breeze — core hex codes"
                  subtext="Copy the anchors you will use in CSS, Figma, or tokens. For a five-stop ramp including mint, see the hex reference or sidebar."
                  rows={QUICK_ROWS}
                />
                <PaletteShadesTable
                  title="Ocean Breeze shades (light → dark)"
                  description="Eight stops from icy tint to deep teal—use tints for backgrounds and deep tones for text on pastel cards."
                  shades={SHADES}
                />
                <PalettePairingsSection
                  title="Palette pairings"
                  intro="These combinations keep Ocean Breeze feeling calm and premium without turning into default corporate blue."
                  pairings={PAIRINGS}
                />
                <PaletteUiUsageSection title="When to use Ocean Breeze in UI">
                  <p>
                    Lead with <strong className="text-gray-900 dark:text-white">Sky Blue</strong> or{' '}
                    <strong className="text-gray-900 dark:text-white">Cyan</strong> for primary CTAs and key links; use{' '}
                    <strong className="text-gray-900 dark:text-white">Teal</strong> and <strong className="text-gray-900 dark:text-white">Emerald</strong> for
                    secondary actions, success, and charts. Avoid small body text in pure sky on white without testing in the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                  </p>
                  <p>
                    Extend hover, disabled, and dark-mode steps from any anchor using the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>—start from #0EA5E9 or #14B8A6 and generate monochromatic or
                    analogous scales instead of guessing tints by eye.
                  </p>
                </PaletteUiUsageSection>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    The Ocean Breeze color palette moves from sky blue through cyan and teal into emerald—ideal when you want trust and clarity without a cold
                    corporate default. Below, the long-form guide covers roles, code tokens, accessibility limits, and branding patterns.
                  </p>
                  <p className="mb-6">
                    Want to see what these blues and teals look like when mixed with other colors? Try our{' '}
                    <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What Is the Ocean Breeze Color Palette?</h2>
                  <p className="mb-4">
                    Ocean Breeze is an analogous color palette: the hues sit next to each other on the color wheel, from blue through blue-green to green. That
                    proximity creates a smooth, harmonious transition that reads as one cohesive theme. The palette is often used for brands and products that
                    want to convey trust, clarity, wellness, or a connection to nature—think fintech apps, health platforms, travel sites, and SaaS dashboards.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Colors: Hex Codes and Roles</h2>
                  <p className="mb-4">
                    Each color has a clear technical definition and a suggested role in your design system. Use the quick answer box above for one-click copy;
                    this list explains intent.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white">Sky Blue (#0EA5E9)</strong> — Primary blue for CTAs, links, and headers on light UI.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Cyan (#06B6D4)</strong> — Secondary actions, hover, and badges beside sky blue.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Teal (#14B8A6)</strong> — Bridge tone for icons, tertiary accents, and success-adjacent
                      states.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Emerald (#10B981)</strong> — Green-leaning accent for positive feedback; pair with teal
                      for a cohesive accent range.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Best Uses in Web and UI Design</h2>
                  <p className="mb-4">
                    Assign one primary and one or two secondary colors so the interface stays consistent. Reserve Mint (#34D399) from the extended five-stop
                    set for large tints if you add it—see the{' '}
                    <InlineTagLink href="/blog/ocean-breeze-hex-code">Ocean Breeze hex code reference</InlineTagLink> for the full five. Run every text pair
                    through the <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink> for WCAG AA or AAA where required.
                  </p>
                  <p className="mb-6">
                    For dashboards, Ocean Breeze can drive charts: sky for primary series, teal for secondary, emerald for positive deltas. Keep neutrals for
                    text and surfaces.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Using Ocean Breeze in Code: CSS Variables and Design Tokens</h2>
                  <p className="mb-4">
                    Implement with CSS custom properties on <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">:root</code>, then map
                    to semantic tokens (<code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">primary-500</code>,{' '}
                    <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">accent-teal</code>). Generate extended scales with the{' '}
                    <InlineTagLink href="/tools/palette-generator">color palette generator</InlineTagLink>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Accessibility and Contrast</h2>
                  <p className="mb-4">
                    Sky and cyan on white often fail WCAG AA for normal text; use them for large headings, buttons, and non-text chrome. For body copy, use
                    dark neutrals on white or very light backgrounds.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Ocean Breeze for Branding and Marketing</h2>
                  <p className="mb-4">
                    Use sky or cyan as the primary brand color; document every hex in guidelines so vendors match digital and print conversions.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Extend or Adjust the Palette</h2>
                  <p className="mb-8">
                    Use our <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> from any anchor hex, and validate pairs with our{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                  </p>
                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={PALETTE} designTitle="Ocean Breeze" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
