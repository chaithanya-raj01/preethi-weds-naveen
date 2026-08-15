'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '@/data/wedding';

type IntroState = 
  | 'IDLE'
  | 'OPENING'       // Flap opens, seal breaks
  | 'PAPER_EMERGE'  // Paper slides up out of the envelope
  | 'NAME_REVEAL'   // Names fade in
  | 'TRANSITIONING' // Paper scales to full screen, envelope fades
  | 'COMPLETE';     // Transition done

interface WeddingIntroProps {
  onComplete: () => void;
}

export default function WeddingIntro({ onComplete }: WeddingIntroProps) {
  const [state, setState] = useState<IntroState>('IDLE');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const hasTriggered = useRef(false);

  // Subtle mouse parallax (idle only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (state !== 'IDLE') return;
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [state]);

  const handleTap = useCallback(() => {
    if (hasTriggered.current || state !== 'IDLE') return;
    hasTriggered.current = true;
    
    // 1. Start Opening Envelope
    setState('OPENING');
    
    // Autoplay music when envelope starts opening
    window.dispatchEvent(new CustomEvent('play-music'));

    // 2. Paper emerges from the envelope
    setTimeout(() => setState('PAPER_EMERGE'), 800);

    // 3. Name subtly fades in
    setTimeout(() => setState('NAME_REVEAL'), 2200);

    // 4. Short cinematic pause, then transition to full site
    setTimeout(() => setState('TRANSITIONING'), 4500);

    // 5. Complete
    setTimeout(() => {
      setState('COMPLETE');
      onComplete();
    }, 6000);
  }, [state, onComplete]);

  if (state === 'COMPLETE') return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ perspective: '1200px', backgroundColor: '#210609' }} // Very dark burgundy background
    >
      {/* SVG Filters for paper edge and noise */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="rough-edge">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.05 0" />
          </filter>
        </defs>
      </svg>

      {/* Background radial glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(100,20,30,0.4) 0%, rgba(33,6,9,1) 80%)' }}
        animate={{ opacity: state === 'TRANSITIONING' ? 0 : 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Main Envelope Container */}
      <motion.div 
        className="relative w-[85vw] max-w-[420px] aspect-[4/3] flex items-end justify-center"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: state === 'IDLE' ? -mousePos.y : 0,
          rotateY: state === 'IDLE' ? mousePos.x : 0,
          y: state === 'PAPER_EMERGE' || state === 'NAME_REVEAL' ? 80 : state === 'TRANSITIONING' ? 300 : 0, // Move down slightly as paper comes out
          opacity: state === 'TRANSITIONING' ? 0 : 1, // Fade out the envelope entirely at the end
        }}
        transition={{
          rotateX: { type: 'spring', stiffness: 50, damping: 20 },
          rotateY: { type: 'spring', stiffness: 50, damping: 20 },
          y: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 1.2, ease: 'easeIn' }
        }}
      >
        {/* ENVELOPE BACK (Inside pocket) */}
        <div className="absolute inset-0 bg-[#350d14] rounded-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] overflow-hidden z-10" />

        {/* IVORY PAPER (The Invitation) */}
        <motion.div
          className="absolute z-20 w-[94%] bg-[#d3cec4] flex items-center justify-center flex-col origin-center"
          style={{ 
            height: '140%', 
            bottom: '2%', // Starts tucked deep inside
            filter: 'url(#rough-edge) drop-shadow(0px -5px 15px rgba(0,0,0,0.3))',
            borderRadius: '4px'
          }}
          animate={{
            y: state === 'PAPER_EMERGE' || state === 'NAME_REVEAL' ? '-45%' : state === 'TRANSITIONING' ? '-30%' : '0%',
            scale: state === 'TRANSITIONING' ? 5 : 1, // Zoom to fill screen
            opacity: state === 'TRANSITIONING' ? 0 : 1, // Fade out to reveal the actual page beneath
          }}
          transition={{
            y: { duration: 1.8, ease: [0.25, 1, 0.5, 1] },
            scale: { duration: 1.5, ease: [0.6, 0.05, 0.1, 1], delay: 0.1 },
            opacity: { duration: 1.0, ease: 'easeIn', delay: 0.5 }
          }}
        >
          {/* Subtle paper noise overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" style={{ filter: 'url(#paper-noise)' }} />

          {/* Name Reveal Text */}
          <motion.div 
            className="flex flex-col items-center justify-center -mt-16 w-full text-center"
            animate={{ 
              opacity: state === 'NAME_REVEAL' ? 1 : 0,
              y: state === 'NAME_REVEAL' ? 0 : 10,
              filter: state === 'NAME_REVEAL' ? 'blur(0px)' : 'blur(4px)'
            }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <h1 className="font-display text-[#3d2e2b] text-2xl sm:text-3xl tracking-widest uppercase" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.4)' }}>
              {weddingData.couple.bride.name} <span className="text-xl mx-2 text-[#6b5853]">&</span> {weddingData.couple.groom.name}
            </h1>
          </motion.div>
        </motion.div>

        {/* ENVELOPE FRONT BOTTOM (Pocket) */}
        <div 
          className="absolute inset-0 z-30 pointer-events-none drop-shadow-[0_-5px_15px_rgba(0,0,0,0.4)]"
          style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 45%, 50% 75%, 0% 45%)' }}
        >
          <div className="w-full h-full bg-[#4a151c] relative">
            <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{ filter: 'url(#paper-noise)' }} />
            {/* Edge highlights */}
            <div className="absolute top-0 left-0 w-full h-full border-t border-[#6b222a] opacity-50" />
          </div>
        </div>
        
        {/* ENVELOPE FRONT SIDES */}
        <div 
          className="absolute inset-0 z-30 pointer-events-none drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          style={{ clipPath: 'polygon(0% 0%, 50% 55%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 50% 55%, 100% 0%)' }}
        >
          <div className="w-full h-full bg-[#431219] relative">
            <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{ filter: 'url(#paper-noise)' }} />
          </div>
        </div>

        {/* ENVELOPE FLAP */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[65%] z-40 origin-top pointer-events-none"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            rotateX: state === 'IDLE' ? 0 : 180,
            zIndex: state === 'IDLE' ? 40 : 5, // Drops behind the paper once opened
          }}
          transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Flap Outside */}
          <div 
            className="absolute inset-0 bg-[#4a151c] flex justify-center drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)]"
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)', backfaceVisibility: 'hidden' }}
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{ filter: 'url(#paper-noise)' }} />
            {/* Edge highlight */}
            <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none" preserveAspectRatio="none">
              <polygon points="1,1 99%,1 50%,99%" fill="none" stroke="#6b222a" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>

          {/* Flap Inside */}
          <div 
            className="absolute inset-0 bg-[#3a0d13]"
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)', backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{ filter: 'url(#paper-noise)' }} />
          </div>
        </motion.div>

        {/* WAX SEAL (Interactive) */}
        <motion.button
          onClick={handleTap}
          className="absolute z-50 w-20 h-20 rounded-full flex items-center justify-center focus:outline-none cursor-pointer"
          style={{ 
            top: '55%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            pointerEvents: state === 'IDLE' ? 'auto' : 'none',
          }}
          animate={{
            opacity: state === 'IDLE' ? 1 : 0,
            scale: state === 'IDLE' ? 1 : 1.2,
            filter: state === 'IDLE' ? 'brightness(1)' : 'brightness(1.5)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          aria-label="Open Invitation"
        >
          {/* Subtle breathing glow */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-[#82151b] opacity-30 blur-[15px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Realistic Wax Seal Image/Element */}
          <div className="relative w-16 h-16 rounded-full bg-[#36070c] shadow-[inset_0_3px_5px_rgba(255,255,255,0.2),0_5px_10px_rgba(0,0,0,0.8)] border-[3px] border-[#250306] flex items-center justify-center overflow-hidden">
            {/* Wax texture / imperfections */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ filter: 'url(#paper-noise)' }} />
            
            {/* Floral impression SVG */}
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#250306] drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)] opacity-90">
              <path fill="currentColor" d="M50 15 C60 15 65 30 50 45 C35 30 40 15 50 15 Z" />
              <path fill="currentColor" d="M50 85 C60 85 65 70 50 55 C35 70 40 85 50 85 Z" />
              <path fill="currentColor" d="M15 50 C15 40 30 35 45 50 C30 65 15 60 15 50 Z" />
              <path fill="currentColor" d="M85 50 C85 40 70 35 55 50 C70 65 85 60 85 50 Z" />
              <circle cx="50" cy="50" r="6" fill="#180103" />
            </svg>
            
            {/* Shiny specular highlight */}
            <div className="absolute top-0 left-2 w-12 h-6 bg-white rounded-full opacity-10 rotate-[-15deg] blur-[2px]" />
          </div>
        </motion.button>
      </motion.div>

      {/* TAP TO REVEAL and SKIP */}
      <AnimatePresence>
        {state === 'IDLE' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-12 left-0 right-0 flex flex-col items-center z-50"
          >
            <motion.p 
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="font-label text-sm md:text-base tracking-[0.3em] text-[#e2dacd] uppercase mb-4 drop-shadow-md whitespace-nowrap pointer-events-none"
            >
              <span className="md:hidden">Tap Seal To Reveal</span>
              <span className="hidden md:inline">Click Seal To Reveal</span>
            </motion.p>
            <button
              onClick={() => {
                setState('COMPLETE');
                onComplete();
              }}
              className="font-label text-xs tracking-widest text-[#e2dacd]/50 hover:text-[#e2dacd] transition-colors uppercase border border-[#e2dacd]/20 hover:border-[#e2dacd]/40 px-6 py-2 rounded-full cursor-pointer backdrop-blur-sm"
            >
              Skip Intro
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
