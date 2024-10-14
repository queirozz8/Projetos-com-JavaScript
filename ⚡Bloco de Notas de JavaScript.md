# **TIPOS PRIMITIVOS DO JAVASCRIPT**
1) **`string`**: Representa textos. Exemplo: `"Olá, mundo!"`.

## Tipos de aspas em strings
**1. Aspas simples (`'`)** e **aspas duplas (`"`)**:

- Ambas funcionam de forma muito similar, sendo intercambiáveis. A escolha entre uma ou outra muitas vezes é questão de estilo ou preferência pessoal.
- **Diferença prática**: Se você usar aspas simples dentro de um string com aspas simples, vai precisar escapar esse caractere usando uma barra invertida (`\`). O mesmo vale para aspas duplas.
```js
const exemplo = 'Isso é um "teste"';  // Aspas duplas dentro de aspas simples, tudo certo
const outroExemplo = "Isso é um 'teste'";  // Aspas simples dentro de aspas duplas, também funciona
const errado = 'Isso é um 'teste'';  // Erro: precisa escapar as aspas simples
const correto = 'Isso é um \'teste\'';  // Agora funciona
```
**2. Template literals (\`\`)**:

- Template literals, ou **crases**, são mais poderosas e flexíveis.
- Com elas, você pode:
    - **Interpolar variáveis** facilmente usando `${}`:
```js
const nome = 'Rick';
const saudacao = `Olá, ${nome}!`;  // Resultado: "Olá, Rick!"
```
**Escrever strings multilinha/em bloco** sem precisar usar `\n`:
```js
const texto = `Este é um texto
que pode ser dividido
em várias linhas.`;
```

- Além disso, o template literal é muito útil para criar strings complexas, como as que envolvem HTML ou grandes quantidades de texto.

- **Aspas simples ou duplas**: Use-as quando você tem uma string simples, sem a necessidade de interpolação de variáveis ou multilinhas.
- **Crases (Template literals)**: Use-as quando precisar interpolar variáveis ou trabalhar com strings multilinhas.

No geral, **template literals (\`\`)** são mais flexíveis e usados com frequência em código moderno, especialmente quando você precisa incluir variáveis ou expressões dentro da string.



2) **`number`**: Representa números, incluindo inteiros e decimais. Exemplo: `42`, `3.14`. Ou o infinito, com o `Infinity`.
3) **`bigint`**: Usado para números inteiros muito grandes, além do limite do tipo `number`. Exemplo: `12345678901234567890n`.
4) **`boolean`**: Representa valores lógicos. Pode ser `true` ou `false`. Exemplo: `true`.
5) **`undefined`**: Representa uma variável que foi declarada, mas ainda não recebeu um valor. Exemplo: `let x; console.log(x); // undefined`.
```js
let x;
console.log(x); // undefined
```

6) **`null`**: Representa a ausência intencional de valor. Diferente de `undefined`, que indica uma ausência acidental. Exemplo: `let x = null`. É meio que "existe, porém não tem valor algum"
7) **`symbol`**: Um valor único e imutável que pode ser usado como identificador. Cada símbolo é único. Exemplo: `let sym = Symbol('descrição');`.

Além desses tipos, há também objetos, mas objetos não são primitivos, pois têm propriedades e métodos.




# **VARIÁVEIS**


# **DECLAÇÃO DAS VARIÁVEIS**


## 1) LET
Imagine uma **caixa com tampa fechada** que só pode ser acessada por quem está dentro de uma sala específica. Essa é a analogia para o **`let`**. Diferente do `var`, as variáveis declaradas com `let` têm **escopo de bloco**, o que significa que elas só "existem" dentro do bloco em que foram declaradas (como um `if`, `for`, etc.).

### Exemplo na vida real:

Imagine que você deixa uma caixa em **um quarto da casa**. Apenas as pessoas que entram naquele quarto (bloco) podem acessar essa caixa. Se alguém for para outro quarto, não poderá mexer nessa caixa, mesmo que tenha o mesmo nome que outra caixa que você deixou lá. Portanto, cada caixa é independente.

