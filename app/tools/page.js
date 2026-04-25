import ToolsPageClient from './ToolsPageClient';
import { buildPageMetadata } from '../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/tools',
  title: 'Color Tools for Designers & Developers',
  description:
    'Free color tools for palette generation, WCAG contrast checking, and RYB paint-style color mixing. Build accessible, on-brand color systems for web and UI.',
  keywords: [
    'color tools',
    'palette generator',
    'contrast checker',
    'color mixing simulator',
    'WCAG',
    'accessibility',
    'hex codes',
  ],
});

export default function ToolsPage() {
  return <ToolsPageClient />;
}
