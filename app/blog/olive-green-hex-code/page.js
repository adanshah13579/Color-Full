import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { PalettePairingsSection } from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import CopyableHex from '../forest-green-hex-code/CopyableHex';
import { OliveGreenQuickAnswer, OliveGreenShadesTable } from './OliveGreenHexLead';

export const metadata = buildPageMetadata({
  path: '/blog/olive-green-hex-code',
  title: 'Olive Green Hex Code: #808000 — Shades, Palettes & Copy-Paste',
  description:
    'Olive green hex code is #808000. Copy hex codes for 10 olive shades, see palette pairings with terracotta, navy and cream, and explore UI examples.',
  keywords: ['olive green hex', '#808000', 'olive shades', 'olive palette', 'RGB', 'HSL', 'Theme & Color'],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: '2026-05-21T00:00:00.000Z',
  },
});

const OLIVE_PALETTE = [
  { hexCode: '#808000', colorName: 'Olive', rgbCode: 'rgb(128, 128, 0)' },
  { hexCode: '#556B2F', colorName: 'Dark olive', rgbCode: 'rgb(85, 107, 47)' },
  { hexCode: '#E2725B', colorName: 'Terracotta', rgbCode: 'rgb(226, 114, 91)' },
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#FFF8F0', colorName: 'Cream', rgbCode: 'rgb(255, 248, 240)' },
];

const HERO_SWATCHES = [
  { hexCode: '#808000', colorName: 'CSS olive', rgbCode: 'rgb(128, 128, 0)' },
  { hexCode: '#556B2F', colorName: 'Dark olive green', rgbCode: 'rgb(85, 107, 47)' },
  { hexCode: '#3D4A1F', colorName: 'Moss', rgbCode: 'rgb(61, 74, 31)' },
];

const OLIVE_PAIRINGS = [
  {
    title: 'Olive + Terracotta + Cream',
    body: 'Mediterranean craft and food brands: olive structure (#808000), terracotta CTAs (#E2725B), cream reading surfaces (#FFF8F0). Add sand (#D4C4A8) for dividers if you need a fourth neutral.',
    swatches: ['#808000', '#E2725B', '#FFF8F0'],
  },
  {
    title: 'Olive + Navy + Gold',
    body: 'Heritage outdoor and institutional trust: navy headers (#000080), olive secondary badges (#808000), gold rules (#FFD700) on white data panels.',
    swatches: ['#808000', '#000080', '#FFD700'],
  },
  {
    title: 'Olive + Sage + Sand',
    body: 'Wellness and botanical UI: sage (#B2AC88) for calm backgrounds, olive for navigation, sand (#D4C4A8) for cards—keeps chroma lower than bright mint greens.',
    swatches: ['#808000', '#B2AC88', '#D4C4A8'],
  },
  {
    title: 'Olive + Brown + Beige',
    body: 'Military-adjacent and workwear aesthetics: brown typography (#5C4033) on beige (#F5F5DC), olive for accents and utility stripes—verify contrast on small type.',
    swatches: ['#808000', '#5C4033', '#F5F5DC'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the olive green hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The CSS named color olive is #808000, which is RGB(128, 128, 0) and HSL(60, 100%, 25%). Product teams often use darker olives such as #556B2F for navigation—document your canonical hex in a style guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors pair with olive green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terracotta (#E2725B), navy (#000080), cream (#FFF8F0), sage (#B2AC88), and warm brown (#5C4033) are reliable olive partners. Always verify text and button contrast with a WCAG checker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is olive green the same as army green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not exactly. Olive (#808000) is a balanced yellow-green at 25% lightness. Army green (#4B5320) is darker and grayer. Use separate tokens so UI hover states do not drift between them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is olive green good for websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—for outdoor, sustainability, and heritage brands when used as structure—not as full-screen saturated fills. Pair with cream or off-white content wells and test white-on-olive text for accessibility.',
      },
    },
  ],
};

