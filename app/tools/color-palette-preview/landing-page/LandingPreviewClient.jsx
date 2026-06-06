'use client';

import PaletteGeneratorBox from '../../../components/PaletteGeneratorBox';
import DeviceFrame from '../components/DeviceFrame';
import ScaledPreview from '../components/ScaledPreview';
import LandingPageMockup from '../mockups/LandingPageMockup';
import { PREVIEW_NAV_LINKS } from '../constants';

export default function LandingPreviewClient() {
  return (
    <div className="max-w-6xl mx-auto">
      <PaletteGeneratorBox previewLinks={PREVIEW_NAV_LINKS} separatePreview>
        {(colors) => (
          <div className="rounded-xl bg-gray-100 dark:bg-gray-900/40 p-3 sm:p-4">
            <DeviceFrame url="https://brand.com">
              <ScaledPreview designWidth={960} designHeight={720}>
                <LandingPageMockup colors={colors} />
              </ScaledPreview>
            </DeviceFrame>
          </div>
        )}
      </PaletteGeneratorBox>
    </div>
  );
}
