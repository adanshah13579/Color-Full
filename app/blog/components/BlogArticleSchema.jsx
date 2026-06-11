/**
 * Renders Article JSON-LD alongside FAQPage schema on blog posts.
 * @param {{ schema: Record<string, unknown> }} props
 */
export default function BlogArticleSchema({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
