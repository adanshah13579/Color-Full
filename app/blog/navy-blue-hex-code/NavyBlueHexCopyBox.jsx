'use client';

import { useState } from 'react';

const NAVY_HEX = '#000080';

export default function NavyBlueHexCopyBox() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(NAVY_HEX);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className="w-full max-w-2xl rounded-2xl border-2 border-white/30 bg-[#000080] shadow-2xl ring-4 ring-white/10 p-5 sm:p-6 md:p-7 mb-6"
      role="region"
      aria-label="Copy navy blue hex code"
    >
      <p className="text-white/90 text-sm font-medium uppercase tracking-wider mb-3">Quick copy — navy blue hex</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
        <code className="text-white font-mono font-bold text-3xl sm:text-4xl md:text-[2rem] leading-none tracking-tight">
          {NAVY_HEX}
        </code>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-[#000080] shadow-lg hover:bg-blue-50 transition-colors min-w-[8.5rem]"
          aria-label={copied ? 'Copied navy hex' : 'Copy navy blue hex code #000080'}
        >
          {copied ? (
            <>
              <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-white/80 text-sm font-mono">RGB 0, 0, 128 · hsl(240, 100%, 25%)</p>
    </div>
  );
}
