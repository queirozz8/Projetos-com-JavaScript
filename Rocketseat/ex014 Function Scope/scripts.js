// function scope
let subject

function createThink() {
	subject = 'study'
	return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)
