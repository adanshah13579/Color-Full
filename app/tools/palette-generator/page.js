import InlineTagLink from '../../components/InlineTagLink';
import PaletteGeneratorTool from './PaletteGeneratorTool';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/tools/palette-generator',
  title: 'Color Palette Generator',
  description:
    'Free online color palette generator for UI, web, and brand design. Create harmonious palettes from one base color and export hex codes.',
  keywords: [
    'palette generator',
    'color palette',
    'hex codes',
    'brand colors',
    'UI design',
    'harmony',
    'Theme & Color',
  ],
});

const paletteGeneratorStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Color Palette Generator',
  description: 'Free online color palette generator for UI, web, and brand design. Generate harmonious palettes and export hex codes.',
  url: 'https://themeandcolor.com/tools/palette-generator',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function PaletteGeneratorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paletteGeneratorStructuredData) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-6">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Color Palette Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Create coordinated color palettes from one base color. Pick a color and harmony type below, then copy hex codes for your projects. Use our <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> to verify text and background pairs.
            </p>
          </header>
        </div>

        <PaletteGeneratorTool />

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Free Color Palette Generator for UI &amp; Web Design
            </h2>
            <p className="mb-4 leading-relaxed">
              This free color palette generator helps you turn one base color into coordinated palettes you can use in websites, apps, and brand systems. Select a harmony type to generate matching colors instantly, then copy clean hex codes for design tools and production code.
            </p>
            <p className="leading-relaxed">
              It is built for designers shaping interfaces, developers implementing design tokens, and brand teams creating consistent visual direction across products and marketing. Use it to move faster, keep color choices consistent, and reduce guesswork in collaboration.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              How to use the palette generator
            </h3>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Pick a base color.</li>
              <li>Choose a harmony type.</li>
              <li>Generate your palette.</li>
              <li>Check color contrast for accessibility.</li>
              <li>Export or copy the hex codes.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Frequently asked questions
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What is a color palette generator?</h4>
                <p className="leading-relaxed">
                  A color palette generator is a tool that creates related color sets from a starting color using harmony rules. It saves time by giving you usable combinations and exact hex values for UI and web design.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How do I create an accessible color palette?</h4>
                <p className="leading-relaxed">
                  Start with a base color, generate harmonies, then test text and background pairs for readable contrast. Use a contrast checker to validate WCAG targets before shipping.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Can I export the palette as CSS or hex codes?</h4>
                <p className="leading-relaxed">
                  Yes. You can copy individual hex values or full palette values and paste them into CSS variables, design tokens, Figma styles, or brand docs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What color harmonies does this tool support?</h4>
                <p className="leading-relaxed">
                  The generator supports monochromatic, analogous, complementary, triadic, split-complementary, and tetradic harmonies.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Ad Space (728x90)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
