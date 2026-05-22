import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/blog/60-30-10-color-rule',
  title: 'The 60-30-10 Color Rule: How to Use It for Web & Brand Design',
  description:
    'The 60-30-10 rule makes color easy: 60% dominant, 30% secondary, 10% accent. Learn how to apply it to websites and brands with real hex code examples.',
  keywords: ['60-30-10 rule', 'color palette', 'web design', 'branding', 'hex codes', 'Theme & Color'],
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the 60-30-10 color rule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 60-30-10 rule allocates about 60% of a layout to one dominant color, 30% to a secondary color, and 10% to an accent. It keeps interfaces and brand applications balanced so no single hue fights for attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the 60, 30, and 10 percentages need to be exact?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No—they are guidelines. What matters is proportion: most of the surface reads as the dominant color, a clear secondary layer supports structure, and accents appear rarely enough to signal importance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use more than one accent color?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can, but treat additional accents as part of the 10% budget or split accents into 5% each. Too many saturated accents at 10% each stops reading as a hierarchy and becomes visual noise.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does 60-30-10 relate to accessibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The rule organizes hue distribution; it does not guarantee WCAG contrast. Always verify text, links, and controls on your dominant and accent colors with a contrast checker, especially for the 10% accent.',
      },
    },
  ],
};

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function readableTextOnHex(hex) {
  const { r, g, b } = hexToRgb(hex);
  const [rn, gn, bn] = [r, g, b].map((v) => {
    const n = v / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  });
  const lum = 0.2126 * rn + 0.7152 * gn + 0.0722 * bn;
  return lum > 0.45 ? '#111827' : '#ffffff';
}

