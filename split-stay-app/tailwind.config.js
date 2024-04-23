/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Primarycolor: "#F29F2D",
      Graybg: "#F1F3F6",
      InputLabel: "#5C5C5C",
      TextFooterLogin: "#6D6F71",
      HeroSectionBackgroundColor: "#FDFDFF",
      IconColor: "#AC6503",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
