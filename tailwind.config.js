/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        league: ['League Spartan', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        "primary": "#FCDD12",
        "dark-white": "#B8B8B8",
        "light-black": "#2B2B2B",
        "dark-black": "#212121",
        "light-white": "#FFFFFF"
      }
    },
  },
  plugins: [],
}