import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import BlogToolsCTA from '../components/BlogToolsCTA';
import {
  PaletteQuickAnswer,
  PaletteShadesTable,
  PalettePairingsSection,
} from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import NavyBlueHexCopyBox from './NavyBlueHexCopyBox';

const LAST_MODIFIED = '2026-05-21T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/navy-blue-hex-code',
  title: 'Navy Blue Hex Code: #000080 — Copy Code, Shades & Palettes',
  description:
    'Navy blue hex code is #000080. Copy it instantly, explore 10 shades from light to dark, and see palette pairings for web and brand design.',
  keywords: [
    'navy blue hex',
    'navy hex code',
    'navy blue color code',
    'navy blue colour code',
    '#000080',
    'navy shades',
    'palette',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});

const QUICK_ROWS = [
  { label: 'Hex', value: '#000080' },
  { label: 'RGB', value: 'rgb(0, 0, 128)' },
  { label: 'HSL', value: 'hsl(240, 100%, 25%)' },
];

const NAVY_SHADES = [
  { name: 'Alice blue', hex: '#F0F8FF' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Light steel blue', hex: '#B0C4DE' },
  { name: 'Cornflower blue', hex: '#6495ED' },
  { name: 'Steel blue', hex: '#4682B4' },
  { name: 'Royal blue', hex: '#4169E1' },
  { name: 'Medium blue', hex: '#0000CD' },
  { name: 'Navy blue', hex: '#000080' },
  { name: 'Midnight blue', hex: '#191970' },
  { name: 'Dark navy', hex: '#0A0A2E' },
];

const NAVY_PAIRINGS = [
  {
    title: 'Navy + Gold (classic luxury)',
    body: 'Deep navy anchors prestige while #FFD700 supplies warmth in logos, foil-stamped accents, and icon strokes. Keep gold away from tiny type on navy unless contrast passes.',
    swatches: ['#000080', '#FFD700', '#FFFBEB'],
  },
  {
    title: 'Navy + White (clean professional)',
    body: 'White cards on navy bands, or navy headers over white content wells, remain the default for law, finance, and B2B SaaS. Watch for harsh pure white in dark mode—soften with #F8FAFC if needed.',
    swatches: ['#000080', '#FFFFFF', '#F1F5F9'],
  },
  {
    title: 'Navy + Coral (modern energetic)',
    body: 'Coral #FF6B6B lifts editorial and consumer brands: use it for secondary CTAs, badges, and illustration highlights while navy carries structure.',
    swatches: ['#000080', '#FF6B6B', '#FFF1F2'],
  },
  {
    title: 'Navy + Light gray (minimal corporate)',
    body: '#F5F5F5 fields with navy typography reads restrained and print-safe. Add a single saturated accent only when you need hierarchy beyond weight.',
    swatches: ['#000080', '#F5F5F5', '#E5E5E5'],
  },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#000080', colorName: 'Navy', rgbCode: 'rgb(0, 0, 128)' },
  { hexCode: '#FFD700', colorName: 'Gold', rgbCode: 'rgb(255, 215, 0)' },
  { hexCode: '#FFFFFF', colorName: 'White', rgbCode: 'rgb(255, 255, 255)' },
  { hexCode: '#FF6B6B', colorName: 'Coral', rgbCode: 'rgb(255, 107, 107)' },
  { hexCode: '#F5F5F5', colorName: 'Light gray', rgbCode: 'rgb(245, 245, 245)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the navy blue hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard navy blue hex code is #000080, which is RGB(0, 0, 128) and HSL(240, 100%, 25%). Some brands use darker custom navies such as #0A0A2E for backgrounds—document your choice in a style guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go with navy blue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Navy pairs well with gold (#FFD700) for luxury, white (#FFFFFF) for crisp contrast, coral (#FF6B6B) for energy, and light gray (#F5F5F5) for minimal corporate layouts. Always verify text and button contrast for accessibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is navy blue good for websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes—navy is widely used for headers, footers, and trust-oriented brands in finance, government, and healthcare. Use it as structure rather than filling entire viewports with saturated navy, and test white-on-navy text with a contrast checker.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between navy blue and dark blue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Navy (#000080) is a specific deep blue with full saturation at mid luminance. “Dark blue” is a broader label that can mean midnight blue, slate, or near-black blues with lower chroma. For tokens, name them explicitly (navy-900 vs blue-950) so teams do not mix values.',
      },
    },
  ],
};

