/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      Color: {
        'custom-color': 'rgba(104, 129, 255, 1)',
        'ellipse-color':'rgba(16, 28, 92, 0.64)',
        'custom-Blue': 'rgba(104, 129, 255, 1)',
        'custom-gradient-p': 'linear-gradient(90deg, #1C1C1C 0%, #E3E3E3 50.1%, #1C1C1C 100%)',

      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}