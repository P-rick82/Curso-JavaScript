let num = 0;

const contador = document.getElementById("contador");
const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
    numero++;
    contador.innerText = num;
})