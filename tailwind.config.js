/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        rubik: "Rubik",
      },
      colors: {
        primary: '#6200EE',
        secondary: '#3700B3',
        'secondary-light': '#03DAC6',
        'secondary-dark': '#018786',
        background: '#FFFFFF',
        surface: '#F2F2F2',
        error: '#B00020',
      }
    },
  },
  plugins: [],
};
