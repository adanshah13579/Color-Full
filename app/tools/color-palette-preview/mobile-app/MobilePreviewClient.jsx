'use client';

import PaletteGeneratorBox from '../../../components/PaletteGeneratorBox';
import PhoneFrame from '../components/PhoneFrame';
import ScaledPreview from '../components/ScaledPreview';
import MobileAppMockup from '../mockups/MobileAppMockup';
import { PREVIEW_NAV_LINKS } from '../constants';

const PHONE_WIDTH = 280;
const PHONE_HEIGHT = 580;

export default function MobilePreviewClient() {
  return (
    <div className="max-w-7xl mx-auto">
      <PaletteGeneratorBox previewLinks={PREVIEW_NAV_LINKS} separatePreview splitLayout>
        {(colors) => (
          <div className="rounded-xl bg-gray-100 dark:bg-gray-900/40 p-4 sm:p-6 w-full min-h-[600px] flex items-center justify-center">
            <ScaledPreview designWidth={PHONE_WIDTH} designHeight={PHONE_HEIGHT} centered>
              <PhoneFrame>
                <MobileAppMockup colors={colors} />
              </PhoneFrame>
            </ScaledPreview>
          </div>
        )}
      </PaletteGeneratorBox>
    </div>
  );
}
