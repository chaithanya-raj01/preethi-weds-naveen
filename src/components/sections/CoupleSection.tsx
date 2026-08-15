'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { weddingData } from '@/data/wedding';
import ArchPortrait from '../ui/ArchPortrait';
import OrnamentDivider from '../ui/OrnamentDivider';
import { fadeUp, staggerContainer, durations, easings } from '@/lib/motion';
import KolamMotif from '../icons/KolamMotif';
import FloatingPetals from '../ui/FloatingPetals';
import FloatingParticles from '../ui/FloatingParticles';

export default function CoupleSection() {
  const { bride, groom } = weddingData.couple;
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle subtle mouse parallax for the background layers
  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imgParallaxLeft = useTransform(scrollYProgress, [0, 1], ['-10px', '10px']);
  const imgParallaxRight = useTransform(scrollYProgress, [0, 1], ['10px', '-10px']);

  const parallaxL = prefersReducedMotion ? '0px' : imgParallaxLeft;
  const parallaxR = prefersReducedMotion ? '0px' : imgParallaxRight;

  return (
    <section id="story" ref={containerRef} className="w-full bg-[#fbf8f1] relative overflow-hidden pt-24 pb-20 lg:py-32 px-6">
      
      {/* ========================================================= */}
      {/* ANIMATED BACKGROUND LAYERS - BRIDE & GROOM SECTION ONLY   */}
      {/* ========================================================= */}
      
      {/* Z-INDEX 1: Paper Texture (Subtle Noise) */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>

      {/* Z-INDEX 2: Soft Light Movement (Sweep) */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute top-0 bottom-0 w-[200%] bg-gradient-to-r from-transparent via-[#fff9e6] to-transparent opacity-[0.15] z-[2] pointer-events-none mix-blend-screen"
          animate={{ x: ['-50%', '0%', '-50%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Z-INDEX 3: Faint Lotus/Floral Artwork at Edges */}
      <motion.div 
        className="absolute inset-0 z-[3] pointer-events-none opacity-[0.05]"
        style={{ transform: prefersReducedMotion ? 'none' : `translate3d(${mousePos.x * -4}px, ${mousePos.y * -4}px, 0)` }}
      >
        {/* Top Left Floral */}
        <div className="absolute -top-10 -left-10 w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#8b5a2b]"><path d="M50 0 Q60 40 100 50 Q60 60 50 100 Q40 60 0 50 Q40 40 50 0 Z"/></svg>
        </div>
        {/* Top Right Floral */}
        <div className="absolute -top-10 -right-10 w-64 h-64 rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#8b5a2b]"><path d="M50 0 Q60 40 100 50 Q60 60 50 100 Q40 60 0 50 Q40 40 50 0 Z"/></svg>
        </div>
        {/* Bottom Left Floral */}
        <div className="absolute -bottom-10 -left-10 w-64 h-64 -rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#8b5a2b]"><path d="M50 0 Q60 40 100 50 Q60 60 50 100 Q40 60 0 50 Q40 40 50 0 Z"/></svg>
        </div>
        {/* Bottom Right Floral */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rotate-180">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#8b5a2b]"><path d="M50 0 Q60 40 100 50 Q60 60 50 100 Q40 60 0 50 Q40 40 50 0 Z"/></svg>
        </div>
      </motion.div>

      {/* Z-INDEX 4: Faint Rotating Mandala */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-[4] pointer-events-none opacity-[0.08] text-[#8b5a2b]"
        style={{ transform: prefersReducedMotion ? 'translate(-50%, -50%)' : `translate(calc(-50% + ${mousePos.x * -2}px), calc(-50% + ${mousePos.y * -2}px))` }}
      >
        <motion.div 
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full"
        >
          <KolamMotif />
        </motion.div>
      </motion.div>

      {/* Z-INDEX 5: Slow Floating Petals (Contained to this section) */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {!prefersReducedMotion && <FloatingPetals count={8} intensity="subtle" />}
      </div>

      {/* Z-INDEX 6: Gold Dust Particles */}
      <div className="absolute inset-0 z-[6] pointer-events-none overflow-hidden" style={{ transform: prefersReducedMotion ? 'none' : `translate3d(${mousePos.x * 4}px, ${mousePos.y * 4}px, 0)` }}>
        {!prefersReducedMotion && <FloatingParticles count={6} color="#d4af37" />}
      </div>


      {/* ========================================================= */}
      {/* Z-INDEX 10: EXISTING FOREGROUND CONTENT (UNCHANGED LAYOUT)*/}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-content mx-auto">
        
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 lg:mb-24 flex flex-col items-center"
        >
          <motion.div className="font-display text-headline-lg lg:text-display-lg text-on-surface mb-6 flex flex-col sm:block">
            <motion.span 
              initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 15 }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)', opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: easings.cinematic }}
              className="inline-block"
            >
              TWO HEARTS,&nbsp;
            </motion.span>
            <motion.span 
              initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 15 }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)', opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: easings.cinematic }}
              className="mt-2 sm:mt-0 text-surface-tint inline-block"
            >
              ONE DESTINY
            </motion.span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.6, ease: easings.standard }}
            className="font-telugu text-lg lg:text-xl text-surface-tint tracking-wide opacity-90"
          >
            {weddingData.blessings.teluguSubtext}
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.8, ease: easings.cinematic }}
            className="mt-8 origin-center w-full max-w-[200px]"
          >
            <OrnamentDivider />
          </motion.div>
        </motion.div>

        {/* Couple Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 relative">
          
          {/* Ampersand Connector (Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durations.elegant, delay: 0.6, ease: easings.cinematic }}
            className="hidden lg:flex absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-surface-container border border-secondary-fixed/30 items-center justify-center shadow-lg z-20"
          >
            {/* Subtle Floral Ornament Behind & */}
            <motion.div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              animate={prefersReducedMotion ? {} : { rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#d4af37] stroke-1">
                <circle cx="50" cy="50" r="45" strokeDasharray="4 4" />
                <path d="M50 5 Q55 25 75 25 Q55 25 50 45 Q45 25 25 25 Q45 25 50 5 Z M50 95 Q55 75 75 75 Q55 75 50 55 Q45 75 25 75 Q45 75 50 95 Z" />
              </svg>
            </motion.div>
            
            {/* Animated & Symbol */}
            <motion.span 
              className="font-display italic text-4xl text-secondary-fixed-dim -rotate-3"
              animate={prefersReducedMotion ? {} : { 
                scale: [1, 1.05, 1],
                textShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 15px rgba(212,175,55,0.4)', '0 0 0px rgba(212,175,55,0)']
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              &
            </motion.span>
          </motion.div>

          {/* Bride */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center w-full lg:w-1/2 max-w-sm"
          >
            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: easings.luxurious }}
              style={{ y: parallaxL }} 
              className="w-full mb-8 origin-bottom"
            >
              <motion.div 
                initial={{ scale: 1.05 }} 
                whileInView={{ scale: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: easings.luxurious }}
              >
                <ArchPortrait src={bride.photo} alt={bride.name} objectPosition="right center" />
              </motion.div>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center space-y-3 w-full">
              <motion.h3 variants={fadeUp} className="font-display text-headline-md lg:text-headline-lg text-on-surface uppercase tracking-wider">
                {bride.name}
              </motion.h3>
              <motion.p variants={fadeUp} className="font-label text-sm uppercase tracking-widest text-surface-tint font-bold">
                The Bride
              </motion.p>
              <motion.div variants={fadeUp} className="pt-4 border-t border-outline-variant/30 w-3/4 mx-auto">
                <p className="font-body text-on-surface-variant text-sm italic">Beloved daughter of</p>
                <p className="font-body text-on-surface font-medium mt-1">{bride.father} & {bride.mother}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Ampersand Connector (Mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: durations.standard, ease: easings.standard }}
            className="lg:hidden relative w-16 h-16 rounded-full bg-surface-container border border-secondary-fixed/30 flex items-center justify-center shadow-md my-4 z-20"
          >
            <motion.div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              animate={prefersReducedMotion ? {} : { rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#d4af37] stroke-1">
                <circle cx="50" cy="50" r="45" strokeDasharray="4 4" />
                <path d="M50 5 Q55 25 75 25 Q55 25 50 45 Q45 25 25 25 Q45 25 50 5 Z M50 95 Q55 75 75 75 Q55 75 50 55 Q45 75 25 75 Q45 75 50 95 Z" />
              </svg>
            </motion.div>
            <motion.span 
              className="font-display italic text-3xl text-secondary-fixed-dim -rotate-3"
              animate={prefersReducedMotion ? {} : { 
                scale: [1, 1.05, 1],
                textShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 15px rgba(212,175,55,0.4)', '0 0 0px rgba(212,175,55,0)']
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              &
            </motion.span>
          </motion.div>

          {/* Groom - Staggered slightly after bride */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center w-full lg:w-1/2 max-w-sm"
          >
            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2, ease: easings.luxurious }}
              style={{ y: parallaxR }} 
              className="w-full mb-8 origin-bottom"
            >
              <motion.div 
                initial={{ scale: 1.05 }} 
                whileInView={{ scale: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.2, ease: easings.luxurious }}
              >
                <ArchPortrait src={groom.photo} alt={groom.name} objectPosition="left center" />
              </motion.div>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center space-y-3 w-full">
              <motion.h3 variants={fadeUp} className="font-display text-headline-md lg:text-headline-lg text-on-surface uppercase tracking-wider">
                {groom.name}
              </motion.h3>
              <motion.p variants={fadeUp} className="font-label text-sm uppercase tracking-widest text-surface-tint font-bold">
                The Groom
              </motion.p>
              <motion.div variants={fadeUp} className="pt-4 border-t border-outline-variant/30 w-3/4 mx-auto">
                <p className="font-body text-on-surface-variant text-sm italic">Beloved son of</p>
                <p className="font-body text-on-surface font-medium mt-1">{groom.mother} & {groom.father}</p>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
