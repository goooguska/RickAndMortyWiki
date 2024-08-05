/** @type {import('tailwindcss').Config} */

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: false,
  theme: {
    colors: {
      primary: '#333333',
      secondary: '#ff9800',
      white: '#ffffff'
    },
    screens: {
      xxs: '320px',
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px'
    },
    extend: {}
  },
  plugins: []
}
