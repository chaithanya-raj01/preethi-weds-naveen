'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { weddingData } from '@/data/wedding';
import { fadeUp, easings } from '@/lib/motion';
import Lightbox from '../ui/Lightbox';

/** 3D Tilt Card for gallery photos */
function TiltCard({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`);
  }, [prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ transform, transition: 'transform 0.4s ease-out', transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function GallerySection() {
  const { gallery } = weddingData;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="w-full bg-surface pt-24 pb-20 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-content mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="font-display text-headline-lg lg:text-display-lg text-on-surface"
          >
            Moments We Cherish
          </motion.h2>
        </div>

        {/* Masonry / Editorial Grid with 3D Tilt */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 max-w-6xl mx-auto h-[1200px] lg:h-[700px]">
          
          {/* Left Side: Large Portrait Feature */}
          <TiltCard
            className="relative w-full lg:w-1/2 h-full rounded-[2rem] overflow-hidden group shadow-lg cursor-pointer flex-1"
            onClick={() => openLightbox(0)}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: easings.cinematic }}
              className="w-full h-full relative"
            >
              <Image
                src={gallery[0].src}
                alt={gallery[0].caption}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500"></div>
              <div className="absolute inset-0 border-2 border-secondary-fixed/0 group-hover:border-secondary-fixed/40 transition-colors duration-500 rounded-[2rem] pointer-events-none m-2"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="font-display text-white text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{gallery[0].caption}</span>
              </div>
            </motion.div>
          </TiltCard>

          {/* Right Side: Stacked */}
          <div className="w-full lg:w-1/2 h-full flex flex-col gap-4 lg:gap-8 flex-1">
            
            {/* Top Right */}
            <TiltCard
              className="relative w-full h-1/2 rounded-[2rem] overflow-hidden group shadow-lg cursor-pointer"
              onClick={() => openLightbox(1)}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: easings.cinematic }}
                className="w-full h-full relative"
              >
                <Image
                  src={gallery[1].src}
                  alt={gallery[1].caption}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 25%' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500"></div>
                <div className="absolute inset-0 border-2 border-secondary-fixed/0 group-hover:border-secondary-fixed/40 transition-colors duration-500 rounded-[2rem] pointer-events-none m-2"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="font-display text-white text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{gallery[1].caption}</span>
                </div>
              </motion.div>
            </TiltCard>

            {/* Bottom Right */}
            {gallery.length > 2 && (
              <TiltCard
                className="relative w-full h-1/2 rounded-[2rem] overflow-hidden group shadow-lg cursor-pointer"
                onClick={() => openLightbox(2)}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: easings.cinematic }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={gallery[2].src}
                    alt={gallery[2].caption}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 35%' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500"></div>
                  <div className="absolute inset-0 border-2 border-secondary-fixed/0 group-hover:border-secondary-fixed/40 transition-colors duration-500 rounded-[2rem] pointer-events-none m-2"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="font-display text-white text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{gallery[2].caption}</span>
                  </div>
                </motion.div>
              </TiltCard>
            )}
          </div>
        </div>
      </div>

      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        images={gallery} 
        currentIndex={currentIndex} 
        onNavigate={setCurrentIndex} 
      />
    </section>
  );
}
