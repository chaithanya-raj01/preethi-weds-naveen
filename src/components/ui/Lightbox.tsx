'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { durations, easings } from '@/lib/motion';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: readonly { src: string; caption: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) {
  
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 lg:top-10 lg:right-10 z-50 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close fullscreen gallery"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* Navigation Controls */}
          <button 
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 lg:left-10 z-50 p-3 text-white/70 hover:text-white transition-colors hidden md:block"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          <button 
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-4 lg:right-10 z-50 p-3 text-white/70 hover:text-white transition-colors hidden md:block"
            aria-label="Next image"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-20" onClick={onClose}>
            <motion.div 
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: durations.elegant, ease: easings.luxurious }}
              className="relative w-full h-full max-w-6xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].caption}
                fill
                className="object-contain"
                priority
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center">
                <p className="font-display text-2xl text-white tracking-wide">
                  {images[currentIndex].caption}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
