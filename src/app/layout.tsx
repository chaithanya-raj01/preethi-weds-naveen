import type { Metadata } from 'next';
import { Bodoni_Moda, Source_Serif_4, Manrope, Noto_Sans_Telugu } from 'next/font/google';
import './globals.css';
import { weddingData } from '@/data/wedding';

// Initialize fonts
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  weight: ['400'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '600'],
  display: 'swap',
});

const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ['telugu'],
  variable: '--font-noto-telugu',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `The Wedding of ${weddingData.couple.bride.name} & ${weddingData.couple.groom.name} | Official Invitation`,
  description: `Join us in celebrating the wedding of ${weddingData.couple.bride.name} & ${weddingData.couple.groom.name} on ${weddingData.wedding.date.full}.`,
  openGraph: {
    title: `${weddingData.couple.bride.name} & ${weddingData.couple.groom.name}`,
    description: 'We joyfully invite you to witness the beginning of our forever.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${sourceSerif.variable} ${manrope.variable} ${notoSansTelugu.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-background selection:bg-secondary-fixed/30 selection:text-primary">
        {/* Silk Texture Background Layer */}
        <div className="silk-texture fixed inset-0 z-0 pointer-events-none mix-blend-overlay"></div>
        
        <main className="relative z-10 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
