const questions = [
    'O que aprendi hoje?',
    'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?',
];
let answers = [];

const ask = (index = 0) => {
    if (index < questions.length) {
        process.stdout.write('\n' + questions[index] + ' > ');

        // Remove qualquer listener antigo para evitar duplicação
        process.stdin.removeAllListeners('data');
        
        process.stdin.on('data', data => {
            let response = data.toString().trim()
        
            // Verifica se a pergunta atual é a quarta (índice 3) e espera um número inteiro
            if (index === 3) {
                if (!Number.isInteger(Number(response))) {
                    console.log('\nErro! Por favor, digite um número inteiro para esta questão.')
                    ask(3)
                } else {
                    answers.push(parseInt(response))
                    ask(answers.length)
                }
            } else {
                answers.push(response)
                ask(answers.length)
            }
        })
    } else {
        process.stdin.pause(); // Pausa a entrada antes de sair
        finish() // Exibe as respostas ao terminar as perguntas
    }
};

// Função para finalizar e exibir as respostas
const finish = () => {
    process.stdin.pause(); // Pausa a entrada
    console.log(`
    RESPOSTAS
    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}
    
    O que te deixou feliz hoje:
    ${answers[2]}
    
    Você ajudou ${answers[3]} pessoas hoje.
    
    
    Volte amanhã para novas reflexões!
    `);
    process.exit(); // Finaliza o processo
}



// Começa o processo com a primeira pergunta
ask();
