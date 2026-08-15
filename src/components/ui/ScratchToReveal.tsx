'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScratchToRevealProps {
  children: React.ReactNode;
  coverColor?: string;
  brushSize?: number;
  revealThreshold?: number;
  onReveal?: () => void;
  className?: string;
}

export default function ScratchToReveal({
  children,
  coverColor = '#3f1a1d', // A maroon/dark brown color matching the theme
  brushSize = 30,
  revealThreshold = 40,
  onReveal,
  className = ''
}: ScratchToRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Measure container and setup canvas dynamically
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const { width, height } = dimensions;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Fill cover
    ctx.fillStyle = coverColor;
    ctx.fillRect(0, 0, width, height);

    // Add some text or pattern on top
    ctx.fillStyle = '#eab308'; // vibrant turmeric yellow
    ctx.font = '500 16px "Playfair Display", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Scratch to Reveal', width / 2, height / 2);

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = brushSize;
    ctx.globalCompositeOperation = 'destination-out';
  }, [dimensions, coverColor, brushSize]);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (isRevealed) return;
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || isRevealed) return;
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
      checkRevealPercentage();
    }
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
  };

  const checkRevealPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    
    let transparentPixels = 0;
    const totalPixels = pixels.length / 4;
    
    // Check every 4th pixel (step by 16) for performance
    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }
    
    const percentage = (transparentPixels / (totalPixels / 4)) * 100;
    
    if (percentage > revealThreshold && !isRevealed) {
      setIsRevealed(true);
      if (onReveal) onReveal();
    }
  };

  // Add global event listeners to handle mouse up outside the canvas
  useEffect(() => {
    const handleGlobalPointerUp = () => setIsDrawing(false);
    window.addEventListener('mouseup', handleGlobalPointerUp);
    window.addEventListener('touchend', handleGlobalPointerUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalPointerUp);
      window.removeEventListener('touchend', handleGlobalPointerUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block touch-none select-none rounded-xl overflow-hidden ${className}`}
    >
      <div className="w-full h-full pointer-events-none">
        {children}
      </div>
      
      <AnimatePresence>
        {!isRevealed && (
          <motion.canvas
            ref={canvasRef}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            className="absolute top-0 left-0 w-full h-full z-10 cursor-crosshair touch-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
