'use client';

import React, { useState, useEffect } from 'react';
import MobileHeader from '@/components/layout/MobileHeader';
import DesktopHeader from '@/components/layout/DesktopHeader';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import HeroSection from '@/components/sections/HeroSection';
import CoupleSection from '@/components/sections/CoupleSection';
import CeremonySection from '@/components/sections/CeremonySection';
import CinematicJourneySection from '@/components/sections/CinematicJourneySection';
import GallerySection from '@/components/sections/GallerySection';
import VenueSection from '@/components/sections/VenueSection';
import BlessingSection from '@/components/sections/BlessingSection';
import WeddingIntro from '@/components/intro/WeddingIntro';
import FloatingPetals from '@/components/ui/FloatingPetals';
import MusicControl from '@/components/ui/MusicControl';

export default function ClientPageWrapper() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [introComplete]);

  return (
    <>
      {!introComplete && <WeddingIntro onComplete={() => setIntroComplete(true)} />}
      
      <div 
        className="w-full flex flex-col pb-[80px] lg:pb-0 relative"
        style={{ 
          opacity: introComplete ? 1 : 0,
          pointerEvents: introComplete ? 'auto' : 'none',
          transition: 'opacity 1s ease-in-out'
        }}
      >
        {introComplete && (
          <>
            <MobileHeader />
            <DesktopHeader />
          </>
        )}
        
        {/* Global floating petals layer */}
        {introComplete && <FloatingPetals count={14} intensity="subtle" />}
        
        <HeroSection />
        <CoupleSection />
        <CeremonySection />
        <CinematicJourneySection />
        <GallerySection />
        <VenueSection />
        <BlessingSection />
      </div>

      {introComplete && <MobileBottomNav />}
      <MusicControl showUI={introComplete} />
    </>
  );
}
