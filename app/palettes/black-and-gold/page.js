import Link from 'next/link';

export const metadata = {
  title: 'Black and Gold Color Palette for Luxury Design | Theme and Color',
  description: 'Black and gold color palette for luxury design. Hex codes for branding, UI, fashion, and premium products. Black gold hex colors and accessibility notes.',
};

const PALETTE_COLORS = ['#000000', '#1C1C1C', '#D4AF37', '#B89B2E', '#F5E6A8'];

export default function BlackAndGoldPalettePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Black and Gold Color Palette for Luxury Design
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
              A black and gold color palette signals premium positioning and timeless elegance. This luxury color palette pairs deep neutrals with metallic gold tones for branding, UI, fashion, automotive, and product design. Use the hex values below in style guides, interfaces, and marketing.
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
              Meaning and Psychology of Black and Gold
            </h2>
            <p className="mb-4 leading-relaxed">
              Black conveys authority, formality, and sophistication. It reads as premium and serious in Western contexts and is widely used in luxury and high-end branding. Gold suggests wealth, success, and exclusivity. Combined, black and gold form an elegant brand colors set that audiences associate with premium products, high fashion, and refined experiences.
            </p>
            <p className="leading-relaxed">
              This pairing works across cultures for luxury and prestige. Designers use black for backgrounds and primary surfaces to create focus; gold acts as an accent for logos, highlights, and calls to action. The contrast between the two supports hierarchy and draws attention to key elements. Premium UI colors often follow this pattern: dark bases with metallic or warm accent tones.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Where This Palette Works Best
            </h2>
            <p className="mb-4 leading-relaxed">
              Brands in finance, jewelry, automotive, fashion, and hospitality use black and gold for logos, packaging, and campaigns. The palette suits premium positioning and audiences that expect a high-end feel. In web and app UI, black or near-black backgrounds (#000000, #1C1C1C) with gold accents (#D4AF37, #B89B2E, #F5E6A8) create a luxury color palette that feels cohesive and intentional.
            </p>
            <p className="mb-4 leading-relaxed">
              Fashion and apparel use these black gold hex colors for seasonal lines, lookbooks, and e-commerce. Automotive and product design apply the same palette to trim, packaging, and premium tiers. Editorial and event branding often rely on black and gold for invitations, programs, and digital assets. The palette scales from print to screen when hex values are kept consistent.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Extending and Customizing the Palette
            </h2>
            <p className="mb-4 leading-relaxed">
              Designers can extend this set by adding mid-tones or slight variations. Introduce a warm gray or charcoal between #000000 and #1C1C1C for gradients or secondary surfaces. Lighter gold (#F5E6A8) works for large areas or light-mode accents; darker gold (#B89B2E) suits borders, icons, and small highlights. A <Link href="/tools/palette-generator" className="text-blue-600 dark:text-blue-400 hover:underline">color palette generator</Link> can produce additional harmonies from any of these hex values if you need more options for states, hover, or secondary UI.
            </p>
            <p className="leading-relaxed">
              Document the five core colors in your style guide with clear roles: primary black, secondary dark, primary gold, secondary gold, and light gold. Assign semantic names (e.g. brand-black, gold-accent, gold-light) so developers and other designers use the same values. For print, convert hex to CMYK or specify Pantone equivalents where brand standards require it.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Accessibility Considerations
            </h2>
            <p className="mb-4 leading-relaxed">
              Text on black or near-black backgrounds must use a light color for sufficient contrast. Gold (#D4AF37, #B89B2E) on black can fail contrast guidelines for body text; reserve gold for headings, labels, or decorative use and use white or very light gold (#F5E6A8) for body copy on dark backgrounds. Light-mode implementations (gold on white or off-white) need the darker gold tones for text to meet minimum ratios.
            </p>
            <p className="leading-relaxed">
              Run text-and-background pairs through an <Link href="/tools/contrast-checker" className="text-blue-600 dark:text-blue-400 hover:underline">accessibility contrast checker</Link> before locking the palette in code or design systems. Prioritize body text and interactive elements; accent and decorative uses of gold can sit at lower contrast. Testing both light and dark contexts ensures the luxury color palette remains readable and compliant.
            </p>
          </section>

          <section className="text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Palette Summary
            </h2>
            <p className="leading-relaxed">
              This black and gold color palette provides five hex values: #000000 (black), #1C1C1C (dark gray), #D4AF37 (primary gold), #B89B2E (darker gold), and #F5E6A8 (light gold). Use them for luxury branding, premium UI, fashion, automotive, and product design. Extend the set with a color palette generator and verify contrast with an accessibility contrast checker so the palette stays usable across touchpoints.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
