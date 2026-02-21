
"use client";

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/types';
import { getMagicalData } from '../../lib/transformations';
import Toast from './Toast';
import { useState } from 'react';

function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button 
        onClick={() => {
          addToCart(product);
          setShowToast(true);
        }} 
        className="w-full py-4 text-sm"
      >
        Acquire Artifact
      </Button>
      <Toast isVisible={showToast} onClose={() => setShowToast(false)} />
    </>
  );
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const magical = getMagicalData(product.id);
  
  return (
    <div className="max-w-6xl mx-auto bg-hp-dark border border-hp-gold/20 p-4 relative overflow-hidden md:flex gap-16 min-h-[70vh]">
      {/* Corner Ornaments */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-hp-gold/30 z-10 pointer-events-none"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-hp-gold/30 z-10 pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-hp-gold/30 z-10 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-hp-gold/30 z-10 pointer-events-none"></div>

      <div className="md:flex-shrink-0 relative h-96 md:h-auto md:w-1/2 border border-hp-gold/10 rounded-sm overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
        <Image
          src={magical.image}
          alt={magical.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-sm transition-transform duration-[5s] hover:scale-105"
        />
      </div>
      
      <div className="p-12 flex-grow md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-hp-gold mb-8 tracking-[0.3em] border-b border-hp-gold/20 pb-8 text-center uppercase">
          {magical.title}
        </h1>
        <p className="text-hp-parchment/70 text-lg italic mb-12 text-center font-serif leading-relaxed px-8">
          "{magical.description}"
        </p>
        
        <div className="flex flex-col items-center justify-center mb-12 gap-6">
          <span className="text-5xl font-light text-hp-gold/90 tracking-widest">${product.price.toFixed(2)}</span>
          <div className="flex gap-6 items-center">
            <span className="text-[10px] tracking-[0.3em] text-hp-gold/50 uppercase">Stock: {product.stock}</span>
            <div className="h-1 w-1 bg-hp-gold/30 rounded-full"></div>
            <span className="text-[10px] tracking-[0.3em] text-hp-gold/50 uppercase">{product.category}</span>
          </div>
        </div>
        
        <div className="text-center space-y-4 mb-12 border-t border-b border-hp-gold/10 py-8">
          <p className="text-[10px] tracking-[0.2em] text-hp-parchment/40 uppercase">Manufacturer: Ollivander's & {product.brand}</p>
          <p className="text-[10px] tracking-[0.2em] text-hp-parchment/40 uppercase">Ancient Rating: {product.rating} / 5 Stars</p>
        </div>
        
        <div className="max-w-xs mx-auto w-full">
          <AddToCartButton product={{...product, title: magical.title}} />
        </div>
      </div>
    </div>
  );
}
