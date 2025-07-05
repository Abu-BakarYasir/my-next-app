// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
         inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        inspiration: ['Inspiration', 'cursive'],
      },
    },
  },
  plugins: [],
};
