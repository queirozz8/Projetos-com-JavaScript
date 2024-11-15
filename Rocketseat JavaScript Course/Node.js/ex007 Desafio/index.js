const ask = (index = 0) => process.stdout.write(questions[index] + ' > ')


const questions = [
    'O que aprendi hoje?',
    'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?',
]

ask()

let answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.stdout.write('\nRESPOSTAS\n\n');
        for (let answer of answers) {
            process.stdout.write(questions[answers.indexOf(answer)] + ' ' + answer + '\n')
        }
        process.exit()
    }
})
