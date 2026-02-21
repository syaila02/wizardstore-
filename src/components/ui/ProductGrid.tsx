
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
      <div className="flex flex-col md:flex-row gap-6 bg-hp-dark/50 p-6 border-2 border-hp-gold/30 rounded-sm">
        <input
          type="text"
          placeholder="Search for artifacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-hp-dark border-2 border-hp-gold text-hp-gold p-3 rounded-sm focus:outline-none focus:shadow-gold-glow placeholder-hp-gold/40 font-cinzel"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-hp-dark border-2 border-hp-gold text-hp-gold p-3 rounded-sm focus:outline-none cursor-pointer font-cinzel uppercase text-sm"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-hp-dark border-2 border-hp-gold text-hp-gold p-3 rounded-sm focus:outline-none cursor-pointer font-cinzel uppercase text-sm"
        >
          <option value="default">Default Sorting</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-4">
        {filteredAndSortedProducts.map(product => {
          // TRANSFORMASI TAMPILAN SAJA
          const magical = getMagicalData(product.id);
          
          return (
            <div
              key={product.id}
              className="group relative bg-hp-dark border-4 border-hp-gold p-1 rounded-sm overflow-hidden flex flex-col transform transition-all duration-500 hover:-translate-y-2 hover:rotate-1 shadow-gold-glow hover:shadow-gold-glow-hover"
            >
              {/* Ornamen Sudut ala Buku Tua */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-hp-gold z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-hp-gold z-10"></div>
              
              <Link href={`/products/${product.id}`} className="block relative h-72 w-full overflow-hidden border-b-2 border-hp-gold">
                <Image
                  src={magical.image}
                  alt={magical.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="grayscale-25 group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-hp-gold opacity-10 mix-blend-overlay"></div>
              </Link>
              
              <div className="p-6 flex-grow flex flex-col bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                <Link href={`/products/${product.id}`}>
                  <h2 className="text-2xl font-bold text-hp-gold mb-3 text-glow tracking-widest text-center uppercase border-b border-hp-gold/30 pb-2">
                    {magical.title}
                  </h2>
                </Link>
                <p className="text-gray-300 text-sm italic mb-6 flex-grow text-center font-serif leading-relaxed">
                  "{magical.description}"
                </p>
                <div className="flex flex-col items-center mt-auto">
                  <span className="text-3xl font-bold text-hp-gold mb-2">${product.price.toFixed(2)}</span>
                  <AddToCartButton product={{...product, title: magical.title}} />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-hp-gold z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-hp-gold z-10"></div>
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
