/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'rounded': ['"M PLUS Rounded 1c"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'grass-teal': '#88ccca',
        dark: {
          bg: '#202023',
          card: '#2d3748',
          text: '#e5e5e5',
          accent: '#ff63c3'
        },
        light: {
          bg: '#f0e7db',
          card: '#ffffff',
          text: '#1a202c',
          accent: '#3d7aed'
        }
      },
      backdropBlur: {
        'navbar': '20px'
      }
    },
  },
  plugins: [],
}