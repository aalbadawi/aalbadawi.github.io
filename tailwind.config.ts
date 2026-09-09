/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
          950: '#060913',
        },
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-in-out forwards',
        'fade-right': 'fade-right 1.5s ease-in-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        'fade-right': {
          '0%': {
            transform: 'translateX(-50px)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '100%',
          },
        },
      },
    },
  },
  plugins: [],
};

