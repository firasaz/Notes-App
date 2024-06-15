/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: {
          sm: '#F7F7F7',
          md: '#E0E0E0',
        }
      }
    },
  },
  plugins: [],
}

