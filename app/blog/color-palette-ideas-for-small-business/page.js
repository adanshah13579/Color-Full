import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import BlogToolsCTAInline from '../components/BlogToolsCTAInline';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/color-palette-ideas-for-small-business',
  title: 'Color Palette Ideas for Small Business (With Examples) | Theme & Color',
  description:
    'Practical color palette ideas for small business: how many colors to use, industry examples, and where to apply them on your website and branding.',
  keywords: ['small business colors', 'brand palette', 'website colors', 'Theme & Color'],
});

const SIDEBAR_PALETTE = [
  { hexCode: '#1e3a8a', colorName: 'Navy', rgbCode: 'rgb(30, 58, 138)' },
  { hexCode: '#ffffff', colorName: 'White', rgbCode: 'rgb(255, 255, 255)' },
  { hexCode: '#d4af37', colorName: 'Gold', rgbCode: 'rgb(212, 175, 55)' },
  { hexCode: '#059669', colorName: 'Teal', rgbCode: 'rgb(5, 150, 105)' },
  { hexCode: '#6b21a8', colorName: 'Purple', rgbCode: 'rgb(107, 33, 168)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many colors should be in a small business color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most small businesses do well with 3–5 colors: one primary, one secondary, one or two neutrals, and optionally one accent. That keeps branding consistent without feeling cluttered.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are good color combinations for a small business website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your industry and brand. Common choices: navy or deep blue with white and a warm accent (e.g. gold); soft green or teal with white and gray; or warm neutrals (tan, cream) with a single bold accent. Use a palette generator to explore from one base color and check contrast for text and buttons.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I make sure my small business colors are accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a contrast checker to test text and button colors against their backgrounds. Aim for at least 4.5:1 contrast for normal body text (WCAG AA). Reserve low-contrast colors for decoration, not body copy or key buttons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change my small business color palette later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Consistency over time helps recognition, so if you change, update your website, social profiles, and key print materials together so the brand still feels coherent.',
      },
    },
  ],
};

