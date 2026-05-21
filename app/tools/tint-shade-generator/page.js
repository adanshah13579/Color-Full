import InlineTagLink from '../../components/InlineTagLink';
import TintShadeGeneratorTool from './TintShadeGeneratorTool';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/tools/tint-shade-generator',
  title: 'Tint & Shade Generator — Create Color Scales Instantly',
  description:
    'Generate 10 tints and 10 shades for any color instantly. Copy as CSS variables or Tailwind config. Free online tint and shade generator for designers.',
  keywords: [
    'tint shade generator',
    'color scale generator',
    'Tailwind colors',
    'CSS variables',
    'design system colors',
    'Theme & Color',
  ],
});

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tint & Shade Generator',
  description: 'Generate tints and shades for any color. Export as CSS variables or Tailwind color scale. Free online tool.',
  url: 'https://themeandcolor.com/tools/tint-shade-generator',
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
      name: 'What is the difference between a tint and a shade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tint mixes a color with white, making it lighter. A shade mixes a color with black, making it darker. UI scales often use tints for backgrounds and hover states and shades for text, borders, and pressed buttons.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I create a color scale for my design system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with one brand hex, generate ten tints and ten shades, then map the lightest tints to surface tokens and the darkest shades to text or chrome. Export CSS variables or Tailwind keys and document which step is your primary 500/base.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I generate Tailwind color shades?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the Copy as Tailwind config button to get a brand object with 100–900 steps mapped from your generated tints and shades, with 500 set to your base hex.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to create light and dark versions of a color?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mix systematically with white for lights and black for darks rather than guessing in the picker—this keeps hue consistent. Verify contrast on each pair with a WCAG checker before shipping UI.',
      },
    },
  ],
};

export default function TintShadeGeneratorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mx-auto mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Tint &amp; Shade Generator — Create Color Scales Instantly
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Enter a base hex to get ten tints (color + white) and ten shades (color + black). Copy individual codes or export a full CSS or Tailwind scale.
          </p>
        </header>

        <TintShadeGeneratorTool />

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What is a Tint and Shade Generator?</h2>
            <p className="leading-relaxed">
              Tints and shades are the building blocks of UI color scales. A tint lightens your base by mixing in white—ideal for subtle backgrounds, hover washes, and disabled fields. A shade darkens the base with black—useful for borders, secondary text on light UI, and navigation chrome. This tool generates both ladders from one hex so you do not hand-pick ten slightly different greens in Figma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Generate Tints and Shades</h2>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Enter your base color hex code (default #228B22 shown on load).</li>
              <li>The tool generates 10 tints and 10 shades instantly as you type.</li>
              <li>Copy individual hex codes or export all values as CSS custom properties.</li>
              <li>Paste the Tailwind config snippet into tailwind.config.js or use tokens in Figma.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tints vs Shades — What is the Difference?</h2>
            <p className="leading-relaxed mb-4">
              A <strong className="text-gray-900 dark:text-white">tint</strong> is your color mixed with white. Forest green #228B22 at 30% white might become #4BAF4F—a softer green for table stripes. A <strong className="text-gray-900 dark:text-white">shade</strong> mixes black in. The same green at 40% black could land near #145214 for sidebar backgrounds. Tints read airy; shades read grounded. Using both from one base keeps the family cohesive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Use Color Scales in UI Design</h2>
            <p className="leading-relaxed">
              Map the lightest tint (e.g. 90% white on #228B22 → a pale #E8F5E9) to page backgrounds. Mid tints work for hover on outline buttons. Keep #228B22 as the primary filled CTA. Use 20–40% shades for label text on tinted panels, and the darkest shade for focus rings or dark-mode chrome. Example: background #E8F5E9, primary #228B22, hover tint #4BAF4F, body text #145214—then run #145214 on #E8F5E9 through our{' '}
              <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before launch.
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
            Explore harmonies with the{' '}
            <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, name your base color with the{' '}
            <InlineTagLink href="/tools/color-name-finder">color name finder</InlineTagLink>, and test accessibility with the{' '}
            <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
          </p>
        </div>
      </div>
    </div>
  );
}
