/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        main: "1220px",
      },
      backgroundColor: {
        main: "#ee3131",
      },
      colors: {
        main: "#ee3131",
      },
      keyframes: {
        "side-top-sm": {
          "0%": {
            "--webkit-transform": "translateY(8px);",
            transform: "translateY(8px);",
          },
          "100%": {
            "--webkit-transform": "translateY(0px);",
            transform: "translateY(0px);",
          },
        },
        "side-top": {
          "0%": {
            "--webkit-transform": "translateY(40px);",
            transform: "translateY(40px);",
          },
          "100%": {
            "--webkit-transform": "translateY(0px);",
            transform: "translateY(0px);",
          },
        },
      },
      animation: {
        "side-top-sm": "side-top-sm 1s linear both",
        "side-top": "side-top-sm 1s linear both",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
