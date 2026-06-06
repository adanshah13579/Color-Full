import { pickReadableText } from '../lib/contrastUtils';

const NAV_LINKS = ['Product', 'Pricing', 'About', 'Contact'];

const LOGOS = ['Acme', 'North', 'Velo', 'Pulse', 'Stack'];

const STATS = [
  { value: '10K+', label: 'Active users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9★', label: 'Avg rating' },
  { value: '50+', label: 'Countries' },
];

const FEATURES = [
  { title: 'Fast', description: 'Ship ideas in hours, not weeks.' },
  { title: 'Reliable', description: 'Built for uptime you can trust.' },
  { title: 'Scalable', description: 'Grows with your team and traffic.' },
  { title: 'Secure', description: 'Enterprise-grade encryption by default.' },
  { title: 'Flexible', description: 'Integrates with your existing stack.' },
  { title: 'Supported', description: '24/7 help from real humans.' },
];

const STEPS = [
  { num: '1', title: 'Sign up', description: 'Create your free account in seconds.' },
  { num: '2', title: 'Customize', description: 'Pick colors, layout, and content blocks.' },
  { num: '3', title: 'Launch', description: 'Publish and share with one click.' },
];

const PLANS = [
  { name: 'Starter', price: '$0', period: '/mo', features: ['1 project', 'Basic analytics', 'Community support'] },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support'],
    highlighted: true,
  },
  { name: 'Team', price: '$79', period: '/mo', features: ['Everything in Pro', 'Team seats', 'Custom domain'] },
];

const FAQ_ITEMS = [
  { q: 'Can I cancel anytime?', a: 'Yes — no contracts or hidden fees.' },
  { q: 'Do you offer a free trial?', a: 'Pro includes a 14-day free trial.' },
  { q: 'Is my data secure?', a: 'All data is encrypted at rest and in transit.' },
];

const FOOTER_COLUMNS = [
  ['Product', 'Features', 'Pricing'],
  ['Company', 'About', 'Careers'],
  ['Support', 'Docs', 'Contact'],
];

