// Estruturas Condicionais

// Temos condições e decidimos os caminhos que vamos seguir na estrutura condicional

/*
if  -> Se(Ex: Se chover......)
else -> Se não(Ex: Se não chover......)
else if -> Se não Se
Switch/Case -> Switch (funciona como um menu de opções, onde cada case é uma opção)
*/

// Exemplos:

// // 1) Sistema de verificação da temperatura

// // Tudo oq é digitado atraves do prompt é recebido como tipo texto. Portanto vamos converter para Number(numero) para garantir que a 
// // validação não tenha problema
// let temp = Number(prompt("Digite uma temperatura: "));

// if(temp < 20)
// {
//     console.log("Está Frio!");
// }
// else
// {
//     console.log("Está Calor!");
// }

// // 2) Verificar o nível de bateria
// let bat = Number(prompt("Digite o nível atual da bateria (%): "));

// if(bat <= 30)
// {
//     console.log("A bateria está fraca!")
// }
// else
// {
//     console.log("A bateria está Carregada!")
// }

// // 3) Sistema de acesso 

// // toLowerCase -> O usuario so consegue digitar as letras em minusculo
// // toUpperCase -> O usuario so consegue digitar as letras em maiusculo

// let TpUs = prompt("Digite o tipo de usuario: (admin, cliente): ").toLowerCase();

// if(TpUs == "admin")
// {
//     console.log("Acesso total ao Sistena.");
// }
// else if (TpUs == "cliente")
// {
//     console.log("Acesso limitado ao Sistena.");
// }
// else
// {
//     console.log("Acesso Invalido.");
// }

// // 4) Classificar a qualidade da internet
// let v = Number(prompt("Digite a velocidade da internet"));

// if(v >= 100)
// {
//     console.log("Internet é rápida");
// }
// else if(v >= 50)
// {
//     console.log("Internet é média");
// }
// else
// {
//     console.log("Internet lenta");
// }

// // 5) Analizar volume de itens usando operadores logicos
// let quantidade = 10;

// if(quantidade === 0)
// {
//     console.log("Nenhum item selecionado");
// }
// else if(quantidade < 5)
// {
//     console.log("Poucos itens");
// }
// else if(quantidade >= 0 && quantidade < 10)
// {
//     console.log("Quantidade média de itens");
// }
// else
// {
//     console.log("Muitos itens");
// }

// // 6) Condicional Aninhada
// // Condicional Aninhada -> Quando há uma condicional dentro da outra

// const nota = 5;

// if(nota >= 7)
// {
//     if(nota === 10)
//     {
//         console.log("Aprovado com premiação!");
//     }
//     else
//     {
//         console.log("Aprovado!");
//     }
// }
// else
// {
//     console.log("Reprovado!");
// }

// // 7) Adaptação de tela de dispositivo
// let disp = prompt("Qual dispositivo vc está utilizando? (Ex: Celular, Tablet, etc): ").toLowerCase;

// if(disp == "celular" || disp == "tablet")
// {
//     console.log("Modo Mobile Ativado!");
// }
// else if (disp == "computador")
// {
//     console.log("Modo desktop Ativado!");
// }
// else
// {
//     console.log("Dispositivo Desconhecido!");
// }

// // 8) Switch Case
// let tema = prompt("Digite um tema: Claro, Escuro, Roxo ou digite Sair").toLowerCase();

// switch(tema)
// {
//     case "claro":
//         console.log("Tema Claro ativado!");
//         document.body.style.backgroundColor = "#ffffffff";
//         break;
//     case "escuro":
//         console.log("Tema Escuro ativado!");
//         document.body.style.backgroundColor = "#000000";
//         break;
//     case "roxo":
//         console.log("Tema Roxo ativado!");
//         document.body.style.backgroundColor = "#a067cfff";
//         break;
//     default:
//         console.log("Tema Invalido!");
//         break;
// }


