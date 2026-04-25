import ColorMixerTool from './ColorMixerTool';
import { getCombinationMix } from './colorMixing';

export const metadata = {
  title: 'Color Mixing Simulator — What Color Do They Make? | Theme & Color',
  description:
    'Mix any two colors and see the result instantly. Our color mixing simulator uses real paint color theory (RYB) to show you exactly what color red and blue make, yellow and blue make, and more.',
  openGraph: {
    title: 'Color Mixing Simulator — What Color Do They Make? | Theme & Color',
    description:
      'Mix any two colors and see real paint-style results with the RYB color model. Instantly view the mixed hex, RGB, and closest color name.',
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
    card: 'summary_large_image',
    title: 'Color Mixing Simulator — What Color Do They Make? | Theme & Color',
    description:
      'Mix any two colors and see real paint-style results with the RYB color model.',
    images: ['/og-color-mixer.png'],
  },
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Color Mixing Simulator',
  url: 'https://themeandcolor.com/tools/color-mixer',
  description: 'Mix any two colors and see the real paint mixing result using RYB color theory',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: `What color does ${item.color1.name.toLowerCase()} and ${item.color2.name.toLowerCase()} make?`,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `${item.color1.name} and ${item.color2.name} mix to ${item.result.closestName} in this RYB simulator, around ${item.result.hex}. Actual paint brands vary by pigment strength, but this gives a practical reference for planning palettes and illustrations.`,
    },
  })),
};

function InlineSwatch({ hex }) {
  return <span className="inline-block w-4 h-4 rounded align-middle mx-1 border border-gray-300 dark:border-gray-600" style={{ backgroundColor: hex }} />;
}

function FAQItem({ item }) {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
          <ColorMixerTool />
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
