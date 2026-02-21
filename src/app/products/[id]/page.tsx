


import { fetchProductById } from '@/services/api';
import { Product } from '@/lib/types';
import { Suspense } from 'react';
import Spinner from '@/components/ui/Spinner';
import ProductDetailClient from '@/components/ui/ProductDetailClient';



export const dynamic = 'force-dynamic'; 

async function ProductDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  let product: Product | null = null;
  let error: string | null = null;

  try {
    product = await fetchProductById(id);
  } catch (err: any) {
    error = err.message || `Failed to fetch product with ID ${id}`;
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-white">Product not found.</div>;
  }

  return <ProductDetailClient product={product} />;
}


export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Spinner />}>
      <ProductDetails params={params} />
    </Suspense>
  );
}
