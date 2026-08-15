'use client';

import React from 'react';
import { weddingData } from '@/data/wedding';
import CountdownTimer from './CountdownTimer';
import ScratchToReveal from './ScratchToReveal';

export default function SacredDayDisplay({ className = '' }: { className?: string }) {
  const { date } = weddingData.wedding;
  const { muhurtham, lagnam } = weddingData.ceremony;

  return (
    <div className={`flex flex-col items-center justify-center space-y-6 ${className}`}>
      <div className="text-secondary-fixed font-label text-label-md uppercase tracking-[0.3em] opacity-80">
        The Sacred Day
      </div>
      
      <div className="flex items-center justify-center gap-4 text-[#eab308]">
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#eab308]"></div>
        <div className="w-2 h-2 rounded-full bg-[#eab308] shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#eab308]"></div>
      </div>
      
      <div className="flex flex-col items-center text-secondary-fixed text-center space-y-2">
        <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-shadow-gold">{date.day}</span>
        <span className="font-label text-label-md sm:text-base uppercase tracking-widest">{date.month}</span>
        <span className="font-label text-sm sm:text-base tracking-widest">{date.year}</span>
      </div>
      
      <div className="font-display italic text-lg sm:text-xl text-inverse-primary">
        {date.weekday}
      </div>

      <ScratchToReveal className="mt-8 w-full max-w-xs">
        <div className="p-6 border border-outline-variant/30 rounded-xl bg-surface-container-lowest/5 backdrop-blur-sm shadow-maroon w-full flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#eab308]"></div>
            <span className="font-label text-label-sm sm:text-xs uppercase tracking-[0.2em] text-[#eab308] opacity-90">Muhurtham</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#eab308]"></div>
          </div>
          <span className="font-display text-2xl sm:text-3xl text-secondary-fixed">{muhurtham}</span>
          <span className="font-label text-xs sm:text-sm tracking-wider text-inverse-primary opacity-80">{lagnam}</span>
        </div>
      </ScratchToReveal>

      <CountdownTimer />
    </div>
  );
}
