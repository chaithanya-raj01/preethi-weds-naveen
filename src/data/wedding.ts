/**
 * CENTRALIZED WEDDING DATA
 * ========================
 * Source of truth: Original physical wedding invitation card
 * Real photos: /public/wedding-assets/couple/
 * Devotional assets: /public/wedding-assets/devotional/
 *
 * DO NOT invent or guess any wedding information.
 * Only card-verified data is included.
 */

export const weddingData = {
  couple: {
    bride: {
      name: 'Preethi',
      formalPrefix: 'Chi. Sow.',
      father: 'Late Gaddam Srinivas',
      mother: 'Rajitha',
      parentage: 'Beloved daughter of Late Sri. Gaddam Srinivas & Smt. Rajitha',
      relationship: 'Eldest Daughter',
      photo: '/wedding-assets/couple/IMG_20260809_WA0034_2.jpg',
    },
    groom: {
      name: 'Naveen Kumar',
      formalPrefix: 'Chi.',
      mother: 'Smt. Gajjimekala Jaya',
      father: 'Late Gouraiah',
      parentage: 'Beloved son of Smt. Gajjimekala Jaya & Late Sri. Gouraiah',
      relationship: 'Only Son',
      photo: '/wedding-assets/couple/couple_cake1.jpeg',
    },
  },

  wedding: {
    date: {
      day: 11,
      month: 'December',
      year: 2028,
      weekday: 'Monday', // Note: 11 December 2028 is a Monday
      full: '11 December 2028',
    },
    isPast: false, // Wedding date is in the future — enable live countdown
  },

  ceremony: {
    muhurtham: '08:33 AM',
    lagnam: 'Dhanussu Lagnam',
    mainRitual: 'Jeelakarra Bellam',
    mainRitualDescription: 'The sweet and eternal bond',
    lunchFollows: true,
  },

  rituals: [
    {
      name: 'Mangalya Dharanam',
      description: 'The tying of the sacred thread, symbolizing eternal union.',
      icon: 'heart' as const,
    },
    {
      name: 'Saptapadi',
      description: 'Seven steps together, making seven vows for a lifetime.',
      icon: 'footprints' as const,
    },
    {
      name: 'Arundhati Darshanam',
      description: 'Seeking blessings from the eternal star of constancy.',
      icon: 'sparkles' as const,
    },
  ],

  venue: {
    name: 'T.V.R. Gardens',
    landmark: 'Near Railway Track',
    locality: 'New Shayampet',
    city: 'Hanamkonda',
    state: 'Telangana',
    fullAddress: 'T.V.R. Gardens, Near Railway Track, New Shayampet, Hanamkonda',
    directionsUrl: 'https://maps.google.com/?q=T.V.R.+Gardens+New+Shayampet+Hanamkonda',
  },

  events: [] as Array<{
    day: string;
    timeOfDay: string;
    name: string;
    description: string;
    time: string;
    photo: string;
  }>,

  inviter: {
    name: 'Gaddam Shankarlingam & Bhagyalaxmi',
    signOff: 'You are Cordially Invited by',
  },

  blessings: {
    opening: 'Srirasthu! Shubhamasthu!! Avighnamasthu!!!',
    teluguBlessing: 'శుభమస్తు',
    teluguSubtext: 'దైవ సన్నిధిలో, పెద్దల ఆశీస్సులతో...',
    englishQuote: 'May this auspicious beginning bring eternal joy and prosperity.',
  },

  gallery: [
    {
      src: '/wedding-assets/couple/couple_cake1.jpeg',
      caption: 'The Celebration',
      aspectRatio: 'portrait' as const,
    },
    {
      src: '/wedding-assets/couple/IMG_20260809_WA0034_2.jpg',
      caption: 'Together Forever',
      aspectRatio: 'square' as const,
    },
    {
      src: '/wedding-assets/couple/IMG-20260809-WA0035.jpg',
      caption: 'Our Sacred Journey',
      aspectRatio: 'landscape' as const,
    },
  ],

  meta: {
    noRsvp: true,
    videoReady: true,
    videoPaths: [
      '/wedding-assets/videos/VID-20241209-WA0000.mp4',
      '/wedding-assets/videos/VID-20241211-WA0006.mp4',
      '/wedding-assets/videos/VID-20260810-WA0000.mp4',
    ],
  },
} as const;

/** Asset paths — centralized for easy maintenance */
export const assets = {
  devotional: {
    ganesha: '/wedding-assets/devotional/lord ganesha.png',
    venkateshwara: '/wedding-assets/devotional/lord venkateshwara.png',
    temple: '/wedding-assets/devotional/temple.jpg',
  },
  couple: {
    selfie: '/wedding-assets/couple/IMG_20260809_WA0034_2.jpg',
    blackAndWhite: '/wedding-assets/couple/IMG-20260809-WA0035.jpg',
    cakeCutting: '/wedding-assets/couple/couple_cake1.jpeg',
  },
  invitation: '/wedding-assets/invitation/WhatsApp Image 2026-08-09 at 18.49.48.jpeg',
} as const;

export type WeddingData = typeof weddingData;
