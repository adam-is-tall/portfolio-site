module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      magenta: { DEFAULT: "#FD408D", light: "#FFC5DC" },
      coral: { DEFAULT: "#FF8472", light: "#FFDED9" },
      aqua: { DEFAULT: "#60FFE2", light: "#C5FFF4", dark: "#41a08f" },
      royal: { DEFAULT: "#1F6D99", light: "#7CCEFC" },
      black: "#000",
      white: "#fff",
    },
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
      jubilate: ["Jubliat"],
      base: ["Proxima Nova"],
    },
    extend: {
      spacing: {
        xs: "0.25rem",
        sm: "0.875rem",
        md: "2.625rem",
        lg: "5.25rem",
        xl: "7.875rem",
        "2xl": "10.5rem",
        "3xl": "13rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
