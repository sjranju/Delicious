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
      }
    },
  },
  plugins: [],
}