Veja um exemplo no código:
```js
function exemplo() {
    let x = 10;
    if (true) {
        let x = 20; // Esta variável só existe dentro deste bloco
        console.log(x); // Imprime 20
    }
    console.log(x); // Imprime 10 (a variável original não foi alterada)
}
```
Aqui, a segunda variável `x` só existe dentro do bloco `if`, e não afeta a `x` que está fora. Ou seja, você tem um controle muito mais preciso sobre onde sua variável pode ser usada.


## 2) CONST
Agora, imagine uma **caixa trancada com cadeado**, onde, após guardar algo, você **não pode mais mudar o que está dentro**. Isso é o **`const`**. As variáveis declaradas com `const` também têm **escopo de bloco** (como `let`), mas com uma diferença crucial: uma vez que você coloca um valor lá dentro, você **não pode mudar o valor diretamente**.

#### Exemplo na vida real:

Imagine que você guardou um objeto valioso dentro de uma caixa e trancou com um cadeado. Ninguém pode substituir o objeto, mas você ainda pode mexer no objeto que está lá dentro, por exemplo, abrindo e movendo coisas dentro dele (no caso de objetos mutáveis, como arrays e objetos).
```js
const y = 10;
y = 20; // Erro! Não posso reatribuir uma variável const

const arr = [1, 2, 3];
arr.push(4); // Isso funciona, porque estou mudando o conteúdo do array, não reatribuindo o array
console.log(arr); // Imprime [1, 2, 3, 4]
```
Com `const`, você não pode reatribuir a variável, mas se for um **objeto** ou um **array**, pode modificar os valores internos. Isso ocorre porque, tecnicamente, você não está mudando a "caixa", só o que está **dentro** da caixa.

## Por que usar `const`?
"Eu poderia simplesmente usar um `let` e só não mexer naquela variável, não é?". Bom, até poderia, mas o `const` é uma alternativa melhor por esses motivos:
- **`const`** deixa claro que a variável não será reatribuída, ajudando na legibilidade e manutenção.
- Garante que você (ou outro programador) não altere acidentalmente a referência da variável.
- Ajuda a seguir boas práticas de imutabilidade no código.

Você pode até usar `let` e simplesmente não mudar a variável, mas o `const` reforça essa intenção no código de forma explícita e mais segura.


## 3) VAR
Pense no **`var`** como uma **caixa com tampa aberta**. Você pode acessar essa caixa de praticamente qualquer lugar no seu ambiente (código), independentemente de onde ela foi inicialmente colocada (declarada). Isso porque variáveis declaradas com `var` têm o que chamamos de **escopo de função ou escopo global**. Hoje em dia não é muito recomendado se usar o `var`.
### Exemplo na vida real:

Imagine que você deixa uma caixa (variável) no **quintal de uma casa**. Como o quintal é um espaço compartilhado por todos, qualquer pessoa que esteja na casa (todas as partes do código) pode mexer nessa caixa, desde que ela saiba onde a caixa está. Além disso, se você tentar colocar outra caixa com o mesmo nome no quintal, você vai substituir a caixa anterior sem nenhum aviso. Isso pode causar problemas no seu "jogo de guardar caixas".

No JavaScript, o `var` funciona assim: ele está disponível fora de blocos de código como loops e condições. Veja:
```js
function exemplo() {
    var x = 10; // Declarando x
    if (true) {
        var x = 20; // Redefinindo x dentro do bloco
        console.log(x); // Imprime 20
    }
    console.log(x); // Ainda imprime 20 (mesma variável)
}
```
A variável `x` foi declarada dentro do bloco `if`, mas ela afeta o valor fora do bloco também. Isso pode ser confuso e pode gerar erros se você não tiver cuidado.

O `var`, mesmo que você faça algo com ele antes de ele ser declarado, e em umas linhas abaixo ele for declarado, o JavaScript entende ele e diz que a variável tem o valor undefined, e que o valor é definido só quando chegar na linha da atribuição do valor da variável.
**Exemplo:**
```js
console.log(`Existe x antes do bloco? ${x}`)

{
	var x = 0
}

console.log(`Existe x depois do bloco? ${x}`)
```
### Output:
```
Existe x antes do bloco? undefined
Existe x depois do bloco? 0
```
No primeiro output, o var existia, porém não tinha valor ainda.
Depois do valor ser atribuído, ele consegue ser exibido normalmente no segundo output, que vem depois da atribuição do valor.


