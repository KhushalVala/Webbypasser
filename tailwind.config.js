/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { emerald: '#00FF99', cyan: '#00D9FF', dark: '#050505', glass: 'rgba(255,255,255,0.05)' },
      fontFamily: { sans: ['Inter', 'system-ui'] },
      animation: { float: 'float 6s ease-in-out infinite', glow: 'glow 2s ease-in-out alternate' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        glow: { '0%': { boxShadow: '0 0 5px rgba(0,255,153,0.2)' }, '100%': { boxShadow: '0 0 20px rgba(0,255,153,0.6)' } }
      }
    }
  },
  plugins: []
}
