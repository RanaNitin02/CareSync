/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellowColor':"#FEB60D",
        'purpleColor':"#9771FF",
        'primary':"#5f6FFF",
        'irisBlueColor':"#01B5C5",
        'headingColor':"#181A1E",
        'textColor':"#4E545F",
      },

      boxShadow: {
        panleShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      }
    },
  },
  plugins: [],
}

