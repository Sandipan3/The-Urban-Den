/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "var(--color-yellow)",
          dark: "var(--color-dark-gray)",
          light: "var(--color-light-gray)",
          white: "var(--color-white)",
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
