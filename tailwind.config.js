/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        "screen-100": "calc(100vh - 80px)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
