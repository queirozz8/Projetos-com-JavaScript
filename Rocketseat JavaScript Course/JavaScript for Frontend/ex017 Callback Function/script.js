// callback function

function sayMyName(name) {
	console.log('Antes de executar a função callback')

	name()

	console.log('Depois de executar a callback')
}

// Programa Principal

sayMyName(
	() => {
		console.log('Estou numa callback')
	}
)
