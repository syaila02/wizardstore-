
"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/types';
import { getMagicalData } from '../../lib/transformations';
import Toast from './Toast';

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
        className="w-full mt-4 border-2 border-hp-gold bg-hp-dark text-hp-gold hover:bg-hp-gold hover:text-hp-dark transition-all duration-300 shadow-gold-glow"
      >
        CAST INTO CART
      </Button>
      <Toast isVisible={showToast} onClose={() => setShowToast(false)} />
    </>
  );
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  const categories = useMemo(() => {
    return ['all', ...Array.from(new Set(products.map(p => p.category)))];
  }, [products]);

  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter(product => {
        const magical = getMagicalData(product.id);
        const matchesSearch = magical.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortOrder === 'low') return a.price - b.price;
        if (sortOrder === 'high') return b.price - a.price;
        return 0;
      });
  }, [products, searchTerm, selectedCategory, sortOrder]);

  return (
    <div className="space-y-12">
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-8 bg-hp-dark p-8 border border-hp-gold/20 shadow-xl">
        <input
          type="text"
          placeholder="Search for artifacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-hp-dark border-b border-hp-gold/30 text-hp-gold p-2 focus:outline-none focus:border-hp-gold transition-colors placeholder-hp-gold/30 font-cinzel text-sm"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-hp-dark border-b border-hp-gold/30 text-hp-gold p-2 focus:outline-none cursor-pointer font-cinzel uppercase text-xs tracking-widest"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-hp-dark border-b border-hp-gold/30 text-hp-gold p-2 focus:outline-none cursor-pointer font-cinzel uppercase text-xs tracking-widest"
        >
          <option value="default">Default Sorting</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredAndSortedProducts.map(product => {
          const magical = getMagicalData(product.id);
          
          return (
            <div
              key={product.id}
              className="group relative bg-hp-dark border border-hp-gold/20 p-2 transition-all duration-700 hover:border-hp-gold/50"
            >
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-hp-gold/40"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-hp-gold/40"></div>
              
              <Link href={`/products/${product.id}`} className="block relative h-80 w-full overflow-hidden grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000">
                <Image
                  src={magical.image}
                  alt={magical.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-[2s] group-hover:scale-105"
                />
              </Link>
              
              <div className="p-8 flex flex-col items-center">
                <Link href={`/products/${product.id}`}>
                  <h2 className="text-xl font-bold text-hp-gold mb-4 tracking-[0.2em] text-center uppercase">
                    {magical.title}
                  </h2>
                </Link>
                <p className="text-hp-parchment/60 text-xs italic mb-8 text-center font-serif leading-relaxed max-w-[250px]">
                  "{magical.description}"
                </p>
                <div className="w-full flex flex-col items-center pt-6 border-t border-hp-gold/10">
                  <span className="text-2xl font-light text-hp-gold/80 mb-6 tracking-widest">${product.price.toFixed(2)}</span>
                  <AddToCartButton product={{...product, title: magical.title}} />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-hp-gold/40"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-hp-gold/40"></div>
            </div>
          );
        })}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="font-cinzel text-hp-gold text-2xl animate-pulse italic">
            "No such magical artifact exists in our vaults..."
          </p>
        </div>
      )}
    </div>
  );
}
