const QUICK_ACTIONS = [
  { label: 'Send', icon: 'send' },
  { label: 'Pay', icon: 'pay' },
  { label: 'Scan', icon: 'scan' },
  { label: 'More', icon: 'more' },
];

const STAT_CARDS = [
  { value: '$2.4K', label: 'Balance' },
  { value: '12', label: 'Tasks' },
  { value: '7 day', label: 'Streak' },
];

const TASKS = [
  { title: 'Review design mockup', done: true },
  { title: 'Send invoice to client', done: false },
  { title: 'Team standup at 3pm', done: false },
];

const FEED_ITEMS = [
  { title: 'Sarah liked your post', sub: '2 min ago', initial: 'S' },
  { title: 'New order #4821', sub: '15 min ago', initial: 'O' },
  { title: 'Weekly report ready', sub: '1 hr ago', initial: 'R' },
];

const BOTTOM_NAV = [
  { id: 'home', icon: 'home', active: true, label: 'Home' },
  { id: 'search', icon: 'search', active: false, label: 'Search' },
  { id: 'bell', icon: 'bell', active: false, label: 'Alerts' },
  { id: 'user', icon: 'user', active: false, label: 'Profile' },
];

function QuickIcon({ type, color }) {
  const s = { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true };
  if (type === 'send') {
    return (
      <svg {...s}>
        <path d="M2 8 L14 3 L10 14 L8 9 Z" fill={color} />
      </svg>
    );
  }
  if (type === 'pay') {
    return (
      <svg {...s}>
        <rect x="2" y="4" width="12" height="8" rx="1.5" stroke={color} strokeWidth="1.5" />
        <path d="M2 7 H14" stroke={color} strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === 'scan') {
    return (
      <svg {...s}>
        <rect x="3" y="3" width="4" height="4" stroke={color} strokeWidth="1.5" />
        <rect x="9" y="3" width="4" height="4" stroke={color} strokeWidth="1.5" />
        <rect x="3" y="9" width="4" height="4" stroke={color} strokeWidth="1.5" />
        <rect x="9" y="9" width="4" height="4" stroke={color} strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg {...s}>
      <circle cx="4" cy="8" r="1.5" fill={color} />
      <circle cx="8" cy="8" r="1.5" fill={color} />
      <circle cx="12" cy="8" r="1.5" fill={color} />
    </svg>
  );
}

function NavIcon({ type, color }) {
  const props = { width: 20, height: 20, viewBox: '0 0 20 20', fill: 'none', 'aria-hidden': true };
  if (type === 'home') {
    return (
      <svg {...props}>
        <path d="M10 3 L17 9 V17 H13 V12 H7 V17 H3 V9 Z" fill={color} />
      </svg>
    );
  }
  if (type === 'search') {
    return (
      <svg {...props}>
        <circle cx="9" cy="9" r="5" stroke={color} strokeWidth="2" />
        <path d="M13 13 L17 17" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'bell') {
    return (
      <svg {...props}>
        <path d="M10 3 C7 3 5 5 5 8 V12 L3 14 H17 L15 12 V8 C15 5 13 3 10 3 Z" fill={color} />
        <circle cx="10" cy="16" r="1.5" fill={color} />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <circle cx="10" cy="7" r="3" fill={color} />
      <path d="M4 17 C4 13.5 6.5 12 10 12 C13.5 12 16 13.5 16 17" fill={color} />
    </svg>
  );
}

export default function MobileAppMockup({ colors }) {
  const { primary, secondary, accent, background, text } = colors;

  return (
    <div className="flex flex-col h-full text-left select-none" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Status bar */}
      <div
        className="shrink-0 h-6 flex items-center justify-between px-4 pt-1"
        style={{ backgroundColor: primary }}
      >
        <span className="text-[10px] font-semibold text-white">9:41</span>
        <div className="flex items-center gap-1" aria-hidden>
          <span className="w-3 h-2 border border-white rounded-sm" />
          <span className="w-1 h-2 bg-white rounded-sm" />
          <span className="w-4 h-2 border border-white rounded-sm relative">
            <span className="absolute inset-y-0 left-0 w-2/3 bg-white rounded-sm" />
          </span>
        </div>
      </div>

      {/* Header */}
      <header
        className="shrink-0 h-11 flex items-center justify-between px-3"
        style={{ backgroundColor: primary }}
      >
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center" aria-hidden>
          <div className="w-4 h-4 rounded-full bg-white/80" />
        </div>
        <span className="text-[13px] font-semibold text-white">My App</span>
        <div className="relative">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M3 5 H15 M3 9 H15 M3 13 H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </header>

      {/* Scrollable body */}
      <div
        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-3 py-3 flex flex-col gap-2.5"
        style={{ backgroundColor: background }}
      >
        {/* Search */}
        <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm border border-gray-100 shrink-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-400 shrink-0" aria-hidden>
            <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 9 L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[10px] text-gray-400">Search anything...</span>
        </div>

        {/* Welcome card */}
        <div className="rounded-xl px-3.5 py-3 shrink-0 shadow-sm" style={{ backgroundColor: primary }}>
          <p className="text-[12px] font-bold text-white leading-tight">Welcome back, Alex!</p>
          <p className="text-[9px] text-white/80 mt-0.5">You have 3 tasks due today</p>
          <span
            className="inline-block mt-2 text-[9px] font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: accent, color: text }}
          >
            View tasks
          </span>
        </div>

        {/* Stat cards row */}
        <div className="flex gap-2 shrink-0 overflow-hidden">
          {STAT_CARDS.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 min-w-0 bg-white rounded-xl px-2 py-2 shadow-sm border border-gray-100"
            >
              <div className="text-[11px] font-bold truncate" style={{ color: text }}>
                {stat.value}
              </div>
              <div className="text-[8px] text-gray-400 truncate">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-4 gap-1.5 shrink-0">
          {QUICK_ACTIONS.map((action) => (
            <div
              key={action.label}
              className="bg-white rounded-xl py-2 flex flex-col items-center gap-1 shadow-sm border border-gray-100"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${secondary}22` }}
              >
                <QuickIcon type={action.icon} color={secondary} />
              </div>
              <span className="text-[8px] font-medium" style={{ color: text }}>
                {action.label}
              </span>
            </div>
          ))}
        </div>

        {/* Promo card */}
        <div
          className="rounded-xl px-3 py-2.5 shrink-0 flex items-center justify-between gap-2"
          style={{ backgroundColor: accent }}
        >
          <div>
            <p className="text-[10px] font-bold text-white">Upgrade to Pro</p>
            <p className="text-[8px] text-white/80">Unlock all features</p>
          </div>
          <span
            className="text-[8px] font-bold px-2 py-1 rounded-lg shrink-0"
            style={{ backgroundColor: primary, color: '#fff' }}
          >
            Try free
          </span>
        </div>

        {/* Progress card */}
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 shrink-0">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold" style={{ color: text }}>
              Weekly goal
            </span>
            <span className="text-[9px] font-semibold" style={{ color: secondary }}>
              68%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full w-[68%] rounded-full" style={{ backgroundColor: secondary }} aria-hidden />
          </div>
        </div>

        {/* Tasks */}
        <div className="shrink-0">
          <h2 className="text-[10px] font-bold mb-1.5" style={{ color: text }}>
            Today&apos;s tasks
          </h2>
          <ul className="flex flex-col gap-1.5">
            {TASKS.map((task) => (
              <li
                key={task.title}
                className="bg-white rounded-lg px-2.5 py-2 flex items-center gap-2 shadow-sm border border-gray-100"
              >
                <div
                  className="w-3.5 h-3.5 rounded border-2 shrink-0 flex items-center justify-center"
                  style={{
                    borderColor: task.done ? secondary : '#D1D5DB',
                    backgroundColor: task.done ? secondary : 'transparent',
                  }}
                  aria-hidden
                >
                  {task.done ? (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4 L3 5.5 L6.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  ) : null}
                </div>
                <span
                  className={`text-[9px] flex-1 truncate ${task.done ? 'line-through text-gray-400' : ''}`}
                  style={{ color: task.done ? undefined : text }}
                >
                  {task.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Activity feed */}
        <div className="shrink-0 pb-1">
          <h2 className="text-[10px] font-bold mb-1.5" style={{ color: text }}>
            Activity
          </h2>
          <ul className="flex flex-col gap-1.5">
            {FEED_ITEMS.map((item) => (
              <li
                key={item.title}
                className="bg-white rounded-xl px-2.5 py-2 flex items-center gap-2 shadow-sm border border-gray-100"
              >
                <div
                  className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ backgroundColor: primary }}
                  aria-hidden
                >
                  {item.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-semibold truncate" style={{ color: text }}>
                    {item.title}
                  </p>
                  <p className="text-[8px] text-gray-400">{item.sub}</p>
                </div>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 text-gray-300" aria-hidden>
                  <path d="M3 2 L7 5 L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom nav */}
      <nav className="shrink-0 h-[52px] bg-white border-t border-gray-100 flex items-center justify-around px-1 pb-0.5">
        {BOTTOM_NAV.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center gap-0.5 relative">
            {item.icon === 'bell' ? (
              <span
                className="absolute top-0 right-0 w-2 h-2 rounded-full border border-white"
                style={{ backgroundColor: accent }}
                aria-hidden
              />
            ) : null}
            <NavIcon type={item.icon} color={item.active ? primary : '#9CA3AF'} />
            <span
              className="text-[7px] font-medium"
              style={{ color: item.active ? primary : '#9CA3AF' }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}
