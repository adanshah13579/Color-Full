/**
 * Visible direct-answer block for AEO (Google AI Overviews, ChatGPT, Perplexity).
 * Place immediately after the H1 — one clear question + quotable answer under 60 words.
 *
 * @param {{ question: string, answer: string, codes?: { label: string, value: string }[] }} props
 */
export default function AeoDirectAnswer({ question, answer, codes = [] }) {
  return (
    <section
      aria-labelledby="aeo-direct-answer"
      className="rounded-xl border border-amber-200/80 dark:border-amber-800/50 bg-amber-50/90 dark:bg-amber-950/30 p-5 md:p-6 mb-6 not-prose"
    >
      <h2 id="aeo-direct-answer" className="text-base font-semibold text-gray-900 dark:text-white mb-2">
        {question}
      </h2>
      <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-[15px] md:text-base">{answer}</p>
      {codes.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2 text-sm font-mono text-gray-700 dark:text-gray-300">
          {codes.map(({ label, value }) => (
            <li
              key={`${label}-${value}`}
              className="rounded-md bg-white/80 dark:bg-gray-900/60 px-2.5 py-1 border border-gray-200 dark:border-gray-700"
            >
              <span className="text-gray-500 dark:text-gray-400">{label}:</span>{' '}
              <strong className="text-gray-900 dark:text-white">{value}</strong>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
