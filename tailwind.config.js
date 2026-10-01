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
        // primary
        bedrock: '#0F0E0B',
        ink: '#E0DACE',
        marker: '#FF5030',
        // secondary
        loam: '#2E2A20',
        clay: '#8A7A60',
        // tints
        salmon: '#FFB7AA',
        'salmon-2': '#FF7300',
        blood: '#9C0003',
        'blood-2': '#B6003A',
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        sans: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        h1: ['60px', { lineHeight: '100%' }],
        h2: ['40px', { lineHeight: '100%' }],
        h3: ['32px', { lineHeight: '100%' }],
        h4: ['20px', { lineHeight: '100%' }],
        h5: ['16px', { lineHeight: '100%' }],
        body: ['12px', { lineHeight: '125%' }],
      },
      spacing: {
        paragraph: '24px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-bedrock-loam': 'linear-gradient(135deg, #0F0E0B, #2E2A20)',
        'gradient-bedrock-marker': 'linear-gradient(135deg, #0F0E0B, #FF5030)',
        'gradient-ink-clay': 'linear-gradient(135deg, #E0DACE, #8A7A60)',
      },
    },
  },
  plugins: [],
}
