import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Foundation Shops | Discover the Best Products Across Every Lifestyle',
    template: '%s | Foundation Shops',
  },
  description:
    'Curated product reviews, buying guides, and recommendations across business, fashion, fitness, tech, travel, and more. Find the best deals and top picks.',
  keywords: [
    'product reviews',
    'buying guides',
    'affiliate recommendations',
    'lifestyle products',
    'best deals',
  ],
  authors: [{ name: 'Foundation Shops' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <AffiliateDisclosure />
        <Footer />
      </body>
    </html>
  );
}
