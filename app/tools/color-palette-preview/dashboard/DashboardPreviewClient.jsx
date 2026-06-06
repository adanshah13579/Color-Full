'use client';

import PaletteGeneratorBox from '../../../components/PaletteGeneratorBox';
import DeviceFrame from '../components/DeviceFrame';
import ScaledPreview from '../components/ScaledPreview';
import DashboardMockup from '../mockups/DashboardMockup';
import { PREVIEW_NAV_LINKS } from '../constants';

export default function DashboardPreviewClient() {
  return (
    <div className="max-w-6xl mx-auto">
      <PaletteGeneratorBox previewLinks={PREVIEW_NAV_LINKS} separatePreview>
        {(colors) => (
          <div className="rounded-xl bg-gray-100 dark:bg-gray-900/40 p-3 sm:p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Tip: click sidebar items inside the mockup to switch between Overview, Analytics, Reports, Users, and
              Settings — your palette colors apply to every page.
            </p>
            <DeviceFrame url="https://dashboard.app">
              <ScaledPreview designWidth={960} designHeight={560}>
                <DashboardMockup colors={colors} />
              </ScaledPreview>
            </DeviceFrame>
          </div>
        )}
      </PaletteGeneratorBox>
    </div>
  );
}
