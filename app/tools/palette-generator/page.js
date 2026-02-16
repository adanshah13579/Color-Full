import Link from 'next/link';
import PaletteGeneratorTool from './PaletteGeneratorTool';

export default function PaletteGeneratorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-10">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Color Palette Generator
            </h1>
            <div className="text-gray-600 dark:text-gray-400 space-y-4 text-base leading-relaxed">
              <p>
                A color palette generator creates coordinated color sets from a single base color. Use it to generate color palettes for web, UI, branding, and product design. This online palette generator outputs hex codes so you can copy values into design files, style guides, or code. Professional designers in web, UI/UX, branding, fashion, industrial, and automotive rely on a consistent color palette tool to keep interfaces and brands coherent.
              </p>
              <p>
                Choose a base color and the tool produces multiple harmony types: monochromatic, analogous, complementary, triadic, split-complementary, and tetradic. Each set follows color theory so primary, secondary, and accent roles stay clear. After building a palette, use our <Link href="/tools/contrast-checker" className="text-blue-600 dark:text-blue-400 hover:underline">accessibility contrast checker</Link> to verify text and background pairs meet WCAG guidelines. Use the tool below to generate palettes and copy hex codes for your projects.
              </p>
            </div>
          </header>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              What This Tool Does
            </h2>
            <p className="mb-4 leading-relaxed">
              This color palette generator takes one base color and produces several palette types. You get monochromatic (one hue, varied lightness), analogous (neighboring hues), complementary (opposite hues), triadic (three evenly spaced hues), split-complementary, and tetradic palettes. Each palette is shown with hex codes for copy-paste into Figma, CSS, or design systems. The goal is to reduce guesswork: instead of picking random colors, you choose a base and get structured sets that work together.
            </p>
            <p className="leading-relaxed">
              Designers use an online palette generator to explore options quickly, lock in a brand color palette or UI color palette, and share hex values with developers. The same base color and rules yield the same hex codes every time, so teams stay aligned across projects and platforms.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Use the Tool to Generate Palettes
            </h2>
            <p className="leading-relaxed">
              Use the color palette generator below. Pick a base color, then choose a harmony type. Copy individual hex codes or the full palette for use in your designs. Generate color palette options for light and dark themes, brand guidelines, or UI components. Try different base colors until you find a set that fits your project, then copy the hex codes and paste them into your workflow.
            </p>
          </section>
        </div>

        <PaletteGeneratorTool />

        <div className="max-w-4xl mx-auto mt-16 space-y-12 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Use Cases Across Industries
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Web and UI Design</h3>
                <p className="leading-relaxed">
                  A UI color palette gives you primary, secondary, and neutral colors for buttons, backgrounds, and states. Use the color palette generator to pick a base brand color and generate harmonies for light and dark modes. Copy hex codes into design systems or CSS variables so typography and interactive elements stay consistent across the product.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Branding and Marketing</h3>
                <p className="leading-relaxed">
                  A brand color palette extends one primary color into a full set for logos, ads, and campaigns. Generate color palette options from your primary, then copy hex codes into Canva, Figma, or other tools so print and digital assets match. An online palette generator keeps brand colors consistent and reusable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Fashion, Automotive, and Industrial</h3>
                <p className="leading-relaxed">
                  Fashion designers use palettes for seasonal lines and fabric coordination. Automotive and industrial teams use them for materials, trim, and interfaces. Generate palettes from a trend or brand color and export hex codes for mood boards, spec sheets, or supplier documentation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Accessibility Considerations
            </h2>
            <p className="leading-relaxed">
              Text and background pairs from your palette must meet minimum contrast for readability. After you generate color palettes, test text-on-background combinations with a contrast checker. Use the strongest contrast for body text; reserve lower-contrast colors for non-essential or decorative use. This supports inclusive design and common accessibility guidelines without requiring deep WCAG expertise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Generate Palettes Now
            </h2>
            <p className="mb-4 leading-relaxed">
              Use the color palette generator above to pick a base color and generate palettes. Copy hex codes for your next web project, brand guideline, or UI kit. The tool is free and requires no sign-up. Generate color palette options as many times as you need until you find the right set for your audience and product.
            </p>
            <p className="leading-relaxed">
              For accessible combinations, pair this tool with a contrast checker: build your palette here, then <Link href="/tools/contrast-checker" className="text-blue-600 dark:text-blue-400 hover:underline">check color contrast</Link> for text and background pairs before finalizing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">What is a color palette generator?</h3>
                <p className="leading-relaxed">
                  A color palette generator is a tool that creates sets of related colors from a base color or harmony rules (e.g. complementary, triadic), usually outputting hex codes for design and code.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">How do I generate a color palette?</h3>
                <p className="leading-relaxed">
                  Choose a base color in the tool, then select a harmony type (e.g. complementary, analogous). The tool produces a set of hex codes. Copy the codes and use them in your design files or code.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Can I use this for a brand color palette?</h3>
                <p className="leading-relaxed">
                  Yes. Use your brand primary as the base color and generate palettes. Copy the hex codes into your brand guidelines, marketing tools, and design files so all assets use the same values.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Is this color palette tool free?</h3>
                <p className="leading-relaxed">
                  Yes. This online palette generator is free to use. Generate palettes and copy hex codes without sign-up or payment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">How many colors are in each palette?</h3>
                <p className="leading-relaxed">
                  Each harmony type produces a set of several colors (typically five). Use the ones that fit your project; many designers use three to seven colors for a final palette.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">How do I ensure accessible colors?</h3>
                <p className="leading-relaxed">
                  After generating a palette, test text-on-background pairs with a contrast checker. Choose pairs that meet minimum contrast ratios for body text and UI elements.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Related Tools</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Pair this palette generator with our other color tools for a full workflow:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/tools/contrast-checker" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Accessibility contrast checker
                </Link>
                — test text and background contrast for WCAG AA and AAA.
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
