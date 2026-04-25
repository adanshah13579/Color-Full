import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import BlogToolsCTAInline from '../components/BlogToolsCTAInline';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/best-neutral-colors-pair-with-brand',
  title: 'Best Neutral Colors to Pair With Your Brand Color | Theme & Color',
  description:
    'Neutral colors for branding: grays, off-whites, and warm vs cool neutrals that pair with blue, green, and any brand color. Plus contrast-safe text and background combos.',
  keywords: ['neutral colors', 'brand pairing', 'gray palette', 'contrast', 'Theme & Color'],
});

const SIDEBAR_PALETTE = [
  { hexCode: '#374151', colorName: 'Slate gray', rgbCode: 'rgb(55, 65, 81)' },
  { hexCode: '#fafaf9', colorName: 'Warm white', rgbCode: 'rgb(250, 250, 249)' },
  { hexCode: '#1e3a8a', colorName: 'Navy', rgbCode: 'rgb(30, 58, 138)' },
  { hexCode: '#d6d3d1', colorName: 'Stone', rgbCode: 'rgb(214, 211, 209)' },
  { hexCode: '#059669', colorName: 'Emerald', rgbCode: 'rgb(5, 150, 105)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What neutral colors go with blue brand colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cool grays (slate, blue-gray), pure white, and soft off-whites work well with blue. For text on white, use dark gray (#374151 or darker) for body copy. Use a contrast checker to confirm ratios meet WCAG AA.',
      },
    },
    {
      '@type': 'Question',
      name: 'What neutrals pair with green branding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Warm off-whites (cream, stone), warm grays, and cool grays all pair with green. Avoid yellow-toned neutrals if your green is cool. Test text-on-background pairs with a contrast checker before finalizing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I choose warm vs cool neutrals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Match the temperature of your main brand color: warm brands (orange, gold, terracotta) suit cream, tan, warm gray; cool brands (blue, teal, purple) suit white, cool gray, slate. Use a palette generator to see your brand color next to neutrals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which gray is safe for body text on white?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For WCAG AA (4.5:1), use gray-600 or darker (e.g. #4b5563, #374151) for normal text on white. Lighter grays (#6b7280, #9ca3af) often fail. Always verify with a contrast checker.',
      },
    },
  ],
};

export default function BestNeutralColorsPairWithBrandPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
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
              Best Neutral Colors to Pair With Your Brand Color
            </h1>
            <div className="flex items-center gap-4 text-purple-100 text-sm">
              <time dateTime="2025-03-15">March 15, 2025</time>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

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
                  prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-li:mb-2 prose-li:text-base">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Your brand color needs neutrals for text, backgrounds, and balance. The right grays and off-whites make your primary color pop and keep layouts readable. This guide covers the best neutral colors for branding—warm vs cool, contrast-safe grays, and pairings for blue and green—plus how to check them with a <Link href="/tools/contrast-checker">contrast checker</Link> and build full palettes in a <Link href="/tools/palette-generator">palette generator</Link>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Why Neutrals Matter in Brand Palettes
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    Neutrals give your brand color space to lead. They handle body text, backgrounds, borders, and secondary UI so the primary hue stays dominant. Without defined neutrals, designs look busy or inconsistent. Choose a small set (e.g. one dark for text, one or two lights for backgrounds) and reuse them everywhere so your palette stays cohesive.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Warm vs Cool Neutrals
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    <strong>Warm neutrals</strong> have a slight yellow, tan, or red undertone—cream, stone, warm gray, beige. They suit warm brand colors (orange, gold, terracotta, coral). <strong>Cool neutrals</strong> lean blue or gray—pure white, cool gray, slate. They pair better with cool brand colors (blue, teal, purple, mint). Mixing warm and cool can work but often feels off; match the temperature of your main brand color when possible.
                  </p>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Warm neutrals (examples):</p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#fafaf9" name="Warm white" hexCode="#fafaf9" />
                    <ColorSwatch color="#f5f5f4" name="Stone" hexCode="#f5f5f4" />
                    <ColorSwatch color="#d6d3d1" name="Stone gray" hexCode="#d6d3d1" />
                    <ColorSwatch color="#a8a29e" name="Warm gray" hexCode="#a8a29e" />
                    <ColorSwatch color="#78716c" name="Stone dark" hexCode="#78716c" />
                  </div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Cool neutrals (examples):</p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#ffffff" name="White" hexCode="#ffffff" />
                    <ColorSwatch color="#f8fafc" name="Slate 50" hexCode="#f8fafc" />
                    <ColorSwatch color="#cbd5e1" name="Slate 300" hexCode="#cbd5e1" />
                    <ColorSwatch color="#64748b" name="Slate 500" hexCode="#64748b" />
                    <ColorSwatch color="#334155" name="Slate 700" hexCode="#334155" />
                  </div>
                  <BlogToolsCTAInline />

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Grays That Pass Contrast for Text
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    For body text on white or light backgrounds, you need enough contrast (WCAG AA: 4.5:1 for normal text). Light grays (#9ca3af, #6b7280) on white often fail. Use darker grays for text—e.g. #4b5563 (gray-600), #374151 (gray-700), or #1f2937 (gray-800). Reserve light gray for borders, placeholders, or captions only. Always verify with an <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink>.
                  </p>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Safe text-on-white (dark grays):</p>
                  <div className="flex gap-4 mb-4 flex-wrap">
                    <ColorSwatch color="#4b5563" name="Gray 600" hexCode="#4b5563" />
                    <ColorSwatch color="#374151" name="Gray 700" hexCode="#374151" />
                    <ColorSwatch color="#1f2937" name="Gray 800" hexCode="#1f2937" />
                    <ColorSwatch color="#111827" name="Gray 900" hexCode="#111827" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Pair these with white (#ffffff) or off-white (#fafafa, #fafaf9) for backgrounds. If you use a colored background, run the same text color against it in a <Link href="/tools/contrast-checker">contrast checker</Link>—ratios change with every background.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Off-Whites and Background Neutrals
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Pure white (#ffffff) is a safe default. Off-whites add subtle warmth or reduce glare: #fafaf9 (warm), #fafafa (neutral), #f8fafc (cool). Use one as your main page or card background so the layout feels consistent. Avoid going too yellow or pink unless it matches your brand; otherwise text contrast can feel inconsistent across screens.
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#ffffff" name="White" hexCode="#ffffff" />
                    <ColorSwatch color="#fafafa" name="Neutral 50" hexCode="#fafafa" />
                    <ColorSwatch color="#fafaf9" name="Warm white" hexCode="#fafaf9" />
                    <ColorSwatch color="#f8fafc" name="Slate 50" hexCode="#f8fafc" />
                    <ColorSwatch color="#fefce8" name="Cream" hexCode="#fefce8" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Neutrals to Pair With Blue Brand Colors
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Blue is cool, so pair it with cool neutrals: white, cool gray, slate. Navy or deep blue works with white for backgrounds and dark gray (#374151 or #1f2937) for text. Add a light gray for borders or secondary text. Use a <Link href="/tools/palette-generator">palette generator</Link> to see your blue next to these neutrals, then check text pairs in a <Link href="/tools/contrast-checker">contrast checker</Link>.
                  </p>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Example: blue + cool neutrals</p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#1e3a8a" name="Navy" hexCode="#1e3a8a" />
                    <ColorSwatch color="#3b82f6" name="Blue" hexCode="#3b82f6" />
                    <ColorSwatch color="#ffffff" name="White" hexCode="#ffffff" />
                    <ColorSwatch color="#f1f5f9" name="Slate 100" hexCode="#f1f5f9" />
                    <ColorSwatch color="#374151" name="Gray 700" hexCode="#374151" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Neutrals to Pair With Green Brand Colors
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Green can be warm (olive, lime) or cool (emerald, teal). Cool greens work with white and slate; warm greens pair with cream, stone, or warm gray. Avoid strong yellow neutrals with cool green—they can clash. For body text, stick to dark gray or near-black on light backgrounds and confirm with a contrast checker.
                  </p>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Example: green + neutrals</p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#059669" name="Emerald" hexCode="#059669" />
                    <ColorSwatch color="#10b981" name="Green" hexCode="#10b981" />
                    <ColorSwatch color="#fafaf9" name="Warm white" hexCode="#fafaf9" />
                    <ColorSwatch color="#e7e5e4" name="Stone 200" hexCode="#e7e5e4" />
                    <ColorSwatch color="#374151" name="Gray 700" hexCode="#374151" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Next Steps
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    Pick one or two background neutrals and one dark neutral for text. Add your brand color and optionally an accent. Build the set in a <Link href="/tools/palette-generator">palette generator</Link> to see harmonies, then run every text-on-background pair through a <Link href="/tools/contrast-checker">contrast checker</Link>. Document the hex codes in your style guide so your whole team uses the same neutrals.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        What neutral colors go with blue brand colors?
                      </h3>
                      <p className="leading-relaxed">
                        Cool grays (slate, blue-gray), pure white, and soft off-whites work well with blue. For text on white, use dark gray (#374151 or darker) for body copy. Use a contrast checker to confirm ratios meet WCAG AA.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        What neutrals pair with green branding?
                      </h3>
                      <p className="leading-relaxed">
                        Warm off-whites (cream, stone), warm grays, and cool grays all pair with green. Avoid yellow-toned neutrals if your green is cool. Test text-on-background pairs with a contrast checker before finalizing.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        How do I choose warm vs cool neutrals?
                      </h3>
                      <p className="leading-relaxed">
                        Match the temperature of your main brand color: warm brands (orange, gold, terracotta) suit cream, tan, warm gray; cool brands (blue, teal, purple) suit white, cool gray, slate. Use a palette generator to see your brand color next to neutrals.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        Which gray is safe for body text on white?
                      </h3>
                      <p className="leading-relaxed">
                        For WCAG AA (4.5:1), use gray-600 or darker (e.g. #4b5563, #374151) for normal text on white. Lighter grays (#6b7280, #9ca3af) often fail. Always verify with a contrast checker.
                      </p>
                    </div>
                  </div>
                </div>

                <BlogToolsCTA />

                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-white">Share this article</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
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
                    designTitle="Neutral + brand examples"
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
