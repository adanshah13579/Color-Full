import InlineTagLink from '../../components/InlineTagLink';
import ColorMixGuidePost from '../components/ColorMixGuidePost';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';

export const metadata = buildPageMetadata({
  path: '/blog/what-color-does-red-and-white-make',
  title: 'What Color Does Red and White Make? Pink — Hex Codes & Shades',
  description:
    'Red and white make pink when mixed. See exact hex codes for every red-white ratio, explore pink shades, and try our free color mixer tool.',
  keywords: [
    'what color does red and white make',
    'what does red and white make',
    'red and white make what color',
    'red white color',
    'mixing red and white',
    'pink hex',
    'color mixing',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: '2026-05-21T00:00:00.000Z',
  },
});
const articleSchema = getBlogArticleSchema(
  'What Color Does Red and White Make? Pink — Hex Codes & Shades',
  'Red and white make pink when mixed. See exact hex codes for every red-white ratio, explore pink shades, and try our free color mixer tool.',
  'what-color-does-red-and-white-make',
  getBlogArticleDatePublished('what-color-does-red-and-white-make'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const MIX_ROWS = [
  { ratio: '90% red + 10% white', label: 'Deep Red-Pink', hex: '#E61919' },
  { ratio: '80% red + 20% white', label: 'Scarlet Pink', hex: '#FF3333' },
  { ratio: '70% red + 30% white', label: 'Rose', hex: '#FF5555' },
  { ratio: '50% red + 50% white', label: 'Light Pink', hex: '#FF8080' },
  { ratio: '30% red + 70% white', label: 'Soft Pink', hex: '#FFAAAA' },
  { ratio: '20% red + 80% white', label: 'Blush', hex: '#FFCCCC' },
  { ratio: '10% red + 90% white', label: 'Pale Pink', hex: '#FFE6E6' },
];

const FAQ = [
  {
    question: 'What color does red and white make?',
    answer:
      'Red and white mixed together make pink and light red tones. A 50/50 mix of red (#FF0000) and white (#FFFFFF) gives light pink at #FF8080. More red stays in rose and scarlet; more white moves toward blush and pale pink.',
  },
  {
    question: 'What is the hex code for red and white mixed?',
    answer:
      'The even mix reference is #FF8080 (light pink). Use #FF5555 for stronger rose, #FFCCCC for blush backgrounds, or #FFE6E6 for the palest tint. Copy any value from the ratio table above.',
  },
  {
    question: 'Do red and white go together in design?',
    answer:
      'Yes—red and white (and soft pinks between them) read as romantic, clinical-clean, or festive depending on context. Weddings, beauty, and healthcare often pair blush backgrounds with deeper red accents. Always verify contrast for small text on pink fields.',
  },
  {
    question: 'What happens when you mix red and white paint?',
    answer:
      'Adding white to red is a tint: chroma drops and lightness rises. Painters call the family pink once perceived hue softens. Opaque white and pigment quality change the swatch—use hex for digital handoff and physical proofs for print.',
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

export default function WhatColorDoesRedAndWhiteMakePage() {
  return (
    <ColorMixGuidePost
      heroGradient="from-red-700 via-rose-500 to-pink-200"
      heroAccentText="text-rose-100"
      h1="What Color Does Red and White Make? Pink — Hex Codes & Shades"
      featuredSnippet="Red and white mixed together make pink. A 50/50 mix of red (#FF0000) and white (#FFFFFF) gives light pink (#FF8080)."
      heroSwatchHex="#FF8080"
      heroSwatchAria="Light pink from red and white mix, hex FF8080"
      mixTableTitle="Red and White Mix Ratios — Hex Code Table"
      mixRows={MIX_ROWS}
      shadeSectionTitle="What Shade of Pink Does Red and White Make?"
      shadeSectionBody="Tinting red with white walks you through rose, light pink, blush, and near-white pinks. Designers searching what color does red and white make usually need a specific step for backgrounds, alerts, or brand romance—not a single answer. Keep deep red (#FF0000 or #E61919) for primary actions; use #FF8080 and lighter for surfaces and empty states. The red white color line is predictable in RGB mixes, which makes token naming easy once you pick anchor hex values."
      combinationsTitle="Red and White Color Combinations"
      combinationsIntro="Four palettes that balance red, white, and pink tints."
      combinations={[
        {
          title: 'Modern romance',
          body: 'Light pink #FF8080 sections, burgundy #800020 type accents, white #FFFFFF cards.',
          swatches: ['#FF8080', '#800020', '#FFFFFF', '#FFCCCC'],
        },
        {
          title: 'Valentine soft',
          body: 'Blush #FFCCCC backgrounds, rose #FF5555 buttons, pale pink #FFE6E6 dividers.',
          swatches: ['#FFCCCC', '#FF5555', '#FFE6E6', '#FF0000'],
        },
        {
          title: 'Clinical alert',
          body: 'White #FFFFFF canvas, scarlet #FF3333 warnings, soft pink #FFAAAA hover states.',
          swatches: ['#FFFFFF', '#FF3333', '#FFAAAA', '#E61919'],
        },
        {
          title: 'Luxury rose',
          body: 'Charcoal #1F2937 text, light pink #FF8080 hero, gold #D4AF37 micro-accents.',
          swatches: ['#FF8080', '#1F2937', '#D4AF37', '#FFCCCC'],
        },
      ]}
      designTitle="Using Red and White in Design"
      designContent={
        <>
          <p>
            Red-and-white palettes signal love, celebration, and gentle urgency—common for beauty, nonprofits, and seasonal
            retail. Use pale pinks for large background areas and reserve saturated red for buttons and icons.
          </p>
          <p>
            Pair blush with navy or charcoal for readable body copy. Extend your ramp in the palette generator, then confirm
            contrast for captions sitting on pink tints.
          </p>
          <p>
            For warm primary mixes, see{' '}
            <InlineTagLink href="/blog/what-color-does-red-and-yellow-make">what color does red and yellow make</InlineTagLink>, or open our{' '}
            <InlineTagLink href="/tools/color-mixer">color mixing simulator</InlineTagLink> to preview red-white tint ratios.
          </p>
        </>
      }
      faq={FAQ}
      mixerHref="/tools/color-mixer/red-and-white"
      mixerLabel="Red & White Color Mixer"
      faqSchema={faqSchema}
      articleSchema={articleSchema}
      breadcrumbTitle={articleSchema.headline}
      breadcrumbSlug="what-color-does-red-and-white-make"
    />
  );
}
