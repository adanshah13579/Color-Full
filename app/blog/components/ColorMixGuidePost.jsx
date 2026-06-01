import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import {
  MixRatioTable,
  PalettePairingsSection,
  PaletteUiUsageSection,
} from './PaletteReferenceBlocks';

function BlogMixerCTA({ mixerHref, mixerLabel }) {
  return (
    <section className="my-12 not-prose">
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Try it with our free tools</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5">
          Simulate mixes in the browser, then build a full palette for your project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href={mixerHref}
            className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-orange-400 hover:bg-white hover:text-orange-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-orange-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors"
          >
            {mixerLabel}
          </Link>
          <Link
            href="/tools/palette-generator"
            className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-blue-400 hover:bg-white hover:text-blue-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-blue-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors"
          >
            Color Palette Generator
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * @param {object} props
 * @param {string} props.heroGradient
 * @param {string} props.heroAccentText
 * @param {string} props.h1
 * @param {string} props.featuredSnippet
 * @param {string} props.heroSwatchHex
 * @param {string} props.heroSwatchAria
 * @param {string} props.mixTableTitle
 * @param {Array<{ ratio: string, label: string, hex: string }>} props.mixRows
 * @param {string} [props.shadeSectionTitle]
 * @param {string} [props.shadeSectionBody]
 * @param {string} [props.introParagraph]
 * @param {string} props.combinationsTitle
 * @param {string} [props.complementaryTitle]
 * @param {string} [props.complementaryIntro]
 * @param {Array<{ title: string, body: string, swatches: string[] }>} [props.complementaryPairings]
 * @param {string} props.combinationsIntro
 * @param {Array<{ title: string, body: string, swatches: string[] }>} props.combinations
 * @param {string} props.designTitle
 * @param {import('react').ReactNode} props.designContent
 * @param {Array<{ question: string, answer: string }>} props.faq
 * @param {string} props.mixerHref
 * @param {string} props.mixerLabel
 * @param {object} props.faqSchema
 */
export default function ColorMixGuidePost({
  heroGradient,
  heroAccentText,
  h1,
  featuredSnippet,
  heroSwatchHex,
  heroSwatchAria,
  mixTableTitle,
  mixRows,
  shadeSectionTitle,
  shadeSectionBody,
  introParagraph,
  combinationsTitle,
  combinationsIntro,
  combinations,
  complementaryTitle,
  complementaryIntro,
  complementaryPairings,
  designTitle,
  designContent,
  faq,
  mixerHref,
  mixerLabel,
  faqSchema,
}) {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className={`bg-gradient-to-br ${heroGradient} text-white py-12 md:py-16`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className={`inline-flex items-center ${heroAccentText} hover:text-white mb-6 transition-colors text-sm`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{h1}</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-white leading-relaxed mb-6 border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 dark:border-amber-400 pl-5 pr-4 py-4 rounded-r-xl">
            {featuredSnippet}
          </p>

          <div
            className="w-full h-40 md:h-52 rounded-2xl border-2 border-gray-200 dark:border-gray-600 shadow-lg mb-10"
            style={{ backgroundColor: heroSwatchHex }}
            role="img"
            aria-label={heroSwatchAria}
          />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{mixTableTitle}</h2>
            <MixRatioTable rows={mixRows} />
          </section>

          {introParagraph ? (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg mb-10">{introParagraph}</p>
          ) : null}

          {shadeSectionTitle && shadeSectionBody ? (
            <section className="mb-10 prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">{shadeSectionTitle}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{shadeSectionBody}</p>
            </section>
          ) : null}

          <PalettePairingsSection title={combinationsTitle} intro={combinationsIntro} pairings={combinations} />

          {complementaryTitle && complementaryPairings?.length ? (
            <div className="mt-10">
              <PalettePairingsSection
                title={complementaryTitle}
                intro={complementaryIntro ?? ''}
                pairings={complementaryPairings}
              />
            </div>
          ) : null}

          <div className="mt-10">
            <PaletteUiUsageSection title={designTitle}>{designContent}</PaletteUiUsageSection>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">FAQ</h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <BlogMixerCTA mixerHref={mixerHref} mixerLabel={mixerLabel} />

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Validate text on your new palette with our{' '}
            <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>.
          </p>
        </div>
      </div>
    </article>
  );
}
