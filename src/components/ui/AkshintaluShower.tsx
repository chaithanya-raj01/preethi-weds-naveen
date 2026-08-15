'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface AkshintaluShowerProps {
  /** Number of rice grains */
  count?: number;
  /** Duration of the shower in seconds */
  duration?: number;
}

/**
 * Akshintalu (sacred rice) shower triggered once via IntersectionObserver.
 * Uses GPU-friendly translate3d + rotate animations.
 */
export default function AkshintaluShower({ count = 30, duration = 1.5 }: AkshintaluShowerProps) {
  const [active, setActive] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || hasTriggered) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setActive(true);
          setHasTriggered(true);
          // Auto-dismiss after animation completes
          setTimeout(() => setActive(false), (duration + 1) * 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasTriggered, duration, prefersReducedMotion]);

  const grains = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 5 + Math.random() * 90,
      delay: Math.random() * 0.8,
      fallDuration: 0.8 + Math.random() * 1.0,
      swayX: (Math.random() - 0.5) * 50,
      rotation: Math.random() * 540,
    }));
  }, [count]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[15]" aria-hidden="true">
      <AnimatePresence>
        {active && grains.map(grain => (
          <motion.div
            key={grain.id}
            className="absolute top-0"
            style={{ 
              left: `${grain.x}%`,
              width: '3px',
              height: '6px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #eab308, #fde68a)',
              boxShadow: '0 0 4px rgba(234,179,8,0.3)',
            }}
            initial={{ y: -10, opacity: 0, rotate: 0, x: 0 }}
            animate={{ 
              y: '110%',
              opacity: [0, 1, 1, 0],
              rotate: grain.rotation,
              x: grain.swayX,
            }}
            transition={{ 
              duration: grain.fallDuration,
              delay: grain.delay,
              ease: 'easeIn',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
