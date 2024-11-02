// Orientação à objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    } 

    redimensionar(novaAltura, novaLargura) {
        this.altura = novaAltura;
        this.largura = novaLargura;
    }
}

// Criar o objeto
let poligono = new Poligono(50, 60)
console.log(poligono)
console.log(`Área do polígono: ${poligono.area}`)
