import React from 'react';

export default function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="h-12 w-12 border border-hp-gold/20 border-t-hp-gold rounded-full animate-spin"></div>
      <p className="mt-8 font-cinzel text-hp-gold/60 text-[10px] tracking-[0.4em] uppercase">
        Summoning Artifacts
      </p>
    </div>
  );
}
