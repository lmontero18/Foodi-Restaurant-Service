/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#39DB4A",
        white: "#FFFF",
        green_hover: "#269131",
        gray_span: "#4A4A4A",
        smooth_black: "#2C2C2C",
        salmon: "#FF7979",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
