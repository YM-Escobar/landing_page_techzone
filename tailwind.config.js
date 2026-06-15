/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        gamerDark: '#0b0c10',
        gamerPurple: '#6f42c1',
        gamerNeon: '#a926ff',
      }
    },
  },
  plugins: [],
}