import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from '@/components/providers';

const inter = localFont({
  src: [
    {
      path: '../public/fonts/inter/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Exodus OS - Developer Portfolio',
  description: 'Interactive operating system-style portfolio for Exodus Tola - Full-stack developer and entrepreneur from Ethiopia',
  keywords: ['Exodus Tola', 'Developer Portfolio', 'Ethiopia', 'Full Stack Developer', 'React', 'Next.js', 'AgriX', 'BloodHero'],
  authors: [{ name: 'Exodus Tola' }],
  creator: 'Exodus Tola',
  publisher: 'Exodus Tola',
  openGraph: {
    title: 'Exodus OS - Developer Portfolio',
    description: 'Interactive operating system-style portfolio for Exodus Tola',
    url: 'https://your-domain.vercel.app',
    siteName: 'Exodus OS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Exodus OS Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exodus OS - Developer Portfolio',
    description: 'Interactive operating system-style portfolio for Exodus Tola',
    images: ['/og-image.png'],
    creator: '@exodus_tola',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}