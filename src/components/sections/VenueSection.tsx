'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { weddingData, assets } from '@/data/wedding';
import { durations, easings } from '@/lib/motion';
import KolamMotif from '../icons/KolamMotif';
import FloatingParticles from '../ui/FloatingParticles';

export default function VenueSection() {
  const { venue } = weddingData;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="venue" className="w-full bg-[#1a0305] pt-24 pb-32 px-6 relative overflow-hidden text-white">
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-maroon-gradient opacity-90 z-0 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: durations.epic, ease: easings.cinematic }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(254,214,91,0.15)_0%,transparent_70%)] pointer-events-none z-0"
      ></motion.div>

      {/* Mandala Watermark */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: durations.epic, ease: easings.cinematic }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-[#eab308] pointer-events-none z-0"
      >
        <KolamMotif />
      </motion.div>

      {!prefersReducedMotion && <FloatingParticles count={10} />}

      <div className="relative z-10 max-w-content mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durations.elegant, ease: easings.cinematic }}
            className="font-display text-headline-lg lg:text-display-lg text-[#ffe088] drop-shadow-md"
          >
            Sacred Grounds
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: durations.cinematic, delay: 0.3, ease: easings.cinematic }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#eab308] to-transparent mx-auto mt-6"
          />
        </div>

        {/* Premium Venue Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: durations.cinematic, ease: easings.cinematic }}
          className="max-w-2xl mx-auto relative group"
        >
          {/* Card Background & Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d0c11]/90 to-[#1a0305]/95 rounded-2xl border border-[#eab308]/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm z-0"></div>
          
          {/* Subtle Inner Pattern */}
          <div className="absolute inset-0 opacity-[0.03] z-0 rounded-2xl pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23eab308\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

          <div className="relative z-10 p-10 lg:p-14 text-center flex flex-col items-center">
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#eab308]/40 rounded-tl-xl transition-colors duration-500 group-hover:border-[#eab308]/80"></div>
            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#eab308]/40 rounded-tr-xl transition-colors duration-500 group-hover:border-[#eab308]/80"></div>
            <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#eab308]/40 rounded-bl-xl transition-colors duration-500 group-hover:border-[#eab308]/80"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#eab308]/40 rounded-br-xl transition-colors duration-500 group-hover:border-[#eab308]/80"></div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="w-20 h-20 bg-gradient-to-b from-[#5a141d] to-[#3d0c11] rounded-full flex items-center justify-center text-[#ffe088] mb-8 shadow-inner border border-[#eab308]/30 shadow-[0_0_15px_rgba(234,179,8,0.15)]"
            >
              <MapPin size={32} strokeWidth={1.5} />
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.5, ease: easings.standard }}
              className="font-display text-3xl lg:text-4xl text-[#ffe088] mb-6 drop-shadow-md"
            >
              {venue.name}
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.7 }}
              className="font-body text-[#ffe088]/80 mb-10 space-y-2 text-lg"
            >
              <p>{venue.landmark}</p>
              <p>{venue.locality}, {venue.city}</p>
            </motion.div>

            <motion.a 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(234,179,8,0.5)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              href={venue.directionsUrl || '#'} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#fde08b] to-[#d4af37] text-[#3d0c11] font-label uppercase tracking-widest text-sm font-bold rounded-full shadow-[0_5px_15px_rgba(234,179,8,0.3)] relative overflow-hidden group/btn"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shine_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
              Get Directions
            </motion.a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
