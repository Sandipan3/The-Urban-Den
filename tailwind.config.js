/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "var(--color-yellow)",
          black: "var(--color-black)",
          gray: "var(--color-gray)",
          text: "var(--color-text)",
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Montserrat", "sans-serif"],
        accent: ['"Cormorant Garamond"', "serif"],
      },
    },
  },
  plugins: [],
};
