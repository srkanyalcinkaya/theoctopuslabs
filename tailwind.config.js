/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#201f1f",
          "200": "#1a1a1a",
          "300": "#181718",
          "400": "#121212",
          "500": "rgba(255, 255, 255, 0.3)",
          "600": "rgba(3, 3, 4, 0.5)",
          "700": "rgba(255, 255, 255, 0.09)",
          "800": "rgba(255, 255, 255, 0.7)",
          "900": "rgba(255, 255, 255, 0)",
          "1000": "rgba(255, 255, 255, 0.15)",
        },
        darkgray: "#a8a8a8",
        black: "#000",
        white: "#fff",
        whitesmoke: "#f6f6f6",
        lightgray: {
          "100": "#d4d4d4",
          "200": "#cecece",
        },
      },
      fontFamily: {
        rubik: "Rubik",
        syne: "Syne",
        poppins: "Poppins",
        "syne-mono": "'Syne Mono'",
        "text-medium-text": "'Helvetica Neue'",
      },
      borderRadius: {
        "3xs": "10px",
        "12xs": "1px",
        "3xl": "22px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "17xl": "36px",
      xl: "20px",
      sm: "14px",
      "21xl": "40px",
      "45xl": "64px",
      "5xl": "24px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  plugins: [],
}
