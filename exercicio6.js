function fibTerm(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return fibTerm(n - 1) + fibTerm(n - 2);
}
  

function fibonacci(n) {
        const seq = [];
        for (let i = 0; i < n; i++) {
        seq.push(fibTerm(i));
        }
        return seq;
}
  
const input = prompt("Digite um número inteiro positivo:");
const n = parseInt(input, 10);
  
if (isNaN(n) || n <= 0) {
        console.log("Valor inválido! Por favor, forneça um inteiro positivo.");
} else {
        const resultado = fibonacci(n);
        console.log(`Os ${n} primeiros termos da sequência de Fibonacci são:`);
        console.log(resultado.join(" "));
}
  