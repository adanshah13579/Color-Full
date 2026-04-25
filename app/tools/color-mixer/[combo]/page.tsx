import Link from 'next/link';
import { notFound } from 'next/navigation';
import ColorMixer from '../components/ColorMixer';
import { PRESET_MAP, getCombinationMix, toTitleCase } from '../colorMixing';

const COMBINATIONS = [
  'red-and-blue',
  'blue-and-yellow',
  'red-and-yellow',
  'blue-and-green',
  'red-and-green',
  'purple-and-yellow',
  'orange-and-blue',
  'pink-and-purple',
  'red-and-white',
  'blue-and-white',
  'black-and-white',
  'red-and-black',
  'yellow-and-green',
  'orange-and-red',
  'blue-and-purple',
  'green-and-yellow',
  'pink-and-blue',
  'brown-and-orange',
];

const RELATED: Record<string, string[]> = {
  'red-and-blue': ['purple-and-yellow', 'red-and-yellow', 'blue-and-purple', 'red-and-white'],
  'blue-and-yellow': ['yellow-and-green', 'blue-and-green', 'orange-and-blue', 'green-and-yellow'],
  'red-and-yellow': ['orange-and-red', 'red-and-blue', 'orange-and-blue', 'red-and-white'],
  'blue-and-green': ['blue-and-yellow', 'yellow-and-green', 'pink-and-blue', 'black-and-white'],
  'red-and-green': ['red-and-blue', 'red-and-black', 'green-and-yellow', 'blue-and-green'],
  'purple-and-yellow': ['red-and-blue', 'blue-and-purple', 'orange-and-blue', 'pink-and-purple'],
  'orange-and-blue': ['red-and-yellow', 'blue-and-yellow', 'purple-and-yellow', 'brown-and-orange'],
  'pink-and-purple': ['red-and-white', 'blue-and-purple', 'pink-and-blue', 'red-and-blue'],
  'red-and-white': ['blue-and-white', 'pink-and-purple', 'red-and-yellow', 'red-and-blue'],
  'blue-and-white': ['red-and-white', 'blue-and-yellow', 'pink-and-blue', 'black-and-white'],
  'black-and-white': ['red-and-black', 'blue-and-white', 'red-and-white', 'brown-and-orange'],
  'red-and-black': ['black-and-white', 'red-and-green', 'orange-and-red', 'red-and-blue'],
  'yellow-and-green': ['blue-and-yellow', 'green-and-yellow', 'blue-and-green', 'orange-and-red'],
  'orange-and-red': ['red-and-yellow', 'orange-and-blue', 'brown-and-orange', 'red-and-black'],
  'blue-and-purple': ['red-and-blue', 'purple-and-yellow', 'pink-and-purple', 'pink-and-blue'],
  'green-and-yellow': ['yellow-and-green', 'blue-and-yellow', 'blue-and-green', 'brown-and-orange'],
  'pink-and-blue': ['blue-and-white', 'pink-and-purple', 'red-and-blue', 'blue-and-green'],
  'brown-and-orange': ['orange-and-red', 'orange-and-blue', 'red-and-black', 'black-and-white'],
};

function parseCombo(combo: string) {
  const parts = combo.split('-');
  if (parts.length !== 3 || parts[1] !== 'and') return null;
  const color1 = parts[0];
  const color2 = parts[2];
  if (!PRESET_MAP[color1] || !PRESET_MAP[color2]) return null;
  return { color1, color2 };
}

function getSpecificExplanation(color1: string, color2: string, hex: string, resultName: string) {
  const c1 = toTitleCase(color1);
  const c2 = toTitleCase(color2);
  return `${c1} and ${c2} mix to a color close to ${resultName}, around ${hex}, when you follow paint-style RYB blending. This matters because digital RGB previews often mislead users who are trying to predict what real pigments will look like on paper, canvas, or painted surfaces. In practical projects, this blend can shift warmer or cooler depending on pigment load, paint opacity, and whether you add white or black afterward, but ${hex} is a dependable baseline for planning your palette. Use this result as a mid-tone accent first, then create a lighter tint for large backgrounds and a deeper shade for borders or emphasis. If you apply this mix in UI mockups, keep long-form text on neutral backgrounds and use the mixed tone for highlights, tags, or call-to-action accents. After choosing a final variation, validate contrast before shipping to keep the design readable and accessible.`;
}

export async function generateStaticParams() {
  return COMBINATIONS.map((combo) => ({ combo }));
}

export async function generateMetadata({ params }: { params: { combo: string } }) {
  const parsed = parseCombo(params.combo);
  if (!parsed) {
    return {
      title: 'Color Mixing Simulator | Theme & Color',
    };
  }

  const c1 = parsed.color1.charAt(0).toUpperCase() + parsed.color1.slice(1);
  const c2 = parsed.color2.charAt(0).toUpperCase() + parsed.color2.slice(1);
  return {
    title: `What Color Does ${c1} and ${c2} Make? | Theme & Color`,
    description: `Mix ${c1} and ${c2} and see the exact result instantly. Find out what color ${c1.toLowerCase()} and ${c2.toLowerCase()} make using real RYB paint color theory with hex codes.`,
    openGraph: {
      title: `What Color Does ${c1} and ${c2} Make?`,
      description: `See what happens when you mix ${c1} and ${c2}`,
      url: `https://themeandcolor.com/tools/color-mixer/${params.combo}`,
    },
  };
}

export default function ColorMixerCombinationPage({ params }: { params: { combo: string } }) {
  const parsed = parseCombo(params.combo);
  if (!parsed) notFound();

  const mix = getCombinationMix(parsed.color1, parsed.color2);
  if (!mix) notFound();

  const c1 = parsed.color1.charAt(0).toUpperCase() + parsed.color1.slice(1);
  const c2 = parsed.color2.charAt(0).toUpperCase() + parsed.color2.slice(1);
  const related = (RELATED[params.combo] || COMBINATIONS.filter((c) => c !== params.combo)).slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Color Does {c1} and {c2} Make?
          </h1>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {getSpecificExplanation(parsed.color1, parsed.color2, mix.result.hex, mix.result.closestName)}
          </p>

          <ColorMixer initialColor1={mix.color1.hex} initialColor2={mix.color2.hex} showRelated />

          <div className="mt-10 rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Related color combinations</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((slug) => {
                const [left, , right] = slug.split('-');
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
                Back to main /tools/color-mixer page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
