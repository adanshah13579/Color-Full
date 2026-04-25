import InlineTagLink from '../../components/InlineTagLink';
import ContrastCheckerTool from './ContrastCheckerTool';

export const metadata = {
  title: 'WCAG Color Contrast Checker — AA/AAA | Theme & Color',
  description: 'Check your color contrast ratio for WCAG 2.1 AA and AAA compliance. Free tool for designers and developers — instant results for text and background colors.',
};

const contrastCheckerStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WCAG Color Contrast Checker',
  description: 'Free WCAG color contrast checker for AA and AAA accessibility compliance. Instant results for text and background color pairs.',
  url: 'https://themeandcolor.com/tools/contrast-checker',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function ContrastCheckerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contrastCheckerStructuredData) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-6">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Accessibility Contrast Checker
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Check contrast between text and background colors. Enter your colors below to see the ratio and WCAG AA/AAA pass or fail. Build palettes first with our <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, then test pairs here.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Also try our <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink> for paint-style RYB color blends.
            </p>
          </header>
        </div>

        <ContrastCheckerTool />

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              WCAG Color Contrast Checker — AA &amp; AAA Compliance
            </h2>
            <p className="leading-relaxed">
              WCAG contrast ratios measure how readable text is against its background by comparing lightness difference between two colors on a scale from 1:1 to 21:1. These ratios matter because low contrast makes content harder to read for users with low vision, color-vision differences, or poor lighting conditions, while compliant contrast improves usability and helps your UI meet accessibility requirements.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              How to check color contrast
            </h3>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Enter foreground color.</li>
              <li>Enter background color.</li>
              <li>View contrast ratio.</li>
              <li>Check AA/AAA pass/fail.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Understanding WCAG contrast ratios
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Text Type</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">WCAG AA</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">WCAG AAA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Normal text</td>
                    <td className="px-4 py-2">4.5:1</td>
                    <td className="px-4 py-2">7:1</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Large text</td>
                    <td className="px-4 py-2">3:1</td>
                    <td className="px-4 py-2">4.5:1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Frequently asked questions
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What is WCAG contrast ratio?</h4>
                <p className="leading-relaxed">
                  WCAG contrast ratio is the numeric comparison between a foreground color and background color that indicates readability, where higher ratios mean stronger visual separation.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What contrast ratio do I need for text accessibility?</h4>
                <p className="leading-relaxed">
                  Normal text needs at least 4.5:1 for AA and 7:1 for AAA. Large text needs at least 3:1 for AA and 4.5:1 for AAA.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Does contrast matter for buttons and icons?</h4>
                <p className="leading-relaxed">
                  Yes. Button labels, iconography that conveys meaning, and other UI elements should maintain sufficient contrast so users can identify and use controls reliably.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How do I fix low contrast in my design?</h4>
                <p className="leading-relaxed">
                  Increase the difference between foreground and background by darkening text, lightening the background, or selecting a stronger accessible color pair, then re-test until AA or AAA passes.
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
