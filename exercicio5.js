let numero = parseInt(prompt('Digite um número inteiro: '));

if(numero % 3 == 0){
    console.log('fizz');
} else if (numero % 5 == 0){
    console.log('buzz');
} else if(numero % 15 == 0){
    console.log('fizzbuzz');
} 