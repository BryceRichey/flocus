/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}