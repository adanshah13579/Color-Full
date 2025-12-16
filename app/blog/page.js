import { sanityClient } from '@/lib/sanity'
import BlogClient from './BlogClient'

export default async function BlogPage() {
  let posts = []
  
  try {
    posts = await sanityClient.fetch(`
      *[_type == "post" && slug.current != "10-color-trends-for-2025"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        designTitle,
        colorPalette,
        publishedAt,
        metaTitle,
        metaDescription
      }
    `)
    
    // Debug: Log posts and their slugs
    console.log('Fetched posts:', posts.length)
    posts.forEach((post, index) => {
      console.log(`Post ${index + 1}:`, {
        title: post.title,
        slug: post.slug?.current,
        hasSlug: !!post.slug?.current
      })
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Return empty array on error - BlogClient will show empty state
    posts = []
  }

  return <BlogClient posts={posts} />
}
