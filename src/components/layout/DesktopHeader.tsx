'use client';

import React, { useState, useEffect } from 'react';
import { weddingData } from '@/data/wedding';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Story', href: '#story' },
  { name: 'Ceremony', href: '#ceremony' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Venue', href: '#venue' },
];

export default function DesktopHeader() {
  const { bride, groom } = weddingData.couple;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'h-20 bg-primary-container/95 backdrop-blur-md shadow-maroon border-b border-secondary-fixed/10' : 'h-24 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-12 flex items-center justify-between">
        
        {/* Monogram / Names */}
        <div className="font-display text-2xl text-secondary-fixed tracking-widest uppercase flex items-center gap-2">
          <span>{bride.name[0]}</span>
          <span className="italic text-xl -rotate-3">&</span>
          <span>{groom.name[0]}</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-label text-sm uppercase tracking-widest transition-colors ${
                scrolled ? 'text-on-primary hover:text-secondary-fixed' : 'text-on-primary/90 hover:text-secondary-fixed'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Brand Label */}
        <div className={`font-label text-xs uppercase tracking-[0.3em] ${
          scrolled ? 'text-secondary-fixed/70' : 'text-on-primary/60'
        }`}>
          A Royal Union
        </div>

      </div>
    </header>
  );
}
