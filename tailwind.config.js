/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.ts", "./src/**/*.tsx", "*.html"],

  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ["active"],
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("child", "& > *");
      addVariant("span", "& > span");
    },
  ],
  safelist: [],
};