function RatioBar({ segments, heightClass = 'h-16' }) {
  return (
    <div
      className={`not-prose blog-ratio-bar flex w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 dark:border-gray-600 shadow-md ${heightClass}`}
      role="img"
      aria-label="60-30-10 color proportion diagram"
    >
      {segments.map((s) => {
        const labelColor = readableTextOnHex(s.hex);
        const shadow = labelColor === '#ffffff' ? '0 1px 2px rgba(0,0,0,0.35)' : 'none';
        return (
          <div
            key={s.label}
            className="flex min-w-0 flex-col items-center justify-center px-1 text-center sm:px-2"
            style={{ width: s.pct, backgroundColor: s.hex }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-wide sm:text-xs"
              style={{ color: labelColor, textShadow: shadow }}
            >
              {s.label}
            </span>
            <span
              className="hidden font-mono text-[10px] sm:inline sm:text-xs"
              style={{ color: labelColor, opacity: 0.92, textShadow: shadow }}
            >
              {s.hex}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SwatchLabels({ hex, topLabel, bottomLabel }) {
  const color = readableTextOnHex(hex);
  const shadow = color === '#ffffff' ? '0 1px 2px rgba(0,0,0,0.35)' : 'none';
  const labelStyle = { color, textShadow: shadow };
  return (
    <>
      <span className="text-[10px] font-semibold" style={labelStyle}>
        {topLabel}
      </span>
      <span className="font-mono text-[10px]" style={{ ...labelStyle, opacity: 0.92 }}>
        {bottomLabel}
      </span>
    </>
  );
}

function PaletteExampleCard({ title, body, dominant, secondary, accent, dLabel, sLabel, aLabel }) {
  return (
    <li className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{body}</p>
      <div className="blog-ratio-bar grid h-20 w-full grid-cols-[6fr_3fr_1fr] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600">
        <div className="flex min-w-0 flex-col items-center justify-end pb-2" style={{ backgroundColor: dominant.hex }}>
          <SwatchLabels hex={dominant.hex} topLabel={dLabel} bottomLabel={dominant.hex} />
        </div>
        <div className="flex min-w-0 flex-col items-center justify-end pb-2" style={{ backgroundColor: secondary.hex }}>
          <SwatchLabels hex={secondary.hex} topLabel={sLabel} bottomLabel={secondary.hex} />
        </div>
        <div className="flex min-w-0 flex-col items-center justify-end pb-2" style={{ backgroundColor: accent.hex }}>
          <SwatchLabels hex={accent.hex} topLabel={aLabel} bottomLabel={accent.hex} />
        </div>
      </div>
    </li>
  );
}

export default function SixtyThirtyTenColorRulePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-indigo-900 via-violet-900 to-slate-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-violet-200 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              The 60-30-10 Color Rule: How to Use It for Web & Brand Design
            </h1>
            <p className="text-violet-100/95 text-lg max-w-3xl mb-8">
              Split every screen and brand touchpoint into three roles—dominant, secondary, accent—so color hierarchy stays obvious and your palette scales from
              marketing to product without chaos.
            </p>
            <div className="not-prose">
              <RatioBar
                segments={[
                  { pct: '60%', hex: '#F5F5F5', label: '60%' },
                  { pct: '30%', hex: '#1E3A8A', label: '30%' },
                  { pct: '10%', hex: '#FFD700', label: '10%' },
                ]}
                heightClass="h-20 md:h-24"
              />
            </div>
            <p className="mt-3 text-sm text-violet-200/90 max-w-2xl">
              Example strip: <span className="font-mono">#F5F5F5</span> (dominant) · <span className="font-mono">#1E3A8A</span> (secondary) ·{' '}
              <span className="font-mono">#FFD700</span> (accent).
            </p>
            <div className="flex items-center gap-4 text-violet-200/90 text-sm mt-8">
              <time dateTime="2026-05-13">May 13, 2026</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-white">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4 not-prose">What is the 60-30-10 Rule?</h2>
            <p className="mb-4">
              The <strong>60-30-10 rule</strong> is a simple proportion recipe for color: about <strong>60%</strong> of what people see should read as one{' '}
              <em>dominant</em> color (usually your lightest neutral or main brand field), <strong>30%</strong> as a <em>secondary</em> color that structures
              navigation, sidebars, cards, or typography blocks, and <strong>10%</strong> as <em>accent</em> for the few things that must pop—primary buttons,
              active states, badges, and key illustrations. It is not a law of physics; it is a guardrail against the most common failure mode in both web UI and
              print branding, which is “everything is equally loud.”
            </p>
            <p className="mb-6">
              The strip below repeats the idea with the same professional hex trio you will see again in the examples section:{' '}
              <strong className="text-gray-900 dark:text-white">#F5F5F5</strong> covers most canvas area, <strong className="text-gray-900 dark:text-white">#1E3A8A</strong> carries headers and component chrome, and{' '}
              <strong className="text-gray-900 dark:text-white">#FFD700</strong> appears only where you want a single unmistakable focal point. On a real page, the
              60% is not always “one giant rectangle”—it is the cumulative area of backgrounds, whitespace tinted toward that hue, and large photography graded to
              feel neutral against it.
            </p>
            <div className="not-prose mb-8">
              <RatioBar
                segments={[
                  { pct: '60%', hex: '#F5F5F5', label: 'Dominant' },
                  { pct: '30%', hex: '#1E3A8A', label: 'Secondary' },
                  { pct: '10%', hex: '#FFD700', label: 'Accent' },
                ]}
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 not-prose">Why It Works</h2>
            <p className="mb-4">
              Human vision settles on <em>luminance patterns</em> before it parses hue. When roughly six-tenths of a layout shares a similar lightness and low
              chroma, the eye treats it as “ground,” freeing attention for the third of the layout that introduces a second family—slightly darker, more saturated,
              or cooler—and for the small accent sliver that carries the highest chroma. That sequence matches how we scan: background first, structure second,
              action last. Color theory calls this <em>simultaneous contrast</em>: a small saturated patch looks more intense against a calm field than it does when
              surrounded by competing brights.
            </p>
            <p className="mb-6">
              The rule also mirrors how brands behave in the wild: packaging might whisper with kraft or white (dominant), repeat a signature blue on every panel
              (secondary), and reserve metallic gold or neon for the logo lockup (accent). On the web, the same logic prevents marketing from shipping rainbow
              landing pages while product ships monochrome dashboards—if both follow 60-30-10 with the same three hex roles, the brand feels coherent even when
              layout density differs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 not-prose">How to Apply It to a Website</h2>
            <p className="mb-4">
              Start by assigning <strong>one hex to the 60% role</strong> for your default light theme. For a corporate marketing site, that is often{' '}
              <strong className="text-gray-900 dark:text-white">#F5F5F5</strong> (light gray) on the outer canvas plus white <strong className="text-gray-900 dark:text-white">#FFFFFF</strong> inside content wells—count both toward
              “dominant neutrals” so photography and copy breathe. Next, map <strong>30%</strong> to structure: here <strong className="text-gray-900 dark:text-white">#1E3A8A</strong> (navy) for the sticky header, footer band, icon
              strokes, and heading text on pale backgrounds. Finally, lock <strong>10%</strong> to <strong className="text-gray-900 dark:text-white">#FFD700</strong> (gold) for the single primary CTA per viewport, active tab
              indicators, and maybe one chart series—never for long paragraphs of body copy.
            </p>
            <ol className="mb-6 list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300 not-prose text-base">
              <li>
                <strong className="text-gray-900 dark:text-white">Audit area.</strong> Sketch or screenshot your homepage and estimate cumulative fill: hero,
                backgrounds, and white cards usually land near 60% neutrals.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Merge similar hues.</strong> Two grays that read as “off-white” should share one token so you do
                not accidentally spend 40% on near-duplicates.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Route components to roles.</strong> Navigation, H2 blocks, and secondary buttons consume the 30%
                navy; destructive actions stay out of the gold accent unless brand intentionally conflates them.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Accent budget.</strong> If marketing adds a second “accent” for a campaign, temporarily demote
                gold to 5% and treat campaign color as the other 5%—still roughly 10% total chroma budget.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Verify readability.</strong> Gold fills behind small labels often fail contrast; pair gold with{' '}
                <strong className="text-gray-900 dark:text-white">#1E293B</strong> text or add an outline. Run final pairs through our{' '}
                <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> so your 10% accent stays legible for every state, including hover and
                focus rings.
              </li>
            </ol>
            <p className="mb-6">
              In CSS terms, you might expose <code className="rounded px-1 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">--color-dominant</code>,{' '}
              <code className="rounded px-1 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">--color-secondary</code>, and <code className="rounded px-1 py-0.5 text-sm font-mono bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100">--color-accent</code> with those hex values, then
              forbid components from introducing a fourth saturated family without a design review. That is how a proportion rule becomes an engineering contract.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 not-prose">How to Apply It to a Brand</h2>
            <p className="mb-4">
              Brand guidelines should name the three roles explicitly, not only “primary / secondary.” Dominant might be paper white and warm gray in print;
              secondary might be your wordmark blue across uniforms, slide decks, and app chrome; accent might be foil gold or a neon reserved for packaging
              stickers. The percentages shift medium by medium—an Instagram story might show 80% photography—but the <em>rank order</em> stays: one calm field, one
              structural brand color, one spark.
            </p>
            <p className="mb-4">
              When agencies hand off fifteen hex codes “for flexibility,” product teams improvise. Collapse those into three parents plus neutrals, then derive
              tints algorithmically for hover states. If leadership insists on a rainbow sub-brand, quarantine it inside illustrations or seasonal packaging so the
              digital core still reads 60-30-10. Consistency beats novelty for recognition; novelty belongs in the 10% lane or outside the system entirely.
            </p>
            <p className="mb-6">
              On pitch decks, enforce the same ratio: title slides can be 60% white, 30% brand navy in typography and shapes, 10% gold rule lines. Inside spreads,
              photography may temporarily dominate—treat the photo as part of the 60% neutral story if it is desaturated, or as a planned “accent excursion” if it is
              vivid, then return to the triad on the next page so the deck still feels like one system. Voice-and-tone documents rarely mention color; adding a
              single page that maps copy intensity to color roles closes the gap between writers and designers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 not-prose">3 Example Palettes Using 60-30-10</h2>
            <p className="mb-6 not-prose text-gray-700 dark:text-gray-300">
              Each card shows proportional swatches (60 / 30 / 10 width) with full hex codes—copy them into Figma styles or CSS variables as starting points.
            </p>
            <ul className="not-prose space-y-6 list-none pl-0 mb-8">
              <PaletteExampleCard
                title="Professional — navy, light gray, gold"
                body="Dominant light gray keeps forms and whitepapers calm; navy carries authority; gold signals premium CTAs without painting entire heroes yellow."
                dominant={{ hex: '#F5F5F5' }}
                secondary={{ hex: '#1E3A8A' }}
                accent={{ hex: '#FFD700' }}
                dLabel="60%"
                sLabel="30%"
                aLabel="10%"
              />
              <PaletteExampleCard
                title="Earthy — cream, sage, terracotta"
                body="Cream dominates for hospitality and wellness; sage structures navigation and dividers; terracotta marks actions and seasonal tags."
                dominant={{ hex: '#FFFDD0' }}
                secondary={{ hex: '#B2AC88' }}
                accent={{ hex: '#E2725B' }}
                dLabel="60%"
                sLabel="30%"
                aLabel="10%"
              />
              <PaletteExampleCard
                title="Modern — white, charcoal, electric blue"
                body="White-dominant SaaS chrome; charcoal for text and sidebars; electric blue strictly for links, primary buttons, and data highlights."
                dominant={{ hex: '#FFFFFF' }}
                secondary={{ hex: '#2D3748' }}
                accent={{ hex: '#0066FF' }}
                dLabel="60%"
                sLabel="30%"
                aLabel="10%"
              />
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 not-prose">Common Mistakes</h2>
            <p className="mb-4">
              <strong className="text-gray-900 dark:text-white">Mistaking “brand blue” for dominant.</strong> Teams paint 60% of the UI in saturated blue because
              the logo is blue, then wonder why charts and photography look muddy. Let blue live in the 30% lane unless you are deliberately building a blue-world
              product (some dev tools can).
            </p>
            <p className="mb-4">
              <strong className="text-gray-900 dark:text-white">Splitting the accent.</strong> Five accent colors at “only 2% each” still reads as chaos because
              chroma attracts the eye. Merge marketing requests into one campaign accent or rotate them seasonally, not simultaneously.
            </p>
            <p className="mb-4">
              <strong className="text-gray-900 dark:text-white">Ignoring dark mode.</strong> The same ratio applies, but dominant becomes near-black{' '}
              <strong className="text-gray-900 dark:text-white">#0F172A</strong>, secondary softens to a desaturated navy or charcoal, and accent saturation may need
              to drop slightly to avoid halation on OLED.
            </p>
            <p className="mb-6">
              <strong className="text-gray-900 dark:text-white">Treating photography as exempt.</strong> If hero images introduce four new hues at full saturation,
              they consume your accent budget visually. Grade photos toward your dominant temperature or add a translucent scrim keyed to your 60% hue so the rule
              still holds at a glance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 not-prose">FAQ</h2>
            <dl className="not-prose space-y-6 mb-8">
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">What is the 60-30-10 rule in design?</dt>
                <dd className="mt-1 text-gray-700 dark:text-gray-300">
                  A proportion guide: roughly 60% dominant color, 30% secondary, 10% accent, used to balance web pages, apps, and brand applications.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Do the percentages need to be exact?</dt>
                <dd className="mt-1 text-gray-700 dark:text-gray-300">
                  No—eyeball cumulative area and chroma. The goal is clear hierarchy, not measuring pixels with a ruler.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Can I use two accent colors?</dt>
                <dd className="mt-1 text-gray-700 dark:text-gray-300">
                  Only if they still fit the ~10% visual budget together; otherwise demote one to illustrations or swap by section.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Does 60-30-10 guarantee accessible contrast?</dt>
                <dd className="mt-1 text-gray-700 dark:text-gray-300">
                  No—test every text and control color with a contrast checker. Dominant and accent choices still need WCAG-compliant pairings.
                </dd>
              </div>
            </dl>

            <div className="not-prose my-10 rounded-2xl border border-violet-200 dark:border-violet-900/60 bg-violet-50/90 dark:bg-slate-900/70 p-6 md:p-8 text-center">
              <p className="text-gray-800 dark:text-gray-200 text-lg font-medium mb-4">
                Turn one seed color into a full 60-30-10-ready ramp with harmonious tints and exportable hex lists.
              </p>
              <Link
                href="/tools/palette-generator"
                className="inline-flex items-center justify-center rounded-xl bg-violet-700 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-violet-800 transition-colors"
              >
                Try our free color palette generator
              </Link>
            </div>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Related reads: <InlineTagLink href="/blog/navy-blue-hex-code">Navy blue hex reference</InlineTagLink>,{' '}
              <InlineTagLink href="/blog/sage-green-hex-code">Sage green hex codes</InlineTagLink>, and{' '}
              <InlineTagLink href="/blog/how-to-check-color-contrast-accessibility">how to check color contrast</InlineTagLink> for WCAG depth beyond proportion
              alone.
            </p>

            <div className="not-prose">
              <BlogToolsCTA />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
