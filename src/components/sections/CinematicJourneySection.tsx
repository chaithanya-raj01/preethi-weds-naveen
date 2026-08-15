'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { easings, durations } from '@/lib/motion';

export default function CinematicJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section 
      id="journey" 
      ref={containerRef}
      className="relative w-full bg-[#1a0305] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d080b]/50 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#eab308]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durations.standard }}
            className="font-label text-label-md uppercase tracking-[0.3em] text-[#eab308] mb-4"
          >
            A Cinematic Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durations.elegant, delay: 0.2 }}
            className="font-display text-4xl lg:text-5xl text-[#ffe088] drop-shadow-md"
          >
            Pre-Wedding Moments
          </motion.h3>
        </div>

        {/* Video Grid Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Left Video: Beach Shoot */}
          <motion.div 
            style={{ y: y1 }}
            className="w-full lg:w-5/12 relative group"
          >
            <motion.div 
              initial={{ opacity: 0, x: -30, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: easings.cinematic }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden border-4 border-[#eab308]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-[#eab308]/60 transition-colors duration-700"
            >
              <div className="absolute inset-0 bg-[#eab308]/10 mix-blend-overlay z-10 pointer-events-none" />
              <video 
                src="/wedding-assets/videos/beach pre wedding shoot.mp4"
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Elegant Caption */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-[#2d080b] border border-[#eab308]/40 px-6 py-4 rounded-xl shadow-xl z-20"
            >
              <p className="font-display text-xl text-[#ffe088]">By the waves...</p>
            </motion.div>
          </motion.div>

          {/* Center Ornament (Desktop only) */}
          <div className="hidden lg:flex flex-col items-center justify-center w-2/12 space-y-8 text-[#eab308]/50">
             <div className="h-32 w-px bg-gradient-to-b from-transparent to-[#eab308]/50" />
             <span className="font-display italic text-3xl text-[#ffe088]">&</span>
             <div className="h-32 w-px bg-gradient-to-t from-transparent to-[#eab308]/50" />
          </div>

          {/* Right Video: Bike Shoot */}
          <motion.div 
            style={{ y: y2 }}
            className="w-full lg:w-5/12 relative group mt-12 lg:mt-0"
          >
            <motion.div 
              initial={{ opacity: 0, x: 30, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.3, ease: easings.cinematic }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden border-4 border-[#eab308]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-[#eab308]/60 transition-colors duration-700"
            >
              <div className="absolute inset-0 bg-[#eab308]/10 mix-blend-overlay z-10 pointer-events-none" />
              <video 
                src="/wedding-assets/videos/pre wedding shoot bike.mp4"
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Elegant Caption */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 1 }}
              className="absolute -top-6 -left-6 lg:-left-10 bg-[#2d080b] border border-[#eab308]/40 px-6 py-4 rounded-xl shadow-xl z-20"
            >
              <p className="font-display text-xl text-[#ffe088]">Our endless ride.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
