import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-hp-dark text-hp-parchment pt-24 pb-12 border-t border-hp-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-[0.3em] text-hp-gold uppercase">Wizard Store</h3>
            <p className="text-xs text-hp-parchment/50 leading-relaxed italic font-serif">
              &quot;Providing the finest magical instruments, potions, and enchanted artifacts since 1842. From Diagon Alley to your doorstep.&quot;
            </p>
            <div className="flex space-x-4 opacity-50">
              <span className="cursor-help hover:text-hp-gold transition-colors">🔮</span>
              <span className="cursor-help hover:text-hp-gold transition-colors">📜</span>
              <span className="cursor-help hover:text-hp-gold transition-colors">🕯️</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-widest text-hp-gold/80 uppercase">Navigation</h4>
            <ul className="space-y-3 text-[10px] uppercase tracking-widest">
              <li><Link href="/" className="hover:text-hp-gold transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-hp-gold transition-colors">The Vault</Link></li>
              <li><Link href="/cart" className="hover:text-hp-gold transition-colors">Owl Post</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-widest text-hp-gold/80 uppercase">Legal</h4>
            <ul className="space-y-3 text-[10px] uppercase tracking-widest">
              <li className="hover:text-hp-gold transition-colors cursor-pointer">Terms of Sorcery</li>
              <li className="hover:text-hp-gold transition-colors cursor-pointer">Privacy Potion</li>
              <li className="hover:text-hp-gold transition-colors cursor-pointer">Ministry Rules</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-widest text-hp-gold/80 uppercase">Location</h4>
            <p className="text-[10px] text-hp-parchment/50 leading-relaxed tracking-widest uppercase">
              93 Diagon Alley,<br />
              London, Wizarding World<br />
              London SW1A 1AA
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-hp-gold/5 text-center">
          <p className="text-[10px] italic opacity-40 tracking-[0.2em] uppercase mb-4">
            &quot;Non-magical duplication prohibited by the Ministry of Magic.&quot;
          </p>
          <p className="text-[9px] opacity-20 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Wizard Store. Crafted with Wand & Ink.
          </p>
        </div>
      </div>
    </footer>
  );
}
