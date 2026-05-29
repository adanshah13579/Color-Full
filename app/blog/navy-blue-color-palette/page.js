import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { PaletteQuickAnswer, PaletteShadesTable } from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

const LAST_MODIFIED = '2026-05-30T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/navy-blue-color-palette',
  title: 'Navy Blue Color Palette: Hex Codes, Combinations & Schemes',
  description:
    'Navy blue color palette with hex codes for every combination. Navy + gold, navy + white, navy + coral and 6 more palettes. Copy hex codes instantly.',
  keywords: [
    'navy blue color palette',
    'navy blue palette',
    'navy colour palette',
    'navy blue color scheme',
    'navy blue colour scheme',
    'color palette with navy blue',
    'navy blue combinations',
    'navy blue and gold',
    '#000080',
    'navy hex',
    'UI design',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});

const QUICK_ROWS = [{ label: 'Hex', value: '#000080' }, { label: 'RGB', value: 'rgb(0, 0, 128)' }];

const NAVY_COMBINATIONS = [
  {
    title: 'Navy + Gold + White + Light Gray',
    body: 'Classic luxury and finance: navy structure (#000080), gold accents (#FFD700), white content wells (#FFFFFF), and light gray (#E5E7EB) for dividers and table zebra rows.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#FFD700', label: 'Gold' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#E5E7EB', label: 'Light gray' },
    ],
  },
  {
    title: 'Navy + Coral + Cream + Sand',
    body: 'Modern consumer and editorial brands: coral CTAs (#FF6B6B) pop on navy headers while cream (#FFF8F0) and sand (#D4C4A8) soften long-form reading areas.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#FF6B6B', label: 'Coral' },
      { hex: '#FFF8F0', label: 'Cream' },
      { hex: '#D4C4A8', label: 'Sand' },
    ],
  },
  {
    title: 'Navy + Mint + White + Dark Navy',
    body: 'Health and fintech dashboards: mint success states (#6EE7B7) on white cards, with navy chrome (#000080) and dark navy (#0A0A2E) for sidebars and dark mode shells.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#6EE7B7', label: 'Mint' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#0A0A2E', label: 'Dark navy' },
    ],
  },
  {
    title: 'Navy + Red + White + Silver',
    body: 'Patriotic, sports, and alert-heavy UIs: red (#DC2626) for urgency badges, silver (#C0C0C0) for borders and icons, white for body copy on light sections.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#DC2626', label: 'Red' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#C0C0C0', label: 'Silver' },
    ],
  },
  {
    title: 'Navy + Orange + Cream + Brown',
    body: 'Warm hospitality and autumn campaigns: orange highlights (#F97316), cream backgrounds (#FFF8E7), and brown (#78350F) for typography on light fields.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#F97316', label: 'Orange' },
      { hex: '#FFF8E7', label: 'Cream' },
      { hex: '#78350F', label: 'Brown' },
    ],
  },
  {
    title: 'Navy + Pink + White + Lavender',
    body: 'Beauty, lifestyle, and creative SaaS: pink accents (#F472B6) on navy heroes, lavender (#E6E6FA) for soft section backgrounds, white for product cards.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#F472B6', label: 'Pink' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#E6E6FA', label: 'Lavender' },
    ],
  },
];

