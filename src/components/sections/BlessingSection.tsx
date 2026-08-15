'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '@/data/wedding';
import OrnamentDivider from '../ui/OrnamentDivider';
import Diya from '../ui/Diya';
import AkshintaluShower from '../ui/AkshintaluShower';
import FloatingPetals from '../ui/FloatingPetals';
import { durations, easings } from '@/lib/motion';

export default function BlessingSection() {
  const { blessings, inviter } = weddingData;

  return (
    <section className="w-full bg-primary flex flex-col items-center justify-center pt-24 pb-32 lg:py-40 px-6 relative overflow-hidden">

      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0.6 }}
        whileInView={{ opacity: 0.95 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: durations.epic, ease: easings.cinematic }}
        className="absolute inset-0 bg-maroon-gradient z-0"
      />

      {/* Section-specific stronger petals */}
      <FloatingPetals count={8} intensity="strong" />

      {/* Akshintalu shower — triggers once when this section enters view */}
      <AkshintaluShower count={20} duration={1.5} />

      <div className="relative z-10 w-full max-w-content mx-auto flex flex-col items-center text-center">

        {/* Namaste Sign-off */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easings.luxurious }}
          className="w-16 h-16 lg:w-24 lg:h-24 relative mb-12"
        >
          <img
            src="/namaste.jpg"
            alt="Respectful Namaste"
            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,224,136,0.2)] rounded-full mix-blend-screen"
          />
        </motion.div>

        {/* Inviter Section */}
        <div className="mb-24 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easings.luxurious }}
            className="font-label text-sm uppercase tracking-[0.2em] text-secondary-fixed/70 mb-4"
          >
            {inviter.signOff}
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easings.luxurious }}
            className="font-display text-xl lg:text-2xl text-secondary-fixed"
          >
            Gaddam Shankarlingam & Bhagyalaxmi
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: easings.luxurious }}
            className="font-body text-secondary-fixed/50 mt-2 italic text-sm"
          >
            & Family
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.3, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4, ease: easings.cinematic }}
          className="mb-24 w-full"
        >
          <OrnamentDivider />
        </motion.div>

        {/* Diya — the signature footer interaction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easings.luxurious }}
          className="mb-12"
        >
          <Diya />
        </motion.div>

        {/* Telugu Blessing (Strongest Emotional Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5, ease: easings.cinematic }}
          className="mb-8"
        >
          <h2 className="font-telugu text-5xl lg:text-7xl text-secondary-fixed font-bold tracking-wide drop-shadow-[0_0_25px_rgba(255,224,136,0.5)]">
            {blessings.teluguBlessing}
          </h2>
        </motion.div>

        {/* English Blessing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.7, ease: easings.luxurious }}
          className="font-body text-lg lg:text-xl text-primary-fixed-dim italic max-w-lg mb-16"
        >
          &quot;{blessings.englishQuote}&quot;
        </motion.p>

        {/* Names */}
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9, ease: easings.luxurious }}
            className="font-display text-2xl lg:text-3xl text-secondary-fixed tracking-widest uppercase mb-2"
          >
            Preethi & Naveen Kumar
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1, ease: easings.luxurious }}
            className="font-label text-xs uppercase tracking-[0.3em] text-secondary-fixed/50"
          >
            Forever & Always
          </motion.p>
        </div>

      </div>
    </section>
  );
}
