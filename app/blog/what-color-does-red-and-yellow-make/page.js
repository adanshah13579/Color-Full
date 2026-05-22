import ColorMixGuidePost from '../components/ColorMixGuidePost';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/what-color-does-red-and-yellow-make',
  title: 'What Color Does Red and Yellow Make? Orange — Hex Codes & Mixing Guide',
  description:
    'Red and yellow make orange when mixed. See the exact hex codes for every red-yellow mix ratio, explore orange shades, and try our free color mixer tool.',
  keywords: [
    'what color does red and yellow make',
    'what does red and yellow make',
    'red and yellow make what color',
    'red yellow color',
    'mixing red and yellow',
    'orange hex',
    'color mixing',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: '2026-05-21T00:00:00.000Z',
  },
});

const MIX_ROWS = [
  { ratio: '90% red + 10% yellow', label: 'Deep Red-Orange', hex: '#FF1A00' },
  { ratio: '80% red + 20% yellow', label: 'Red Orange', hex: '#FF3300' },
  { ratio: '70% red + 30% yellow', label: 'Burnt Orange', hex: '#FF5500' },
  { ratio: '50% red + 50% yellow', label: 'True Orange', hex: '#FF8000' },
  { ratio: '30% red + 70% yellow', label: 'Golden Orange', hex: '#FFAA00' },
  { ratio: '20% red + 80% yellow', label: 'Amber', hex: '#FFC000' },
  { ratio: '10% red + 90% yellow', label: 'Golden Yellow', hex: '#FFD700' },
];

const FAQ = [
  {
    question: 'What color does red and yellow make?',
    answer:
      'Red and yellow make orange when mixed together. A balanced 50/50 blend of pure red (#FF0000) and pure yellow (#FFFF00) produces true orange at #FF8000. Shifting the ratio toward red yields burnt and red-orange tones; shifting toward yellow yields amber and golden yellow.',
  },
  {
    question: 'What is the hex code for red and yellow mixed?',
    answer:
      'The classic even mix is #FF8000 (true orange). Use #FF5500 for more red, #FFAA00 for more yellow, or #FFD700 when yellow dominates. The table above lists seven copy-ready hex codes for common red-to-yellow ratios.',
  },
  {
    question: 'Do red and yellow go together in design?',
    answer:
      'Yes—red and yellow (and the oranges between them) are a proven warm triad for food, sport, and youth brands. Keep one hue dominant per layout, use charcoal or white for body text, and check contrast before shipping CTAs.',
  },
  {
    question: 'What happens when you mix red and yellow paint?',
    answer:
      'In subtractive RYB paint mixing, red and yellow are both primaries; combining them removes cool reflectance and you see orange. Pigment opacity and undertone shift the exact shade, so digital hex tables are starting points—proof physical swatches when print color must match.',
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

export default function WhatColorDoesRedAndYellowMakePage() {
  return (
    <ColorMixGuidePost
      heroGradient="from-red-700 via-orange-600 to-amber-400"
      heroAccentText="text-orange-100"
      h1="What Color Does Red and Yellow Make? Orange — Hex Codes & Mixing Guide"
      featuredSnippet="Red and yellow make orange when mixed together. A 50/50 mix of red (#FF0000) and yellow (#FFFF00) produces orange (#FF8000). The more red you add the darker the orange — the more yellow you add the brighter and more golden it becomes."
      heroSwatchHex="#FF8000"
      heroSwatchAria="True orange from red and yellow mix, hex FF8000"
      mixTableTitle="Red and Yellow Mix Ratios — Hex Code Table"
      mixRows={MIX_ROWS}
      shadeSectionTitle="What Shade of Orange Does Red and Yellow Make?"
      shadeSectionBody="The red yellow color you see depends entirely on how much of each primary you use. Heavy red keeps mixes in the burnt-orange and red-orange family—great for autumn campaigns and bold alerts. More yellow pulls the mix toward golden orange, amber, and near-gold (#FFD700), which reads cheerful on packaging and app highlights. If you searched what does red and yellow make or red and yellow make what color, the short answer is always the orange family—but the exact hex shifts with every ratio. Use the table to name steps for your design system, then fine-tune in our color mixer."
      combinationsTitle="Red and Yellow Color Combinations"
      combinationsIntro="Four palette ideas that keep red, yellow, and orange working together without visual noise."
      combinations={[
        {
          title: 'Sunset burst',
          body: 'Hero gradient from #FF0000 through #FF8000 to #FFD700 on dark charcoal (#1F2937) text areas.',
          swatches: ['#FF0000', '#FF8000', '#FFD700', '#1F2937'],
        },
        {
          title: 'Fast food warmth',
          body: 'Burnt orange #FF5500 buttons, golden #FFC000 badges, cream #FFFBEB backgrounds.',
          swatches: ['#FF5500', '#FFC000', '#FFFBEB', '#FF0000'],
        },
        {
          title: 'Sport energy',
          body: 'Red #FF0000 jerseys, amber #FFC000 accents, white #FFFFFF fields and typography.',
          swatches: ['#FF0000', '#FFC000', '#FFFFFF', '#FF3300'],
        },
        {
          title: 'Editorial citrus',
          body: 'True orange #FF8000 headlines, soft gold #FFD700 dividers, off-white #FAFAF9 body.',
          swatches: ['#FF8000', '#FFD700', '#FAFAF9', '#FFAA00'],
        },
      ]}
      designTitle="Using Red and Yellow in Design"
      designContent={
        <>
          <p>
            Mixing red and yellow signals energy, appetite, and optimism—why the pair dominates food delivery, athletics, and
            children&apos;s products. Limit saturated orange to one focal element per viewport so CTAs do not compete with
            navigation.
          </p>
          <p>
            Pair warm mixes with neutral charcoal or warm white for long-form reading. After choosing hero oranges, extend
            tints in the palette generator and run every text pair through an accessibility contrast checker.
          </p>
        </>
      }
      faq={FAQ}
      mixerHref="/tools/color-mixer/red-and-yellow"
      mixerLabel="Red & Yellow Color Mixer"
      faqSchema={faqSchema}
    />
  );
}
