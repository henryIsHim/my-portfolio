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
      fontFamily: {
        sans:  ['Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'brand-blue': {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'light-gray': {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
      },
      backgroundImage: {
        'gradient-dark':   'linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #262626 100%)',
        'gradient-light':  'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #fafafa 100%)',
        'gradient-blue':   'linear-gradient(135deg, #171717 0%, #262626 50%, #404040 100%)',
        'gradient-accent': 'linear-gradient(135deg, #404040 0%, #737373 100%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'marquee':    'marquee 14s linear infinite',
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
          '0%':   { boxShadow: '0 0 12px rgba(0, 0, 0, 0.2)' },
          '100%': { boxShadow: '0 0 24px rgba(0, 0, 0, 0.4)' },
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
