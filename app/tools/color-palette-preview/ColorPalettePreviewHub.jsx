'use client';

import Link from 'next/link';
import PaletteGeneratorBox, { usePaletteFromUrl } from '../../components/PaletteGeneratorBox';
import { appendPaletteToHref } from '../../../lib/paletteUtils';
import {
  DashboardThumbnail,
  LandingPageThumbnail,
  MobileAppThumbnail,
} from './PreviewCardThumbnails';

const PREVIEW_LINKS = [
  { label: 'Dashboard', href: '/tools/color-palette-preview/dashboard' },
  { label: 'Landing Page', href: '/tools/color-palette-preview/landing-page' },
  { label: 'Mobile App', href: '/tools/color-palette-preview/mobile-app' },
];

const PREVIEW_CARDS = [
  {
    title: 'Dashboard Color Preview',
    description: 'See your palette on an admin dashboard with sidebar, stats cards and charts',
    href: '/tools/color-palette-preview/dashboard',
    Thumbnail: DashboardThumbnail,
  },
  {
    title: 'Landing Page Color Preview',
    description: 'See your palette on a marketing landing page with hero, features and CTA sections',
    href: '/tools/color-palette-preview/landing-page',
    Thumbnail: LandingPageThumbnail,
  },
  {
    title: 'Mobile App Color Preview',
    description: 'See your palette on a mobile app UI with navigation, cards and list items',
    href: '/tools/color-palette-preview/mobile-app',
    Thumbnail: MobileAppThumbnail,
  },
];

function PreviewCards() {
  const colors = usePaletteFromUrl();
  const paletteRaw = {
    primary: colors.primary.slice(1),
    secondary: colors.secondary.slice(1),
    accent: colors.accent.slice(1),
    background: colors.background.slice(1),
    text: colors.text.slice(1),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {PREVIEW_CARDS.map(({ title, description, href, Thumbnail }) => (
        <Link
          key={href}
          href={appendPaletteToHref(href, paletteRaw)}
          className="group block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
        >
          <div className="p-4 pb-0">
            <Thumbnail />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
            <span className="inline-block mt-4 text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:underline">
              Open preview →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function ColorPalettePreviewHub() {
  return (
    <div className="max-w-6xl mx-auto">
      <PaletteGeneratorBox previewLinks={PREVIEW_LINKS} />
      <PreviewCards />
    </div>
  );
}
