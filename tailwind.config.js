/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-50': '#f0f6fe;',
        'blue-100': '#E9F2FF;',
        'blue-200': '#228BE6;',
        'blue-300': '#1658B6 ',
        'blue-400': '#0F2C5C ',
        'gray-100': '#DEE2E6'
    },
    fontFamily:{
      'Outfit': ['Outfit', 'sans-serif']
    },
    boxShadow:{
      '100':' 0px 4px 35px 0px rgba(34, 139, 230, 0.13)',
      '200': '0px 4px 20px 0px rgba(15, 44, 92, 0.45)',
      '300': ' 0px 8px 19px 0px rgba(5, 23, 51, 0.30)',
      '400': '0px 8px 19px 0px rgba(5, 23, 51, 0.40)'
      
    }
    },
  },
  plugins: [],
}