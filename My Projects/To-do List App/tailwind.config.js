/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainColorDark: '#121212',
        mainColorLight: '#F6F4F4',
        textColorDark: '#E0E0E0',
        textColorLight: '#212121',
        secondaryColorDark: '#1E1E1E',
        secondaryColorLight: '#D2D2E3',
        buttonColorDark: '#555B6E',
        buttonColorLight: '#95969D',
      },
      fontFamily: {
        'sans': ['Work Sans', 'Arial', 'Helvetica', 'Sans-serif']
      },
      width: {
        'input': '30rem',
      },
    },  
  },
  plugins: [],
}
