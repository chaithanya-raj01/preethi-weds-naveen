'use client';

import React, { useState, useEffect } from 'react';
import { weddingData } from '@/data/wedding';

export default function CountdownTimer({ className = '' }: { className?: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const { date, isPast } = weddingData.wedding;
    if (isPast) return;

    // Set the target date
    const targetDate = new Date(`${date.month} ${date.day}, ${date.year} 00:00:00`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted || weddingData.wedding.isPast) return null;

  return (
    <div className={`flex gap-4 sm:gap-6 justify-center items-center mt-8 ${className}`}>
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-14 h-16 sm:w-16 sm:h-20 bg-surface/5 backdrop-blur-sm border border-[#eab308]/40 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.15)] mb-2">
            <span className="font-display text-2xl sm:text-3xl text-[#eab308] text-shadow-gold">
              {item.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#eab308]/90">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