export default function ColorPaletteIdeasForSmallBusinessPage() {
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
              Color Palette Ideas for Small Business: A Practical Guide
            </h1>
            <div className="flex items-center gap-4 text-purple-100 text-sm">
              <time dateTime="2025-02-08">
                February 8, 2025
              </time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Article Content */}
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
                    If you&apos;re a small business owner, freelancer, or solopreneur choosing brand or website colors, this guide gives you actionable color palette ideas, how many colors to use, and where to apply them—logo, site, social, and print. Use our free{' '}
                    <Link href="/tools/palette-generator">color palette generator</Link> to try combinations as you read.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Why Your Small Business Needs a Defined Color Palette
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    A small business color palette is a short list of colors you use everywhere: website, social profiles, business cards, and marketing. One consistent look builds recognition. Customers start to associate those colors with you. Random choices each time—different blues, new accent colors per campaign—make the brand feel scattered and harder to remember.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    A defined palette also speeds up decisions. You don&apos;t re-pick colors for every post or page; you choose from your set. That keeps the brand coherent without extra design work.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    How Many Colors Should a Small Business Palette Have?
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    Most small businesses do well with 3–5 colors: one primary (your main brand color for logo and key buttons), one secondary (supporting headlines or backgrounds), one or two neutrals (for body text and page backgrounds), and optionally one accent (for links, highlights, or CTAs). That&apos;s enough to look intentional without feeling busy.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    Start from one main color—your current logo or the color that best fits your brand—and build from there. A <InlineTagLink href="/tools/palette-generator">color palette generator</InlineTagLink> can take that base and suggest harmonies (e.g. complementary or analogous) so you get a full set of hex codes in one place.
                  </p>
                  <BlogToolsCTAInline />

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Color Palette Ideas for Small Business by Industry
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    These directions are starting points. Adjust to match your brand voice and audience.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Professional Services (consulting, legal, accounting)
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Trust and clarity matter. Navy or slate blue with white and a warm accent like gold reads professional and premium. Use navy for headers and primary buttons, white for backgrounds, gold for accents or secondary CTAs. Keeps the palette tight and credible.
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#1e3a8a" name="Navy" hexCode="#1e3a8a" />
                    <ColorSwatch color="#ffffff" name="White" hexCode="#ffffff" />
                    <ColorSwatch color="#d4af37" name="Gold" hexCode="#d4af37" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Local Services and Trades (contractors, cleaners, repair)
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Approachable and reliable work well. Warm neutrals like soft tan or light gray with a muted green or teal feel grounded and friendly. Green or teal for CTAs and links; neutrals for background and body text. Avoid overly corporate or flashy palettes.
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#e8ddcf" name="Soft Tan" hexCode="#e8ddcf" />
                    <ColorSwatch color="#f3f4f6" name="Light Gray" hexCode="#f3f4f6" />
                    <ColorSwatch color="#059669" name="Green" hexCode="#059669" />
                    <ColorSwatch color="#0d9488" name="Teal" hexCode="#0d9488" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Retail and E‑commerce
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Product and audience drive the palette. Natural or organic brands often use greens, tans, and cream. Bold or youth-focused brands can use a strong primary like coral with white and dark gray for contrast. Pick one dominant hue and one or two neutrals so product imagery stays the focus.
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#f97316" name="Coral" hexCode="#f97316" />
                    <ColorSwatch color="#ffffff" name="White" hexCode="#ffffff" />
                    <ColorSwatch color="#1f2937" name="Dark Gray" hexCode="#1f2937" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Creative and Freelance (design, photography, copywriting)
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Personality stands out. A distinctive combo—e.g. deep purple with cream and a bright cyan accent—signals creativity without feeling random. Keep one neutral for readability; use the accent sparingly for links and highlights so the work stays central.
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#6b21a8" name="Deep Purple" hexCode="#6b21a8" />
                    <ColorSwatch color="#fefce8" name="Cream" hexCode="#fefce8" />
                    <ColorSwatch color="#06b6d4" name="Cyan" hexCode="#06b6d4" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Wellness and Health (studios, coaches, practitioners)
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Calm and clean work well. Soft greens, lavenders, or warm whites with a single muted accent (e.g. sage) feel restful and professional. Avoid harsh contrasts; aim for a small business color palette that feels easy on the eye.
                  </p>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#86efac" name="Soft Green" hexCode="#86efac" />
                    <ColorSwatch color="#c4b5fd" name="Lavender" hexCode="#c4b5fd" />
                    <ColorSwatch color="#fafaf9" name="Warm White" hexCode="#fafaf9" />
                    <ColorSwatch color="#87a96b" name="Sage" hexCode="#87a96b" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    How to Check Readability and Accessibility
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    Text and buttons must be readable on your chosen backgrounds. Contrast ratios matter: for normal body text, aim for at least 4.5:1 (WCAG AA). Check every text-on-background pair you plan to use—headlines, body copy, buttons, links. Use an <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink> to test your palette before you lock it in. Reserve low-contrast colors for decoration only, not for content users need to read.
                  </p>
                  <BlogToolsCTAInline />

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Where to Use Your Small Business Color Palette
                  </h2>
                  <p className="mb-4 leading-relaxed">
                    <strong>Website:</strong> Use your primary for header, logo, and main CTAs; secondary for section backgrounds or headings; neutrals for body text and page background. Keep link and button colors consistent so visitors learn the interface quickly.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    <strong>Social:</strong> Apply the same palette to profile visuals, post templates, and stories. Same primary and accent colors in bios, covers, and graphics make the feed feel like one brand.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    <strong>Print:</strong> Use the same hex values in design files where possible; for print vendors, provide CMYK or Pantone equivalents so business cards, flyers, and signage match the digital brand.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Next Steps: Lock In Your Palette
                  </h2>
                  <p className="mb-6 leading-relaxed">
                    Pick one or two directions from the ideas above and try them in real layouts. Use a <Link href="/tools/palette-generator">color palette generator</Link> to create a set from your main brand color, then <Link href="/tools/contrast-checker">check contrast</Link> for any text and button pairs. Document your hex codes in a simple style note so you and anyone helping with design use the same values. For more on brand and logo color systems, see our guide on <Link href="/use-cases/colors-for-branding-and-logos">colors for branding and logos</Link>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        How many colors should be in a small business color palette?
                      </h3>
                      <p className="leading-relaxed">
                        Most small businesses do well with 3–5 colors: one primary, one secondary, one or two neutrals, and optionally one accent. That keeps branding consistent without feeling cluttered.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        What are good color combinations for a small business website?
                      </h3>
                      <p className="leading-relaxed">
                        It depends on your industry and brand. Common choices: navy or deep blue with white and a warm accent (e.g. gold); soft green or teal with white and gray; or warm neutrals (tan, cream) with a single bold accent. Use a palette generator to explore from one base color and check contrast for text and buttons.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        How do I make sure my small business colors are accessible?
                      </h3>
                      <p className="leading-relaxed">
                        Use a contrast checker to test text and button colors against their backgrounds. Aim for at least 4.5:1 contrast for normal body text (WCAG AA). Reserve low-contrast colors for decoration, not body copy or key buttons.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        Can I change my small business color palette later?
                      </h3>
                      <p className="leading-relaxed">
                        Yes. Consistency over time helps recognition, so if you change, update your website, social profiles, and key print materials together so the brand still feels coherent.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Prominent tools CTA – big, attractive, animated */}
                <BlogToolsCTA />

                {/* Share Section */}
                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-white">
                    Share this article
                  </h3>
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

                {/* Ad Space Placeholder */}
                <div className="mt-8 bg-black dark:bg-gray-800 rounded-lg p-6 border border-dashed border-gray-300 dark:border-gray-700 text-center">
                  <p className="text-white dark:text-gray-400 text-sm">
                    Ad Space (728x90)
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20 space-y-6">
                  <ColorPaletteClient
                    colors={SIDEBAR_PALETTE}
                    designTitle="Small Business Palette Examples"
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
