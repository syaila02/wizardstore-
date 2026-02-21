
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
  const isDummy = product.id > 1000;
  const displayTitle = isDummy ? product.title : getMagicalData(product.id).title;
  const displayImage = isDummy ? product.thumbnail : getMagicalData(product.id).image;
  const displayDesc = isDummy ? product.description : getMagicalData(product.id).description;
  
  return (
    <div className="max-w-6xl mx-auto bg-hp-dark/60 backdrop-blur-sm border border-hp-gold/20 p-4 relative overflow-hidden md:flex gap-16 min-h-[70vh]">
      {/* Corner Ornaments */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-hp-gold/30 z-10 pointer-events-none"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-hp-gold/30 z-10 pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-hp-gold/30 z-10 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-hp-gold/30 z-10 pointer-events-none"></div>

      <div className="md:flex-shrink-0 relative h-[50vh] md:h-auto md:w-1/2 border border-hp-gold/10 rounded-sm overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 group">
        <Image
          src={displayImage}
          alt={displayTitle}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-sm transition-transform duration-[10s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-hp-dark/10 group-hover:bg-transparent transition-colors"></div>
      </div>
      
      <div className="p-8 md:p-12 flex-grow md:w-1/2 flex flex-col justify-center">
        <div className="mb-4">
          <span className="text-[10px] tracking-[0.5em] text-hp-gold uppercase bg-hp-gold/10 px-4 py-1">Ancient Artifact</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-hp-gold mb-8 tracking-[0.2em] border-b border-hp-gold/20 pb-8 uppercase">
          {displayTitle}
        </h1>
        
        <p className="text-hp-parchment/70 text-lg italic mb-12 font-serif leading-relaxed">
          &quot;{displayDesc}&quot;
        </p>
        
        <div className="flex flex-col mb-12 gap-8">
          <div className="flex items-end gap-4">
            <span className="text-5xl font-light text-hp-gold tracking-widest">${product.price.toFixed(2)}</span>
            {product.discountPercentage > 0 && (
              <span className="text-sm line-through text-hp-gold/30 mb-2">
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-hp-gold/10 flex flex-col items-center">
              <span className="text-[8px] tracking-widest text-hp-gold/40 uppercase mb-1">Stock</span>
              <span className="text-xs text-hp-gold">{product.stock} units</span>
            </div>
            <div className="p-4 border border-hp-gold/10 flex flex-col items-center">
              <span className="text-[8px] tracking-widest text-hp-gold/40 uppercase mb-1">Rarity</span>
              <span className="text-xs text-hp-gold">{product.rating >= 4.5 ? 'Legendary' : 'Common'}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 mb-12 border-t border-hp-gold/5 pt-8">
          <div className="flex justify-between text-[10px] tracking-[0.2em] text-hp-parchment/40 uppercase">
            <span>Manufacturer</span>
            <span className="text-hp-gold/60">{product.brand}</span>
          </div>
          <div className="flex justify-between text-[10px] tracking-[0.2em] text-hp-parchment/40 uppercase">
            <span>Authentication</span>
            <span className="text-hp-gold/60">Ministry of Magic</span>
          </div>
        </div>
        
        <div className="w-full">
          <AddToCartButton product={{...product, title: displayTitle}} />
        </div>
      </div>
    </div>
  );
}
