/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cub-blue': '#80A4C2', // cub blue theme
      }
    },
  },
  plugins: [],
}