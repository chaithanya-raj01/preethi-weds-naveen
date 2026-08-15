import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === PRIMARY — Deep Temple Maroon ===
        'primary': '#1f0000',
        'primary-container': '#4b0000',
        'on-primary': '#ffffff',
        'on-primary-container': '#d66656',
        'on-primary-fixed': '#410000',
        'on-primary-fixed-variant': '#81271c',
        'primary-fixed': '#ffdad4',
        'primary-fixed-dim': '#ffb4a8',
        'inverse-primary': '#ffb4a8',

        // === SECONDARY — Antique Temple Gold ===
        'secondary': '#735c00',
        'secondary-container': '#fed65b',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#745c00',
        'on-secondary-fixed': '#241a00',
        'on-secondary-fixed-variant': '#574500',
        'secondary-fixed': '#ffe088',
        'secondary-fixed-dim': '#e9c349',

        // === TERTIARY — Vermilion ===
        'tertiary': '#1f0000',
        'tertiary-container': '#4b0001',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#f34d3e',
        'on-tertiary-fixed': '#410001',
        'on-tertiary-fixed-variant': '#930004',
        'tertiary-fixed': '#ffdad5',
        'tertiary-fixed-dim': '#ffb4a9',

        // === SURFACE — Temple Cream & Warm Beige ===
        'surface': '#fff9f0',
        'surface-dim': '#dfd9d1',
        'surface-bright': '#fff9f0',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f9f3ea',
        'surface-container': '#f3ede4',
        'surface-container-high': '#ede7df',
        'surface-container-highest': '#e7e2d9',
        'surface-variant': '#e7e2d9',
        'surface-tint': '#a13e31',
        'on-surface': '#1d1b16',
        'on-surface-variant': '#56423f',

        // === INVERSE ===
        'inverse-surface': '#32302a',
        'inverse-on-surface': '#f6f0e7',

        // === OUTLINE ===
        'outline': '#8a726e',
        'outline-variant': '#ddc0bb',

        // === ERROR ===
        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // === BACKGROUND ===
        'background': '#fff9f0',
        'on-background': '#1d1b16',
      },
      fontFamily: {
        'display': ['var(--font-bodoni)', 'Bodoni Moda', 'serif'],
        'body': ['var(--font-source-serif)', 'Source Serif 4', 'serif'],
        'label': ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        'telugu': ['var(--font-noto-telugu)', 'Noto Sans Telugu', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'display-hero': ['80px', { lineHeight: '90px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-sm': ['10px', { lineHeight: '14px', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      spacing: {
        'unit': '8px',
        'gutter': '24px',
        'margin-mobile': '20px',
        'margin-desktop': '80px',
        'section-padding': '120px',
        'section-padding-mobile': '80px',
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        '2xl': '0.75rem',
        'full': '9999px',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-float': {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
        'gentle-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'deepam-flicker': {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '25%': { opacity: '1', transform: 'scale(1.02)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
          '75%': { opacity: '1', transform: 'scale(1.01)' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.3' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.2s ease-out forwards',
        'slow-float': 'slow-float 8s ease-in-out infinite',
        'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
        'deepam-flicker': 'deepam-flicker 4s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, transparent, #ffe088, transparent)',
        'maroon-gradient': 'linear-gradient(to bottom, #4b0000, #1f0000)',
        'sacred-radial': 'radial-gradient(circle at 50% 40%, rgba(254,214,91,0.15) 0%, transparent 60%)',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
