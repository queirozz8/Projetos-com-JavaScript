// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é obrigatório')
    }
    else {
        console.log(name)
    }

    console.log('depois do erro')
}

// try...catch

try {
    sayMyName()

} catch(error) {
    console.log(error.message)
}

console.log('Após a função de erro')
