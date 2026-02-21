import { Product } from './types';

export const generateDummyProducts = (n: number): Product[] => {
  const categories = ['Wands', 'Accessories', 'Potions', 'Stationery', 'Plushies', 'Apparel'];
  const brands = ['Luna\'s Lovelies', 'Starry Supplies', 'Pastel Potions', 'The Cute Cauldron', 'Honeydukes Sweetshop'];
  
  const products: Product[] = [];

  for (let i = 1; i <= n; i++) {
    const category = categories[i % categories.length];
    const brand = brands[i % brands.length];
    const id = 2000 + i; 
    
    const imgKeywords = ['pastel', 'watercolor', 'magic', 'aesthetic', 'cute', 'minimal', 'sparkle'];
    const keyword = imgKeywords[i % imgKeywords.length];

    products.push({
      id: id,
      title: `${category} Of ${brand.split(' ')[0]} #${i}`,
      description: `A very cute and ${keyword} ${category.toLowerCase()} that will make your day magical! Designed by ${brand} for the modern witch and wizard.`,
      price: Math.floor(Math.random() * 150) + 15,
      discountPercentage: Math.random() > 0.5 ? Math.floor(Math.random() * 15) : 0,
      rating: parseFloat((Math.random() * (5 - 4) + 4).toFixed(2)), 
      stock: Math.floor(Math.random() * 50) + 10,
      brand: brand,
      category: category,
      thumbnail: `https://loremflickr.com/400/400/${keyword},magic?lock=${i}`,
      images: [
        `https://loremflickr.com/600/600/${keyword}?lock=${i + 10}`,
        `https://loremflickr.com/600/600/${keyword},wizard?lock=${i + 20}`,
        `https://loremflickr.com/600/600/${keyword},cute?lock=${i + 30}`,
      ]
    });
  }

  return products;
};

export const dummyProducts = generateDummyProducts(50);
