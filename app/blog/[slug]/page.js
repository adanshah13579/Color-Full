import Link from 'next/link'
import { Fragment } from 'react'
import { notFound } from 'next/navigation'
import { buildPageMetadata } from '../../../lib/buildPageMetadata'
import { BLOG_DYNAMIC_SLUGS } from '../../../lib/blogSitemapSlugs'
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema'
import BlogArticleSchema from '../components/BlogArticleSchema'
import BlogBreadcrumbs from '../components/BlogBreadcrumbs'
import ColorPaletteClient from './ColorPaletteClient'
import ColorSwatch from './ColorSwatch'
import GradientSwatch from './GradientSwatch'
import BlogToolsCTA from '../components/BlogToolsCTA'
import BlogToolsCTAInline from '../components/BlogToolsCTAInline'

const TOOL_LINKS = {
  'palette generator': '/tools/palette-generator',
  'contrast checker': '/tools/contrast-checker',
  'color contrast': '/tools/contrast-checker',
  wcag: '/tools/contrast-checker',
}

const TOOL_TERM_REGEX = /\b(palette generator|contrast checker|color contrast|WCAG)\b/gi

function renderTextWithToolLinks(text) {
  if (!text || typeof text !== 'string') return text

  const nodes = []
  let lastIndex = 0

  for (const match of text.matchAll(TOOL_TERM_REGEX)) {
    const matchText = match[0]
    const start = match.index ?? 0
    const end = start + matchText.length
    const href = TOOL_LINKS[matchText.toLowerCase()]

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start))
    }

    nodes.push(
      <Link key={`${start}-${matchText}`} href={href} className="text-purple-600 dark:text-purple-400 underline hover:no-underline">
        {matchText}
      </Link>
    )

    lastIndex = end
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes.length > 0 ? nodes : text
}

const trendsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the top color trends for 2026 in web design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leading 2026 UI color trends include vibrant neons on dark UI, soft pastels for wellness, earth tones for sustainability, bold gradients, high-contrast monochrome with one accent, warm sunset palettes, deep ocean blues, purple tech accents, varied greens, and subtle metallic highlights.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use trendy colors without hurting accessibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reserve saturated trend hues for buttons, icons, and heroes; keep body text in dark neutrals. Test every text-on-background pair with a WCAG contrast checker and document accessible token pairs in your design system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I copy hex codes from trend articles directly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use trend hex codes as starting points, then map them to semantic tokens (primary, success, surface). Generate tints and shades from one base color in a palette generator so hover and dark mode stay consistent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are 2025 and 2026 color trends the same?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many families carry over—earth tones, ocean blues, and warm sunsets remain strong—but 2026 emphasizes calmer neutrals, accessible contrast, and tokenized palettes over one-off trendy hex values per screen.',
      },
    },
  ],
};

