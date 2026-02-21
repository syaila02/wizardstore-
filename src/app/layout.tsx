import type { Metadata } from 'next';
import { Cinzel } from 'next/font/google';

import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: 'WizardStore - Magically Transformed',
  description: 'Your one-stop shop for all magical needs from Hogwarts!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable}`}>
      <body className="bg-hp-red min-h-screen text-white">
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4 py-8">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
