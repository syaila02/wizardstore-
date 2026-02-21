'use client';

import { useCart } from '@/contexts/CartContext';
import Button from './Button';

export default function MagicalModal() {
  const { lastAddedItem, setLastAddedItem } = useCart();

  if (!lastAddedItem) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-hp-dark/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-hp-dark border-      {/* Corner Ornaments */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-hp-gold"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-hp-gold"></div>

        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="h-20 w-20 bg-hp-gold rounded-full flex items-center justify-center shadow-gold-glow animate-bounce">
              <span className="text-4xl">🦉</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-hp-gold tracking-widest uppercase font-cinzel">
            Artifact Summoned!
          </h2>
          
          <p className="text-white text-lg italic font-serif">
            "The <span className="text-hp-gold font-bold"> {lastAddedItem} </span> has been successfully added to your magical post bag."
          </p>

          <div className="pt-4">
            <Button 
              onClick={() => setLastAddedItem(null)}
              className="w-full bg-hp-gold text-hp-dark hover:bg-white py-3 text-xl font-extrabold"
            >
              CONTINUE SHOPPING
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
