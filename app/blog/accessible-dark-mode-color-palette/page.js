import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import BlogToolsCTAInline from '../components/BlogToolsCTAInline';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/accessible-dark-mode-color-palette',
  title: 'How to Build an Accessible Dark Mode Color Palette (With Hex Examples) | Theme & Color',
  description:
    'Build a WCAG-friendly dark mode color palette: surfaces, text, borders, and accents with hex examples. Test contrast and generate harmonies with free tools.',
  keywords: ['dark mode palette', 'WCAG', 'accessible UI', 'hex examples', 'Theme & Color'],
});

const SIDEBAR_PALETTE = [
  { hexCode: '#0a0a0a', colorName: 'Canvas', rgbCode: 'rgb(10, 10, 10)' },
  { hexCode: '#171717', colorName: 'Surface', rgbCode: 'rgb(23, 23, 23)' },
  { hexCode: '#27272a', colorName: 'Elevated', rgbCode: 'rgb(39, 39, 42)' },
  { hexCode: '#e4e4e7', colorName: 'Text', rgbCode: 'rgb(228, 228, 231)' },
  { hexCode: '#a1a1aa', colorName: 'Muted', rgbCode: 'rgb(161, 161, 170)' },
  { hexCode: '#818cf8', colorName: 'Accent', rgbCode: 'rgb(129, 140, 248)' },
  { hexCode: '#34d399', colorName: 'Success', rgbCode: 'rgb(52, 211, 153)' },
  { hexCode: '#f87171', colorName: 'Error', rgbCode: 'rgb(248, 113, 113)' },
  { hexCode: '#fbbf24', colorName: 'Warning', rgbCode: 'rgb(251, 191, 36)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does WCAG apply to dark mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WCAG contrast requirements apply to text and UI on dark backgrounds the same as on light backgrounds. Aim for at least 4.5:1 for normal text and 3:1 for large text (WCAG AA).',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors should a dark mode palette include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Define a canvas (page background), raised surfaces (cards, panels), borders or dividers, primary and secondary text, interactive colors (links, buttons), and semantic colors if needed. Keep the set small and test every pair with a contrast checker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should dark mode use pure black (#000000)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not required. Many products use near-black (#0a0a0a–#121212) to reduce eye strain and to separate layers. What matters is contrast between text, controls, and their backgrounds—not the exact black value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I test dark mode contrast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use an accessibility contrast checker with your foreground and background hex values for each theme. Test body text, headings, links, buttons, placeholders, and focus states on real surfaces.',
      },
    },
  ],
};

export default function AccessibleDarkModeColorPalettePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              How to Build an Accessible Dark Mode Color Palette (With Hex Examples)
            </h1>
            <div className="flex items-center gap-4 text-purple-100 text-sm">
              <time dateTime="2026-04-01">April 1, 2026</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div
                  className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mt-8 prose-headings:mb-4
                  prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                  prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                  prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300
                  prose-li:mb-2 prose-li:text-base"
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Dark mode is everywhere in apps and websites, but a dark background alone does not make an interface accessible. If text, links, and buttons sit on colors with too little contrast, users with low vision or glare struggle—and you risk failing WCAG audits. This guide explains how to build an{' '}
                    <strong>accessible dark mode color palette</strong> using clear roles (canvas, surface, text, accent), with hex swatches <strong>next to each idea</strong> as you read—not only at the end—and how to verify everything with a{' '}
                    <Link href="/tools/contrast-checker">contrast checker</Link> and{' '}
                    <Link href="/tools/palette-generator">palette generator</Link>.
                  </p>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Starter stack you can copy into the contrast checker:
                  </p>
                  <div className="flex gap-3 mb-8 flex-wrap">
                    <ColorSwatch color="#0a0a0a" name="Canvas" hexCode="#0a0a0a" />
                    <ColorSwatch color="#171717" name="Surface" hexCode="#171717" />
                    <ColorSwatch color="#3f3f46" name="Border" hexCode="#3f3f46" />
                    <ColorSwatch color="#e4e4e7" name="Text" hexCode="#e4e4e7" />
                    <ColorSwatch color="#818cf8" name="Accent" hexCode="#818cf8" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Why dark mode still needs contrast discipline
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    WCAG applies to <strong>foreground vs background</strong>, not to “light theme” vs “dark theme.” On dark UIs, designers often pick mid-gray body text or muted purple links that look fine on a calibrated monitor but fall below 4.5:1 for normal text. Muted borders and placeholder text are other common failures.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Your goal is simple: every piece of readable content and every primary control must meet at least <strong>WCAG AA</strong> (4.5:1 for normal text, 3:1 for large text and some UI components). Use an{' '}
                    <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink> on real pairs—e.g. body text on surface, label on canvas, button label on button fill—not on abstract “brand colors” alone.
                  </p>
                  <p className="mb-4 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    On a typical dark <strong>surface</strong>, mid-gray text often fails for body copy; lighter neutrals usually pass—compare in your checker:
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap">
                    <ColorSwatch color="#171717" name="Surface" hexCode="#171717" />
                    <ColorSwatch color="#6b7280" name="Risky body (test)" hexCode="#6b7280" />
                    <ColorSwatch color="#e4e4e7" name="Safer body text" hexCode="#e4e4e7" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Remember that <strong>user settings matter</strong>: system “increase contrast” modes, color filters, and outdoor glare all make marginal ratios feel worse. Building in a little headroom above the minimum—especially for secondary text and disabled states—reduces support tickets and makes the product feel more polished without sacrificing the dark aesthetic.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Common dark mode mistakes (and how to avoid them)
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Teams often copy light-theme brand colors into dark layouts without retesting. A vibrant blue that passed on white may fail as small link text on charcoal. Another pitfall is <strong>overusing desaturation</strong>: grayed-out body copy looks sophisticated until it drops under 4.5:1. Decorative gradients behind text can also hide failing contrast if you only sample a single pixel.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Treat <strong>disabled controls</strong> carefully: WCAG still expects perceivable boundaries and, where possible, information not conveyed by color alone. If you must lower contrast for disabled buttons, pair it with clearer labels or layout so users are not stuck guessing. Finally, do not assume “inverted” light theme hex values will work; dark UI layering (canvas vs surface) changes every relationship, so test the dark theme as its own system.
                  </p>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Typical “copy from light mode” failures—always re-check on your real dark surface:
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#0f172a" name="Dark surface" hexCode="#0f172a" />
                    <ColorSwatch color="#3b82f6" name="Light-theme blue link" hexCode="#3b82f6" />
                    <ColorSwatch color="#93c5fd" name="Pastel link (risky)" hexCode="#93c5fd" />
                    <ColorSwatch color="#a78bfa" name="Soft purple link" hexCode="#a78bfa" />
                    <ColorSwatch color="#e2e8f0" name="Safer light link" hexCode="#e2e8f0" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Structure your palette by role
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Treat dark mode like a small design system. Typical roles:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Canvas</strong> — full page background (often the darkest layer).</li>
                    <li><strong>Surface</strong> — cards, modals, inputs (slightly lighter than canvas for depth).</li>
                    <li><strong>Border / divider</strong> — subtle separation without harsh lines.</li>
                    <li><strong>Text primary & secondary</strong> — body and supporting copy.</li>
                    <li><strong>Accent</strong> — links, primary buttons, focus rings.</li>
                  </ul>
                  <p className="mb-4 leading-relaxed">
                    Limit yourself to roughly <strong>five to seven</strong> core UI colors plus semantic colors (success, error) if you need them. More colors mean more combinations to test. A{' '}
                    <InlineTagLink href="/tools/palette-generator">color palette generator</InlineTagLink> helps you extend a single accent into harmonious variants for hover and pressed states—then you still verify each state in the contrast checker.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    <strong>Neutral starter (dashboards & marketing):</strong> near-black canvas, lifted surfaces, light gray text, and an indigo accent for actions—mapped to the roles above:
                  </p>
                  <ul className="mb-4">
                    <li><strong>#0a0a0a</strong> — canvas</li>
                    <li><strong>#171717</strong> — surface</li>
                    <li><strong>#3f3f46</strong> — border</li>
                    <li><strong>#e4e4e7</strong> — primary text</li>
                    <li><strong>#a1a1aa</strong> — secondary text</li>
                    <li><strong>#818cf8</strong> — accent / links</li>
                  </ul>
                  <div className="flex gap-4 mb-4 flex-wrap">
                    <ColorSwatch color="#0a0a0a" name="Canvas" hexCode="#0a0a0a" />
                    <ColorSwatch color="#171717" name="Surface" hexCode="#171717" />
                    <ColorSwatch color="#3f3f46" name="Border" hexCode="#3f3f46" />
                    <ColorSwatch color="#e4e4e7" name="Text" hexCode="#e4e4e7" />
                    <ColorSwatch color="#a1a1aa" name="Muted" hexCode="#a1a1aa" />
                    <ColorSwatch color="#818cf8" name="Accent" hexCode="#818cf8" />
                  </div>
                  <p className="mb-4 leading-relaxed">
                    Check <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">#e4e4e7</code> on <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">#171717</code>, and <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">#ffffff</code> or near-white on <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">#818cf8</code> for filled buttons. Adjust accent saturation if the button pair fails.
                  </p>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Layer depth—slightly lighter “elevated” surfaces for modals and dropdowns:
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#0a0a0a" name="Canvas" hexCode="#0a0a0a" />
                    <ColorSwatch color="#171717" name="Card" hexCode="#171717" />
                    <ColorSwatch color="#27272a" name="Popover" hexCode="#27272a" />
                    <ColorSwatch color="#3f3f46" name="Hairline" hexCode="#3f3f46" />
                  </div>
                  <BlogToolsCTAInline />

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Cool blue-gray (product / dev tools)
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Slightly blue-tinted neutrals read “technical” and work well for SaaS and developer products.
                  </p>
                  <ul className="mb-4">
                    <li><strong>#020617</strong> — canvas</li>
                    <li><strong>#0f172a</strong> — surface</li>
                    <li><strong>#334155</strong> — border</li>
                    <li><strong>#f1f5f9</strong> — primary text</li>
                    <li><strong>#94a3b8</strong> — secondary text</li>
                    <li><strong>#38bdf8</strong> — accent</li>
                  </ul>
                  <div className="flex gap-4 mb-4 flex-wrap">
                    <ColorSwatch color="#020617" name="Canvas" hexCode="#020617" />
                    <ColorSwatch color="#0f172a" name="Surface" hexCode="#0f172a" />
                    <ColorSwatch color="#334155" name="Border" hexCode="#334155" />
                    <ColorSwatch color="#f1f5f9" name="Text" hexCode="#f1f5f9" />
                    <ColorSwatch color="#94a3b8" name="Muted" hexCode="#94a3b8" />
                    <ColorSwatch color="#38bdf8" name="Accent" hexCode="#38bdf8" />
                  </div>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Interactive and semantic accents on the same family—test each on <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">#0f172a</code> or your surface:
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#7dd3fc" name="Hover accent" hexCode="#7dd3fc" />
                    <ColorSwatch color="#0284c7" name="Pressed accent" hexCode="#0284c7" />
                    <ColorSwatch color="#4ade80" name="Success" hexCode="#4ade80" />
                    <ColorSwatch color="#fb7185" name="Error" hexCode="#fb7185" />
                    <ColorSwatch color="#fbbf24" name="Warning" hexCode="#fbbf24" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Sky accents on very dark blue can fail for small link text; use the contrast checker and, if needed, a slightly lighter accent or bolder link weight. Secondary text at <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">#94a3b8</code> is often acceptable for non-body copy—confirm on your exact surface hex.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Warm dark (reading & lifestyle)
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Warm near-blacks feel less clinical. Use a restrained warm accent so the UI does not compete with imagery.
                  </p>
                  <ul className="mb-4">
                    <li><strong>#0c0a09</strong> — canvas</li>
                    <li><strong>#1c1917</strong> — surface</li>
                    <li><strong>#44403c</strong> — border</li>
                    <li><strong>#fafaf9</strong> — primary text</li>
                    <li><strong>#a8a29e</strong> — secondary text</li>
                    <li><strong>#fbbf24</strong> — accent</li>
                  </ul>
                  <div className="flex gap-4 mb-4 flex-wrap">
                    <ColorSwatch color="#0c0a09" name="Canvas" hexCode="#0c0a09" />
                    <ColorSwatch color="#1c1917" name="Surface" hexCode="#1c1917" />
                    <ColorSwatch color="#44403c" name="Border" hexCode="#44403c" />
                    <ColorSwatch color="#fafaf9" name="Text" hexCode="#fafaf9" />
                    <ColorSwatch color="#a8a29e" name="Muted" hexCode="#a8a29e" />
                    <ColorSwatch color="#fbbf24" name="Accent" hexCode="#fbbf24" />
                  </div>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Warm-tinted success and calm secondary accents:
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#86efac" name="Success soft" hexCode="#86efac" />
                    <ColorSwatch color="#4ade80" name="Success strong" hexCode="#4ade80" />
                    <ColorSwatch color="#fdba74" name="Amber alt CTA" hexCode="#fdba74" />
                    <ColorSwatch color="#57534e" name="Input stroke" hexCode="#57534e" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Yellow and amber accents frequently fail on dark backgrounds for small text. Prefer the accent for buttons with dark labels, or use a softer amber for large headings only—always confirm in your{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Aligning dark mode with your light theme
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Users switch themes frequently; <strong>brand recognition</strong> should stay consistent even when luminance flips. Keep the same accent hue family where contrast allows, or define a slightly lighter or more saturated accent specifically for dark surfaces. Neutrals can shift from warm paper in light mode to warm stone in dark mode—as in the warm dark palette above—so the brand still feels cohesive.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Document tokens (or a simple table) with names like <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">color.text.primary</code> mapped to different hex values per theme. That way engineers and designers do not hard-code one-off grays. When you add a new component, you assign semantic tokens instead of guessing hex codes, and you only run contrast checks on the token pairs you actually ship.
                  </p>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Light vs dark token pairs (same role, different hex)—verify both columns:
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#ffffff" name="Light page" hexCode="#ffffff" />
                    <ColorSwatch color="#1c1917" name="Light body" hexCode="#1c1917" />
                    <ColorSwatch color="#0c0a09" name="Dark canvas" hexCode="#0c0a09" />
                    <ColorSwatch color="#fafaf9" name="Dark body" hexCode="#fafaf9" />
                    <ColorSwatch color="#2563eb" name="Light link" hexCode="#2563eb" />
                    <ColorSwatch color="#93c5fd" name="Dark link (test)" hexCode="#93c5fd" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Buttons, links, and focus on dark backgrounds
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Treat filled buttons, outline buttons, and text links as separate pairs. Ghost buttons need visible borders. Focus indicators must be distinguishable from both canvas and surface—often a light ring on dark or a double ring. If you use transparency, flatten the effective color in your design tool and test that value, because opacity changes contrast.
                  </p>
                  <p className="mb-4 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Example pairs to verify: accent fill with a light label, plus a bright ring that reads on both canvas and surface.
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap">
                    <ColorSwatch color="#818cf8" name="Accent fill" hexCode="#818cf8" />
                    <ColorSwatch color="#ffffff" name="Label on accent" hexCode="#ffffff" />
                    <ColorSwatch color="#22d3ee" name="Focus ring" hexCode="#22d3ee" />
                  </div>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Outline and ghost buttons on charcoal—stroke and label both need to read:
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#0a0a0a" name="Canvas" hexCode="#0a0a0a" />
                    <ColorSwatch color="#a1a1aa" name="Outline stroke" hexCode="#a1a1aa" />
                    <ColorSwatch color="#f4f4f5" name="Outline label" hexCode="#f4f4f5" />
                    <ColorSwatch color="#52525b" name="Ghost border" hexCode="#52525b" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Next steps
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    Pick one of the examples above or start from your brand accent in the{' '}
                    <Link href="/tools/palette-generator">palette generator</Link>, then define canvas and surface neutrals. Document hex codes for light and dark themes. Run every text, link, and button combination through the{' '}
                    <Link href="/tools/contrast-checker">contrast checker</Link> before release. For more on ratios and WCAG labels, see our{' '}
                    <Link href="/blog/how-to-check-color-contrast-accessibility">WCAG contrast guide</Link>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        Does WCAG apply to dark mode?
                      </h3>
                      <p className="leading-relaxed">
                        Yes. Contrast requirements apply to text and UI on dark backgrounds the same as on light ones. Aim for at least 4.5:1 for normal text and 3:1 for large text (WCAG AA).
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        What colors should a dark mode palette include?
                      </h3>
                      <p className="leading-relaxed">
                        Canvas, surfaces, borders, primary and secondary text, and accent colors for links and buttons—plus semantic colors if needed. Keep the set small and test every pair.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        Should dark mode use pure black?
                      </h3>
                      <p className="leading-relaxed">
                        Not required. Many products use near-black to reduce strain and separate layers. Contrast between content and surfaces matters more than using #000000.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        How do I test dark mode contrast?
                      </h3>
                      <p className="leading-relaxed">
                        Use a contrast checker with your exact hex values for each theme, including hover and focus states, on real background layers.
                      </p>
                    </div>
                  </div>
                </div>

                <BlogToolsCTA />

                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-white">Share this article</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </button>
                  </div>
                </div>

                <div className="mt-8 bg-black dark:bg-gray-800 rounded-lg p-6 border border-dashed border-gray-300 dark:border-gray-700 text-center">
                  <p className="text-white dark:text-gray-400 text-sm">Ad Space (728x90)</p>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20 space-y-6">
                  <ColorPaletteClient
                    colors={SIDEBAR_PALETTE}
                    designTitle="Dark mode starter"
                    className="lg:mb-0"
                  />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
