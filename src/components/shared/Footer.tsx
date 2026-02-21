export default function Footer() {
  return (
    <footer className="bg-hp-dark text-hp-parchment p-16 text-center mt-20 border-t border-hp-gold/20">
      <div className="container mx-auto">
        <p className="text-xl font-bold tracking-[0.4em] mb-6 text-hp-gold">WIZARD STORE</p>
        <p className="text-[10px] italic opacity-50 tracking-[0.2em] uppercase">"Non-magical duplication prohibited by the Ministry of Magic."</p>
        <p className="mt-8 text-[10px] opacity-30 tracking-widest uppercase">&copy; {new Date().getFullYear()} - Established 1842</p>
      </div>
    </footer>
  );
}
