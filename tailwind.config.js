/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: "Merriweather",
        Montserrat: "Montserrat",
        Roboto: "Roboto",
        SourceCodePro: "Source Code Pro",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