const NAVY_WEBSITE_SCHEMES = [
  {
    title: 'Finance & professional services',
    body: 'Navy carries trust on headers, footers, and statement bands. Cool gray fills most of the viewport so users read numbers on calm surfaces; gold appears only on primary CTAs and positive indicators.',
    segments: [
      { pct: '60%', label: 'Navy', hex: '#000080', role: 'Header, footer, hero band, sidebar chrome' },
      { pct: '30%', label: 'Cool gray', hex: '#F3F4F6', role: 'Page background, cards, table wells' },
      { pct: '10%', label: 'Gold', hex: '#FFD700', role: 'Primary CTA, badges, chart highlights' },
    ],
  },
  {
    title: 'B2B SaaS marketing site',
    body: 'A saturated navy hero and pricing bar anchor the brand; off-white carries long-form copy and feature grids; coral handles the one action you want per screen—demo requests and trial signups.',
    segments: [
      { pct: '60%', label: 'Navy', hex: '#001F3F', role: 'Hero, nav, pricing header, footer' },
      { pct: '30%', label: 'Off-white', hex: '#FAFAF9', role: 'Body sections, testimonial cards, FAQ' },
      { pct: '10%', label: 'Coral', hex: '#FF6B6B', role: 'CTA buttons, link emphasis, promo tags' },
    ],
  },
  {
    title: 'Editorial & content publisher',
    body: 'Deep navy frames the brand without painting entire articles blue. Cream reduces glare for reading; teal accents mark newsletter signup and category pills without competing with headlines.',
    segments: [
      { pct: '60%', label: 'Dark navy', hex: '#0A0A2E', role: 'Masthead, category rails, podcast chrome' },
      { pct: '30%', label: 'Cream', hex: '#FFF8F0', role: 'Article background, pull quotes, archives' },
      { pct: '10%', label: 'Teal', hex: '#14B8A6', role: 'Subscribe CTA, tags, inline links' },
    ],
  },
];

const NAVY_GOLD_PALETTES = [
  {
    title: 'Classic navy + bright gold',
    body: 'The default luxury pairing: canonical navy (#000080), vivid gold (#FFD700), white content wells, and light gray dividers—ideal for banking, awards, and premium retail.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#FFD700', label: 'Gold' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#E5E7EB', label: 'Light gray' },
    ],
  },
  {
    title: 'Midnight navy + antique gold',
    body: 'Deeper navy (#0A1628) with muted antique gold (#C9A227) reads more editorial than casino-bright. Pair with warm ivory (#F8F6F0) for annual reports and heritage brands.',
    swatches: [
      { hex: '#0A1628', label: 'Midnight navy' },
      { hex: '#C9A227', label: 'Antique gold' },
      { hex: '#F8F6F0', label: 'Ivory' },
      { hex: '#2D3748', label: 'Slate text' },
    ],
  },
  {
    title: 'Royal navy + champagne gold',
    body: 'Slightly brighter navy (#001F3F) with champagne (#F5E6C8) softens contrast for wedding, hospitality, and beauty packaging where pure #FFD700 feels loud.',
    swatches: [
      { hex: '#001F3F', label: 'Royal navy' },
      { hex: '#F5E6C8', label: 'Champagne' },
      { hex: '#FFFFFF', label: 'White' },
      { hex: '#94A3B8', label: 'Blue gray' },
    ],
  },
  {
    title: 'Navy + dark goldenrod',
    body: 'Dark goldenrod (#B8860B) on navy passes as “old gold” in crests and university marks. Cream (#FFFAF0) body copy keeps paragraphs readable without stark white glare.',
    swatches: [
      { hex: '#000080', label: 'Navy' },
      { hex: '#B8860B', label: 'Dark goldenrod' },
      { hex: '#FFFAF0', label: 'Cream' },
      { hex: '#1F2937', label: 'Charcoal' },
    ],
  },
  {
    title: 'Midnight blue + brass',
    body: 'Midnight blue (#191970) with brass (#C5A028) suits industrial, maritime, and B2B hardware brands. Cool gray (#F9FAFB) surfaces prevent the pair from feeling heavy on long dashboards.',
    swatches: [
      { hex: '#191970', label: 'Midnight blue' },
      { hex: '#C5A028', label: 'Brass' },
      { hex: '#F9FAFB', label: 'Cool gray' },
      { hex: '#64748B', label: 'Slate' },
    ],
  },
];