### Resumindo:
- **`var`**: Escopo global ou de função. Use com cuidado, porque pode ser acessada ou sobrescrita de forma inesperada.
- **`let`**: Escopo de bloco. Muito mais seguro que `var` para evitar erros de sobrescrita e limitar a visibilidade.
- **`const`**: Escopo de bloco, mas não pode ser reatribuída. Ideal para valores que você sabe que não vão mudar (constantes), embora o conteúdo de objetos/arrays possa ser modificado.


# **MÚLTIPLA DECLARAÇÃO DE VARIÁVEIS**


# VARIÁVEIS DE VALORES DIFERENTES

**Exemplo:**
```js
let x = 30, y = true, z = 'hello';
```
- `x` é declarado como `let` e recebe o valor `30` (número).
- `y` é declarado como `let` e recebe o valor `true` (booleano).
- `z` é declarado como `let` e recebe o valor `'hello'` (string).

**Outro exemplo:**
```js
let x = 30, y = 30, z = 30;
```


# VARIÁVEIS COM VALORES IGUAIS

**Exemplo:**
```js
let a, b, c; // Declara as variáveis a, b e c
a = b = c = 10; // Atribui o valor 10 a 'c', depois 'b' recebe o valor de 'c', e por fim 'a' recebe o valor de 'b'
```




# **ESTRUTURAS DE DADOS**

# **ARRAYS**
O **array** é uma estrutura de dados que armazena uma coleção de itens (como números, strings, objetos, etc.). Eles são indexados numericamente, começando do índice 0.
Um array é caracterizado pelo caractere de colchetes `[]`.
**Exemplo:**
```js
let compras = [
    'Leite',
    'Ovos',
    2,
    3
]
```


# **PRINCIPAIS FUNÇÕES DOS ARRAYS EM JAVASCRIPT**


# ADIÇÃO E INSERÇÃO

- `push()`: Adiciona um ou mais elementos ao final do array.
```js
let array = [1, 2, 3];
array.push(4, 5);
console.log(array); // Saída: [1, 2, 3, 4, 5]
```

- `unshift()`: Adiciona um ou mais elementos no início do array.
```js
let array = [3, 4, 5];
array.unshift(1, 2);
console.log(array); // Saída: [1, 2, 3, 4, 5
```


# REMOÇÃO

- `pop()`: Remove e retorna o último elemento do array.
```js
let array = [1, 2, 3, 4, 5];
let lastElement = array.pop();
console.log(lastElement); // Saída: 5
console.log(array); // Saída: [1, 2, 3, 4]
```

- `shift()`: Remove e retorna o primeiro elemento do array.
```js
let array = [1, 2, 3, 4, 5];
let firstElement = array.shift();
console.log(firstElement); // Saída: 1
console.log(array); // Saída: [2, 3, 4, 5]
```

- `splice(start, deleteCount, item1, item2, ...)`: Remove, substitui ou adiciona elementos em posições específicas.
```js
let array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'a', 'b'); // Remove 1 elemento na posição 2 e adiciona 'a' e 'b'
console.log(array); // Saída: [1, 2, 'a', 'b', 4, 5]
```


# CONSULTA

- `indexOf(element, fromIndex)`: Retorna o primeiro índice do elemento especificado.
```js
let array = [1, 2, 3, 4, 3, 5];
console.log(array.indexOf(3)); // Saída: 2
console.log(array.indexOf(3, 3)); // Saída: 4 (começa a buscar a partir do índice 3)
```

- `lastIndexOf(element, fromIndex)`: Retorna o último índice do elemento especificado.
```js
let array = [1, 2, 3, 4, 3, 5];
console.log(array.lastIndexOf(3)); // Saída: 4
```

- `includes(element, fromIndex)`: Verifica se o array contém o elemento especificado.
```js
let array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // Saída: true
console.log(array.includes(6)); // Saída: false
```

- `find(callback)`: Retorna o primeiro elemento que satisfaz a função de teste.
```js
let array = [1, 2, 3, 4, 5];
let found = array.find(element => element > 3);
console.log(found); // Saída: 4
```

