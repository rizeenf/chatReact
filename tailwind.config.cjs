/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    colors: {
      primary: "#DEF5E5",
      cream: "#BCEAD5",
      creamDark: "#9ED5C5",
      creamDarker: "#8EC3B0",
      text: "#594545",
      white: "#fff",
    },
    screens: {
      xs: "360px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  plugins: [],
};
