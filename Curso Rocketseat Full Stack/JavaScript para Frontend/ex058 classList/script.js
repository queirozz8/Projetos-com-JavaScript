const element = document.querySelector('body')

element.classList.add('active', 'green')

// Adicionei uma estrutura condicional só de exemplo
if (true) {
    element.classList.remove('active')
}

element.classList.toggle('active')

console.log(element.classList)
