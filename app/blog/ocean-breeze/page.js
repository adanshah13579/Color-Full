import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';

export const metadata = {
  title: 'Ocean Breeze Color Palette: Hex Codes, Uses & Accessibility | Theme & Color',
  description:
    'Complete guide to the Ocean Breeze color palette: all five hex codes, RGB values, best uses for web and UI design, CSS variables, and WCAG contrast tips.',
};

const PALETTE = [
  { hexCode: '#0EA5E9', colorName: 'Sky Blue', rgbCode: 'rgb(14, 165, 233)' },
  { hexCode: '#06B6D4', colorName: 'Cyan', rgbCode: 'rgb(6, 182, 212)' },
  { hexCode: '#14B8A6', colorName: 'Teal', rgbCode: 'rgb(20, 184, 166)' },
  { hexCode: '#10B981', colorName: 'Emerald', rgbCode: 'rgb(16, 185, 129)' },
  { hexCode: '#34D399', colorName: 'Mint', rgbCode: 'rgb(52, 211, 153)' },
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
              Ocean Breeze: A Calm Blue-to-Green Palette
            </h1>
            <div className="flex items-center gap-4 text-cyan-100 text-sm">
              <time dateTime="2025-02-10">February 10, 2025</time>
              <span>•</span>
              <span>5 min read</span>
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
                    The Ocean Breeze color palette is a curated set of five colors that move from sky blue through cyan and teal to emerald and mint green. It is one of the most popular blue-green palettes for web design, branding, and UI because it feels calm, clear, and professional without feeling cold or corporate. In this guide we cover every hex code, where and how to use each color, how to implement the palette in code (including CSS variables and design tokens), and how to keep it accessible with proper contrast. Whether you are a designer choosing colors for a new project or a developer implementing a design system, you will have everything you need to use the Ocean Breeze palette effectively.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What Is the Ocean Breeze Color Palette?</h2>
                  <p className="mb-4">
                    Ocean Breeze is an analogous color palette: the five hues sit next to each other on the color wheel, from blue through blue-green (cyan, teal) to green. That proximity creates a smooth, harmonious transition that is easy on the eye and reads as a single, cohesive theme. The palette is often used for brands and products that want to convey trust, clarity, wellness, or a connection to nature—think fintech apps, health and fitness platforms, travel and hospitality sites, and SaaS dashboards. Because the colors are mid to high saturation with good luminance spread, they work on both light and dark backgrounds when you assign roles correctly and check contrast.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Five Colors: Hex Codes and Roles</h2>
                  <p className="mb-4">
                    Each color in the Ocean Breeze palette has a clear technical definition and a suggested role in your design system or style guide. Below are the exact hex and RGB values you can copy into Figma, CSS, or design tokens.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li><strong className="text-gray-900 dark:text-white">Sky Blue (#0EA5E9, rgb(14, 165, 233))</strong> — The primary blue. Use it for main CTAs, primary buttons, key links, and headers. It has strong presence and works well on white or very light gray backgrounds.</li>
                    <li><strong className="text-gray-900 dark:text-white">Cyan (#06B6D4, rgb(6, 182, 212))</strong> — Slightly cooler and more saturated. Ideal for secondary buttons, hover states, or as an accent alongside Sky Blue. Good for badges and tags.</li>
                    <li><strong className="text-gray-900 dark:text-white">Teal (#14B8A6, rgb(20, 184, 166))</strong> — The bridge between blue and green. Use for links, icons, or tertiary accents. Works well for success or “active” states in UI.</li>
                    <li><strong className="text-gray-900 dark:text-white">Emerald (#10B981, rgb(16, 185, 129))</strong> — Green-leaning. Suits success messages, positive feedback, and secondary highlights. Pairs well with Teal for a cohesive accent range.</li>
                    <li><strong className="text-gray-900 dark:text-white">Mint (#34D399, rgb(52, 211, 153))</strong> — The lightest tone. Best for subtle backgrounds, hover highlights, or large areas where you want a soft tint. Avoid using Mint for small text; contrast can fail on white.</li>
                  </ul>
                  <p className="mb-4 font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    #0EA5E9 · #06B6D4 · #14B8A6 · #10B981 · #34D399
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Best Uses in Web and UI Design</h2>
                  <p className="mb-4">
                    In a typical web or app layout, assign one primary and one or two secondary colors from Ocean Breeze so the interface stays consistent. Use Sky Blue or Cyan for the main call-to-action button and primary navigation highlights. Reserve Teal and Emerald for secondary actions, links, and success or info states. Mint is best for background tints, cards, or large decorative areas rather than for text or small UI elements. If you support dark mode, use the darker shades (Sky Blue, Cyan, Teal) for accents on dark backgrounds and ensure body text is white or off-white; run every text-background pair through an <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink> to meet WCAG AA or AAA where required.
                  </p>
                  <p className="mb-6">
                    For dashboards and data-heavy UIs, Ocean Breeze can drive charts and status indicators: for example, Sky Blue for primary data series, Teal for secondary, and Emerald for positive or “on” states. Keep neutrals (white, light gray, dark gray) for text and surfaces so the palette does not overwhelm the content.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Using Ocean Breeze in Code: CSS Variables and Design Tokens</h2>
                  <p className="mb-4">
                    As a developer, you can implement the Ocean Breeze palette with CSS custom properties so one change propagates across the app. Define the five colors as variables (e.g. on <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">:root</code> or in a theme object), then reference them for buttons, links, backgrounds, and borders. In a design token system, map these hex values to semantic names such as <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">primary-500</code>, <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">accent-teal</code>, and <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">success</code> so designers and developers share the same vocabulary. If you need more shades (e.g. lighter or darker variants for hover and disabled states), use a <InlineTagLink href="/tools/palette-generator">color palette generator</InlineTagLink> with any of these hex codes as the base to create an extended scale.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Accessibility and Contrast</h2>
                  <p className="mb-4">
                    Not every Ocean Breeze color is safe for body text on white or black. Sky Blue (#0EA5E9) and Cyan (#06B6D4) on white often fail WCAG AA for normal text (4.5:1); they are better for large text, headings, or non-text elements. Teal and Emerald can approach or meet AA on white in large sizes; Mint on white generally fails for text. For accessible body copy, use black or dark gray text on white or light gray backgrounds, and use the Ocean Breeze colors for buttons, links, and accents. Always test your exact combinations with a contrast checker—especially if you use these colors on colored backgrounds or in dark mode—and reserve the palette for UI chrome and emphasis, not for long-form reading.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Ocean Breeze for Branding and Marketing</h2>
                  <p className="mb-4">
                    In branding, Ocean Breeze works well for logos, social assets, and marketing materials when you want a fresh, trustworthy, or wellness-oriented feel. Use Sky Blue or Cyan as the primary brand color and Teal or Emerald for secondary touchpoints. Document the hex codes in your brand guidelines so all teams and vendors use the same values in digital (HEX, RGB) and print (CMYK equivalents). Consistency across website, app, and print keeps the Ocean Breeze palette recognizable and on-brand.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Extend or Adjust the Palette</h2>
                  <p className="mb-4">
                    If you need more than five colors—for example, lighter or darker steps for gradients or disabled states—start from any Ocean Breeze hex in our palette generator and generate analogous or monochromatic variations. You can also combine this palette with a neutral scale (grays and white) for a full design system. When in doubt, keep the core five as your source of truth and add shades only where the UI clearly needs them; too many similar blues and greens can dilute the clarity of the palette.
                  </p>

                  <p className="mb-8">
                    Use our <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> to extend this set or create variations from any of the five colors. Test every text and background pair with our <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> so your Ocean Breeze implementation stays accessible and readable for all users.
                  </p>
                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={PALETTE} designTitle="Ocean Breeze" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