- `findIndex(callback)`: Retorna o índice do primeiro elemento que satisfaz a função de teste.
```js
let array = [1, 2, 3, 4, 5];
let index = array.findIndex(element => element > 3);
console.log(index); // Saída: 3
```


# ORDENAÇÃO E REVERSÃO

- `sort()`: Ordena os elementos do array in-place e retorna o array.
```js
let array = [3, 1, 4, 1, 5];
array.sort();
console.log(array); // Saída: [1, 1, 3, 4, 5]

// Para ordenação numérica:
array.sort((a, b) => a - b);
```

- `reverse()´: Inverte a ordem dos elementos do array in-place.
```js
let array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Saída: [5, 4, 3, 2, 1]
```


# TRANSFORMAÇÃO

- `map(callback)`: Cria um novo array com os resultados da chamada de uma função para cada elemento.
```js
let array = [1, 2, 3, 4, 5];
let doubled = array.map(x => x * 2);
console.log(doubled); // Saída: [2, 4, 6, 8, 10]
```

- `filter(callback)`: Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
```js
let array = [1, 2, 3, 4, 5];
let evens = array.filter(x => x % 2 === 0);
console.log(evens); // Saída: [2, 4]
```

- `reduce(callback, initialValue)`: Executa uma função reducer para cada elemento do array, resultando num único valor de retorno.


# CÓPIA E EXTENSÃO

- slice(start, end): Retorna uma cópia superficial de uma porção do array.
```js
let array = [1, 2, 3, 4, 5];
let sliced = array.slice(1, 4);
console.log(sliced); // Saída: [2, 3, 4]
```

- `concat()`: Mescla dois ou mais arrays e retorna um novo array.
```js
let array1 = [1, 2];
let array2 = [3, 4];
let newArray = array1.concat(array2);
console.log(newArray); // Saída: [1, 2, 3, 4]
```


# OUTROS MÉTODOS ÚTEIS

- join(separator): Junta todos os elementos de um array em uma string.
```js
let array = ['a', 'b', 'c'];
console.log(array.join('-')); // Saída: "a-b-c"
```

- `every(callback)`: Testa se todos os elementos no array passam no teste implementado pela função fornecida.
```js
let array = [2, 4, 6, 8];
let allEven = array.every(x => x % 2 === 0);
console.log(allEven); // Saída: true
```

- `some(callback)`: Testa se pelo menos um elemento no array passa no teste implementado pela função fornecida.
```js
let array = [1, 2, 3, 4, 5];
let hasEven = array.some(x => x % 2 === 0);
console.log(hasEven); // Saída: true
```

- `flat(depth)´: Cria um novo array com todos os elementos de sub-array concatenados recursivamente até a profundidade especificada.
```js
let array = [1, [2, [3, 4]]];
console.log(array.flat(2)); // Saída: [1, 2, 3, 4]
```

- `forEach(callback)´: Executa uma função para cada elemento do array.
```js
let array = [1, 2, 3];
array.forEach(x => console.log(x * 2));
// Saída:
// 2
// 4
// 6
```




# **OBJETOS**

Um **objeto** em JavaScript é uma coleção de **propriedades**, que podem ser vistas como um conjunto de pares **chave-valor**. Se você imaginar um objeto como uma **caixa de ferramentas**, as **ferramentas** seriam os valores, e o **nome** de cada ferramenta seria a chave.
Um objeto é caracterizado pelo caractere de chaves `{}`.
**Exemplo:**
```js
let pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor"
};
```

Aqui, temos um objeto chamado `pessoa` com três propriedades:

- `nome` (chave) tem o valor `"João"`,
- `idade` tem o valor `30`,
- `profissao` tem o valor `"Desenvolvedor"`.

Essas propriedades são como "etiquetas" que descrevem aspectos desse objeto. Se a `pessoa` fosse um perfil no Facebook, as **propriedades** seriam as informações do perfil, como nome, idade e ocupação.


# ACESSANDO PROPRIEDADES

Para acessar uma propriedade de um objeto, usamos duas formas principais:

1. **Notação de ponto**:
```js
console.log(pessoa.nome);  // "João"
```

2. **Notação de colchetes** (útil quando a chave é dinâmica ou contém caracteres especiais):
```js
console.log(pessoa["profissao"]);  // "Desenvolvedor"
```

A notação de ponto é como pegar algo diretamente de uma prateleira pelo nome. Já a notação de colchetes é como usar uma chave de identificação para buscar o item.


# ADICIONANDO E MODIFICANDO PROPRIEDADES

Imagine que você quer adicionar mais uma ferramenta na caixa ou trocar uma que já está lá. Podemos fazer isso facilmente:

- **Adicionar uma nova propriedade**:
```js
pessoa.altura = 1.75;
```

- **Modificar uma propriedade existente**:
```js
pessoa.idade = 31;
```


# EXCLUINDO PROPRIEDADES

Se você precisar remover uma propriedade, como jogar fora uma ferramenta antiga, usa-se o operador `delete`:
```js
delete pessoa.profissao;
```


# MÉTODOS EM OBJETOS

Além de guardar informações (valores simples), objetos também podem conter **métodos**, que são funções associadas a eles. Imagine um método como uma **ferramenta que realiza uma ação**.

**Exemplo:**
```js
let pessoa = {
  nome: "João",
  saudacao: function() {
    return "Olá, meu nome é " + this.nome;
  }
};

