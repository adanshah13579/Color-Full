import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';

export const metadata = {
  title: 'Ocean Breeze Hex Codes: Blue & Teal Color Codes (Copy-Paste)',
  description:
    'Ocean breeze hex codes include #0EA5E9, #06B6D4 and more. Copy the full palette, see shades and pairings, and build your own with our free color tool.',
};

const OCEAN_BREEZE = [
  { hexCode: '#0EA5E9', colorName: 'Sky Blue', rgbCode: 'rgb(14, 165, 233)' },
  { hexCode: '#06B6D4', colorName: 'Cyan', rgbCode: 'rgb(6, 182, 212)' },
  { hexCode: '#14B8A6', colorName: 'Teal', rgbCode: 'rgb(20, 184, 166)' },
  { hexCode: '#10B981', colorName: 'Emerald', rgbCode: 'rgb(16, 185, 129)' },
  { hexCode: '#34D399', colorName: 'Mint', rgbCode: 'rgb(52, 211, 153)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the Ocean Breeze hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ocean Breeze palette uses #0EA5E9, #06B6D4, #14B8A6, #10B981, and #34D399.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ocean Breeze color or colour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are correct spellings. Search intent is the same: people want the same hex and RGB values.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Ocean Breeze for UI text colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Ocean Breeze primarily for accents, buttons, and highlights. For body text, use high-contrast dark neutrals and verify combinations with a WCAG contrast checker.',
      },
    },
  ],
};

export default function OceanBreezeHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-br from-sky-600 via-cyan-500 to-emerald-500 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-cyan-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Ocean Breeze Hex Codes: Blue &amp; Teal Palette
            </h1>
            <div className="flex items-center gap-4 text-cyan-100 text-sm">
              <time dateTime="2026-04-17">April 17, 2026</time>
              <span>•</span>
              <span>6 min read</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              {OCEAN_BREEZE.map((c) => (
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
                    Ocean Breeze starts with <strong className="text-gray-900 dark:text-white">#0EA5E9</strong> and <strong className="text-gray-900 dark:text-white">#06B6D4</strong>. If you searched for <strong className="text-gray-900 dark:text-white">Ocean Breeze color</strong>,{' '}
                    <strong className="text-gray-900 dark:text-white">Ocean Breeze colour</strong>, or{' '}
                    <strong className="text-gray-900 dark:text-white">Ocean Breeze hex code</strong>, you likely need copy-paste values fast. This page gives every hex and RGB code in one place, plus practical guidance for UI and brand usage.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Ocean Breeze Hex and RGB Codes (Quick Copy)
                  </h2>
                  <p className="mb-4 font-mono text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    #0EA5E9 · #06B6D4 · #14B8A6 · #10B981 · #34D399
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li><strong className="text-gray-900 dark:text-white">Sky Blue:</strong> #0EA5E9 · rgb(14, 165, 233)</li>
                    <li><strong className="text-gray-900 dark:text-white">Cyan:</strong> #06B6D4 · rgb(6, 182, 212)</li>
                    <li><strong className="text-gray-900 dark:text-white">Teal:</strong> #14B8A6 · rgb(20, 184, 166)</li>
                    <li><strong className="text-gray-900 dark:text-white">Emerald:</strong> #10B981 · rgb(16, 185, 129)</li>
                    <li><strong className="text-gray-900 dark:text-white">Mint:</strong> #34D399 · rgb(52, 211, 153)</li>
                  </ul>

                  <div className="not-prose flex flex-wrap gap-4 mb-8">
                    {OCEAN_BREEZE.map((c) => (
                      <ColorSwatch key={`plate-${c.hexCode}`} color={c.hexCode} name={c.colorName} hexCode={c.hexCode} />
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Ocean Breeze color vs colour: does spelling matter?
                  </h2>
                  <p className="mb-6">
                    No. <em>Color</em> and <em>colour</em> point to the same palette values. Keep both spellings naturally in your copy, but do not duplicate pages for each variation. One strong URL with clean content is better than split relevance.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    CSS Variables (Ready to Paste)
                  </h2>
                  <p className="mb-4">
                    Use one source of truth in code and map each shade to a clear role. This reduces random color drift across product screens.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm overflow-x-auto mb-6">
{`:root {
  --ob-sky: #0EA5E9;
  --ob-cyan: #06B6D4;
  --ob-teal: #14B8A6;
  --ob-emerald: #10B981;
  --ob-mint: #34D399;
}`}
                  </pre>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Practical UI Usage (Where teams mess up)
                  </h2>
                  <ul className="mb-6">
                    <li><strong>Use blue/cyan for primaries:</strong> keep CTA hierarchy stable instead of switching accent hues per section.</li>
                    <li><strong>Use mint for surfaces, not paragraph text:</strong> mint text fails contrast on light backgrounds too easily.</li>
                    <li><strong>Keep neutrals for long-form readability:</strong> colors should guide attention, not replace body typography.</li>
                    <li><strong>Test every pair:</strong> run buttons, links, and badge text through the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.</li>
                  </ul>

                  <p className="mb-6">
                    If you want the strategic overview (psychology, brand positioning, and use cases), read the full{' '}
                    <InlineTagLink href="/blog/ocean-breeze">Ocean Breeze palette guide</InlineTagLink>. If you need adjacent green references, use our{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">Forest Green hex guide</InlineTagLink>.
                  </p>

                  <p className="mb-8">
                    Need more shades from these anchors? Open the{' '}
                    <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> and generate monochromatic or analogous variants from any Ocean Breeze hex above.
                  </p>
                  <p className="mb-8">
                    Want to test what colors make when mixed like paint? Use the{' '}
                    <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink> to blend Ocean Breeze tones with warm or neutral accents using an RYB model.
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={OCEAN_BREEZE} designTitle="Ocean Breeze" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
