/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'tea-gold': '#000000',
        'coconut-green': '#000000',
        'coconut-green-light': '#000000',
        'earthy-brown': '#000000',
        'banana-leaf': '#333333',
        'clay-red': '#666666',
        'charcoal': '#000000',
        'misty-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        display: ['Caprasimo', 'serif'],
        malayalam: ['Manjari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
