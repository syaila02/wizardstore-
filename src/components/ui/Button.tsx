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
  const baseStyles = 'font-cinzel font-bold rounded-sm transition-all duration-300 uppercase tracking-widest border-2';

  const variantStyles = {
    primary: 'bg-hp-gold text-hp-dark border-hp-gold hover:bg-white hover:border-white shadow-gold-glow',
    secondary: 'bg-hp-dark text-hp-gold border-hp-gold hover:bg-hp-gold hover:text-hp-dark',
    danger: 'bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white',
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
