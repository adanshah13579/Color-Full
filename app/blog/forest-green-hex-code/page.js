import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import CopyableHex from './CopyableHex';
import { ForestGreenQuickAnswer, ForestGreenShadesTable } from './ForestGreenHexLead';

export const metadata = buildPageMetadata({
  path: '/blog/forest-green-hex-code',
  title: 'Forest Green Hex Code: #228B22 — Shades, RGB, HSL & Copy-Paste',
  description:
    'Forest green hex #228B22 with RGB, HSL, one-click copy, 10 named shades from honeydew to hunter green, palette pairings, and free tools. Faster than generic color encyclopedias.',
  keywords: ['forest green hex', '#228B22', 'green shades', 'RGB', 'HSL', 'palette', 'Theme & Color'],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-04-11T00:00:00.000Z',
    modifiedTime: '2026-05-17T00:00:00.000Z',
  },
});

const FOREST_PALETTE = [
  { hexCode: '#065F46', colorName: 'Forest', rgbCode: 'rgb(6, 95, 70)' },
  { hexCode: '#047857', colorName: 'Emerald Dark', rgbCode: 'rgb(4, 120, 87)' },
  { hexCode: '#059669', colorName: 'Emerald', rgbCode: 'rgb(5, 150, 105)' },
  { hexCode: '#10B981', colorName: 'Green', rgbCode: 'rgb(16, 185, 129)' },
  { hexCode: '#34D399', colorName: 'Mint', rgbCode: 'rgb(52, 211, 153)' },
];

const OCEAN_BREEZE_QUICK = [
  { hexCode: '#0EA5E9', colorName: 'Sky Blue', rgbCode: 'rgb(14, 165, 233)' },
  { hexCode: '#06B6D4', colorName: 'Cyan', rgbCode: 'rgb(6, 182, 212)' },
  { hexCode: '#14B8A6', colorName: 'Teal', rgbCode: 'rgb(20, 184, 166)' },
  { hexCode: '#10B981', colorName: 'Emerald', rgbCode: 'rgb(16, 185, 129)' },
  { hexCode: '#34D399', colorName: 'Mint', rgbCode: 'rgb(52, 211, 153)' },
];

const HERO_SWATCHES = [
  { hexCode: '#228B22', colorName: 'CSS forestgreen', rgbCode: 'rgb(34, 139, 34)' },
  { hexCode: '#065F46', colorName: 'Deep UI green', rgbCode: 'rgb(6, 95, 70)' },
  { hexCode: '#2d5016', colorName: 'Dark forest', rgbCode: 'rgb(45, 80, 22)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the forest green hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In CSS, the named color forestgreen is #228B22 (rgb(34, 139, 34)). For modern UI, designers often use deeper greens such as #065F46 for backgrounds and accents. There is no single official hex—pick one value and document it in your style guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the forest green colour code in RGB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the CSS forest green hex #228B22, the RGB colour code is rgb(34, 139, 34). For #065F46, RGB is rgb(6, 95, 70).',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do forest green color codes differ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paint, print, and screen media use different definitions. On the web, hex is standard; the same phrase can describe anything from bright leaf green to near-black evergreen. Choose hex values for your palette and test contrast for text and buttons.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hex codes are in a forest green color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A balanced forest green palette often spans dark evergreen to mint—for example #065F46, #047857, #059669, #10B981, and #34D399. Use the darkest tones for structure, mid tones for actions, and the lightest for backgrounds or success states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the Ocean Breeze color hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ocean Breeze palette uses #0EA5E9, #06B6D4, #14B8A6, #10B981, and #34D399—sky blue through cyan, teal, emerald, and mint. Pair it with neutrals and check WCAG contrast for text.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the forest green color code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard forest green color code on the web is hex #228B22. In RGB that is rgb(34, 139, 34). UK searches for forest green colour code use the same hex value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the RGB value of forest green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For CSS forestgreen (#228B22), the RGB value is RGB(34, 139, 34). Deep UI forest greens such as #065F46 use RGB(6, 95, 70).',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors make forest green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In traditional paint mixing (RYB), forest green is approximated by combining blue and yellow in roughly a 1:2 ratio—more yellow than blue—then adjusting with black or white for depth and lightness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is forest green dark or light?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Forest green is a medium-dark green: darker than lime or spring green, but not as near-black as hunter or bottle green. Hex #228B22 sits around 34% lightness in HSL, so it reads as rich foliage rather than a pastel tint.',
      },
    },
  ],
};

