/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        zoomInOut: 'zoomInOut 2s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}

