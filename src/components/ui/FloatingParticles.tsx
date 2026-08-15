'use client';

import React, { useEffect, useState } from 'react';

interface FloatingParticlesProps {
  count?: number;
  color?: string;
}

export default function FloatingParticles({ count = 20, color }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; delay: string; duration: string; size: string }>>([]);

  useEffect(() => {
    // Generate particles only on the client to avoid hydration mismatch
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 4}s`,
      size: `${2 + Math.random() * 3}px`,
    }));
    setParticles(newParticles);
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-secondary-fixed opacity-40 animate-slow-float shadow-[0_0_8px_rgba(255,224,136,0.8)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
