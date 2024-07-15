/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6454AF",
        primaryContrastDark: "#9A8DC1",
        primaryContrastLight: "#F6EBFF",
        secondary: "#00C89E",
        transparentBlack: "rgba(0, 0, 0, 0.5)",
      },
      spacing: {
        700: "700px",
      },
    },
  },
  plugins: [],
};
