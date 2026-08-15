'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { weddingData, assets } from '@/data/wedding';
import FloatingParticles from '../ui/FloatingParticles';
import SacredDayDisplay from '../ui/SacredDayDisplay';
import KolamMotif from '../icons/KolamMotif';
import { durations, easings } from '@/lib/motion';

export default function HeroSection() {
  const { bride, groom } = weddingData.couple;
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Desktop mouse parallax
  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  // Scroll Parallax Effects for cinematic exit
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.05]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const templeY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textExitY = useTransform(scrollYProgress, [0, 0.8], ['0%', '-50%']);
  const textExitOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const parallaxBgScale = prefersReducedMotion ? 1 : bgScale;
  const parallaxTempleY = prefersReducedMotion ? '0%' : templeY;

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen w-full bg-primary flex flex-col items-center justify-start overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      {/* BACKGROUND LAYERS */}
      <motion.div 
        className="absolute inset-0 z-0 origin-top"
        style={{ scale: parallaxBgScale, opacity: bgOpacity }}
      >
        {/* Dark Base to Warm Glow */}
        <div className="absolute inset-0 bg-maroon-gradient opacity-90"></div>
        
        {/* Radial golden illumination — LAYER 1 (deepest, barely moves) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: durations.epic, ease: easings.cinematic }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(254,214,91,0.1)_0%,transparent_60%)] pointer-events-none"
          style={{ 
            transform: prefersReducedMotion ? undefined : `translate3d(${mouseOffset.x * -1}px, ${mouseOffset.y * -1}px, 0)` 
          }}
        ></motion.div>
        
        {/* Temple illustration overlay — LAYER 2 (moves slightly more) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: durations.epic, delay: 0.3, ease: easings.cinematic }}
          className="absolute inset-0 mix-blend-luminosity"
          style={{ 
            y: parallaxTempleY,
            transform: prefersReducedMotion ? undefined : `translate3d(${mouseOffset.x * -2}px, ${mouseOffset.y * -2}px, 0)`
          }}
        >
          <Image
            src={assets.devotional.temple}
            alt="Temple Background"
            fill
            className="object-cover object-bottom"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Mandala SVG — LAYER 3 (SLOW 75s rotation + mouse parallax) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: durations.epic, delay: 0.5 }}
        className="hidden lg:block absolute inset-0 z-0 pointer-events-none"
        style={{
          transform: prefersReducedMotion ? undefined : `translate3d(${mouseOffset.x * -3}px, ${mouseOffset.y * -3}px, 0)`
        }}
      >
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-secondary-fixed"
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
        >
          <KolamMotif />
        </motion.div>
      </motion.div>

      {/* Gold particles — LAYER 4 */}
      {!prefersReducedMotion && <FloatingParticles count={10} />}

      {/* CONTENT CONTAINER — LAYER 5-7 (foreground, strongest parallax) */}
      <div 
        className="relative z-10 w-full max-w-content mx-auto px-6 flex flex-col items-center"
        style={{
          transform: prefersReducedMotion ? undefined : `translate3d(${mouseOffset.x * 3}px, ${mouseOffset.y * 2}px, 0)`
        }}
      >
        {/* Names — fast entrance (intro already handled the delay) */}
        <motion.div 
          style={{ y: textExitY, opacity: textExitOpacity }}
          className="flex flex-col items-center text-center mb-14 lg:mb-20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easings.standard }}
            className="font-display text-display-lg-mobile lg:text-display-hero text-on-primary tracking-widest uppercase lg:normal-case text-shadow-deep"
          >
            {bride.name}
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easings.standard }}
            className="font-display italic text-secondary-fixed text-4xl lg:text-5xl my-2 -rotate-3"
          >
            &
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easings.standard }}
            className="font-display text-display-lg-mobile lg:text-display-hero text-on-primary tracking-widest uppercase lg:normal-case text-shadow-deep"
          >
            {groom.name}
          </motion.h1>
        </motion.div>

        {/* The Sacred Day Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SacredDayDisplay />
        </motion.div>

      </div>
    </section>
  );
}
