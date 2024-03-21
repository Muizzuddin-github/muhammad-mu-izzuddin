/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "semi-gold": "#F5F5F0",
        "semi-gold1": "#f2f2df",
        "semi-gold-hover1": "#f2f2d3",
      },
      boxShadow: {
        nav: "0px 0px 4px 0px rgba(0, 0, 0, .2)",
        tech: "0px 0px 2px 0px rgba(0, 0, 0, .4)",
      },
    },
  },
  plugins: [],
};
