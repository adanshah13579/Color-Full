import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';

export const metadata = {
  title: 'Purple Dream Color Palette: Meaning, Hex Codes & Best Uses | Theme & Color',
  description:
    'Purple Dream is a royal-to-lavender purple palette for modern brands. Explore its meaning, psychology, hex codes, and best uses in branding, web design, UI, beauty, and creative products.',
};

const PALETTE = [
  { hexCode: '#581C87', colorName: 'Royal Purple', rgbCode: 'rgb(88, 28, 135)' },
  { hexCode: '#7C3AED', colorName: 'Violet', rgbCode: 'rgb(124, 58, 237)' },
  { hexCode: '#8B5CF6', colorName: 'Purple', rgbCode: 'rgb(139, 92, 246)' },
  { hexCode: '#A78BFA', colorName: 'Lavender', rgbCode: 'rgb(167, 139, 250)' },
  { hexCode: '#C4B5FD', colorName: 'Light Lavender', rgbCode: 'rgb(196, 181, 253)' },
];

export default function PurpleDreamPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-violet-900 via-purple-600 to-purple-300 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Purple Dream: Royal to Lavender Palette
            </h1>
            <div className="flex items-center gap-4 text-purple-100 text-sm">
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
                    Purple Dream is a monochromatic purple palette that runs from deep royal tones to soft lavender. It immediately reads as creative and expressive, but it can also lean luxurious and premium when used with discipline. This is not a subtle, background kind of palette—it&apos;s for brands that actually want color to do visible work.
                  </p>
                  <p className="mb-6">
                    The trade-off is simple: Purple Dream helps you stand out, but it will also amplify any confusion in your brand story. If your positioning is vague, the palette can slide into cheap or chaotic quickly. If your offer is sharp and your design system is tight, it becomes a powerful visual differentiator for beauty, fashion, tech, and creative brands.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    What Is the Purple Dream Palette?
                  </h2>
                  <p className="mb-4">
                    This palette is built around five steps of purple, from dark royal to light lavender:
                  </p>
                  <p className="mb-4 font-mono text-sm text-gray-600 dark:text-gray-400">
                    #581C87 &middot; #7C3AED &middot; #8B5CF6 &middot; #A78BFA &middot; #C4B5FD
                  </p>
                  <p className="mb-4">
                    Because it&apos;s monochromatic, the palette is visually coherent by default. You don&apos;t have to worry about clashing hues—but you do need to plan contrast and hierarchy carefully. The darkest value anchors navigation, headlines, and key UI elements. Mid-tones carry buttons and links. The lightest lavender tones work best for backgrounds, highlights, and soft surfaces.
                  </p>
                  <p className="mb-6">
                    If you want to extend this palette into complementary or triadic schemes (for example, pairing purple with green or orange), the fastest route is the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>. Start from royal purple or violet, then test schemes as components instead of flat swatches.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    The Psychology of Purple: Where It Helps and Where It Hurts
                  </h2>
                  <p className="mb-4">
                    Purple carries a specific set of associations that are different from blue or green. In user research and brand work, it usually signals:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Creativity and imagination</strong>: Purple is strongly linked with art, fantasy, and original thinking. It works when you want &quot;not another generic SaaS&quot;.
                    </li>
                    <li>
                      <strong>Luxury and indulgence</strong>: Historically tied to rarity and royalty, deep purples can feel premium—if the typography and layout are equally considered.
                    </li>
                    <li>
                      <strong>Individuality</strong>: Purple is less common in mainstream corporate brands. That&apos;s an asset if your positioning is genuinely different.
                    </li>
                  </ul>
                  <p className="mb-6">
                    The flip side: purple can quickly feel childish, cheap, or &quot;fake premium&quot; when it&apos;s over-saturated, paired with random neons, or shipped with weak content. The palette doesn&apos;t fix strategy. It only amplifies whatever is already there—good or bad.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Hex Codes and Roles in the Palette
                  </h2>
                  <p className="mb-4">
                    Treat each color as a tool with a job, not just another swatch in the tray:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>#581C87 – Royal Purple</strong>: Your primary anchor. Use it for logos, top-level navigation, dark hero backgrounds, and strong callouts.
                    </li>
                    <li>
                      <strong>#7C3AED – Violet</strong>: A bold primary action color on light backgrounds. Great for main CTAs and form buttons.
                    </li>
                    <li>
                      <strong>#8B5CF6 – Purple</strong>: Works well for secondary CTAs, badges, and focus states without overpowering everything else.
                    </li>
                    <li>
                      <strong>#A78BFA – Lavender</strong>: Ideal for subtle backgrounds, cards, tab surfaces, and chart fills where you want a clear purple identity without harsh contrast.
                    </li>
                    <li>
                      <strong>#C4B5FD – Light Lavender</strong>: A soft wash for large areas, especially behind content blocks or in illustrations.
                    </li>
                  </ul>
                  <p className="mb-6">
                    From an accessibility standpoint, assume that white text over mid-purple backgrounds will fail more often than you expect. Always verify exact combos in the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>, and don&apos;t be afraid to switch to dark text on light lavender for long paragraphs.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Best Uses in Branding and Visual Identity
                  </h2>
                  <p className="mb-4">
                    Purple Dream is not neutral. It will shape how your brand is perceived from the first second. It works best when your positioning aligns with at least one of these directions:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Beauty and skincare</strong>: Purple signals indulgence and self-care when paired with clean product photography and plenty of white space.
                    </li>
                    <li>
                      <strong>Creative studios and agencies</strong>: It immediately differentiates you from blue-and-gray agency sites that all look the same.
                    </li>
                    <li>
                      <strong>Modern tech and SaaS</strong>: For products with playful or imaginative features (AI tools, design apps, creator platforms), purple builds a more expressive identity.
                    </li>
                    <li>
                      <strong>Entertainment and lifestyle</strong>: Events, music, gaming, and cultural brands that aim for a bold, energetic, slightly surreal vibe.
                    </li>
                  </ul>
                  <p className="mb-6">
                    If your brand promise is ultra-serious, conservative, or compliance-driven, Purple Dream may be a mismatch. In those cases, you can still use it in small doses—illustrations, charts, or product states—while a more neutral palette does the heavy lifting.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Purple Dream in Web and UI Design
                  </h2>
                  <p className="mb-4">
                    In UI, purple can be both a strength and a trap. You get instant character, but you also risk eye strain if you lean too hard on heavy backgrounds. Some practical guidelines:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Use dark purple strategically</strong>: Reserve royal purple for headers, footers, and key sections—not for endless scrolling content blocks.
                    </li>
                    <li>
                      <strong>Keep content on lighter surfaces</strong>: Put long-form text on white or very light lavender for comfortable reading.
                    </li>
                    <li>
                      <strong>Pick one primary action color</strong>: Assign violet or mid-purple as the main CTA and don&apos;t compete with it using other bright colors.
                    </li>
                    <li>
                      <strong>Use gradients with intent</strong>: The header gradient you see here works because it&apos;s controlled and limited. Don&apos;t smear gradients behind every element.
                    </li>
                  </ul>
                  <p className="mb-6">
                    If you&apos;re building complex dashboards or data-heavy products, consider using Purple Dream mainly for navigation, active states, and high-level branding, with more neutral grays behind the data itself. That keeps the product usable while preserving a strong identity.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Color Combinations That Elevate Purple Dream
                  </h2>
                  <p className="mb-4">
                    On its own, this palette is already strong. But pairing it intelligently can move you from &quot;nice&quot; to genuinely distinctive:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Purple + Warm Neutrals</strong>: Cream, sand, and soft beige warm up the palette and prevent it from feeling too digital or cold.
                    </li>
                    <li>
                      <strong>Purple + Charcoal Gray</strong>: Adds seriousness and balance for more complex or B2B products.
                    </li>
                    <li>
                      <strong>Purple + Soft Pink</strong>: Works well for beauty and lifestyle, but only if you keep typography sharp and layouts minimal.
                    </li>
                    <li>
                      <strong>Purple + Forest Green</strong>: A bold, high-contrast pairing that can work for editorial design or special campaigns when you manage hierarchy carefully.
                    </li>
                  </ul>
                  <p className="mb-6">
                    To validate these combinations quickly, plug them into the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> and preview them in real UI elements instead of guessing from flat rectangles.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    When Purple Dream Is the Wrong Call
                  </h2>
                  <p className="mb-4">
                    You shouldn&apos;t force this palette just because it&apos;s visually interesting. It&apos;s a bad fit when:
                  </p>
                  <ul className="mb-6">
                    <li>
                      Your audience expects conservative visuals (traditional finance, law, regulated healthcare) and you haven&apos;t prepared them for something more expressive.
                    </li>
                    <li>
                      You try to stack purple on top of an existing, loud multi-color system, ending in a noisy, inconsistent brand.
                    </li>
                    <li>
                      You rely on it to create &quot;luxe&quot; while everything else—copy, product shots, layout—still looks cheap.
                    </li>
                  </ul>
                  <p className="mb-6">
                    In those scenarios, you can either simplify your system and give Purple Dream room to breathe, or keep it in the toolbox for specific campaigns instead of the core identity.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Should You Build Your Brand on Purple Dream?
                  </h2>
                  <p className="mb-4">
                    Before you commit, run a quick stress test:
                  </p>
                  <ul className="mb-6">
                    <li>
                      <strong>Does your brand benefit from feeling creative, expressive, and slightly unconventional?</strong>
                    </li>
                    <li>
                      <strong>Can you keep the rest of the system (type, layout, imagery) as disciplined as the color is expressive?</strong>
                    </li>
                    <li>
                      <strong>Are you ready to use purple consistently across product, marketing, and offline touchpoints?</strong>
                    </li>
                  </ul>
                  <p className="mb-8">
                    If the honest answer is &quot;yes,&quot; Purple Dream can be a defensible, memorable foundation for your visual identity. If not, treat it as a strong accent palette and explore more neutral bases like our{' '}
                    <InlineTagLink href="/blog/forest-green">Forest Green</InlineTagLink> or{' '}
                    <InlineTagLink href="/blog/ocean-breeze">Ocean Breeze</InlineTagLink> palettes instead.
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={PALETTE} designTitle="Purple Dream" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
