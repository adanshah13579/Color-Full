import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import {
  PaletteQuickAnswer,
  PaletteShadesTable,
  PalettePairingsSection,
  PaletteUiUsageSection,
} from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';

export const metadata = buildPageMetadata({
  path: '/blog/sunset-vibes',
  canonicalPath: '/blog/sunset-color-palette',
  title: 'Sunset Vibes Color Palette: Hex Codes, Shades & Pairings',
  description:
    'Sunset vibes palette hex codes: #F97316 (orange), #EF4444 (red), #EC4899 (pink), #8B5CF6 (purple). Copy codes, see shades, and explore UI examples.',
  keywords: ['sunset palette', 'warm colors', 'orange hex', 'purple hex', 'Theme & Color'],
});
const articleSchema = getBlogArticleSchema(
  'Sunset Vibes Color Palette: Hex Codes, Shades & Pairings',
  'Sunset vibes palette hex codes: #F97316 (orange), #EF4444 (red), #EC4899 (pink), #8B5CF6 (purple). Copy codes, see shades, and explore UI examples.',
  'sunset-vibes',
  getBlogArticleDatePublished('sunset-vibes'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const PALETTE = [
  { hexCode: '#F97316', colorName: 'Orange', rgbCode: 'rgb(249, 115, 22)' },
  { hexCode: '#EF4444', colorName: 'Red', rgbCode: 'rgb(239, 68, 68)' },
  { hexCode: '#EC4899', colorName: 'Pink', rgbCode: 'rgb(236, 72, 153)' },
  { hexCode: '#8B5CF6', colorName: 'Purple', rgbCode: 'rgb(139, 92, 246)' },
];

const QUICK_ROWS = [
  { label: 'Orange', value: '#F97316' },
  { label: 'Red', value: '#EF4444' },
  { label: 'Pink', value: '#EC4899' },
  { label: 'Purple', value: '#8B5CF6' },
];

const SHADES = [
  { name: 'Dawn cream', hex: '#FFFBEB' },
  { name: 'Soft amber', hex: '#FDE68A' },
  { name: 'Sunset orange', hex: '#F97316' },
  { name: 'Burnt orange', hex: '#EA580C' },
  { name: 'Ember red', hex: '#EF4444' },
  { name: 'Deep red', hex: '#DC2626' },
  { name: 'Twilight pink', hex: '#EC4899' },
  { name: 'Royal violet', hex: '#6D28D9' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the Sunset Vibes hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The four core Sunset Vibes hex codes are #F97316 (orange), #EF4444 (red), #EC4899 (pink), and #8B5CF6 (purple). Use them for CTAs, gradients, and accents—not small body text without contrast testing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go with a sunset palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Charcoal (#111827), cream (#FFFBEB), and cool slate (#64748B) balance warm sunset tones. Limit visible primaries to two or three per screen for readable hierarchy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Sunset Vibes good for websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—for lifestyle, events, music, and creative portfolios. Keep body copy in dark neutrals, use sunset hues for heroes and buttons, and verify WCAG contrast for every text-on-color pair.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I copy Sunset Vibes hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the quick-answer copy buttons above for #F97316, #EF4444, #EC4899, and #8B5CF6, or copy from the shades table and sidebar palette. Paste into CSS variables, Figma styles, or your design token file.',
      },
    },
  ],
};

const PAIRINGS = [
  {
    title: 'Sunset + charcoal structure',
    body: 'Use #111827 or #0F172A for body copy and navigation on white so warm CTAs stay loud without muddying type.',
    swatches: ['#F97316', '#111827', '#F8FAFC'],
  },
  {
    title: 'Sunset + cream wash',
    body: 'Large cream or ivory fields (#FFFBEB, #FEF3C7) soften orange–pink gradients for editorial and lifestyle layouts.',
    swatches: ['#EC4899', '#FFFBEB', '#F97316'],
  },
  {
    title: 'Gradient hero (orange → purple)',
    body: 'Hero bands from #F97316 through #EC4899 to #8B5CF6 read as one sunset—keep UI chrome in neutrals below the fold.',
    swatches: ['#F97316', '#EC4899', '#8B5CF6'],
  },
  {
    title: 'Sunset + cool gray balance',
    body: 'Cool slate (#64748B) for secondary text cools down loud primaries so dashboards stay scannable.',
    swatches: ['#EF4444', '#64748B', '#F1F5F9'],
  },
];

