// Promessa de um Uber
let aceitar = true
console.log('Pedir uber')

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('Pedido aceito!')
    }
    return reject('Pedido negado!')
})

console.log('Aguardando...')

promessa
.then((result) => console.log(result))
.catch((erro) => console.log(erro))
.finally(() => console.log('Finalizada'))
