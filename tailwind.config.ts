/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth: {
        '2xs': '200px',
        '3xs': '160px'
      },
      fontSize: {
        '2xs': '8px',
      },
      keyframes: {
        moveRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: '-translateX(30%)' }
        },
        moveLeftToRight: {
          '0%': { transform: '-translateX(30%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        moveRightToLeft: 'moveRightToLeft 0.3s ease-out',
        moveLeftToRight: 'moveLeftToRight 0.2s ease-in'
      }
    },
  },
  plugins: [],
}

