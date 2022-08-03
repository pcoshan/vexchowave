/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        'studio' : "#674AB3",
        'purpures': "#A348A6",
        'amethyst': "#A063C5",
        'medpurple': "#9174D8",
        'wisteria': "#CEA2D7",
        'lcb' : "#66b9c1"
      },
    }
  },
  plugins: [],
}
