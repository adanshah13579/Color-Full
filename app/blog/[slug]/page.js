import Link from 'next/link'
import { notFound } from 'next/navigation'
import ColorPaletteClient from './ColorPaletteClient'
import ColorSwatch from './ColorSwatch'
import GradientSwatch from './GradientSwatch'

// Static blog posts data
const staticPosts = {
  '10-color-trends-for-2025': {
    _id: '1',
    title: '10 Color Trends for 2025: Modern Color Palettes for Web & UI Design',
    slug: { current: '10-color-trends-for-2025' },
    excerpt: 'Discover the most popular color palettes and trends shaping design in 2025. From vibrant neons to calming pastels, explore what\'s hot in web and UI design.',
    publishedAt: '2025-01-15',
    metaTitle: '10 Color Trends for 2025: Modern Color Palettes for Web & UI Design | Theme & Color',
    metaDescription: 'Explore the top 10 color trends for 2025 in web and UI design. Discover modern color palettes, design tips, and how to implement these trends in your projects.',
    content: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'As we step into 2025, the world of web and UI design continues to evolve with exciting new color trends. Color plays a crucial role in user experience, brand identity, and emotional connection. In this comprehensive guide, we\'ll explore the top 10 color trends that are shaping modern digital design in 2025.',
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
            text: 'Electric blues, neon greens, and vibrant magentas are making a strong comeback in 2025. These bold, attention-grabbing colors are perfect for call-to-action buttons, highlights, and accent elements. They work exceptionally well against dark backgrounds and create a modern, tech-forward aesthetic.',
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
            text: 'In contrast to vibrant neons, soft pastels offer a calming, approachable feel. Think lavender, mint green, peach, and powder blue. These colors are ideal for wellness apps, lifestyle brands, and platforms that want to convey tranquility and mindfulness.',
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
            text: 'Sustainability-focused brands are embracing earth tones like terracotta, sage green, warm beige, and deep browns. These colors create a grounded, authentic feel and resonate with environmentally conscious audiences.',
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
            text: 'Smooth color transitions and gradient overlays continue to be popular in 2025. From purple-to-pink gradients to blue-to-cyan transitions, these effects add depth and visual interest to backgrounds, buttons, and hero sections.',
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
            text: 'Black and white designs with strategic pops of color are making a statement. This trend emphasizes clarity, readability, and accessibility while allowing one or two accent colors to shine.',
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
            text: 'Inspired by golden hour, warm sunset colors including coral, amber, and soft oranges create inviting, friendly interfaces. These colors work well for food delivery apps, travel platforms, and lifestyle brands.',
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
            text: 'Deep navy, teal, and ocean blues convey trust, professionalism, and stability. These colors are perfect for financial services, healthcare platforms, and enterprise software.',
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
            text: 'Purple continues to be a favorite for tech brands and creative platforms. From deep violet to light lavender, purple adds creativity, innovation, and luxury to designs.',
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
            text: 'Various shades of green, from emerald to mint, represent growth, health, and sustainability. These colors are ideal for fitness apps, eco-friendly brands, and financial platforms emphasizing growth.',
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
            text: 'Subtle metallic effects and chrome-like finishes add premium feel to interfaces. Silver, gold, and bronze tones work well for luxury brands, premium products, and high-end services.',
            marks: [],
          },
        ],
      },
      {
        _type: 'heading',
        _key: 'conclusion',
        style: 'h2',
        children: [{ _type: 'span', text: 'How to Implement These Trends', marks: [] }],
      },
      {
        _type: 'block',
        _key: 'impl',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'When implementing these color trends, remember to:',
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
            text: 'Maintain proper contrast ratios for accessibility (WCAG AA compliance)',
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
            text: 'Test colors across different devices and screen types',
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
            text: 'Consider your brand identity and target audience',
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
            text: 'Use color psychology to enhance user experience',
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
            text: 'Stay ahead of the curve by experimenting with these 2025 color trends while maintaining usability and accessibility standards. Use our color palette generator and contrast checker tools to create perfect color combinations for your projects.',
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

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug || ''

  if (!slug) {
    return {
      title: 'Post Not Found - Theme & Color',
    }
  }

  const post = staticPosts[slug]

    if (!post) {
      return {
      title: 'Post Not Found - Theme & Color',
      }
    }

    return {
    title: post.metaTitle || `${post.title} - Theme & Color Blog`,
      description: post.metaDescription || post.excerpt,
    keywords: 'color trends 2025, web design colors, UI design palettes, color psychology, design trends, color schemes, modern color palettes',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
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

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
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
                            {block.children[0]?.text}
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
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {block.children[0]?.text}
                          </h2>
                          <div className="flex gap-4 mb-6 flex-wrap">
                            <ColorSwatch color="#E0B0FF" name="Lavender" hexCode="#E0B0FF" />
                            <ColorSwatch color="#B5E5CF" name="Mint Green" hexCode="#B5E5CF" />
                            <ColorSwatch color="#FFD1DC" name="Peach" hexCode="#FFD1DC" />
                            <ColorSwatch color="#B0E0E6" name="Powder Blue" hexCode="#B0E0E6" />
                          </div>
                        </div>
                      );
                    }
                    if (block._key === 'h3') {
                      // Trend 3: Earth Tones
                      return (
                        <div key={block._key || index}>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                            {block.children[0]?.text}
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
                            {block.children[0]?.text}
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
                            {block.children[0]?.text}
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
                            {block.children[0]?.text}
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
                            {block.children[0]?.text}
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
                            {block.children[0]?.text}
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
                            {block.children[0]?.text}
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
                            {block.children[0]?.text}
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
                          {block.children[0]?.text}
                        </HeadingTag>
                      );
                    }
                    if (block.listItem) {
                      return (
                        <li key={block._key || index} className="mb-2 text-gray-700 dark:text-gray-300">
                          {block.children[0]?.text}
                        </li>
                      );
                    }
                    return (
                      <p key={block._key || index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {block.children[0]?.text}
                      </p>
                    );
                  })}
                </article>

                {/* Call to Action */}
                <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Ready to Create Your Color Palette?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Use our free color palette generator to create harmonious color schemes based on these 2025 trends.
                  </p>
                  <Link
                    href="/tools/palette-generator"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Try Palette Generator
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

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
                      designTitle="2025 Trend Colors"
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
