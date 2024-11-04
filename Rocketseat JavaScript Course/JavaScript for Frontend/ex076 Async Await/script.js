const promessa = new Promise(function(resolve, reject) {
    return resolve('ok')
})

async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('rodar sempre')
    }
}
start()


// Como seria com o then, catch e finally: 

/*
promessa
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })
    .finally(function() {
        console.log('Sempre irei executar')
    })
*/