export default function OliveGreenHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-[#2F2F1A] via-[#556B2F] to-[#808000] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-lime-100/90 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Olive Green Hex Code: #808000 — Shades, Palettes &amp; Copy-Paste
            </h1>
            <p className="text-lime-100/95 text-lg max-w-3xl mb-6">
              Olive green hex code is <strong className="text-white font-semibold">#808000</strong> (RGB 128, 128, 0). Copy ten shades from pale yellow-green to deep dark olive, four palette pairings, and UI notes below.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#808000]"
              role="img"
              aria-label="Olive green color sample, hex 808000"
            />
            <div className="flex items-center gap-4 text-lime-100/90 text-sm flex-wrap">
              <time dateTime="2026-05-21">May 21, 2026</time>
              <span>•</span>
              <span>9 min read</span>
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
                <OliveGreenQuickAnswer />
                <OliveGreenShadesTable />

                <PalettePairingsSection
                  title="Olive Green Palette Pairings"
                  intro="Four olive green combinations with copy-ready hex codes—warm clay, cool navy, muted sage, and earthy brown neutrals."
                  pairings={OLIVE_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#808000" />
                    </strong>{' '}
                    is the olive green hex code most designers need first. If you searched for <strong className="text-gray-900 dark:text-white">olive green hex code</strong>,{' '}
                    <strong className="text-gray-900 dark:text-white">olive green color code</strong>, or <strong className="text-gray-900 dark:text-white">olive hex</strong>, you want a value that reads as muted yellow-green—not bright lawn green and not gray sage. CSS resolves{' '}
                    <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">color: olive;</code> to this exact hex. Deeper UI olives such as{' '}
                    <strong className="text-gray-900 dark:text-white not-prose">
                      <CopyableHex hex="#556B2F" />
                    </strong>{' '}
                    and moss <CopyableHex hex="#3D4A1F" /> often feel more premium on navigation than the mid-tone alone.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Olive green in UI &amp; web design</h2>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Navigation and utility chrome.</strong> Olive works for outdoor retail headers, camping gear apps, and sustainability portals when you pair it with cream (#FFF8F0) content wells. White text on <CopyableHex hex="#808000" /> can pass WCAG AA for large bold labels—run your exact font through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before shipping 14px body copy on olive bands.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Promotions with terracotta.</strong> Olive structure plus terracotta CTAs (#E2725B) signals Mediterranean warmth without neon orange. Keep product photography on neutral sand so two greens do not compete—see our{' '}
                    <InlineTagLink href="/blog/terracotta-hex-code">terracotta hex guide</InlineTagLink> for clay-tone ramps.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Maps, badges, and status.</strong> Use pale yellow-green rows from the shade table for map backgrounds; reserve <CopyableHex hex="#808000" /> for park boundaries and eco badges. For success states, prefer brighter yellow-green (#9ACD32) so users do not confuse confirmation with olive navigation.
                  </p>
                  <p className="mb-6">
                    Extend hover and disabled steps from <CopyableHex hex="#808000" /> in the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> so tints stay on the same yellow-green hue angle instead of drifting toward mint.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Olive green in branding</h2>
                  <p className="mb-4">
                    Olive evokes olive oil, dry grasslands, and utilitarian workwear—categories where authenticity beats hyper-saturated digital green. Pair with terracotta and cream for food and hospitality; navy and gold when you need institutional weight (think heritage universities and outdoor clubs). Avoid stacking olive with forest green (#228B22) in the same layout unless one is clearly secondary—two natural greens fight for “which is the eco brand color.”
                  </p>
                  <p className="mb-6">
                    Document web olive (#808000) separately from print Pantone or textile dyes; fabric olive often reads grayer under store lighting. When stakeholders ask for “army green,” show #4B5320 from the shade ladder rather than stretching #808000 darker in Photoshop.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose mb-8">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Related colors</h2>
                  <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                    <li>
                      <InlineTagLink href="/blog/forest-green-hex-code">Forest Green Hex Code</InlineTagLink> — richer yellow-green for eco UI
                    </li>
                    <li>
                      <InlineTagLink href="/blog/sage-green-hex-code">Sage Green Hex Code</InlineTagLink> — muted gray-green partner for olive layouts
                    </li>
                    <li>
                      <InlineTagLink href="/blog/terracotta-hex-code">Terracotta Hex Code</InlineTagLink> — warm clay accent beside olive
                    </li>
                  </ul>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Olive palette (copy hex)
                  </h3>
                  <ColorPaletteClient colors={OLIVE_PALETTE} designTitle="Olive Green" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
