import { sanityClient } from '@/lib/sanity'

export default async function BlogDebugPage() {
  let allPosts = []
  let error = null

  try {
    // Fetch ALL posts without any filters
    allPosts = await sanityClient.fetch(`
      *[_type == "post"] {
        _id,
        title,
        slug,
        publishedAt,
        _createdAt,
        _updatedAt
      }
    `)
  } catch (err) {
    error = err.message
    console.error('Sanity fetch error:', err)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Blog Debug Page
        </h1>

        {error && (
          <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 text-red-700 dark:text-red-400 px-4 py-3 rounded mb-6">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Sanity Connection Status
          </h2>
          <div className="space-y-2 text-gray-600 dark:text-gray-400">
            <p><strong>Project ID:</strong> dnp8oj3a</p>
            <p><strong>Dataset:</strong> production</p>
            <p><strong>API Version:</strong> 2024-01-01</p>
            <p><strong>Posts Found:</strong> {allPosts.length}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            All Posts in Sanity
          </h2>

          {allPosts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                No posts found in Sanity.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                Make sure you have:
              </p>
              <ul className="text-left mt-4 space-y-2 text-gray-500 dark:text-gray-500 text-sm">
                <li>1. Created posts in Sanity Studio</li>
                <li>2. Published the posts (not just saved as drafts)</li>
                <li>3. Filled in the slug field for each post</li>
                <li>4. The dataset name is correct (production)</li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              {allPosts.map((post) => (
                <div
                  key={post._id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title || 'Untitled'}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p><strong>ID:</strong> {post._id}</p>
                    <p>
                      <strong>Slug:</strong>{' '}
                      {post.slug?.current ? (
                        <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          {post.slug.current}
                        </span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400">
                          ❌ No slug set
                        </span>
                      )}
                    </p>
                    {post.slug?.current && (
                      <p>
                        <strong>URL:</strong>{' '}
                        <a
                          href={`/blog/${post.slug.current}`}
                          className="text-purple-600 dark:text-purple-400 hover:underline"
                        >
                          /blog/{post.slug.current}
                        </a>
                      </p>
                    )}
                    {post.publishedAt && (
                      <p>
                        <strong>Published:</strong>{' '}
                        {new Date(post.publishedAt).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

