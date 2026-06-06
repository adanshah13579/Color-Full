import { Suspense } from 'react';
import InlineTagLink from '../../../components/InlineTagLink';
import ToolBreadcrumbs from '../../../components/ToolBreadcrumbs';
import MobilePreviewClient from './MobilePreviewClient';
import PresetPaletteGrid from '../components/PresetPaletteGrid';
import { MOBILE_PRESET_PALETTES } from '../constants';
import { PALETTE_PREVIEW_BREADCRUMB_BASE } from '../../../../lib/breadcrumbSchema';
import { buildPageMetadata } from '../../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/tools/color-palette-preview/mobile-app',
  title: 'Mobile App Color Palette Preview — See Your Colors on App UI',
  description:
    'Preview your color palette on a mobile app mockup. See navigation, cards, and list items in your brand colors before you build. Free online tool.',
  keywords: [
    'mobile app color palette',
    'app UI color preview',
    'mobile design colors',
    'app color scheme',
    'Theme & Color',
  ],
});

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Mobile App Color Palette Preview',
  description:
    'Preview your color palette on a mobile app mockup with navigation, cards, lists, and bottom tabs. Free online tool.',
  url: 'https://themeandcolor.com/tools/color-palette-preview/mobile-app',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const breadcrumbItems = [
  ...PALETTE_PREVIEW_BREADCRUMB_BASE,
  { name: 'Mobile App', href: '/tools/color-palette-preview/mobile-app' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What colors work best for mobile app UI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mobile apps benefit from a strong primary for headers and navigation, a light background for content areas, secondary tones for icons and charts, accent colors for key actions, and high-contrast text. Preview all five roles on a phone mockup before handing off to development.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many colors should a mobile app use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most apps use five core colors plus system grays for borders and disabled states. Keeping chromatic colors focused helps users scan tiles, lists, and bottom navigation without visual overload.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should mobile app headers match the brand primary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—headers and top navigation typically use your primary brand color with white or high-contrast labels. Preview the combination on a mockup to confirm legibility at small sizes on real device proportions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I test app colors for accessibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Run text and icon colors against their backgrounds with a contrast checker. WCAG AA requires 4.5:1 for body text and sufficient contrast for touch targets and focus states.',
      },
    },
  ],
};

function PreviewFallback() {
  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 animate-pulse">
      <div className="h-28 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6" />
      <div className="h-72 bg-gray-100 dark:bg-gray-700 rounded-lg" />
    </div>
  );
}

export default function MobilePreviewPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ToolBreadcrumbs items={breadcrumbItems} />

        <header className="max-w-4xl mx-auto mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Mobile App Color Palette Preview
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            See your brand colors on a real mobile app UI
          </p>
        </header>

        <Suspense fallback={<PreviewFallback />}>
          <MobilePreviewClient />
        </Suspense>

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Choosing a Mobile App Color Palette
            </h2>
            <p className="leading-relaxed">
              Mobile UI compresses hierarchy into a small viewport. Your primary color anchors the status bar and header;
              background tints keep cards readable; accent colors highlight icons and CTAs; text must stay legible on both
              tinted and white surfaces. Previewing on a phone mockup reveals whether your palette feels cohesive at
              thumb scale before you commit to React Native, Flutter, or native design tokens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Best Mobile App Color Combinations
            </h2>
            <p className="leading-relaxed mb-5">
              Click a preset to load it into the generator and preview it on the mobile mockup above.
            </p>
            <PresetPaletteGrid
              presets={MOBILE_PRESET_PALETTES}
              basePath="/tools/color-palette-preview/mobile-app"
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mobile App Color Best Practices</h2>
            <ul className="space-y-2 leading-relaxed list-disc list-inside">
              <li>Use Primary for headers, status bar, and active navigation icons</li>
              <li>Keep Background light for card stacks and list content</li>
              <li>Reserve Accent for feature icons and primary actions</li>
              <li>Test text contrast with our{' '}
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
              <InlineTagLink href="/tools/color-palette-preview/landing-page">marketing landing page</InlineTagLink>.
              Build harmonies with the{' '}
              <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, validate contrast with
              the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>, and return to the{' '}
              <InlineTagLink href="/tools/color-palette-preview">color palette preview hub</InlineTagLink>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
