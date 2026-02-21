import { Product } from '@/lib/types';
import { generateDummyProducts } from '@/lib/dummyData';

const BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    // Kita ambil data dari API asli, tapi kita modifikasi tampilannya nanti di UI
    const res = await fetch(`${BASE_URL}/products?limit=20`);
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    const data = await res.json();
    
    // Kita tambahkan data dummy "ucu" buatan kita (sebanyak n)
    const n = 30; // Kamu bisa ganti jumlah n di sini
    const additionalDummy = generateDummyProducts(n);
    
    // Gabungkan data API dengan data dummy kita yang lebih ucu
    return [...data.products, ...additionalDummy];
  } catch (error) {
    console.error('API Error in fetchProducts:', error);
    // Jika API error, tampilkan full data dummy ucu saja
    return generateDummyProducts(50);
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const numericId = parseInt(id);
    
    // Jika ID > 2000, berarti itu produk dummy ucu kita
    if (numericId > 2000) {
      const allDummy = generateDummyProducts(100);
      const found = allDummy.find(p => p.id === numericId);
      if (found) return found;
    }

    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`API Error in fetchProductById (${id}):`, error);
    throw new Error('This cute artifact seems to be missing from our records.');
  }
};
