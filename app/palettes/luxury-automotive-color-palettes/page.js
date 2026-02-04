import Link from 'next/link';

export const metadata = {
  title: 'Luxury Automotive Color Palettes for Exterior and Interior Design | Theme and Color',
  description: 'Luxury automotive color palettes for exterior paint, interior materials, and digital configurators. Premium car colors and automotive brand colors with hex codes.',
};

const PALETTE_COLORS = ['#0A0A0A', '#1A1A1A', '#2D2D2D', '#4A4A4A', '#7A6E5D', '#B8A88A', '#E8E2D8'];

export default function LuxuryAutomotiveColorPalettesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Luxury Automotive Color Palettes for Exterior and Interior Design
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
              Luxury automotive color palettes rely on dark neutrals, metallic grays, and restrained warm accents to signal premium positioning. This palette supports exterior paint and trim, interior materials and ambient lighting, and digital touchpoints such as configurators and dashboards. Use the hex values below in design systems, configurator UI, and marketing.
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {PALETTE_COLORS.map((hex) => (
                <div
                  key={hex}
                  className="w-16 h-16 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-sm flex-shrink-0"
                  style={{ backgroundColor: hex }}
                  title={hex}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
              {PALETTE_COLORS.join(' · ')}
            </p>
          </header>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Why These Colors Work for Luxury Automotive Brands
            </h2>
            <p className="mb-4 leading-relaxed">
              Premium car colors and luxury vehicle color combinations favor depth and restraint over saturation. Deep blacks and charcoals (#0A0A0A, #1A1A1A, #2D2D2D) read as serious and high-end; mid grays (#4A4A4A) suggest metallic finishes and trim. Warm neutrals (#7A6E5D, #B8A88A, #E8E2D8) work as interior leather, wood, and surface tones without competing with the exterior. Together they form an automotive interior color palette and exterior system that scales from body paint to HMI screens.
            </p>
            <p className="leading-relaxed">
              Automotive brand colors that stay within this range remain recognizable across showrooms, configurators, and ads. For more on how to structure palettes for vehicles and brand touchpoints, see our guide on <Link href="/use-cases/colors-for-automotive-design" className="text-blue-600 dark:text-blue-400 hover:underline">colors for automotive design</Link>.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Exterior Paint and Trim Usage
            </h2>
            <p className="mb-4 leading-relaxed">
              The darkest values (#0A0A0A, #1A1A1A) suit exterior black and near-black paint; #2D2D2D and #4A4A4A work for charcoal and metallic gray finishes. Trim, badges, and accent details can use the warm metallic (#7A6E5D, #B8A88A) for a subtle premium cue without shifting to bright gold or chrome. Document these hex values alongside paint codes and material specs so that configurators and marketing visuals match the physical vehicle.
            </p>
            <p className="leading-relaxed">
              Consistency between showroom and screen matters. Use the same palette in configurator UI so that the on-screen car reflects the same luxury automotive color palettes a customer can order. A <Link href="/tools/palette-generator" className="text-blue-600 dark:text-blue-400 hover:underline">color palette generator</Link> can extend this set with additional shades for states, gradients, or secondary surfaces if needed.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Interior Materials and Ambient Lighting
            </h2>
            <p className="mb-4 leading-relaxed">
              Interior surfaces and materials map well to the mid and light values. Dark grays define dash and trim; #7A6E5D and #B8A88A suggest leather, wood, or metallic trim; #E8E2D8 works for light upholstery, headliner, and ambient-lit surfaces. Ambient lighting in luxury vehicles often uses warm white or soft gold tones that align with these warm neutrals rather than cold blue or green.
            </p>
            <p className="leading-relaxed">
              An automotive interior color palette should support both dark and light cabin themes. This set provides a dark base scale and a light accent scale so that interior designers and HMI teams can maintain one coherent system across materials and screens.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Digital Configurators, Dashboards, and Marketing Visuals
            </h2>
            <p className="mb-4 leading-relaxed">
              Configurators and brand sites should use the same luxury automotive color palettes as the vehicle. Backgrounds, type, and key UI elements can pull from the dark neutrals; accents and CTAs from the warm metallics. Dashboards and in-vehicle displays need high-contrast text and icons against dark or light backgrounds; the palette includes both so that primary content stays readable.
            </p>
            <p className="leading-relaxed">
              Marketing visuals and brochures benefit from a single source of truth: the same hex values for digital and the same references for print (with CMYK or spot equivalents where needed). That keeps luxury vehicle color combinations consistent from ad to configurator to showroom.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Accessibility and In-Vehicle Displays
            </h2>
            <p className="mb-4 leading-relaxed">
              In-vehicle screens and HMI require sufficient contrast for text and critical indicators. Dark backgrounds with light text (e.g. #E8E2D8 or white on #0A0A0A) meet readability needs; warm metallics (#B8A88A) on dark may be acceptable for labels or accents but often fail for body text. Run text-and-background pairs through an <Link href="/tools/contrast-checker" className="text-blue-600 dark:text-blue-400 hover:underline">accessibility contrast checker</Link> before locking dashboard and configurator UI so that content remains readable in daylight and at night and complies with driver-distraction and accessibility expectations.
            </p>
          </section>

          <section className="text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Palette Summary
            </h2>
            <p className="leading-relaxed">
              This luxury automotive color palette provides seven hex values: deep black (#0A0A0A), dark charcoals (#1A1A1A, #2D2D2D), mid gray (#4A4A4A), warm metallic (#7A6E5D), light metallic (#B8A88A), and warm off-white (#E8E2D8). Use them for exterior and interior design, configurators, dashboards, and marketing. Extend the set with a color palette generator and verify contrast for displays with an accessibility contrast checker so the palette stays usable across all touchpoints.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
