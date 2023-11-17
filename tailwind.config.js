/** @type {import('tailwindcss').Config} */
export default {
  content: ["./resources/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kdam: ["Kdam Thmor Pro", "sans-serif"],
      },
      colors: {
        "red-button": "#981F1F",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
