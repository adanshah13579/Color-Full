import { sanityClient } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ColorPaletteClient from './ColorPaletteClient'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug || ''
  
  if (slug === '10-color-trends-for-2025') {
    return {
      title: 'Post Not Found',
    }
  }

  if (!slug) {
    return {
      title: 'Post Not Found',
    }
  }

  try {
    const post = await sanityClient.fetch(
      `
      *[_type == "post" && slug.current == $slug][0]{
        metaTitle,
        metaDescription,
        title,
        excerpt
      }
    `,
      { slug: slug }
    )

    if (!post) {
      return {
        title: 'Post Not Found',
      }
    }

    return {
      title: post.metaTitle || `${post.title} - ColorTool Blog`,
      description: post.metaDescription || post.excerpt,
    }
  } catch (error) {
    console.error('Error fetching post metadata:', error)
    return {
      title: 'Post Not Found',
    }
  }
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug || ''
  
  if (slug === '10-color-trends-for-2025') {
    notFound()
  }
  
  if (!slug) {
    notFound()
  }

  let post
  let relatedPosts = []

  try {
    post = await sanityClient.fetch(
      `
      *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        excerpt,
        content,
        designTitle,
        colorPalette,
        publishedAt,
        metaTitle,
        metaDescription
      }
    `,
      { slug: slug }
    )

    if (!post) {
      notFound()
    }

    relatedPosts = await sanityClient.fetch(
      `
      *[_type == "post" && _id != $currentId && slug.current != "10-color-trends-for-2025"] | order(publishedAt desc) [0...2] {
        _id,
        title,
        slug,
        excerpt,
        designTitle,
        colorPalette,
        publishedAt
      }
    `,
      { currentId: post._id }
    )
  } catch (error) {
    console.error('Error fetching blog post:', error)
    notFound()
  }

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Header Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-100 hover:text-white mb-8 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="mb-6">
              {post.designTitle && (
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                  {post.designTitle}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.publishedAt && (
              <div className="flex items-center gap-4 text-purple-100">
                <time>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Article Content */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-strong:text-gray-900 dark:prose-strong:text-white">
                {post.content && <PortableText value={post.content} />}
              </div>
            </div>

            {/* Color Palette Display */}
            {post.colorPalette && post.colorPalette.length > 0 && (
              <ColorPaletteClient 
                colors={post.colorPalette} 
                designTitle={post.designTitle}
              />
            )}

            {/* Share Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Share this article
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                If this guide was helpful, share it with other designers and developers.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                  Twitter
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-sm font-semibold transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text_WHITE">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost._id}
                      href={`/blog/${relatedPost.slug.current}`}
                      className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 group"
                    >
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      {relatedPost.colorPalette && relatedPosts.colorPalette?.length > 0 && (
                        <div className="flex gap-2">
                          {relatedPost.colorPalette.slice(0, 5).map((color, i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"
                              style={{ backgroundColor: color.hexCode }}
                              title={color.hexCode}
                            />
                          ))}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Ad Space Placeholder */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Ad Space (728x90)
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
