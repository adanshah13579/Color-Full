import InlineTagLink from '../../components/InlineTagLink';
import ColorNameFinderTool from './ColorNameFinderTool';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/tools/color-name-finder',
  title: 'Color Name Finder — What Color is This Hex Code?',
  description:
    'Find the name of any color from its hex code instantly. Enter a hex code and get the closest color name, RGB, HSL and CMYK values. Free online tool.',
  keywords: [
    'color name finder',
    'hex to color name',
    'what color is this hex',
    'RGB HSL CMYK',
    'CSS named colors',
    'Theme & Color',
  ],
});

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Color Name Finder',
  description:
    'Find the closest color name for any hex code. Get RGB, HSL, CMYK values and similar named colors instantly.',
  url: 'https://themeandcolor.com/tools/color-name-finder',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I find the name of a color from a hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paste or type your hex code into the Color Name Finder. The tool matches your color against hundreds of named colors using RGB distance and shows the closest name plus RGB, HSL, and CMYK values you can copy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the closest color name to my hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The closest name is the named color in our database with the smallest Euclidean distance to your hex in RGB space. CSS named colors, Tailwind-style labels, and common design color names are all included.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I find a color name from RGB values?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—convert RGB to hex first (or use the values shown in the results panel after entering hex). The finder works from hex; RGB and HSL outputs are generated from the same color for documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common named colors in CSS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CSS defines 140+ named colors such as navy (#000080), forestgreen (#228B22), tomato, steelblue, and rebeccapurple. Browsers resolve names like color: forestgreen to a fixed hex value.',
      },
    },
  ],
};

export default function ColorNameFinderPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mx-auto mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Color Name Finder — What is This Color Called?
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Paste a hex code to get the closest color name, full RGB/HSL/CMYK values, and similar swatches—free, instant, no sign-up.
          </p>
        </header>

        <ColorNameFinderTool />

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What is a Color Name Finder?</h2>
            <p className="leading-relaxed">
              A color name finder answers “what is this color called?” when you only have a hex code from a design file, screenshot, or CSS snippet. You paste the hex; the tool compares it to a large database of named colors and returns the nearest match, plus copy-ready RGB, HSL, and CMYK values for handoff to developers or print vendors.
            </p>
          </section>

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
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Color Names Matter in Design</h2>
            <p className="leading-relaxed">
              Shared names reduce confusion in design systems, Figma libraries, and brand guidelines. When everyone references “Forest Green #228B22” instead of three slightly different greens, tokens stay aligned across web, app, and marketing. A name finder bridges the gap between an anonymous hex from a mood board and the vocabulary your team already uses in CSS and documentation.
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
