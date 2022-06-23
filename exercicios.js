// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.

// let soma = 0;

//  for (index = 35; index <= 105; index +=1){
//     soma += index;
//  }
//  console.log("Soma de 35 a 105 = ", soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.

// let soma = 0;
// for (let index = 15; index <= 155; index += 1) {
//   if (index % 3 === 0) {
//     soma += 1;
//   }
// }
// console.log(soma);
// if (soma >= 50) {
//   console.log("secret Message!");
// }

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

// let jogador1 = "pedra";
// let jogador2 = "papel";

// if (jogador1 === "papel" && jogador2 === "pedra") {
//   console.log("Jogador 1 venceu");
// }
// else if (jogador1 === "pedra" && jogador2 === "tesoura") {
//   console.log("Jogador 1 venceu");
// }
// else if (jogador1 === "tesoura" && jogador2 === "papel") {
//   console.log("Jogador 1 venceu");
// }
// else if (jogador1 === jogador2) {
//   console.log("Empate");
// }
// else {
//     console.log("Jogador 2 venceu");
// }

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.

// let pessoa = 18;

// if ( pessoa >= 18){
//     console.log("A pessoa é maior de idade")
// } else {
//     console.log("A pessoa é menor de idade");
// }

// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

let ademar = 45;
let adriana = 45;
let julia = 25;

if (ademar < adriana && ademar < julia){
    console.log("Ademar é o mais novo");
}
else if ( adriana < ademar && adriana < julia){
    console.log("Adriana é a mais nova");
}
else {
    console.log("Julia é a mais nova");
}