import Link from 'next/link';
import { notFound } from 'next/navigation';
import ColorMixerTool from '../ColorMixerTool';
import { MIX_COMBINATIONS, PRESET_MAP, getCombinationMix, toTitleCase } from '../colorMixing';

const RELATED_COMBINATIONS = {
  'red-and-blue': ['red-and-yellow', 'purple-and-yellow', 'blue-and-white', 'red-and-white'],
  'blue-and-yellow': ['red-and-yellow', 'blue-and-green', 'orange-and-blue', 'blue-and-white'],
  'red-and-yellow': ['red-and-blue', 'blue-and-yellow', 'orange-and-blue', 'red-and-white'],
  'blue-and-green': ['blue-and-yellow', 'orange-and-blue', 'black-and-white', 'red-and-green'],
  'red-and-green': ['red-and-blue', 'blue-and-green', 'black-and-white', 'red-and-black'],
  'purple-and-yellow': ['red-and-blue', 'orange-and-blue', 'pink-and-purple', 'blue-and-yellow'],
  'orange-and-blue': ['red-and-yellow', 'blue-and-yellow', 'purple-and-yellow', 'red-and-blue'],
  'pink-and-purple': ['red-and-white', 'red-and-blue', 'purple-and-yellow', 'blue-and-white'],
  'red-and-white': ['blue-and-white', 'red-and-blue', 'red-and-yellow', 'pink-and-purple'],
  'blue-and-white': ['red-and-white', 'blue-and-yellow', 'red-and-blue', 'pink-and-purple'],
  'black-and-white': ['red-and-black', 'blue-and-white', 'red-and-white', 'blue-and-green'],
  'red-and-black': ['black-and-white', 'red-and-green', 'red-and-blue', 'orange-and-blue'],
};

function parseMixSlug(slug) {
  const match = /^([a-z]+)-and-([a-z]+)$/.exec((slug || '').toLowerCase());
  if (!match) return null;
  const [, c1, c2] = match;
  if (!PRESET_MAP[c1] || !PRESET_MAP[c2]) return null;
  return [c1, c2];
}

function getExplanation({ color1, color2, result }) {
  return `${toTitleCase(color1.name.toLowerCase())} and ${toTitleCase(color2.name.toLowerCase())} mix to a tone close to ${result.closestName}, approximately ${result.hex}, when blended with a paint-style RYB model. That matters because most people searching this question want realistic pigment behavior instead of digital light mixing. This result gives you a practical starting point for sketching, mural planning, classroom color lessons, and UI moodboarding where natural-looking blends matter.\n\nIn real paint, the final swatch can shift slightly warmer, cooler, lighter, or muddier depending on pigment brand and opacity, but ${result.hex} is a strong baseline for planning combinations before you buy materials or finalize a style guide. Use it as a secondary/supporting color first, then test nearby tints and shades for buttons, backgrounds, and accents. If this mix is for interfaces, keep body text on neutral surfaces and validate readability with a contrast check before shipping your design.`;
}

export function generateStaticParams() {
  return MIX_COMBINATIONS.map(([a, b]) => ({ mix: `${a}-and-${b}` }));
}

export function generateMetadata({ params }) {
  const parsed = parseMixSlug(params.mix);
  if (!parsed) {
    return {
      title: 'Color Mixing Simulator | Theme & Color',
    };
  }

  const [a, b] = parsed;
  const mix = getCombinationMix(a, b);
  const title = `What Color Does ${toTitleCase(a)} and ${toTitleCase(b)} Make? | Theme & Color`;
  const description = `${toTitleCase(a)} and ${toTitleCase(b)} mix to ${mix.result.closestName} (${mix.result.hex}) in our RYB color mixer. Try this combination and explore related paint-style mixes instantly.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: [{ url: '/og-color-mixer.png', width: 1200, height: 630, alt: 'Color Mixing Simulator preview' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-color-mixer.png'],
    },
  };
}

export default function ColorMixCombinationPage({ params }) {
  const parsed = parseMixSlug(params.mix);
  if (!parsed) notFound();

  const [a, b] = parsed;
  const mix = getCombinationMix(a, b);
  if (!mix) notFound();

  const related = (RELATED_COMBINATIONS[params.mix] || []).slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Color Does {toTitleCase(a)} and {toTitleCase(b)} Make?
          </h1>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-6">
            {getExplanation(mix)}
          </p>

          <ColorMixerTool initialColor1={mix.color1.hex} initialColor2={mix.color2.hex} showRelated />

          <div className="mt-10 rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Explore related mixes</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((slug) => {
                const [left, right] = slug.split('-and-');
                return (
                  <Link
                    key={slug}
                    href={`/tools/color-mixer/${slug}`}
                    className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
                  >
                    {toTitleCase(left)} + {toTitleCase(right)}
                  </Link>
                );
              })}
            </div>
            <p className="mt-4">
              <Link href="/tools/color-mixer" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                Back to main Color Mixing Simulator
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
