const tailwindColors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: "#d1fa40",
      primary: "#232323",
      background: "#181818",
      black: "#000",
      border: "#282828",
      info: "#384B6F",
      success: "#55D077",
      danger: "#FF624E",
      warning: "#FF8B00",
      disabled: "#94A3B8",
      ...tailwindColors,
    },
    extend: {
      fontSize: {
        xxs: ".6rem",
      },
      borderRadius: {
        xl: "1.4rem",
        "2xl": "2rem",
      },
      width: {
        22: "5.5rem",
        112: "26rem",
        116: "28rem",
        120: "32rem",
      },
      height: {
        18: "4.5rem",
        30: "7.5rem",
      },
      minHeight: {
        500: "500px",
        600: "600px",
      },
    },
  },
  plugins: [],
};
