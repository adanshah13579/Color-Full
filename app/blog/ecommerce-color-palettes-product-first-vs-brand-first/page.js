import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import BlogToolsCTAInline from '../components/BlogToolsCTAInline';

export const metadata = {
  title: 'E-commerce Color Palettes: Product-First vs Brand-First Approaches | Theme & Color',
  description:
    'E-commerce color palettes for product-first and brand-first online stores, with hex codes and examples. Learn how to choose store colors and test them with palette and contrast tools.',
};

const SIDEBAR_PALETTE = [
  { hexCode: '#020617', colorName: 'Near-black', rgbCode: 'rgb(2, 6, 23)' },
  { hexCode: '#0F172A', colorName: 'Navy', rgbCode: 'rgb(15, 23, 42)' },
  { hexCode: '#F9FAFB', colorName: 'Soft white', rgbCode: 'rgb(249, 250, 251)' },
  { hexCode: '#E5E7EB', colorName: 'Border gray', rgbCode: 'rgb(229, 231, 235)' },
  { hexCode: '#2563EB', colorName: 'Primary CTA', rgbCode: 'rgb(37, 99, 235)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an ecommerce color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ecommerce color palette is a small set of colors used across your store UI (header, buttons, product cards, links) and marketing (banners, promos). A good palette keeps CTAs obvious, text readable, and the store feeling consistent.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I use a product-first palette vs brand-first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use product-first when photography and product variety are the main focus. Use brand-first when your brand color system is part of your identity and you want recognition across the whole experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many colors should I use in an online store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most ecommerce stores do well with 3–5 core UI colors: one for primary actions, one neutral for backgrounds, one neutral for text/borders, plus a small accent for badges or promos.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I make sure my store colors are accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use an accessibility contrast checker to test text and button colors against their backgrounds. Aim for WCAG AA (4.5:1 for normal text, 3:1 for large text) before you ship.',
      },
    },
  ],
};