const NAVY_SHADES = [
  { name: 'Alice blue', hex: '#F0F8FF' },
  { name: 'Light steel blue', hex: '#B0C4DE' },
  { name: 'Steel blue', hex: '#4682B4' },
  { name: 'Royal blue', hex: '#4169E1' },
  { name: 'Navy blue', hex: '#000080' },
  { name: 'Midnight blue', hex: '#191970' },
  { name: 'Dark navy', hex: '#0A0A2E' },
  { name: 'Prussian blue', hex: '#003153' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#FFD700', colorName: 'Gold', rgbCode: 'rgb(255, 215, 0)' },
  { hexCode: '#FF6B6B', colorName: 'Coral', rgbCode: 'rgb(255, 107, 107)' },
  { hexCode: '#FFFFFF', colorName: 'White', rgbCode: 'rgb(255, 255, 255)' },
  { hexCode: '#E5E7EB', colorName: 'Light gray', rgbCode: 'rgb(229, 231, 235)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a navy blue color palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A navy blue color palette centers on #000080 as the primary anchor, then adds secondary and accent hex codes—often gold, white, coral, mint, or gray—for backgrounds, CTAs, and typography. The best palettes name each role (primary, surface, accent) so web and brand teams stay consistent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go in a navy blue palette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common navy blue palette pairings include gold (#FFD700) and white for luxury, coral (#FF6B6B) and cream for modern consumer brands, mint (#6EE7B7) for health UI, and light gray (#E5E7EB) for minimal corporate layouts. Always test text and button contrast on navy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are good navy blue combinations for websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strong navy blue combinations for websites use navy for headers and footers (#000080), white or off-white for content wells, one saturated accent for CTAs, and a neutral gray for borders. Avoid filling entire viewports with saturated navy—alternate bands to reduce eye strain.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I build a navy blue palette from one hex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with #000080, then generate monochromatic tints and shades for surfaces, or pick one complementary accent (gold, coral, pink) plus two neutrals. Document hex codes in a style guide and verify WCAG contrast with a dedicated checker before shipping production UI.',
      },
    },
  ],
};

function NavyCombinationCard({ combo }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{combo.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{combo.body}</p>
      <div className="grid grid-cols-4 gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 mb-2">
        {combo.swatches.map((s) => (
          <div key={s.hex} className="aspect-[4/3] min-h-[2.5rem]" style={{ backgroundColor: s.hex }} title={`${s.label} ${s.hex}`} aria-hidden />
        ))}
      </div>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-gray-600 dark:text-gray-400">
        {combo.swatches.map((s) => (
          <li key={s.hex}>
            <span className="text-gray-500 dark:text-gray-500">{s.label}:</span> {s.hex}
          </li>
        ))}
      </ul>
    </li>
  );
}

