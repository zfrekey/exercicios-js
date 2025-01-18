/*Escreva um programa que receba uma lista de números inteiros e
armazene-os em um array. O programa deve verificar quantos númer
do vetor estão em ordem crescente em relação ao número anterior e
exibir essa informação.
Requisitos:

1. Solicite ao usuário a quantidade de números que ele deseja
inserir no vetor e, em seguida, peça que insira cada número.
2. Verifique cada par consecutivo de números no vetor e identif
se estão em ordem crescente (ou seja, se o próximo número é
maior que o anterior).
3. Imprima quantos números estão em ordem crescente em relação
ao número anterior.
Exemplo: [6,1,3,2,1,7]
Impressão no console: 2*/


const quantidade = parseInt(prompt("Quantos números deseja inserir?"));

const numeros = [];
for (let i = 0; i < quantidade; i++) {
  const valor = parseInt(prompt(`Digite o ${i + 1}º número:`));
  numeros.push(valor);
}

let countCrescente = 0;


for (let i = 1; i < numeros.length; i++) {
  
  if (numeros[i] > numeros[i - 1]) {
    countCrescente++;
  }
}

console.log(`Quantidade de números em ordem crescente: ${countCrescente}`);



