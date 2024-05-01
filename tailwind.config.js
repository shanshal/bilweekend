/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bilweekendTheme: {

          "primary": "#325725",

          "secondary": "#FE6151",

          "accent": "#2F77FC",

          "neutral": "#ffffff",

          "base-100": "#ffffff",

          "info": "#0000ff",

          "success": "#FEA901",

          "warning": "#FEA901",

          "error": "#FE6151",
        },
      },
    ],
  },
}