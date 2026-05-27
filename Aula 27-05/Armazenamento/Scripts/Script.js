const inputTarefas = document.getElementById("input-tarefas");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// Criando uma lista vazia
let tarefas = [];


// Função para salvar tarefas no local storage
function salvarTarefas() {

    /* 
    localStoroge -> Armazenamento local do navegador
    setItem -> Salva no armazenamento o conteudo recebido
    JSON.stringify(tarefas) -> Pega a liata de tarefas, converte para texto(string) e armazena esse texto
    */

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Função de mostrar tarefas na tela
function mostrarTarefas() {
    listaTarefas.innerHTML = ""; // Limpa a lista de trefas na tela

    for(let i = 0; i < tarefas.length; i++) {
    
        // Para cada elemento, cria um li
        const li = document.createElement("li");
        // Cada vez que criar um li, passa o valor que está na lista de tarefas na posição i
        li.innerText = tarefas[i];
        
    }
}























