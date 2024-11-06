// Arquivo principal
// Quando for executar com o Node, coloque as flags --name "Nome de exemplo" e --greeting "Saudação".
// A ordem das flags pode ser diferente


const getFlagValue = require('./exports')
// Mesmo que mude a ordem das flags passadas, o output vai ser o mesmo
console.log(`Olá ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`)
