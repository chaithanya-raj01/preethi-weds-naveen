'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Floating music control button. 
 * Gracefully handles browser autoplay restrictions.
 * Never blocks any page interaction.
 */
export default function MusicControl({ showUI = true }: { showUI?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if audio file exists, gracefully fail if not
    const audio = new Audio('/wedding-assets/videos/invitation video.mp4');
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'none';
    
    audio.addEventListener('canplaythrough', () => setHasAudio(true));
    audio.addEventListener('error', () => {
      // No audio file available — hide the control
      setHasAudio(false);
    });
    
    audioRef.current = audio;
    // Try to load
    audio.load();

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = useCallback(async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      // Browser blocked autoplay — silently fail
      setIsPlaying(false);
    }
  }, [isPlaying]);

  useEffect(() => {
    const handlePlayMusic = async () => {
      if (audioRef.current && !isPlaying) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
    };
    
    window.addEventListener('play-music', handlePlayMusic);
    return () => window.removeEventListener('play-music', handlePlayMusic);
  }, [isPlaying]);

  // Don't render if no audio available or UI is hidden
  if (!hasAudio || !showUI) return null;

  return (
    <motion.button
      className="fixed bottom-24 lg:bottom-8 right-4 z-[90] w-10 h-10 rounded-full bg-[#2d080b]/80 backdrop-blur-sm border border-[#eab308]/30 flex items-center justify-center text-[#ffe088] shadow-lg hover:border-[#eab308]/60 transition-colors"
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="text-base"
        >
          ♪
        </motion.span>
      ) : (
        <span className="text-base opacity-60">♪</span>
      )}
    </motion.button>
  );
}
