/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#eee4d5',
        parchment: '#e0d2bf',
        ink: '#090909',
        plum: '#800080',
        violet: '#bb2aff',
        gold: '#c8b337',
        'kalgard': {
          50: '#f6f0e8',
          100: '#eee4d5',
          200: '#e0d2bf',
          300: '#d1c0a7',
          400: '#b99a72',
          500: '#800080',
          600: '#5f005f',
          700: '#3e003f',
          800: '#1e001f',
          900: '#090909',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 
