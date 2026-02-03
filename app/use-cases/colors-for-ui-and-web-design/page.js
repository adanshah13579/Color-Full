import Link from 'next/link';

export const metadata = {
  title: 'Colors for UI and Web Design: Choosing the Right Color Systems | Theme and Color',
  description: 'How color systems work in UI and web design. Brand consistency, usability, accessible UI colors, and design system colors for professional designers.',
};

export default function ColorsForUIAndWebDesignPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Colors for UI and Web Design: Choosing the Right Color Systems
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Color in UI and web design defines hierarchy, interaction states, and brand presence. Professional teams treat color as a system: a limited set of tokens that map to roles (primary, secondary, surface, text, border) and states (default, hover, focus, disabled). A well-defined web design color system reduces cognitive load, supports consistency across breakpoints and themes, and keeps interfaces accessible when contrast ratios meet WCAG guidelines.
            </p>
          </header>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              How Color Systems Work in UI and Web Design
            </h2>
            <p className="mb-4 leading-relaxed">
              A UI color palette is not a random set of swatches. It is a structured set of values that answer specific questions: What color indicates the main action? What color is used for body text, headings, and captions? What backgrounds and surfaces are available? How do interactive elements change on hover, focus, or error? Design systems document these as named tokens (e.g. primary-500, surface-100, text-primary) so that designers and developers share one vocabulary. When a brand updates its primary color, changing a single token updates every button, link, and accent across the product.
            </p>
            <p className="mb-4 leading-relaxed">
              Web projects often need both light and dark modes. That doubles the number of surface and text roles but does not double the number of hue decisions. Teams typically keep the same primary and secondary hues and shift only neutrals and backgrounds. Dark UI color palettes, such as a <Link href="/palettes/black-and-gold" className="text-blue-600 dark:text-blue-400 hover:underline">black-and-gold system</Link> for premium products, use the same semantic roles: dark backgrounds, light or gold text and accents, with contrast ratios verified for each pair. Exploring established palettes like our <Link href="/palettes/black-and-gold" className="text-blue-600 dark:text-blue-400 hover:underline">black and gold color palette</Link> can clarify how dark themes assign roles to a small set of hex values.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Brand Consistency and Usability
            </h2>
            <p className="mb-4 leading-relaxed">
              Brand consistency in UI means that the same primary and secondary colors appear wherever the product touches the user: login screens, dashboards, marketing pages, and emails. Hex values should match the brand style guide so that the app never feels disconnected from the rest of the company’s visual identity. Usability depends on predictable behavior: buttons that look clickable, links that are distinguishable from body text, and feedback states (success, warning, error) that use consistent colors so users do not have to relearn the interface.
            </p>
            <p className="mb-4 leading-relaxed">
              Buttons, text, and backgrounds are the main consumers of a UI color palette. Primary buttons usually use the brand primary color; secondary buttons use outline or muted fills. Body text needs a dedicated neutral (often near black or near white depending on theme) with a defined contrast ratio against the background. Backgrounds and surfaces use the lightest or darkest neutrals to create depth without introducing new hues. States (hover, focus, disabled) are typically lighter or darker variants of the same base color, or a defined overlay, so the palette stays small and maintainable.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Accessibility and Contrast
            </h2>
            <p className="mb-4 leading-relaxed">
              Accessible UI colors require sufficient contrast between text and its background. WCAG 2.1 sets minimum ratios: 4.5:1 for normal body text (3:1 for large text) at Level AA, and 7:1 at Level AAA. Decorative elements and large graphics have more flexibility, but any text that conveys information must meet at least AA. Designers should test every text-and-background pair used in the interface, including placeholder text, disabled states, and labels on form controls.
            </p>
            <p className="mb-4 leading-relaxed">
              An <Link href="/tools/contrast-checker" className="text-blue-600 dark:text-blue-400 hover:underline">accessibility contrast checker</Link> is essential before locking a palette in code or a design system. Gold or metallic accents on dark backgrounds often fail for body text; they work better for headings, icons, or borders. Use the same tool to verify both light and dark themes and to catch pairs that look fine on a large monitor but fail on dimmer screens or for users with low vision. Prioritize body text and interactive elements; accent colors can sit at lower contrast when they are not carrying critical information.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              From Palette to Implementation
            </h2>
            <p className="mb-4 leading-relaxed">
              After defining the palette, teams document hex or RGB values in a style guide and map them to semantic names. Those names become design tokens in Figma, Sketch, or Adobe XD and the same tokens in code as CSS custom properties or theme objects. A <Link href="/tools/palette-generator" className="text-blue-600 dark:text-blue-400 hover:underline">color palette generator</Link> can help explore harmonies from a single base color and export hex codes for primary, secondary, and neutral scales. Once values are chosen, plug them into variables so that one change propagates across the entire product.
            </p>
            <p className="leading-relaxed">
              For teams building a new design system, starting from an existing palette (such as a luxury black and gold palette for premium or finance products) can speed up decisions. Use the palette generator to derive additional shades or to create complementary palettes for different product lines, then validate every text and interactive combination with the contrast checker. This workflow keeps UI color systems consistent, accessible, and aligned with brand.
            </p>
          </section>

          <section className="text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Summary
            </h2>
            <p className="leading-relaxed">
              Colors for UI design work best when they are treated as a system: a limited set of tokens for primary, secondary, neutrals, and states. Brand consistency and usability depend on predictable roles for buttons, text, and backgrounds. Accessibility requires verifying contrast for all text-background pairs with an accessibility contrast checker. Use a color palette generator to build and extend palettes, and reference established dark or luxury palettes to align your UI with proven color systems.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
