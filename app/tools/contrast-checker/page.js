import Link from 'next/link';
import ContrastCheckerTool from './ContrastCheckerTool';

export const metadata = {
  title: 'Accessibility Contrast Checker | Theme and Color',
  description: 'Free color contrast checker for accessibility. Test text and background pairs against WCAG AA and AAA. UI color contrast tool for designers and developers.',
};

export default function ContrastCheckerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-10">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Accessibility Contrast Checker
            </h1>
            <div className="text-gray-600 dark:text-gray-400 space-y-4 text-base leading-relaxed">
              <p>
                An accessibility contrast checker evaluates the contrast ratio between two colors, such as text and background. Use it to check color contrast for UI, marketing, and product design. This WCAG contrast checker reports whether pairs pass AA or AAA and supports designers, UI/UX professionals, frontend developers, and brand designers who need accessible color contrast.
              </p>
              <p>
                If you are building a palette first, use our <Link href="/tools/palette-generator" className="text-blue-600 dark:text-blue-400 hover:underline">color palette generator</Link> to create harmonious color sets, then bring those colors here to check contrast. Use the tool below to check color contrast instantly. Add your foreground and background colors, then see the ratio and pass/fail for normal and large text. The tool supports WCAG compliance by comparing your pairs to standard thresholds. Check color contrast before shipping so your interfaces and materials are readable for more users.
              </p>
            </div>
          </header>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              What Is Color Contrast?
            </h2>
            <p className="mb-4 leading-relaxed">
              Color contrast is the difference in luminance between a foreground color (e.g. text) and a background color. The contrast ratio is a number from 1:1 (no difference) to 21:1 (maximum). For example, black text on a white background has a high ratio; light gray text on a light gray background has a low ratio. Text and background contrast directly affects readability: low contrast strains the eye and excludes users with low vision or in bright environments.
            </p>
            <p className="leading-relaxed">
              An accessibility contrast checker computes this ratio for any two colors you supply. You enter a text color and a background color; the tool returns the ratio and whether the pair meets common accessibility thresholds. This helps you choose accessible color contrast for body text, headings, buttons, and links.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Accessibility Matters
            </h2>
            <p className="mb-4 leading-relaxed">
              Readable contrast benefits everyone. Users with low vision, color blindness, or age-related vision changes rely on sufficient contrast to read content. In bright light or on small screens, low-contrast text becomes hard to read even for users without impairments. Accessible color contrast improves usability and supports inclusive design.
            </p>
            <p className="leading-relaxed">
              Designers and developers use a color accessibility tool to test pairs before release. Checking contrast during design and development avoids rework and ensures that interfaces and marketing materials meet common expectations for readable text. This accessibility contrast checker gives you instant feedback so you can adjust colors until pairs pass.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              WCAG Contrast Basics: AA and AAA
            </h2>
            <p className="mb-4 leading-relaxed">
              WCAG (Web Content Accessibility Guidelines) defines minimum contrast ratios for text. Level AA is the baseline: normal text must have at least 4.5:1 contrast against the background; large text (18pt or 14pt bold) must have at least 3:1. Level AAA is stricter: 7:1 for normal text and 4.5:1 for large text. This WCAG contrast checker evaluates your pairs against both levels so you can see whether you meet AA, AAA, or both.
            </p>
            <p className="leading-relaxed">
              Normal text means typical body copy; large text means 18pt (24px) or larger, or 14pt (about 19px) or larger if bold. The tool lets you switch between normal and large text so you get the right threshold for each use case. Many projects aim for AA; AAA is recommended where possible for better readability.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              How This Tool Helps Designers
            </h2>
            <p className="mb-4 leading-relaxed">
              Designers use this color contrast checker to test text-on-background pairs from palettes, mockups, and style guides. Enter the hex values for your text and background; the tool shows the ratio and AA/AAA pass or fail. You can test multiple pairs in one place (e.g. body text on surface, link on surface, button text on button) so you know which combinations are accessible before handoff.
            </p>
            <p className="mb-4 leading-relaxed">
              Frontend developers can re-check the same hex values in code. Brand designers can verify that headline and body text on brand backgrounds meet contrast. The tool supports WCAG compliance by applying the same formulas and thresholds used in guidelines. Check color contrast for light and dark themes, marketing banners, and app UI so your choices are readable and consistent.
            </p>
          </section>
        </div>

        <ContrastCheckerTool />

        <div className="max-w-4xl mx-auto mt-16 space-y-12 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Check Contrast Instantly
            </h2>
            <p className="mb-4 leading-relaxed">
              Use the accessibility contrast checker above to check color contrast for any text and background pair. Add your colors, select normal or large text, and see the ratio and pass/fail for AA and AAA. No sign-up required. Test as many pairs as you need for your project. If a pair fails, adjust the text or background color and re-check until you reach an accessible color contrast.
            </p>
            <p className="leading-relaxed">
              After building a palette with a <Link href="/tools/palette-generator" className="text-blue-600 dark:text-blue-400 hover:underline">color palette generator</Link>, run your text and background combinations through this tool. Not every pair in a palette will pass; use the checker to identify which combinations work for body text, headings, and buttons so your final palette supports accessible design.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Practical Examples
            </h2>
            <p className="mb-4 leading-relaxed">
              Common use cases: body text on a white or off-white background; link color on the same background; button text on a primary button color; placeholder text on an input background; label text on a card or modal. For each pair, enter the foreground (text) and background colors in the tool and check the ratio. Accessible color contrast for body text usually means at least 4.5:1 (AA); for large headings or buttons, 3:1 may be sufficient for AA.
            </p>
            <p className="leading-relaxed">
              Dark mode and light mode each need separate checks. A background that looks dark on screen may not be dark enough for white text to pass; use the checker to confirm. The same applies to hover and focus states: if the text or background color changes on interaction, test that state as well so accessible color contrast is maintained throughout the experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">What is an accessibility contrast checker?</h3>
                <p className="leading-relaxed">
                  An accessibility contrast checker is a tool that calculates the contrast ratio between two colors (e.g. text and background) and indicates whether the pair meets WCAG AA or AAA. It helps you choose readable, accessible color contrast.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">What contrast ratio is required for WCAG AA?</h3>
                <p className="leading-relaxed">
                  For WCAG AA, normal text needs at least 4.5:1 against the background. Large text (18pt or 14pt bold) needs at least 3:1.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">What is the difference between AA and AAA?</h3>
                <p className="leading-relaxed">
                  AA is the standard level; AAA is stricter. For normal text, AAA requires 7:1 (AA requires 4.5:1). For large text, AAA requires 4.5:1 (AA requires 3:1).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Can I use this contrast checker for commercial projects?</h3>
                <p className="leading-relaxed">
                  Yes. The tool is free for personal and commercial use. Ratios are computed from standard WCAG formulas; use the results in design files and documentation as needed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Does contrast apply to logos and branding?</h3>
                <p className="leading-relaxed">
                  Guidelines allow exceptions for logos and some brand elements. Body text, UI text, and meaningful graphics should still meet contrast requirements. When in doubt, test text and interactive elements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">How do I test contrast for color palettes?</h3>
                <p className="leading-relaxed">
                  List the text/background pairs you will use (e.g. primary text on surface, button text on button). Enter each pair in the checker and confirm AA or AAA. Adjust colors that fail until critical pairs pass.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Related Tools</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Use these color tools together for accessible design:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/tools/palette-generator" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Color palette generator
                </Link>
                — create harmonious palettes from a base color with multiple harmony types.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <Link href="/tools" className="text-blue-600 dark:text-blue-400 hover:underline">View all color tools</Link> for palette generation, contrast checking, and more.
            </p>
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
