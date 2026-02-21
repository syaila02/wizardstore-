'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-hp-dark/90 backdrop-blur-md border-b-4 border-hp-gold shadow-gold-glow">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-10 w-10 bg-hp-gold rounded-full flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
             <span className="text-hp-dark font-bold text-2xl">W</span>
          </div>
          <span className="text-3xl font-bold tracking-[0.2em] text-hp-gold text-glow group-hover:text-white transition-colors uppercase">
            Wizard Store
          </span>
        </Link>
        <nav className="flex items-center space-x-10">
          <Link href="/products" className="text-sm font-bold tracking-widest text-hp-gold hover:text-white transition-all uppercase border-b border-transparent hover:border-hp-gold">
            The Vault
          </Link>
          <Link href="/cart" className="relative group flex items-center gap-2">
            <span className="text-sm font-bold tracking-widest text-hp-gold group-hover:text-white uppercase">Owl Post</span>
            <div className="bg-hp-gold text-hp-dark px-2 py-0.5 rounded-sm font-bold text-xs group-hover:bg-white transition-colors">
              {itemCount}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
