'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-hp-dark/95 backdrop-blur-sm border-b border-hp-gold/30">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/" className="group flex items-center gap-4">
          <div className="h-12 w-12 border border-hp-gold/50 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
             <span className="text-hp-gold font-bold text-2xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">W</span>
          </div>
          <span className="text-2xl font-bold tracking-[0.3em] text-hp-gold group-hover:text-hp-parchment transition-colors uppercase">
            Wizard Store
          </span>
        </Link>
        <nav className="flex items-center space-x-12">
          <Link href="/products" className="text-xs font-semibold tracking-[0.2em] text-hp-parchment/80 hover:text-hp-gold transition-all uppercase">
            The Vault
          </Link>
          <Link href="/cart" className="relative group flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-hp-parchment/80 group-hover:text-hp-gold uppercase transition-colors">Owl Post</span>
            <div className="border border-hp-gold/50 text-hp-gold px-2 py-0.5 text-[10px] font-bold group-hover:bg-hp-gold group-hover:text-hp-dark transition-all">
              {itemCount}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
