function imprimirDado(dado) {
    console.log('outras tarefas')
    console.log(dado())
}

imprimirDado(function () {
    return 'Função foi chamada'
})
