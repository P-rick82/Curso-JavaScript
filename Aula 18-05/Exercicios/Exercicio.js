// Exercicios:

// 1) Verificar maioridade:
// Peça ao usuário uma idade.
// Use um `if-else` para verificar se ele é maior ou menor de idade.

// let Idade = Number(prompt("Digite sua idade: "));

// if(Idade >= 18)
// {
//     alert("Você é menor de idade!");
// }
// else
// {
//     alert("Você é maior de idade!");
// }

// 2) Calculadora simples:
// Peça dois números e uma operação (`+`, `-`, `*`, `/`).
// Use um `if-else` para calcular o resultado e exibi-lo.

// let cal = prompt("Digite o tipo de Conta: \n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");
// let n1 = Number(prompt("Digite o primeiro valor: "));
// let n2 = Number(prompt("Digite o segundo valor: "));

// if( cal == "1")
// {
//     alert(`O Resultado da Soma é: ${n1 + n2}`);
// }
// else if( cal == "2")
// {
//     alert(`O Resultado da Subtração é: ${n1 - n2}`);
// }
// else if( cal == "3")
// {
//     alert(`O Resultado da Multiplicação é: ${n1 * n2}`);
// }
// else if( cal == "4")
// {
//     alert(`O Resultado da Divisão é: ${n1 / n2}`);
// }
// else
// {
//     alert(`Essa opção de calculo não está disponivel`);
// }

// 3) Frete de pedido:
// Variável `valorCompra`
// = 100 → frete grátis
// = 50 → frete 10 reais
// Senão → frete 20 reais

// let ValComp = Number(prompt("Digite o valor final da compra do cliente: "))

// if(ValComp >= 100)
// {
//     console.log("O frete é de graça");
// }
// else if(ValComp >= 50)
// {
//     console.log("O frete é de R$ 10");
// }
// else
// {
//     console.log("O frete é de R$ 20");
// }

// 4) Acesso por idade e convite
// Variáveis `idade` e `temConvite`
// Se idade >= 18 OU tem convite → pode entrar
// Senão → barrado

// let PsCv = (prompt("Possui convite? (Sim ou Não): ")).toUpperCase();
// let idade = Number(prompt("Digite sua idade: "));

// if(PsCv = "Sim" && idade <= 18)
// {
//     alert("Possui convite porém, sua idade é insuficiente para entrar!")
// }
// else if (PsCv = "Sim" && idade > 18)
// {
//     alert("Possui todos os requerimentos necessarios para entrar!")
// }
// else if(PsCv = "Não" && idade >= 18)
// {
//     alert("Não possui nenhum dos requerimentos necessarios para entrar!")
// }
// else if (PsCv = "Não" && idade > 18)
// {
//     alert("Possui idade é suficiente para entrar, porém não possui o convite que é necessario para entar!")
// }
// else
// {
//     alert("Alguma das informações foi colocada incorretamente, tente novamente!")
// }

// 5) Conversão de notas para conceitos:
// O usuário insere uma nota (0-100).
// Converta para conceitos:
// `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).

// let nota = Number(prompt("Digite a nota final do aluno: "))

// if(nota < 0)
// {
//     alert("A menor nota possivel é 0")
// }
// else if(nota > 100)
// {
//     alert("A maior nota possivel é 100")
// }
// else if(isNaN(nota))
// {
//     alert("A maior nota deve ser dada em valor númerico")
// }
// else
// {
//         switch(true)
//     {
//         case (nota >= 90):
//             console.log("Aprovado com nota A!");
//             break;
//         case (nota >= 80):
//             console.log("Aprovado com nota B!");
//             break;
//         case (nota >= 70):
//             console.log("Aprovado com nota C!");
//             break;
//         case (nota >= 60):
//             console.log("Recuperação com nota D!");
//             break;
//         case (nota < 60):
//             console.log("Reprovado com nota F!");
//             break;
//         default:
//             break;
//     }

// }

// 6) Cálculo de IMC:
// Peça peso e altura.
// Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.

// let Peso = prompt("Digite seu peso (ex: 70 ou 70,5): ");
// let Altura = prompt("Digite sua altura (ex: 1.75 ou 1,75): ");
// let peso = Number(Peso.replace(",", "."));
// let altura = Number(Altura.replace(",", "."));
// let imc_Absoluto = peso / (altura ** 2);
// let imc = Number(imc_Absoluto.toFixed(2)); 

// if (isNaN(altura) || isNaN(peso))
// {
//     alert ("As informações devem ser colocadas em valor númerico, tente novamente")
// }
// else
// {
//     switch (true)
//         {
//         case (imc <= 18.4):
//         {
//             alert(`Você está abaixo do peso: ${imc} adequado`);
//             break;
//         }
//         case (imc <= 24.9):
//         {
//             alert(`Você está dentro do peso: ${imc} adequado`);
//             break;
//         }
//         case (imc <= 29.9):
//         {
//             alert(`Você está um pouco acima do peso adequado: ${imc} (sobrepeso)`);
//             break;
//         }
//         case (imc >= 30):
//         {
//             alert(`Você está acima do peso adequado: ${imc} (Obesidade)`);
//             break;
//         }
//         default:
//             break;
// }
// }