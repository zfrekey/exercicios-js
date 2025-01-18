/*Implemente uma função chamada encontrarElementoUnico que recebe
um array de números inteiros onde cada elemento aparece exatamente
duas vezes, exceto por um elemento que aparece exatamente uma vez.
A função deve retornar o elemento que aparece apenas uma vez. Tal
elemento deve ser impresso na tela. */

function encontrarElementoUnico(numeros) {
    let resultado = 0;
    for (const num of numeros) {
      resultado ^= num; 
    }
    return resultado;
  }
  
  
  const array = [2, 3, 2, 4, 4];
  const unico = encontrarElementoUnico(array);
  console.log("Elemento único:", unico); 

  