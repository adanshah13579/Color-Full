'use client';

function PairSwatch({ fg, bg, label }) {
  return (
    <div
      className="rounded-lg border border-gray-200 dark:border-gray-600 px-4 py-3 min-h-[3.5rem] flex items-center justify-center text-center text-sm font-semibold shadow-inner"
      style={{ backgroundColor: bg, color: fg }}
    >
      {label}
    </div>
  );
}

export default function ContrastPairExample({ title, body, ratio, passes, badFg, badBg, goodFg, goodBg }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <span
          className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
            passes
              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200'
              : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'
          }`}
        >
          {passes ? 'Passes AA' : 'Fails AA'}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{body}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
            {passes ? 'Strong pair' : 'Weak pair'}
          </p>
          <PairSwatch fg={passes ? goodFg : badFg} bg={passes ? goodBg : badBg} label="Sample text" />
          <p className="mt-1.5 font-mono text-xs text-gray-500 dark:text-gray-400">
            {passes ? goodFg : badFg} on {passes ? goodBg : badBg}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
            {passes ? 'Weaker alternative' : 'Better fix'}
          </p>
          <PairSwatch fg={passes ? badFg : goodFg} bg={passes ? badBg : goodBg} label="Sample text" />
          <p className="mt-1.5 font-mono text-xs text-gray-500 dark:text-gray-400">
            {passes ? badFg : goodFg} on {passes ? badBg : goodBg}
          </p>
        </div>
      </div>
      {ratio ? (
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Approximate contrast ratio: <strong className="text-gray-800 dark:text-gray-200">{ratio}</strong>
        </p>
      ) : null}
    </li>
  );
}
