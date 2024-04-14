/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "360px", // Updated from 'phone' to 'sm'
      md: "768px",
      lg: "1024px", // Updated from 'laptop' to 'lg'
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      samsung: "412px", // Corrected from 'sumsung' to 'samsung'
      iphone: "414px",
      tablet: "640px",
      desktop: "1280px",
      landscape: { raw: "(min-height: 360px) and (orientation: landscape)" },
    },
    extend: {
      fontFamily: {
        secondary: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
