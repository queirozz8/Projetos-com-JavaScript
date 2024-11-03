let y = 0
console.log('y = 0 nesse momento.')
{
	y = 1
	console.log(`Qual o valor de y dentro do bloco? O valor é ${y}.`)
}

console.log(`Existe y depois do bloco? ${y}.`)

// Múltipla declaração de variáveis
let a = true, b = 'Letras', c = 42, nome = 'Rick', isHuman = true;
console.log(`${a}, ${b}, ${c}`);
console.log(nome, isHuman)

let pi = 3.14159;
console.log(pi.toFixed(2))
console.log(typeof pi)
