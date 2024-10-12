/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Heading and titles fonts
        primaryHeading: `"Roboto", sans-serif`,
        secondaryHeading: `"Poppins", sans-serif`,

        // Body text fonts
        bodyText: `"Open Sans", sans-serif`,

        // Alternative fonts
        primaryFont: `"Montserrat", sans-serif`,
      },
      colors: {
        /* Primary Colors */
        ytRed: "#FF0000",
        ytBlack: "#000000",

        /* Secondary Colors */
        ytWhite: "#FFFFFF",
        ytLightGray: "#F9F9F9",
        ytDarkGray: "#606060",

        /* Accent Colors */
        ytBorderGray: "#E5E5E5",
        ytFooterGray: "#3C3C3C",
      },
    },
  },
  plugins: [],
};
