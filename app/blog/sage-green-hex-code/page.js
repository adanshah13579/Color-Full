import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import ColorSwatch from '../[slug]/ColorSwatch';
import BlogToolsCTA from '../components/BlogToolsCTA';
import {
  PaletteQuickAnswer,
  PaletteShadesTable,
  PalettePairingsSection,
} from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';
import AeoDirectAnswer from '../components/AeoDirectAnswer';

const LAST_MODIFIED = '2026-06-26T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/sage-green-hex-code',
  title: 'Sage Green Hex Code #B2AC88 — Copy for Canva',
  description:
    'Sage green hex code #B2AC88 · RGB(178,172,136). Copy sage green color code for Canva, CSS & Figma. 10 shades + dark sage codes. Free one-click copy.',
  keywords: [
    'sage green hex code',
    'sage green hex code canva',
    'sage green color code canva',
    'sage hex code',
    'sage green code',
    'sage colour code',
    'sage green color number',
    'sage green hex colour',
    'sage green rgb',
    'sage green rgb code',
    'dark sage green hex code',
    'dark sage green color code',
    'light sage green hex code',
    'sage green color palette hex codes',
    'sage green hex',
    '#B2AC88',
    'sage shades',
    'palette',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-11T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Sage Green Hex Code #B2AC88 — Copy for Canva',
  'Sage green hex code #B2AC88 · RGB(178,172,136). Copy sage green color code for Canva, CSS & Figma. 10 shades + dark sage codes. Free one-click copy.',
  'sage-green-hex-code',
  getBlogArticleDatePublished('sage-green-hex-code'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const QUICK_ROWS = [
  { label: 'Hex', value: '#B2AC88' },
  { label: 'RGB', value: 'rgb(178, 172, 136)' },
  { label: 'HSL', value: 'hsl(51, 18%, 62%)' },
];

const SAGE_SHADES = [
  { name: 'Honeydew', hex: '#F0FFF0' },
  { name: 'Mint cream', hex: '#F5FFFA' },
  { name: 'Tea green', hex: '#D0F0C0' },
  { name: 'Light sage', hex: '#BCB88A' },
  { name: 'Sage', hex: '#B2AC88' },
  { name: 'Dark sage', hex: '#8A8462' },
  { name: 'Artichoke', hex: '#8F9779' },
  { name: 'Asparagus', hex: '#87A96B' },
  { name: 'Fern green', hex: '#4F7942' },
  { name: 'Hunter green', hex: '#355E3B' },
];

const SAGE_PAIRINGS = [
  {
    title: 'Sage + Terracotta (warm contrast)',
    body: 'Terracotta #E2725B adds sun-baked warmth for CTAs, ceramic-inspired icons, and editorial pull quotes. Keep terracotta for accents so sage can stay the dominant field color without muddying skin tones in photography.',
    swatches: ['#B2AC88', '#E2725B', '#FDF2F0'],
  },
  {
    title: 'Sage + Cream (soft hospitality)',
    body: 'Cream #FFFDD0 reads like linen and paper—ideal for backgrounds behind sage navigation or product cards in wellness retail. Validate sage text on cream with the contrast checker; bump to dark sage or charcoal for small type.',
    swatches: ['#B2AC88', '#FFFDD0', '#F5F0E6'],
  },
  {
    title: 'Sage + Dusty rose (lifestyle editorial)',
    body: 'Dusty rose #DCAE96 flatters botanical and skincare imagery while staying quieter than bubblegum pink. Use rose for tags, testimonials, or illustration fills; anchor headings in charcoal or hunter green for legibility.',
    swatches: ['#B2AC88', '#DCAE96', '#FAF5F2'],
  },
  {
    title: 'Sage + Charcoal (grounded minimal)',
    body: 'Charcoal #36454F gives typography and iconography a cool anchor so sage never feels like 1970s overload. Pair wide sage panels with charcoal rules, captions, and footer copy for a gallery-like layout.',
    swatches: ['#B2AC88', '#36454F', '#E8ECE9'],
  },
];

const SAGE_COMPLETE_PALETTES = [
  {
    title: 'Wellness & spa',
    body: 'Calm surfaces for meditation apps, spas, and supplement brands: sage fields, cream cards, terracotta CTAs, dusty rose tags, and charcoal type.',
    swatches: [
      { hex: '#B2AC88', label: 'Sage' },
      { hex: '#FFFDD0', label: 'Cream' },
      { hex: '#E2725B', label: 'Terracotta' },
      { hex: '#DCAE96', label: 'Dusty rose' },
      { hex: '#36454F', label: 'Charcoal' },
    ],
  },
  {
    title: 'Monochromatic sage ramp',
    body: 'Five-step sage ladder from airy highlight to deep anchor—ideal when you need one hue family for backgrounds, borders, and emphasis without clashing accents.',
    swatches: [
      { hex: '#F0FFF0', label: 'Honeydew' },
      { hex: '#BCB88A', label: 'Light sage' },
      { hex: '#B2AC88', label: 'Sage' },
      { hex: '#8A8462', label: 'Dark sage' },
      { hex: '#355E3B', label: 'Hunter green' },
    ],
  },
  {
    title: 'Botanical retail',
    body: 'Organic grocery and plant-based CPG: sage packaging tones, hunter for ingredient callouts, tea green for success states, cream shelves, and warm gold accents.',
    swatches: [
      { hex: '#B2AC88', label: 'Sage' },
      { hex: '#87A96B', label: 'Asparagus' },
      { hex: '#D0F0C0', label: 'Tea green' },
      { hex: '#F5F0E6', label: 'Warm cream' },
      { hex: '#C9A227', label: 'Antique gold' },
    ],
  },
  {
    title: 'Soft editorial lifestyle',
    body: 'Lookbooks and skincare editorial: sage section bands, blush highlights, ivory reading wells, cool slate captions, and dark sage for navigation chrome.',
    swatches: [
      { hex: '#B2AC88', label: 'Sage' },
      { hex: '#E8C4B8', label: 'Blush' },
      { hex: '#FAF9F6', label: 'Ivory' },
      { hex: '#64748B', label: 'Slate' },
      { hex: '#8A8462', label: 'Dark sage' },
    ],
  },
];

const CANVA_SAGE_SWATCHES = [
  { hexCode: '#B2AC88', colorName: 'Classic sage', rgbCode: 'rgb(178, 172, 136)' },
  { hexCode: '#A8A878', colorName: 'Muted sage', rgbCode: 'rgb(168, 168, 120)' },
  { hexCode: '#C8C4A0', colorName: 'Light sage', rgbCode: 'rgb(200, 196, 160)' },
];

const DARK_SAGE_SWATCHES = [
  { hexCode: '#6B6B47', colorName: 'Dark sage', rgbCode: 'rgb(107, 107, 71)' },
  { hexCode: '#5C5C3D', colorName: 'Deep dark sage', rgbCode: 'rgb(92, 92, 61)' },
  { hexCode: '#4A4A2E', colorName: 'Forest dark sage', rgbCode: 'rgb(74, 74, 46)' },
];

const LIGHT_SAGE_SWATCHES = [
  { hexCode: '#D4D4B0', colorName: 'Pale sage', rgbCode: 'rgb(212, 212, 176)' },
  { hexCode: '#E8E8D0', colorName: 'Soft sage', rgbCode: 'rgb(232, 232, 208)' },
  { hexCode: '#F0F0E0', colorName: 'Wash sage', rgbCode: 'rgb(240, 240, 224)' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#B2AC88', colorName: 'Sage', rgbCode: 'rgb(178, 172, 136)' },
  { hexCode: '#E2725B', colorName: 'Terracotta', rgbCode: 'rgb(226, 114, 91)' },
  { hexCode: '#FFFDD0', colorName: 'Cream', rgbCode: 'rgb(255, 253, 208)' },
  { hexCode: '#DCAE96', colorName: 'Dusty rose', rgbCode: 'rgb(220, 174, 150)' },
  { hexCode: '#36454F', colorName: 'Charcoal', rgbCode: 'rgb(54, 69, 79)' },
];

const RGB_QUICK_ROWS = [
  { label: 'RGB', value: 'rgb(178, 172, 136)' },
  { label: 'RGB (compact)', value: 'RGB(178,172,136)' },
  { label: 'Channels', value: '178, 172, 136' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the sage green hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A widely used sage green hex code is #B2AC88, approximately RGB(178, 172, 136) and HSL(51, 18%, 62%). Paint and textile sages vary; define your canonical hex in the design system so web and print stay aligned.',
      },
    },
    {
      '@type': 'Question',
      name: 'What colors go well with sage green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terracotta (#E2725B), cream (#FFFDD0), dusty rose (#DCAE96), and charcoal (#36454F) are strong pairings for web and interior contexts. Always test text and control colors for WCAG contrast.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sage green good for website backgrounds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes for large calm surfaces in wellness and lifestyle brands, especially when paired with charcoal type and cream cards. Avoid low-contrast sage-on-sage for body text; use darker shades from the table or charcoal for small copy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between sage green and olive green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sage is typically a muted gray-green (like #B2AC88) with soft luminance. Olive leans more yellow-green and often reads oilier or richer. Name tokens explicitly (sage-500 vs olive-600) so teams do not swap them in CSS by habit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the sage green hex code for Canva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter #B2AC88 in Canva under Custom colors. For a slightly greener sage use #A8A878; for lighter backgrounds try #C8C4A0. Save swatches to your brand kit so social posts match your website.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the sage green RGB code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The sage green RGB code for #B2AC88 is RGB(178,172,136)—the same as rgb(178, 172, 136) in CSS. Use these channels in design tools, Android resources, and print specs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a dark sage green hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use #6B6B47, #5C5C3D, or #4A4A2E for navigation, footers, and small type on light backgrounds. These dark sage green color code values pair with cream cards and white labels when contrast is verified.',
      },
    },
  ],
};

