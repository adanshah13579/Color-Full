import Link from 'next/link';
import { getBlogBreadcrumbSchema } from '../../../lib/getBlogBreadcrumbSchema';

/**
 * Visible breadcrumb nav + BreadcrumbList JSON-LD for blog posts.
 * @param {{ postTitle: string, slug: string, className?: string }} props
 */
export default function BlogBreadcrumbs({ postTitle, slug, className = '' }) {
  const schema = getBlogBreadcrumbSchema(postTitle, slug);
  const items = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: postTitle },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.name}-${index}`} className="flex items-center gap-1">
                {index > 0 ? (
                  <span className="text-gray-300 dark:text-gray-600 select-none" aria-hidden>
                    &gt;
                  </span>
                ) : null}
                {isLast || !item.href ? (
                  <span
                    className="font-medium text-gray-700 dark:text-gray-300 truncate max-w-[14rem] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