export default function SunsetVibesPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="sunset-vibes" />
        </div>
      </div>


      <section className="bg-gradient-to-br from-amber-500 via-red-500 to-purple-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-amber-100 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Sunset Vibes Color Palette: Hex Codes, Shades &amp; Pairings
            </h1>
            <p className="text-amber-100 text-lg max-w-3xl mb-6">
              Orange → red → pink → purple for campaigns, music, and lifestyle brands that need energy without muddy gradients.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#F97316]"
              role="img"
              aria-label="Sunset Vibes primary orange"
            />
            <div className="flex items-center gap-4 text-amber-100 text-sm">
              <time dateTime="2025-02-10">February 10, 2025</time>
              <span>•</span>
              <span>9 min read</span>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              {PALETTE.map((c) => (
                <ColorSwatch key={c.hexCode} color={c.hexCode} name={c.colorName} hexCode={c.hexCode} showHexCopyIcon />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <PaletteQuickAnswer
                  theme="sunset"
                  ariaLabel="Sunset Vibes hex quick reference"
                  headline="Sunset Vibes — core hex codes"
                  subtext="Four anchors for CTAs, gradients, and accents. Add amber (#F59E0B) separately if you need a fifth warm highlight."
                  rows={QUICK_ROWS}
                />
                <PaletteShadesTable
                  title="Sunset shades (light → dark)"
                  description="Eight stops from pale dawn cream to deep violet—use light rows for backgrounds and saturated rows for buttons and heroes."
                  shades={SHADES}
                />
                <PalettePairingsSection
                  title="Palette pairings"
                  intro="Sunset Vibes fails when everything screams at once. These pairings give hierarchy and readable type."
                  pairings={PAIRINGS}
                />
                <PaletteUiUsageSection title="When to use warm bold palettes in UI">
                  <p>
                    Warm bold palettes like Sunset Vibes work when you need emotion fast—product launches, festival ticketing, creator tools, and DTC fashion.
                    Put <strong className="text-gray-900 dark:text-white">#F97316</strong> or <strong className="text-gray-900 dark:text-white">#EF4444</strong> on
                    primary CTAs only; reserve <strong className="text-gray-900 dark:text-white">#EC4899</strong> for secondary highlights and{' '}
                    <strong className="text-gray-900 dark:text-white">#8B5CF6</strong> for navigation chrome, tabs, or dark-mode glow. Never ship 14px body text on
                    saturated swatches without running the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.
                  </p>
                  <p>
                    On marketing sites, limit gradients to one hero band—stack orange-through-purple below the fold only if the rest of the page returns to
                    charcoal typography and white cards. Dashboards should invert the pattern: neutrals dominate, sunset colors mark KPI deltas and alerts.
                  </p>
                  <p>
                    Build hover, focus, and disabled ramps with the <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> from #F97316 or
                    #8B5CF6 so interaction states stay on-brand without inventing one-off hex values per screen.
                  </p>
                </PaletteUiUsageSection>

                <PaletteUiUsageSection title="Sunset Vibes in branding">
                  <p>
                    Document four hex anchors in brand guidelines: orange for energy, red for urgency, pink for romance or community, purple for creativity.
                    Photography and illustration should carry warmth; UI chrome should not—all-coral homepages fatigue users and hurt accessibility.
                  </p>
                  <p>
                    Event and music brands often pair Sunset Vibes with black wordmarks and cream posters. Food and travel brands soften the palette with{' '}
                    <strong className="text-gray-900 dark:text-white">#FFFBEB</strong> fields so #F97316 reads as appetite and adventure, not alarm.
                  </p>
                  <p>
                    Seasonal campaigns can rotate emphasis—summer pushes orange–pink gradients; winter adds more #8B5CF6 for evening mood. Keep token names stable
                    (<code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">primary</code>,{' '}
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">accent-warm</code>) even when marketing shifts hue emphasis.
                  </p>
                </PaletteUiUsageSection>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    Sunset Vibes is a warm-to-cool progression built for brands that want energy, nightlife, and creative edge. The sections above give
                    copy-ready hex codes; below is the full breakdown of roles, code, and accessibility limits.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What Is the Sunset Vibes Color Palette?</h2>
                  <p className="mb-4">
                    The palette moves from saturated orange and red through pink into purple—analogous with a temperature swing. It suits lifestyle, events,
                    entertainment, and portfolios that should feel dynamic, not corporate.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Four Anchors: Hex Codes and Roles</h2>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white">Orange (#F97316)</strong> — Primary CTA, sale strips, and hero emphasis.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Red (#EF4444)</strong> — Urgency, errors, and destructive actions when used sparingly.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Pink (#EC4899)</strong> — Links, secondary highlights, and gradient mid-tones.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Purple (#8B5CF6)</strong> — Cooler accent for navigation chrome and dark-mode glow.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Best Uses in Web and UI Design</h2>
                  <p className="mb-4">
                    Limit visible primaries to two or three per view. On dark backgrounds, warm tones pop—verify text with the{' '}
                    <InlineTagLink href="/tools/contrast-checker">accessibility contrast checker</InlineTagLink>. On light backgrounds, keep paragraphs in dark
                    neutrals.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Using Sunset Vibes in Code: CSS Variables and Design Tokens</h2>
                  <p className="mb-4">
                    Map hex values to semantic tokens (<code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">primary</code>,{' '}
                    <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">destructive</code>). Generate hover shades with the{' '}
                    <InlineTagLink href="/tools/palette-generator">color palette generator</InlineTagLink>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Accessibility and Contrast</h2>
                  <p className="mb-4">
                    Saturated oranges, reds, and purples often fail WCAG AA for normal text on white. Use them for buttons, icons, and large headings; use dark
                    gray or black for body copy.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">CSS variables for design tokens</h2>
                  <p className="mb-4">
                    Map sunset hues to semantic roles so engineers implement one source of truth:
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm overflow-x-auto mb-6 not-prose">
                    {`:root {
  --sunset-orange: #F97316;
  --sunset-red: #EF4444;
  --sunset-pink: #EC4899;
  --sunset-purple: #8B5CF6;
}`}
                  </pre>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose mb-8">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to extend or adjust the palette</h2>
                  <p className="mb-6">
                    Use our <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> for monochromatic orange or purple ramps, and validate
                    every pair in the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>. For copy-ready sunset hex anchors, see our{' '}
                    <InlineTagLink href="/blog/sunset-color-palette">sunset color palette hex codes</InlineTagLink> guide. For adjacent cool palettes, see{' '}
                    <InlineTagLink href="/blog/mauve-color">mauve color</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/ocean-breeze-hex-code">Ocean Breeze hex codes</InlineTagLink>, or{' '}
                    <InlineTagLink href="/blog/purple-dream">Purple Dream</InlineTagLink>.
                  </p>
                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <ColorPaletteClient colors={PALETTE} designTitle="Sunset Vibes" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
