

import { Product } from '@/lib/types';

const BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    const data = await res.json();
    
    // Reduced simulation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 100));
    return data.products;
  } catch (error) {
    console.error('API Error in fetchProducts:', error);
    throw new Error('Failed to retrieve magical artifacts from the vault.');
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}: ${res.statusText}`);
    }
    const data = await res.json();
    
    // Reduced simulation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 100));
    return data;
  } catch (error) {
    console.error(`API Error in fetchProductById (${id}):`, error);
    throw new Error('This artifact seems to be missing from our records.');
  }
};
