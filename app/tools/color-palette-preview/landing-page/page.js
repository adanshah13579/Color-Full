import { Suspense } from 'react';
import InlineTagLink from '../../../components/InlineTagLink';
import ToolBreadcrumbs from '../../../components/ToolBreadcrumbs';
import LandingPreviewClient from './LandingPreviewClient';
import PresetPaletteGrid from '../components/PresetPaletteGrid';
import { LANDING_PRESET_PALETTES } from '../constants';
import { PALETTE_PREVIEW_BREADCRUMB_BASE } from '../../../../lib/breadcrumbSchema';
import { buildPageMetadata } from '../../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/tools/color-palette-preview/landing-page',
  title: 'Landing Page Color Palette Preview — See Your Colors on a Marketing Page',
  description:
    'Preview your color palette on a real landing page mockup. See hero section, features, CTA and footer in your brand colors before you build. Free tool.',
  keywords: [
    'landing page color palette',
    'marketing page colors',
    'hero section colors',
    'landing page design',
    'Theme & Color',
  ],
});

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Landing Page Color Palette Preview',
  description:
    'Preview your color palette on a real marketing landing page mockup with hero, features, pricing, CTA, and footer sections. Free online tool.',
  url: 'https://themeandcolor.com/tools/color-palette-preview/landing-page',
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
      name: 'What is the best color palette for a landing page?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best landing page palettes pair a bold primary for the hero and navigation, a light neutral background for feature sections, a high-contrast accent for CTAs, and readable text colors. Preview your five roles on a marketing mockup before committing so hierarchy feels clear above the fold.',
      },
    },
    {
      '@type': 'Question',
      name: 'What color should a CTA button be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CTA buttons should contrast strongly against their section background—often your accent or primary color with white or dark text that passes WCAG AA. Avoid placing low-contrast pastels on similar hero backgrounds; test the button pair with a contrast checker before launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many colors should a landing page use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most high-converting landing pages use five core colors: primary, secondary, accent, background, and text. Add neutrals for borders and dividers, but keep chromatic colors focused so the hero, features, and CTA each have a distinct job without visual clutter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should a landing page hero be dark or light?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Either works when contrast is strong. Dark heroes with white type feel premium and product-led; light heroes with dark type feel editorial and airy. Choose based on brand personality, then preview your primary or background on a mockup to confirm headlines and buttons remain legible.',
      },
    },
  ],
};

const breadcrumbItems = [
  ...PALETTE_PREVIEW_BREADCRUMB_BASE,
  { name: 'Landing Page', href: '/tools/color-palette-preview/landing-page' },
];

function PreviewFallback() {
  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 animate-pulse">
      <div className="h-28 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6" />
      <div className="h-72 bg-gray-100 dark:bg-gray-700 rounded-lg" />
    </div>
  );
}

export default function LandingPreviewPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ToolBreadcrumbs items={breadcrumbItems} />

        <header className="max-w-4xl mx-auto mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Landing Page Color Palette Preview
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            See your brand colors on a real marketing landing page
          </p>
        </header>

        <Suspense fallback={<PreviewFallback />}>
          <LandingPreviewClient />
        </Suspense>

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Choosing a Landing Page Color Palette
            </h2>
            <p className="leading-relaxed">
              Landing pages sell a single story in seconds. Your hero background should grab attention without
              overpowering the headline; your CTA must stand out from surrounding sections; and feature blocks need a
              neutral background so icons and copy breathe. Previewing five roles on a marketing layout shows whether
              your primary feels trustworthy at full width, whether accent buttons pop on the CTA band, and whether
              testimonial and footer sections stay readable before you open Figma or ship code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Best Landing Page Color Combinations
            </h2>
            <p className="leading-relaxed mb-5">
              Click a preset to load it into the generator and preview it on the landing page mockup above.
            </p>
            <PresetPaletteGrid
              presets={LANDING_PRESET_PALETTES}
              basePath="/tools/color-palette-preview/landing-page"
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Landing Page Color Best Practices
            </h2>
            <ul className="space-y-2 leading-relaxed list-disc list-inside">
              <li>Hero background should be your Primary brand color</li>
              <li>CTA button must contrast strongly against its background</li>
              <li>Keep feature sections on white or very light Background</li>
              <li>Footer traditionally uses a dark version of your Text color</li>
              <li>
                Validate contrast with our{' '}
                <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>
              </li>
            </ul>
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

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Try Other Preview Types</h2>
            <p className="leading-relaxed">
              See the same palette on an{' '}
              <InlineTagLink href="/tools/color-palette-preview/dashboard">admin dashboard mockup</InlineTagLink> or a{' '}
              <InlineTagLink href="/tools/color-palette-preview/mobile-app">mobile app UI</InlineTagLink>. Build
              harmonies with the{' '}
              <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, apply the{' '}
              <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 color rule</InlineTagLink>, and browse{' '}
              <InlineTagLink href="/blog/color-palette-ideas-for-small-business">
                color palette ideas for small business
              </InlineTagLink>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