export default function ForestGreenHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-500 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Forest Green Hex Code: #228B22
            </h1>
            <p className="text-emerald-100 text-lg max-w-3xl mb-6">
              Quick reference for forest green hex, RGB, HSL, and colour codes—plus named shades, a UI palette, scheme ideas, and Ocean Breeze colors in one place.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#228B22]"
              role="img"
              aria-label="Forest green color sample, hex 228B22"
            />
            <div className="flex items-center gap-4 text-emerald-100 text-sm flex-wrap">
              <time dateTime="2026-04-11">Published April 11, 2026</time>
              <span>•</span>
              <time dateTime="2026-05-17">Updated May 17, 2026</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              {HERO_SWATCHES.map((c) => (
                <ColorSwatch key={c.hexCode} color={c.hexCode} name={c.colorName} hexCode={c.hexCode} showHexCopyIcon />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <ForestGreenQuickAnswer />
                <ForestGreenShadesTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white">
                      <CopyableHex hex="#228B22" />
                    </strong>{' '}
                    is the forest green hex code most people need first. If you searched for <strong className="text-gray-900 dark:text-white">forest green hex code</strong>,{' '}
                    <strong className="text-gray-900 dark:text-white">forest green color code</strong>, or{' '}
                    <strong className="text-gray-900 dark:text-white">forest green colour code</strong>, you want a number you can paste into CSS, Figma, or a style guide. This page gives the most common web values, explains why they differ, and shows a full{' '}
                    <strong className="text-gray-900 dark:text-white">forest green color palette</strong> and{' '}
                    <strong className="text-gray-900 dark:text-white">forest green color scheme</strong> starting points. We also list{' '}
                    <strong className="text-gray-900 dark:text-white">Ocean Breeze color</strong> hex codes for the blue–green palette many teams pair with natural greens.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Forest green hex code (the usual answers)
                  </h2>
                  <p className="mb-4">
                    The closest thing to a single canonical <strong className="text-gray-900 dark:text-white">forest green hex</strong> on the web is the CSS named color{' '}
                    <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">forestgreen</code>, which is{' '}
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#228B22" />
                    </strong>{' '}
                    — rgb(34, 139, 34). That is the value browsers resolve when you write{' '}
                    <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">color: forestgreen;</code>. Not sure what to call a hex from a screenshot? Use our{' '}
                    <InlineTagLink href="/tools/color-name-finder">color name finder</InlineTagLink> to match it to the nearest named color.
                  </p>
                  <p className="mb-4">
                    In product and UI design, <strong className="text-gray-900 dark:text-white">color forest green</strong> often means something darker and more evergreen. A widely used deep green is{' '}
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#065F46" />
                    </strong>{' '}
                    (rgb(6, 95, 70)), which anchors the five-step forest palette we use across Theme &amp; Color. Another deep option you may see in branding is{' '}
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#2d5016" />
                    </strong>{' '}
                    (rgb(45, 80, 22)).
                  </p>
                  <p className="mb-6 font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg not-prose flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>CSS named:</span> <CopyableHex hex="#228B22" />
                    <span className="text-gray-400">·</span>
                    <span>Deep UI green:</span> <CopyableHex hex="#065F46" />
                    <span className="text-gray-400">·</span>
                    <span>Dark forest:</span> <CopyableHex hex="#2d5016" />
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Forest green colour code (UK) and RGB
                  </h2>
                  <p className="mb-4">
                    British English searches for <strong className="text-gray-900 dark:text-white">forest green colour code</strong> still expect hex on screen—the format does not change by region. What changes is spelling in copy (<em>colour</em> vs <em>color</em>). For accessibility documentation, list hex, RGB, and HSL so developers anywhere can implement the same appearance.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li className="pl-1">
                      <CopyableHex hex="#228B22" /> → RGB rgb(34, 139, 34)
                    </li>
                    <li className="pl-1">
                      <CopyableHex hex="#065F46" /> → RGB rgb(6, 95, 70)
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Forest green color palette (five hex codes)
                  </h2>
                  <p className="mb-4">
                    A practical <strong className="text-gray-900 dark:text-white">forest green color palette</strong> needs more than one swatch: dark tones for navigation and type on light UI, mid greens for primary buttons and links, and a minty light green for backgrounds or success. The set below matches our{' '}
                    <InlineTagLink href="/blog/forest-green">Forest Green palette story</InlineTagLink> so you can jump between the quick codes here and the longer brand-and-UI guide.
                  </p>
                  <p className="mb-4 text-gray-600 dark:text-gray-400 not-prose flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
                    <CopyableHex hex="#065F46" />
                    <span>·</span>
                    <CopyableHex hex="#047857" />
                    <span>·</span>
                    <CopyableHex hex="#059669" />
                    <span>·</span>
                    <CopyableHex hex="#10B981" />
                    <span>·</span>
                    <CopyableHex hex="#34D399" />
                  </p>
                  <p className="mb-6">
                    To extend this range (hover, disabled, dark mode), use the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> starting from any of these hex values.
                  </p>
                  <p className="mb-6">
                    If you are planning physical-media palettes or art-style blends, test combinations in our{' '}
                    <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink> to see how forest tones shift in an RYB paint model.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Forest green color scheme ideas
                  </h2>
                  <p className="mb-4">
                    A <strong className="text-gray-900 dark:text-white">forest green color scheme</strong> is how you combine forest greens with neutrals and accents. Reliable patterns:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li>
                      <strong className="text-gray-900 dark:text-white">Forest green + warm off-white</strong> — Use <CopyableHex hex="#fafaf9" /> or cream with <CopyableHex hex="#065F46" /> text or headers for editorial, wellness, and eco brands.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Forest green + charcoal</strong> — <CopyableHex hex="#111827" /> body text with <CopyableHex hex="#059669" /> buttons keeps contrast strong on white (always verify with a checker).
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Forest green + brass gold</strong> — Muted gold (<CopyableHex hex="#b45309" /> or softer metallics) with deep green reads premium without defaulting to black and gold.
                    </li>
                  </ul>
                  <p className="mb-6">
                    Before shipping, run your text, links, and CTA pairs through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> so your forest green scheme stays WCAG-aligned.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Ocean Breeze color and Ocean Breeze colour hex codes
                  </h2>
                  <p className="mb-4">
                    Teams looking up <strong className="text-gray-900 dark:text-white">Ocean Breeze color</strong> or{' '}
                    <strong className="text-gray-900 dark:text-white">Ocean Breeze colour</strong> usually want the full blue-to-mint ramp in one line. Here are the five hex codes; the deep dive (roles, CSS variables, accessibility) lives in the{' '}
                    <InlineTagLink href="/blog/ocean-breeze">Ocean Breeze palette guide</InlineTagLink>.
                  </p>
                  <p className="mb-4 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg not-prose flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
                    <CopyableHex hex="#0EA5E9" />
                    <span>·</span>
                    <CopyableHex hex="#06B6D4" />
                    <span>·</span>
                    <CopyableHex hex="#14B8A6" />
                    <span>·</span>
                    <CopyableHex hex="#10B981" />
                    <span>·</span>
                    <CopyableHex hex="#34D399" />
                  </p>
                  <p className="mb-6">
                    Ocean Breeze shares two greens with the forest palette (<CopyableHex hex="#10B981" />, <CopyableHex hex="#34D399" />), so you can bridge a calm blue UI into natural green accents without inventing new tokens.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    HSL, CMYK, and design-token formats
                  </h2>
                  <p className="mb-4">
                    Beyond the <strong className="text-gray-900 dark:text-white">forest green hex code</strong>, teams document the same appearance in HSL and CMYK so print vendors and CSS authors stay aligned. For{' '}
                    <CopyableHex hex="#228B22" />, HSL is approximately <strong className="text-gray-900 dark:text-white">hsl(120, 61%, 34%)</strong>—a yellow-green hue at moderate saturation and mid-low lightness. That HSL profile explains why forest green feels “wooded” rather than neon: it is not fully saturated like pure green (#00FF00), and it is not washed out like a mint tint.
                  </p>
                  <p className="mb-4">
                    CMYK approximations for coated stock often land near <strong className="text-gray-900 dark:text-white">C76 M12 Y100 K20</strong>, but paper, ink, and dot gain shift results. Always request a physical proof when packaging must match a screen token. In Figma or design tokens, store hex as the source of truth and derive RGB/HSL programmatically so refactors do not drift.
                  </p>
                  <p className="mb-6">
                    If your stack uses OKLCH or LCH for perceptual uniformity, convert from <CopyableHex hex="#228B22" /> once, then build lighter tints and darker shades as consistent steps rather than hand-picking random greens. That discipline keeps hover, focus, and disabled states visually related on dashboards and marketing sites.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Forest green vs hunter green vs emerald
                  </h2>
                  <p className="mb-4">
                    Searchers often conflate names. <strong className="text-gray-900 dark:text-white">Forest green</strong> (<CopyableHex hex="#228B22" />) is the CSS named color—medium-dark and clearly green on white. <strong className="text-gray-900 dark:text-white">Hunter green</strong> (<CopyableHex hex="#355E3B" />) is cooler and deeper, common in outerwear and heritage logos. <strong className="text-gray-900 dark:text-white">Emerald</strong> UI greens such as <CopyableHex hex="#059669" /> are brighter and more digital-native, popular in fintech and SaaS success states.
                  </p>
                  <p className="mb-4">
                    When you write a style guide, define which name maps to which hex. Saying “use forest green” without a number invites developers to pick #228B22, #065F46, or #006400 interchangeably. Competitor pages that only list one swatch lose trust; this guide lists ten related stops in the table above so art directors can brief backgrounds, borders, and CTAs separately.
                  </p>
                  <p className="mb-6">
                    For outdoor and sustainability brands, pair canonical forest with photographic greens in hero imagery, then lock UI chrome to tokenized hex values. Users forgive natural variation in photos; they do not forgive inconsistent button greens across checkout steps.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Forest green in UI and accessibility
                  </h2>
                  <p className="mb-4">
                    Forest green works for navigation bars, success toasts, and eco badges when contrast is verified. White text on <CopyableHex hex="#228B22" /> often passes WCAG AA for large bold headings but may fail for small body copy—always test your exact font weight and size. On light backgrounds, use deep greens like <CopyableHex hex="#065F46" /> for text and links instead of the mid-tone forest swatch, which can look muddy at 14px.
                  </p>
                  <p className="mb-4">
                    Dark mode needs separate tokens: a forest header that feels rich on white can glow too brightly on #111827. Desaturate or darken accent greens by 10–15% for dark surfaces, and re-run contrast for every state (hover, focus, disabled). The{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> catches failures before launch.
                  </p>
                  <p className="mb-6">
                    Color-blind users distinguish forest from red-orange more reliably than pure red vs green, but never rely on hue alone for errors—pair color with icons and text. For data visualization, use forest as one series color among blues and ambers so charts remain readable in deuteranopia simulations.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Forest green in branding and print
                  </h2>
                  <p className="mb-4">
                    National parks, garden centers, organic food, and outdoor apparel gravitate toward forest greens because the hue signals growth, stability, and the natural world without the clinical feel of hospital teal. When the <strong className="text-gray-900 dark:text-white">forest green color code</strong> anchors a logo, keep secondary colors restrained—warm off-white, charcoal, or muted gold—so the mark does not compete with photography.
                  </p>
                  <p className="mb-4">
                    UK teams searching <strong className="text-gray-900 dark:text-white">forest green colour code</strong> should still specify hex in digital handoffs; CMYK and Pantone references belong in print appendices. If you must match Pantone 349 C or similar, note the delta from #228B22 on screen so stakeholders expect a slight shift on cartons and signage.
                  </p>
                  <p className="mb-6">
                    Merchandise and uniforms sometimes need dye lots darker than web forest. Document a “print forest” token (#1A4D1A or hunter-adjacent) alongside the web canonical so brand police do not reject legitimate manufacturing variance.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Also searched for
                  </h2>
                  <dl className="space-y-6 not-prose mb-8">
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is the forest green color code?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        The standard forest green color code for web and CSS is hex <strong className="text-gray-900 dark:text-white">#228B22</strong>. British English searches for forest green colour code use the same hex value—only spelling in copy changes, not the digits you paste into Figma or stylesheets.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is the RGB value of forest green?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        For #228B22, the RGB value of forest green is <strong className="text-gray-900 dark:text-white">RGB(34, 139, 34)</strong>. Deep UI greens such as <CopyableHex hex="#065F46" /> use RGB(6, 95, 70) when you need darker navigation or button fills.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What colors make forest green?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        In traditional paint mixing (RYB), forest green is approximated by combining <strong className="text-gray-900 dark:text-white">blue and yellow in roughly a 1:2 ratio</strong>—more yellow than blue—then adjusting with black or white for depth. On screen, you rarely mix channels manually; use <CopyableHex hex="#228B22" /> or test blends in our{' '}
                        <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink>.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">Is forest green dark or light?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Forest green is <strong className="text-gray-900 dark:text-white">medium-dark</strong>: darker than lime or spring green, but not as near-black as hunter or bottle green. At roughly 34% HSL lightness, #228B22 reads as rich foliage rather than a pastel tint—use lighter rows in the shade table above for backgrounds.
                      </dd>
                    </div>
                  </dl>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Related colors
                  </h2>
                  <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <li>
                      <InlineTagLink href="/blog/sage-green-hex-code">Sage Green Hex Code</InlineTagLink> — muted gray-green for wellness and lifestyle UI
                    </li>
                    <li>
                      <InlineTagLink href="/blog/navy-blue-hex-code">Navy Blue Hex Code</InlineTagLink> — deep blue anchor for trust-heavy layouts
                    </li>
                    <li>
                      <InlineTagLink href="/blog/terracotta-hex-code">Terracotta Hex Code</InlineTagLink> — warm clay accent that pairs with natural greens
                    </li>
                    <li>
                      <InlineTagLink href="/blog/ocean-breeze-hex-code">Ocean Breeze Hex Codes</InlineTagLink> — blue-to-mint ramp that bridges cool UI into green accents
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Where to go next
                  </h2>
                  <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <li>
                      <InlineTagLink href="/blog/forest-green">Forest Green: meaning, psychology, and best uses</InlineTagLink>
                    </li>
                    <li>
                      <InlineTagLink href="/blog/ocean-breeze">Ocean Breeze: full palette and accessibility notes</InlineTagLink>
                    </li>
                    <li>
                      <InlineTagLink href="/tools/palette-generator">Generate harmonies from any forest green hex</InlineTagLink>
                    </li>
                    <li>
                      <InlineTagLink href="/tools/color-mixer">Mix forest green with accent colors in the Color Mixing Simulator</InlineTagLink>
                    </li>
                  </ul>

                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20 space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Forest green palette (copy hex)
                    </h3>
                    <ColorPaletteClient colors={FOREST_PALETTE} designTitle="Forest Green" showHexCopyIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Ocean Breeze quick copy
                    </h3>
                    <ColorPaletteClient colors={OCEAN_BREEZE_QUICK} designTitle="Ocean Breeze" showHexCopyIcon />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
