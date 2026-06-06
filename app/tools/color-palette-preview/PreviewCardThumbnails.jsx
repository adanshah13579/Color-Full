/** Static mini thumbnails using the default palette for hub preview cards. */
const C = {
  primary: '#1E40AF',
  secondary: '#3B82F6',
  accent: '#F59E0B',
  background: '#F8FAFC',
  text: '#1E293B',
};

export function DashboardThumbnail() {
  return (
    <div className="w-full aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 flex text-left select-none">
      <div className="w-[18%] shrink-0 py-2 px-1 flex flex-col gap-1.5" style={{ backgroundColor: C.primary }}>
        <div className="h-2 w-6 mx-auto rounded bg-white/90" aria-hidden />
        <div className="h-1.5 rounded bg-white/30 mx-0.5" aria-hidden />
        <div className="h-1.5 rounded mx-0.5" style={{ backgroundColor: C.accent }} aria-hidden />
        <div className="h-1.5 rounded bg-white/30 mx-0.5" aria-hidden />
      </div>
      <div className="flex-1 flex flex-col min-w-0" style={{ backgroundColor: C.background }}>
        <div className="h-4 bg-white border-b border-gray-100 flex items-center px-2 gap-1">
          <div className="h-1.5 flex-1 max-w-[40%] rounded bg-gray-100" aria-hidden />
          <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.accent }} aria-hidden />
        </div>
        <div className="p-1.5 flex flex-col gap-1 flex-1">
          <div className="grid grid-cols-4 gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded p-1 border border-gray-100">
                <div className="w-2 h-2 rounded-full mb-0.5" style={{ backgroundColor: C.secondary }} aria-hidden />
                <div className="h-1 w-3/4 rounded" style={{ backgroundColor: C.text, opacity: 0.8 }} aria-hidden />
              </div>
            ))}
          </div>
          <div className="flex-1 grid grid-cols-2 gap-1 min-h-0">
            <div className="bg-white rounded p-1 border border-gray-100 flex items-end gap-0.5">
              {[40, 60, 35, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{ height: h * 0.12, backgroundColor: i % 2 ? C.accent : C.secondary }}
                  aria-hidden
                />
              ))}
            </div>
            <div className="bg-white rounded p-1 border border-gray-100 space-y-0.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-0.5">
                  <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: C.primary }} aria-hidden />
                  <div className="h-1 flex-1 rounded bg-gray-200" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingPageThumbnail() {
  return (
    <div className="w-full aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 flex flex-col text-left select-none">
      <div className="h-3 bg-white flex items-center justify-between px-2 shrink-0">
        <div className="h-1 w-4 rounded" style={{ backgroundColor: C.primary }} aria-hidden />
        <div className="flex gap-1">
          <div className="h-1 w-2 rounded bg-gray-300" aria-hidden />
          <div className="h-1.5 w-4 rounded-full" style={{ backgroundColor: C.primary }} aria-hidden />
        </div>
      </div>
      <div className="flex-1 px-2 py-1.5 flex items-center gap-1.5" style={{ backgroundColor: C.primary }}>
        <div className="flex-1">
          <div className="h-2 w-3/4 rounded bg-white mb-1" aria-hidden />
          <div className="h-1 w-full rounded bg-white/60 mb-1" aria-hidden />
          <div className="flex gap-0.5">
            <div className="h-1.5 w-4 rounded" style={{ backgroundColor: C.accent }} aria-hidden />
            <div className="h-1.5 w-4 rounded border border-white/70" aria-hidden />
          </div>
        </div>
        <div className="w-8 h-8 relative shrink-0" aria-hidden>
          <div className="absolute w-4 h-4 rounded-full top-0 right-1" style={{ backgroundColor: C.secondary }} />
          <div className="absolute w-3 h-3 rounded bottom-0 left-0" style={{ backgroundColor: C.accent }} />
        </div>
      </div>
      <div className="h-5 px-2 py-1 flex gap-1" style={{ backgroundColor: C.background }}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex-1 bg-white rounded border border-gray-100 p-0.5">
            <div className="w-2 h-2 rounded-full mb-0.5" style={{ backgroundColor: C.secondary }} aria-hidden />
            <div className="h-0.5 w-full rounded bg-gray-200" aria-hidden />
          </div>
        ))}
      </div>
      <div className="h-2.5 shrink-0 flex items-center justify-center" style={{ backgroundColor: C.accent }}>
        <div className="h-1 w-6 rounded-full" style={{ backgroundColor: C.primary }} aria-hidden />
      </div>
    </div>
  );
}

export function MobileAppThumbnail() {
  return (
    <div className="w-full aspect-[16/10] flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/50 p-3">
      <div className="h-full aspect-[9/16] max-h-full rounded-[14px] bg-[#2d2d2d] p-1 shadow-md">
        <div className="w-full h-full rounded-[10px] overflow-hidden flex flex-col bg-white">
          <div className="h-2 shrink-0" style={{ backgroundColor: C.primary }} aria-hidden />
          <div className="h-2.5 shrink-0 flex items-center justify-center" style={{ backgroundColor: C.primary }}>
            <div className="h-0.5 w-4 rounded bg-white/80" aria-hidden />
          </div>
          <div className="flex-1 p-1 flex flex-col gap-0.5" style={{ backgroundColor: C.background }}>
            <div className="rounded p-0.5 shrink-0" style={{ backgroundColor: C.primary }}>
              <div className="h-0.5 w-2/3 rounded bg-white mb-0.5" aria-hidden />
              <div className="h-0.5 w-1/2 rounded bg-white/60" aria-hidden />
            </div>
            <div className="grid grid-cols-2 gap-0.5 flex-1">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded border border-gray-100 flex flex-col items-center justify-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: C.accent }} aria-hidden />
                  <div className="h-0.5 w-3 rounded" style={{ backgroundColor: C.text, opacity: 0.7 }} aria-hidden />
                </div>
              ))}
            </div>
          </div>
          <div className="h-2.5 shrink-0 bg-white border-t border-gray-100 flex items-center justify-around px-1">
            <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: C.primary }} aria-hidden />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" aria-hidden />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" aria-hidden />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
