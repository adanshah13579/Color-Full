import InlineTagLink from '../../components/InlineTagLink';
import ColorNameFinderTool from './ColorNameFinderTool';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import { buildFaqSchema, buildWebApplicationSchema } from '../../../lib/aeoSchema';
import AeoDirectAnswer from '../../blog/components/AeoDirectAnswer';

export const metadata = buildPageMetadata({
  path: '/tools/color-name-finder',
  title: 'Color Name Finder — Find Any Hex Code Color Name Free',
  description:
    'Free color name finder: paste any hex code and get the closest color name instantly. RGB, HSL, CMYK values. Works for #228B22, #B2AC88, #E2725B & more.',
  keywords: [
    'color name finder',
    'hex to color name',
    'what color is this hex',
    'color name from hex',
    'find color name',
    'RGB HSL CMYK',
    'CSS named colors',
    'Theme & Color',
  ],
});

const webAppSchema = buildWebApplicationSchema({
  name: 'Color Name Finder',
  description:
    'Free online color name finder. Paste a hex code to get the closest named color, RGB, HSL, CMYK values, and similar swatches instantly.',
  path: '/tools/color-name-finder',
  featureList: [
    'Hex to color name lookup',
    'RGB, HSL, and CMYK conversion',
    'Similar named color suggestions',
    'One-click copy for design handoff',
  ],
});

const faqSchema = buildFaqSchema([
  {
    name: 'What is a color name finder?',
    text: 'A color name finder is a free tool that matches a hex code to the closest human-readable color name—such as forestgreen for #228B22 or sage for #B2AC88—plus RGB, HSL, and CMYK values you can copy.',
  },
  {
    name: 'How do I find the name of a color from a hex code?',
    text: 'Paste your hex code (with or without #) into the Color Name Finder. The tool compares your color to hundreds of named colors using RGB distance and returns the closest match with copy-ready values.',
  },
  {
    name: 'What is the closest color name to #228B22?',
    text: 'Hex #228B22 is the CSS named color forestgreen. In RGB it is (34, 139, 34)—a medium-dark green common in eco, outdoor, and finance branding.',
  },
  {
    name: 'What is the closest color name to #B2AC88?',
    text: 'Hex #B2AC88 is closest to sage green—a muted gray-green with RGB(178, 172, 136). Designers use it for wellness, organic food, and lifestyle palettes.',
  },
  {
    name: 'Can I find a color name from RGB values?',
    text: 'Convert RGB to hex first, then paste into the finder. The tool outputs RGB, HSL, and CMYK from the same hex so developers and print vendors stay aligned.',
  },
]);

export default function ColorNameFinderPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mx-auto mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Color Name Finder
          </h1>
          <AeoDirectAnswer
            question="What is a color name finder?"
            answer="A color name finder matches any hex code to its closest color name—for example #228B22 is forestgreen and #B2AC88 is sage green. Paste a hex below to get the name, RGB, HSL, and CMYK instantly."
            codes={[
              { label: '#228B22', value: 'forestgreen' },
              { label: '#B2AC88', value: 'sage green' },
              { label: '#E2725B', value: 'terracotta' },
            ]}
          />
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Paste a hex code to get the closest color name, full RGB/HSL/CMYK values, and similar swatches—free, instant, no sign-up.
          </p>
        </header>

        <ColorNameFinderTool />

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Find a Color Name from a Hex Code</h2>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Enter or paste your hex code in the input field (with or without the # prefix).</li>
              <li>The tool instantly shows the closest named color and a live preview swatch.</li>
              <li>Copy the color name, hex, RGB, or HSL with one click.</li>
              <li>Explore similar named colors nearby and click a swatch to try another hex.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Popular Hex Codes &amp; Color Names</h2>
            <ul className="space-y-2 leading-relaxed">
              <li>
                <strong className="text-gray-900 dark:text-white">#228B22</strong> — forestgreen (forest green)
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#B2AC88</strong> — sage green
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#E2725B</strong> — terracotta
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#E0B0FF</strong> — mauve
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#F97316</strong> — sunset orange
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              See full shade tables on our{' '}
              <InlineTagLink href="/blog/sage-green-hex-code">sage green</InlineTagLink>,{' '}
              <InlineTagLink href="/blog/forest-green-hex-code">forest green</InlineTagLink>, and{' '}
              <InlineTagLink href="/blog/sunset-color-palette">sunset palette</InlineTagLink> guides.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name}>
                  <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                  <dd className="mt-1 leading-relaxed">{item.acceptedAnswer.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="leading-relaxed">
            Build palettes from your base color with our{' '}
            <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, validate text pairs in the{' '}
            <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>, or generate light and dark steps with the{' '}
            <InlineTagLink href="/tools/tint-shade-generator">tint and shade generator</InlineTagLink>.
          </p>
        </div>
      </div>
    </div>
  );
}