export default function LandingPageMockup({ colors }) {
  const { primary, secondary, accent, background, text } = colors;
  const ctaHeadlineColor = pickReadableText(accent, text);
  const ctaButtonTextColor = pickReadableText(primary, '#FFFFFF');

  return (
    <div
      className="h-full flex flex-col text-left select-none overflow-hidden"
      style={{ fontFamily: 'system-ui, sans-serif' }}
    >
      {/* Navbar */}
      <header className="shrink-0 h-12 bg-white border-b border-gray-100 flex items-center justify-between px-6 z-10">
        <span className="text-sm font-bold tracking-tight" style={{ color: primary }}>
          Brand
        </span>
        <nav className="flex items-center gap-4" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <span key={link} className="text-[11px] font-medium" style={{ color: text }}>
              {link}
            </span>
          ))}
          <span
            className="text-[11px] font-semibold text-white px-3.5 py-1.5 rounded-full"
            style={{ backgroundColor: primary }}
          >
            Get Started
          </span>
        </nav>
      </header>

      {/* Scrollable page body */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        {/* Hero */}
        <section
          className="px-6 py-6 flex items-center gap-6"
          style={{ backgroundColor: primary }}
        >
          <div className="flex-1 min-w-0">
            <span
              className="inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full mb-2"
              style={{ backgroundColor: accent, color: pickReadableText(accent, text) }}
            >
              New · v2.0 is live
            </span>
            <h1 className="text-xl font-bold text-white leading-tight mb-2">Build Something Amazing</h1>
            <p className="text-[11px] text-white/80 leading-relaxed mb-4 max-w-[280px]">
              The fastest way to bring your ideas to life. Design, preview, and launch in one place.
            </p>
            <div className="flex items-center gap-2.5">
              <span
                className="text-[10px] font-semibold px-3.5 py-2 rounded-lg"
                style={{ backgroundColor: accent, color: pickReadableText(accent, text) }}
              >
                Start Free
              </span>
              <span className="text-[10px] font-semibold text-white px-3.5 py-2 rounded-lg border border-white/80">
                Watch demo
              </span>
            </div>
          </div>

          <div className="relative w-[160px] h-[120px] shrink-0" aria-hidden>
            <div
              className="absolute top-3 right-8 w-16 h-16 rounded-full opacity-90"
              style={{ backgroundColor: secondary }}
            />
            <div
              className="absolute bottom-4 left-3 w-11 h-11 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <div
              className="absolute top-10 left-10 w-[72px] h-10 rounded-lg"
              style={{ backgroundColor: secondary }}
            />
            <div
              className="absolute bottom-2 right-1 w-14 h-[72px] rounded-md"
              style={{ backgroundColor: accent, opacity: 0.85 }}
            />
            <div
              className="absolute top-1 right-1 w-9 h-9 rounded-sm rotate-12"
              style={{ backgroundColor: secondary, opacity: 0.6 }}
            />
          </div>
        </section>

        {/* Logo / trust bar */}
        <section className="px-6 py-4 bg-white border-b border-gray-100">
          <p className="text-[9px] text-center text-gray-400 mb-3 uppercase tracking-wider font-medium">
            Trusted by teams at
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-[10px] font-bold opacity-50"
                style={{ color: text }}
              >
                {logo}
              </span>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 py-4 grid grid-cols-4 gap-3" style={{ backgroundColor: background }}>
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-sm font-bold" style={{ color: primary }}>
                {stat.value}
              </div>
              <div className="text-[9px] text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="px-6 py-5" style={{ backgroundColor: background }}>
          <h2 className="text-sm font-bold mb-1 text-center" style={{ color: text }}>
            Why Choose Us
          </h2>
          <p className="text-[10px] text-gray-500 text-center mb-4 max-w-sm mx-auto">
            Everything you need to ship polished landing pages without the design bottleneck.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl px-3.5 py-3.5 shadow-sm border border-gray-100"
              >
                <div
                  className="w-8 h-8 rounded-full mb-2 flex items-center justify-center"
                  style={{ backgroundColor: `${secondary}22` }}
                  aria-hidden
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: secondary }} />
                </div>
                <h3 className="text-[11px] font-bold mb-1" style={{ color: text }}>
                  {feature.title}
                </h3>
                <p className="text-[10px] text-gray-500 leading-snug">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-5 bg-white">
          <h2 className="text-sm font-bold mb-4 text-center" style={{ color: text }}>
            How It Works
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ backgroundColor: primary }}
                  aria-hidden
                >
                  {step.num}
                </div>
                <h3 className="text-[11px] font-bold mb-1" style={{ color: text }}>
                  {step.title}
                </h3>
                <p className="text-[10px] text-gray-500 leading-snug">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="px-6 py-5" style={{ backgroundColor: background }}>
          <h2 className="text-sm font-bold mb-1 text-center" style={{ color: text }}>
            Simple Pricing
          </h2>
          <p className="text-[10px] text-gray-500 text-center mb-4">Start free, upgrade when you&apos;re ready.</p>
          <div className="grid grid-cols-3 gap-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl px-3 py-3.5 flex flex-col ${
                  plan.highlighted
                    ? 'shadow-md ring-2 ring-offset-1'
                    : 'bg-white shadow-sm border border-gray-100'
                }`}
                style={{
                  backgroundColor: plan.highlighted ? primary : undefined,
                  ringColor: plan.highlighted ? primary : undefined,
                }}
              >
                <h3
                  className="text-[11px] font-bold mb-0.5"
                  style={{ color: plan.highlighted ? '#fff' : text }}
                >
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span
                    className="text-base font-bold"
                    style={{ color: plan.highlighted ? '#fff' : primary }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-[9px]"
                    style={{ color: plan.highlighted ? 'rgba(255,255,255,0.7)' : '#9CA3AF' }}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-1 mb-3 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-[9px] flex items-center gap-1.5"
                      style={{ color: plan.highlighted ? 'rgba(255,255,255,0.85)' : '#6B7280' }}
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: plan.highlighted ? accent : secondary }}
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span
                  className="text-[9px] font-semibold text-center py-1.5 rounded-lg"
                  style={{
                    backgroundColor: plan.highlighted ? accent : `${primary}15`,
                    color: plan.highlighted ? pickReadableText(accent, text) : primary,
                  }}
                >
                  {plan.highlighted ? 'Start trial' : 'Get started'}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="px-6 py-4 relative">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: secondary, opacity: 0.1 }}
            aria-hidden
          />
          <div className="relative flex flex-col items-center text-center gap-3">
            <div className="flex gap-0.5" aria-label="5 star rating">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="text-[10px]" style={{ color: accent }}>
                  ★
                </span>
              ))}
            </div>
            <p className="text-[11px] leading-relaxed max-w-md italic" style={{ color: text }}>
              &ldquo;This product transformed how our team ships landing pages. We picked colors here first and saved
              days in design review.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: primary }}
                aria-hidden
              />
              <div className="text-left">
                <p className="text-[10px] font-semibold" style={{ color: text }}>
                  Jamie Rivera
                </p>
                <p className="text-[9px] text-gray-500">Head of Design, Acme</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-5 bg-white">
          <h2 className="text-sm font-bold mb-4 text-center" style={{ color: text }}>
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-2 max-w-lg mx-auto">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.q}
                className="rounded-lg px-3.5 py-2.5 border border-gray-100"
                style={{ backgroundColor: background }}
              >
                <p className="text-[10px] font-semibold mb-0.5" style={{ color: text }}>
                  {item.q}
                </p>
                <p className="text-[9px] text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 py-5" style={{ backgroundColor: background }}>
          <div
            className="rounded-xl px-4 py-4 flex flex-col items-center text-center gap-2.5"
            style={{ backgroundColor: `${secondary}18` }}
          >
            <h2 className="text-[11px] font-bold" style={{ color: text }}>
              Stay in the loop
            </h2>
            <p className="text-[9px] text-gray-500 max-w-xs">
              Get product updates, tips, and palette inspiration — no spam.
            </p>
            <div className="flex gap-2 w-full max-w-xs">
              <span className="flex-1 text-[9px] text-gray-400 bg-white rounded-lg px-3 py-2 border border-gray-200 text-left">
                you@company.com
              </span>
              <span
                className="text-[9px] font-semibold text-white px-3 py-2 rounded-lg shrink-0"
                style={{ backgroundColor: primary }}
              >
                Subscribe
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="px-6 py-5 flex flex-col items-center justify-center gap-2.5"
          style={{ backgroundColor: accent }}
        >
          <h2 className="text-sm font-bold" style={{ color: ctaHeadlineColor }}>
            Ready to get started?
          </h2>
          <p className="text-[10px] opacity-80" style={{ color: ctaHeadlineColor }}>
            Join thousands of teams already building with Brand.
          </p>
          <span
            className="text-[10px] font-semibold px-5 py-2 rounded-full"
            style={{ backgroundColor: primary, color: ctaButtonTextColor }}
          >
            Get Started Today
          </span>
        </section>

        {/* Footer */}
        <footer className="px-6 py-5" style={{ backgroundColor: text }}>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {FOOTER_COLUMNS.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-2">
                {column.map((link, rowIndex) => (
                  <span
                    key={link}
                    className={`text-[10px] ${rowIndex === 0 ? 'font-semibold text-white/90' : 'text-white/70'}`}
                  >
                    {link}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[9px] text-white/50">© 2026 Brand Inc.</span>
            <div className="flex gap-3">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <span key={social} className="text-[9px] text-white/50">
                  {social}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
