/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
         primary:"",
         secondary:"",
         background:"",
         mutedText:""
      },
      fontFamily:{
        aeonik:['Aeonik']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}