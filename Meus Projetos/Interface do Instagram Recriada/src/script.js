document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    const button = document.getElementById('submitButton')
    const togglePasswordButton = document.getElementById('togglePassword')

    function checkInputs() {
        // "trim()" remove os espaços da string, isso verifica se o usuário só não colocou espaços nos inputs
        if (emailInput.value.trim() && passwordInput.value.trim()) {
            button.disabled = false
            button.classList.add('bg-button')
            button.classList.remove('bg-zinc-300')
        } else {
            button.disabled = true
            button.classList.add('bg-zinc-300')
            button.classList.remove('bg-button')
        }
    }

    // Botão de mostrar senha
    togglePasswordButton.addEventListener('click', function () {
        // Alterna o tipo do input entre 'password' e 'text'
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
        passwordInput.setAttribute('type', type)
        
        // Altera o texto do botão
        this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar'
    })

    // À cada mudança nos inputs, a função de checkInputs será executada novamente
    emailInput.addEventListener('input', checkInputs)
    passwordInput.addEventListener('input', checkInputs)

    // Define a mensagem personalizada quando o input não está correto
    passwordInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, preencha este campo. Sua senha precisa ter entre 8 e 25 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial.')
    })
    // Limpa a mensagem personalizada quando o usuário começa a digitar
    passwordInput.addEventListener('input', function () {
        this.setCustomValidity('')
    })
})
