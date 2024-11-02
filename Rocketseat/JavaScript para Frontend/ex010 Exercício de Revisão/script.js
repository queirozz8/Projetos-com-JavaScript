// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima? R: O tipo é undefined

/*
	3. Declare uma variável e atribua valores para cada um dos dados:
		* nome: String 
		* age: Number (integer)
		* stars: Number (float)
		* isSubcribed: Boolean
*/

let nome = 'João', age = 35, stars = 4.8, isSubcribed = true


//	4. A variável student abaixo é de que tipo de dado? R: Object
let student = {}

//	4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
Object.assign(student, {
	nome: 'João',
	age: 35,
	stars: 4.8,
	isSubcribed: true,
	weight: 74.8
})

/*	4.2 Mostre no console a seguinte mensagem:
		<nome> de idade <age> pesa <weight> kg. */
console.log(`${student.nome} de idade ${student.age} pesa ${student.weight} kg`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
let students = []

/* 
6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. 
(Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students.push(student)

// 7. Coloque no console o valor da posição zero do Array acima
console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students
let student2 = {
	nome: 'Maria',
	age: '24',
	stars: 5,
	isSubcribed: true,
	weight: 70
}
students.push(student2)

/* 
9. Sem rodar o código responda qual é a resposta do código abaixo e por quê?
Após a sua resposta, rode o código e veja se você acertou. R: A resposta é undefined
*/
console.log(a)
var a = 1


// 10. Trocando para let, o que acontece? R: Um erro de referência. Vou comentar o código só para não mostrar o erro na inicialização desse programa

// console.log(b)
// let b = 1
