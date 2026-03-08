import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import PaletteGeneratorTool from './PaletteGeneratorTool';

export default function PaletteGeneratorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
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

        <div className="max-w-4xl mx-auto mt-16 space-y-12 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              What This Tool Does
            </h2>
            <p className="mb-4 leading-relaxed">
              This color palette generator takes one base color and produces several palette types—monochromatic, analogous, complementary, triadic, split-complementary, and tetradic—with hex codes for copy-paste into Figma, CSS, or design systems. Pick a base color and a harmony type to get structured sets that work together. Professional designers use it for web, UI, branding, and product design to keep interfaces and brands coherent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              What Is a Color Palette Generator
            </h2>
            <p className="mb-4 leading-relaxed">
              A color palette generator is an online tool that creates coordinated color sets from a single base color or a set of harmony rules. Instead of choosing colors by hand and hoping they work together, you pick one starting color and the generator outputs a full palette—typically three to seven colors—with exact hex codes you can use in design software, code, or brand guidelines.
            </p>
            <p className="mb-4 leading-relaxed">
              Most palette generators use color theory to build harmonies: monochromatic (one hue at different shades), analogous (colors next to each other on the color wheel), complementary (opposite hues for contrast), triadic (three evenly spaced hues), and others. The result is a set of colors that are mathematically related, so they look cohesive in layouts, interfaces, and branding. Designers and developers use a color palette generator to speed up exploration, keep brand colors consistent, and share the same hex values across teams and tools.
            </p>
            <p className="leading-relaxed">
              Whether you need a website color palette, a brand color set, or palettes for UI components, a generator removes guesswork and delivers export-ready values. Many tools, including the one above, are free and require no sign-up—you pick a base color, choose a harmony type, and copy the hex codes into your project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              How to Use the Color Palette Generator
            </h2>
            <ol className="list-decimal list-inside space-y-4 leading-relaxed">
              <li>
                <strong className="text-gray-900 dark:text-white">Pick a base color.</strong> Use the color picker to choose your starting color. This can be your brand primary, a color from your logo, or any hue you want to build from.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Select a harmony type.</strong> Choose monochromatic, analogous, complementary, triadic, split-complementary, or tetradic. Each option produces a different set of related colors.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Review the palette.</strong> The tool displays the generated colors with hex codes. Use the ones that fit your project—primary, secondary, neutrals, and accents.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Copy hex codes.</strong> Copy individual hex values or the full set and paste them into Figma, CSS, design systems, or brand guidelines.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Test contrast.</strong> For text and buttons, run your chosen pairs through an <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink> to ensure readability and WCAG compliance.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              How to Choose the Perfect Color Palette for a Website
            </h2>
            <ul className="list-disc list-inside space-y-3 leading-relaxed">
              <li>
                <strong className="text-gray-900 dark:text-white">Start with one dominant color.</strong> Use your brand primary or the color that best represents your product. Build the rest of the palette from that base so the site feels cohesive.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Limit the palette.</strong> Most websites work best with three to five main colors: one primary, one secondary, and neutrals for text and backgrounds. Too many colors dilute the design.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Assign roles.</strong> Decide which color is for buttons and CTAs, which for headings, and which for body text and backgrounds. Stick to those roles across pages.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Check contrast.</strong> Body text needs at least 4.5:1 contrast against its background (WCAG AA). Use a contrast checker before finalizing.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Test in context.</strong> Apply the palette to real UI elements—buttons, cards, headers—to see how it feels. Adjust if any combination looks off or fails accessibility.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Popular Website Color Combinations
            </h2>
            <p className="mb-4 leading-relaxed">
              These combinations work well for many types of sites. Use the palette generator above to explore similar palettes from a base color.
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong className="text-gray-900 dark:text-white">Navy, white, and gold:</strong> Professional and premium—navy (#1e3a8a) for headers and CTAs, white (#ffffff) for backgrounds, gold (#d4af37) for accents.</li>
              <li><strong className="text-gray-900 dark:text-white">Teal and coral:</strong> Modern and approachable—teal (#0d9488) as primary, coral (#f97316) for highlights, with white or light gray backgrounds.</li>
              <li><strong className="text-gray-900 dark:text-white">Deep purple and cream:</strong> Creative and distinctive—purple (#6b21a8) for brand moments, cream (#fefce8) for surfaces, one accent (e.g. cyan).</li>
              <li><strong className="text-gray-900 dark:text-white">Forest green and warm gray:</strong> Calm and trustworthy—green (#059669) for primary actions, warm gray (#f3f4f6) for backgrounds, dark gray for text.</li>
              <li><strong className="text-gray-900 dark:text-white">Black, white, and one accent:</strong> Minimal and bold—black and white for structure, a single strong accent (red, blue, or brand color) for CTAs and links.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Color Palettes Matter in Branding
            </h2>
            <p className="mb-4 leading-relaxed">
              A defined color palette makes your brand recognizable. When customers see the same colors on your website, social profiles, packaging, and ads, they start to associate those colors with you. Consistency builds trust and makes the brand feel intentional rather than random.
            </p>
            <p className="mb-4 leading-relaxed">
              Brand guidelines usually specify a primary color (often from the logo), secondary colors for support, and neutrals for text and backgrounds. Everyone on the team—designers, developers, marketers—uses the same hex codes, so the brand looks the same everywhere. A color palette generator helps you create that set from one base color and export values everyone can use.
            </p>
            <p className="leading-relaxed">
              Without a palette, colors drift: one person uses one blue, another uses a slightly different blue, and the brand looks inconsistent. With a locked-in palette and shared hex codes, the brand stays coherent across touchpoints and over time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What is a color palette generator?</h3>
                <p className="leading-relaxed">
                  A color palette generator is a tool that creates sets of related colors from a base color or harmony rules (e.g. complementary, triadic). It outputs hex codes you can copy into design files, CSS, or brand guidelines so your palette stays consistent.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How do I generate a color palette?</h3>
                <p className="leading-relaxed">
                  Pick a base color with the color picker, then choose a harmony type (e.g. complementary, analogous). The tool produces a set of hex codes. Copy the codes and use them in your designs or code. You can try different base colors and harmony types until you find a palette you like.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What are the best color combinations for a website?</h3>
                <p className="leading-relaxed">
                  It depends on your brand and audience. Common choices include navy and white with a warm accent, teal and coral, or a minimal black-and-white palette with one bold accent. Use a palette generator to explore from your brand color and keep the set to three to five main colors for clarity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Is this color palette tool free?</h3>
                <p className="leading-relaxed">
                  Yes. This online palette generator is free to use. You can generate palettes and copy hex codes without sign-up or payment. Use it as often as you need for web, branding, or UI projects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How many colors should be in a website color palette?</h3>
                <p className="leading-relaxed">
                  Most websites use three to five main colors: one primary (e.g. for buttons and key elements), one secondary, and neutrals for text and backgrounds. The generator produces several options per harmony; choose the ones that fit your roles and test contrast for text and buttons.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Related Tools</h2>
            <p className="mb-4 leading-relaxed">
              Pair this palette generator with our other color tools for a full workflow:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <InlineTagLink href="/tools/contrast-checker">Accessibility contrast checker</InlineTagLink>
                — test text and background contrast for WCAG AA and AAA.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              <InlineTagLink href="/tools">View all color tools</InlineTagLink> for palette generation, contrast checking, and more.
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
