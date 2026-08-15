import React from 'react';
import Image from 'next/image';
import CornerOrnament from '../icons/CornerOrnament';

interface ArchPortraitProps {
  src: string;
  alt: string;
  objectPosition?: string;
  className?: string;
}

export default function ArchPortrait({ src, alt, objectPosition = 'center', className = '' }: ArchPortraitProps) {
  return (
    <div className={`arch-portrait-frame aspect-[3/4] max-w-xs mx-auto ${className}`}>
      {/* Corner Ornaments */}
      <div className="absolute -top-4 -left-4 w-16 h-16 text-secondary-fixed z-10 drop-shadow-md">
        <CornerOrnament position="top-left" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 text-secondary-fixed z-10 drop-shadow-md">
        <CornerOrnament position="top-right" />
      </div>
      
      {/* Decorative Border Layer */}
      <div className="absolute inset-2 border-2 border-outline-variant/30 rounded-[50%_50%_0_0] z-10 pointer-events-none"></div>

      {/* Image Container */}
      <div className="arch-inner">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
          style={{ objectPosition }}
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 vignette pointer-events-none rounded-[50%_50%_0_0]"></div>
      </div>
      
      {/* Bottom Corner Accents */}
      <div className="corner-accent-bl"></div>
      <div className="corner-accent-br"></div>
    </div>
  );
}
