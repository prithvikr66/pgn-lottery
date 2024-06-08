/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      darumadrop: ["darumadrop", "sans-serif"],
    },
    backgroundImage: {
      "main-bg": "url(./src/assets/images/main-bg.png)",
    },
  },
  plugins: [],
};
