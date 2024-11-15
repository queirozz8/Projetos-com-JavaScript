// Variáveis para armazenar o valor atual e o operador selecionado
let currentValue = '';  // Armazena o valor atual do input
let storedValue = '';   // Armazena o valor anterior para a operação
let currentOperation = null;  // Armazena a operação atual ('+', '-', etc.)
let awaitingDecimal = false;  // Flag para verificar se o próximo número substituirá o "0" num número com ponto

// Referência ao input
const input = document.querySelector('input');

// Evento de teclado
document.addEventListener('keydown', (event) => {
    let key = event.key;
    const isNumber = !isNaN(key);
    const operatorKeys = ['+', '-', '/', '*', '%', 'Backspace', 'Delete', 'Enter', '='];
    const otherKeys = ['.', 'c', 'C', '_'];
    
    if (isNumber || operatorKeys.includes(key) || otherKeys.includes(key)) {
        if (key === '=') {
            key = 'Enter'
        } else if (key === 'Delete') {
            key = 'Backspace'
        }
        
        const button = document.querySelector(`button[data-key="${key}"]`);
        toggleButtonEffect(button);
        
        if (isNumber) {
            if (currentValue.length < 16) {
                if (awaitingDecimal) {
                    // Se é um número, o tamanho do valor atual é menor que 16, e o valor atual está esperando um decimal, então o código abaixo é executado
                    currentValue = currentValue.slice(0, -1) + key;
                    awaitingDecimal = false;
                } else {
                    // Se o valor atual não está esperando um decimal, então só adicionamos o número normalmente
                    currentValue += key;
                }
                // Exibe na tela
                input.value = currentValue;
            }
        } else if (operatorKeys.includes(key)) {
            handleOperator(key);
        } else if (key === 'c') {
            input.value = '';
            storedValue = '';
            currentValue = '';
            currentOperation = null;
        } else if (key === 'C') {
            input.value = '';
            currentValue = '';
        } else if (key === '_') {
            if (currentValue) {
                currentValue = String(Number(currentValue) * -1);
                input.value = currentValue;
            }
        } else if (key === '.') {
            if (!currentValue.includes('.')) {
                // Se o valor atual não tiver ponto, porém ele tiver algo dentro, ele vai receber um .0; se ele estiver vazio, ele vai receber um 0.0
                currentValue += currentValue ? '.0' : '0.0';
                input.value = currentValue;
                awaitingDecimal = true;
            }
        }
    }
});


// Adicionando os eventos em cada botão, para que eles possam ser clicáveis
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button[data-key]');
    buttons.forEach(button => {
        // Quando um botão é clicado, a função click() é chamada
        button.addEventListener('click', () => click(button));
    });
});


// Evento de clique
function click(button) {
    const key = button.dataset.key;
    
    switch(key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (input.value.length < 16) {
                // Se o número estiver com ponto, esperando por um número seguinte. Ex: 5.0
                if (awaitingDecimal) {
                    // Tira o 0 e adiciona o número
                    currentValue = currentValue.slice(0, -1) + key;
                    awaitingDecimal = false; // Reset da flag
                } else {
                   currentValue += key;
                }
                input.value = currentValue;
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            if (currentValue) {
                storedValue = currentValue;
                currentValue = '';
                currentOperation = key;
            }
            break;
        case 'Enter':
        case '=':
            if (currentOperation && storedValue) {
                calculateResult();
            }
            break;
        case 'Backspace':
            handleOperator(key)
            break;
        case 'c':
            input.value = '';
            storedValue = '';
            currentValue = '';
            break;
        case 'C':
            input.value = '';
            currentValue = '';
            break;
        case '_':
            if (currentValue) {
                currentValue = String(Number(currentValue) * -1);
                input.value = currentValue;
            }
            break;
        case '.':
            if (!currentValue.includes('.')) {
                currentValue += '.0';
                input.value = currentValue;
                awaitingDecimal = true;
            }
            break;
    }

    // Simula o efeito de botão pressionado
    toggleButtonEffect(button);
}


// Função para lidar com operadores
function handleOperator(operator) {
    if (operator === "Enter") {
        if (currentOperation && storedValue) {
            calculateResult();
        }
    } else if (operator === 'Backspace') {
        // Lógica de backspace para casos específicos de números com ponto decimal
        if (currentValue.endsWith('.0')) {
            currentValue = currentValue.slice(0, -2); // Remove o ".0" inteiro
            awaitingDecimal = false // Reset da flag
        } else {
            // Apaga o último caractere normalmente
            currentValue = currentValue.slice(0, -1);
            if (currentValue.endsWith('.')) {
                currentValue += '0'; // Substitui o ponto sozinho por ".0"
                awaitingDecimal = true // Ativação da flag pois estamos esperando um número para substituir o 0
            }
        }
        input.value = currentValue 
    } else {
        // Quando uma operação é pressionada (+, -, *, /, etc)

        if (currentValue) {
            // Se só existe o valor atual, sem um valor armazenado
            if (!storedValue) {
                // Tudo segue normalmente
                storedValue = currentValue;
                currentValue = '';
                currentOperation = operator;
            } else {
                // Se existir um valor armazenado também, quer dizer que o usuário fez algo como "5 + 5 + x", então nós calculamos o resultado primeiro
                calculateResult();
                storedValue = input.value;
                currentValue = '';
                currentOperation = operator;
            }
        } else if (storedValue) {
            currentOperation = operator;
        }
    }
}


// Função para calcular o resultado da operação atual
function calculateResult() {
    // Transformando os valores de tipo String em Number por meio do parseFloat, e criando variáveis num1 e num2 para armazena-lás
    const num1 = parseFloat(storedValue);
    const num2 = parseFloat(currentValue);

    if (isNaN(num1) || (isNaN(num2) && currentOperation !== '%')) return;

    let result;
    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Se num2 for diferente de 0, faça a conta normalmente. Caso contrário, retorne 0
            result = num2 !== 0 ? num1 / num2 : 0;
            break;
        case '%':
            // Se o num2 não for um número, retorne 1, caso contrário, retorne o próprio num2
            result = num1 * (isNaN(num2) ? 1 : num2) / 100;
            break;
        default:
            return;
    }

    // Lógica com valores grandes
    input.value = result % 1 === 0 ? result : result.toFixed(10).replace(/0+$/, '').replace(/\.$/, '');
    currentValue = input.value;
    storedValue = '';
    currentOperation = null;
}


// Função para simular o efeito de botão pressionado
function toggleButtonEffect(button) {
    if (!button) return;

    button.classList.add('bg-buttonClick');
    setTimeout(() => {
        button.classList.remove('bg-buttonClick');
    }, 150);
}
