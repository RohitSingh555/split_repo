/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Primarycolor: "#F29F2D",
      Graybg: "#F1F3F6",
      Black: "rgb(0 0 0)",
      InputLabel: "#5C5C5C",
      LabelEXP: "rgba(51, 51, 51, 0.7)",
      Overlay: "rgb(203 203 203 / 56%)",
      hrColor: "rgb(225 225 225 / 56%)",
      LandingPageBg: "#F8F8FF",
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
