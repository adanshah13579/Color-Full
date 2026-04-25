import HomeClient from './HomeClient';
import { buildPageMetadata } from '../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/',
  title: 'Advanced Color Tools for Modern Designers',
  description:
    'Professional color tools for designers and developers. Generate accessible palettes, check WCAG contrast, mix colors with RYB paint logic, and explore color guides.',
  keywords: [
    'color tools',
    'palette generator',
    'contrast checker',
    'color mixing',
    'WCAG',
    'design system',
    'hex codes',
  ],
});

export default function Home() {
  return <HomeClient />;
}
