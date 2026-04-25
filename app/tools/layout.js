import { buildPageMetadata } from '../../lib/buildPageMetadata'

export const metadata = buildPageMetadata({
  path: '/tools',
  title: 'Color Tools',
  description:
    'Explore free color tools: palette generator, WCAG contrast checker, and RYB paint-style color mixing simulator for designers and developers.',
  keywords: ['color tools', 'palette generator', 'contrast checker', 'color mixer', 'Theme & Color'],
})

export default function ToolsLayout({ children }) {
  return children;
}


