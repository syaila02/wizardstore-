


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
    <div className="max-w-4xl mx-auto bg-hp-dark border-4 border-hp-gold p-8 shadow-gold-glow relative">
      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-hp-gold opacity-50"></div>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-hp-gold opacity-50"></div>

      <h1 className="text-5xl font-bold text-center mb-12 text-hp-gold text-glow uppercase tracking-widest border-b-2 border-hp-gold pb-4">
        OWL POST ORDERS
      </h1>

      {itemCount === 0 ? (
        <div className="text-center text-hp-gold/60 text-2xl italic py-12">
          Your post bag is empty. Hogwarts awaits your selection!
        </div>
      ) : (
        <div>
          <div className="space-y-6 mb-12">
            {cartItems.map(item => {
              const magical = getMagicalData(item.id);
              return (
                <div
                  key={item.id}
                  className="flex items-center bg-hp-red/10 border border-hp-gold/30 rounded-sm p-6 hover:bg-hp-red/20 transition-all duration-300"
                >
                  <div className="relative w-28 h-28 mr-6 flex-shrink-0 border-2 border-hp-gold overflow-hidden">
                    <Image
                      src={magical.image}
                      alt={magical.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="grayscale-25"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-hp-gold mb-1">{magical.title}</h2>
                    <p className="text-white text-lg">${item.price.toFixed(2)} x {item.quantity}</p>
                    <p className="text-hp-gold font-bold text-xl mt-2 italic">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className="bg-hp-dark border border-hp-gold/50 text-hp-gold hover:bg-hp-gold hover:text-hp-dark"
                    >
                      -
                    </Button>
                    <span className="text-white text-xl font-bold w-6 text-center">{item.quantity}</span>
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-hp-dark border border-hp-gold/50 text-hp-gold hover:bg-hp-gold hover:text-hp-dark"
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      size="small"
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 border border-red-900 bg-red-900/50 hover:bg-red-700"
                    >
                      BANISH
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-hp-red/20 border-2 border-hp-gold p-8 rounded-sm shadow-inner">
            <div className="flex justify-between items-center text-2xl font-bold text-white mb-4">
              <span className="tracking-wider uppercase">POST BAG CONTENT:</span>
              <span>{itemCount} Artifacts</span>
            </div>
            <div className="flex justify-between items-center text-4xl font-bold text-hp-gold mb-8 text-glow">
              <span className="tracking-widest uppercase">TOTAL GALLEONS:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-end space-x-6">
              <Button 
                variant="danger" 
                onClick={() => setShowClearCartConfirm(true)}
                className="bg-hp-dark text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                CLEAR BAG
              </Button>
              <Button className="bg-hp-gold text-hp-dark border-2 border-hp-dark hover:bg-white hover:scale-105 transition-all duration-500 text-xl font-extrabold px-12 py-4">
                TRANSMUTE TO ORDER
              </Button>
            </div>
          </div>
        </div>
      )}

      {showClearCartConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-hp-dark border-4 border-hp-gold p-10 rounded-sm shadow-gold-glow max-w-md text-center">
            <p className="text-hp-gold text-2xl font-bold mb-8 italic">"Are you certain you wish to banish all artifacts from your bag?"</p>
            <div className="flex justify-center space-x-8">
              <Button 
                variant="secondary" 
                onClick={() => setShowClearCartConfirm(false)}
                className="px-8 py-3 bg-hp-red/20 text-white hover:bg-hp-red/40"
              >
                STAY
              </Button>
              <Button 
                variant="danger" 
                onClick={handleClearCart}
                className="px-8 py-3 bg-red-700 hover:bg-red-600 shadow-lg"
              >
                BANISH ALL
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