function SageShadeSwatchRow({ shades }) {
  return (
    <div className="flex flex-wrap gap-6 not-prose">
      {shades.map((s) => (
        <ColorSwatch key={s.hexCode} color={s.hexCode} name={s.colorName} hexCode={s.hexCode} showHexCopyIcon />
      ))}
    </div>
  );
}

function SagePaletteCard({ palette }) {
  return (
    <li className="rounded-xl border border-lime-200/80 dark:border-stone-600 bg-white dark:bg-stone-800/60 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{palette.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{palette.body}</p>
      <div className="grid grid-cols-5 gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-stone-600 mb-2">
        {palette.swatches.map((s) => (
          <div
            key={s.hex}
            className="aspect-square min-h-[2.5rem]"
            style={{ backgroundColor: s.hex }}
            title={`${s.label} ${s.hex}`}
            aria-hidden
          />
        ))}
      </div>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-gray-600 dark:text-gray-400">
        {palette.swatches.map((s) => (
          <li key={s.hex}>
            <span className="text-gray-500 dark:text-gray-500">{s.label}:</span> {s.hex}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function SageGreenHexCodePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="sage-green-hex-code" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-stone-900 via-[#2f3d2c] to-emerald-950 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-lime-100/90 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Sage Green Hex Code: #B2AC88
            </h1>
            <AeoDirectAnswer
              question="What is the sage green hex code?"
              answer="The sage green hex code is #B2AC88 — RGB(178, 172, 136). Copy this sage green color code for Canva, CSS, and Figma. It is a muted gray-green for wellness, organic, and lifestyle brands."
              codes={[
                { label: 'Hex', value: '#B2AC88' },
                { label: 'RGB', value: '178, 172, 136' },
              ]}
            />
            <p className="text-stone-200/95 text-lg max-w-3xl mb-6">
              Copy the canonical <strong className="text-white font-semibold">sage green hex code</strong> #B2AC88 instantly—plus dark and light sage shades,{' '}
              <strong className="text-white font-semibold">sage green rgb code</strong> values, Canva custom-color steps, and palette pairings. Need the color name? Try our{' '}
              <InlineTagLink href="/tools/color-name-finder" className="text-lime-200 hover:text-white underline underline-offset-2">
                color name finder
              </InlineTagLink>
              .
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/15 shadow-2xl mb-6 bg-[#B2AC88]"
              role="img"
              aria-label="Sage green color swatch hex B2AC88"
            />
            <div className="flex items-center gap-4 text-lime-100/85 text-sm">
              <time dateTime="2026-06-26">Updated June 26, 2026</time>
              <span>•</span>
              <span>12 min read</span>
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
                  theme="sage"
                  ariaLabel="Sage green quick reference"
                  headline="Sage Green = #B2AC88"
                  subtext="The standard sage hex code and sage green code for CSS tokens—copy hex, sage green rgb (178, 172, 136), or HSL below."
                  rows={QUICK_ROWS}
                />

                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  To use sage green in Canva, open the color picker, click &lsquo;Custom colors&rsquo; and enter #B2AC88. For lighter sage try #C8C4A0, for darker sage use #8A8462.
                </p>

                <div className="not-prose rounded-2xl border border-violet-200 dark:border-violet-900/50 bg-violet-50/60 dark:bg-violet-950/20 p-5 sm:p-6 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Sage Green Hex Code for Canva</h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Canva does not ship a single locked &ldquo;sage&rdquo; swatch—designers search for a{' '}
                    <strong className="text-gray-900 dark:text-white">sage green hex code Canva</strong> or{' '}
                    <strong className="text-gray-900 dark:text-white">sage green color code Canva</strong> value and paste custom hex instead. Follow these steps so Instagram carousels, pitch decks, and your site share the same{' '}
                    <strong className="text-gray-900 dark:text-white">sage green code</strong>:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    <li>Open any design and select a shape, text box, or background fill.</li>
                    <li>Click the color swatch in the top toolbar to open the color picker.</li>
                    <li>Choose <strong className="text-gray-900 dark:text-white">+</strong> or <strong className="text-gray-900 dark:text-white">Custom colors</strong> (wording varies slightly by Canva version).</li>
                    <li>Paste the primary <strong className="text-gray-900 dark:text-white">sage hex code</strong>{' '}
                      <span className="font-mono text-violet-800 dark:text-violet-300">#B2AC88</span> and confirm.</li>
                    <li>Add companion swatches: <span className="font-mono">#A8A878</span> for slightly greener sage accents, and{' '}
                      <span className="font-mono">#C8C4A0</span> for soft section backgrounds.</li>
                    <li>Save all three to your Brand Kit (Pro) or document them in a shared style guide so freelancers paste the same numbers.</li>
                  </ol>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    If Canva&rsquo;s stock palette shows a different green, ignore it—the custom hex above is your source of truth. The swatches below match the three Canva-ready codes; click any hex to copy.
                  </p>
                  <SageShadeSwatchRow shades={CANVA_SAGE_SWATCHES} />
                </div>

                <div className="not-prose rounded-2xl border border-stone-300 dark:border-stone-600 bg-stone-100/80 dark:bg-stone-900/50 p-5 sm:p-6 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Dark Sage Green Hex Code</h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Searches for <strong className="text-gray-900 dark:text-white">dark sage green hex code</strong> and{' '}
                    <strong className="text-gray-900 dark:text-white">dark sage green color code</strong> usually mean anchors for navigation, footers, and small type—not the mid-tone #B2AC88 wash. Dark sage reads grounded on cream cards and passes contrast more often than the main sage when you need 14px body copy. Use these three stops as a mini ramp: UI chrome at #6B6B47, pressed states at #5C5C3D, and deep emphasis at #4A4A2E.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    In CSS, map them to tokens like <code className="text-xs font-mono bg-white dark:bg-stone-800 px-1.5 py-0.5 rounded">--sage-dark-600</code> through{' '}
                    <code className="text-xs font-mono bg-white dark:bg-stone-800 px-1.5 py-0.5 rounded">--sage-dark-900</code>. Pair white or cream labels on #4A4A2E buttons and run every combination through the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before launch.
                  </p>
                  <SageShadeSwatchRow shades={DARK_SAGE_SWATCHES} />
                </div>

                <div className="not-prose rounded-2xl border border-lime-200/90 dark:border-lime-900/50 bg-lime-50/70 dark:bg-stone-900/45 p-5 sm:p-6 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Light Sage Green Hex Code</h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    The <strong className="text-gray-900 dark:text-white">light sage green hex code</strong> family covers airy backgrounds, modal wells, and email section bands where #B2AC88 would feel too heavy. These three values step from usable tint to near-neutral highlight—ideal when you want calm without turning the page gray.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Use #D4D4B0 for cards on white, #E8E8D0 for full-width bands, and #F0F0E0 when you need a barely-there sage wash behind photography. Keep headings in dark sage or charcoal so the{' '}
                    <strong className="text-gray-900 dark:text-white">sage green color number</strong> story stays readable at a glance.
                  </p>
                  <SageShadeSwatchRow shades={LIGHT_SAGE_SWATCHES} />
                </div>

                <div className="not-prose space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Sage Green RGB Code</h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Developers and print vendors often ask for the <strong className="text-gray-900 dark:text-white">sage green rgb</strong> equivalent instead of hex. For #B2AC88, the{' '}
                    <strong className="text-gray-900 dark:text-white">sage green rgb code</strong> is{' '}
                    <span className="font-mono text-gray-900 dark:text-white">RGB(178,172,136)</span>—red 178, green 172, blue 136. That is the same color as{' '}
                    <span className="font-mono">rgb(178, 172, 136)</span> in CSS, Android XML, and most Figma export pipelines. British teams may list the same value under a{' '}
                    <strong className="text-gray-900 dark:text-white">sage green hex colour</strong> or <strong className="text-gray-900 dark:text-white">sage colour code</strong> heading in brand PDFs; the numbers do not change, only the spelling.
                  </p>
                  <PaletteQuickAnswer
                    theme="sage"
                    ariaLabel="Sage green RGB copy values"
                    headline="RGB for #B2AC88"
                    subtext="Copy rgb(), compact RGB(), or channel list for handoff."
                    rows={RGB_QUICK_ROWS}
                  />
                </div>

                <PaletteShadesTable
                  title="Sage Green Shades — Hex Code Table"
                  description="From airy honeydew and mint through the canonical sage row to deep hunter. Use lighter stops—including light sage green hex code #BCB88A—for wash backgrounds; use dark sage green color code #8A8462 and hunter for type, icons, and pressed states."
                  shades={SAGE_SHADES}
                />

                <div className="not-prose rounded-2xl border border-lime-200/90 dark:border-lime-900/50 bg-lime-50/80 dark:bg-stone-900/50 p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sage Green Color Palette with Hex Codes</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Need a full <strong className="text-gray-800 dark:text-gray-200">sage green color palette hex codes</strong> set—not just one swatch? Each palette below lists five copy-ready values with swatches for wellness, monochromatic ramps, retail, and editorial layouts. Paste into Figma variables, CSS custom properties, or your Canva brand kit alongside #B2AC88.
                  </p>
                  <ul className="space-y-4">
                    {SAGE_COMPLETE_PALETTES.map((palette) => (
                      <SagePaletteCard key={palette.title} palette={palette} />
                    ))}
                  </ul>
                </div>

                <PalettePairingsSection
                  title="Sage Green Palette Pairings"
                  intro="These four mixes cover organic retail, spa and fitness apps, and editorial lifestyle sites—tune saturation in photography, then lock hex in your theme."
                  pairings={SAGE_PAIRINGS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p className="mb-6">
                    Sage green sits in the sweet spot between decorative pastel and serious earth tone. The{' '}
                    <strong className="text-gray-900 dark:text-white">sage green code</strong>{' '}
                    <strong className="text-gray-900 dark:text-white">#B2AC88</strong>—also written as the common{' '}
                    <strong className="text-gray-900 dark:text-white">sage colour code</strong> in UK brand guides and sometimes labeled as a{' '}
                    <strong className="text-gray-900 dark:text-white">sage green color number</strong> in paint decks—reads as “dried herb and linen” on screen: enough chroma to feel alive, low enough saturation to sit behind long-form content without shouting. Whether you file it as a{' '}
                    <strong className="text-gray-900 dark:text-white">sage green hex colour</strong> in Figma or a US-style color token in code, the digits stay the same. That is why product teams reach for it when they want an organic association without the high-energy punch of kelly green or the coldness of blue-gray slate.
                  </p>
                  <p className="mb-6">
                    The shade ladder above is deliberate. Honeydew and mint cream give you nearly neutral highlights for cards and modals; tea green introduces a hint of vitality for success states that should not look like finance dashboards. The canonical{' '}
                    <strong className="text-gray-900 dark:text-white">sage hex code</strong> #B2AC88 sits mid-ramp; pair it with{' '}
                    <strong className="text-gray-900 dark:text-white">sage green rgb</strong> values{' '}
                    <span className="font-mono text-sm">178, 172, 136</span> in design-system docs so engineers and print vendors stay aligned. Dark sage through hunter green supplies the anchors you need for navigation, footers, and illustration silhouettes—see the dedicated dark and light sage sections above for copy-ready swatches. If your brand guide only lists one sage hex, you are one redesign away from rogue tints—promote at least three roles (surface, border, emphasis) to tokens before engineering hard-codes new guesses.
                  </p>
                  <p className="mb-6">
                    When stakeholders ask “what is the sage green color number?” point them to #B2AC88 first, then to the dark trio (#6B6B47, #5C5C3D, #4A4A2E) for type and chrome. Social teams running Canva templates should use the same{' '}
                    <strong className="text-gray-900 dark:text-white">sage green hex code</strong> in custom colors—not a visually similar stock green—so paid ads and landing pages stay on-brand. Document hex, RGB, and HSL in one table (like the quick-answer box at the top) and your handoffs stop drifting between disciplines.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Sage Green in UI & Web Design</h2>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Wellness and mindfulness products.</strong> Meditation apps, sleep trackers, and supplement
                    brands use sage as a canvas because it lowers visual noise next to breathing animations and soft photography. Pair sage backgrounds with cream
                    cards and charcoal body copy; reserve terracotta for primary actions so users can still spot the main path. Before launch, run sage-on-cream
                    and charcoal-on-sage pairs through our{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>—muted palettes fail WCAG most often on secondary buttons and
                    disabled states, not on hero headlines.
                  </p>
                  <p className="mb-4">
                    <strong className="text-gray-900 dark:text-white">Organic food and beverage.</strong> Farm-to-table grocers and plant-based CPG sites lean on
                    sage to echo packaging without cloning every competitor’s kraft brown. Use asparagus and fern rows from the table for ingredient callouts and
                    progress bars; keep photography color grading consistent so UI greens do not clash with real lettuce in shots.{' '}
                    <InlineTagLink href="/blog/dusty-rose-hex-code">dusty rose hex code</InlineTagLink> works well for loyalty badges and “new harvest” ribbons because it reads as human warmth rather than discount red.
                  </p>
                  <p className="mb-6">
                    <strong className="text-gray-900 dark:text-white">Lifestyle editorial and fashion.</strong> Lookbooks that mix sage section backgrounds with
                    charcoal typography mimic print editorial rhythm online. Lifestyle brands often alternate sage bands with full-bleed imagery; ensure text
                    overlays use a scrim or switch to white type only when luminance math supports it. For dark mode, avoid painting entire screens in deep hunter—
                    instead use charcoal as the base and sage as accent chips so OLED black depth is preserved.
                  </p>
                  <p className="mb-6">
                    Interaction design detail: sage makes an excellent default for “calm” empty states and success banners because it does not carry the alarm of
                    yellow or the sterility of pure gray. When you need hierarchy beyond color, combine sage fills with weight and spacing; when you need more
                    energy, import a single warm accent from the pairing section rather than saturating the whole ramp. To extend{' '}
                    <strong className="text-gray-900 dark:text-white">#B2AC88</strong> into hover and focus rings programmatically, seed it in our{' '}
                    <Link
                      href="/tools/palette-generator"
                      className="text-emerald-700 dark:text-emerald-400 font-semibold hover:underline"
                    >
                      free color palette generator
                    </Link>{' '}
                    and export a tight monochromatic scale your engineers can trust.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Sage Green in Interior & Brand Design</h2>
                  <p className="mb-4">
                    Interior palettes treat sage as a wall color that flatters both warm oak floors and cool concrete—on the web, mimic that flexibility by
                    pairing sage with cream fields and charcoal line art. Boutique hotels and spas translate the same story into brand books: sage as the signature
                    wash, terracotta in ceramics photography, brass or black metal as metallic neutrals offline. Your digital style guide should map those physical
                    materials to hex so social templates match lobby signage.
                  </p>
                  <p className="mb-4">
                    Brand designers often specify sage for wordmarks that must feel approachable yet grown-up—think skincare founded by dermatologists rather than
                    neon Gen-Z cosmetics. Logos on white need a slightly darker companion (#8A8462 or charcoal) for small-size legibility; logos on sage fields
                    should invert to cream or white with tested stroke weights. Packaging mockups that look perfect under studio lights may shift yellow under
                    supermarket fluorescents; capture both contexts when you approve final hex.
                  </p>
                  <p className="mb-6">
                    For multi-channel rollouts, document how sage behaves on uncoated stock versus glossy screens. Print inks gain dot gain; digital loses subtlety
                    on low-end displays. A pragmatic approach is to keep #B2AC88 as the canonical digital sage while assigning a separate print-only swatch in
                    vendor specs. Teams that skip that split inevitably “eyeball” compensation in each export and drift away from a coherent brand color story.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Systems, tokens, and handoff</h2>
                  <p className="mb-4">
                    Name tokens after roles, not vibes: <code className="rounded px-1 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">surface.sage</code>,{' '}
                    <code className="rounded px-1 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">text.ink</code>, <code className="rounded px-1 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">accent.terracotta</code>. Designers stop debating “is this the right sage?” when developers can grep a single source of truth. Pair every semantic
                    color with minimum contrast partners in the same JSON so Storybook and Figma stay aligned.
                  </p>
                  <p className="mb-6">
                    Finally, remember sage is a trend-sensitive hue: it can feel dated if combined with faux distress textures and every icon in a leaf motif.
                    Keep layouts modern—generous whitespace, crisp photography, restrained iconography—and let the color whisper organic values instead of shouting
                    them. When in doubt, subtract one decorative green layer and add typographic clarity; users will still read “calm nature” from a disciplined
                    palette.
                  </p>

                  <div className="not-prose my-10 rounded-2xl border border-lime-200 dark:border-lime-900/60 bg-lime-50/90 dark:bg-stone-900/70 p-6 md:p-8 text-center">
                    <p className="text-gray-800 dark:text-gray-200 text-lg font-medium mb-4">
                      Generate sage ramps, accents, and export-ready hex lists in seconds.
                    </p>
                    <Link
                      href="/tools/palette-generator"
                      className="inline-flex items-center justify-center rounded-xl bg-[#355E3B] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[#2d4a32] transition-colors"
                    >
                      Try our free color palette generator
                    </Link>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose">
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is the sage green hex code?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        <strong>#B2AC88</strong> is a common digital sage—RGB(178, 172, 136), HSL(51, 18%, 62%). Adjust darker or lighter using the shade table for
                        roles like text or backgrounds.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What colors go well with sage green?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Terracotta, cream, dusty rose, and charcoal are versatile partners; see the pairing cards above for hex values and usage notes.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">Is sage green good for website backgrounds?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Yes for calm, wellness, and lifestyle experiences—pair with high-contrast text colors and validate all interactive states for accessibility.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is the difference between sage green and olive green?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Sage is a soft gray-green; olive typically reads more yellow-green and saturated. Define both in your system if you use them in different
                        product lines.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is the sage green hex code for Canva?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Open Custom colors and enter <strong>#B2AC88</strong>. Add #A8A878 and #C8C4A0 as accent and background swatches; save to your brand kit when available.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is the sage green RGB code?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        <strong>RGB(178,172,136)</strong> for #B2AC88—the same as rgb(178, 172, 136) in CSS. Use the copy buttons in the Sage Green RGB Code section above.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900 dark:text-white">What is a dark sage green hex code?</dt>
                      <dd className="mt-1 text-gray-700 dark:text-gray-300">
                        Try #6B6B47, #5C5C3D, or #4A4A2E for navigation, buttons, and small type on light backgrounds. Each has a one-click copy swatch in the dark sage section.
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-8 mb-6">
                    Compare with{' '}
                    <InlineTagLink href="/blog/forest-green-hex-code">forest green hex codes</InlineTagLink> for brighter botanical UI,{' '}
                    <InlineTagLink href="/blog/yellow-green-hex-code">yellow green hex code</InlineTagLink> for chartreuse accents, or{' '}
                    <InlineTagLink href="/blog/navy-blue-hex-code">navy blue hex reference</InlineTagLink> when you need a cooler structural accent alongside sage
                    panels. For dusty pink-purple pairings, see our{' '}
                    <InlineTagLink href="/blog/mauve-color">mauve color palette</InlineTagLink>. Validate every final pair with the{' '}
                    <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> before release.
                  </p>

                  <BlogToolsCTA />
                </div>
              </div>
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Sage pairings (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Sage & accents" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
