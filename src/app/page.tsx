import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center">
      <div className="relative w-full h-[600px] mb-8 border-8 border-hp-gold shadow-gold-glow">
        <Image
          src="https://images.unsplash.com/photo-1547756536-cde3673fa2e5" 
          alt="Hogwarts Castle"
          fill
          style={{ objectFit: 'cover' }}
          className="grayscale-50 brightness-50"
        />
        <div className="absolute inset-0 bg-hp-red/30 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <h1 className="text-7xl font-bold text-hp-gold mb-6 text-glow tracking-[0.2em] uppercase">
            WIZARD STORE
          </h1>
          <p className="text-3xl text-white italic mb-12 font-serif max-w-2xl tracking-wide border-y border-hp-gold/30 py-4">
            "Your one-stop shop for all magical needs, from the heart of Diagon Alley."
          </p>
          <Link
            href="/products"
            className="px-12 py-5 bg-hp-gold text-hp-dark text-2xl font-bold rounded-sm shadow-gold-glow hover:bg-white hover:scale-110 transition-all duration-500 uppercase tracking-widest"
          >
            ENTER THE VAULT
          </Link>
        </div>
        
        {/* Decorative corner pieces */}
        <div className="absolute top-4 left-4 w-20 h-20 border-t-8 border-l-8 border-hp-gold"></div>
        <div className="absolute top-4 right-4 w-20 h-20 border-t-8 border-r-8 border-hp-gold"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 border-b-8 border-l-8 border-hp-gold"></div>
        <div className="absolute bottom-4 right-4 w-20 h-20 border-b-8 border-r-8 border-hp-gold"></div>
      </div>
    </div>
  );
}
