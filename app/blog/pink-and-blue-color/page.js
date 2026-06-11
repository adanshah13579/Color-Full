import InlineTagLink from '../../components/InlineTagLink';
import ColorMixGuidePost from '../components/ColorMixGuidePost';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';

const LAST_MODIFIED = '2026-06-01T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/pink-and-blue-color',
  title: 'Pink and Blue Color: What They Make, Palettes & Hex Codes',
  description:
    'Pink and blue mixed make lavender or light purple. See hex codes, palette combinations and design tips for using pink and blue together.',
  keywords: [
    'pink and blue',
    'what does pink and blue make',
    'pink blue color',
    'pink and blue colour',
    'lavender hex',
    'periwinkle hex',
    'color mixing',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-06-01T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Pink and Blue Color: What They Make, Palettes & Hex Codes',
  'Pink and blue mixed make lavender or light purple. See hex codes, palette combinations and design tips for using pink and blue together.',
  'pink-and-blue-color',
  getBlogArticleDatePublished('pink-and-blue-color'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const MIX_ROWS = [
  { ratio: '80% pink + 20% blue', label: 'Blush lavender', hex: '#FF54B8' },
  { ratio: '60% pink + 40% blue', label: 'Soft lilac', hex: '#BF42BD' },
  { ratio: '50% pink + 50% blue', label: 'Lavender purple', hex: '#8034DA' },
  { ratio: '40% pink + 60% blue', label: 'Periwinkle', hex: '#6026DA' },
  { ratio: '20% pink + 80% blue', label: 'Cool mauve', hex: '#4018DA' },
];

const FAQ = [
  {
    question: 'What does pink and blue make?',
    answer:
      'Pink and blue mixed together make lavender or light purple. A 50/50 blend of hot pink (#FF69B4) and blue (#0000FF) gives approximately #8034DA—a soft lavender-purple. More pink stays ballet-slipper pastel; more blue moves toward periwinkle and cool mauve.',
  },
  {
    question: 'What is the pink blue color called?',
    answer:
      'Designers call mid-mixes lavender, lilac, periwinkle, or mauve depending on lightness and how much blue dominates. The pink and blue colour family is cooler and softer than pink plus purple, which skews hotter magenta.',
  },
  {
    question: 'What colors go with pink and blue?',
    answer:
      'White (#FFFFFF), cream (#FFFBEB), sage (#B2AC88), and navy (#000080) ground pink-blue palettes. Navy adds structure for corporate wellness brands; sage keeps organic calm next to pastel lavender.',
  },
  {
    question: 'Can I use pink and blue on a website?',
    answer:
      'Yes for baby brands, stationery, wellness, and calm lifestyle UI. Use lavender (#8034DA) sparingly on CTAs, keep body copy in charcoal on white, and verify contrast for every interactive state.',
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

export default function PinkAndBlueColorPage() {
  return (
    <ColorMixGuidePost
      heroGradient="from-pink-400 via-violet-400 to-blue-700"
      heroAccentText="text-pink-100"
      h1="Pink and Blue Color: What They Make, Palettes &amp; Hex Codes"
      featuredSnippet="Pink and blue mixed together make lavender or light purple. A 50/50 mix of pink (#FF69B4) and blue (#0000FF) gives #8034DA."
      heroSwatchHex="#8034DA"
      heroSwatchAria="Pink and blue mix, lavender purple hex 8034DA"
      mixTableTitle="Pink and Blue Mix Ratios — Hex Code Table"
      mixRows={MIX_ROWS}
      introParagraph="The pink blue color story is about cool pastels, not hot magenta. Pink is a light red; blue pulls the mix toward lavender, lilac, and periwinkle—especially when you start from vivid #FF69B4 and pure #0000FF. UK teams may search pink and blue colour with the same intent: copy the hex table below, then fine-tune ratios in our mixer."
      combinationsTitle="Pink and Blue Color Palette"
      combinationsIntro="Four pink and blue palette sets for web, print, and social—each with four hex anchors."
      combinations={[
        {
          title: 'Lavender dream',
          body: 'Soft gradient #FF69B4 → #8034DA → #0000FF with white cards and charcoal captions.',
          swatches: ['#FF69B4', '#8034DA', '#0000FF', '#FFFFFF'],
        },
        {
          title: 'Baby brand calm',
          body: 'Blush #FF54B8 backgrounds, periwinkle #6026DA accents, cream #FFFBEB surfaces.',
          swatches: ['#FF54B8', '#6026DA', '#FFFBEB', '#64748B'],
        },
        {
          title: 'Wellness spa',
          body: 'Lilac #BF42BD section bands, sage #B2AC88 icons, navy #000080 footer chrome.',
          swatches: ['#BF42BD', '#B2AC88', '#000080', '#F8FAFC'],
        },
        {
          title: 'Stationery editorial',
          body: 'Cool mauve #4018DA headlines, pink #FF69B4 tags, warm gray #9CA3AF body text.',
          swatches: ['#4018DA', '#FF69B4', '#9CA3AF', '#FAFAF9'],
        },
      ]}
      complementaryTitle="What Colors Go with Pink and Blue"
      complementaryIntro="Partner colors that stop pink and blue from reading too sweet or too corporate."
      complementaryPairings={[
        {
          title: 'Pink-blue + navy',
          body: 'Navy (#000080) navigation grounds pastel lavender for finance-adjacent wellness brands.',
          swatches: ['#8034DA', '#000080', '#FFFFFF'],
        },
        {
          title: 'Pink-blue + sage',
          body: 'Sage (#B2AC88) adds organic calm beside lilac—strong for skincare and botanical retail.',
          swatches: ['#BF42BD', '#B2AC88', '#FFFBEB'],
        },
        {
          title: 'Pink-blue + gold',
          body: 'Soft gold (#F5D76E) warms cool lavender for invitation and wedding stationery.',
          swatches: ['#FF69B4', '#8034DA', '#F5D76E'],
        },
        {
          title: 'Pink-blue + charcoal',
          body: 'Charcoal (#374151) typography on cream keeps periwinkle CTAs accessible.',
          swatches: ['#6026DA', '#374151', '#FFFBEB'],
        },
      ]}
      designTitle="Pink and Blue in UI Design"
      designContent={
        <>
          <p>
            <strong className="text-gray-900 dark:text-white">Wellness and baby brands.</strong> Lavender #8034DA works
            for soft primary buttons on white; pair with sage or navy for hierarchy. Avoid lavender-on-pink body text—it
            fails contrast quickly.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">SaaS marketing sites.</strong> Use pink-blue gradients only in
            heroes; return to white dashboards with blue links and charcoal copy below the fold.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Dark mode.</strong> Deepen lavender to #4018DA on #111827
            surfaces and re-test focus rings—pastels that pass on white often fail on dark gray.
          </p>
          <p>
            Explore related guides:{' '}
            <InlineTagLink href="/blog/pink-purple-color-name">pink purple color names</InlineTagLink>,{' '}
            <InlineTagLink href="/blog/what-color-does-pink-and-purple-make">what color does pink and purple make</InlineTagLink>, or{' '}
            <InlineTagLink href="/tools/color-mixer">mix colors online</InlineTagLink> with our free simulator.
          </p>
        </>
      }
      faq={FAQ}
      mixerHref="/tools/color-mixer/pink-and-blue"
      mixerLabel="Pink & Blue Color Mixer"
      faqSchema={faqSchema}
      articleSchema={articleSchema}
      breadcrumbTitle={articleSchema.headline}
      breadcrumbSlug="pink-and-blue-color"
    />
  );
}
