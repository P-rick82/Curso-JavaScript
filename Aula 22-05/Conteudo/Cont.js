// Manipulação de DOM
// DOM -> É a forma como o navegador organiza o html para que o JS consiga acessar os elementos

// Principais métodos de seleção de elementos no DOM

/* 
    getElementById -> Serve para selecionar um elemento pelo ID

    querySelector -> Serve para selecionar o 1º elemento que corresponde a um seletor CSS (tag(Ex: p, h1, h2), ID, nome de classe)

    querySelectorAll -> Serve para selecionar todos os elementos que correspondem a um seletor

    querySelectorByClassName -> Serve para selecionar TODOS os elementos que correspondem a uma classe

*/

// // getElementById
// const titulo = document.getElementById("titulo");
// const valor = document.getElementById("titulo").innerText; // .nnerText -> pega o valor do elemento

// console.log(titulo);
// console.log(valor);

// // querySelector
// // OBS: ponto(.) representa classe e sharp(#) representa id
// const titulo = document.querySelector("#titulo"); // Essa linha está chamando o id -> #nomeid 

// const paragrafo = document.querySelector(".paragrafo"); // Essa linha está chamando classes -> .nomeclasse 

// const tituloh2 = document.querySelector("h2"); // Essa linha está chamando tags -> h2

// console.log(titulo);
// console.log(paragrafo);
// console.log(tituloh2);

// // querySelectorAll
const elementos = document.querySelectorAll(".texto");
// Imprime o elemento (p)
console.log(elementos);

// Imprime o valor que está dentro do elemento (p)
elementos.forEach(elemento => console.log(elemento.innerText));

// Trocando o texto que está dentro do elemento
elementos.forEach(elemento => elemento.innerText = "Alterado");

// Trocando a tag (p) vai virar (h2)
elementos.forEach(elemento => elemento.innerHTML = "<h2>Item</h2>");

// Trocando a cor da fonte (letras)
elementos.forEach(elemento => elemento.style.color = "#0000FF");



