/** @type {import("prettier").Config} */

module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  config: {
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
  },
};
