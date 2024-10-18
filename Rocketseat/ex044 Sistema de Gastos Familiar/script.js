/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas
e irá mostrar uma mensagem se a família está com saldo positivo ou 
negativo, seguido do valor do saldo

*/

function total() {
    let somaReceitas = familia.receitas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    let somaDespesas = familia.despesas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    
    saldo = somaReceitas - somaDespesas
    if (saldo <= 0) {
        console.log(`Saldo: R$${saldo.toFixed(2)}. Você está com saldo negativo/zero.`)
    } else {
        console.log(`Saldo: R$${saldo.toFixed(2)}. Você está com saldo positivo.`)
    }
}

familia = {
    incomes: [2500, 3200, 250.34, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

total()
