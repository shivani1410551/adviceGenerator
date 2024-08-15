/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "430px",
      base: "550px",
      md: "740px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
      },
      colors: {
        LightCyan: "hsl(193, 38%, 86%)",
        NeonGreen: "hsl(150, 100%, 66%)",
        GrayishBlue: "hsl(217, 19%, 38%)",
        DarkGrayishBlue: "hsl(217, 19%, 24%)",
        DarkBlue: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
