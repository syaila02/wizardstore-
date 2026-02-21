'use client';
import { useEffect } from 'react';

interface ToastProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div
      className={`fixed top-8 right-8 z-[250] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-hp-dark border border-hp-gold/40 text-hp-gold px-8 py-4 shadow-2xl font-cinzel text-[10px] tracking-[0.3em] uppercase">
        Artifact Summoned
      </div>
    </div>
  );
}