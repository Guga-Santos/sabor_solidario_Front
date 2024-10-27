/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-bro': '#5D576B',
        'second-green': '#99E1D9',
        'second-green-hover': '#62D1C5',
        'second-pink': '#F7567C',
        'second-pink-hover': '#ED436B',
        'second-yellow': '#FFFAE3',
        'second-gray': '#FCFCFC',
        'text-gray': '#7A7786',
        'second-gray': '#4E4B59',
        'tercery-gray': '#33303E',
        'opacity-gray': 'rgba(100, 80, 57, 0.1)'
      }
    },
  },
  plugins: [],
};
