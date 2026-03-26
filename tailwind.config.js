/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#060a0e',
        surface: '#0d1117',
        surface2: '#161b22',
        border: '#1e2530',
        accent: '#00e5a0',
        accent2: '#00b4d8',
        muted: '#6e7a8a',
        text: '#e6edf3',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'scanline': 'scanline 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,229,160,0.3)' },
          '50%': { boxShadow: '0 0 24px rgba(0,229,160,0.7)' },
        },
        scanline: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
