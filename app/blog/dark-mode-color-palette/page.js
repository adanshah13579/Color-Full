import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

const LAST_MODIFIED = '2026-05-30T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/dark-mode-color-palette',
  title: 'Dark Mode Color Palette: Hex Codes, Backgrounds & UI Examples',
  description:
    'Build a dark mode color palette with the right hex codes for backgrounds, surfaces, text and accents. WCAG-compliant dark mode examples included.',
  keywords: [
    'dark mode color palette',
    'dark mode hex',
    'dark mode color scheme',
    'dark theme background color',
    'dark mode UI colors',
    'dark mode text color',
    'WCAG dark mode',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-30T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});

const BACKGROUND_ROWS = [
  { name: 'Pure black', hex: '#000000', note: 'Maximum contrast baseline; can feel harsh on OLED at full brightness' },
  { name: 'Rich black', hex: '#0A0A0A', note: 'Common app canvas—slightly softer than #000000' },
  { name: 'Dark gray (Material)', hex: '#121212', note: 'Google Material dark theme background standard' },
  { name: 'Off-black', hex: '#1A1A1A', note: 'Popular for cards-on-canvas separation without pure black' },
  { name: 'Dark navy', hex: '#0A0A2E', note: 'Tinted dark theme for finance, dev tools, and media apps' },
];

const TEXT_ROWS = [
  { name: 'Pure white', hex: '#FFFFFF', note: 'Maximum luminance—use for headings sparingly; can glare on #000000' },
  { name: 'Off-white', hex: '#F5F5F5', note: 'Safer default body text on #121212–#1A1A1A backgrounds' },
  { name: 'Muted white', hex: '#E0E0E0', note: 'Secondary copy, captions, and table metadata' },
];

const DARK_PALETTES = [
  {
    title: 'Neutral Material-style',
    body: 'Balanced default for productivity apps: Material #121212 canvas, raised surfaces one step lighter, indigo accent for links and primary buttons.',
    tokens: [
      { role: 'Background', hex: '#121212' },
      { role: 'Surface', hex: '#1E1E1E' },
      { role: 'Border', hex: '#3F3F46' },
      { role: 'Text', hex: '#F5F5F5' },
      { role: 'Accent', hex: '#818CF8' },
    ],
  },
  {
    title: 'Developer / IDE',
    body: 'Near-black canvas with cool gray text and cyan accent—common in code editors and terminal-inspired dashboards where long sessions demand low glare.',
    tokens: [
      { role: 'Background', hex: '#0A0A0A' },
      { role: 'Surface', hex: '#171717' },
      { role: 'Border', hex: '#27272A' },
      { role: 'Text', hex: '#E4E4E7' },
      { role: 'Accent', hex: '#22D3EE' },
    ],
  },
  {
    title: 'Navy dark theme',
    body: 'Tinted dark mode for finance and media: deep navy canvas, slightly lighter panels, gold accent for CTAs—avoids flat gray while staying professional.',
    tokens: [
      { role: 'Background', hex: '#0A0A2E' },
      { role: 'Surface', hex: '#1A1A3E' },
      { role: 'Border', hex: '#2D2D5A' },
      { role: 'Text', hex: '#F5F5F5' },
      { role: 'Accent', hex: '#FFD700' },
    ],
  },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#121212', colorName: 'Background', rgbCode: 'rgb(18, 18, 18)' },
  { hexCode: '#1E1E1E', colorName: 'Surface', rgbCode: 'rgb(30, 30, 30)' },
  { hexCode: '#3F3F46', colorName: 'Border', rgbCode: 'rgb(63, 63, 70)' },
  { hexCode: '#F5F5F5', colorName: 'Text', rgbCode: 'rgb(245, 245, 245)' },
  { hexCode: '#818CF8', colorName: 'Accent', rgbCode: 'rgb(129, 140, 248)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good dark mode background color hex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popular dark theme background colors include #121212 (Google Material), #0A0A0A (rich black), and #1A1A1A (off-black). Pure #000000 works but many products use near-black to reduce glare and separate surface layers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors should a dark mode color palette include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Define at minimum: canvas background, raised surface, border or divider, primary text, secondary text, link or accent, and semantic colors if needed. Test every text-on-surface pair with a WCAG contrast checker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WCAG apply to dark mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WCAG contrast requirements apply on dark backgrounds the same as light ones—4.5:1 for normal text and 3:1 for large text at Level AA. Muted gray body copy on #121212 is a common failure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should dark mode use pure white text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. #F5F5F5 or #E4E4E7 body text on near-black backgrounds reduces halation while still passing contrast. Reserve #FFFFFF for headings and primary labels; verify each pairing.',
      },
    },
  ],
};

