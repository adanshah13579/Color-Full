import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ContrastPairExample from '../components/ContrastPairExample';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

const LAST_MODIFIED = '2026-05-30T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/accessibility-color-contrast-checker',
  title: 'Free Accessibility Color Contrast Checker — WCAG AA & ADA | Theme & Color',
  description:
    'Check if your colors pass WCAG AA and ADA accessibility standards. Free online tool — instant results for text, buttons, and UI components. Used by 1000s of designers.',
  keywords: [
    'accessibility color contrast checker',
    'accessibility colour contrast checker',
    'website accessibility color checker',
    'website color contrast checker',
    'WCAG AA checker',
    'ADA compliance color checker',
    'ADA color contrast checker',
    'WCAG check',
    'text contrast checker',
    'ADA contrast checker',
    'color contrast accessibility checker',
    'accessible colour checker',
    'WCAG contrast',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});

const FAQ = [
  {
    question: 'What is the minimum color contrast ratio for accessibility?',
    answer:
      'WCAG Level AA requires at least 4.5:1 contrast for normal text and 3:1 for large text (18pt regular or 14pt bold) and many UI components. Level AAA is stricter: 7:1 for normal text and 4.5:1 for large text. Always test the exact foreground and background hex values you ship in production.',
  },
  {
    question: 'How do I check if my website colors are ADA compliant?',
    answer:
      'Enter each text-and-background pair into an ADA contrast checker that reports WCAG AA and AAA results. ADA Title III and related guidance reference WCAG 2.1 Level AA for digital experiences, so passing AA for body copy, links, buttons, and form labels is the practical bar most U.S. teams target.',
  },
  {
    question: 'What is the difference between WCAG AA and AAA contrast?',
    answer:
      'AA is the baseline most laws and procurement policies cite: 4.5:1 for normal text, 3:1 for large text. AAA adds roughly 50% more separation (7:1 normal, 4.5:1 large) and is recommended for critical reading tasks but is not always required. Many products aim for AA everywhere and AAA only on hero copy or long articles.',
  },
  {
    question: 'Is there a free color contrast checker tool?',
    answer:
      'Yes. Theme & Color offers a free WCAG contrast checker at /tools/contrast-checker with instant ratio calculation, AA/AAA pass indicators, and support for multiple color groups—no account required.',
  },
  {
    question: 'How do I fix low contrast colors on my website?',
    answer:
      'Darken text, lighten backgrounds, or pick a new accent from your brand ramp. Generate lighter and darker steps with a tint and shade generator, then re-test every state (hover, focus, disabled) in the contrast checker before merging CSS or design tokens.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const MISTAKES = [
  {
    title: 'Light gray text on white',
    body: 'Placeholder and caption styles often default to #9CA3AF on #FFFFFF. That pairing is around 2.8:1—well below the 4.5:1 AA bar for normal text. Bump body gray to #4B5563 or darker for paragraphs users must read.',
    ratio: '2.84:1 vs 7.02:1',
    passes: false,
    badFg: '#9CA3AF',
    badBg: '#FFFFFF',
    goodFg: '#374151',
    goodBg: '#FFFFFF',
  },
  {
    title: 'Yellow text on white',
    body: 'Bright yellow (#FFFF00) on white looks cheerful in mood boards but delivers roughly 1.07:1 contrast. Use yellow as a background or border accent, not as small type on white.',
    ratio: '1.07:1 vs 4.54:1',
    passes: false,
    badFg: '#FFFF00',
    badBg: '#FFFFFF',
    goodFg: '#854D0E',
    goodBg: '#FFFFFF',
  },
  {
    title: 'Dark navy on white',
    body: 'Navy (#000080) on white exceeds AA for normal text and is a dependable choice for headings and links in corporate UI. This is the pattern to emulate when you need saturated brand color without sacrificing readability.',
    ratio: '8.59:1 vs 3.94:1',
    passes: true,
    badFg: '#6495ED',
    badBg: '#FFFFFF',
    goodFg: '#000080',
    goodBg: '#FFFFFF',
  },
  {
    title: 'Dark text on light background',
    body: 'Near-black (#111827) on off-white (#F9FAFB) is the workhorse pairing for articles and dashboards. It passes AA and AAA for normal text, which is why design systems anchor neutrals before adding brand accents.',
    ratio: '16.05:1 vs 2.56:1',
    passes: true,
    badFg: '#D1D5DB',
    badBg: '#F9FAFB',
    goodFg: '#111827',
    goodBg: '#F9FAFB',
  },
  {
    title: 'Pure white on light yellow',
    body: 'White labels on pale yellow cards (#FEF9C3) fail because both colors are high-luminance. Switch to dark amber or brown text, or deepen the yellow background until white type clears 4.5:1.',
    ratio: '1.18:1 vs 5.12:1',
    passes: false,
    badFg: '#FFFFFF',
    badBg: '#FEF9C3',
    goodFg: '#713F12',
    goodBg: '#FEF9C3',
  },
];

export default function AccessibilityColorContrastCheckerPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-indigo-900 via-violet-800 to-emerald-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Free Accessibility Color Contrast Checker — WCAG AA &amp; ADA
            </h1>
            <p className="text-indigo-100 text-lg max-w-3xl leading-relaxed">
              Check if your colors pass WCAG AA and ADA standards in seconds. WCAG 2.2 updates, AA vs AAA tables,
              Section 508 context, and a free tool for text, buttons, and UI—no signup.
            </p>
            <div className="flex items-center gap-4 text-indigo-100 text-sm mt-4">
              <time dateTime="2026-05-30">May 30, 2026</time>
              <span>•</span>
              <span>14 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-purple-600 dark:prose-a:text-purple-400">
            <section className="not-prose mb-10 rounded-2xl border-2 border-indigo-500 bg-gradient-to-br from-indigo-600 via-violet-600 to-emerald-600 p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Quick Contrast Check</h2>
              <p className="text-indigo-100 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
                Landed here to test a color pair? Skip the reading—paste your foreground and background hex values and
                get instant WCAG AA and AAA pass/fail for normal text, large text, and UI components.
              </p>
              <Link
                href="/tools/contrast-checker"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-8 py-4 text-base md:text-lg shadow-lg transition-colors"
              >
                Open free contrast checker
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </section>

            <p className="text-lg leading-relaxed">
              If you design or build interfaces, an <strong>accessibility color contrast checker</strong> is not optional
              decoration—it is how you prove text and controls are readable before users complain or legal risk appears.
              Teams in the UK and EU search for an <strong>accessibility colour contrast checker</strong> or{' '}
              <strong>accessible colour checker</strong> with the same goal: numeric proof that foreground and background
              colors meet WCAG. This guide explains what those tools measure, how ADA expectations map to WCAG 2.1 AA,
              what changed in WCAG 2.2, and how our free <strong>website color contrast checker</strong> fits into a
              modern workflow—without replacing the depth you expect from references like WebAIM or Adobe Color, but going
              further on fix patterns and production checklists.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">What is an Accessibility Color Contrast Checker?</h2>
            <p>
              A <strong>color contrast accessibility checker</strong> compares two colors—usually text and its
              background—and calculates a contrast ratio from 1:1 (no difference) to 21:1 (maximum). It then maps that
              number to WCAG Level AA and AAA success criteria so you know whether a pairing is safe for normal or large
              text. Unlike guessing in Figma or eyeballing a monitor, a dedicated <strong>text contrast checker</strong>{' '}
              uses the same relative luminance formula browsers and auditors reference, which keeps design, development,
              and QA aligned.
            </p>
            <p>
              Designers need checkers when exploring brand palettes, defining semantic tokens (primary, muted, danger),
              or handing off marketing landing pages with custom gradients. Developers need them when implementing dark
              mode, theme switches, or CMS-driven backgrounds where authors can pick colors. Product and compliance teams
              need audit trails showing which hex pairs passed at ship time. A single{' '}
              <strong>ADA contrast checker</strong> session before release prevents expensive rework when accessibility
              reviews flag gray placeholder text, low-contrast links, or icon-only buttons that fail non-text contrast
              guidance.
            </p>
            <p>
              Good tools also support more than one pair at a time: navigation on a header band, body copy on white,
              destructive buttons on tinted reds, and chart labels on colored series. That mirrors how real sites fail—not
              from one hero headline, but from dozens of small combinations nobody documented.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">WCAG AA vs AAA — What is the Difference?</h2>
            <p>
              WCAG publishes two contrast tiers inside each version. Level AA is the minimum most laws and procurement
              policies cite; Level AAA is an enhanced bar recommended when readability is critical. A reliable{' '}
              <strong>WCAG AA checker</strong> reports both so you can aim for AA everywhere and reserve AAA for long
              reading surfaces, patient portals, or public-sector content without guessing which column matters for
              compliance.
            </p>
            <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800 text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    <th className="px-4 py-3 font-semibold">Level</th>
                    <th className="px-4 py-3 font-semibold">What it means</th>
                    <th className="px-4 py-3 font-semibold">Normal text ratio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">AA</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      Minimum standard, required by most accessibility laws
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">4.5:1 ratio</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">AAA</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      Enhanced standard, recommended for body text
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">7:1 ratio</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Large text follows different thresholds: AA allows 3:1 and AAA allows 4.5:1 when type is at least 18pt
              regular or 14pt bold. Many product teams pass AA on buttons and navigation, then push article body copy toward
              AAA when stakeholders expect magazine-quality readability. Run a full <strong>WCAG check</strong> on every
              semantic token—primary, muted, danger, success—because a palette that passes on white often fails on tinted
              cards or dark mode surfaces.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">WCAG Contrast Requirements Explained</h2>
            <p>
              Web Content Accessibility Guidelines (WCAG) 2.x define contrast using relative luminance, not hue names. That
              means two blues can behave differently if one is lighter, and a “brand red” button can fail while a neutral
              gray passes. Success Criteria 1.4.3 (Contrast Minimum) sets the AA bar most teams must hit; 1.4.6 (Enhanced
              Contrast) defines stricter AAA thresholds for organizations that commit to them.
            </p>
            <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800 text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    <th className="px-4 py-3 font-semibold">Content type</th>
                    <th className="px-4 py-3 font-semibold">WCAG AA</th>
                    <th className="px-4 py-3 font-semibold">WCAG AAA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">Normal text</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">4.5:1 minimum</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">7:1 minimum</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                      Large text (18px+ or 14px+ bold)
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">3:1 minimum</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">4.5:1 minimum</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">UI components and graphics</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">3:1 minimum (non-text contrast)</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Stricter AAA where applicable</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              “Large text” is not subjective: WCAG specifies 18 point regular or 14 point bold (roughly 24px / 18.67px
              CSS when using px). Headlines often clear the large-text threshold, which is why marketing sites sometimes
              pass with 3:1 orange on white while body copy at the same hue would fail. UI components and graphics fall
              under related guidance (including 1.4.11 Non-text Contrast in WCAG 2.1): icons, chart slices, and focus
              rings need at least 3:1 against adjacent colors so users who cannot perceive hue differences still see
              boundaries.
            </p>
            <p>
              Document which level you target per component: AA for general product UI, AAA for long-form reading or
              public-sector sites. When stakeholders ask for pastel aesthetics, show the ratio numbers—design trade-offs
              become concrete instead of ideological.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">ADA Compliance Color Requirements</h2>
            <p>
              The Americans with Disabilities Act (ADA) does not list hex codes in statute; courts and federal guidance
              increasingly treat WCAG 2.1 Level AA as the measurable standard for public-facing websites and many mobile
              experiences. That means your <strong>ADA color contrast checker</strong> workflow is really a WCAG workflow
              with legal documentation: store the ratio, the level claimed (AA or AAA), and the component (e.g., footer
              link on #F3F4F6). For U.S. federal agencies and contractors, Section 508 of the Rehabilitation Act requires
              accessible electronic and information technology; the current Section 508 refresh maps to WCAG 2.0 Level
              AA, while many agencies voluntarily align procurement and internal QA to WCAG 2.1 AA—the same ratios your
              <strong>ADA compliance color checker</strong> already tests.
            </p>
            <p>
              In practice, Section 508 and ADA Title III digital cases converge on the same numeric bar for color: 4.5:1
              for normal text, 3:1 for large text and many non-text UI boundaries at Level AA. Document each passing pair
              in release notes or design-system changelogs so legal and product teams share one source of truth. When an
              auditor asks whether a checkout label is compliant, you should be able to point to a dated{' '}
              <strong>WCAG check</strong> result, not a designer&apos;s subjective “it looks fine.”
            </p>
            <p>
              ADA compliance is broader than contrast—keyboard access, forms, media alternatives—but color remains the
              most common visual failure in third-party audits. A plaintiff or regulator does not need to prove you
              ignored the entire specification; repeated failures on contact links, cookie banners, and checkout labels
              are enough to create exposure. Testing early with an accessibility color contrast checker reduces that
              surface area and demonstrates good-faith remediation if issues are found later.
            </p>
            <p>
              International teams should note: EN 301 549 in Europe also points to WCAG. Whether your copy says ADA, EAA,
              or AODA, the numeric ratios you test are largely the same at AA level—only documentation and scope differ.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">WCAG 2.2 Color Contrast Updates</h2>
            <p>
              WCAG 2.2 (published October 2023) did not change the core text contrast math from 2.1—AA still requires
              4.5:1 for normal text and 7:1 for AAA—but it tightened expectations around focus and visibility in ways
              that affect color workflows. Success Criterion 2.4.11 (Focus Not Obscured, Minimum) and related focus
              guidance mean focus indicators must remain visible and meet contrast against adjacent colors; a keyboard
              user who cannot see which button is active has the same practical problem as low-contrast body copy. Teams
              upgrading from a 2.1-only checklist should re-test focus rings, sticky headers that cover focused controls,
              and custom component outlines with the same rigor they apply to paragraph text.
            </p>
            <p>
              WCAG 2.2 also adds criteria for dragging movements and target size that sit beside contrast work in design
              QA. When you run a <strong>WCAG AA checker</strong>, include focus, hover, and disabled states in the same
              session as default text—those states ship to production and are increasingly scrutinized in audits written
              against 2.2-aware playbooks even when the underlying ratio table is unchanged.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Free Tools to Check Color Contrast</h2>
            <p>
              You do not need desktop software to validate a landing page or design-system token set. Theme &amp; Color
              hosts a free, browser-based{' '}
              <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink> that works as a{' '}
              <strong>website color contrast checker</strong> for real hex pairs: enter foreground and background values,
              toggle normal vs large text, and see AA and AAA columns update instantly. It supports multiple color groups
              so you can test navigation on a header band, body copy on white, and destructive buttons on tinted reds in
              one sitting—mirroring how sites actually fail, not just a single hero headline.
            </p>
            <p>
              Use it as your default <strong>WCAG AA checker</strong> during design critique, before merging CSS variables,
              and when authors pick CMS-driven backgrounds. Pair results with our{' '}
              <InlineTagLink href="/tools/tint-shade-generator">tint and shade generator</InlineTagLink> when you need to
              darken text or lighten surfaces without abandoning brand hue. No account, no export limits—paste, check, and
              ship. Thousands of designers and developers use it weekly for the same reason you opened this article: fast,
              defensible numbers before code review or legal review.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">How to Use Our Free Contrast Checker</h2>
            <p>
              Theme &amp; Color&apos;s{' '}
              <InlineTagLink href="/tools/contrast-checker">free WCAG contrast checker</InlineTagLink> runs in the
              browser with no login. Use it as your default <strong>text contrast checker</strong> during design critique
              and before merging CSS variables.
            </p>
            <ol className="list-decimal list-inside space-y-3 not-prose text-gray-700 dark:text-gray-300 mb-6">
              <li className="pl-1">
                Open the{' '}
                <Link href="/tools/contrast-checker" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                  contrast checker tool
                </Link>{' '}
                and add a color group for each surface type (page body, card, header, button).
              </li>
              <li className="pl-1">Enter foreground hex values for text, links, and icons; enter background hex for each surface.</li>
              <li className="pl-1">
                Toggle normal vs large text size to see AA and AAA columns update—large headlines may pass at 3:1 while
                captions need 4.5:1.
              </li>
              <li className="pl-1">Review the matrix of combinations when multiple colors are in a group; fix any cell that fails AA.</li>
              <li className="pl-1">
                Export decisions to your design system: name tokens (<code className="text-sm">text-primary</code>,{' '}
                <code className="text-sm">surface-muted</code>) and attach the passing ratio in documentation.
              </li>
              <li className="pl-1">Re-test hover, focus, and disabled states—users interact with those colors, not just defaults.</li>
            </ol>
            <p>
              Compared with checking one swatch at a time in a desktop app, a{' '}
              <strong>website accessibility color checker</strong> built for the web keeps parity with what CSS actually
              renders, especially when overlays, transparency, and dark mode alter effective backgrounds.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Common Color Contrast Mistakes</h2>
            <p>
              These five patterns appear in almost every failed audit. Each example shows a weak pairing beside a stronger
              fix with real hex codes—verify final values in the tool because gamma and font weight can shift perceived
              contrast slightly.
            </p>
            <ul className="not-prose space-y-4 list-none p-0 my-6">
              {MISTAKES.map((m) => (
                <ContrastPairExample key={m.title} {...m} />
              ))}
            </ul>
            <p>
              Notice a theme: failures cluster around “soft” neutrals and high-luminance accents. Passes cluster around
              deliberate dark-on-light neutrals or saturated dark hues on white. Brand teams can keep warmth by shifting
              yellow and pink into backgrounds while keeping type in brown or navy families.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">How to Fix Low Color Contrast</h2>
            <p>
              When a pair fails, adjust luminance before hue. Darkening text one or two steps on your ramp often fixes
              body copy without changing brand recognition. Lightening backgrounds (or moving from pure white to a tinted
              surface) can preserve colorful text that would fail on #FFFFFF. For buttons, increase border contrast or add
              a solid fill rather than ghost-outline styles that dip below 3:1.
            </p>
            <p>
              Systematic fixes scale better than one-off tweaks. Generate ten lighter tints and ten darker shades from your
              primary brand hex with our{' '}
              <InlineTagLink href="/tools/tint-shade-generator">tint and shade generator</InlineTagLink>, assign semantic
              names, then sweep the ramp in the{' '}
              <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>. Lock the lowest step that
              still passes for text, and the highest step safe for backgrounds. Document forbidden pairs (e.g., “never
              use accent-200 for captions on white”) in your design system README.
            </p>
            <p>
              For dark mode, rebuild the table—colors that pass on white often fail on #121212. Treat dark theme as a
              second product surface, not an inverted filter. Test placeholders, disabled inputs, and success/error
              banners; they carry legal weight in forms and checkout.
            </p>
            <p>
              When marketing supplies photography-heavy heroes, add scrims or solid chips behind type instead of relying on
              text-shadow alone. Shadows do not satisfy WCAG contrast math. If video or imagery must stay untouched, move
              copy to a solid card with tested colors.
            </p>
            <p>
              Finally, bake checking into process: design review checklist, PR template for UI engineers, and regression
              snapshots for token changes. Tools like Adobe Color and WebAIM Contrast Checker are excellent references;
              Theme &amp; Color adds multi-color groups, combo testing with your palette generator, and articles that tie
              ratios to ADA and WCAG language so non-specialists can follow along.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Beyond Ratios: What Else to Test</h2>
            <p>
              Contrast checkers do not replace manual keyboard testing or screen reader review, but they eliminate the
              most frequent visual defect class. Also verify link distinction (underline or 3:1 non-color cue), focus
              visibility, and that status is not conveyed by color alone. Pair quantitative checks with real-user feedback
              when possible—especially for dyslexia-friendly typefaces and spacing, which contrast math does not measure.
            </p>
            <p>
              For component libraries, export passing pairs as design tokens and Storybook stories labeled with their ratio.
              Engineers then import the same hex values, and QA can spot drift when someone overrides CSS with a lighter
              gray “just for this page.”
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">FAQ</h2>
            <div className="not-prose space-y-6">
              {FAQ.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>

            <section className="not-prose my-12 rounded-2xl border-2 border-emerald-500/80 bg-gradient-to-br from-emerald-50 to-indigo-50 dark:from-emerald-950/40 dark:to-indigo-950/40 p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Ready to validate your palette?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto">
                Paste your brand colors, test every text and background pair, and ship with confidence.
              </p>
              <Link
                href="/tools/contrast-checker"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 text-base shadow-md transition-colors"
              >
                Check your colors now — free WCAG contrast checker
              </Link>
            </section>
          </div>
        </div>
      </section>
    </article>
  );
}
