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
        'tea-gold': '#d97706',
        'coconut-green': '#15803d',
        'coconut-green-light': '#22c55e',
        'earthy-brown': '#78350f',
        'banana-leaf': '#4ade80',
        'clay-red': '#b91c1c',
        'charcoal': '#08060d',
        'misty-white': '#f8f9fa',
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
