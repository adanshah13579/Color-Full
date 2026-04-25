import ColorMixer from './components/ColorMixer';
import { getCombinationMix } from './colorMixing';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/tools/color-mixer',
  title: 'Color Mixing Simulator — What Color Do They Make?',
  description:
    'Mix any two colors and see the result instantly. Our color mixing simulator uses real paint color theory (RYB) to show you exactly what color red and blue make, yellow and blue make, and more.',
  keywords: [
    'color mixing',
    'RYB',
    'paint colors',
    'hex mixer',
    'what color makes',
    'Theme & Color',
  ],
  openGraph: {
    images: [
      {
        url: '/og-color-mixer.png',
        width: 1200,
        height: 630,
        alt: 'Color Mixing Simulator preview',
      },
    ],
  },
  twitter: {
    images: ['/og-color-mixer.png'],
  },
});

const colorMixerWebApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Color Mixing Simulator',
  url: 'https://themeandcolor.com/tools/color-mixer',
  description: 'Mix any two colors and see the real paint mixing result using RYB color theory',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const colorMixerFaqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What color does red and blue make?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Red and blue make purple (#800080) when mixed using RYB paint color theory. The exact shade depends on the ratio — equal parts red and blue produce a true purple.',
      },
    },
    {
      '@type': 'Question',
      name: 'What color does blue and yellow make?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blue and yellow make green (#008000) when mixed. This is one of the most fundamental color mixing rules in traditional RYB color theory used by artists and painters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What color does red and yellow make?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Red and yellow make orange (#FFA500) when mixed together. Orange is a secondary color created by combining the primary colors red and yellow in equal proportions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What color does red and white make?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Red and white make pink (#FFB6C1). The more white you add, the lighter and softer the pink becomes. This is called a tint of red.',
      },
    },
    {
      '@type': 'Question',
      name: 'What color does blue and white make?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blue and white make light blue (#ADD8E6), also called baby blue. Adding white to any color creates a tint — a lighter, pastel version of the original color.',
      },
    },
  ],
};

const faqData = [
  ['red', 'blue'],
  ['blue', 'yellow'],
  ['red', 'yellow'],
  ['yellow', 'green'],
  ['red', 'white'],
  ['blue', 'white'],
  ['orange', 'blue'],
  ['purple', 'yellow'],
].map(([a, b]) => getCombinationMix(a, b));

function InlineSwatch({ hex }: { hex: string }) {
  return <span className="inline-block w-4 h-4 rounded align-middle mx-1 border border-gray-300 dark:border-gray-600" style={{ backgroundColor: hex }} />;
}

function FAQItem({ item }: { item: (typeof faqData)[number] }) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        What color does {item.color1.name.toLowerCase()} and {item.color2.name.toLowerCase()} make?
      </h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Mixing {item.color1.name.toLowerCase()} and {item.color2.name.toLowerCase()} in the RYB color model produces a
        result close to <strong className="text-gray-900 dark:text-white"> {item.result.closestName}</strong> at
        approximately <strong className="text-gray-900 dark:text-white"> {item.result.hex}</strong>
        <InlineSwatch hex={item.result.hex} />.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
        Different paint brands can shift a little warmer or cooler, but this gives a dependable baseline for color
        mixing, palette planning, and answering what colors make in a realistic pigment workflow.
      </p>
    </div>
  );
}

export default function ColorMixerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(colorMixerWebApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(colorMixerFaqPageJsonLd) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Color Mixing Simulator</h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Use this color mixing simulator to mix colors instantly and see what colors make when blended like real
            paint. The tool uses the RYB color model so common mixes like blue and yellow produce green instead of
            digital RGB-style results. Pick two colors, compare the mixed hex and RGB values, and reuse the result in
            design or art workflows.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <ColorMixer />
        </div>

        <section className="max-w-5xl mx-auto mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently asked color mixing questions</h2>
          <div className="space-y-4">
            {faqData.map((item) => (
              <FAQItem
                key={`${item.color1.name}-${item.color2.name}`}
                item={item}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
