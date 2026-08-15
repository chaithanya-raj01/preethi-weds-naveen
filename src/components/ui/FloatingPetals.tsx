'use client';

import React, { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';

interface FloatingPetalsProps {
  count?: number;
  intensity?: 'subtle' | 'medium' | 'strong';
}

/**
 * GPU-friendly floating petals using pure CSS animations.
 * Uses translate3d and rotate for compositing-only rendering.
 */
export default function FloatingPetals({ count = 12, intensity = 'subtle' }: FloatingPetalsProps) {
  const prefersReducedMotion = useReducedMotion();

  const opacityMap = { subtle: 0.25, medium: 0.4, strong: 0.55 };
  const baseOpacity = opacityMap[intensity];

  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const isPink = Math.random() > 0.4;
      const isGold = !isPink && Math.random() > 0.5;
      const size = 6 + Math.random() * 10; // 6-16px
      const left = Math.random() * 100;
      const delay = Math.random() * 20; // stagger start
      const duration = 15 + Math.random() * 20; // 15-35s drift
      const swayAmount = 30 + Math.random() * 60;
      const rotateEnd = 180 + Math.random() * 360;
      
      let color: string;
      if (isGold) {
        color = 'rgba(234, 179, 8, 0.6)';
      } else if (isPink) {
        color = `rgba(${200 + Math.random() * 55}, ${140 + Math.random() * 40}, ${160 + Math.random() * 40}, 0.5)`;
      } else {
        color = 'rgba(253, 250, 246, 0.4)'; // ivory
      }

      return { id: i, size, left, delay, duration, swayAmount, rotateEnd, color, opacity: baseOpacity * (0.5 + Math.random() * 0.5) };
    });
  }, [count, baseOpacity]);

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]" aria-hidden="true">
      <style jsx>{`
        @keyframes petal-fall {
          0% {
            transform: translate3d(0, -20px, 0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: var(--petal-opacity);
          }
          90% {
            opacity: var(--petal-opacity);
          }
          100% {
            transform: translate3d(var(--sway), calc(100vh + 20px), 0) rotate(var(--rotate-end));
            opacity: 0;
          }
        }
      `}</style>
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute will-change-transform"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            width: `${petal.size}px`,
            height: `${petal.size * 0.7}px`,
            background: petal.color,
            borderRadius: '50% 50% 50% 0%',
            animationName: 'petal-fall',
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            '--sway': `${petal.swayAmount}px`,
            '--rotate-end': `${petal.rotateEnd}deg`,
            '--petal-opacity': `${petal.opacity}`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
