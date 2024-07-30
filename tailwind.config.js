/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      honeysuckle: {
        DEFAULT: "#F6FB7A",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FEFFF1",
        300: "#FBFDC9",
        400: "#F9FCA2",
        500: "#F6FB7A",
        600: "#F2F944",
        700: "#EFF80D",
        800: "#BFC706",
        900: "#8B9004",
        950: "#717504",
      },
      pastelGreen: {
        DEFAULT: "#88D66C",
        50: "#FCFEFC",
        100: "#EFFAEC",
        200: "#D5F1CC",
        300: "#BCE8AC",
        400: "#A2DF8C",
        500: "#88D66C",
        600: "#64CA40",
        700: "#4DA42E",
        800: "#387822",
        900: "#244C15",
        950: "#1A360F",
      },
      portgore: {
        DEFAULT: "#201E43",
        50: "#6561B8",
        100: "#5852B2",
        200: "#484498",
        300: "#3B377B",
        400: "#2D2B5F",
        500: "#201E43",
        600: "#0D0D1C",
        700: "#000000",
        800: "#000000",
        900: "#000000",
        950: "#000000",
      },
      goldentainoi: {
        DEFAULT: "#FFD35A",
        50: "#FFFFFF",
        100: "#FFFFFD",
        200: "#FFF4D4",
        300: "#FFE9AC",
        400: "#FFDE83",
        500: "#FFD35A",
        600: "#FFC422",
        700: "#E9AB00",
        800: "#B18200",
        900: "#795800",
        950: "#5D4400",
      },
    },

    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Varela: ["Varela Round", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Rubik: ["Rubik", "sans-serif"],
      TitilliumWeb: ["Titillium Web", "sans-serif"],
    },

    extend: {
      utilities: {
        ".scrollbar-hidden": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
          },
        },
      },
      boxShadow: {
        "3xl": "-1px 34px 47px -29px rgb(32 32 32 / 100%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
        glass: "1px 5px 12px 1px rgba( 31, 38, 135, 0.37 )",
        "glass-card": "4px 4px 4px 4px rgba( 32, 32, 32, 0.37 )",
        "card-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        "dark-shadow": "10px 10px 5px 0px rgba(130,130,130,0.75)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".ShowDesktopOnly": {
          display: "none",
        },
        "@screen md": {
          ".ShowDesktopOnly": {
            display: "block",
          },
        },
        ".ShowOnMobileOnly": {
          display: "block",
        },
        "@screen md": {
          ".ShowOnMobileOnly": {
            display: "none",
          },
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
    function ({ addComponents }) {
      addComponents({
        ".flex-center": {
          "@apply flex justify-center items-center": {},
        },
        ".overlay-content": {
          "@apply absolute h-full w-full top-0 left-0": {},
        },
      });
    },
  ],
});
