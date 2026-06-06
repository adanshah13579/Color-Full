'use client';

import { useState } from 'react';
import { pickReadableText } from '../lib/contrastUtils';

const STAT_CARDS = [
  { value: '12,430', label: 'Users' },
  { value: '$48.2K', label: 'Revenue' },
  { value: '1,893', label: 'Active' },
  { value: '+24%', label: 'Growth' },
];

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'reports', label: 'Reports' },
  { id: 'users', label: 'Users' },
  { id: 'settings', label: 'Settings' },
];

const RECENT_ITEMS = [
  'New user signed up',
  'Payment received',
  'Report exported',
  'Team member invited',
];

const CHART_BARS = [
  { height: 52, colorKey: 'secondary' },
  { height: 78, colorKey: 'accent' },
  { height: 60, colorKey: 'secondary' },
  { height: 92, colorKey: 'accent' },
  { height: 68, colorKey: 'secondary' },
  { height: 100, colorKey: 'accent' },
  { height: 56, colorKey: 'secondary' },
  { height: 84, colorKey: 'accent' },
];

const REPORTS = [
  { title: 'Monthly Revenue', meta: 'Updated 2h ago' },
  { title: 'User Growth', meta: 'Updated 5h ago' },
  { title: 'Conversion Funnel', meta: 'Updated 1d ago' },
];

const USERS = [
  { name: 'Alex Morgan', role: 'Admin' },
  { name: 'Jordan Lee', role: 'Editor' },
  { name: 'Sam Patel', role: 'Viewer' },
  { name: 'Riley Chen', role: 'Editor' },
];

