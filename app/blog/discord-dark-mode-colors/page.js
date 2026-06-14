import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import {
  PaletteQuickAnswer,
  PaletteUiUsageSection,
} from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';

const LAST_MODIFIED = '2026-06-15T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/discord-dark-mode-colors',
  title: 'Discord Dark Mode Hex Code #313338 — All UI Colors (Copy)',
  description:
    'Discord dark mode hex code: background #313338, sidebar #2B2D31, darkest #1E1F22, text #DBDEE1. Copy every Discord dark theme color instantly.',
  keywords: [
    'discord dark mode color',
    'discord dark mode hex code',
    'discord dark theme hex',
    'discord background color',
    'discord dark mode palette',
    'discord UI colors',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-06-05T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Discord Dark Mode Hex Code #313338 — All UI Colors (Copy)',
  'Discord dark mode hex code: background #313338, sidebar #2B2D31, darkest #1E1F22, text #DBDEE1. Copy every Discord dark theme color instantly.',
  'discord-dark-mode-colors',
  getBlogArticleDatePublished('discord-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);


const QUICK_ROWS = [
  { label: 'Main background', value: '#313338' },
  { label: 'Darker background', value: '#2B2D31' },
  { label: 'Darkest background', value: '#1E1F22' },
  { label: 'Sidebar', value: '#2B2D31' },
  { label: 'Text primary', value: '#DBDEE1' },
  { label: 'Text secondary', value: '#B5BAC1' },
];

const FULL_DISCORD_COLORS = [
  { name: 'Darkest (app frame)', hex: '#111214', role: 'Outermost shell, title bar feel' },
  { name: 'Darker background', hex: '#1E1F22', role: 'Deep panels, modals backdrop' },
  { name: 'Sidebar / secondary bg', hex: '#2B2D31', role: 'Channel list, server rail' },
  { name: 'Main background', hex: '#313338', role: 'Primary chat canvas' },
  { name: 'Elevated surface', hex: '#383A40', role: 'Input bars, hover cards' },
  { name: 'Border / divider', hex: '#3F4147', role: 'Separators between panels' },
  { name: 'Text secondary', hex: '#B5BAC1', role: 'Timestamps, metadata, placeholders' },
  { name: 'Text primary', hex: '#DBDEE1', role: 'Messages, channel names' },
  { name: 'Text header', hex: '#F2F3F5', role: 'Server titles, strong labels' },
  { name: 'Blurple accent', hex: '#5865F2', role: 'Links, primary buttons, brand' },
  { name: 'Blurple hover', hex: '#4752C4', role: 'Pressed / hover on accent' },
  { name: 'Online green', hex: '#23A559', role: 'Status indicators' },
  { name: 'Idle yellow', hex: '#F0B232', role: 'Status indicators' },
  { name: 'DND red', hex: '#F23F43', role: 'Status indicators' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#313338', colorName: 'Main bg', rgbCode: 'rgb(49, 51, 56)' },
  { hexCode: '#2B2D31', colorName: 'Sidebar', rgbCode: 'rgb(43, 45, 49)' },
  { hexCode: '#1E1F22', colorName: 'Darker', rgbCode: 'rgb(30, 31, 34)' },
  { hexCode: '#DBDEE1', colorName: 'Text', rgbCode: 'rgb(219, 222, 225)' },
  { hexCode: '#5865F2', colorName: 'Blurple', rgbCode: 'rgb(88, 101, 242)' },
];

const UI_INSPIRATION_PALETTES = [
  {
    title: 'Discord-style chat app',
    body: 'Mirror Discord layer logic: #111214 frame, #2B2D31 sidebar, #313338 message well, #383A40 composer, #5865F2 send button.',
    swatches: ['#111214', '#2B2D31', '#313338', '#383A40', '#5865F2'],
  },
  {
    title: 'Discord + custom brand accent',
    body: 'Keep Discord neutrals for structure; swap blurple for your brand indigo (#6366F1) or teal (#14B8A6) on primary actions only.',
    swatches: ['#313338', '#2B2D31', '#DBDEE1', '#6366F1', '#B5BAC1'],
  },
  {
    title: 'Discord-inspired dashboard',
    body: 'Use #1E1F22 for nav, #313338 cards, #B5BAC1 chart labels, #23A559 success and #F23F43 alert—status colors borrowed from Discord semantics.',
    swatches: ['#1E1F22', '#313338', '#B5BAC1', '#23A559', '#F23F43'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Discord dark mode background color hex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Discord main chat background is #313338. Sidebar and darker panels use #2B2D31. Deepest surfaces use #1E1F22 and #111214. Primary text is #DBDEE1.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Discord dark mode hex code for text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Primary message text is #DBDEE1. Secondary metadata and timestamps use #B5BAC1. Strong headers can use #F2F3F5 on dark backgrounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Discord blurple hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Discord brand accent blurple is #5865F2 with hover/pressed #4752C4. Use it sparingly for links and primary buttons against #313338 backgrounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Discord colors in my app design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Discord hex values are widely referenced for dark UI inspiration. For commercial products, treat them as a starting point—define your own tokens and verify WCAG contrast rather than copying the brand wholesale.',
      },
    },
  ],
};

function DiscordFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full Discord Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Complete Discord dark theme hex list—backgrounds, text, borders, blurple accent, and status colors.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Swatch</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Token</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">Usage</th>
            </tr>
          </thead>
          <tbody>
            {FULL_DISCORD_COLORS.map((row) => (
              <tr key={row.hex} className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
                <td className="px-4 py-3 sm:px-5 w-16">
                  <div
                    className="h-10 w-14 rounded-md border border-gray-200 dark:border-gray-600 shadow-inner"
                    style={{ backgroundColor: row.hex }}
                    aria-hidden
                  />
                </td>
                <td className="px-4 py-3 sm:px-5 font-medium text-gray-900 dark:text-white">{row.name}</td>
                <td className="px-4 py-3 sm:px-5 font-mono text-gray-800 dark:text-gray-200">{row.hex}</td>
                <td className="px-4 py-3 sm:px-5 text-gray-600 dark:text-gray-400 hidden sm:table-cell">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InspirationCard({ palette }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{palette.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{palette.body}</p>
      <div className="flex gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 h-10">
        {palette.swatches.map((hex) => (
          <div key={hex} className="flex-1 min-w-0" style={{ backgroundColor: hex }} title={hex} aria-hidden />
        ))}
      </div>
    </li>
  );
}

export default function DiscordDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="discord-dark-mode-colors" />
        </div>
      </div>



      <section className="bg-gradient-to-br from-[#111214] via-[#1E1F22] to-[#5865F2] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Discord Dark Mode Colors: Every Hex Code (Background, Chat &amp; UI)
            </h1>
            <p className="text-indigo-100/95 text-lg max-w-3xl mb-6">
              Copy Discord dark mode hex codes—background <strong className="text-white font-semibold">#313338</strong>, sidebar{' '}
              <strong className="text-white font-semibold">#2B2D31</strong>, text <strong className="text-white font-semibold">#DBDEE1</strong>, and blurple accent{' '}
              <strong className="text-white font-semibold">#5865F2</strong>—for UI inspiration and dark theme tokens.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#313338]"
              role="img"
              aria-label="Discord dark mode main background color 313338"
            />
            <div className="flex items-center gap-4 text-indigo-200/90 text-sm">
              <time dateTime="2026-06-11">Updated June 11, 2026</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <PaletteQuickAnswer
                  theme="navy"
                  ariaLabel="Discord dark mode quick copy colors"
                  headline="Discord Dark Mode — Quick Copy"
                  subtext="Main backgrounds and text tokens from Discord dark theme. Click Copy on any row."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                    What is the Hex Code for Discord Dark Mode?
                  </h2>
                  <p className="mb-6">
                    The main Discord dark mode background is <strong className="text-gray-900 dark:text-white">#313338</strong>. That is the hex code most people need first—the warm gray-violet you see behind chat messages. Sidebar panels use <strong className="text-gray-900 dark:text-white">#2B2D31</strong>; deepest surfaces use <strong className="text-gray-900 dark:text-white">#1E1F22</strong>. Primary text is <strong className="text-gray-900 dark:text-white">#DBDEE1</strong>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Discord Dark Mode Background Color Hex Code
                  </h2>
                  <p className="mb-4">
                    Discord layers three background hex codes so panels read clearly without heavy shadows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li className="pl-1">
                      <strong className="text-gray-900 dark:text-white">#313338</strong> — main chat canvas and message area
                    </li>
                    <li className="pl-1">
                      <strong className="text-gray-900 dark:text-white">#2B2D31</strong> — sidebar, channel list, and server rail
                    </li>
                    <li className="pl-1">
                      <strong className="text-gray-900 dark:text-white">#1E1F22</strong> — darkest panels, modals, and deep wells
                    </li>
                  </ul>
                  <p className="mb-6">
                    Elevated surfaces such as the message composer use <strong className="text-gray-900 dark:text-white">#383A40</strong>; dividers use <strong className="text-gray-900 dark:text-white">#3F4147</strong>. Copy any value from the quick-answer box above or the full table below.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    What Color is Discord Dark Mode?
                  </h2>
                  <p className="mb-6">
                    Discord dark mode uses a <strong className="text-gray-900 dark:text-white">dark gray (#313338)</strong>, not pure black. Pure #000000 would crush shadow depth and increase eye strain on long sessions; Discord&apos;s warm gray-violet keeps OLED-friendly contrast while letting borders (#3F4147) and hover cards (#383A40) stay visible with only a few percent luminance difference between layers.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Discord Dark Mode Hex Code for Mobile
                  </h2>
                  <p className="mb-6">
                    The same colors apply on mobile Discord. iOS and Android apps use the identical dark theme tokens: background <strong className="text-gray-900 dark:text-white">#313338</strong>, darker panels <strong className="text-gray-900 dark:text-white">#2B2D31</strong>, deepest surfaces <strong className="text-gray-900 dark:text-white">#1E1F22</strong>, and text <strong className="text-gray-900 dark:text-white">#DBDEE1</strong>. If you are building a mobile chat UI inspired by Discord, paste these hex codes into your React Native, Flutter, or Swift theme file—no separate mobile palette required.
                  </p>
                </div>

                <DiscordFullTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    How to Use Discord Colors in Your Design
                  </h2>
                  <p className="mb-4">
                    Treat Discord hex codes as a reference architecture, not a brand kit. Map their roles to your tokens: <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-canvas</code> = #313338,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-surface-raised</code> = #383A40,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-text-primary</code> = #DBDEE1. Swap blurple (#5865F2) for your product accent while keeping neutral separation logic intact.
                  </p>
                  <p className="mb-6">
                    Always run text pairs through a{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>: #B5BAC1 secondary text on #313338 passes for large labels but may fail for 14px body copy depending on font weight. Bump to #DBDEE1 or #F2F3F5 when audit tools flag failures. For neutral anchors beyond Discord&apos;s warm gray, see our{' '}
                    <InlineTagLink href="/blog/charcoal-hex-code">charcoal color code</InlineTagLink> reference and broader{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <div className="not-prose">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Discord Color Palette for UI Inspiration</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Three ways to adapt Discord dark mode colors for chat apps, dashboards, and community products—without cloning the brand wholesale.
                  </p>
                  <ul className="space-y-4">
                    {UI_INSPIRATION_PALETTES.map((palette) => (
                      <InspirationCard key={palette.title} palette={palette} />
                    ))}
                  </ul>
                </div>

                <PaletteUiUsageSection title="Why Discord Dark Mode Works">
                  <p>
                    Discord optimizes for long sessions: low-saturation grays reduce eye strain, blurple accents appear only on interactive elements, and status colors (green #23A559, yellow #F0B232, red #F23F43) carry semantic meaning without polluting every surface. Community apps, dev tools, and gaming hubs borrow this pattern because users already understand the visual hierarchy.
                  </p>
                  <p>
                    For broader dark UI theory—including Material #121212 and accessible token naming—see our{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette guide</InlineTagLink>.
                  </p>
                </PaletteUiUsageSection>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose mb-8">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <section className="not-prose">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build your own dark palette</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-5">
                        Start from Discord neutrals or generate a custom dark theme with harmonized accents.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          href="/tools/palette-generator"
                          className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-blue-400 hover:bg-white hover:text-blue-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-blue-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
                        >
                          Color Palette Generator
                        </Link>
                        <Link
                          href="/blog/dark-mode-color-palette"
                          className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-indigo-400 hover:bg-white hover:text-indigo-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-indigo-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
                        >
                          Dark Mode Color Palette Guide
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Discord dark (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Discord dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
