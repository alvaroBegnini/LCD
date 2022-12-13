/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {"base": "#010F2A", "bright": "#05B7FC"},
      boxShadow: {"default": "0 0 10px 0 rgba(0, 0, 0, 0.25)"}
    },
  },
  plugins: [],
}
