// VARIÁVEIS
/*
    LET     -> Quando o valor da variável pode mudar, usamos let
    VAR     -> Forma antiga - evitar usar (está sendo descontinuado por muitos problemas)
    CONST   -> Quando o valor da variável NÃO pode mudar
*/

// let nome = "Leonardo";
// const idade = 25;
// var cidade = "São Paulo";

// // console.log() -> imprime valores na tela
// console.log(nome);
// console.log(idade);

// // trocando informações da variável com let
// nome = "Misomar";
// console.log(nome);

// // trocando informações da variável com const
// // idade = 30;
// // console.log(idade);

// // imprimindo valores juntos
// console.log(nome + cidade);

// // imprimindo valores juntos com texto

// // concatenação
// console.log("Nome: " + nome + ", cidade: " + cidade);

// // interpolação
// console.log(`Nome: ${nome}, cidade: ${cidade}`);


// // TIPOS PRIMITIVOS

// // String (texto)
// let mensagem = "Hello World!!";
// console.log(typeof mensagem);

// // Number (número)
// let idade = 30;
// let temp = 36.5;
// console.log(typeof idade);
// console.log(typeof temp);

// // Boolean (booleano -> verdadeiro / falso)
// let chuva = true;
// console.log(typeof chuva);

// // Undefined -> quando não definimos um valor para uma variavel
// let nome;
// console.log(typeof nome);

// // Null / object -> usado para ausência intencional de um valor
// let endereco = null;
// console.log(typeof endereco);

// // Conversão dos tipos
// // Conversão implícita (automática)
// let soma = "5" + 3;
// let sub = "5" - 3;

// console.log(typeof soma)
// console.log(soma) // Resposta: 53 (string)
// console.log(typeof sub)
// console.log(sub) // Resposta: 2 (number)

// // Conversão explícita

// // converter string para número
// let n = "42";
// let convertido = Number(n);

// // converter número para string
// let n2 = 100;
// let texto = String(n2);


// Operadores Relacionais
/*
    >       MAIOR QUE
    <       MENOR QUE
    >=      MAIOR OU IGUAL
    <=      MENOR OU IGUAL
    ==      IGUALDADE (ignora tipo)
    ===     IGUALDADE ESTRITA (verifica tipo)
    !=      DIFERENTE (ignora tipo)
    !==     DIFERENTE ESTRITO (verifica tipo)

*/

// // Exemplo
// console.log(10 > 5); // true
// console.log(10 < 5); // false

// console.log(5 == "5") // true
// console.log(5 === "5") // false -> compara valor e tipo

// // Operadores Matemáticos
// /*
//     +   SOMA
//     -   SUBTRAÇÃO
//     *   MULTIPLICAÇÃO
//     /   DIVISÃO
//     %   RESTO DA DIVISÃO
//     **  POTÊNCIA
// */

// // Exemplo
// let a = 10;
// let b = 5;

// console.log(a + b); // soma
// console.log(a - b); // subtração
// console.log(a * b); // multiplicação
// console.log(a / b); // divisão

// // resto
// console.log(a % b); // resto da divisão
// console.log(a ** b); // potência

// // Operadores Lógicos
// /*
//     && (AND)  -> OPERADOR E
//     || (OR)   -> OPERADOR OU
//     !(NOT)    -> OPERADOR NÃO (negação)
// */

// // Operador &&
// // só retorna verdadeiro quando todas as condições forem verdadeiras

// let num1 = 5
// let num2 = 5
// let num3 = 10
// console.log(num1 == num2 && num3 > num2); // true

// // Operador ||
// // retorna verdadeiro se pelo menos uma das condições forem verdadeiras
// let num4 = 9
// console.log(num1 == num4 || num1 == num2); // true

// // Operador !(não)
// // inverte a condição, se é verdadeiro -> vira falso e vice e versa
// let logado = true;
// console.log(!logado); // false
// console.log(5 != 3) // true

// // Array (Lista)

// let frutas = ["Manga", "Morango", "Maracuja"];

// // Imprimindo a lista completa de frutas
// console.log(frutas);

// // Imprimindo a fruta na posição 1
// console.log(frutas[1])

// // Imprimindo o tamanho da lista
// console.log(frutas.length);

// // Objetos

// let pessoa = {
//     nome: "Zé",
//     idade: 22
// };

// // Imprime todas as informações em (pessoa)
// console.log(pessoa);

// // Imprime somente o nome da pessoa
// console.log(pessoa.nome);

// // Imprime somente a idade da pessoa
// console.log(pessoa.idade);

// // Array de objetos

// let Pessoa = [
//     {
//     nome: "Zé",
//     idade: 22
//     },
//     {
//     nome: "Zero",
//     idade: 21
//     },
// ];

// Recebendo dados do úsuario
// let nome = prompt("Digite seu Nome: ");
// alert(`Boa noite, ${nome}`);

function mensagem()
{
    alert("Boa Noite, Seja bem vindo(a)!");
}