console.log(pessoa.saudacao());  // "Olá, meu nome é João"
```

O método `saudacao` executa uma ação e utiliza o valor da propriedade `nome` para formar uma frase. O `this` é como um "atalho" para referenciar o próprio objeto dentro de um método.


# ITERANDO SOBRE PROPRIEDADES

Podemos **percorrer** todas as propriedades de um objeto usando um laço `for...in`:
```js
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}
```
Isso nos permite ver o nome de cada propriedade e seu valor, como se estivéssemos verificando o conteúdo de cada ferramenta na caixa.


# OBJETOS ANINHADOS

Um objeto pode conter outros objetos dentro de si. Isso é como ter uma **caixa de ferramentas** dentro de outra caixa. Por exemplo, uma pessoa pode ter um endereço, que também é composto por várias propriedades:
```JS
let pessoa = {
  nome: "João",
  endereco: {
    rua: "Rua Principal",
    cidade: "São Paulo"
  }
};

console.log(pessoa.endereco.cidade);  // "São Paulo"
```
Aqui, `endereco` é um objeto dentro do objeto `pessoa`.


# OBJETOS E ARRAYS

Um objeto pode conter arrays como valores, e arrays podem conter objetos. Um exemplo seria uma lista de carros que uma pessoa possui:
```js
let pessoa = {
  nome: "João",
  carros: ["Civic", "Corolla"]
};

console.log(pessoa.carros[0]);  // "Civic"
```

## Ou um array de objetos:

```js
let pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 }
];

console.log(pessoas[1].nome);  // "Maria"
```


# COMPARANDO OBJETOS

Em JavaScript, objetos são comparados **por referência**, não por valor. Isso significa que, se dois objetos ocuparem o mesmo espaço na memória, eles serão considerados iguais, mesmo que tenham propriedades iguais em termos de conteúdo.

```js
let obj1 = { nome: "João" };
let obj2 = { nome: "João" };

console.log(obj1 === obj2);  // false (diferentes referências)

let obj3 = obj1;
console.log(obj1 === obj3);  // true (mesma referência)
```

Isso é como ter duas cópias de uma chave em dois conjuntos diferentes. Mesmo que as chaves pareçam iguais, fisicamente são objetos diferentes. Agora, se você der uma das chaves ao seu amigo e ambos usarem a mesma, isso é uma "referência".


# CLONANDO OBJETOS

Se quiser criar uma **cópia independente** de um objeto, você pode fazer um **clone superficial** usando `Object.assign()` ou o **spread operator** (`...`):
```js
let pessoa2 = Object.assign({}, pessoa);  // Clona pessoa
let pessoa3 = { ...pessoa };  // Clona pessoa de outra forma
```
Esses métodos copiam as propriedades de um objeto para outro. No entanto, se o objeto contiver outros objetos (objetos aninhados), isso cria uma **cópia superficial**, e as referências internas ainda apontam para os mesmos lugares na memória.