module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      magenta: { DEFAULT: "#FD408D", light: "#FFC5DC" },
      coral: { DEFAULT: "#FF8472", light: "#FFDED9" },
      aqua: { DEFAULT: "#60FFE2", light: "#C5FFF4" },
      royal: { DEFAULT: "#1F6D99", light: "#7CCEFC" },
    },
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
      jubilate: ["Jubliat"],
      base: ["Proxima Nova"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
