import ColorMixGuidePost from '../components/ColorMixGuidePost';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/what-color-does-blue-and-yellow-make',
  title: 'What Color Does Blue and Yellow Make? Green — Hex Codes & Mixing Guide',
  description:
    'Blue and yellow make green when mixed. See exact hex codes for every blue-yellow ratio, explore green shades, and try our free color mixer tool.',
  keywords: [
    'what color does blue and yellow make',
    'what does blue and yellow make',
    'blue and yellow make what color',
    'blue yellow color',
    'mixing blue and yellow',
    'green hex',
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
  { ratio: '90% blue + 10% yellow', label: 'Deep Blue-Green', hex: '#003300' },
  { ratio: '80% blue + 20% yellow', label: 'Teal Green', hex: '#004D00' },
  { ratio: '70% blue + 30% yellow', label: 'Forest Mix', hex: '#006600' },
  { ratio: '50% blue + 50% yellow', label: 'True Green', hex: '#008000' },
  { ratio: '30% blue + 70% yellow', label: 'Spring Green', hex: '#33AA33' },
  { ratio: '20% blue + 80% yellow', label: 'Chartreuse', hex: '#66CC00' },
  { ratio: '10% blue + 90% yellow', label: 'Lime Yellow', hex: '#99CC00' },
];

const FAQ = [
  {
    question: 'What color does blue and yellow make?',
    answer:
      'Blue and yellow make green when mixed. A 50/50 blend of pure blue (#0000FF) and pure yellow (#FFFF00) is represented as true green #008000 in the table above. More blue yields deep teal-greens; more yellow shifts toward chartreuse and lime.',
  },
  {
    question: 'What is the hex code for blue and yellow mixed?',
    answer:
      'Use #008000 for a balanced green reference. For cooler mixes try #004D00 or #006600; for brighter mixes try #33AA33 or #66CC00. Each row in the hex table maps a ratio to a copy-ready value.',
  },
  {
    question: 'Do blue and yellow go together in design?',
    answer:
      'Yes—blue and yellow (and the greens between them) communicate clarity, growth, and trust. Common in eco brands, education, and dashboards. Balance saturation: one dominant green or blue per screen keeps interfaces calm.',
  },
  {
    question: 'What happens when you mix blue and yellow paint?',
    answer:
      'In RYB paint theory, blue and yellow are primaries; mixing them subtracts red wavelengths and you perceive green. Temperature depends on pigment—phthalo blue skews teal, cadmium yellow skews warm lime. Digital hex values are references; proof paint on your substrate for packaging.',
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

export default function WhatColorDoesBlueAndYellowMakePage() {
  return (
    <ColorMixGuidePost
      heroGradient="from-blue-800 via-emerald-600 to-lime-400"
      heroAccentText="text-emerald-100"
      h1="What Color Does Blue and Yellow Make? Green — Hex Codes & Mixing Guide"
      featuredSnippet="Blue and yellow make green when mixed. A 50/50 mix of blue (#0000FF) and yellow (#FFFF00) produces green (#008000)."
      heroSwatchHex="#008000"
      heroSwatchAria="True green from blue and yellow mix, hex 008000"
      mixTableTitle="Blue and Yellow Mix Ratios — Hex Code Table"
      mixRows={MIX_ROWS}
      shadeSectionTitle="What Shade of Green Does Blue and Yellow Make?"
      shadeSectionBody="The blue yellow color result spans deep forest mixes to bright chartreuse. Extra blue keeps greens cooler and darker—ideal for data viz and sustainability brands. Extra yellow pushes toward spring green and lime, which work for highlights and success states. On screens, literal RGB averaging can look gray-green; the hex table uses designer-friendly steps centered on #008000 so teams can discuss true green without debating muddy midpoints. Try our color mixer to preview your exact ratio."
      combinationsTitle="Blue and Yellow Color Combinations"
      combinationsIntro="Four palettes that combine blue, yellow, and the greens between them."
      combinations={[
        {
          title: 'Eco clarity',
          body: 'Deep green #006600 structure, sky blue #0EA5E9 links, yellow #FFFF00 highlights on white.',
          swatches: ['#006600', '#0EA5E9', '#FFFF00', '#FFFFFF'],
        },
        {
          title: 'Spring dashboard',
          body: 'True green #008000 success tags, chartreuse #66CC00 charts, slate #334155 text.',
          swatches: ['#008000', '#66CC00', '#334155', '#0000FF'],
        },
        {
          title: 'Coastal field',
          body: 'Teal green #004D00 headers, lime #99CC00 accents, cream #F5F5DC backgrounds.',
          swatches: ['#004D00', '#99CC00', '#F5F5DC', '#0000FF'],
        },
        {
          title: 'Playful learning',
          body: 'Blue #0000FF primary buttons, spring #33AA33 cards, golden yellow #FFD700 badges.',
          swatches: ['#0000FF', '#33AA33', '#FFD700', '#008000'],
        },
      ]}
      designTitle="Using Blue and Yellow in Design"
      designContent={
        <>
          <p>
            Blue-and-yellow systems suggest reliability and growth—common for fintech, health, and outdoor brands. Use deep
            blue-greens for navigation chrome and yellow-greens sparingly for positive feedback.
          </p>
          <p>
            Avoid placing saturated yellow body text on blue backgrounds without contrast testing. Build token ramps in the
            palette generator, then validate WCAG pairs before handoff to development.
          </p>
        </>
      }
      faq={FAQ}
      mixerHref="/tools/color-mixer/blue-and-yellow"
      mixerLabel="Blue & Yellow Color Mixer"
      faqSchema={faqSchema}
    />
  );
}
