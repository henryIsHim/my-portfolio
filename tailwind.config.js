/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue': {
          900: '#07091a',
          800: '#0d0b1e',
          700: '#12103a',
          600: '#1a1650',
          500: '#2d2a6e',
        },
        'light-gray': {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
        'brand-blue': {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        'accent-blue': {
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
        },
      },
      backgroundImage: {
        'gradient-dark':   'linear-gradient(135deg, #07091a 0%, #0d0b1e 50%, #12103a 100%)',
        'gradient-light':  'linear-gradient(135deg, #f5f5ff 0%, #eeecff 50%, #e8e6ff 100%)',
        'gradient-blue':   'linear-gradient(135deg, #312e81 0%, #3730a3 50%, #4f46e5 100%)',
        'gradient-accent': 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
      },
      animation: {
        'fade-in':   'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'glow':      'glow 2s ease-in-out infinite alternate',
        'marquee':   'marquee 14s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.8)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.3333%)' },
        },
      },
    },
  },
  plugins: [],
}
