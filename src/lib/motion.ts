import { Variants } from 'framer-motion';

/**
 * GLOBAL MOTION TOKENS
 * Use these constants to maintain a consistent cinematic rhythm across the site.
 */
export const durations = {
  fast: 0.3,
  standard: 0.6,
  elegant: 1.0,
  cinematic: 1.5,
  epic: 2.5,
  background: 5.0,
};

export const easings = {
  standard: 'easeOut',
  cinematic: [0.25, 0.1, 0.25, 1.0], // smooth cubic-bezier
  luxurious: [0.4, 0.0, 0.2, 1.0], // elegant ease-in-out
};

export const staggers = {
  fast: 0.05,
  standard: 0.1,
  slow: 0.2,
};

/**
 * REUSABLE MOTION VARIANTS
 * Apply these variants using Framer Motion's `variants` prop.
 */

// Container for staggered children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.standard,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.slow,
      delayChildren: 0.2,
    },
  },
};

// Standard Fade Up
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: durations.elegant, ease: easings.cinematic } 
  },
};

// Subtle Fade Up (for smaller elements)
export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: durations.standard, ease: easings.standard } 
  },
};

// Simple Fade In
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { duration: durations.elegant, ease: easings.luxurious } 
  },
};

// Epic Fade In (for major visuals like Ganesha)
export const fadeInEpic: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { duration: durations.epic, ease: easings.luxurious } 
  },
};

// Scale In (e.g., for icons or images)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: durations.elegant, ease: easings.cinematic } 
  },
};

// Image Mask Reveal (bottom to top)
export const maskReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
  show: { 
    opacity: 1, 
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: durations.cinematic, ease: easings.cinematic } 
  },
};

// Slide from Right (for stagger sequences)
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: durations.elegant, ease: easings.cinematic } 
  },
};

// Slide from Left (for stagger sequences)
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: durations.elegant, ease: easings.cinematic } 
  },
};
