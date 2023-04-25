/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    screens: {
      360: "360px",
      480: "480px",
      600: "600px",
      768: "768px",
      1024: "1024px",
      1280: "1280px",
      1440: "1440px",
      1600: "1600px",
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,
      red: colors.red,
      amber: colors.amber,
      emerald: colors.emerald,
      teal: colors.teal,
      sky: colors.sky,
      indigo: colors.indigo,
      purple: colors.purple,
      rose: colors.rose,
    }),
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        brand: { primary: colors.indigo[600], ...colors.indigo },
        ink: {
          primary: colors.neutral[800],
          secondary: colors.neutral[600],
          light: colors.neutral[50],
          ...colors.neutral,
        },
        field: colors.neutral[300],
        link: colors.indigo[600],
        error: colors.red[700],
        focus: colors.indigo[400],
      },
    },
  },
  content: ["./src/**/*.{html,ts,tsx}"],
};
