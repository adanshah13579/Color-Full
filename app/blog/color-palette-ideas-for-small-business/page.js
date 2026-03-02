import Link from 'next/link';

export const metadata = {
  title: 'Color Palette Ideas for Small Business (With Examples) | Theme & Color',
  description:
    'Practical color palette ideas for small business: how many colors to use, industry examples, and where to apply them on your website and branding.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many colors should be in a small business color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most small businesses do well with 3–5 colors: one primary, one secondary, one or two neutrals, and optionally one accent. That keeps branding consistent without feeling cluttered.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are good color combinations for a small business website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your industry and brand. Common choices: navy or deep blue with white and a warm accent (e.g. gold); soft green or teal with white and gray; or warm neutrals (tan, cream) with a single bold accent. Use a palette generator to explore from one base color and check contrast for text and buttons.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I make sure my small business colors are accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a contrast checker to test text and button colors against their backgrounds. Aim for at least 4.5:1 contrast for normal body text (WCAG AA). Reserve low-contrast colors for decoration, not body copy or key buttons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change my small business color palette later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Consistency over time helps recognition, so if you change, update your website, social profiles, and key print materials together so the brand still feels coherent.',
      },
    },
  ],
};

export default function ColorPaletteIdeasForSmallBusinessPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <article>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Color Palette Ideas for Small Business: A Practical Guide
            </h1>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you&apos;re a small business owner, freelancer, or solopreneur choosing brand or website colors, this guide gives you actionable color palette ideas, how many colors to use, and where to apply them—logo, site, social, and print. Use our free{' '}
              <Link href="/tools/palette-generator" className="text-blue-600 dark:text-blue-400 hover:underline">
                color palette generator
              </Link>{' '}
              to try combinations as you read.
            </p>
          </header>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Your Small Business Needs a Defined Color Palette
            </h2>
            <p className="mb-4 leading-relaxed">
              A small business color palette is a short list of colors you use everywhere: website, social profiles, business cards, and marketing. One consistent look builds recognition. Customers start to associate those colors with you. Random choices each time—different blues, new accent colors per campaign—make the brand feel scattered and harder to remember.
            </p>
            <p className="leading-relaxed">
              A defined palette also speeds up decisions. You don&apos;t re-pick colors for every post or page; you choose from your set. That keeps the brand coherent without extra design work.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              How Many Colors Should a Small Business Palette Have?
            </h2>
            <p className="mb-4 leading-relaxed">
              Most small businesses do well with 3–5 colors: one primary (your main brand color for logo and key buttons), one secondary (supporting headlines or backgrounds), one or two neutrals (for body text and page backgrounds), and optionally one accent (for links, highlights, or CTAs). That&apos;s enough to look intentional without feeling busy.
            </p>
            <p className="leading-relaxed">
              Start from one main color—your current logo or the color that best fits your brand—and build from there. A{' '}
              <Link href="/tools/palette-generator" className="text-blue-600 dark:text-blue-400 hover:underline">
                color palette generator
              </Link>{' '}
              can take that base and suggest harmonies (e.g. complementary or analogous) so you get a full set of hex codes in one place.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Color Palette Ideas for Small Business by Industry
            </h2>
            <p className="mb-6 leading-relaxed">
              These directions are starting points. Adjust to match your brand voice and audience.
            </p>

            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Professional Services (consulting, legal, accounting)
            </h3>
            <p className="mb-6 leading-relaxed">
              Trust and clarity matter. Navy (#1e3a8a) or slate blue with white (#ffffff) and a warm accent like gold (#d4af37) reads professional and premium. Use navy for headers and primary buttons, white for backgrounds, gold for accents or secondary CTAs. Keeps the palette tight and credible.
            </p>

            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Local Services and Trades (contractors, cleaners, repair)
            </h3>
            <p className="mb-6 leading-relaxed">
              Approachable and reliable work well. Warm neutrals like soft tan (#e8ddcf) or light gray (#f3f4f6) with a muted green (#059669) or blue (#0d9488) feel grounded and friendly. Green or teal for CTAs and links; neutrals for background and body text. Avoid overly corporate or flashy palettes.
            </p>

            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Retail and E‑commerce
            </h3>
            <p className="mb-6 leading-relaxed">
              Product and audience drive the palette. Natural or organic brands often use greens, tans, and cream. Bold or youth-focused brands can use a strong primary (e.g. coral #f97316) with white and dark gray for contrast. Pick one dominant hue and one or two neutrals so product imagery stays the focus.
            </p>

            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Creative and Freelance (design, photography, copywriting)
            </h3>
            <p className="mb-6 leading-relaxed">
              Personality stands out. A distinctive combo—e.g. deep purple (#6b21a8) with cream (#fefce8) and a bright accent (#06b6d4)—signals creativity without feeling random. Keep one neutral for readability; use the accent sparingly for links and highlights so the work stays central.
            </p>

            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Wellness and Health (studios, coaches, practitioners)
            </h3>
            <p className="leading-relaxed">
              Calm and clean work well. Soft greens (#86efac, #4ade80), lavenders (#c4b5fd), or warm whites (#fafaf9) with a single muted accent (e.g. sage #87a96b) feel restful and professional. Avoid harsh contrasts; aim for a small business color palette that feels easy on the eye.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              How to Check Readability and Accessibility
            </h2>
            <p className="leading-relaxed">
              Text and buttons must be readable on your chosen backgrounds. Contrast ratios matter: for normal body text, aim for at least 4.5:1 (WCAG AA). Check every text-on-background pair you plan to use—headlines, body copy, buttons, links. Use an{' '}
              <Link href="/tools/contrast-checker" className="text-blue-600 dark:text-blue-400 hover:underline">
                accessibility contrast checker
              </Link>{' '}
              to test your palette before you lock it in. Reserve low-contrast colors for decoration only, not for content users need to read.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Where to Use Your Small Business Color Palette
            </h2>
            <p className="mb-4 leading-relaxed">
              <strong>Website:</strong> Use your primary for header, logo, and main CTAs; secondary for section backgrounds or headings; neutrals for body text and page background. Keep link and button colors consistent so visitors learn the interface quickly.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Social:</strong> Apply the same palette to profile visuals, post templates, and stories. Same primary and accent colors in bios, covers, and graphics make the feed feel like one brand.
            </p>
            <p className="leading-relaxed">
              <strong>Print:</strong> Use the same hex values in design files where possible; for print vendors, provide CMYK or Pantone equivalents so business cards, flyers, and signage match the digital brand.
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Next Steps: Lock In Your Palette
            </h2>
            <p className="mb-4 leading-relaxed">
              Pick one or two directions from the ideas above and try them in real layouts. Use a{' '}
              <Link href="/tools/palette-generator" className="text-blue-600 dark:text-blue-400 hover:underline">
                color palette generator
              </Link>{' '}
              to create a set from your main brand color, then{' '}
              <Link href="/tools/contrast-checker" className="text-blue-600 dark:text-blue-400 hover:underline">
                check contrast
              </Link>{' '}
              for any text and button pairs. Document your hex codes in a simple style note so you and anyone helping with design use the same values. For more on brand and logo color systems, see our guide on{' '}
              <Link href="/use-cases/colors-for-branding-and-logos" className="text-blue-600 dark:text-blue-400 hover:underline">
                colors for branding and logos
              </Link>
              .
            </p>
          </section>

          <section className="mb-10 text-gray-600 dark:text-gray-400">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  How many colors should be in a small business color palette?
                </h3>
                <p className="leading-relaxed">
                  Most small businesses do well with 3–5 colors: one primary, one secondary, one or two neutrals, and optionally one accent. That keeps branding consistent without feeling cluttered.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  What are good color combinations for a small business website?
                </h3>
                <p className="leading-relaxed">
                  It depends on your industry and brand. Common choices: navy or deep blue with white and a warm accent (e.g. gold); soft green or teal with white and gray; or warm neutrals (tan, cream) with a single bold accent. Use a palette generator to explore from one base color and check contrast for text and buttons.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  How do I make sure my small business colors are accessible?
                </h3>
                <p className="leading-relaxed">
                  Use a contrast checker to test text and button colors against their backgrounds. Aim for at least 4.5:1 contrast for normal body text (WCAG AA). Reserve low-contrast colors for decoration, not body copy or key buttons.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Can I change my small business color palette later?
                </h3>
                <p className="leading-relaxed">
                  Yes. Consistency over time helps recognition, so if you change, update your website, social profiles, and key print materials together so the brand still feels coherent.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
