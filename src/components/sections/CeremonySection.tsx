'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Footprints, Sparkles } from 'lucide-react';
import { weddingData, assets } from '@/data/wedding';
import Image from 'next/image';
import { fadeUp, staggerContainer, durations, easings } from '@/lib/motion';
import AkshintaluShower from '../ui/AkshintaluShower';

const iconMap = {
  heart: Heart,
  footprints: Footprints,
  sparkles: Sparkles,
};

export default function CeremonySection() {
  const { ceremony, rituals } = weddingData;

  return (
    <section id="ceremony" className="w-full bg-gradient-to-b from-[#1a0305] via-[#2d080b] to-[#1a0305] pt-24 pb-20 lg:py-32 px-6 relative overflow-hidden text-white">
      
      {/* Background Texture & Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#eab308]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Sacred Akshintalu shower — triggers once */}
      <AkshintaluShower count={25} duration={1.5} />

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: durations.epic, ease: easings.cinematic }}
        className="absolute inset-0 mix-blend-screen pointer-events-none"
      >
        <Image src={assets.devotional.temple} alt="Temple Texture" fill className="object-cover object-center" />
      </motion.div>

      <div className="relative z-10 max-w-content mx-auto">
        
        {/* Section Header - Fixed Visibility */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durations.standard, ease: easings.standard }}
            className="font-label text-label-md uppercase tracking-[0.3em] text-[#eab308] mb-4 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]"
          >
            Sacred Celebrations
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durations.elegant, delay: 0.2, ease: easings.cinematic }}
            className="font-display text-headline-lg lg:text-display-lg text-[#ffe088] drop-shadow-[0_2px_10px_rgba(254,214,91,0.2)]"
          >
            The Grand Mandapam
          </motion.h3>
        </div>

        {/* Mandapam Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: easings.cinematic }}
          className="max-w-4xl mx-auto p-8 lg:p-16 relative group rounded-3xl bg-gradient-to-br from-[#3d0c11] via-[#2a070a] to-[#420d13] border border-[#eab308]/30 shadow-[0_15px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Subtle silk glow background overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),transparent_70%)] pointer-events-none"></div>

          {/* Decorative Arch Draw */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: durations.elegant }}
            className="absolute inset-3 border border-[#eab308]/30 rounded-2xl pointer-events-none"
          ></motion.div>

          {/* Muhurtham Sequential Reveal */}
          <div className="text-center mb-16 relative">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block px-6 py-2 rounded-full bg-[#eab308] text-[#1a0305] font-label text-xs uppercase tracking-[0.25em] mb-6 font-bold shadow-[0_0_20px_rgba(234,179,8,0.4)]"
            >
              Sumuhurtham
            </motion.div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.6, ease: easings.standard }}
              className="font-display text-headline-md lg:text-headline-lg text-[#ffe088] mb-3 tracking-wide drop-shadow-[0_2px_8px_rgba(255,224,136,0.3)]"
            >
              {ceremony.mainRitual}
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.8 }}
              className="font-body text-[#fde047]/80 italic mb-8 text-base sm:text-lg"
            >
              {ceremony.mainRitualDescription}
            </motion.p>
            <div className="flex flex-col items-center justify-center font-display text-3xl lg:text-4xl">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 1.0 }}
                className="text-[#eab308] drop-shadow-[0_0_20px_rgba(234,179,8,0.5)] font-bold"
              >
                {ceremony.muhurtham}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 1.2 }}
                className="font-label text-xs sm:text-sm tracking-[0.3em] text-[#ffe088]/80 mt-2 uppercase"
              >
                {ceremony.lagnam}
              </motion.span>
            </div>
          </div>

          {/* Line Reveal */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: durations.elegant, delay: 1.4, ease: easings.cinematic }}
            className="w-full h-px bg-gradient-to-r from-transparent via-[#eab308]/50 to-transparent mb-16 origin-center"
          ></motion.div>

          {/* Rituals Grid - Staggered (Icon -> Title -> Description) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {rituals.map((ritual, idx) => {
              const Icon = iconMap[ritual.icon];
              return (
                <motion.div 
                  key={idx}
                  initial="hidden"
                  whileInView="show"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.6 }}
                  className="flex flex-col items-center text-center space-y-4 group cursor-default"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15, delayChildren: 1.6 + (idx * 0.2) }
                    },
                    hover: {
                      y: -3,
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }
                  }}
                >
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easings.standard } }
                    }}
                    className="w-14 h-14 rounded-full bg-[#eab308]/15 border border-[#eab308]/40 flex items-center justify-center text-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.2)] group-hover:bg-[#eab308] group-hover:text-[#1a0305] transition-all duration-500"
                  >
                    <Icon size={22} strokeWidth={1.8} className="transition-colors" />
                  </motion.div>
                  <motion.h5 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easings.standard } }
                    }}
                    className="font-display text-lg lg:text-xl text-[#ffe088] font-semibold group-hover:text-[#eab308] transition-colors duration-500"
                  >
                    {ritual.name}
                  </motion.h5>
                  <motion.p 
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { duration: 0.8 } }
                    }}
                    className="font-body text-sm text-amber-100/70 leading-relaxed"
                  >
                    {ritual.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>

          {/* Lunch Follows Reveal */}
          {ceremony.lunchFollows && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.6, duration: 1.0, ease: easings.standard }}
              className="mt-16 pt-8 border-t border-[#eab308]/25 text-center"
            >
              <p className="font-label text-xs sm:text-sm tracking-[0.3em] uppercase text-[#eab308]">
                Followed By
              </p>
              <p className="font-display text-2xl lg:text-3xl text-[#ffe088] mt-2 drop-shadow-[0_0_12px_rgba(254,214,91,0.3)]">
                Traditional Wedding Feast
              </p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
