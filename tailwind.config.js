/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '640px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        ghostWhiteText: '#f8f8ff',
        primaryDark: '#3f3f46',
        mainDark: '#0a0a0a'
      }
    }
  },
  plugins: []
  
}
