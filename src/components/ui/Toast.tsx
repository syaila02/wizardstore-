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
      className={`fixed top-5 right-5 z-[250] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-hp-dark border-2 border-hp-gold text-hp-gold px-6 py-3 shadow-gold-glow rounded-sm font-cinzel text-sm tracking-widest">
        ✨ Artifact successfully added to your Owl Post!
      </div>
    </div>
  );
}