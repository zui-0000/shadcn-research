const path = require("node:path");
const reuiTheme = require("@reui/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    path.join(path.dirname(require.resolve("@reui/reui")), "..", "..", "**/*.{js,cjs}"),
  ],
  theme: reuiTheme.theme,
  plugins: [require("tailwindcss-animate")],
};
