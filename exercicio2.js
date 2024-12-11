function fatorial(numero) {
    if (numero == 0)
        return 1;
    else
        return numero * fatorial(numero - 1);
}

function main() {
    let num;
    do {
        num = parseInt(prompt("Digite um número inteiro positivo: "));
    } while (num <= 0);

    let numFatorial = fatorial(num);
    console.log(`O fatorial de ${num}! = ${numFatorial}`);

    let calcularFatorial = prompt("Deseja calcular o fatorial de outro número?(S/N): ");
    return calcularFatorial;
}

let calcularFatorial = main();

if (calcularFatorial.toLowerCase() == "n") {
    console.log("Ok, fechando o programa...");
} else if (calcularFatorial.toLowerCase() == "s") {
    main();
} else {
    console.log("Opção inválida. Programa encerrado.");
}


    

