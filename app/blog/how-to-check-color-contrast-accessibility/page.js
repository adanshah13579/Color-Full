import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import BlogToolsCTA from '../components/BlogToolsCTA';
import BlogToolsCTAInline from '../components/BlogToolsCTAInline';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/how-to-check-color-contrast-accessibility',
  title: 'How to Check Color Contrast for Accessibility (WCAG Guide) | Theme & Color',
  description:
    'Learn how to check color contrast for accessibility. WCAG AA and AAA ratios, contrast checker tools, and practical tips for readable, compliant text and UI.',
  keywords: ['color contrast', 'WCAG', 'accessibility', 'AA AAA', 'Theme & Color'],
});

const SIDEBAR_PALETTE = [
  { hexCode: '#1a1a2e', colorName: 'Dark text', rgbCode: 'rgb(26, 26, 46)' },
  { hexCode: '#ffffff', colorName: 'White bg', rgbCode: 'rgb(255, 255, 255)' },
  { hexCode: '#4f46e5', colorName: 'Primary', rgbCode: 'rgb(79, 70, 229)' },
  { hexCode: '#6b7280', colorName: 'Gray (fail)', rgbCode: 'rgb(107, 114, 128)' },
  { hexCode: '#374151', colorName: 'Gray (pass)', rgbCode: 'rgb(55, 65, 81)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum color contrast ratio for accessibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WCAG AA requires at least 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold). WCAG AAA requires 7:1 for normal text and 4.5:1 for large text. Use a contrast checker to verify each text-on-background pair.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I check if my colors meet WCAG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter your foreground (text) and background colors into an accessibility contrast checker. The tool calculates the ratio and shows pass/fail for WCAG AA and AAA. Test every text-and-background combination you use on your site or app.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does color contrast apply to buttons and links?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Button text and link text must meet the same contrast requirements as body text (4.5:1 for normal, 3:1 for large). Focus indicators and borders that convey meaning should also be distinguishable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use gray text on white for body copy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if the combination passes contrast. Light gray (#999, #aaa) on white often fails WCAG AA. Use a contrast checker: darker grays (e.g. #555–#666 on white) typically pass. Document your chosen pairs in your design system.',
      },
    },
  ],
};

export default function HowToCheckColorContrastAccessibilityPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Header Section */}
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
              How to Check Color Contrast for Accessibility (WCAG Guide)
            </h1>
            <div className="flex items-center gap-4 text-purple-100 text-sm">
              <time dateTime="2025-03-15">March 15, 2025</time>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mt-8 prose-headings:mb-4
                  prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                  prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                  prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300
                  prose-li:mb-2 prose-li:text-base">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    If your site or app uses custom text and background colors, you need to check color contrast for accessibility. Low contrast makes content hard or impossible to read for people with low vision, dyslexia, or in bright light. This guide covers WCAG ratios, which pairs to test, and how to use an <Link href="/tools/contrast-checker">accessibility contrast checker</Link> so your design stays readable and compliant.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Why Color Contrast Matters for Accessibility
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    Color contrast is the difference in luminance between text (or UI elements) and their background. When it’s too low, users strain to read or miss content. WCAG (Web Content Accessibility Guidelines) sets minimum ratios so most people can read without magnification or assistive tech. In many jurisdictions, meeting WCAG is a legal or policy requirement; even when it isn’t, good contrast improves readability for everyone.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    WCAG Contrast Ratios: AA vs AAA
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    <strong>Level AA</strong> (most common): normal text needs at least <strong>4.5:1</strong> contrast; large text (18pt+ or 14pt+ bold) needs <strong>3:1</strong>. <strong>Level AAA</strong> is stricter: <strong>7:1</strong> for normal text, <strong>4.5:1</strong> for large. Ratios come from relative luminance (RGB-based). You don’t need to calculate—an <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink> does it and shows pass/fail for AA and AAA.
                  </p>
                  <BlogToolsCTAInline />

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Which Text–Background Pairs to Check
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    Check every place text sits on a background: body copy, headings, links, button labels, form labels, placeholders, captions. Test hover and focus states if they change color. With multiple backgrounds (e.g. cards), test text on each. Decorative elements don’t need to meet text contrast; text inside logos or graphics does. Document passing pairs so your team reuses them in code and design.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Example: Pass vs Fail
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Light gray on white often fails: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">#9ca3af</code> on white is ~2.9:1 (below 4.5:1). Darker gray passes: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">#4b5563</code> on white is ~5.7:1 (AA pass).
                  </p>
                  <div className="flex gap-6 mb-6 flex-wrap">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Fail (low contrast)</p>
                      <div className="w-32 h-14 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700" style={{ backgroundColor: '#ffffff', color: '#9ca3af' }}>
                        <span className="text-sm font-medium">Body text</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">~2.9:1</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Pass (AA)</p>
                      <div className="w-32 h-14 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700" style={{ backgroundColor: '#ffffff', color: '#4b5563' }}>
                        <span className="text-sm font-medium">Body text</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">~5.7:1</p>
                    </div>
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Use a <Link href="/tools/contrast-checker">contrast checker</Link> with your hex codes to confirm. Building a palette? Create colors in a <Link href="/tools/palette-generator">palette generator</Link>, then run each text/background pair through the contrast checker before locking your design system.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    How to Use a Contrast Checker
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    Enter foreground (text) and background colors; most tools accept hex. The checker shows the ratio and pass/fail for WCAG AA and AAA. Swap foreground and background for inverted schemes (e.g. light text on dark). Test the same combinations users see—including overlays and light/dark themes—and run every new pair through an <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink> before you ship.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Tips for Keeping Contrast Compliant
                  </h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Define a small set of approved text/background pairs in your style guide and stick to them.</li>
                    <li>When adding a new brand or UI color, run it against your neutrals (e.g. white, off-white, dark gray) in a contrast checker before using it for text.</li>
                    <li>Don’t rely on color alone for meaning (e.g. “red = error”). Use text, icons, or pattern as well so colorblind users aren’t excluded.</li>
                    <li>If a design fails, darken the text or lighten the background (or vice versa) until the ratio meets 4.5:1 for normal text.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Next Steps
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    List every text–background pair in your product and check each with a <Link href="/tools/contrast-checker">contrast checker</Link>. Fix failures. For new palettes, use a <Link href="/tools/palette-generator">color palette generator</Link>, then validate contrast for body text, headings, and buttons. Document passing pairs so future designs stay accessible by default.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        What is the minimum color contrast ratio for accessibility?
                      </h3>
                      <p className="leading-relaxed">
                        WCAG AA requires at least 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold). WCAG AAA requires 7:1 for normal text and 4.5:1 for large text. Use a contrast checker to verify each text-on-background pair.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        How do I check if my colors meet WCAG?
                      </h3>
                      <p className="leading-relaxed">
                        Enter your foreground (text) and background colors into an accessibility contrast checker. The tool calculates the ratio and shows pass/fail for WCAG AA and AAA. Test every text-and-background combination you use on your site or app.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        Does color contrast apply to buttons and links?
                      </h3>
                      <p className="leading-relaxed">
                        Yes. Button text and link text must meet the same contrast requirements as body text (4.5:1 for normal, 3:1 for large). Focus indicators and borders that convey meaning should also be distinguishable.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        Can I use gray text on white for body copy?
                      </h3>
                      <p className="leading-relaxed">
                        Only if the combination passes contrast. Light gray (#999, #aaa) on white often fails WCAG AA. Use a contrast checker: darker grays (e.g. #555–#666 on white) typically pass. Document your chosen pairs in your design system.
                      </p>
                    </div>
                  </div>
                </div>

                <BlogToolsCTA />

                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-white">Share this article</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-white rounded-lg text-sm font-medium transition-colors">
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
                    designTitle="Contrast-friendly examples"
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
