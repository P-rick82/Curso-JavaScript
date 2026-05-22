// Exercicos

// 1) Jogo de adivinhação:
// Gere um número aleatório de 1 a 100.
// Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
// Informe se o número inserido é maior ou menor que o correto.

// // Random -> gera numeros aleatorios entre 0 e 1
// // Math.floor -> Remove casas decimais, para ter numeros inteiros
// let NumeroSecreto = Math.floor(Math.random() * 100) + 1;
// let tentativa;

// while (tentativa !== NumeroSecreto)
// {
//     tentativa = Number(prompt("Digite um número entre 1 e 100: "));

//     if(tentativa > NumeroSecreto)
//     {
//         alert("O número é maior!")
//     }
//     else if(tentativa < NumeroSecreto)
//     {
//         alert("O número é menor!")
//     }
//     else
//     {
//         alert("Acertou!!!")
//     }
// }

// 2) Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um while.

// let numero = Number(prompt("Digite um número"));

// while(numero >= 0)
// {
//     console.log(numero);
//     numero--; // É o mesmo que dizer que: numero = numero - 1
// }

// 3) Validação de senha:
// Crie uma senha fixa (ex: "1234")
// Peça ao usuário até ele acertar
// Use `while`

// let senha = "1234";
// let SenhaDigitada = "";

// while(SenhaDigitada !== senha)
// {
//     SenhaDigitada = prompt("Digite a senha: ");

//     if(SenhaDigitada !== senha)
//     {
//         alert("Senha incorreta, tente novamente!");
//     }
// }

// alert("Senha correta, acesso permitido!");

// 4) Soma até parar:
// Peça números ao usuário
// Continue somando até ele digitar 0
// Mostre o total no final

// let Soma = 0;

// let valor = Number(prompt("Digite um número ou 0 para parar: "));

// alert("Você digitou: " + valor);

// while (valor !== 0)
// {
//     Soma += valor; // É o mesmo que: soma = soma + valor
//     valor = Number(prompt("Digite um número ou 0 para parar: "))
//     alert("Você digitou: " + valor);
// }

// alert("Total da Soma: " + Soma);

// 5) Média de valores:
// Peça 3 números ao usuário
// Calcule e mostre a média usando repetição

// let SomaValores = 0;

// for (let i = 1; i <= 3; i++)
// {
//     let valor = Number(prompt(`Digite o ${i}º número: `));

//     SomaValores += valor;
// }

// let media = SomaValores / 3;
// console.log(`À média é: ${media}`);

// 6) Soma dos dígitos de um número:
// Peça ao usuário um número inteiro positivo.
// Use um `while` para somar seus dígitos.

// let n = Number(prompt("Digite um número"))

// if(isNaN(n) || isNaN(n2))
// {
//     alert("Você deve digitar os números, não deve escrever (Ex: 5, 6 , 7). Tente novamente!")
// }
// else if (n.isInteger(n) || n2.isInteger(n2))
// {
//     alert("Os números precisa ser inteiro portanto, sem casas decimais (Ex: 20). Tente novamente!")
// }
// else
// {

// }