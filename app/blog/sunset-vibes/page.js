import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/sunset-vibes',
  title: 'Sunset Vibes Color Palette: Hex Codes, Uses & Accessibility | Theme & Color',
  description:
    'Complete guide to the Sunset Vibes palette: all five hex codes, RGB values, best uses for web and UI, CSS variables, and WCAG contrast tips.',
  keywords: ['sunset palette', 'warm colors', 'WCAG', 'hex codes', 'Theme & Color'],
});

const PALETTE = [
  { hexCode: '#F59E0B', colorName: 'Amber', rgbCode: 'rgb(245, 158, 11)' },
  { hexCode: '#F97316', colorName: 'Orange', rgbCode: 'rgb(249, 115, 22)' },
  { hexCode: '#EF4444', colorName: 'Red', rgbCode: 'rgb(239, 68, 68)' },
  { hexCode: '#EC4899', colorName: 'Pink', rgbCode: 'rgb(236, 72, 153)' },
  { hexCode: '#A855F7', colorName: 'Purple', rgbCode: 'rgb(168, 85, 247)' },
];

export default function SunsetVibesPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-amber-500 via-red-500 to-purple-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-amber-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Sunset Vibes: Bold Orange-to-Purple Palette
            </h1>
            <div className="flex items-center gap-4 text-amber-100 text-sm">
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
                    The Sunset Vibes color palette is a bold, warm-to-cool progression from amber and orange through red and pink to purple. It captures the energy of a sunset and works for brands and products that want to feel creative, lively, and memorable. In this guide we cover every hex code and RGB value, how to assign each color in your UI or design system, how to implement Sunset Vibes in code with CSS variables and design tokens, and how to keep contrast and accessibility in check. Whether you are designing a lifestyle app, event branding, or a standout marketing campaign, you will have the full technical and creative reference for the Sunset Vibes palette.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What Is the Sunset Vibes Color Palette?</h2>
                  <p className="mb-4">
                    Sunset Vibes is an analogous palette with a warm-to-cool shift: the five hues move from the warm side of the wheel (amber, orange, red) through pink into the cooler purple range. That transition gives the palette both energy and depth. It is often used for lifestyle and consumer brands, event and entertainment sites, creative portfolios, and apps that want to feel dynamic rather than corporate. Because the colors are saturated and high-contrast against neutrals, they work well for CTAs, headlines, and key visual moments—but they need careful pairing with text and backgrounds to meet accessibility standards. We cover contrast and WCAG below.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Five Colors: Hex Codes and Roles</h2>
                  <p className="mb-4">
                    Each color in the Sunset Vibes palette has a precise hex and RGB value and a suggested role in your design system. Use these as your single source of truth in Figma, code, or brand guidelines.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li><strong className="text-gray-900 dark:text-white">Amber (#F59E0B, rgb(245, 158, 11))</strong> — The warmest tone. Use for primary CTAs, key buttons, and headlines when you want a friendly, energetic feel. Works on white and dark backgrounds; test contrast for any text on top.</li>
                    <li><strong className="text-gray-900 dark:text-white">Orange (#F97316, rgb(249, 115, 22))</strong> — Strong and attention-grabbing. Ideal for sale or urgency cues, secondary CTAs, and hover states. Pairs well with Amber for a warm primary pair.</li>
                    <li><strong className="text-gray-900 dark:text-white">Red (#EF4444, rgb(239, 68, 68))</strong> — Use for errors, destructive actions, or high-emphasis alerts. Can also work as an accent for limited-time or hot-topic content. Avoid large areas of red for body text backgrounds.</li>
                    <li><strong className="text-gray-900 dark:text-white">Pink (#EC4899, rgb(236, 72, 153))</strong> — The bridge between red and purple. Great for links, highlights, and creative or playful accents. Works in gradients with Red or Purple.</li>
                    <li><strong className="text-gray-900 dark:text-white">Purple (#A855F7, rgb(168, 85, 247))</strong> — The coolest tone. Use for secondary navigation, badges, or dark-mode accents. Adds depth and variety without competing with the warmer primaries.</li>
                  </ul>
                  <p className="mb-4 font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    #F59E0B · #F97316 · #EF4444 · #EC4899 · #A855F7
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Best Uses in Web and UI Design</h2>
                  <p className="mb-4">
                    In web and app UI, assign Sunset Vibes with clear roles so the interface stays coherent. Use Amber or Orange for the main call-to-action and primary buttons; reserve Red for destructive or critical actions and Pink for links or secondary highlights. Purple works well for tabs, tags, or tertiary accents. Avoid using more than two or three of these colors in a single view so the design does not feel chaotic. On dark backgrounds, the warmer tones (Amber, Orange) and Purple pop; use white or light text on top and verify ratios with an <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink>. On light backgrounds, use dark text for body copy and reserve Sunset Vibes for interactive and decorative elements.
                  </p>
                  <p className="mb-6">
                    For marketing and landing pages, Sunset Vibes can drive hero sections, sale banners, and event graphics. Gradient overlays from Amber to Pink or Orange to Purple are effective for headers and cards. Keep body text and key UI on neutral backgrounds so the palette supports the message without hurting readability.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Using Sunset Vibes in Code: CSS Variables and Design Tokens</h2>
                  <p className="mb-4">
                    Implement the Sunset Vibes palette in code with CSS custom properties or a design token file. Define each hex as a variable (e.g. <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">--sunset-amber</code>, <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">--sunset-orange</code>) and map them to semantic names like <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">primary</code>, <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">accent</code>, and <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">destructive</code> so your team uses the same values everywhere. For hover and disabled states, generate lighter or darker shades from any of the five hex codes using a <InlineTagLink href="/tools/palette-generator">color palette generator</InlineTagLink>; add those to your token set so buttons and links stay consistent across the app.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Accessibility and Contrast</h2>
                  <p className="mb-4">
                    Sunset Vibes colors are vivid; several fail WCAG AA for normal text on white. Amber (#F59E0B) and Orange (#F97316) on white are typically below 4.5:1 for body text; use them for large headings or non-text elements. Red (#EF4444) and Pink (#EC4899) can work for large text or icons but often fail for small copy. Purple (#A855F7) on white usually fails for body text. For accessible UI, use black or dark gray for body text on white or light gray, and use Sunset Vibes for buttons, links, and accents only. Always test your exact combinations—especially on dark mode and colored backgrounds—with a contrast checker so your design meets WCAG AA or AAA where required.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Sunset Vibes for Branding and Marketing</h2>
                  <p className="mb-4">
                    In branding, Sunset Vibes suits lifestyle, entertainment, and creative positioning. Use Amber or Orange as the primary brand color for logos and key touchpoints; add Pink or Purple for social assets, campaigns, and event materials. Document the five hex codes (and CMYK for print) in your brand guidelines so marketing and design stay consistent. The palette is strong enough to own a category when applied consistently across website, app, and collateral.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Extend or Adjust the Palette</h2>
                  <p className="mb-4">
                    If you need more shades—for gradients, disabled states, or hover variants—use any Sunset Vibes hex as the base in our palette generator and create monochromatic or analogous variations. You can also combine this palette with a neutral scale (white, grays, black) for a full design system. Keep the core five as the anchor and add only the shades you need; too many similar warm tones can make the palette feel muddy or overwhelming.
                  </p>

                  <p className="mb-8">
                    Use our <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> to extend Sunset Vibes or create new palettes from any of the five colors. Test every text and background pair with our <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> so your implementation stays accessible and on-brand.
                  </p>
                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={PALETTE} designTitle="Sunset Vibes" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
