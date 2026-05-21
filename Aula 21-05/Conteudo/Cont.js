
// Funções nativas do Javascript
// ajudam a manter um código limpo e organizado
// evita muita repetição de código

// // MAP -> Percorre uma lista e cria uma nova lista com base em uma condição
// let numeros = [1, 2, 3, 4];

// let numerosDobrados = numeros.map(function(num){
//     return num * 2;
// });

// // console.log(numerosDobrados);

// // mesma função, mas agora com arrow function
// let numerosDobradosArrow = numeros.map(num => num * 2);
// // console.log(numerosDobradosArrow);

// let teste = numeros.map(num => {
//     let resultado = num * 2;
//     return resultado;
// })

// console.log(teste)

// // IF Ternário
// // se for verdadeiro -> a resposta vem depois da interrogação
// // se for falso -> a resposta vem depois dos dois pontos
// let resposta = (idade > 18) ? "maior de idade" : "menor de idade";

// // se for verdadeiro -> a resposta vem depois da interrogação
// // se for falso -> a resposta vem depois dos dois pontos
// // se depois dos dois pontos tiver outra condição, a gente volta pro começo
// let resposta2 = (idade > 18) ? "maior de idade" : (idade > 75) ? "idoso" : "menor de idade";

// FILTER -> Filtra os elementos de uma lista com base em uma condição
// let numeros = [5, 10, 15, 20];

// let maiorQueDez = numeros.filter(num => num > 10);
// console.log(maiorQueDez); // [15, 20]

// Reduce -> Reduz os valores de um array para um unico valor
// let numeros = [10, 20, 30, 40, 50]

// Acumulador
// Variavel auxiliar
// 0 -> É o valor inicial do acumulador
// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
// console.log(soma);

// Find -> Retorna o primeiro elemento que atende uma condição
// let produtos = [
//     {id: 1, nome: "Teclado", preco: 80},
//     {id: 2, nome: "Mouse", preco: 60},
//     {id: 2, nome: "Fone de ouvido", preco: 300},
// ]

// let item = produtos.find(produto => produto.id === 2);
// console.log(item);

// // Split -> Divide uma string em partes, transformando em uma lista

// let frase = "I wanna rock and roll, all night, and party every day!!!"

// // Criando um array de palavras usando split
// let palavra = frase.split("");
// console.log(palavra);

// // Tim -> Remove espaços no inicio e final de uma string
// let nome = "  Bon Jovi  ";
// let nome1 = "   Kiss  ";
// let NomeLimpo = nome.trim();

// console.log(NomeLimpo);
// console.log(nome1);

// // Includes -> Verifica se existe um valor dentro de uma lista ou de string
// let frutas = ["Morango", "Manga", "Uva", "Laranja"];

// let FrutaExiste = frutas.includes("Banana"); // Booleano -> true or false
// console.log(FrutaExiste); // False

// //toLowerCase -> Tranforma o texto em minúsculo
// //toUpperCase -> Tranforma o texto em maiúsculo
// let nome = "Mirosmar";
// let cargo = "Cantor";

// console.log(nome.toLowerCase()); // Será imprimido: mirosmar
// console.log(cargo.toUpperCase()); // Será imprimido: CANTOR

// // Some -> Verifica se pelo menos um item da lista atende a condição
// let numeros = [3, 2, 4, 6, 8];

// let TemNumeroPar = numeros.some(num => num %2 === 0); // True or false
// console.log(TemNumeroPar); // true

// // Every -> Verifica se todos os elementos da lista atendem a uma condição
// let TodosSaoPares = numeros.every(num => num %2 === 0);
// console.log(TodosSaoPares); // False

// // Sort -> Ordena os elementos de uma lista
// let numeros = [10, 15, 32, 2, 0, -3];
// let letras = ["a", "c", "f", "l", "i",];

// // Ordenando letras
// letras.sort();
// console.log(letras);

// // Ordenando numeros
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// // Reverse -> Inverte a ordem de um array
// numeros.reverse();
// console.log(numeros);

// // Join -> Junta os elementos de uma array em uma string
// let palavras = ["I", "wanna", "rock", "and", "roll", "all", "night", "and", "party", "every", "day", "!"];

// let frase = palavras.join(" ");
// console.log(frase);

// // PUSH -> Adiciona elementos no final do array
// // POP -> Remove elementos no final do array
// let lista = ["A", "B"];

// lista.push("C"); // adicionando
// console.log(lista);

// lista.pop(); // removendo
// console.log(lista);;

// // Shift -> remove elementos do inicio do array
// // Unshift -> adiciona elementos do inicio do array
// let lista = ["B", "C"];

// lista.unshift("A"); // adicionando
// console.log(lista);

// lista.shift(); // removendo
// console.log(lista);

// Slice -> Cria uma copia de uma parte da lista

// /* 

//     array.slice(inicial, final)

//     inicial -> Onde começa (a copiar o array)
//     final -> Onde termina (não inclui a posição final (indice/index))

// */

// let numeros = [1, 2, 3, 4];
// let copia = numeros.slice(1, 3); // 1 e 3 são posições do array

// console.log(copia);

// Splice -> Remove ou adiciona elementos em qualquer posição
/* 

     array.splice(indice, count, item1, ..... , itemX)

     indice -> posição do elemento no array(index)
     count -> números de itens a serem removidos (pode ser 0)
     item -> itens que vão ser adicionados

*/

// // Remover com splice
// let numeros = [1, 2, 3, 4]

// numeros.splice(1,2); // os numeros (2 e 3) serão removidos da lista
// console.log(numeros);


// // Adicionar com splice
// let frutas = ["Morango", "Manga", "Uva", "Laranja"];

// frutas.splice("Maracuja", "Acerola")
// console.log(frutas);

// // Remover e adicionar simultaneamente com splice
// let frutas = ["Morango", "Manga", "Uva", "Laranja"];

// // A linha 188 vai tirar laranja e acrescentar as outras duas frutas (Tbm pode ser usado para colocar no lugar doq será removido (
// // Ex: se tirar manga os adicionados serão colocados no lugar dela))
// frutas.splice(2, 1, "Maracuja", "Acerola") 
// console.log(frutas);

// // Replace -> Substitui uma parte da string

// let texto = "I wanna rock and roll, all night, and party every day!!!";

// // replace(ValorProcurado, ValorSubstituto)
// let NovoTexto = texto.replace("night", "life")
// console.log(NovoTexto);

// SPOILER PROXIMO CONTEUDO

let TextoP = document.getElementById("Texto");

let saudacao = prompt("Digite uma saudação: ");

TextoP.textContent = saudacao == "Bom dia" ? saudacao : "Note this time!";
