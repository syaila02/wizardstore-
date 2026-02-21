


import { fetchProducts } from '@/services/api';
import { Product } from '@/lib/types';
import { Suspense } from 'react';
import Spinner from '@/components/ui/Spinner';
import ProductGrid from '@/components/ui/ProductGrid';



export const dynamic = 'force-dynamic'; 

async function ProductsList() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    products = await fetchProducts();
  } catch (err: any) {
    error = err.message || 'Failed to fetch products';
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return <ProductGrid products={products} />;
}

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center mb-16 text-hp-gold text-glow uppercase tracking-[0.3em] border-b-2 border-hp-gold/30 pb-6 max-w-4xl mx-auto">
        THE VAULT
      </h1>
      <Suspense fallback={<Spinner />}>
        <ProductsList />
      </Suspense>
    </div>
  );
}
