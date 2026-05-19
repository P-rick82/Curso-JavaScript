//Exercício 1 (Perfil):
// Crie variáveis:
// nome
// idade
// profissao
// cidade
// Mostre no console:
// Meu nome é ___, tenho ___ anos, trabalho como ___ e moro em ___.

// Resolução

let nome = "Leonardo";
let idade = "62";
let profissao = "Cantor (Vulgo lenda)";
let cidade = "Buteco";

console.log(`Nome: ${nome}, idade: ${idade}, Profissão: ${profissao}, Habitat Natural: ${cidade}`)

//Exercício 2 (Produto)

// Crie variáveis:

// produto
// preco
// quantidade
// Mostre:
// Comprei ___ unidades de ___ por R$___ cada.

// Resolução

let produto = "Monter";
let preco = 15;
let quantidade = 22;

console.log(`Comprei ${quantidade}, unidades de ${produto}, por R$ ${preco} cada`)

// Exercício 3 (Calculando valores)

// Crie:
// valor1 = 10
// valor2 = 20

// Mostre no console:
// Soma
// Subtração
// Multiplicação
// Divisão

// Resolução

let a = 10;
let b = 20;

console.log(`Soma: ${a + b}`);
console.log(`Subtração: ${a - b}`);
console.log(`Multiplicação: ${a * b}`);
console.log(`Divisão: ${a / b}`);

// Exercício 4 (Tipos)
// Crie 5 variáveis com tipos diferentes e mostre:

// valor
// tipo

// Exemplo esperado:
// Olá - string
// 10 - number
// true - boolean

// Resolução

let Val = 28;
let Tip = "Queijo";

console.log(typeof Val + " " + Val);
console.log(typeof Tip + " " + Tip);

// Exercício 5 (Conversões)

// Crie:
// let numero = "100"

// Converta para:
// number
// string novamente

// Resolução

let n1 = "100";

let Num = Number(n1);
let txt = String(n1);

console.log(Num);
console.log(txt);

// Questão Desafio

// Criar um mini cadastro:
// Variáveis:
// nome
// idade
// altura
// peso
// cidade
// profissao

// Mostrar:
// Cadastro do usuário
// Nome:
// Idade:
// Altura:
// Peso:
// Cidade:
// Profissão:

// Resolução

let Nome = "Mirosmar";
let Idade = 40;
let altura = 1.75;
let peso = 80;
let Cidade = "São Paulo"
let Profissao = "Cantor"

console.log("" + Nome);
console.log("" + Idade);
console.log("" + altura);
console.log("" + peso);
console.log("" + Cidade);
console.log("" + Profissao);

