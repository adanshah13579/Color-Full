import Link from 'next/link';
import type { ComboSeoBundle } from './comboSeoContent';
import ColorMixerRatioTable from './ColorMixerRatioTable';

export default function ColorMixerSeoBlocks({ content }: { content: ComboSeoBundle }) {
  return (
    <div className="mt-12 space-y-8">
      <section aria-labelledby="combo-quick-answer">
        <h2 id="combo-quick-answer" className="sr-only">
          Quick answer
        </h2>
        <div className="rounded-2xl border border-purple-200 dark:border-purple-800 bg-purple-50/90 dark:bg-purple-950/40 p-5 sm:p-6 shadow-sm">
          <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {content.quickFormula}{' '}
            <span className="font-mono text-purple-700 dark:text-purple-300">({content.quickHex})</span>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div
              className="h-20 w-32 sm:h-24 sm:w-40 rounded-xl border-2 border-white/70 dark:border-gray-700 shadow-md shrink-0"
              style={{ backgroundColor: content.quickHex }}
              role="img"
              aria-label={content.quickSwatchAria}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              Swatch shows the headline mix color—compare with the ratio table and adjust live in the simulator.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why this mix looks the way it does</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{content.theory}</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Five mix ratios (hex previews)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Ratios describe how much of each primary contributes to the blend; hex values are reference stops for design tokens and mood boards.
        </p>
        <ColorMixerRatioTable rows={content.ratioRows} />
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Using this combination in UI and brand design</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{content.uiUsage}</p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Build harmonious ramps and harmonies from any swatch above in the{' '}
          <Link
            href="/tools/palette-generator"
            className="font-semibold text-purple-600 dark:text-purple-400 hover:underline underline-offset-2"
          >
            palette generator
          </Link>
          , then validate text, links, and buttons with the{' '}
          <Link href="/tools/contrast-checker" className="font-semibold text-purple-600 dark:text-purple-400 hover:underline underline-offset-2">
            contrast checker
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
