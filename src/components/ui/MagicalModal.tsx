'use client';

import { useCart } from '@/contexts/CartContext';
import Button from './Button';

export default function MagicalModal() {
  const { lastAddedItem, setLastAddedItem } = useCart();

  if (!lastAddedItem) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-hp-dark/95 backdrop-blur-sm animate-in fade-in duration-700">
      <div className="relative bg-hp-dark border border-hp-gold/30 p-12 max-w-md w-full">
        {/* Corner Ornaments */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-hp-gold/40"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-hp-gold/40"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-hp-gold/40"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-hp-gold/40"></div>

        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="h-16 w-16 border border-hp-gold/30 flex items-center justify-center grayscale opacity-80">
              <span className="text-3xl">🦉</span>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-hp-gold tracking-[0.3em] uppercase font-cinzel">
            Artifact Summoned
          </h2>
          
          <p className="text-hp-parchment/80 text-sm italic font-serif leading-relaxed">
            &quot;The <span className="text-hp-gold"> {lastAddedItem} </span> has been successfully added to your magical post bag.&quot;
          </p>

          <div className="pt-6">
            <Button 
              onClick={() => setLastAddedItem(null)}
              className="w-full py-3"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
