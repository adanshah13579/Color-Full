import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/forest-green',
  title: 'Forest Green Color Palette: Meaning, Hex Codes & Best Uses | Theme & Color',
  description:
    'Forest Green is a deep, natural green palette for modern brands. Explore its meaning, psychology, hex codes, and best uses in branding, web design, UI, interiors, and products.',
  keywords: ['forest green', 'natural palette', 'green hex', 'branding', 'Theme & Color'],
});

const PALETTE = [
  { hexCode: '#065F46', colorName: 'Forest', rgbCode: 'rgb(6, 95, 70)' },
  { hexCode: '#047857', colorName: 'Emerald Dark', rgbCode: 'rgb(4, 120, 87)' },
  { hexCode: '#059669', colorName: 'Emerald', rgbCode: 'rgb(5, 150, 105)' },
  { hexCode: '#10B981', colorName: 'Green', rgbCode: 'rgb(16, 185, 129)' },
  { hexCode: '#34D399', colorName: 'Mint', rgbCode: 'rgb(52, 211, 153)' },
];

export default function ForestGreenPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-600 to-emerald-400 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Forest Green: A Natural Green Palette
            </h1>
            <div className="flex items-center gap-4 text-emerald-100 text-sm">
              <time dateTime="2025-02-10">February 10, 2025</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              {PALETTE.map((c) => (
                <ColorSwatch key={c.hexCode} color={c.hexCode} name={c.colorName} hexCode={c.hexCode} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    Forest Green is a grounded, confident palette that moves from deep evergreen tones to lighter mint. It immediately evokes real landscapes—trees, moss, foliage—and brings that same sense of stability, growth, and sustainability into your design work. Compared to bright or neon greens, this palette feels mature and trustworthy, making it a strong choice for serious modern brands.
                  </p>
                  <p className="mb-6">
                    On this page, you&apos;ll find a practical breakdown of how to use Forest Green in branding, UI design, interiors, and product styling. We&apos;ll cover color psychology, best pairings, hex codes, and concrete use cases, so you can decide if this palette actually fits your brand—or if you should keep it as a supporting accent instead.
                  </p>
                  <p className="mb-6">
                    Need the fastest copy-paste values first? See our{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">Forest Green hex code and color reference</InlineTagLink>{' '}
                    for CSS <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">forestgreen</code>, deep UI greens, palette hex list, and Ocean Breeze codes side by side.
                  </p>
                  <p className="mb-6">
                    Want to see what forest green looks like when mixed with other colors? Try our{' '}
                    <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    What Is the Forest Green Palette?
                  </h2>
                  <p className="mb-4">
                    The Forest Green palette here is built around five greens that step from deep forest to fresh mint:
                  </p>
                  <p className="mb-4 font-mono text-sm text-gray-600 dark:text-gray-400">
                    #065F46 &middot; #047857 &middot; #059669 &middot; #10B981 &middot; #34D399
                  </p>
                  <p className="mb-4">
                    Together, these shades give you enough range to design full interfaces and brand systems—not just a single hero color. The darkest tones anchor navigation bars, logos, and headings. Mid-tones handle buttons, links, and badges. The lightest shades work for backgrounds, subtle highlights, and success states.
                  </p>
                  <p className="mb-6">
                    If you need more variations, you can quickly generate tints, shades, and complementary colors with the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>. Start from any one of these hex codes and build a larger system instead of guessing by eye in your design tool.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Forest Green color plates: full hex access
                  </h2>
                  <p className="mb-4">
                    Use the swatches below to copy any Forest Green hex or RGB in one click. The same five stops appear in the sticky sidebar on large screens; this block keeps every plate within reach on mobile and when you are reading top to bottom.
                  </p>
                  <div className="not-prose flex flex-wrap gap-4 mb-6">
                    {PALETTE.map((c) => (
                      <ColorSwatch key={c.hexCode} color={c.hexCode} name={c.colorName} hexCode={c.hexCode} />
                    ))}
                  </div>
                  <div className="not-prose lg:hidden mb-8">
                    <ColorPaletteClient colors={PALETTE} designTitle="Forest Green" />
                  </div>

                  <div className="not-prose my-8 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/90 dark:bg-emerald-950/50 p-6 md:p-8">
                    <h3 className="text-xl font-bold text-emerald-950 dark:text-emerald-100 mb-2">
                      Palette generator: Forest Green shades and codes
                    </h3>
                    <p className="text-emerald-900/90 dark:text-emerald-200/90 text-base leading-relaxed mb-4">
                      Open our free{' '}
                      <Link
                        href="/tools/palette-generator"
                        className="font-semibold text-emerald-800 dark:text-emerald-300 underline underline-offset-2 hover:text-emerald-950 dark:hover:text-white"
                      >
                        color palette generator
                      </Link>{' '}
                      with Forest Green preloaded as the base color. Choose <strong className="text-emerald-950 dark:text-emerald-50">Monochromatic</strong> for lighter and darker shades of the same hue (ideal for hover, borders, and surfaces), or try analogous or complementary harmonies from the same anchor.
                    </p>
                    <p className="text-sm font-medium text-emerald-950 dark:text-emerald-100 mb-3">
                      Monochromatic shades from each plate (one-click):
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {PALETTE.map((c) => (
                        <Link
                          key={`gen-mono-${c.hexCode}`}
                          href={`/tools/palette-generator?hex=${c.hexCode.replace('#', '')}&harmony=monochromatic`}
                          className="inline-flex items-center rounded-lg bg-emerald-700 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-800 dark:hover:bg-emerald-600 transition-colors"
                        >
                          Shades from {c.colorName}
                        </Link>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-emerald-950 dark:text-emerald-100 mb-2">
                      From deep forest (#065F46), explore full harmonies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href="/tools/palette-generator?hex=065F46&harmony=analogous"
                        className="inline-flex rounded-lg border border-emerald-700 bg-white/80 dark:bg-emerald-900/60 px-3 py-2 text-sm font-medium text-emerald-900 dark:text-emerald-100 hover:bg-white dark:hover:bg-emerald-900 transition-colors"
                      >
                        Analogous palette
                      </Link>
                      <Link
                        href="/tools/palette-generator?hex=065F46&harmony=complementary"
                        className="inline-flex rounded-lg border border-emerald-700 bg-white/80 dark:bg-emerald-900/60 px-3 py-2 text-sm font-medium text-emerald-900 dark:text-emerald-100 hover:bg-white dark:hover:bg-emerald-900 transition-colors"
                      >
                        Complementary palette
                      </Link>
                      <Link
                        href="/tools/palette-generator?hex=065F46&harmony=triadic"
                        className="inline-flex rounded-lg border border-emerald-700 bg-white/80 dark:bg-emerald-900/60 px-3 py-2 text-sm font-medium text-emerald-900 dark:text-emerald-100 hover:bg-white dark:hover:bg-emerald-900 transition-colors"
                      >
                        Triadic palette
                      </Link>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    The Psychology of Forest Green
                  </h2>
                  <p className="mb-4">
                    Forest Green is not a playful or impulsive color. It carries specific, repeatable associations you can lean on:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Stability and long-term thinking</strong>: Dark greens feel rooted and established, ideal for brands that want to signal durability rather than trends.
                    </li>
                    <li>
                      <strong>Sustainability and nature</strong>: These tones instantly read as organic and earth-linked—perfect for eco, climate, outdoor, and wellness brands.
                    </li>
                    <li>
                      <strong>Quiet luxury</strong>: When paired with warm neutrals or brass accents, Forest Green leans into a premium, under-stated aesthetic instead of loud &quot;premium&quot; tropes.
                    </li>
                    <li>
                      <strong>Calm focus</strong>: In interfaces, deep greens can lower visual noise and support concentration, especially when backgrounds stay light and typography is clear.
                    </li>
                  </ul>
                  <p className="mb-6">
                    If your product is built around speed, hype, or constant novelty, this palette will likely fight your story. But if your value proposition is trust, depth, and responsibility, Forest Green is often a better strategic choice than another generic dark blue.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Hex Codes and Roles in the Palette
                  </h2>
                  <p className="mb-4">
                    You don&apos;t need a huge swarm of greens. You need a small, intentional system where each shade has a job:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>#065F46 – Deep Forest</strong>: Use for logos, primary navigation, footers, and high-emphasis stripes or bands.
                    </li>
                    <li>
                      <strong>#047857 – Emerald Dark</strong>: Ideal for primary buttons, filled badges, and strong accents on light backgrounds.
                    </li>
                    <li>
                      <strong>#059669 – Emerald</strong>: Works well for secondary buttons, hover states, and supporting UI elements.
                    </li>
                    <li>
                      <strong>#10B981 – Green</strong>: Good for success states, alerts, and lighter accents where you still want clear visibility.
                    </li>
                    <li>
                      <strong>#34D399 – Mint</strong>: Best as a background color for sections, cards, charts highlights, or to soften dense layouts.
                    </li>
                  </ul>
                  <p className="mb-6">
                    As you implement this palette, keep accessibility non-negotiable. Dark text on mint backgrounds is usually safe, but white text on mid greens can fail quickly. Always verify with the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before you ship.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Best Uses in Branding and Visual Identity
                  </h2>
                  <p className="mb-4">
                    Forest Green is a good fit for brands that need to feel credible and modern without leaning on the overused &quot;enterprise blue&quot; palette. It&apos;s especially strong for:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Climate and sustainability</strong>: Climate tech, non-profits, and ESG initiatives that need to back up their message visually.
                    </li>
                    <li>
                      <strong>Finance and fintech</strong>: Products that manage money, savings, or investments and want to signal longevity and responsibility.
                    </li>
                    <li>
                      <strong>Outdoors and lifestyle</strong>: Hiking, camping, and slow travel brands that want to mirror real-world landscapes, not cartoon palettes.
                    </li>
                    <li>
                      <strong>Wellness and slow living</strong>: Meditation, sleep, and mental health products where calm visuals support the product promise.
                    </li>
                  </ul>
                  <p className="mb-6">
                    The mistake to avoid is using Forest Green while your brand story shouts speed, trend-chasing, or maximalist energy. In those cases, keep this palette in a supporting role or choose a more vibrant primary and let green appear as an accent only.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Forest Green in Web and UI Design
                  </h2>
                  <p className="mb-4">
                    In interfaces, Forest Green works best when you treat it as a structural color, not a full-page paint bucket. A few practical patterns:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Hero sections</strong>: Use the darkest greens for a hero background with generous padding, large type, and plenty of breathing room.
                    </li>
                    <li>
                      <strong>Navigation and headers</strong>: A slim dark-green header with white type can anchor the page without feeling heavy.
                    </li>
                    <li>
                      <strong>Primary actions</strong>: Reserve one mid-to-dark green for your primary CTAs and keep it consistent across the product.
                    </li>
                    <li>
                      <strong>Feedback states</strong>: Lighter greens are excellent for success messages, confirmation banners, and progress indicators.
                    </li>
                  </ul>
                  <p className="mb-6">
                    Overusing full-bleed, dark green backgrounds on long pages can make content feel dense and tiring to read. Aim for contrast: alternate Forest Green sections with white or off-white content blocks so the eye can rest and hierarchy stays clear.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Color Combinations That Actually Work
                  </h2>
                  <p className="mb-4">
                    Forest Green is surprisingly flexible, as long as you avoid pairing it with overly saturated rivals. Strong, reliable combinations include:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Forest Green + Warm Neutrals</strong>: Cream, beige, and soft taupe create a cozy, organic feel that works well for editorial sites and lifestyle brands.
                    </li>
                    <li>
                      <strong>Forest Green + Crisp White</strong>: Clean, minimal, and highly legible—ideal for product marketing sites and SaaS dashboards.
                    </li>
                    <li>
                      <strong>Forest Green + Brass/Gold</strong>: Adds quiet luxury without tipping into cliché black-and-gold territory.
                    </li>
                    <li>
                      <strong>Forest Green + Dusty Pink</strong>: A modern, editorial pairing that feels current but still grounded. Use it carefully in accents, not everywhere.
                    </li>
                  </ul>
                  <p className="mb-6">
                    If you want to quickly test these pairings, plug Forest Green and your supporting colors into the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> and preview them as UI blocks rather than flat swatches.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    When Forest Green Is the Wrong Choice
                  </h2>
                  <p className="mb-4">
                    Every palette has failure modes. Forest Green becomes a liability when:
                  </p>
                  <ul className="mb-6">
                    <li>
                      You rely heavily on tiny white text over mid-tone greens without checking contrast.
                    </li>
                    <li>
                      Your brand voice is high-energy, youthful, or meme-driven, but your visuals are heavy and serious.
                    </li>
                    <li>
                      You mix Forest Green with too many loud primaries, creating visual noise instead of hierarchy.
                    </li>
                    <li>
                      You use dark green for huge content blocks, making pages feel cramped and fatiguing.
                    </li>
                  </ul>
                  <p className="mb-6">
                    If you recognize your brand in that list, demote Forest Green to an accent color. Use it for success states, badges, or illustrations instead of anchoring the entire experience around it.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Should You Build Your Brand on Forest Green?
                  </h2>
                  <p className="mb-4">
                    Before you commit, pressure-test the idea with three questions:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Does your product benefit from feeling grounded and long-term?</strong> If you&apos;re selling trust, safety, or durability, Forest Green earns its place.
                    </li>
                    <li>
                      <strong>Can you keep the supporting palette muted and intentional?</strong> If everything else is loud, Forest Green will get drowned out or look misplaced.
                    </li>
                    <li>
                      <strong>Will you use it consistently across UI, marketing, and physical touchpoints?</strong> The color only becomes brand equity when it shows up everywhere with discipline.
                    </li>
                  </ul>
                  <p className="mb-8">
                    If those answers are &quot;yes,&quot; Forest Green is more than an aesthetic preference—it&apos;s a strategic signal of who you are. If not, keep the palette handy for accents and explore other options in our other color stories like{' '}
                    <InlineTagLink href="/blog/ocean-breeze">Ocean Breeze</InlineTagLink> or{' '}
                    <InlineTagLink href="/blog/purple-dream">Purple Dream</InlineTagLink>.
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={PALETTE} designTitle="Forest Green" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
