// Criando novos elementos e configurando eles

const greetingInDiv = document.createElement('div')
greetingInDiv.innerText = 'Olá Devs!'
greetingInDiv.style.fontSize = '1.5em'


const aside = document.createElement('aside')
aside.innerText = 'Outra parte do site'
aside.style.display = 'flex'
aside.style.justifyContent = 'center'
aside.style.alignItems = 'center'
aside.style.height = '300px'
aside.style.fontFamily = 'Arial', 'Helvetica', 'sans-serif'
aside.style.fontSize = '2em'
aside.style.backgroundColor = '#947EB0'
aside.style.color = 'white'


const body = document.querySelector('body')
const header = body.querySelector('header')

// Adicionando os elementos na página
body.append(greetingInDiv)

// Como não existe um 'insertAfter', usamos um insertBefore junto com o nextElementSibling
body.insertBefore(aside, header.nextElementSibling)
