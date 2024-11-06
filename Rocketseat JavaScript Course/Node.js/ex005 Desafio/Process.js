// Arquivo principal
// Importando a função
const getFlagValue = require('./exports')
// Mesmo que mude a ordem das flags passadas, o output vai ser o mesmo
console.log(`Olá ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`)