function NavyWebsiteSchemeCard({ scheme }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{scheme.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{scheme.body}</p>
      <div
        className="flex h-14 w-full max-w-xl overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 mb-3"
        role="img"
        aria-label={`60-30-10 color scheme: ${scheme.title}`}
      >
        {scheme.segments.map((s) => (
          <div
            key={s.hex}
            className="flex min-w-0 flex-col items-center justify-center px-1 text-center"
            style={{
              width: s.pct,
              backgroundColor: s.hex,
              color: s.hex === '#FFD700' || s.hex === '#F3F4F6' || s.hex === '#FAFAF9' || s.hex === '#FFF8F0' ? '#111827' : '#ffffff',
            }}
          >
            <span className="text-[10px] font-bold uppercase sm:text-xs">{s.pct}</span>
            <span className="hidden font-mono text-[10px] sm:inline">{s.hex}</span>
          </div>
        ))}
      </div>
      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {scheme.segments.map((s) => (
          <li key={s.hex}>
            <span className="font-semibold text-gray-900 dark:text-white">{s.label}</span>{' '}
            <span className="font-mono text-xs text-gray-500 dark:text-gray-400">{s.hex}</span>
            <span className="text-gray-600 dark:text-gray-400"> — {s.role}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function NavyBlueColorPalettePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-200/90 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Navy Blue Color Palette: Hex Codes, Combinations &amp; Schemes
            </h1>
            <p className="text-blue-100/95 text-lg max-w-3xl mb-6">
              A complete <strong className="text-white font-semibold">navy blue color palette</strong> from #000080—navy + gold, white, coral, and six more{' '}
              <strong className="text-white font-semibold">navy blue combinations</strong> with copy-ready hex codes for websites, brands, and UI.
            </p>
            <div className="flex items-center gap-4 text-blue-200/90 text-sm">
              <time dateTime="2026-05-30">May 30, 2026</time>
              <span>•</span>
              <span>10 min read</span>
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
                  theme="navy"
                  ariaLabel="Navy blue palette quick answer"
                  headline="Navy Blue = #000080"
                  subtext="Canonical anchor for any navy blue palette—copy hex or RGB for CSS variables and design tokens."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    A practical <strong className="text-gray-900 dark:text-white">navy blue palette</strong> does more than repeat one deep blue. Whether you search for a{' '}
                    <strong className="text-gray-900 dark:text-white">navy colour palette</strong> or a{' '}
                    <strong className="text-gray-900 dark:text-white">color palette with navy blue</strong> as the anchor, you need #000080 (or your audited brand navy), lighter blues for hover and borders, neutrals for long reading sessions, and one accent that carries emotion—gold for prestige, coral for energy, mint for health. This guide packages six four-color combinations, three full{' '}
                    <strong className="text-gray-900 dark:text-white">navy blue color scheme</strong> layouts for websites, five navy-and-gold variations, and branding patterns so your{' '}
                    <strong className="text-gray-900 dark:text-white">navy blue colour scheme</strong> survives real products—not just mood boards.
                  </p>
                </div>

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40 p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Navy Blue Color Palette Combinations</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Each card lists four hex codes with swatches. Treat navy as the 60% structural color in the{' '}
                    <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 color rule</InlineTagLink>, assign one secondary neutral, and reserve the accent for CTAs and badges—the same proportion logic used in the website schemes below.
                  </p>
                  <ul className="space-y-4">
                    {NAVY_COMBINATIONS.map((combo) => (
                      <NavyCombinationCard key={combo.title} combo={combo} />
                    ))}
                  </ul>
                </div>

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40 p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Navy Blue Color Scheme for Websites</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    A production-ready <strong className="text-gray-800 dark:text-gray-200">navy blue color scheme</strong> assigns roles, not just pretty swatches. The{' '}
                    <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 color rule</InlineTagLink> keeps navy as the dominant ~60% (navigation, hero bands, footer), a secondary ~30% for readable surfaces (page background, cards), and a single accent ~10% for CTAs and highlights—so no hue fights for attention. Copy the hex codes below into CSS variables or your design-system tokens.
                  </p>
                  <ul className="space-y-4">
                    {NAVY_WEBSITE_SCHEMES.map((scheme) => (
                      <NavyWebsiteSchemeCard key={scheme.title} scheme={scheme} />
                    ))}
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-5 leading-relaxed">
                    If stakeholders push for more accent colors, split the 10% budget—never grow gold or coral to 30% without demoting navy from its structural role. For a deeper walkthrough of proportions, see our{' '}
                    <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 rule guide</InlineTagLink>.
                  </p>
                </div>

                <div className="not-prose rounded-2xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/20 p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Navy Blue and Gold Color Palette</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Navy and gold is the most requested pairing in any <strong className="text-gray-800 dark:text-gray-200">navy blue palette</strong>—finance, awards, universities, and luxury retail all reach for it. Gold reads as metal and achievement on deep blue; the trick is picking the right gold temperature and neutral so body copy stays readable. Below are five hex-ready variations from bright ceremonial gold to muted brass—copy any row into Figma or your token file.
                  </p>
                  <ul className="space-y-4">
                    {NAVY_GOLD_PALETTES.map((combo) => (
                      <NavyCombinationCard key={combo.title} combo={combo} />
                    ))}
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-5 leading-relaxed">
                    Test white and gold labels on navy with our{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>—bright gold (#FFD700) on #000080 often passes for large headings but fails for small caption text; antique and brass golds on midnight navy need verification too.
                  </p>
                </div>

                <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 bg-white dark:bg-gray-800/40">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Navy Blue in UI Design</h2>
                  <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Finance dashboards.</strong> Use #000080 for the top navigation bar and account summary band, #FFFFFF for card surfaces, #FFD700 sparingly for positive trend chips, and #E5E7EB for table dividers. White labels on navy often pass WCAG AA at large sizes—run small numerals through the{' '}
                      <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before launch.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Marketing landing pages.</strong> A navy hero (#000080) with coral CTA (#FF6B6B) on cream body (#FFF8F0) creates clear hierarchy without a third competing hue. Keep paragraph text in charcoal (#1F2937) on cream rather than white-on-navy paragraphs, which fatigue readers on long pages.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">SaaS settings and admin.</strong> Mint success toasts (#6EE7B7) on white panels, navy sidebar (#000080), and dark navy (#0A0A2E) for collapsed rails or dark mode give developers semantic roles: <code className="rounded px-1 py-0.5 text-xs font-mono bg-gray-100 dark:bg-slate-800">surface.sidebar</code>,{' '}
                      <code className="rounded px-1 py-0.5 text-xs font-mono bg-gray-100 dark:bg-slate-800">status.success</code>, <code className="rounded px-1 py-0.5 text-xs font-mono bg-gray-100 dark:bg-slate-800">surface.canvas</code>. Plug #000080 into the{' '}
                      <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink> to auto-build hover and disabled steps instead of hand-mixing blues.
                    </p>
                    <p>
                      Across patterns, any <strong className="text-gray-900 dark:text-white">navy blue colour scheme</strong> wins when navy stays structural: charts, photography, and illustration carry saturation; navy carries navigation, trust, and typographic hierarchy. Re-test after every font or radius change—rounded buttons and thin weights alter perceived contrast on #000080 more than flat rectangles do.
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Navy Blue in Branding</h2>
                  <p className="mb-4">
                    Industries reach for a <strong className="text-gray-900 dark:text-white">navy blue color palette</strong> because it signals stability without the harshness of black. Retail banking, insurers, and wealth managers pair navy with gold or silver to echo coins and metal cards. Government and civic brands use navy plus red and white for official recognition—document exact hex values so print vendors and web teams do not drift to different blues after one election cycle.
                  </p>
                  <p className="mb-4">
                    Maritime logistics, defense contractors, and nautical lifestyle labels lean on literal “sea” metaphor, but the same palette works for tech when you modernize typography: geometric sans, generous whitespace, and a single warm accent (orange or coral) so the brand does not read as 1990s corporate. Healthcare and clinical networks adopt navy for consent flows and portal headers because patients associate deep blue with competence; soften waiting-room screens with lavender or light gray rather than saturated navy fields.
                  </p>
                  <p className="mb-6">
                    Luxury fashion and hospitality often alternate navy packaging with cream and sand neutrals—see the coral-and-cream combination above for DTC brands that want energy without abandoning trust. When you pitch a new <strong className="text-gray-900 dark:text-white">navy blue palette</strong> to stakeholders, show three applications (logo lockup, app chrome, slide template) so approvers see proportion, not just a flat swatch strip.
                  </p>
                </div>

                <PaletteShadesTable
                  title="Navy Blue Shades"
                  description="Eight blues from airy tints to near-black navy. Use lighter rows for backgrounds; anchor UI chrome on #000080 or #191970."
                  shades={NAVY_SHADES}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <p className="mb-4">
                    When two teams disagree on “which navy,” the fix is governance: publish one primary (#000080 or your audited brand blue), map tints in the shades table to semantic names, and forbid one-off hex picks in marketing decks. Export the six combinations as JSON or CSS custom properties so engineers and designers share the same source. If you A/B test accents, change only the 10% accent slot—never the navy header without retesting every white label and focus ring on blue.
                  </p>
                  <p className="mb-6">
                    Whether you are refreshing a legacy brand or launching a B2B product, start with one canonical navy hex, pick one of the six <strong className="text-gray-900 dark:text-white">navy blue combinations</strong> above, then expand into a full token scale. For the single-code reference—including RGB, HSL, and a larger shade table—see our{' '}
                    <InlineTagLink href="/blog/navy-blue-hex-code">navy blue hex code guide</InlineTagLink>. To balance accent weight across layouts, read the{' '}
                    <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 color rule</InlineTagLink> next.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <BlogToolsCTA />

                  <p className="mt-8 mb-6 text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Related:</strong>{' '}
                    <InlineTagLink href="/blog/navy-blue-hex-code">Navy Blue Hex Code (#000080)</InlineTagLink>
                    {' · '}
                    <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 Color Rule</InlineTagLink>
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Navy + gold (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Navy palette" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
