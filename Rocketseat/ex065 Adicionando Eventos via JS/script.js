// Eventos
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

// Primeira forma de se criar eventos em JS, sendo essa a mais recomendada, porque os eventos são acumulados, e não são substituídos
h1.addEventListener('click', print)

function print() {
    console.log('Clicou')
}

// Outra forma de criar eventos em JS, nessa, os eventos são substituídos pelos seguintes

// Isso não será executado
h2.onmouseover = () => console.log('Passou o mouse por cima (Evento 1)')

// Isso será, pois substituiu o evento 1
h2.onmouseover = () => console.log('Passou o mouse por cima (Evento 2)')
