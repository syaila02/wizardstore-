

import { Product } from '@/lib/types';

const BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    const data = await res.json();
    
    await new Promise(resolve => setTimeout(resolve, 500));
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}: ${res.statusText}`);
    }
    const data = await res.json();
    
    await new Promise(resolve => setTimeout(resolve, 500));
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};
