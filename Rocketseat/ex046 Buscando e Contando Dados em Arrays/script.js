/* ### Buscando e contando dados em Arrays

Baseado no Array de livros por categoria abaixo, faça os seguintes desafios

    - Contar o número de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - Mostrar livros do autor Augusto Cury
    - Transformar a função acima em uma função que irá receber o nome do autor
    e devolver os livros desse autor.
*/


// Parte dos Livros
const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            { 
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },

    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    }
]

// Parte dos Outputs


// Contar o número de categorias
const totalCategories = booksByCategory.length
console.log(`Total de categorias: ${totalCategories}`)


// O número de livros em cada categoria
for(let category of booksByCategory) {
    console.log(`Total de livros da categoria ${booksByCategory.indexOf(category) + 1}: ${category.books.length}.`)
}


// Contar o número de autores
let authors = []
for(let category of booksByCategory) {
    for(let author of category.books) {
        if(authors.includes(author.author) == false) {
            authors.push(author.author)
        }
    }
}
console.log(`Total de autores: ${authors.join(' | ')}, número: ${authors.length} autores.`)


// Mostrar livros do autor Augusto Cury
let augustoCury = []
for(let category of booksByCategory) {
    for(let author of category.books) {
        if(author.author == 'Augusto Cury') {
            augustoCury.push(author.title)
        }
    }
}
console.log(`Total de livros do Augusto Cury: ${augustoCury.join(' | ')}.`)


// Transformar a função acima em uma função que irá receber o nome do autor
function authorBookCounter(author) {
    let authorBooks = []
    for(let category of booksByCategory) {
        for(let currentlyAuthor of category.books) {
            if(currentlyAuthor.author == author) {
                authorBooks.push(currentlyAuthor.title)
            }
        }
    }

    return authorBooks
}

// Uso da função
console.log(authorBookCounter('T. Harv Eker'))
