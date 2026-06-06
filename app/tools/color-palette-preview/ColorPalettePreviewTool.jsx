'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import ToolHexInput from '../components/ToolHexInput';
import DeviceFrame from './components/DeviceFrame';
import ScaledPreview from './components/ScaledPreview';
import DashboardMockup from './mockups/DashboardMockup';
import LandingPageMockup from './mockups/LandingPageMockup';
import MobileAppMockup from './mockups/MobileAppMockup';
import PhoneFrame from './components/PhoneFrame';
import {
  applyDarkModeSwap,
  buildShareUrl,
  DEFAULT_PALETTE,
  formatPaletteCssVariables,
  formatPaletteTailwind,
  generateHarmoniousPalette,
  PALETTE_KEYS,
  parsePaletteFromSearchParams,
  resolvePaletteColors,
} from '../../../lib/paletteUtils';

const PALETTE_LABELS = ['Primary', 'Secondary', 'Accent', 'Background', 'Text'];

const PREVIEW_TABS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'landing', label: 'Landing Page' },
  { id: 'mobile', label: 'Mobile App' },
];

export default function ColorPalettePreviewTool() {
  const [palette, setPalette] = useState(DEFAULT_PALETTE);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkModePreview, setDarkModePreview] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = parsePaletteFromSearchParams(params);
    if (fromUrl) setPalette(fromUrl);
  }, []);

  const showCopied = useCallback((key) => {
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  }, []);

  const copyText = useCallback(
    async (text, key) => {
      try {
        await navigator.clipboard.writeText(text);
        showCopied(key);
      } catch (e) {
        console.error(e);
      }
    },
    [showCopied]
  );

  const updateColor = (key, rawValue) => {
    const cleaned = rawValue.replace(/[^a-fA-F0-9]/g, '').slice(0, 6).toUpperCase();
    setPalette((prev) => ({ ...prev, [key]: cleaned }));
  };

  const handlePickerChange = (key, e) => {
    setPalette((prev) => ({
      ...prev,
      [key]: e.target.value.replace('#', '').toUpperCase(),
    }));
  };

  const previewHex = (key) => {
    const hex = palette[key];
    return hex.length === 6 ? `#${hex}` : `#${DEFAULT_PALETTE[key]}`;
  };

  const baseColors = useMemo(() => resolvePaletteColors(palette), [palette]);

  const colors = useMemo(() => {
    return darkModePreview ? applyDarkModeSwap(baseColors) : baseColors;
  }, [baseColors, darkModePreview]);

  const handleRandomPalette = () => {
    setPalette(generateHarmoniousPalette());
    setDarkModePreview(false);
  };

  const handleReset = () => {
    setPalette({ ...DEFAULT_PALETTE });
    setDarkModePreview(false);
  };

  const handleShare = () => copyText(buildShareUrl(palette), 'share');

  const handleCopyCss = () => copyText(formatPaletteCssVariables(baseColors), 'css');

  const handleCopyTailwind = () => copyText(formatPaletteTailwind(baseColors), 'tailwind');

  const outlineBtn =
    'inline-flex items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors';

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
      <section className="w-full lg:w-[40%] lg:shrink-0">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 sm:p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Your Palette</h2>

          <div className="space-y-4">
            {PALETTE_KEYS.map((key, index) => (
              <ToolHexInput
                key={key}
                id={`palette-${key}`}
                label={PALETTE_LABELS[index]}
                value={palette[key]}
                onChange={(e) => updateColor(key, e.target.value)}
                onPickerChange={(e) => handlePickerChange(key, e)}
                previewHex={previewHex(key)}
                placeholder={DEFAULT_PALETTE[key]}
                accent="purple"
                pickerId={`palette-picker-${key}`}
              />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/40 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Dark mode preview</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Swaps Background and Text in mockups</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={darkModePreview}
              onClick={() => setDarkModePreview((prev) => !prev)}
              className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${
                darkModePreview ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                  darkModePreview ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleRandomPalette}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-sm font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all hover:shadow-lg"
              >
                Generate Random Palette
              </button>
              <button type="button" onClick={handleReset} className={`flex-1 ${outlineBtn}`}>
                Reset to Default
              </button>
            </div>

            <button type="button" onClick={handleShare} className={`w-full ${outlineBtn}`}>
              {copiedKey === 'share' ? 'Copied!' : 'Share This Palette'}
            </button>

            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={handleCopyCss} className={`flex-1 ${outlineBtn}`}>
                {copiedKey === 'css' ? 'Copied!' : 'Copy Palette'}
              </button>
              <button type="button" onClick={handleCopyTailwind} className={`flex-1 ${outlineBtn}`}>
                {copiedKey === 'tailwind' ? 'Copied!' : 'Copy as Tailwind'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-[60%] lg:min-w-0">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 sm:p-6 h-full flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Preview</h2>
            {darkModePreview ? (
              <span className="text-xs font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 px-2.5 py-1 rounded-full">
                Dark mode
              </span>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2 mb-5" role="tablist" aria-label="Preview type">
            {PREVIEW_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            aria-label={`${PREVIEW_TABS.find((t) => t.id === activeTab)?.label} preview`}
            className="flex-1 min-h-[420px] rounded-xl bg-gray-100 dark:bg-gray-900/40 p-3 sm:p-4"
          >
            {activeTab === 'dashboard' ? (
              <DeviceFrame title="dashboard.app">
                <ScaledPreview designWidth={880} designHeight={520}>
                  <DashboardMockup colors={colors} />
                </ScaledPreview>
              </DeviceFrame>
            ) : activeTab === 'landing' ? (
              <DeviceFrame title="brand.com">
                <ScaledPreview designWidth={880} designHeight={520}>
                  <LandingPageMockup colors={colors} />
                </ScaledPreview>
              </DeviceFrame>
            ) : (
              <ScaledPreview designWidth={880} designHeight={520}>
                <div className="w-[880px] h-[520px] flex items-center justify-center">
                  <PhoneFrame>
                    <MobileAppMockup colors={colors} />
                  </PhoneFrame>
                </div>
              </ScaledPreview>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
