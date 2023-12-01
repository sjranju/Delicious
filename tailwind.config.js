/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      'offer': ['"Proxima Nova Condensed Regular"', 'arial', '"Helvetica Neue"', 'sans-serif'],
      'cusines': ['"Basis Grotesque Pro"', 'Arial', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        '2xs': '200px',
        '3xs': '160px'
      },
      fontSize: {
        '2xs': '8px',
      },
      colors: {
        'slightBlack': '#282c3f',
        'header': '#3d4152',
        'restaurantName': '#02060C',
        'menuCategory': '#3e4152'
      },
      keyframes: {
        moveRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: '-translateX(30%)' }
        },
        moveLeftToRight: {
          '0%': { transform: '-translateX(30%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moveBottomToTop: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: '-translateY(20%)' },
        },
        moveTopToBottom: {
          '0%': { transform: 'translateY(0%)', opacity: 0 },
          '50%': { transform: 'translateY(10%)', opacity: 1 },
          '100%': { transform: 'translateY(0%)', opacity: 0 }
        },
        loginOrSignUpToAddToCart: {
          '0%': { transform: 'translateY(0%)', opacity: 0 },
          '50%': { transform: 'translateY(20%)', opacity: 1 },
          '100%': { transform: 'translateY(-10%)', opacity: 0 }
        },
        itemNotExistsMessage: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(10%)' }
        },
        closeResetCart: {
          '0%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      animation: {
        moveRightToLeft: 'moveRightToLeft 0.3s ease-out',
        moveLeftToRight: 'moveLeftToRight 0.2s ease-in',
        moveBottomToTop: 'moveBottomToTop 0.2s ease-in',
        moveTopToBottom: 'moveTopToBottom 0.5s ease-in',
        itemNotExistsMessage: 'itemNotExistsMessage 0.2s ease-in',
        loginOrSignUpToAddToCart: 'loginOrSignUpToAddToCart 1s ease-in-out',
        closeResetCart: 'closeResetCart 0.5s ease-out'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

