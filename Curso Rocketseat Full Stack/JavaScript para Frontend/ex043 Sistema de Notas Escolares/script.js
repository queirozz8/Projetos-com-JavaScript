/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima = A
* entre 80 - 89 = B
* entre 70 - 79 = C
* entre 60 - 69 = D
* menor que 60 = E

*/

let notas = [95, 95, 101, 66, 81, 77, 53, -50]
for(let i = 0; i < notas.length; i++) {
    let nota = notas[i]
    if (nota >= 90 && nota <= 100) {
        console.log(`${i + 1}° Nota: A.`)
    } else if (80 <= nota && nota <= 89) {
        console.log(`${i + 1}° Nota: B.`)
    } else if (70 <= nota && nota <= 79) {
        console.log(`${i + 1}° Nota: C.`)
    } else if (60 <= nota && nota <= 69) {
        console.log(`${i + 1}° Nota: D.`)
    } else if (nota < 60 && nota >= 0) {
        console.log(`${i + 1}° Nota: E.`)
    } else {
        console.log(`${i + 1}° Nota: Inválida.`)
    }
}

console.log('Fim do Software!')
