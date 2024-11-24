/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#271e2e",
          "200": "rgba(39, 30, 46, 0.7)",
          "300": "rgba(255, 255, 255, 0.9)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(0, 0, 0, 0.6)",
          "600": "rgba(0, 0, 0, 0.8)",
          "700": "rgba(0, 0, 0, 0.7)",
        },
        lavender: {
          "100": "#d9d4e6",
          "200": "rgba(217, 212, 230, 0.15)",
        },
        darkslateblue: {
          "100": "#6e5681",
          "200": "#4f3961",
        },
        darkmagenta: "#94349d",
        mediumpurple: {
          "100": "#8957af",
          "200": "rgba(137, 87, 175, 0.4)",
        },
        darkslategray: "#282c32",
      },
      spacing: {},
      fontFamily: {
        "optima-nova-lt-pro": "'Optima nova LT Pro'",
        "cormorant-garamond": "'Cormorant Garamond'",
        "stay-classy-duo-serif": "'Stay Classy Duo Serif'",
        poppins: "Poppins",
      },
      borderRadius: {
        "81xl": "100px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      sm: "14px",
      mid: "17px",
      xl: "20px",
      "3xl": "22px",
      "8xl": "27px",
      "13xl": "32px",
      "23xl": "42px",
      "33xl":"52px",
      "53xl": "72px",
      "81xl": "100px",
      inherit: "inherit",
    },
    screens: {
      xxl: {
        max: "1440px",
      },
      xl: {
        max: "1280px",
      },
      lg: {
        max: "1024px",
      },
      tab: {
        max: "786px",
      },
      phn: {
        max : "420px"
      },
      sphn: {
        max : "350px"
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
};
