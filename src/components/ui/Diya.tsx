'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Traditional Diya (oil lamp) with a realistic CSS flame.
 * Lights up when scrolled into view. Tap to flare.
 */
export default function Diya() {
  const [isLit, setIsLit] = useState(false);
  const [flare, setFlare] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Light the diya when scrolled into view
  useEffect(() => {
    if (hasTriggered) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          // Small delay for dramatic effect
          setTimeout(() => setIsLit(true), 400);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

  const handleTap = () => {
    if (!isLit) return;
    setFlare(true);
    setTimeout(() => setFlare(false), 600);
  };

  return (
    <div ref={ref} className="relative flex flex-col items-center cursor-pointer" onClick={handleTap}>
      {/* Warm glow behind the diya */}
      <motion.div
        className="absolute -top-8 w-32 h-32 rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(234,179,8,0.25) 0%, rgba(234,179,8,0.08) 40%, transparent 70%)',
        }}
        animate={{ 
          scale: isLit ? (flare ? 1.6 : 1.2) : 0,
          opacity: isLit ? (flare ? 1 : 0.7) : 0,
        }}
        transition={{ duration: flare ? 0.3 : 0.8, ease: 'easeOut' }}
      />

      {/* Flame */}
      <motion.div
        className="relative w-4 z-10"
        animate={{ 
          scale: isLit ? (flare ? 1.3 : 1) : 0,
          opacity: isLit ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Outer flame (yellow-orange) */}
        <motion.div
          className="w-4 h-7 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]"
          style={{
            background: 'linear-gradient(to top, #f59e0b, #fbbf24, #fde68a, rgba(255,255,255,0.9))',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 8px rgba(251,191,36,0.6), 0 0 20px rgba(245,158,11,0.3)',
          }}
          animate={prefersReducedMotion ? {} : {
            scaleX: [1, 0.85, 1.05, 0.9, 1],
            scaleY: [1, 1.08, 0.95, 1.05, 1],
            rotate: [0, -2, 3, -1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
        {/* Inner flame (bright white-yellow core) */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]"
          style={{
            background: 'linear-gradient(to top, #fbbf24, #fef3c7, rgba(255,255,255,0.95))',
            filter: 'blur(0.3px)',
          }}
        />
      </motion.div>

      {/* Diya body (simple elegant oil lamp shape) */}
      <div className="relative z-10 mt-[-2px]">
        {/* Wick holder */}
        <div className="w-1.5 h-2 bg-[#92400e] mx-auto rounded-t-sm" />
        {/* Bowl */}
        <div 
          className="w-10 h-4 rounded-b-full border-b-2 border-l border-r border-[#eab308]/60"
          style={{
            background: 'linear-gradient(to bottom, #b45309, #92400e)',
            boxShadow: isLit ? '0 4px 12px rgba(234,179,8,0.2)' : 'none',
          }}
        />
        {/* Base */}
        <div className="w-6 h-1 bg-[#78350f] mx-auto rounded-b-full border-b border-[#eab308]/30" />
      </div>

      {/* Flare particles (on tap) */}
      {flare && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#fbbf24]"
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: (Math.random() - 0.5) * 40,
                y: -(10 + Math.random() * 30),
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ boxShadow: '0 0 4px rgba(251,191,36,0.8)' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