export default function EcommerceColorPalettesPage() {
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
              E-commerce Color Palettes: Product-First vs Brand-First Approaches
            </h1>

            <div className="flex items-center gap-4 text-purple-100 text-sm">
              <time dateTime="2025-03-19">March 19, 2025</time>
              <span>•</span>
              <span>10 min read</span>
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
                    Choosing an <strong>ecommerce color palette</strong> is not just about looks. Your colors decide
                    whether products stand out or disappear, whether CTAs are obvious or hidden, and whether your store
                    feels trustworthy or cheap. Most online stores fall into two strategic buckets: <strong>product-first</strong> and{' '}
                    <strong>brand-first</strong>.
                  </p>

                  <h2>How people search for online store colors</h2>
                  <p className="mb-4 leading-relaxed">
                    The search intent behind queries like <strong>“ecommerce color palette”</strong> and{" "}
                    <strong>“online store colors”</strong> is usually high and practical. People want palettes they can
                    apply immediately—especially with hex codes—and they want assurance that the colors are readable.
                  </p>
                  <ul>
                    <li>“ecommerce color palette”</li>
                    <li>“online store colors”</li>
                    <li>“color palette for online shop [niche]”</li>
                  </ul>
                  <p className="mb-6 leading-relaxed">
                    To match this intent, this guide gives you store-specific palette patterns with hex codes, plus
                    links to our <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> and{' '}
                    <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink> so you can validate text and buttons.
                  </p>

                  <h2>Product-first vs brand-first (quick overview)</h2>
                  <p className="mb-4 leading-relaxed">
                    <strong>Product-first palettes</strong> are neutral and quiet. UI uses light backgrounds and subtle
                    accents so product photos lead. This approach works well for marketplaces and multi-brand stores.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    <strong>Brand-first palettes</strong> are bolder. A signature color system shows up in headers, CTAs,
                    and key sections. Use this when your brand memory is part of the product value.
                  </p>
                  <BlogToolsCTAInline />

                  <h2>Product-first ecommerce color palettes</h2>

                  <h3>1) Minimal neutral (tech & marketplaces)</h3>
                  <ul>
                    <li><strong>#0F172A</strong> — text / logo</li>
                    <li><strong>#111827</strong> — headings</li>
                    <li><strong>#E5E7EB</strong> — borders</li>
                    <li><strong>#F9FAFB</strong> — page background</li>
                    <li><strong>#2563EB</strong> — primary CTA</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#0F172A" name="Text" hexCode="#0F172A" />
                    <ColorSwatch color="#111827" name="Heading" hexCode="#111827" />
                    <ColorSwatch color="#E5E7EB" name="Border" hexCode="#E5E7EB" />
                    <ColorSwatch color="#F9FAFB" name="Background" hexCode="#F9FAFB" />
                    <ColorSwatch color="#2563EB" name="CTA" hexCode="#2563EB" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Start in the <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> using{' '}
                    <code>#2563EB</code> for your primary, then test the actual button text and link colors with the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                  </p>

                  <h3>2) Soft neutral (lifestyle & home)</h3>
                  <ul>
                    <li><strong>#111827</strong> — text</li>
                    <li><strong>#4B5563</strong> — secondary text</li>
                    <li><strong>#F3F4F6</strong> — section background</li>
                    <li><strong>#FEFCE8</strong> — highlight sections</li>
                    <li><strong>#EA580C</strong> — CTAs and badges</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#111827" name="Text" hexCode="#111827" />
                    <ColorSwatch color="#4B5563" name="Secondary" hexCode="#4B5563" />
                    <ColorSwatch color="#F3F4F6" name="Section" hexCode="#F3F4F6" />
                    <ColorSwatch color="#FEFCE8" name="Highlight" hexCode="#FEFCE8" />
                    <ColorSwatch color="#EA580C" name="CTA" hexCode="#EA580C" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Keep this palette small. Use the accent for promo ribbons, “free shipping,” and key moments—not as a random background generator.
                  </p>

                  <h3>3) Dark-on-light (premium electronics)</h3>
                  <ul>
                    <li><strong>#020617</strong> — near-black text</li>
                    <li><strong>#1E293B</strong> — header / footer</li>
                    <li><strong>#E2E8F0</strong> — cards</li>
                    <li><strong>#F8FAFC</strong> — page background</li>
                    <li><strong>#0EA5E9</strong> — CTAs and key links</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#020617" name="Text" hexCode="#020617" />
                    <ColorSwatch color="#1E293B" name="Header" hexCode="#1E293B" />
                    <ColorSwatch color="#E2E8F0" name="Card" hexCode="#E2E8F0" />
                    <ColorSwatch color="#F8FAFC" name="Background" hexCode="#F8FAFC" />
                    <ColorSwatch color="#0EA5E9" name="CTA" hexCode="#0EA5E9" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    For moody product shots on light cards, this combination usually reads clean and modern. Validate with the contrast tool before shipping.
                  </p>

                  <h2>Brand-first ecommerce color palettes</h2>

                  <h3>4) Warm skincare / beauty</h3>
                  <ul>
                    <li><strong>#0F172A</strong> — text</li>
                    <li><strong>#FFF7ED</strong> — background</li>
                    <li><strong>#FDBA74</strong> — primary brand color</li>
                    <li><strong>#F97316</strong> — hover & sale highlights</li>
                    <li><strong>#FDE68A</strong> — soft highlights</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#0F172A" name="Text" hexCode="#0F172A" />
                    <ColorSwatch color="#FFF7ED" name="Background" hexCode="#FFF7ED" />
                    <ColorSwatch color="#FDBA74" name="Primary" hexCode="#FDBA74" />
                    <ColorSwatch color="#F97316" name="Hover" hexCode="#F97316" />
                    <ColorSwatch color="#FDE68A" name="Highlight" hexCode="#FDE68A" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Use the darker warm version for anything that carries text. Reserve lighter warm tones for backgrounds and non-critical decoration.
                  </p>

                  <h3>5) Clean green wellness brand</h3>
                  <ul>
                    <li><strong>#022C22</strong> — headings</li>
                    <li><strong>#064E3B</strong> — primary brand color</li>
                    <li><strong>#ECFDF5</strong> — section backgrounds</li>
                    <li><strong>#A7F3D0</strong> — cards and callouts</li>
                    <li><strong>#F97316</strong> — badges and alerts</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#022C22" name="Heading" hexCode="#022C22" />
                    <ColorSwatch color="#064E3B" name="Primary" hexCode="#064E3B" />
                    <ColorSwatch color="#ECFDF5" name="Background" hexCode="#ECFDF5" />
                    <ColorSwatch color="#A7F3D0" name="Card" hexCode="#A7F3D0" />
                    <ColorSwatch color="#F97316" name="Alert" hexCode="#F97316" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    Green can be tricky. Test “green text on green backgrounds” and “badge text on badge backgrounds” with the contrast checker so you don’t accidentally create low-contrast UI.
                  </p>

                  <h3>6) Bold fashion / streetwear</h3>
                  <ul>
                    <li><strong>#020617</strong> — text</li>
                    <li><strong>#111827</strong> — headers</li>
                    <li><strong>#F9FAFB</strong> — background</li>
                    <li><strong>#EF4444</strong> — primary CTAs</li>
                    <li><strong>#F97316</strong> — secondary accent</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#020617" name="Text" hexCode="#020617" />
                    <ColorSwatch color="#111827" name="Header" hexCode="#111827" />
                    <ColorSwatch color="#F9FAFB" name="Background" hexCode="#F9FAFB" />
                    <ColorSwatch color="#EF4444" name="Primary CTA" hexCode="#EF4444" />
                    <ColorSwatch color="#F97316" name="Accent" hexCode="#F97316" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    When your brand is loud, you still need calm neutrals for readability. This palette keeps backgrounds near-white so body copy stays sharp.
                  </p>

                  <h3>7) Playful kids / toys</h3>
                  <ul>
                    <li><strong>#0F172A</strong> — text</li>
                    <li><strong>#F9FAFB</strong> — background</li>
                    <li><strong>#3B82F6</strong> — primary links and buttons</li>
                    <li><strong>#F97316</strong> — badges and highlights</li>
                    <li><strong>#22C55E</strong> — success / educational highlights</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#0F172A" name="Text" hexCode="#0F172A" />
                    <ColorSwatch color="#F9FAFB" name="Background" hexCode="#F9FAFB" />
                    <ColorSwatch color="#3B82F6" name="Primary" hexCode="#3B82F6" />
                    <ColorSwatch color="#F97316" name="Badge" hexCode="#F97316" />
                    <ColorSwatch color="#22C55E" name="Success" hexCode="#22C55E" />
                  </div>
                  <p className="mb-6 leading-relaxed">
                    The practical rule: two accents max in the main UI. Let product photography and icons carry the rest.
                  </p>

                  <h2>Niche ecommerce palette patterns (8–10)</h2>

                  <h3>8) Luxury black &amp; gold store</h3>
                  <ul>
                    <li><strong>#020617</strong> — background</li>
                    <li><strong>#FACC15</strong> — gold accents</li>
                    <li><strong>#F9FAFB</strong> — card surfaces</li>
                    <li><strong>#E5E7EB</strong> — borders</li>
                    <li><strong>#F97316</strong> — promo badges</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#020617" name="Background" hexCode="#020617" />
                    <ColorSwatch color="#FACC15" name="Gold" hexCode="#FACC15" />
                    <ColorSwatch color="#F9FAFB" name="Card" hexCode="#F9FAFB" />
                    <ColorSwatch color="#E5E7EB" name="Border" hexCode="#E5E7EB" />
                    <ColorSwatch color="#F97316" name="Promo" hexCode="#F97316" />
                  </div>

                  <h3>9) Eco grocery / organic food</h3>
                  <ul>
                    <li><strong>#14532D</strong> — headings</li>
                    <li><strong>#22C55E</strong> — CTAs</li>
                    <li><strong>#BBF7D0</strong> — cards and callouts</li>
                    <li><strong>#F7FEE7</strong> — page background</li>
                    <li><strong>#F97316</strong> — discounts and promos</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#14532D" name="Heading" hexCode="#14532D" />
                    <ColorSwatch color="#22C55E" name="CTA" hexCode="#22C55E" />
                    <ColorSwatch color="#BBF7D0" name="Card" hexCode="#BBF7D0" />
                    <ColorSwatch color="#F7FEE7" name="Background" hexCode="#F7FEE7" />
                    <ColorSwatch color="#F97316" name="Promo" hexCode="#F97316" />
                  </div>

                  <h3>10) Tech SaaS subscription store</h3>
                  <ul>
                    <li><strong>#020617</strong> — text</li>
                    <li><strong>#0F172A</strong> — header background</li>
                    <li><strong>#1D4ED8</strong> — primary brand blue</li>
                    <li><strong>#22C55E</strong> — savings highlight</li>
                    <li><strong>#F9FAFB</strong> — content background</li>
                  </ul>
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <ColorSwatch color="#020617" name="Text" hexCode="#020617" />
                    <ColorSwatch color="#0F172A" name="Header" hexCode="#0F172A" />
                    <ColorSwatch color="#1D4ED8" name="Primary" hexCode="#1D4ED8" />
                    <ColorSwatch color="#22C55E" name="Savings" hexCode="#22C55E" />
                    <ColorSwatch color="#F9FAFB" name="Background" hexCode="#F9FAFB" />
                  </div>

                  <h2>How to build and test these palettes with tools</h2>
                  <ol>
                    <li>
                      <strong>Generate the palette structure.</strong> Use the{' '}
                      <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, then map colors to roles like background, text, primary, secondary, and accent.
                    </li>
                    <li>
                      <strong>Validate contrast before coding.</strong> Test each text/background pair with the{' '}
                      <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>. Aim for WCAG AA (4.5:1 for normal text, 3:1 for large text).
                    </li>
                    <li>
                      <strong>Limit the live palette.</strong> Keep the ecommerce UI to 3–5 core colors so the store stays coherent and fast.
                    </li>
                  </ol>

                  <h2>Next steps</h2>
                  <p className="mb-6 leading-relaxed">
                    Pick a pattern that matches your niche, then recreate it in the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>. Fix any colors that fail contrast in the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>, and document your final hex values so your whole team uses the same ecommerce color palette across site, emails, and ads.
                  </p>

                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        What is an ecommerce color palette?
                      </h3>
                      <p className="leading-relaxed">
                        An ecommerce color palette is a small set of colors used across your store UI (header, buttons, product cards, links) and marketing (banners, promos). A good palette keeps CTAs obvious, text readable, and the store consistent.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        When should I use product-first vs brand-first?
                      </h3>
                      <p className="leading-relaxed">
                        Product-first works when photography and product variety are the main focus. Brand-first works when your brand color system drives recognition and you want consistency across the whole experience.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        How many colors should I use in an online store?
                      </h3>
                      <p className="leading-relaxed">
                        Most ecommerce stores do well with 3–5 core UI colors: one primary for actions, one background neutral, one text/border neutral, plus a small accent for badges or promos.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        How do I ensure my store colors are accessible?
                      </h3>
                      <p className="leading-relaxed">
                        Use the accessibility contrast checker to test text and button colors against their backgrounds. Aim for WCAG AA (4.5:1 normal text, 3:1 large text).
                      </p>
                    </div>
                  </div>
                </div>

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
                    designTitle="E-commerce palette examples"
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

