
"use client";

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/types';
import { getMagicalData } from '../../lib/transformations';

function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Button 
      onClick={() => addToCart(product)} 
      className="w-full mt-6 py-4 text-2xl border-2 border-hp-gold bg-hp-red text-hp-gold hover:bg-hp-gold hover:text-hp-dark transition-all duration-300 shadow-gold-glow uppercase font-bold"
    >
      ACQUIRE ARTIFACT
    </Button>
  );
}

export default function ProductDetailClient({ product }: { product: Product }) {
  // TRANSFORMASI TAMPILAN SAJA
  const magical = getMagicalData(product.id);
  
  return (
    <div className="max-w-6xl mx-auto bg-hp-dark border-8 border-hp-gold p-4 relative shadow-gold-glow-hover overflow-hidden md:flex gap-12">
      {/* Corner Ornaments */}
      <div className="absolute top-2 left-2 w-16 h-16 border-t-4 border-l-4 border-hp-gold z-10 pointer-events-none"></div>
      <div className="absolute top-2 right-2 w-16 h-16 border-t-4 border-r-4 border-hp-gold z-10 pointer-events-none"></div>
      <div className="absolute bottom-2 left-2 w-16 h-16 border-b-4 border-l-4 border-hp-gold z-10 pointer-events-none"></div>
      <div className="absolute bottom-2 right-2 w-16 h-16 border-b-4 border-r-4 border-hp-gold z-10 pointer-events-none"></div>

      <div className="md:flex-shrink-0 relative h-96 md:h-auto md:w-1/2 border-4 border-hp-gold rounded-sm overflow-hidden">
        <Image
          src={magical.image}
          alt={magical.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-sm"
        />
        <div className="absolute inset-0 bg-hp-red/10 mix-blend-multiply"></div>
      </div>
      
      <div className="p-12 flex-grow md:w-1/2 flex flex-col justify-center bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]">
        <h1 className="text-5xl font-bold text-hp-gold mb-6 text-glow border-b-2 border-hp-gold pb-4 tracking-widest text-center uppercase">
          {magical.title}
        </h1>
        <p className="text-hp-gold/80 text-2xl italic mb-8 text-center font-serif leading-relaxed px-4">
          "{magical.description}"
        </p>
        
        <div className="flex flex-col items-center justify-center mb-10 gap-4">
          <span className="text-6xl font-bold text-white tracking-widest">${product.price.toFixed(2)}</span>
          <div className="flex gap-4 items-center">
            <span className="px-4 py-1 border border-hp-gold text-hp-gold text-sm tracking-widest">STOCK: {product.stock}</span>
            <span className="px-4 py-1 border border-hp-gold text-hp-gold text-sm tracking-widest uppercase">{product.category}</span>
          </div>
        </div>
        
        <div className="text-center space-y-4 mb-10 border-t border-b border-hp-gold/30 py-6">
          <p className="text-hp-gold/60 tracking-wider">Manufacturer: Ollivander's & {product.brand}</p>
          <p className="text-hp-gold/60 tracking-wider">Ancient Rating: {product.rating} / 5 Stars</p>
        </div>
        
        <AddToCartButton product={{...product, title: magical.title}} />
      </div>
    </div>
  );
}
