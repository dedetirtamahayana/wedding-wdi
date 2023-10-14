/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-180": "linear-gradient(180deg, var(--tw-gradient-stops))",
        "default-background": "url(../../public/bg1.png);",
      },
      colors: {
        gold: "#f6db69",
        ivory: "#f9dcb9",
        card: "#EDE3D7",
      },
    },
  },
  plugins: [],
});
