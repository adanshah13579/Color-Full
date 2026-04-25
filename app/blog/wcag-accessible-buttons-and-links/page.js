import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import BlogToolsCTAInline from '../components/BlogToolsCTAInline';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/wcag-accessible-buttons-and-links',
  title: 'WCAG Contrast for Buttons and Links: Hex Examples for Web UI | Theme & Color',
  description:
    'Pick accessible link and button colors for WCAG AA: contrast ratios, filled and outline CTAs, dark sections, focus rings. Hex swatches inline with each tip—test pairs in our free contrast checker.',
  keywords: ['WCAG buttons', 'link contrast', 'CTA colors', 'focus ring', 'Theme & Color'],
});

const SIDEBAR_PALETTE = [
  { hexCode: '#ffffff', colorName: 'Page', rgbCode: 'rgb(255, 255, 255)' },
  { hexCode: '#fafafa', colorName: 'Off-white', rgbCode: 'rgb(250, 250, 250)' },
  { hexCode: '#0f172a', colorName: 'Body text', rgbCode: 'rgb(15, 23, 42)' },
  { hexCode: '#1d4ed8', colorName: 'Primary fill', rgbCode: 'rgb(29, 78, 216)' },
  { hexCode: '#059669', colorName: 'Success CTA', rgbCode: 'rgb(5, 150, 105)' },
  { hexCode: '#7c3aed', colorName: 'Accent alt', rgbCode: 'rgb(124, 58, 237)' },
  { hexCode: '#f8fafc', colorName: 'Button on dark', rgbCode: 'rgb(248, 250, 252)' },
  { hexCode: '#1e293b', colorName: 'Dark band', rgbCode: 'rgb(30, 41, 59)' },
  { hexCode: '#22d3ee', colorName: 'Focus ring', rgbCode: 'rgb(34, 211, 238)' },
  { hexCode: '#94a3b8', colorName: 'Disabled text', rgbCode: 'rgb(148, 163, 184)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What contrast ratio do links need for WCAG AA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For normal-sized link text (under 18pt or 14pt bold), aim for at least 4.5:1 against the adjacent background. Large link text needs at least 3:1. Always verify with a contrast checker using your exact hex values.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do buttons use the same contrast rules as body text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Button labels are text, so the label color versus the button background should meet text contrast requirements for the font size and weight you use. For graphical UI components, WCAG 2.1 also references a 3:1 contrast for boundaries and states in many cases—test labels and borders separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a light blue for links on white?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many light blues fail 4.5:1 on white for small text. Prefer a darker blue or add weight/size so the link qualifies as large text, or use an underline plus a darker blue. Confirm every pair in a contrast checker.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I test besides default states?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test hover, active, disabled, and focus-visible states. For focus rings, ensure the ring contrasts with everything it sits on. If you use opacity for hover, sample the flattened color before testing.',
      },
    },
  ],
};

export default function WcagAccessibleButtonsAndLinksPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              WCAG Contrast for Buttons and Links: Hex Examples for Web UI
            </h1>
            <div className="flex items-center gap-4 text-blue-100 text-sm">
              <time dateTime="2026-04-02">April 2, 2026</time>
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
                    Links and buttons are how people complete tasks on the web. If the label color is too close to the background, WCAG audits fail and real users miss CTAs. This article walks through{' '}
                    <strong>accessible button and link colors</strong> with hex swatches placed next to each idea—so you see examples as you read, not after a long theory section. Use our{' '}
                    <Link href="/tools/contrast-checker">contrast checker</Link> to verify every pair, and our{' '}
                    <Link href="/tools/palette-generator">palette generator</Link> when you need related hover and active shades.
                  </p>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Quick kit (copy any hex into the contrast checker):
                  </p>
                  <div className="flex gap-3 mb-8 flex-wrap not-prose">
                    <ColorSwatch color="#ffffff" name="White page" hexCode="#ffffff" />
                    <ColorSwatch color="#fafafa" name="Warm off-white" hexCode="#fafafa" />
                    <ColorSwatch color="#f8fafc" name="Cool off-white" hexCode="#f8fafc" />
                    <ColorSwatch color="#0f172a" name="Body" hexCode="#0f172a" />
                    <ColorSwatch color="#1e40af" name="Link" hexCode="#1e40af" />
                    <ColorSwatch color="#1d4ed8" name="Primary btn" hexCode="#1d4ed8" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Start with the page background, then the control
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Contrast is always <strong>two colors at a time</strong>: link blue on the paragraph background, or white label text on the button fill. A palette that looks “on brand” in a style tile can still fail once it sits on a gray card or a tinted hero. Name your layers (page, card, button) and test the combination you actually ship.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Below is a typical <strong>white page</strong> with <strong>near-black body copy</strong>. That body color is a safe default for paragraphs; your link color must also clear 4.5:1 on the same white (for normal-sized link text).
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#ffffff" name="Page" hexCode="#ffffff" />
                    <ColorSwatch color="#0f172a" name="Body text" hexCode="#0f172a" />
                  </div>
                  <p className="mb-4 leading-relaxed">
                    If your marketing site uses an off-white shell, swap <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">#ffffff</code> for your real surface hex before signing off on link colors.
                  </p>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Common marketing shells—test links and buttons on the exact value you ship:
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap not-prose">
                    <ColorSwatch color="#fafafa" name="Warm shell" hexCode="#fafafa" />
                    <ColorSwatch color="#f8fafc" name="Cool shell" hexCode="#f8fafc" />
                    <ColorSwatch color="#f5f5f4" name="Stone shell" hexCode="#f5f5f4" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Link colors: why light blue often fails
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Pastel blues are popular for links but frequently fall under <strong>4.5:1</strong> on white at 14–16px. A darker blue usually fixes compliance without killing the “clickable” feel—especially if you keep an underline for default links.
                  </p>
                  <p className="mb-4 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Swatches: a <strong>risky</strong> light link blue vs a <strong>safer</strong> link blue—confirm in the checker for your exact font size and weight.
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#93c5fd" name="Risky link (test)" hexCode="#93c5fd" />
                    <ColorSwatch color="#1e40af" name="Safer link blue" hexCode="#1e40af" />
                  </div>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Other link styles—still compare against your page or card background:
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap not-prose">
                    <ColorSwatch color="#047857" name="Success / go link" hexCode="#047857" />
                    <ColorSwatch color="#6b21a8" name="Visited purple" hexCode="#6b21a8" />
                    <ColorSwatch color="#b45309" name="Warning tone link" hexCode="#b45309" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    If you must keep a lighter blue, use it only for <strong>large text</strong> (18pt+ regular or 14pt+ bold) where 3:1 applies, or darken one step for inline links. Our{' '}
                    <InlineTagLink href="/blog/how-to-check-color-contrast-accessibility">WCAG contrast guide</InlineTagLink> explains the AA thresholds in more detail.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Filled primary buttons on a light page
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    For a solid primary CTA, check <strong>label on fill</strong> first. White on a strong blue is a common pattern; tweak saturation until the ratio passes for your type size.
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#1d4ed8" name="Button fill" hexCode="#1d4ed8" />
                    <ColorSwatch color="#ffffff" name="Label" hexCode="#ffffff" />
                  </div>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Alternate brand primaries—same rule: label-on-fill must pass for your type size.
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#059669" name="Emerald fill" hexCode="#059669" />
                    <ColorSwatch color="#ffffff" name="Label on emerald" hexCode="#ffffff" />
                    <ColorSwatch color="#7c3aed" name="Violet fill" hexCode="#7c3aed" />
                    <ColorSwatch color="#ffffff" name="Label on violet" hexCode="#ffffff" />
                    <ColorSwatch color="#ea580c" name="Orange fill" hexCode="#ea580c" />
                    <ColorSwatch color="#ffffff" name="Label on orange" hexCode="#ffffff" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    When the same blue is used as a text link on white (no fill), it must pass as text on white—often a different shade than the one you use behind white button labels. Maintain two tokens if needed: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">link.default</code> and <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">button.primary.fill</code>.
                  </p>

                  <BlogToolsCTAInline />

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Outline and secondary buttons on gray surfaces
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Secondary actions often sit on <strong>subtle gray panels</strong>. The border, label, and panel each form pairs: label vs panel, border vs panel, and sometimes label vs page if the button is visually “open.”
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#f1f5f9" name="Card / panel" hexCode="#f1f5f9" />
                    <ColorSwatch color="#334155" name="Border" hexCode="#334155" />
                    <ColorSwatch color="#0f172a" name="Label" hexCode="#0f172a" />
                  </div>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Destructive and low-emphasis variants—check border vs panel and label vs panel:
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#fef2f2" name="Soft danger bg" hexCode="#fef2f2" />
                    <ColorSwatch color="#dc2626" name="Danger border" hexCode="#dc2626" />
                    <ColorSwatch color="#991b1b" name="Danger label" hexCode="#991b1b" />
                    <ColorSwatch color="#ffffff" name="Ghost surface" hexCode="#ffffff" />
                    <ColorSwatch color="#64748b" name="Ghost border" hexCode="#64748b" />
                    <ColorSwatch color="#475569" name="Ghost label" hexCode="#475569" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    If the border is too light, users with low vision lose the button shape—bump contrast on the stroke before you lighten the text. Ghost buttons on busy imagery need extra care; prefer a semi-opaque scrim or a solid chip behind the label.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    CTAs on tinted bands and footers
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Hero sections and footers often use <strong>mid-tone backgrounds</strong>. A white button can pass on a navy band; a cyan text link might not. Pick one primary action style and test it on the band hex, not only on white above the fold.
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#1e293b" name="Dark band" hexCode="#1e293b" />
                    <ColorSwatch color="#f8fafc" name="Solid button" hexCode="#f8fafc" />
                    <ColorSwatch color="#0f172a" name="Label on white btn" hexCode="#0f172a" />
                  </div>
                  <p className="mb-4 leading-relaxed">
                    Alternative: keep the band dark and use a <strong>high-chroma fill</strong> with a light label—again, verify label-on-fill and any secondary link on the same band.
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#0ea5e9" name="Accent fill" hexCode="#0ea5e9" />
                    <ColorSwatch color="#ffffff" name="Label on accent" hexCode="#ffffff" />
                  </div>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Text links sitting on the same navy band (no button fill)—light cyan often fails small sizes; compare:
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap not-prose">
                    <ColorSwatch color="#1e293b" name="Band (again)" hexCode="#1e293b" />
                    <ColorSwatch color="#38bdf8" name="Risky inline link" hexCode="#38bdf8" />
                    <ColorSwatch color="#e0f2fe" name="Safer link on dark" hexCode="#e0f2fe" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Hover, active, and focus-visible
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Hover states that only change hue slightly can drop below passing contrast. Darken the fill a step or lighten the text—then re-run the checker. For keyboard users, <strong>focus rings</strong> must stand out from both the component and whatever is behind it.
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#1e3a8a" name="Hover fill (darker)" hexCode="#1e3a8a" />
                    <ColorSwatch color="#172554" name="Active / pressed" hexCode="#172554" />
                    <ColorSwatch color="#22d3ee" name="Focus ring" hexCode="#22d3ee" />
                  </div>
                  <p className="mb-3 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Disabled buttons—label vs fill (or label vs panel for ghost) usually needs a deliberate gray, not just low opacity:
                  </p>
                  <div className="flex gap-4 mb-4 flex-wrap not-prose">
                    <ColorSwatch color="#e2e8f0" name="Disabled fill" hexCode="#e2e8f0" />
                    <ColorSwatch color="#94a3b8" name="Disabled label" hexCode="#94a3b8" />
                    <ColorSwatch color="#f1f5f9" name="Disabled on panel" hexCode="#f1f5f9" />
                    <ColorSwatch color="#cbd5e1" name="Muted label" hexCode="#cbd5e1" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    If you use <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">box-shadow</code> for focus, sample the ring color against the underlying page and button colors. Transparent hovers need flattened RGB values before testing.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Reference strip (save for audits)
                  </h2>
                  <p className="mb-4 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
                    Handy hex set to paste into our tools—mix and match only after each pair passes:
                  </p>
                  <div className="flex gap-3 mb-8 flex-wrap not-prose">
                    <ColorSwatch color="#ffffff" name="Page" hexCode="#ffffff" />
                    <ColorSwatch color="#f1f5f9" name="Panel" hexCode="#f1f5f9" />
                    <ColorSwatch color="#0f172a" name="Ink" hexCode="#0f172a" />
                    <ColorSwatch color="#1e40af" name="Link" hexCode="#1e40af" />
                    <ColorSwatch color="#1d4ed8" name="Primary" hexCode="#1d4ed8" />
                    <ColorSwatch color="#1e293b" name="Band" hexCode="#1e293b" />
                    <ColorSwatch color="#f8fafc" name="On-dark btn" hexCode="#f8fafc" />
                    <ColorSwatch color="#22d3ee" name="Focus" hexCode="#22d3ee" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Short workflow
                  </h2>
                  <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>List every background your links and buttons appear on.</li>
                    <li>For each control state, note foreground and background hex codes.</li>
                    <li>Run pairs through the <Link href="/tools/contrast-checker">contrast checker</Link>.</li>
                    <li>Adjust fills or type weight; use the <Link href="/tools/palette-generator">palette generator</Link> for harmonious alternates.</li>
                  </ol>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        What contrast ratio do links need for WCAG AA?
                      </h3>
                      <p className="leading-relaxed">
                        Normal link text typically needs 4.5:1 against its background; large link text needs 3:1. Verify with your exact hex values and font size.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        Do buttons use the same rules as body text?
                      </h3>
                      <p className="leading-relaxed">
                        Button labels are text, so label versus button background should meet the appropriate text contrast level. Borders and icons may need separate checks under UI component guidance.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        Can I use a light blue for links on white?
                      </h3>
                      <p className="leading-relaxed">
                        Often no, for small text—test first. Prefer a darker blue, larger weight, or both, and keep underlines where possible.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        What besides default states should I test?
                      </h3>
                      <p className="leading-relaxed">
                        Hover, active, disabled, and focus-visible. Flatten any transparent colors before measuring.
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
                    designTitle="Link & button kit"
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
