


'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import { getMagicalData } from '../../lib/transformations';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartItemCount, clearCart } =
    useCart();
  const total = getCartTotal();
  const itemCount = getCartItemCount();

  const [showClearCartConfirm, setShowClearCartConfirm] = useState(false);

  const handleClearCart = () => {
    clearCart();
    setShowClearCartConfirm(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-hp-dark border border-hp-gold/20 p-12 relative">
      <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-hp-gold/30"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-hp-gold/30"></div>

      <h1 className="text-4xl font-bold text-center mb-16 text-hp-gold uppercase tracking-[0.4em] border-b border-hp-gold/10 pb-8">
        Owl Post Orders
      </h1>

      {itemCount === 0 ? (
        <div className="text-center text-hp-gold/40 text-xl italic py-20 font-serif">
          "Your post bag is empty. Hogwarts awaits your selection."
        </div>
      ) : (
        <div className="space-y-12">
          <div className="space-y-4">
            {cartItems.map(item => {
              const magical = getMagicalData(item.id);
              return (
                <div
                  key={item.id}
                  className="flex items-center bg-hp-dark border border-hp-gold/10 p-6 hover:border-hp-gold/30 transition-all duration-700"
                >
                  <div className="relative w-24 h-24 mr-8 flex-shrink-0 border border-hp-gold/20 overflow-hidden grayscale-[0.4]">
                    <Image
                      src={magical.image}
                      alt={magical.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-bold text-hp-gold tracking-widest uppercase mb-1">{magical.title}</h2>
                    <p className="text-hp-parchment/50 text-xs tracking-widest uppercase">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-hp-gold/20">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                        className="px-3 py-1 text-hp-gold/60 hover:text-hp-gold disabled:opacity-20 transition-colors"
                      >
                        -
                      </button>
                      <span className="text-hp-gold text-xs font-bold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-hp-gold/60 hover:text-hp-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <Button
                      variant="danger"
                      size="small"
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] py-1.5 px-3"
                    >
                      Banish
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-hp-dark border border-hp-gold/20 p-10 mt-16">
            <div className="flex justify-between items-center text-xs tracking-[0.3em] text-hp-parchment/40 mb-6 uppercase">
              <span>Post Bag Content:</span>
              <span>{itemCount} Artifacts</span>
            </div>
            <div className="flex justify-between items-center text-3xl font-light text-hp-gold mb-12 tracking-widest border-t border-hp-gold/10 pt-8">
              <span className="text-sm tracking-[0.4em] uppercase opacity-60">Total Galleons:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-end gap-8">
              <button 
                onClick={() => setShowClearCartConfirm(true)}
                className="text-[10px] tracking-[0.3em] text-red-900/50 hover:text-red-800 uppercase transition-colors font-bold"
              >
                Clear Bag
              </button>
              <Button className="px-12 py-4 text-sm">
                Transmute to Order
              </Button>
            </div>
          </div>
        </div>
      )}

      {showClearCartConfirm && (
        <div className="fixed inset-0 bg-hp-dark/95 flex items-center justify-center z-50 backdrop-blur-sm animate-in fade-in duration-700">
          <div className="bg-hp-dark border border-hp-gold/20 p-12 max-w-md text-center">
            <p className="text-hp-gold text-lg font-bold mb-10 tracking-widest uppercase italic">"Banish all artifacts?"</p>
            <div className="flex justify-center gap-8">
              <button 
                onClick={() => setShowClearCartConfirm(false)}
                className="text-xs tracking-widest text-hp-parchment/60 hover:text-hp-gold uppercase transition-colors"
              >
                Stay
              </button>
              <Button 
                variant="danger" 
                onClick={handleClearCart}
                className="px-8 py-2 text-xs"
              >
                Banish All
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
