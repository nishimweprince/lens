import type { Metadata } from 'next';
import { Geist, Geist_Mono, Libre_Baskerville } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lens.rw'),
  title: {
    default: 'Lens Inc. Ltd | Financial Solutions for Agribusiness',
    template: '%s | Lens Inc. Ltd'
  },
  description: 'Lens Inc. Ltd revolutionizes bookkeeping for individuals and SMEs using innovative digital solutions. We help farmers and businesses achieve financial accuracy with our comprehensive financial management tools.',
  keywords: ['bookkeeping', 'agribusiness', 'financial management', 'SME solutions', 'digital bookkeeping', 'Rwanda', 'agriculture finance'],
  authors: [{ name: 'Lens Inc. Ltd' }],
  creator: 'Lens Inc. Ltd',
  publisher: 'Lens Inc. Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6',
    apple: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
      url: 'https://lens.rw',
    siteName: 'Lens Inc. Ltd',
    title: 'Lens Inc. Ltd | Financial Solutions for Agribusiness',
    description: 'Revolutionizing bookkeeping for individuals and SMEs using innovative digital solutions. Helping farmers and businesses achieve financial accuracy.',
    images: [{
      url: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6',
      width: 1200,
      height: 630,
      alt: 'Lens Inc. Ltd Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lens Inc. Ltd | Financial Solutions for Agribusiness',
    description: 'Revolutionizing bookkeeping for individuals and SMEs using innovative digital solutions.',
    images: ['https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6'],
    creator: '@lensinc',
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
    google: 'sDfAQlinTKJTrBVMXTdOU8Ugu2RO3jexpWETdvqAFws',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="canonical" href="https://lens.rw" />
      <link rel="icon" type='image/png' href="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} antialiased font-libre`}
      >
        {children}
      </body>
    </html>
  );
}
