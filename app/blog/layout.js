import { buildPageMetadata } from '../../lib/buildPageMetadata'

export const metadata = buildPageMetadata({
  path: '/blog',
  title: 'Color Design Blog',
  description:
    'Color trends, accessibility, palette ideas, and practical color guides for web, UI, and brand designers.',
  keywords: ['color blog', 'design articles', 'color trends', 'palettes', 'Theme & Color'],
})

export default function BlogLayout({ children }) {
  return children;
}


