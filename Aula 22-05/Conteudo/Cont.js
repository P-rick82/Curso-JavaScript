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
// const elementos = document.querySelectorAll(".texto");
// // Imprime o elemento (p)
// console.log(elementos);

// // Imprime o valor que está dentro do elemento (p)
// elementos.forEach(elemento => console.log(elemento.innerText));

// // Trocando o texto que está dentro do elemento
// elementos.forEach(elemento => elemento.innerText = "Alterado");

// // Trocando a tag (p) vai virar (h2)
// elementos.forEach(elemento => elemento.innerHTML = "<h2>Item</h2>");

// // Trocando a cor da fonte (letras)
// elementos.forEach(elemento => elemento.style.color = "#0000FF");


// // Eventos 
// // Eventos são ações do usuário

// // Evento de click
// const botao = document.getElementById("btn");

// // adicionando um "escutador de eventos" no botão
// botao.addEventListener("click", () => {
//     alert("Você clicou!");
// })

// Evento de digitação (input / keyup)

// // evento input -> dispara sempre que digita, em tempo real
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// // campo.addEventListener("input", () => {
// //     // value -> o valor digitado dentro da caixinha de texto
// //     resultado.innerText = campo.value;
// // });

// // evento keyup -> dispara quando solta a tecla
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value;
//     console.log("Tecla pressionada");
// })

// // evento de mouse
// const elemento = document.getElementById("troca-cor");
// const botao = document.getElementById("btn");

// // mouseover -> quando passa o mouse por cima do elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000";
// })

// // mouseout -> quando passa o mouse por cima do elemento
// elemento.addEventListener("mouseout", () => {
//     elemento.style.backgroundColor = "#3112bbff";
//     botao.style.backgroundColor = "#3112bbff";
//     elemento.style.backgroundColor = "";
// })

// // Mousemove -> pega a poição do mouse
// document.addEventListener("mousemove", (evento) => {
//     console.log("Posição de X: ", evento.clientX, "Posição de Y: ", evento.clientY);
// })

// // Evento de formulario (submit)
// const form = document.getElementById("form");

// // Comportamento padrão de um formulario é recarregar a pagina
// form.addEventListener("submit", (evento) => {
//     evento.preventDefault(); // Impede o comportamento padrão

//     const nome = document.getElementById("nome").value;
//     console.log("Nome: " + nome); 
// })

// // criando elementos na pagina
// const novoElemento = document.createElement("p"); // cria um elemento <p>
// novoElemento.innerText = "Elemento nove criado"; // cria um texto no elemento

// form.appendChild(novoElemento); // estamos aducionando um elemento filho <p> dentro do pai (form)

// const botao = document.createElement("button");
// botao.innerText= "Excluir elemento";
// form.appendChild(botao);

// botao.addEventListener("click", (e) => {
//     e.preventDefault();

//     novoElemento.remove();

//     // apagando direto do pai
//     // form.removeChild(novoElemento)
// })

// Adicionando elementos em uma lista não ordenada (ul) atraves de um input
const input = document.getElementById("input") // input
const botao = document.getElementById("add") // button
const lista = document.getElementById("lista") // ul

botao.addEventListener("click", () => {
    const valor = input.value; // pega o valor digitado na caixinha (input)

    const li = document.createElement("li");
    li.innerText = valor; //li recebe o texto digitado na caixa

    lista.appendChild(li); // li vai ser criado dentro do <ul>(no html)

    input.value = ""; // Apos digitar e mandar o valor a caixa fica vazia (testa rodar com e sem ele q fica mais facil de entender)
})
