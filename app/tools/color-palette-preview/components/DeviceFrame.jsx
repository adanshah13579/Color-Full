export default function DeviceFrame({ children, title = 'Preview', url }) {
  const displayUrl = url ?? title;

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 shadow-md overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" aria-hidden />
        <div className="ml-2 flex-1 min-w-0 rounded-md bg-gray-100 dark:bg-gray-700/80 px-3 py-1">
          <span className="block text-[10px] text-gray-500 dark:text-gray-400 font-medium truncate">{displayUrl}</span>
        </div>
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
