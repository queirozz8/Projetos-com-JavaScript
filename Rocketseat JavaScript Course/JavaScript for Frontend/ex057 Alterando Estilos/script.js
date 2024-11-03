// Seleciona o botão pelo ID
const button = document.getElementById('dark-mode-toggle');
// Seleciona o body, que vai ser o elemento que terá o fundo alterado
const body = document.querySelector('body');

// Adiciona um evento de clique no botão
button.addEventListener('click', () => body.classList.toggle('dark-mode'));