export default function NavyBlueHexCodePage() {
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
              Navy Blue Hex Code: #000080 — Copy Code, Shades & Palettes
            </h1>
            <p className="text-blue-100/95 text-lg md:text-xl max-w-3xl mb-5">
              Navy blue hex code is #000080 (RGB 0, 0, 128). Copy it below.
            </p>
            <NavyBlueHexCopyBox />
            <p className="text-blue-100/95 text-lg max-w-3xl mb-6">
              Whether you search for a <strong className="text-white font-semibold">navy blue color code</strong> (US) or a{' '}
              <strong className="text-white font-semibold">navy blue colour code</strong> (UK), the canonical{' '}
              <strong className="text-white font-semibold">navy hex code</strong> is the same: #000080. Scroll for ten related{' '}
              <strong className="text-white font-semibold">navy blue color codes</strong> from light tints to midnight anchors, plus palette pairings for web and brand design.
            </p>
            <div className="flex items-center gap-4 text-blue-200/90 text-sm">
              <time dateTime="2026-05-21">May 21, 2026</time>
              <span>•</span>
              <span>9 min read</span>
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
                  ariaLabel="Navy blue quick reference"
                  headline="Navy Blue = #000080"
                  subtext="Canonical web navy — copy hex, RGB, or HSL for tokens, CSS, or design specs."
                  rows={QUICK_ROWS}
                />

                <PaletteShadesTable
                  title="Navy Blue Shades — Hex Code Table"
                  description="Ten stops from airy tints to near-black navy. Use lighter rows for backgrounds and darker rows for navigation, type on light UI, or hero bands. Generate your own lighter and darker steps from #000080 with our tint and shade generator."
                  shades={NAVY_SHADES}
                />
                <p className="text-gray-600 dark:text-gray-400 text-sm -mt-4 mb-8">
                  Need a full scale from one navy hex? Try the{' '}
                  <InlineTagLink href="/tools/tint-shade-generator">tint and shade generator</InlineTagLink> starting at #000080.
                </p>

                <PalettePairingsSection
                  title="Navy Blue Color Palette Pairings"
                  intro="These four combinations cover most brand and product needs without reinventing color theory—treat them as starting points, then tune in your brand system."
                  pairings={NAVY_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white">#000080</strong> is the standard navy blue hex code—the same value whether you label it a{' '}
                    <strong className="text-gray-900 dark:text-white">navy blue color code</strong> (US) or a{' '}
                    <strong className="text-gray-900 dark:text-white">navy blue colour code</strong> (UK). Designers and developers often shorten the query to{' '}
                    <strong className="text-gray-900 dark:text-white">navy hex code</strong>, but stakeholders still expect one disciplined, trustworthy blue—not the brightest screen blue and not a grayed-out slate. This value has decades of recognition because it reads unmistakably as blue while feeling weighty enough for logotypes, uniforms, and browser-safe palettes. If you are migrating a legacy print brand to the web, start with this canonical hex, then photograph real swatches beside LCD mockups so expectations stay aligned.
                  </p>
                  <p className="mb-6">
                    Practical work rarely stops at a single value. Product teams need lighter tints for table zebra rows, slightly greener blues for data viz harmony, and darker anchors for dark mode chrome—the shade table above lists ten related <strong className="text-gray-900 dark:text-white">navy blue color codes</strong> so you can say “use steel blue for borders” instead of debating ad hoc hex drift. Lock those names into tokens (<code className="rounded px-1 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">navy-700</code>,{' '}
                    <code className="rounded px-1 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">navy-50</code>) and let developers map them once in your theme file.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Navy Blue in UI & Web Design</h2>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Finance.</strong> Retail banking and wealth products lean on navy because it signals stability
                    next to currency and charts. A common pattern is a navy masthead with white account summaries below, plus gold or green only for positive deltas.
                    Avoid painting entire dashboard canvases in saturated #000080—fatigue sets in quickly. Instead, alternate navy bands with white or very light gray
                    content wells so numeric tables keep their scan lines. Before you ship, run white label text and icon buttons on navy through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>; WCAG AA for normal text requires a 4.5:1 ratio, and thin numerals
                    often fail sooner than you expect.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Government and civic services.</strong> Citizens associate deep blue with official communication,
                    which helps wayfinding but also raises the bar for accessibility compliance. Pair navy navigation with large sans-serif type, generous line
                    height, and underlined links in a lighter blue or white that passes automated audits. When bilingual or multi-script content appears, retest
                    because glyph density changes perceived weight. If you must stack informational alerts, use coral or amber sparingly so urgency does not
                    desaturate the whole page into noise.
                  </p>
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white">Healthcare.</strong> Clinical brands use navy to balance empathy with authority: softer than
                    black for body copy on white, yet serious enough for consent flows and insurance forms. Combine navy headers with pale blue-gray backgrounds
                    drawn from the alice or lavender rows to reduce glare for anxious users. For telehealth video UI, keep chrome navy but leave the video region
                    neutral so skin tones render naturally. Whenever you introduce coral accents for alerts, re-check focus rings—they must remain visible on both
                    navy and white surfaces.
                  </p>
                  <p className="mb-6">
                    Across all three sectors, the same rule holds: navy earns its keep as structure. Let charts, photography, and illustration carry saturation;
                    let navy carry hierarchy. When you need more steps for hover, pressed, and disabled states, plug{' '}
                    <strong className="text-gray-900 dark:text-white">#000080</strong> into our{' '}
                    <Link
                      href="/tools/palette-generator"
                      className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                    >
                      free color palette generator
                    </Link>{' '}
                    and generate monochromatic ramps instead of guessing lighter mixes by eye.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Navy Blue in Branding</h2>
                  <p className="mb-4">
                    Several global categories have effectively “claimed” navy through repetition: financial institutions print it on credit cards, insurers pair it
                    with red or gold crests, and maritime logistics brands underline literal nautical metaphor. You do not need to imitate them wholesale—instead,
                    study how they balance navy with neutrals so marketing photography still feels vibrant. Luxury fashion houses periodically return to navy and
                    gold packaging because the duo reads expensive under store lighting and photographs cleanly for social campaigns.
                  </p>
                  <p className="mb-4">
                    Startups sometimes avoid navy for fear of looking corporate, yet disciplined navy can differentiate a crowded SaaS category when competitors
                    default to purple gradients. The trick is pairing navy with a single unexpected accent—coral for consumer energy, lime for climate tech, or
                    warm sand for editorial lifestyle—while keeping typography modern (humanist sans, ample whitespace). Document minimum clear space around your
                    logo mark when navy touches photography so designers do not bury products in blue cast.
                  </p>
                  <p className="mb-6">
                    If you manage multi-market rollouts, remember that “navy” in textile or paint catalogs may not match #000080 on screen. Capture both digital
                    hex and physical Pantone references in your guidelines, and specify which value is authoritative for web versus print vendors. That single
                    decision prevents the slow drift that turns a confident navy brand into a mismatched blue-gray after two campaign cycles.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Working with navy in design systems</h2>
                  <p className="mb-4">
                    Treat navy as a semantic role—<em>brand.primary</em> or <em>surface.inverse</em>—not merely a decorative fill. Map hero gradients separately so
                    marketing can iterate without breaking component contrast. When dark mode ships, decide whether navy becomes lighter (more steel blue) or flips to
                    midnight for OLED-friendly blacks; either path is valid if you document hover and focus treatments consistently.
                  </p>
                  <p className="mb-6">
                    Finally, connect palette work to accessibility culture: every navy-heavy launch should include paired checks for default, high-contrast, and
                    forced-colors modes. The pairings in this guide are battle-tested starting points, but your typography scale and border radii change coverage
                    math. Ship fewer hex codes but name them clearly, and you will spend less time reopening Figma files to answer “which navy is canonical?”
                  </p>

                  <div className="not-prose my-10 rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/80 dark:bg-slate-900/60 p-6 md:p-8 text-center">
                    <p className="text-gray-800 dark:text-gray-200 text-lg font-medium mb-4">
                      Build harmonies, tints, and semantic scales from navy in one place.
                    </p>
                    <Link
                      href="/tools/palette-generator"
                      className="inline-flex items-center justify-center rounded-xl bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-950 transition-colors"
                    >
                      Try our free color palette generator
                    </Link>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose">
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is the navy blue hex code?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        <strong>#000080</strong> is the widely accepted web navy—RGB(0, 0, 128), HSL(240, 100%, 25%). Use darker custom values like #0A0A2E only when
                        you intentionally want near-black navy.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What colors go with navy blue?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Gold, white, coral, and light gray are reliable partners; see the pairing cards above for hex anchors and layout ideas.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">Is navy blue good for websites?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Yes—for navigation, trust surfaces, and regulated industries. Combine with strong neutrals and validate contrast for all interactive states.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is the difference between navy blue and dark blue?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Navy is a specific saturated deep blue (#000080). “Dark blue” is a broad family that can include desaturated slate-blues or midnight tones—
                        always define hex in your style guide.
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-8 mb-6">
                    For more palette stories, see{' '}
                    <InlineTagLink href="/blog/ocean-breeze-hex-code">Ocean Breeze hex codes</InlineTagLink> or{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">Forest green hex reference</InlineTagLink>. When you are ready to test production pairs, our{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> catches failing white-on-navy combinations before they reach users.
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Navy pairings (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Navy & accents" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
