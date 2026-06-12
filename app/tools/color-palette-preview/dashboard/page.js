import { Suspense } from 'react';
import InlineTagLink from '../../../components/InlineTagLink';
import ToolBreadcrumbs from '../../../components/ToolBreadcrumbs';
import DashboardPreviewClient from './DashboardPreviewClient';
import PresetPaletteGrid from '../components/PresetPaletteGrid';
import { DASHBOARD_PRESET_PALETTES } from '../constants';
import { PALETTE_PREVIEW_BREADCRUMB_BASE } from '../../../../lib/breadcrumbSchema';
import {
  PALETTE_PREVIEW_DASHBOARD_SEO,
  buildPalettePreviewPageMetadata,
  buildPalettePreviewSoftwareSchema,
  buildPalettePreviewWebPageSchema,
} from '../../../../lib/palettePreviewSeo';

const SEO = PALETTE_PREVIEW_DASHBOARD_SEO;

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;

  return buildPalettePreviewPageMetadata({
    path: SEO.path,
    title: SEO.title,
    description: SEO.description,
    keywords: SEO.keywords,
    searchParams: params,
  });
}

const webPageSchema = buildPalettePreviewWebPageSchema({
  path: SEO.path,
  name: SEO.title,
  description: SEO.description,
});

const softwareSchema = buildPalettePreviewSoftwareSchema(SEO);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What colors work best for an admin dashboard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Admin dashboards work best with a restrained palette: a primary color for sidebar and navigation, a light background for content areas, secondary tones for charts and icons, and a single accent for alerts and CTAs. High contrast between text and surfaces keeps data readable during long sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many colors should a dashboard use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most professional dashboards use five core colors—primary, secondary, accent, background, and text—plus neutral grays for borders and dividers. Limiting chroma reduces visual noise so charts, tables, and KPI cards stay scannable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good background color for a dark dashboard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dark dashboards often use deep blue-grays or charcoal bases such as #1E1E2E or #1E293B, paired with light text above 4.5:1 contrast. Use accent colors sparingly on dark chrome so status badges and alerts remain visible without overwhelming data views.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I make a dashboard color palette accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ensure body text and labels meet WCAG AA contrast (4.5:1) against card and page backgrounds. Preview your palette on a dashboard mockup, then test each text and surface pair with a contrast checker before shipping to production.',
      },
    },
  ],
};

const breadcrumbItems = [
  ...PALETTE_PREVIEW_BREADCRUMB_BASE,
  { name: 'Dashboard', href: '/tools/color-palette-preview/dashboard' },
];

function PreviewFallback() {
  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 animate-pulse">
      <div className="h-28 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6" />
      <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg" />
    </div>
  );
}

export default function DashboardPreviewPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ToolBreadcrumbs items={breadcrumbItems} />

        <header className="max-w-4xl mx-auto mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">{SEO.h1}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{SEO.subtitle}</p>
        </header>

        <Suspense fallback={<PreviewFallback />}>
          <DashboardPreviewClient />
        </Suspense>

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Choosing a Dashboard Color Palette
            </h2>
            <p className="leading-relaxed">
              Admin dashboards reward discipline. Users scan KPIs, tables, and charts for hours—so your palette should
              establish clear hierarchy without competing for attention. Reserve saturated hues for navigation chrome and
              key actions; keep content surfaces light and neutral; use secondary tones for data visualization; and
              deploy accent colors only where urgency matters. Previewing on a realistic layout reveals whether your
              primary reads as trustworthy authority or visual weight, and whether chart colors stay distinguishable at
              a glance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Where Dashboard Colors Appear in the Mockup
            </h2>
            <ul className="space-y-2 leading-relaxed list-disc list-inside mb-4">
              <li>
                <strong className="text-gray-900 dark:text-white">Primary</strong> — left sidebar, active nav item, and
                top bar chrome
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Secondary</strong> — chart bars, icon tints, and
                secondary stat highlights
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Accent</strong> — alert badges, primary buttons, and
                positive trend indicators
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Background</strong> — main content canvas and card
                surfaces
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Text</strong> — KPI labels, table copy, and sidebar
                labels
              </li>
            </ul>
            <p className="leading-relaxed">
              Previewing these mappings before development catches the most common dashboard mistakes: a primary that
              overwhelms data views, chart colors that collide, or text that fails contrast on tinted cards. Pair this
              tool with our{' '}
              <InlineTagLink href="/blog/accessible-dark-mode-color-palette">
                accessible dark mode palette guide
              </InlineTagLink>{' '}
              if you are shipping a dark admin theme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Best Color Combinations for Dashboards
            </h2>
            <p className="leading-relaxed mb-5">
              Click a preset to load it into the generator and preview it on the dashboard mockup above.
            </p>
            <PresetPaletteGrid
              presets={DASHBOARD_PRESET_PALETTES}
              basePath="/tools/color-palette-preview/dashboard"
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Dashboard Color Best Practices</h2>
            <ul className="space-y-2 leading-relaxed list-disc list-inside">
              <li>Use Primary for sidebar and key navigation</li>
              <li>Keep Background very light (97%+ lightness)</li>
              <li>Use Accent sparingly for alerts and CTAs only</li>
              <li>
                Ensure text has 4.5:1 contrast ratio minimum — test with our{' '}
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
              See the same palette on a{' '}
              <InlineTagLink href="/tools/color-palette-preview/landing-page">landing page mockup</InlineTagLink> or a{' '}
              <InlineTagLink href="/tools/color-palette-preview/mobile-app">mobile app UI</InlineTagLink>. Build
              harmonies with the{' '}
              <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, validate contrast with
              the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>, and read our guide on{' '}
              <InlineTagLink href="/blog/accessible-dark-mode-color-palette">
                accessible dark mode color palettes
              </InlineTagLink>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
