import ColorMixGuidePost from '../components/ColorMixGuidePost';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

const LAST_MODIFIED = '2026-06-01T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/pink-and-purple-color',
  title: 'Pink and Purple Color: What They Make, Palettes & Hex Codes',
  description:
    'Pink and purple together make magenta or mauve. See hex codes for pink-purple mixes, palette combinations, and what colors go with pink and purple.',
  keywords: [
    'pink and purple',
    'what color does pink and purple make',
    'pink purple color',
    'colour between pink and purple',
    'pink and purple makes what color',
    'magenta hex',
    'mauve hex',
    'color mixing',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-06-01T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});

const MIX_ROWS = [
  { ratio: '80% pink + 20% purple', label: 'Soft magenta', hex: '#F06BB8' },
  { ratio: '60% pink + 40% purple', label: 'Rose magenta', hex: '#D85AAB' },
  { ratio: '50% pink + 50% purple', label: 'Vibrant magenta-purple', hex: '#BF34CA' },
  { ratio: '40% pink + 60% purple', label: 'Berry purple', hex: '#A640B0' },
  { ratio: '20% pink + 80% purple', label: 'Deep mauve', hex: '#8C2D9A' },
];

const FAQ = [
  {
    question: 'What color does pink and purple make?',
    answer:
      'Pink and purple mixed together make magenta or mauve depending on the ratio. A balanced blend of hot pink (#FF69B4) and purple (#800080) lands near #BF34CA—a vibrant magenta-purple. More pink reads soft and floral; more purple reads deep and wine-adjacent.',
  },
  {
    question: 'What is the colour between pink and purple?',
    answer:
      'The colour between pink and purple is often called magenta, fuchsia, or mauve. In hex, mid-mixes cluster around #BF34CA to #C7498A. British and American spellings differ, but the RGB values are the same in digital design.',
  },
  {
    question: 'What colors go with pink and purple?',
    answer:
      'Gold (#FFD700), cream (#FFF8F0), charcoal (#374151), and mint (#A7F3D0) balance pink-purple palettes. Use charcoal for body copy and keep saturated magenta for heroes and CTAs only.',
  },
  {
    question: 'Is pink and purple good for website design?',
    answer:
      'Yes for beauty, events, music, and creative portfolios. Limit saturated mixes to one hero or CTA per screen, pair with neutrals for reading areas, and run every text-on-color pair through a WCAG contrast checker.',
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

export default function PinkAndPurpleColorPage() {
  return (
    <ColorMixGuidePost
      heroGradient="from-pink-500 via-fuchsia-600 to-purple-800"
      heroAccentText="text-pink-100"
      h1="Pink and Purple Color: What They Make, Palettes &amp; Hex Codes"
      featuredSnippet="Pink and purple mixed together make magenta or mauve depending on the ratio. A 50/50 mix of pink (#FF69B4) and purple (#800080) gives #BF34CA, a vibrant magenta-purple."
      heroSwatchHex="#BF34CA"
      heroSwatchAria="Pink and purple mix, vibrant magenta-purple hex BF34CA"
      mixTableTitle="Pink and Purple Mix Ratios — Hex Code Table"
      mixRows={MIX_ROWS}
      introParagraph="If you searched pink and purple makes what color or pink purple color, you are looking at the magenta–mauve family. Pink is a light, warm red; purple adds cool depth. Together they skip true red and land on romantic, high-energy hues perfect for beauty campaigns, nightlife branding, and festival creative—provided you anchor them with neutrals so interfaces stay readable."
      combinationsTitle="Pink and Purple Color Palette"
      combinationsIntro="Four ready-made pink and purple palettes with copy-paste hex codes for social templates, landing pages, and brand kits."
      combinations={[
        {
          title: 'Magenta glow',
          body: 'Hero gradient from #FF69B4 through #BF34CA to #800080 on charcoal (#111827) type areas.',
          swatches: ['#FF69B4', '#BF34CA', '#800080', '#111827'],
        },
        {
          title: 'Soft mauve editorial',
          body: 'Blush #F06BB8 cards, mauve #8C2D9A headlines, cream #FFF8F0 reading wells.',
          swatches: ['#F06BB8', '#8C2D9A', '#FFF8F0', '#374151'],
        },
        {
          title: 'Beauty luxury',
          body: 'Deep purple #800080 navigation, magenta #BF34CA CTAs, gold #FFD700 accents on white.',
          swatches: ['#800080', '#BF34CA', '#FFD700', '#FFFFFF'],
        },
        {
          title: 'Nightlife neon',
          body: 'Electric magenta #D85AAB buttons, berry #A640B0 section bands, near-black #0F0F0F base.',
          swatches: ['#D85AAB', '#A640B0', '#0F0F0F', '#FF69B4'],
        },
      ]}
      complementaryTitle="What Colors Go with Pink and Purple"
      complementaryIntro="Complementary and accent hues that keep pink and purple feeling intentional—not overwhelming."
      complementaryPairings={[
        {
          title: 'Pink-purple + gold',
          body: 'Gold (#FFD700) adds luxury next to magenta without competing for hue—ideal for jewelry and cosmetics packaging.',
          swatches: ['#BF34CA', '#FFD700', '#FFF8F0'],
        },
        {
          title: 'Pink-purple + mint',
          body: 'Cool mint (#A7F3D0) cools down hot magenta for wellness and Gen-Z lifestyle brands.',
          swatches: ['#FF69B4', '#A7F3D0', '#800080'],
        },
        {
          title: 'Pink-purple + charcoal',
          body: 'Charcoal (#374151) body copy on white keeps magenta heroes loud but readable.',
          swatches: ['#BF34CA', '#374151', '#FFFFFF'],
        },
        {
          title: 'Pink-purple + cream',
          body: 'Warm cream (#FFF8F0) backgrounds soften deep mauve (#8C2D9A) for editorial layouts.',
          swatches: ['#8C2D9A', '#FFF8F0', '#F06BB8'],
        },
      ]}
      designTitle="Pink and Purple in UI Design"
      designContent={
        <>
          <p>
            <strong className="text-gray-900 dark:text-white">Beauty and cosmetics.</strong> Use #BF34CA for primary
            buttons on white, #800080 for navigation chrome, and #FFF8F0 for product cards. Never place small gray captions
            on magenta fills without a contrast check.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Events and music.</strong> Gradient heroes from #FF69B4 to
            #800080 signal energy fast—keep checkout and account UI in charcoal and white below the fold.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Creative portfolios.</strong> One magenta accent per viewport
            is enough; use the mix table to name token steps (surface, accent, emphasis) before handoff to engineering.
          </p>
        </>
      }
      faq={FAQ}
      mixerHref="/tools/color-mixer/pink-and-purple"
      mixerLabel="Pink & Purple Color Mixer"
      faqSchema={faqSchema}
    />
  );
}
