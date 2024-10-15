/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg-color': '#1E1E1E',
        'nav-text-color': '#C8AE68',
        'black-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0)  0%, rgba(0,0,0,0.8) 100% )',
        'Descrip-text-color': '#C8AE68',
        'background-color': 'rgb(31, 29, 29);'
      },
    },
  },
  plugins: [],
}

