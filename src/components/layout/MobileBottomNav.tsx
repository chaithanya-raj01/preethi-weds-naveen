'use client';

import React, { useEffect, useState } from 'react';
import { Home, BookHeart, CalendarHeart, Image as ImageIcon, MapPin } from 'lucide-react';

const navItems = [
  { id: 'hero', name: 'Home', icon: Home },
  { id: 'story', name: 'Story', icon: BookHeart },
  { id: 'ceremony', name: 'Ceremony', icon: CalendarHeart },
  { id: 'gallery', name: 'Gallery', icon: ImageIcon },
  { id: 'venue', name: 'Venue', icon: MapPin },
];

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface-container/90 backdrop-blur-md pb-safe z-50 border-t border-outline-variant/30 shadow-[0_-4px_20px_rgba(31,0,0,0.05)]">
      <div className="flex items-center justify-between px-4 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`flex flex-col items-center gap-1.5 p-2 transition-colors ${
                isActive ? 'text-secondary-fixed-dim' : 'text-on-surface-variant/70'
              }`}
            >
              <div className="relative">
                <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary-fixed-dim"></div>
                )}
              </div>
              <span className="font-label text-[10px] uppercase tracking-widest font-semibold">
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
