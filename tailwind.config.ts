import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hp-red': '#741010', // Merah Gryffindor lebih gelap & elegan
        'hp-gold': '#FFD700',
        'hp-dark': '#121212',
        'hp-parchment': '#f4e4bc',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
      },
      animation: {
        'magical-glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 5px #FFD700)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 20px #FFD700)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(255, 215, 0, 0.3)',
        'gold-glow-hover': '0 0 30px rgba(255, 215, 0, 0.6)',
      }
    },
  },
  plugins: [],
};
export default config;
