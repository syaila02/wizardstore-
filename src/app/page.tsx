import Link from 'next/link';
import Image from 'next/image';

const FEATURED_CATEGORIES = [
  { name: 'Wands', icon: '🪄', color: 'from-blue-900/40' },
  { name: 'Potions', icon: '🧪', color: 'from-green-900/40' },
  { name: 'Books', icon: '📜', color: 'from-amber-900/40' },
  { name: 'Artifacts', icon: '🏺', color: 'from-purple-900/40' },
];

const TESTIMONIALS = [
  { name: 'H. Potter', quote: 'The Firebolt I bought here is lightning fast! Outstanding service.', role: 'Auror' },
  { name: 'H. Granger', quote: 'Their collection of ancient runes books is simply unparalleled.', role: 'Minister of Magic' },
  { name: 'N. Scamander', quote: 'The best place to find supplies for my magical creatures.', role: 'Magizoologist' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] border border-hp-gold/30 p-2 overflow-hidden group">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1547756536-cde3673fa2e5" 
            alt="Hogwarts Castle"
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-[0.4] transition-transform duration-[20s] group-hover:scale-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hp-dark via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
            <div className="floating mb-6">
              <span className="text-5xl opacity-80">🦉</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold text-hp-gold mb-8 tracking-[0.4em] uppercase text-glow">
              WIZARD STORE
            </h1>
            <p className="text-lg md:text-xl text-hp-parchment/80 italic mb-12 font-serif max-w-2xl tracking-[0.2em] border-y border-hp-gold/20 py-8 leading-relaxed">
              &quot;Every wand has its story. Every artifact has its soul. Welcome to the world of wonders.&quot;
            </p>
            <Link
              href="/products"
              className="magical-btn text-sm font-bold uppercase tracking-[0.5em] z-20"
            >
              Enter The Vault
            </Link>
          </div>
          
          {/* Decorative Corners */}
          <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-hp-gold/40"></div>
          <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-hp-gold/40"></div>
          <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-hp-gold/40"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-hp-gold/40"></div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-hp-gold text-center mb-16 tracking-[0.3em] uppercase">
          Magical Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURED_CATEGORIES.map((cat) => (
            <Link 
              key={cat.name}
              href={`/products?category=${cat.name.toLowerCase()}`}
              className={`relative h-64 flex flex-col items-center justify-center border border-hp-gold/20 overflow-hidden group transition-all duration-500 hover:border-hp-gold/60 bg-gradient-to-br ${cat.color} to-transparent`}
            >
              <span className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500 transform group-hover:-translate-y-2">{cat.icon}</span>
              <span className="text-hp-gold font-bold tracking-[0.2em] uppercase text-sm">{cat.name}</span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-hp-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-hp-gold/5 py-24 border-y border-hp-gold/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-hp-gold/30 text-hp-gold text-2xl font-serif">
                  &quot;
                </div>
                <p className="text-hp-parchment/70 italic font-serif leading-relaxed group-hover:text-hp-parchment transition-colors">
                  {t.quote}
                </p>
                <div className="space-y-1">
                  <div className="text-hp-gold font-bold tracking-widest uppercase text-xs">{t.name}</div>
                  <div className="text-hp-gold/40 text-[10px] uppercase tracking-tighter">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Howler Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto border border-hp-gold/20 p-12 bg-hp-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl">✉️</div>
          <h2 className="text-2xl font-bold text-hp-gold mb-4 tracking-[0.2em] uppercase">Subscribe to The Daily Prophet</h2>
          <p className="text-hp-parchment/60 text-sm mb-8 italic">Get the latest magical deals sent via owl post.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your magical email..."
              className="flex-grow bg-transparent border-b border-hp-gold/30 text-hp-gold p-3 focus:outline-none focus:border-hp-gold placeholder-hp-gold/20"
            />
            <button className="magical-btn py-3 px-8 text-xs font-bold tracking-widest">SEND OWL</button>
          </div>
        </div>
      </section>
    </div>
  );
}
