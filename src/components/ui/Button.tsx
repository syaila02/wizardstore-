import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-cinzel font-semibold transition-all duration-500 uppercase tracking-[0.2em] border';

  const variantStyles = {
    primary: 'bg-transparent text-hp-gold border-hp-gold/60 hover:border-hp-gold hover:bg-hp-gold/5',
    secondary: 'bg-hp-dark text-hp-parchment border-hp-gold/40 hover:border-hp-gold hover:text-hp-gold',
    danger: 'bg-transparent text-red-800 border-red-900/40 hover:border-red-800 hover:text-red-700',
  };

  const sizeStyles = {
    small: 'text-xs px-3 py-1',
    medium: 'text-sm px-6 py-2',
    large: 'text-lg px-10 py-4',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
