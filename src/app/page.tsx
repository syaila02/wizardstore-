import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <div className="relative w-full h-[70vh] mb-12 border border-hp-gold/30 p-2">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1547756536-cde3673fa2e5" 
            alt="Hogwarts Castle"
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-[0.4] transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-hp-dark/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <h1 className="text-6xl md:text-8xl font-bold text-hp-gold mb-8 tracking-[0.4em] uppercase">
              WIZARD STORE
            </h1>
            <p className="text-xl md:text-2xl text-hp-parchment italic mb-12 font-serif max-w-3xl tracking-[0.1em] border-y border-hp-gold/20 py-6">
              "Your one-stop shop for all magical needs, from the heart of Diagon Alley."
            </p>
            <Link
              href="/products"
              className="px-16 py-4 border border-hp-gold text-hp-gold text-sm font-bold hover:bg-hp-gold hover:text-hp-dark transition-all duration-700 uppercase tracking-[0.5em]"
            >
              Enter The Vault
            </Link>
          </div>
          
          <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-hp-gold/50"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-hp-gold/50"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-hp-gold/50"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-hp-gold/50"></div>
        </div>
      </div>
    </div>
  );
}
