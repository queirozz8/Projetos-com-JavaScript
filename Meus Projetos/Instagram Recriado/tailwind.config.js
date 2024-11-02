/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        button: '#4CB5F9',
        face: '#385185',
        darkBlue: '#00376B',
        lightBlue: '#0095F6',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif']
      },
      spacing: {
        'custom': '60px', // Adiciona um valor de espaçamento personalizado
      }
    },
  },
  plugins: [],
}
