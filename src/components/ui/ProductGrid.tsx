
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
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToCart(product);
          setShowToast(true);
        }} 
        className="w-full mt-6 py-3 border border-hp-gold/50 bg-transparent text-hp-gold hover:bg-hp-gold hover:text-hp-dark transition-all duration-500 font-bold uppercase tracking-[0.2em] text-[10px] relative overflow-hidden group/btn"
      >
        <span className="relative z-10">Cast into Cart</span>
        <div className="absolute inset-0 bg-hp-gold -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
      </button>
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
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
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
    <div className="space-y-16">
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-8 bg-hp-dark/50 p-8 border border-hp-gold/20 backdrop-blur-md">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for artifacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-b border-hp-gold/30 text-hp-gold p-3 focus:outline-none focus:border-hp-gold transition-colors placeholder-hp-gold/20 font-serif italic text-sm"
          />
          <span className="absolute right-0 top-3 opacity-30">🔍</span>
        </div>
        
        <div className="flex gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-hp-dark border border-hp-gold/30 text-hp-gold p-3 focus:outline-none cursor-pointer text-[10px] uppercase tracking-widest min-w-[120px]"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-hp-dark border border-hp-gold/30 text-hp-gold p-3 focus:outline-none cursor-pointer text-[10px] uppercase tracking-widest min-w-[150px]"
          >
            <option value="default">Default Sorting</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredAndSortedProducts.map(product => {
          // If it's an API product, we might want to still use transformation for "magic" look
          // but if it's our dummy product, it's already magical.
          const isDummy = product.id > 1000;
          const displayTitle = isDummy ? product.title : getMagicalData(product.id).title;
          const displayImage = isDummy ? product.thumbnail : getMagicalData(product.id).image;
          const displayDesc = isDummy ? product.description : getMagicalData(product.id).description;

          return (
            <div
              key={product.id}
              className="group relative flex flex-col bg-hp-dark/40 border border-hp-gold/10 transition-all duration-700 hover:border-hp-gold/40 hover:-translate-y-2"
            >
              {/* Sale Ribbon */}
              {product.discountPercentage > 10 && (
                <div className="absolute -top-2 -right-2 z-20 bg-hp-gold text-hp-dark text-[8px] font-bold px-3 py-1 uppercase tracking-tighter transform rotate-12 shadow-lg">
                  {Math.round(product.discountPercentage)}% OFF
                </div>
              )}

              <Link href={`/products/${product.id}`} className="block relative h-64 w-full overflow-hidden border-b border-hp-gold/10">
                <Image
                  src={displayImage}
                  alt={displayTitle}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-[3s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-hp-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] text-hp-gold/40 uppercase tracking-[0.2em]">{product.category}</span>
                  <div className="flex text-hp-gold text-[10px]">
                    {"★".repeat(Math.round(product.rating))}
                    <span className="text-hp-gold/20">{"★".repeat(5 - Math.round(product.rating))}</span>
                  </div>
                </div>

                <Link href={`/products/${product.id}`}>
                  <h2 className="text-sm font-bold text-hp-gold mb-3 tracking-[0.1em] uppercase line-clamp-1 group-hover:text-glow transition-all">
                    {displayTitle}
                  </h2>
                </Link>
                
                <p className="text-hp-parchment/50 text-[10px] italic mb-6 font-serif line-clamp-2 leading-relaxed">
                  &quot;{displayDesc}&quot;
                </p>

                <div className="mt-auto pt-6 border-t border-hp-gold/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    {product.discountPercentage > 0 && (
                      <span className="text-[10px] line-through text-hp-gold/30">
                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                      </span>
                    )}
                    <span className="text-lg font-light text-hp-gold/90 tracking-widest">${product.price.toFixed(2)}</span>
                  </div>
                  <AddToCartButton product={{...product, title: displayTitle}} />
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-hp-gold/20 group-hover:border-hp-gold/50 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-hp-gold/20 group-hover:border-hp-gold/50 transition-colors"></div>
            </div>
          );
        })}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-32 border border-dashed border-hp-gold/20">
          <p className="font-serif text-hp-gold/40 text-xl italic animate-pulse">
            &quot;The vault appears to be empty, or the artifacts are hidden by a cloaking spell...&quot;
          </p>
        </div>
      )}
    </div>
  );
}
