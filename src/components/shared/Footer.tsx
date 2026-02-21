export default function Footer() {
  return (
    <footer className="bg-hp-dark text-hp-gold p-12 text-center mt-16 border-t-8 border-hp-gold">
      <div className="container mx-auto">
        <p className="text-2xl font-bold tracking-widest mb-4">WIZARD STORE &copy; {new Date().getFullYear()}</p>
        <p className="text-sm italic opacity-70 tracking-tighter">"Non-magical duplication prohibited by the Ministry of Magic."</p>
      </div>
    </footer>
  );
}
