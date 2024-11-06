// Usando Módulos

// Módulos nativos do Node.js
const path = require('path')
console.log(path.basename(__filename))

// Meus Módulos
const myModule = require('./exports')

console.log(myModule)
