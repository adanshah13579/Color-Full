import { Suspense } from 'react';
import InlineTagLink from '../../components/InlineTagLink';
import ToolBreadcrumbs from '../../components/ToolBreadcrumbs';
import ColorPalettePreviewHub from './ColorPalettePreviewHub';
import { PALETTE_PREVIEW_BREADCRUMB_BASE } from '../../../lib/breadcrumbSchema';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/tools/color-palette-preview',
  title: 'Website Color Palette Preview — See Colors on Real UI',
  description:
    'Preview your color palette on a real website before you build. See your colors on a dashboard, landing page or mobile app mockup. Free online tool.',
  keywords: [
    'color palette preview',
    'website color preview',
    'palette mockup',
    'UI color preview',
    'brand colors preview',
    'dashboard color preview',
    'Theme & Color',
  ],
});

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Website Color Palette Preview',
  description:
    'Preview your color palette on dashboard, landing page and mobile app mockups. Free online tool for designers and developers.',
  url: 'https://themeandcolor.com/tools/color-palette-preview',
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
      name: 'How do I preview a color palette on a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter your five brand colors on the Website Color Palette Preview hub—or click Generate Random Palette. Open the dashboard, landing page, or mobile app preview to see each color applied to realistic UI. Adjust hex values until the mockup looks balanced, then copy CSS variables or share the URL with your team.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors should I use for a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most websites use a primary brand color for navigation and buttons, a secondary color for icons and charts, an accent for CTAs and badges, a light background for page surfaces, and a dark text color for body copy. Use a palette generator to explore harmonies, preview them on mockups here, then validate contrast before launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many colors does a website need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused website palette usually needs five core colors: primary, secondary, accent, background, and text. You can expand with tints and shades for hover states and borders, but five well-chosen roles cover most marketing sites, dashboards, and mobile apps without visual noise.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I check if my website colors are accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Body text should meet WCAG AA contrast—at least 4.5:1 against its background. After previewing your palette on mockups, run your text and background hex codes through a contrast checker to confirm buttons, links, and paragraphs pass accessibility guidelines.',
      },
    },
  ],
};

function HubFallback() {
  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 animate-pulse">
      <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6" />
      <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded-lg" />
    </div>
  );
}

export default function ColorPalettePreviewPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ToolBreadcrumbs items={PALETTE_PREVIEW_BREADCRUMB_BASE} />

        <header className="max-w-4xl mx-auto mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Website Color Palette Preview
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Pick your colors and see them on a real website instantly
          </p>
        </header>

        <Suspense fallback={<HubFallback />}>
          <ColorPalettePreviewHub />
        </Suspense>

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Preview Colors Before You Design?
            </h2>
            <p className="leading-relaxed">
              Flat color swatches rarely tell the full story. A primary blue that feels confident in a square can look
              heavy on a sidebar or lost on a hero. Accent oranges that pop in isolation can clash with white cards or
              compete with secondary blues in charts. Previewing your palette on realistic dashboard, landing page, and
              mobile mockups shows hierarchy, contrast, and balance the way users will see them—saving hours of rework in
              Figma before you commit to components, tokens, or production CSS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              How to Use the Color Palette Preview Tool
            </h2>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Enter your 5 brand colors or click Generate Random Palette</li>
              <li>Choose a preview type — dashboard, landing page or mobile app</li>
              <li>Adjust colors until the mockup looks right</li>
              <li>Copy your palette and take it to Figma or your codebase</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What Are the 5 Color Roles?</h2>
            <ul className="space-y-3 leading-relaxed list-none">
              <li>
                <strong className="text-gray-900 dark:text-white">Primary:</strong> main brand color for buttons and
                navigation
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Secondary:</strong> supporting color for icons and
                hover states
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Accent:</strong> highlight color for CTAs and badges
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Background:</strong> page background, almost always
                light
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Text:</strong> body text, must pass WCAG contrast
                against background — verify with our{' '}
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

          <p className="leading-relaxed">
            Build harmonies with the{' '}
            <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, expand roles into scales
            with the <InlineTagLink href="/tools/tint-shade-generator">tint &amp; shade generator</InlineTagLink>, then
            preview them on a{' '}
            <InlineTagLink href="/tools/color-palette-preview/dashboard">dashboard</InlineTagLink>,{' '}
            <InlineTagLink href="/tools/color-palette-preview/landing-page">landing page</InlineTagLink>, or{' '}
            <InlineTagLink href="/tools/color-palette-preview/mobile-app">mobile app</InlineTagLink> mockup. Confirm
            accessibility with the{' '}
            <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
          </p>
        </div>
      </div>
    </div>
  );
}
