'use client';

import React from 'react';
import { weddingData } from '@/data/wedding';

export default function MobileHeader() {
  const { bride, groom } = weddingData.couple;

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-primary-container/80 backdrop-blur-md z-50 flex items-center justify-center border-b border-secondary-fixed/10">
      <div className="font-display text-secondary-fixed tracking-[0.2em] uppercase text-sm font-semibold">
        {bride.name} & {groom.name}
      </div>
    </header>
  );
}
