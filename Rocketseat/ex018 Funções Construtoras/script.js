function Person(name) {
	this.name = name
	this.walk = function() {
		return this.name + ' está andando'
	}
}

const rick = new Person('Rick')
const fernanda = new Person('Fernanda')
console.log(rick.walk())
console.log(fernanda.walk())



function Pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
	this.falar = function() {
		console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
	}
}

const pessoa1 = new Pessoa('João', 25);
const pessoa2 = new Pessoa('Maria', 30);
  
pessoa1.falar();  // Oi, meu nome é João e tenho 25 anos.
pessoa2.falar();  // Oi, meu nome é Maria e tenho 30 anos.
