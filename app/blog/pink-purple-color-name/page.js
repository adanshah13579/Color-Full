import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import {
  PaletteShadesTable,
  PalettePairingsSection,
} from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

const LAST_MODIFIED = '2026-06-05T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/pink-purple-color-name',
  title: 'What is the Color Between Pink and Purple Called? (Hex Codes)',
  description:
    'The color between pink and purple is called mauve, magenta or fuchsia depending on the shade. Get hex codes for every pink-purple color name.',
  keywords: [
    'color between pink and purple',
    'what color is between pink and purple',
    'what is pink purple called',
    'pinkish purple color name',
    'is magenta pink or purple',
    'mauve hex',
    'magenta hex',
    'fuchsia hex',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: LAST_MODIFIED,
    modifiedTime: LAST_MODIFIED,
  },
});

const PINK_PURPLE_NAMES = [
  { name: 'Mauve', hex: '#E0B0FF' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Fuchsia', hex: '#FF00FF' },
  { name: 'Orchid', hex: '#DA70D6' },
  { name: 'Violet', hex: '#EE82EE' },
  { name: 'Plum', hex: '#DDA0DD' },
  { name: 'Thistle', hex: '#D8BFD8' },
  { name: 'Amethyst', hex: '#9966CC' },
  { name: 'Hot Pink', hex: '#FF69B4' },
  { name: 'Rose', hex: '#FF007F' },
];

const PINK_PURPLE_PALETTES = [
  {
    title: 'Soft mauve editorial',
    body: 'Mauve #E0B0FF section bands, plum #DDA0DD cards, thistle #D8BFD8 dividers, and charcoal #374151 type—ideal for lifestyle magazines and skincare lookbooks.',
    swatches: ['#E0B0FF', '#DDA0DD', '#D8BFD8', '#374151'],
  },
  {
    title: 'Vibrant magenta nightlife',
    body: 'Magenta #FF00FF heroes on near-black #0F0F0F, rose #FF007F CTAs, and hot pink #FF69B4 badges for events, music, and festival creative.',
    swatches: ['#FF00FF', '#FF007F', '#FF69B4', '#0F0F0F'],
  },
  {
    title: 'Orchid beauty luxury',
    body: 'Orchid #DA70D6 navigation, amethyst #9966CC accents, cream #FFF8F0 product wells, and gold #FFD700 foil-style rules for cosmetics and jewelry.',
    swatches: ['#DA70D6', '#9966CC', '#FFF8F0', '#FFD700'],
  },
];

const FAQ = [
  {
    question: 'What is the color between pink and purple called?',
    answer:
      'The color between pink and purple is most often called mauve, magenta, or fuchsia depending on lightness and saturation. Lighter, dustier mixes read as mauve (#E0B0FF) or plum (#DDA0DD). Balanced vibrant mixes read as magenta or fuchsia (#FF00FF). Hot pink (#FF69B4) sits closer to pink; amethyst (#9966CC) sits closer to purple.',
  },
  {
    question: 'What color is between pink and purple?',
    answer:
      'On the color wheel, pink (a tint of red) and purple (a mix of red and blue) meet in the magenta-violet range. Digital designers label mid-hues magenta (#FF00FF), orchid (#DA70D6), or mauve (#E0B0FF) based on whether the swatch feels warm, cool, light, or saturated.',
  },
  {
    question: 'What is pink purple called?',
    answer:
      'Common pink-purple names include mauve, magenta, fuchsia, orchid, violet, and plum. British English may use "colour between pink and purple" with the same hex values—only spelling in copy changes, not the RGB digits you paste into CSS.',
  },
  {
    question: 'Is magenta pink or purple?',
    answer:
      'Magenta (#FF00FF) is technically neither pure pink nor pure purple—it sits midway on the RGB color wheel between red and blue. Visually it reads as a vivid pink-purple: warmer and lighter than violet (#EE82EE), cooler and more purple than hot pink (#FF69B4).',
  },
  {
    question: 'What is a pinkish purple color name?',
    answer:
      'Pinkish purple names include mauve (#E0B0FF), orchid (#DA70D6), plum (#DDA0DD), thistle (#D8BFD8), and light violet (#EE82EE). For bold pink-purple, use magenta (#FF00FF) or rose (#FF007F). Document hex in your style guide so teams do not swap names interchangeably.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function PinkPurpleColorNamePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-pink-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              What is the Color Between Pink and Purple Called? (Hex Codes)
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl mx-auto space-y-10">
          <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-white leading-relaxed border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 dark:border-amber-400 pl-5 pr-4 py-4 rounded-r-xl">
            The color between pink and purple is called mauve (#E0B0FF), magenta (#FF00FF), or fuchsia (#FF00FF) depending on the shade. Lighter versions lean pink, darker versions lean purple.
          </p>

          <div
            className="w-full h-40 md:h-52 rounded-2xl border-2 border-gray-200 dark:border-gray-600 shadow-lg bg-gradient-to-r from-[#FF69B4] via-[#FF00FF] to-[#9966CC]"
            role="img"
            aria-label="Gradient from hot pink through magenta to amethyst purple"
          />

          <PaletteShadesTable
            title="Pink-Purple Color Names and Hex Codes"
            description="Ten named pink-purple colors with swatches and one-click hex copy. Use mauve and plum for soft UI; magenta and rose for high-energy accents."
            shades={PINK_PURPLE_NAMES}
          />

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">Is Magenta Pink or Purple?</h2>
            <p className="mb-4">
              <strong className="text-gray-900 dark:text-white">Magenta (#FF00FF)</strong> is the classic answer to “is magenta pink or purple?”—it is both and neither. In RGB, magenta is an equal mix of full red and full blue with no green, which places it on the color wheel between red (where pink originates as a tint) and blue-violet (where purple lives). That is why magenta reads as a hyper-saturated pink-purple rather than a pastel pink or a deep royal purple.
            </p>
            <p className="mb-6">
              For UI, treat magenta as an accent, not a background: white text on #FF00FF can pass large-label contrast but fails quickly at small sizes. Pair magenta CTAs with charcoal (#374151) body areas or cream (#FFF8F0) cards. If stakeholders want something softer, shift to orchid (#DA70D6) or mauve (#E0B0FF)—still in the pink-purple family, but easier on long reading sessions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What is Mauve?</h2>
            <p className="mb-4">
              <strong className="text-gray-900 dark:text-white">Mauve (#E0B0FF)</strong> is a light, dusty pink-purple named after the mallow flower. It sits closer to pink than magenta does: higher lightness, lower saturation, and a slightly warm undertone that feels vintage and editorial. Designers use mauve for section backgrounds, invitation stationery, and beauty packaging when hot pink would feel too juvenile and deep purple would feel too heavy.
            </p>
            <p className="mb-6">
              Mauve pairs naturally with plum (#DDA0DD), thistle (#D8BFD8), and cream neutrals. In CSS you can paste #E0B0FF directly or derive tints for hover states. If you need to match a screenshot to the nearest name, use our{' '}
              <InlineTagLink href="/tools/color-name-finder">color name finder</InlineTagLink>—especially helpful when clients say “pinkish purple” without a hex.
            </p>
          </div>

          <PalettePairingsSection
            title="Pink Purple Color Palette"
            intro="Three ready-made pink-purple palettes with hex codes for editorial, nightlife, and beauty brands."
            pairings={PINK_PURPLE_PALETTES}
          />

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
            <p className="mb-6">
              Searches like <strong className="text-gray-900 dark:text-white">color between pink and purple</strong>, <strong className="text-gray-900 dark:text-white">what is pink purple called</strong>, and <strong className="text-gray-900 dark:text-white">pinkish purple color name</strong> all point to the same design problem: stakeholders use poetic color words while engineers need hex. The table above maps everyday names—mauve, magenta, fuchsia, orchid, plum—to copy-ready values so handoffs stop drifting. For mixing ratios when blending pink and purple deliberately, see our{' '}
              <InlineTagLink href="/blog/pink-and-purple-color">pink and purple mixing guide</InlineTagLink>.
            </p>
            <p className="mb-6">
              When documenting tokens, separate “brand pink-purple” from “semantic error red” and “link blue”—magenta accents confuse users if every interactive hue competes. A practical system uses one pink-purple accent (often orchid or mauve for calm brands, magenta for energetic ones), one neutral text color, and one warm secondary accent such as gold or coral only where hierarchy demands it.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">FAQ</h2>
            <div className="space-y-6">
              {FAQ.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="not-prose">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Match any pink-purple to its name</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5">
                Paste a hex from a screenshot or brand PDF and find the closest CSS color name instantly.
              </p>
              <Link
                href="/tools/color-name-finder"
                className="inline-flex rounded-lg border border-zinc-200 bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-fuchsia-400 hover:bg-white hover:text-fuchsia-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-fuchsia-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors"
              >
                Color Name Finder
              </Link>
            </div>
          </section>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <strong className="text-gray-800 dark:text-gray-200">Related:</strong>{' '}
            <InlineTagLink href="/blog/pink-and-purple-color">Pink and Purple Color Mixing</InlineTagLink>
            {' · '}
            <InlineTagLink href="/blog/lavender-hex-code">Lavender Hex Code</InlineTagLink>
            {' · '}
            <InlineTagLink href="/blog/purple-dream">Purple Dream Palette</InlineTagLink>
          </p>
        </div>
      </div>
    </article>
  );
}
