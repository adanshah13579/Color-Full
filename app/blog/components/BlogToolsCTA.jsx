import Link from 'next/link';

export default function BlogToolsCTA() {
  return (
    <section className="my-12 not-prose">
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Build your palette
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5">
          Use our free tools to create and test your color palette.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/tools/palette-generator"
            className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-blue-400 hover:bg-white hover:text-blue-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-blue-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors"
          >
            Color Palette Generator
          </Link>
          <Link
            href="/tools/contrast-checker"
            className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-emerald-500 hover:bg-white hover:text-emerald-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-emerald-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors"
          >
            WCAG Contrast Checker
          </Link>
        </div>
      </div>
    </section>
  );
}
