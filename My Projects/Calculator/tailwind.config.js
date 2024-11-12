/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: '#1C2541',
        bgCalc: '#212021',
        button1: '#333332',
        button2: '#3b3a3a',
        button3: '#848280',
        equalsButtonHover: '#807c74',
        buttonClick: '#302c2c',
        buttonClick2: '#706c6c',
      },
      fontFamily: {
        sans: ['Work Sans', 'Arial', 'Segoe UI', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