// Static blog posts data
const staticPosts = {
  '10-color-trends-for-2025': {
    _id: '1',
    title: '10 Color Trends for 2026: Modern Palettes for Web & UI Design',
    slug: { current: '10-color-trends-for-2025' },
    excerpt:
      'Discover the top 10 color trends shaping web and UI design in 2026—from neons and pastels to ocean blues and sunset warmth—with copy-ready hex codes.',
    publishedAt: '2026-01-15',
    metaTitle: '10 Color Trends for 2026: Modern Palettes for Web & UI Design | Theme & Color',
    metaDescription:
      'Explore the top 10 color trends for 2026 in web and UI design. Copy hex codes per trend, learn how to apply palettes in products, and test contrast with free tools.',
    content: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'As we move through 2026, web and UI design keeps balancing bold expression with accessibility and systematic tokens. Color still drives trust, delight, and hierarchy—but teams ship faster when every trend maps to named hex values and tested contrast pairs. This guide lists ten palettes shaping digital products in 2026, with swatches you can copy into Figma or CSS today.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h1',
        style: 'h2',
        children: [{ _type: 'span', text: '1. Vibrant Neons and Electric Colors', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Electric blues (#00F5FF), neon greens (#00FF00), and vibrant magentas (#FF00FF) remain staples for gaming, AI products, and nightlife brands in 2026. Use them on dark (#0F172A) surfaces for CTAs and glow effects—not for paragraphs. Pair one neon accent with muted grays so interfaces feel futuristic without visual noise.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h2',
        style: 'h2',
        children: [{ _type: 'span', text: '2. Soft Pastels and Muted Tones', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Soft pastels—lavender (#E0B0FF), mint (#B5E5CF), peach (#FFD1DC), powder blue (#B0E0E6)—signal calm for wellness, childcare, and mindfulness apps in 2026. Keep backgrounds pastel and typography charcoal; pastels fail WCAG quickly when used as small text fills on white.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h3',
        style: 'h2',
        children: [{ _type: 'span', text: '3. Earth Tones and Natural Palettes', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Earth tones—terracotta (#E07A5F), sage (#87A96B), warm beige (#D2B48C), deep brown (#8B4513)—anchor eco, organic food, and outdoor brands. They pair with off-white type areas and photography-heavy layouts. See our terracotta and sage hex guides for extended ramps beyond these trend swatches.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h4',
        style: 'h2',
        children: [{ _type: 'span', text: '4. Gradient Overlays and Color Transitions', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Gradients—from purple–pink (#a855f7 → #ec4899) to blue–cyan (#3b82f6 → #06b6d4)—add depth to heroes and marketing sites. In 2026, product UI limits gradients to one hero or onboarding moment; app chrome stays flat for performance and clarity. Always test text overlaid on gradients for contrast.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h5',
        style: 'h2',
        children: [{ _type: 'span', text: '5. High Contrast Monochrome', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend5',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'High-contrast monochrome—black (#000000), white (#FFFFFF), and structured grays—with a single accent (often #3B82F6 or brand orange) dominates editorial and productivity tools. The pattern improves readability and simplifies dark mode: swap surfaces, keep one accent token.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h6',
        style: 'h2',
        children: [{ _type: 'span', text: '6. Warm Sunset Hues', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend6',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Warm sunset hues—coral (#FF7F50), amber (#FFBF00), soft orange (#FF8C00)—power food, travel, and creator brands. Our Sunset Vibes palette (#F97316, #EF4444, #EC4899, #8B5CF6) packages the full warm-to-cool story for campaigns that need more than one accent.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h7',
        style: 'h2',
        children: [{ _type: 'span', text: '7. Deep Blues and Ocean Tones', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend7',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Deep navy (#1E3A8A), teal (#0D9488), and ocean blues (#0EA5E9) continue to signal trust for fintech, healthcare, and B2B SaaS. Ocean Breeze hex codes (#0EA5E9 through #34D399) give a full blue-to-mint ramp for dashboards that must feel calm, not cold.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h8',
        style: 'h2',
        children: [{ _type: 'span', text: '8. Purple and Violet Accents', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend8',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Purple—from deep violet (#6B21A8) to lavender (#C4B5FD)—marks creative tech, AI interfaces, and premium subscriptions. Use one saturated purple for primary actions; avoid filling entire views with violet, which fatigues users and fails contrast on white.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h9',
        style: 'h2',
        children: [{ _type: 'span', text: '9. Green Variations for Growth and Nature', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend9',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Greens span emerald (#059669), mint (#34D399), and yellow-green (#9ACD32) for growth, health, and climate narratives. Forest and sage hex guides document darker anchors for navigation; mint rows suit success states after contrast checks.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'h10',
        style: 'h2',
        children: [{ _type: 'span', text: '10. Metallic and Chrome Effects', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'trend10',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Metallic gradients—silver, gold (#facc15 → #ca8a04), bronze—add premium cues on dark heroes and pricing cards. Use sparingly in core product UI; metallic text on light backgrounds rarely passes accessibility. Reserve chrome effects for marketing, not form fields.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'conclusion',
        style: 'h2',
        children: [{ _type: 'span', text: 'How to use these trends in 2026 (practical)', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'impl',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Trendy hex codes only help when they become a maintainable system. In 2026, strong teams follow this workflow:',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'list1',
        style: 'normal',
        listItem: 'bullet',
        children: [
          {
            _type: 'span',
            text: 'Pick one trend family per product surface (marketing site vs. app shell) and map swatches to semantic tokens—primary, secondary, success, surface, border.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'list2',
        style: 'normal',
        listItem: 'bullet',
        children: [
          {
            _type: 'span',
            text: 'Generate tints and shades from a single base hex in a palette generator so hover, disabled, and dark mode do not require manual guessing.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'list3',
        style: 'normal',
        listItem: 'bullet',
        children: [
          {
            _type: 'span',
            text: 'Run WCAG contrast checks on every text, icon, and button pair before handoff—especially neons, pastels, and sunset oranges on white.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'list4',
        style: 'normal',
        listItem: 'bullet',
        children: [
          {
            _type: 'span',
            text: 'Document hex, RGB, and role in a short style guide so developers and vendors do not substitute “close enough” colors in production.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'final',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Stay ahead in 2026 by treating trends as starting palettes, not one-off decorations. Use our palette generator to extend any swatch above, and the contrast checker to keep combinations accessible as you ship.',
            marks: [],
          },
        ],
      },
    ],
    colorPalette: [
      { hexCode: '#8B5CF6', colorName: 'Vibrant Purple', rgbCode: 'rgb(139, 92, 246)' },
      { hexCode: '#EC4899', colorName: 'Electric Pink', rgbCode: 'rgb(236, 72, 153)' },
      { hexCode: '#F59E0B', colorName: 'Warm Amber', rgbCode: 'rgb(245, 158, 11)' },
      { hexCode: '#10B981', colorName: 'Emerald Green', rgbCode: 'rgb(16, 185, 129)' },
      { hexCode: '#3B82F6', colorName: 'Ocean Blue', rgbCode: 'rgb(59, 130, 246)' },
    ],
  },
};

export function generateStaticParams() {
  return BLOG_DYNAMIC_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug || ''

  if (!slug) {
    return buildPageMetadata({
      path: '/blog',
      title: 'Blog',
      description: 'Color design articles and guides from Theme & Color.',
      keywords: ['blog', 'color design', 'Theme & Color'],
    })
  }

  const post = staticPosts[slug]
  if (!post) {
    return buildPageMetadata({
      path: '/blog',
      title: 'Post Not Found',
      description: 'This blog post could not be found.',
      keywords: ['Theme & Color', 'blog'],
    })
  }

  const titleForPage = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt
  const slugKeywords = slug.split('-').filter((w) => w.length > 2).slice(0, 10)

  return buildPageMetadata({
    path: `/blog/${slug}`,
    title: titleForPage,
    description,
    keywords: ['color design', 'web design', 'UI', ...slugKeywords],
    openGraphType: 'article',
    openGraph: {
      publishedTime: post.publishedAt,
    },
  })
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug || ''
  
  if (!slug) {
    notFound()
  }

  const post = staticPosts[slug]

    if (!post) {
      notFound()
    }

  const isTrendsPost = slug === '10-color-trends-for-2025'
  const articleHeadline = (post.metaTitle || post.title).replace(/\s*\|\s*Theme & Color\s*$/, '').trim()
  const articleDescription = post.metaDescription || post.excerpt
  const articleSchema = getBlogArticleSchema(
    articleHeadline,
    articleDescription,
    slug,
    getBlogArticleDatePublished(slug),
    BLOG_ARTICLE_DATE_MODIFIED
  )

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      {isTrendsPost ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trendsFaqSchema) }} />
      ) : null}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleHeadline} slug={slug} />
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            {post.publishedAt && (
              <div className="flex items-center gap-4 text-purple-100 text-sm">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>10 min read</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Article Content */}
              <div className="lg:col-span-2">
                {/* Article Content */}
                <article className="prose prose-lg max-w-none 
                  prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mt-8 prose-headings:mb-4
                  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                  prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                  prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300
                  prose-li:mb-2 prose-li:text-base
                  prose-blockquote:border-l-purple-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300">
                  {post.content.map((block, index) => {
                    if (block._key === 'h1') {
                      // Trend 1: Vibrant Neons
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {renderTextWithToolLinks(block.children[0]?.text)}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <ColorSwatch color="#00F5FF" name="Electric Cyan" hexCode="#00F5FF" />
                            <ColorSwatch color="#FF00FF" name="Neon Magenta" hexCode="#FF00FF" />
                            <ColorSwatch color="#00FF00" name="Neon Green" hexCode="#00FF00" />
                            <ColorSwatch color="#FF0080" name="Hot Pink" hexCode="#FF0080" />
                          </div>
                        </div>
                      );
                    }
                    if (block._key === 'h2') {
                      // Trend 2: Soft Pastels
                      return (
                        <Fragment key={block._key || index}>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                              {renderTextWithToolLinks(block.children[0]?.text)}
                            </h2>
                            <div className="flex gap-4 mb-6 flex-wrap">
                              <ColorSwatch color="#E0B0FF" name="Lavender" hexCode="#E0B0FF" />
                              <ColorSwatch color="#B5E5CF" name="Mint Green" hexCode="#B5E5CF" />
                              <ColorSwatch color="#FFD1DC" name="Peach" hexCode="#FFD1DC" />
                              <ColorSwatch color="#B0E0E6" name="Powder Blue" hexCode="#B0E0E6" />
                            </div>
                          </div>
                          <BlogToolsCTAInline />
                        </Fragment>
                      );
                    }
                    if (block._key === 'h3') {
                      // Trend 3: Earth Tones
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {renderTextWithToolLinks(block.children[0]?.text)}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <ColorSwatch color="#E07A5F" name="Terracotta" hexCode="#E07A5F" />
                            <ColorSwatch color="#87A96B" name="Sage Green" hexCode="#87A96B" />
                            <ColorSwatch color="#D2B48C" name="Warm Beige" hexCode="#D2B48C" />
                            <ColorSwatch color="#8B4513" name="Deep Brown" hexCode="#8B4513" />
                          </div>
                        </div>
                      );
                    }
                    if (block._key === 'h4') {
                      // Trend 4: Gradients
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {renderTextWithToolLinks(block.children[0]?.text)}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <GradientSwatch
                              gradientClass="bg-gradient-to-br from-purple-500 to-pink-500"
                              name="Purple to Pink"
                              gradientCode="linear-gradient(to bottom right, #a855f7, #ec4899)"
                            />
                            <GradientSwatch
                              gradientClass="bg-gradient-to-br from-blue-500 to-cyan-500"
                              name="Blue to Cyan"
                              gradientCode="linear-gradient(to bottom right, #3b82f6, #06b6d4)"
                            />
                            <GradientSwatch
                              gradientClass="bg-gradient-to-br from-orange-500 to-red-500"
                              name="Orange to Red"
                              gradientCode="linear-gradient(to bottom right, #f97316, #ef4444)"
                            />
                            <GradientSwatch
                              gradientClass="bg-gradient-to-br from-green-400 to-blue-500"
                              name="Green to Blue"
                              gradientCode="linear-gradient(to bottom right, #4ade80, #3b82f6)"
                            />
                          </div>
                        </div>
                      );
                    }
                    if (block._key === 'h5') {
                      // Trend 5: Monochrome
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {renderTextWithToolLinks(block.children[0]?.text)}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <ColorSwatch color="#000000" name="Black" hexCode="#000000" />
                            <ColorSwatch color="#1F2937" name="Dark Gray" hexCode="#1F2937" />
                            <ColorSwatch color="#E5E7EB" name="Light Gray" hexCode="#E5E7EB" />
                            <ColorSwatch color="#FFFFFF" name="White" hexCode="#FFFFFF" />
                          </div>
                        </div>
                      );
                    }
                    if (block._key === 'h6') {
                      // Trend 6: Warm Sunset
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {renderTextWithToolLinks(block.children[0]?.text)}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <ColorSwatch color="#FF7F50" name="Coral" hexCode="#FF7F50" />
                            <ColorSwatch color="#FFBF00" name="Amber" hexCode="#FFBF00" />
                            <ColorSwatch color="#FF8C00" name="Soft Orange" hexCode="#FF8C00" />
                            <ColorSwatch color="#FF6347" name="Tomato" hexCode="#FF6347" />
                          </div>
                        </div>
                      );
                    }
                    if (block._key === 'h7') {
                      // Trend 7: Deep Blues
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {renderTextWithToolLinks(block.children[0]?.text)}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <ColorSwatch color="#1E3A8A" name="Deep Navy" hexCode="#1E3A8A" />
                            <ColorSwatch color="#0D9488" name="Teal" hexCode="#0D9488" />
                            <ColorSwatch color="#1E40AF" name="Ocean Blue" hexCode="#1E40AF" />
                            <ColorSwatch color="#0891B2" name="Cyan Blue" hexCode="#0891B2" />
                          </div>
                        </div>
                      );
                    }
                    if (block._key === 'h8') {
                      // Trend 8: Purple
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {renderTextWithToolLinks(block.children[0]?.text)}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <ColorSwatch color="#6B21A8" name="Deep Violet" hexCode="#6B21A8" />
                            <ColorSwatch color="#8B5CF6" name="Purple" hexCode="#8B5CF6" />
                            <ColorSwatch color="#A78BFA" name="Light Purple" hexCode="#A78BFA" />
                            <ColorSwatch color="#C4B5FD" name="Lavender" hexCode="#C4B5FD" />
                          </div>
                        </div>
                      );
                    }
                    if (block._key === 'h9') {
                      // Trend 9: Green
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {renderTextWithToolLinks(block.children[0]?.text)}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <ColorSwatch color="#059669" name="Emerald" hexCode="#059669" />
                            <ColorSwatch color="#10B981" name="Green" hexCode="#10B981" />
                            <ColorSwatch color="#34D399" name="Mint" hexCode="#34D399" />
                            <ColorSwatch color="#6EE7B7" name="Light Green" hexCode="#6EE7B7" />
                          </div>
                        </div>
                      );
                    }
                    if (block._key === 'h10') {
                      // Trend 10: Metallic
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {renderTextWithToolLinks(block.children[0]?.text)}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <GradientSwatch
                              gradientClass="bg-gradient-to-br from-gray-300 to-gray-500"
                              name="Silver"
                              gradientCode="linear-gradient(to bottom right, #d1d5db, #6b7280)"
                            />
                            <GradientSwatch
                              gradientClass="bg-gradient-to-br from-yellow-400 to-yellow-600"
                              name="Gold"
                              gradientCode="linear-gradient(to bottom right, #facc15, #ca8a04)"
                            />
                            <GradientSwatch
                              gradientClass="bg-gradient-to-br from-orange-700 to-orange-900"
                              name="Bronze"
                              gradientCode="linear-gradient(to bottom right, #c2410c, #7c2d12)"
                            />
                            <GradientSwatch
                              gradientClass="bg-gradient-to-br from-gray-400 to-gray-600"
                              name="Chrome"
                              gradientCode="linear-gradient(to bottom right, #9ca3af, #4b5563)"
                            />
                          </div>
                        </div>
                      );
                    }
                    if (block._type === 'heading') {
                      const HeadingTag = `h${block.style.replace('h', '')}`;
                      return (
                        <HeadingTag key={block._key || index} className="font-bold text-gray-900 dark:text-white mt-8 mb-4">
                          {renderTextWithToolLinks(block.children[0]?.text)}
                        </HeadingTag>
                      );
                    }
                    if (block.listItem) {
                      return (
                        <li key={block._key || index} className="mb-2 text-gray-700 dark:text-gray-300">
                          {renderTextWithToolLinks(block.children[0]?.text)}
                        </li>
                      );
                    }
                    return (
                      <p key={block._key || index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {renderTextWithToolLinks(block.children[0]?.text)}
                      </p>
                    );
                  })}
                </article>

                {isTrendsPost ? (
                  <div className="not-prose mt-10 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">FAQ</h2>
                    <dl className="space-y-6">
                      {trendsFaqSchema.mainEntity.map((item) => (
                        <div key={item.name}>
                          <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                          <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ) : null}

                {/* Prominent tools CTA – big, attractive, animated */}
                <BlogToolsCTA />

                {/* Share Section */}
                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-white">
                    Share this article
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-black dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-white dark:text-white rounded-lg text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </button>
                  </div>
                </div>

                {/* Ad Space Placeholder */}
                <div className="mt-8 bg-black dark:bg-gray-800 rounded-lg p-6 border border-dashed border-gray-300 dark:border-gray-700 text-center">
                  <p className="text-white dark:text-gray-400 text-sm">
                    Ad Space (728x90)
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20 space-y-6">
                  {/* Color Palette */}
                  {post.colorPalette && post.colorPalette.length > 0 && (
                    <ColorPaletteClient 
                      colors={post.colorPalette} 
                      designTitle="2026 Trend Colors"
                      className="lg:mb-0"
                    />
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
