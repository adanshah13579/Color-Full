import Link from 'next/link';
import { buildBreadcrumbSchema } from '../../lib/breadcrumbSchema';

export default function ToolBreadcrumbs({ items }) {
  const schema = buildBreadcrumbSchema(items);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <span className="text-gray-300 dark:text-gray-600" aria-hidden>
                    /
                  </span>
                ) : null}
                {isLast || !item.href ? (
                  <span className="font-medium text-gray-900 dark:text-white" aria-current={isLast ? 'page' : undefined}>
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
