class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.disponivel = true // Disponível por padrão
    }

    emprestar(usuarioNome) {
            this.disponivel = false
            console.log(`O usuário ${usuarioNome} pegou o livro "${this.titulo}" emprestado.`)
    }

    devolver(usuarioNome) {
        this.disponivel = true
        console.log(`O usuário ${usuarioNome} devolveu o livro "${this.titulo}".`)
    }
}


// Array dos livros disponíveis
let livrosDisponiveis = ['Hábitos Atômicos', 'O Homem Mais Rico da Babilônia', 'Os Segredos da mente Milionária']


class Usuario {
    constructor(nome, id) {
        this.nome = nome
        this.id = id
        this.livrosEmprestados = []
        this.qtdeLivros = 0
    }

    // Método de pedir um livro emprestado
    emprestarLivro(livro) {
        if (livro.disponivel) {
            this.livrosEmprestados.push(livro)
            livrosDisponiveis.splice(livrosDisponiveis.indexOf(livro.titulo), 1)
            livro.emprestar(this.nome) // Passa o nome do usuário ao método emprestar
            this.qtdeLivros++
        } else {
            console.log(`O livro "${livro.titulo}" já está emprestado.`)
        }
    }

    // Método de devolver um livro
    devolverLivro(livro) {
        const index = this.livrosEmprestados.indexOf(livro)
        if (index !== -1) { // Se o index for diferente de -1, significa que ele faz parte do array
            this.livrosEmprestados.splice(index, 1)
            livro.devolver(this.nome) // Passa o nome do usuário ao método devolver
            this.qtdeLivros--
            livrosDisponiveis.push(livro.titulo)
        } else {
            console.log(`O usuário ${this.nome} não pode devolver o livro "${livro.titulo}" pois não o possui.`)
        }
    }

    // Método que mostra a quantidade de livros que cada usuário pegou emprestado
    mostrarQtdeLivros() {
        console.log(`Quantidade de livros que o usuário ${this.nome} pegou emprestado: ${this.qtdeLivros}.`)
    }
}


/* Função para mostrar a quantidade de livros disponíveis. 
Criei ela fora da classe, para que a quantidade de livros seja geral, e não individual para cada usuário */
function mostrarLivrosDisponiveis() {
    if (livrosDisponiveis.length > 0) {
        console.log(`Total de livros disponíveis: ${livrosDisponiveis.length}, ${livrosDisponiveis.join(', ')}.`) 
    } else {
        console.log('Total de livros disponíveis: Nenhum livro disponível.')
    }
}


// Criando instâncias
let livro1 = new Livro('Hábitos Atômicos', 'James Clear', 2018)
let livro2 = new Livro('O Homem Mais Rico da Babilônia', 'George Samuel Clason', 1926)
let livro3 = new Livro('Os Segredos da Mente Milionária', 'T. Harv Eker', 2005)
let usuario1 = new Usuario('João', 1)
let usuario2 = new Usuario('Maria', 2)


// Simulando o empréstimo e a devolução de livros

mostrarLivrosDisponiveis() // Função para mostrar os livros disponíveis

usuario1.emprestarLivro(livro1) // Deve emprestar com sucesso

mostrarLivrosDisponiveis() // Função para mostrar os livros disponíveis

usuario1.emprestarLivro(livro1) // Deve avisar que o livro não está disponível

usuario1.devolverLivro(livro1) // Deve devolver com sucesso

usuario2.devolverLivro(livro3) // Deve avisar que o livro não está devolvido

mostrarLivrosDisponiveis() // Função para mostrar os livros disponíveis

usuario2.emprestarLivro(livro2) // Deve emprestar com sucesso

mostrarLivrosDisponiveis() // Função para mostrar os livros disponíveis

usuario2.emprestarLivro(livro1) // Deve emprestar com sucesso

usuario1.emprestarLivro(livro3) // Deve emprestar com sucesso

mostrarLivrosDisponiveis() // Função para mostrar os livros disponíveis (Nenhum livro disponível)

usuario1.mostrarQtdeLivros()

usuario2.mostrarQtdeLivros()
