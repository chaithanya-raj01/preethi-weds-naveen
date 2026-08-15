---
name: Devotional Heritage
colors:
  surface: '#fff9f0'
  surface-dim: '#dfd9d1'
  surface-bright: '#fff9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3ea'
  surface-container: '#f3ede4'
  surface-container-high: '#ede7df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1b16'
  on-surface-variant: '#56423f'
  inverse-surface: '#32302a'
  inverse-on-surface: '#f6f0e7'
  outline: '#8a726e'
  outline-variant: '#ddc0bb'
  surface-tint: '#a13e31'
  primary: '#1f0000'
  on-primary: '#ffffff'
  primary-container: '#4b0000'
  on-primary-container: '#d66656'
  inverse-primary: '#ffb4a8'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#1f0000'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b0001'
  on-tertiary-container: '#f34d3e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#81271c'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#930004'
  background: '#fff9f0'
  on-background: '#1d1b16'
  surface-variant: '#e7e2d9'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-padding: 120px
---

## Brand & Style
The design system is anchored in the intersection of divine South Indian tradition and modern cinematic luxury. It serves as a digital sanctuary for royal weddings, evoking feelings of deep reverence, ancestral pride, and sophisticated romance.

The style is **Traditional-Modernist**. It utilizes heavy whitespace to create a "gallery" feel, allowing the rich colors and intricate details to breathe. The UI borrows from temple architecture—specifically Dravidian stone carvings and royal silk weaves—to provide a tactile sense of history. Interactions are slow, deliberate, and graceful, mirroring the pace of a sacred ceremony.

## Colors
The palette is a tribute to the "Garbhagriha" (sanctum) and the "Kalyana Mandapam" (wedding hall).
- **Primary (Deep Temple Maroon):** Used for primary actions, header text, and significant iconography. It represents power and devotion.
- **Secondary (Antique Temple Gold):** Reserved for borders, thin dividers, and decorative accents. Use this sparingly to suggest value without appearing gaudy.
- **Background (Temple Cream):** The foundation of the entire system. It provides a warm, ivory-like surface that feels more organic and expensive than pure white.
- **Accents:** Muted Vermilion for secondary buttons or alerts; Dark Forest Green for success states or nature-themed iconography; Warm Beige for surface-container layering.

## Typography
The typographic hierarchy relies on high contrast. 
- **Display & Headlines:** Use high-contrast serifs to mimic royal stone inscriptions and luxury editorial layouts. For Telugu text, ensure the weight matches the English headings to maintain visual parity.
- **Body:** A modern serif provides a literary, academic, and respectful tone while ensuring legibility for long-form wedding narratives and itineraries.
- **Labels:** A clean, modern sans-serif is used for functional metadata, navigation, and micro-copy to ensure the UI feels "digital-first" and accessible.

## Layout & Spacing
This design system uses a **Fixed-Width Centered Grid** for desktop to simulate the experience of reading an invitation or a physical wedding book. 
- **Grid:** 12-column layout with wide 80px margins on desktop to emphasize exclusivity.
- **Rhythm:** An 8px base unit is used, but for section vertical spacing, "Breathable Intervals" (80px, 120px) are preferred to create a sense of grandeur and slow the user down.
- **Mobile:** Transition to a 4-column fluid layout with generous 20px side margins. Large display headings should be downscaled to prevent excessive wrapping.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Subtle Textures** rather than aggressive shadows.
- **Surfaces:** Use "Warm Beige" for cards or containers that need to sit above the "Temple Cream" background.
- **Shadows:** Avoid black shadows. Use very soft, diffused maroon-tinted shadows (Opacity: 5-8%) to suggest depth while keeping the warmth.
- **Borders:** Use 0.5px or 1px strokes in "Antique Temple Gold" for the primary definition of interactive elements.
- **Textures:** Apply a subtle "Silk Grain" or "Stone Pitting" texture overlay on primary maroon surfaces to give them a physical, tactile presence.

## Shapes
The shape language is primarily **Structured and Architectural**. 
- Corners are kept "Soft" (4px to 12px) to reflect the organic curves found in temple arches and carved pillars, but never fully rounded or "bubbly."
- **Dividers:** Instead of straight lines, use "Kolam-inspired" patterns or "Jasmine Garland" (Mallepulu) illustrations for horizontal breaks.
- **Framing:** Use "Inverted Arch" shapes for image containers to give them a royal window or "Jharokha" appearance.

## Components
- **Ceremonial Buttons:** 
  - *Primary:* Deep Maroon fill with White or Gold text. Heavy, centered, with 4px corners. 
  - *Secondary:* Antique Gold thin outline with an understated serif font.
- **Wedding Cards:** Backgrounds use Warm Beige with a 1px Gold border. Include a small Kolam icon in the bottom corner of each card.
- **Ceremony Chips:** Use Dark Forest Green backgrounds with white text for "Confirmed" or "RSVP" states, styled with a subtle silk-texture gradient.
- **Input Fields:** Bottom-border only (minimalist style) in Deep Maroon, with labels floating above in Antique Gold.
- **Deepam Loader:** A custom loading state featuring a flickering brass lamp (Deepam) silhouette.
- **Date Picker:** Highlight selected dates with a small Vermilion "Pottu" (dot) icon rather than a standard circle.