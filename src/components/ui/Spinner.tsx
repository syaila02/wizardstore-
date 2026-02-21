import React from 'react';

export default function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="relative">
        {/* Golden Snitch Body */}
        <div className="h-12 w-12 bg-hp-gold rounded-full shadow-gold-glow animate-bounce"></div>
        {/* Magical Wings Effect */}
        <div className="absolute -top-2 -left-8 h-4 w-10 bg-white/30 rounded-full blur-sm animate-pulse rotate-12"></div>
        <div className="absolute -top-2 -right-8 h-4 w-10 bg-white/30 rounded-full blur-sm animate-pulse -rotate-12"></div>
      </div>
      <p className="mt-8 font-cinzel text-hp-gold text-xl tracking-[0.3em] animate-pulse">
        REVEALING MAGIC...
      </p>
    </div>
  );
}