function HexTable({ rows, columns }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800 text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {columns.map((col) => (
              <th key={col} className="px-4 py-3 font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {rows.map((row) => (
            <tr key={row.hex}>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block w-6 h-6 rounded border border-gray-300 dark:border-gray-600 shrink-0" style={{ backgroundColor: row.hex }} aria-hidden />
                  {row.name}
                </span>
              </td>
              <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">{row.hex}</td>
              {row.note && <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.note}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DarkPaletteCard({ palette }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{palette.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{palette.body}</p>
      <div className="flex gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 mb-3 h-12">
        {palette.tokens.map((t) => (
          <div key={t.hex} className="flex-1 min-w-0" style={{ backgroundColor: t.hex }} title={`${t.role} ${t.hex}`} aria-hidden />
        ))}
      </div>
      <ul className="space-y-1.5 text-sm">
        {palette.tokens.map((t) => (
          <li key={t.hex} className="flex flex-wrap gap-x-2 text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-white w-24 shrink-0">{t.role}</span>
            <span className="font-mono text-xs text-gray-500 dark:text-gray-400">{t.hex}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function DarkModeColorPalettePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950 text-white py-12 md:py-16">
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
              Dark Mode Color Palette: Hex Codes, Backgrounds &amp; UI Examples
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-6">
              Build a production-ready <strong className="text-white font-semibold">dark mode color palette</strong> with copy-paste{' '}
              <strong className="text-white font-semibold">dark mode hex</strong> values for backgrounds, surfaces, text, and accents—plus WCAG contrast guidance.
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <time dateTime="2026-05-30">May 30, 2026</time>
              <span>•</span>
              <span>11 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    A dark background alone does not make a good interface. Users still need readable body copy, visible borders, distinguishable cards, and accents that signal interactivity—each with enough luminance separation to pass WCAG. This guide defines a practical{' '}
                    <strong className="text-gray-900 dark:text-white">dark mode color scheme</strong> using named roles (background, surface, border, text, accent), lists common{' '}
                    <strong className="text-gray-900 dark:text-white">dark theme background color</strong> hex codes, and packages three complete palettes you can paste into CSS variables or design tokens today.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    What Makes a Good Dark Mode Color Palette?
                  </h2>
                  <p className="mb-4">
                    Strong dark mode palettes share three traits. First, <strong className="text-gray-900 dark:text-white">layer separation</strong>: the page background, card surfaces, and modals each step slightly lighter or use a visible border so users perceive depth without skeuomorphic shadows. Second, <strong className="text-gray-900 dark:text-white">restrained accents</strong>: one primary interactive hue (indigo, cyan, gold) plus semantic reds and greens—never five saturated accents at equal weight. Third, <strong className="text-gray-900 dark:text-white">verified contrast</strong>: body text, placeholders, disabled states, and focus rings each tested on the surface they actually render on—not on abstract brand swatches alone.
                  </p>
                  <p className="mb-6">
                    Avoid the two most common failures: mid-gray (#6B7280) body copy on #121212 that looks “fine” but fails 4.5:1, and pure white paragraphs on pure black that cause halation for light-sensitive users. A thoughtful{' '}
                    <strong className="text-gray-900 dark:text-white">dark mode color palette</strong> uses off-white text (#F5F5F5–#E4E4E7), near-black backgrounds (#0A0A0A–#121212), and accents bright enough to spot but not neon unless your brand demands it. For accessibility-focused depth, see our{' '}
                    <InlineTagLink href="/blog/accessible-dark-mode-color-palette">accessible dark mode palette guide</InlineTagLink>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Dark Mode Background Colors — Hex Codes
                  </h2>
                  <p className="mb-4">
                    Your canvas sets the mood for the entire <strong className="text-gray-900 dark:text-white">dark mode hex</strong> system. Pure black (#000000) maximizes OLED power savings but can feel stark; most products choose a{' '}
                    <strong className="text-gray-900 dark:text-white">dark theme background color</strong> one or two steps lighter so cards and sidebars can elevate without jumping to gray. Google Material standardized #121212; many developer tools prefer #0A0A0A; media and finance apps sometimes tint toward navy (#0A0A2E) for brand warmth.
                  </p>
                  <HexTable rows={BACKGROUND_ROWS} columns={['Background', 'Hex', 'Usage notes']} />

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Dark Mode Text Colors — Hex Codes
                  </h2>
                  <p className="mb-4">
                    Text tokens need at least two steps: primary for headings and body, secondary for captions and metadata. Pure white (#FFFFFF) on #121212 often passes with room to spare but can glare during long reading sessions; #F5F5F5 is a common default body color. Muted white (#E0E0E0) suits secondary labels when primary text uses #F5F5F5—verify the pair still clears WCAG AA on your exact background hex.
                  </p>
                  <HexTable rows={TEXT_ROWS} columns={['Text role', 'Hex', 'Usage notes']} />

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    3 Complete Dark Mode Palettes with Hex Codes
                  </h2>
                  <p className="mb-4">
                    Copy any row below into your design system as semantic tokens: <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-canvas</code>,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-surface</code>,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-border</code>,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-text</code>,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-accent</code>. Extend with semantic success, warning, and error hues only after the base five roles are stable.
                  </p>
                </div>

                <ul className="not-prose space-y-4">
                  {DARK_PALETTES.map((palette) => (
                    <DarkPaletteCard key={palette.title} palette={palette} />
                  ))}
                </ul>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    When implementing in CSS, map light and dark themes to the same token names so components never hard-code hex values. Test hover states by lightening surfaces ~4–8% and borders ~6–10%—not by opacity overlays alone, which can muddy contrast math. Export both themes from the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> when you need harmonized accent ramps.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">WCAG Contrast in Dark Mode</h2>
                  <p className="mb-4">
                    WCAG Success Criterion 1.4.3 applies regardless of theme: normal text needs 4.5:1 against its background at Level AA; large text needs 3:1. Dark mode failures cluster on secondary text, placeholder inputs, disabled buttons, and purple links that looked acceptable in Figma’s default dark preview but fail on #121212 in production.
                  </p>
                  <p className="mb-4">
                    Test every pair in your <strong className="text-gray-900 dark:text-white">dark mode color scheme</strong>: body on surface, body on canvas, accent label on accent fill, icon on surface, focus ring on surface. Run the same checks after brand updates—dark mode is not “set once” when marketing ships a new accent. Use our free{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink> with exact hex values from the tables above before merging token changes.
                  </p>
                  <p className="mb-6">
                    Non-text contrast (WCAG 2.1 SC 1.4.11) matters too: input borders, chart slices, and focus indicators need 3:1 against adjacent colors. A dark border (#27272A) on a dark surface (#171717) often fails—bump border luminance or add a focus glow with tested contrast.
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

                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white">Related:</strong>{' '}
                    <InlineTagLink href="/blog/accessible-dark-mode-color-palette">Accessible Dark Mode Color Palette</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/accessibility-color-contrast-checker">Accessibility Contrast Checker Guide</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/navy-blue-color-palette">Navy Blue Color Palette</InlineTagLink>
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Material-style dark (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Dark mode" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