function OverviewPage({ colors }) {
  const { primary, secondary, accent, text } = colors;

  return (
    <>
      <div className="grid grid-cols-4 gap-4 shrink-0">
        {STAT_CARDS.map((card) => (
          <div key={card.label} className="bg-white rounded-xl px-4 py-3.5 shadow-md border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full shrink-0" style={{ backgroundColor: secondary }} aria-hidden />
              <div className="min-w-0">
                <div className="text-lg font-bold leading-tight truncate" style={{ color: text }}>
                  {card.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{card.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 flex gap-4 min-h-0">
        <div className="w-[60%] bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col min-h-0">
          <h3 className="text-sm font-semibold mb-4 shrink-0" style={{ color: text }}>
            Analytics
          </h3>
          <div className="flex-1 flex items-end justify-between gap-2 px-1 pb-1 min-h-0">
            {CHART_BARS.map((bar, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md min-w-0"
                style={{
                  height: bar.height,
                  backgroundColor: bar.colorKey === 'accent' ? accent : secondary,
                }}
                aria-hidden
              />
            ))}
          </div>
        </div>

        <div className="w-[40%] bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col min-h-0">
          <h3 className="text-sm font-semibold mb-4 shrink-0" style={{ color: text }}>
            Recent
          </h3>
          <ul className="flex flex-col gap-3 flex-1">
            {RECENT_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2.5 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: primary }} aria-hidden />
                <span className="text-xs truncate" style={{ color: text }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function AnalyticsPage({ colors }) {
  const { secondary, accent, text } = colors;

  return (
    <div className="flex-1 flex flex-col gap-4 min-h-0">
      <div className="grid grid-cols-3 gap-4 shrink-0">
        {['Sessions', 'Bounce rate', 'Avg. duration'].map((label, i) => (
          <div key={label} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
            <div className="text-xs text-gray-400 mb-1">{label}</div>
            <div className="text-xl font-bold" style={{ color: text }}>
              {['24.8K', '32%', '4m 12s'][i]}
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col min-h-0">
        <h3 className="text-sm font-semibold mb-4" style={{ color: text }}>
          Traffic trend
        </h3>
        <div className="flex-1 flex items-end gap-1.5 min-h-0">
          {[40, 55, 48, 70, 62, 88, 75, 95, 80, 100, 90, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md"
              style={{
                height: h,
                backgroundColor: i % 3 === 0 ? accent : secondary,
              }}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportsPage({ colors }) {
  const { primary, secondary, text } = colors;

  return (
    <div className="grid grid-cols-3 gap-4 flex-1 content-start">
      {REPORTS.map((report) => (
        <div key={report.title} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
          <div className="w-10 h-10 rounded-lg mb-3" style={{ backgroundColor: secondary }} aria-hidden />
          <h3 className="text-sm font-semibold mb-1" style={{ color: text }}>
            {report.title}
          </h3>
          <p className="text-xs text-gray-400 mb-3">{report.meta}</p>
          <span
            className="inline-block text-[10px] font-semibold text-white px-3 py-1.5 rounded-lg"
            style={{ backgroundColor: primary }}
          >
            Download
          </span>
        </div>
      ))}
    </div>
  );
}

function UsersPage({ colors }) {
  const { primary, secondary, text } = colors;

  return (
    <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col min-h-0">
      <div className="grid grid-cols-[1fr_auto] gap-4 px-4 py-2.5 border-b border-gray-100 text-xs font-semibold text-gray-400 shrink-0">
        <span>Name</span>
        <span>Role</span>
      </div>
      <ul className="flex-1 divide-y divide-gray-100">
        {USERS.map((user) => (
          <li key={user.name} className="grid grid-cols-[1fr_auto] gap-4 items-center px-4 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: primary }} aria-hidden />
              <span className="text-sm font-medium truncate" style={{ color: text }}>
                {user.name}
              </span>
            </div>
            <span
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white shrink-0"
              style={{ backgroundColor: secondary }}
            >
              {user.role}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SettingsPage({ colors }) {
  const { primary, accent, text } = colors;

  return (
    <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
        <h3 className="text-sm font-semibold mb-4" style={{ color: text }}>
          Profile
        </h3>
        <div className="space-y-3">
          {['Display name', 'Email address', 'Company'].map((field) => (
            <div key={field}>
              <div className="text-[10px] text-gray-400 mb-1">{field}</div>
              <div className="h-8 rounded-lg bg-gray-100 border border-gray-200" aria-hidden />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
        <h3 className="text-sm font-semibold mb-4" style={{ color: text }}>
          Notifications
        </h3>
        <ul className="space-y-3">
          {['Email alerts', 'Weekly digest', 'Product updates'].map((item, i) => (
            <li key={item} className="flex items-center justify-between gap-2">
              <span className="text-xs" style={{ color: text }}>
                {item}
              </span>
              <div
                className="w-9 h-5 rounded-full relative shrink-0"
                style={{ backgroundColor: i === 0 ? primary : i === 1 ? accent : '#E5E7EB' }}
                aria-hidden
              >
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-white shadow-sm" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const PAGE_VIEWS = {
  overview: OverviewPage,
  analytics: AnalyticsPage,
  reports: ReportsPage,
  users: UsersPage,
  settings: SettingsPage,
};

export default function DashboardMockup({ colors }) {
  const { primary, secondary, accent, background, text } = colors;
  const [activePage, setActivePage] = useState('overview');
  const ActiveView = PAGE_VIEWS[activePage];

  return (
    <div className="flex h-[560px] text-left select-none" style={{ fontFamily: 'system-ui, sans-serif' }}>
      <aside className="w-[20%] shrink-0 flex flex-col py-5 px-3" style={{ backgroundColor: primary }}>
        <div className="mx-auto w-14 h-9 rounded-lg bg-white shrink-0 mb-5" aria-hidden />

        <nav className="flex flex-col gap-1.5 flex-1" aria-label="Sidebar navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivePage(item.id)}
                className="h-8 rounded-lg w-full px-2.5 text-left text-[10px] font-semibold truncate transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: isActive ? accent : 'rgba(255, 255, 255, 0.3)',
                  color: isActive ? pickReadableText(accent, text, '#FFFFFF') : 'white',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="w-10 h-10 rounded-full mx-auto shrink-0 mt-4" style={{ backgroundColor: accent }} aria-hidden />
      </aside>

      <div className="flex-1 flex flex-col min-w-0" style={{ backgroundColor: background }}>
        <header className="h-14 shrink-0 bg-white border-b border-gray-100 flex items-center justify-between px-5 gap-4">
          <div>
            <div className="text-sm font-bold capitalize" style={{ color: text }}>
              {NAV_ITEMS.find((n) => n.id === activePage)?.label}
            </div>
            <div className="text-[10px] text-gray-400">Dashboard preview — click sidebar to switch pages</div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-9 w-44 max-w-[11rem] rounded-lg bg-gray-100 border border-gray-200/80" aria-hidden />
            <div className="w-9 h-9 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: primary }} aria-hidden />
          </div>
        </header>

        <div className="flex-1 p-5 flex flex-col gap-5 min-h-0 overflow-hidden">
          <ActiveView colors={colors} />
        </div>
      </div>
    </div>
  );
}
