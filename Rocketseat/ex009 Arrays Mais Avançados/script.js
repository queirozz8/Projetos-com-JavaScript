// Array

const animals = [
	'Lion',
	'Monkey',
	{
		name: 'Cat',
		age: 3
	},
	'Último elemento'
]

// Acessar valores dentro de um Array
console.log(animals[0])
console.log(animals[2].age)
console.log(`Último elemento do array: ${animals[animals.length - 1]}.`)
