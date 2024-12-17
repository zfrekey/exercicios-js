function palindromo(fraseParaVerificar){
        let verificacaoPalindromo = [];
        let verificadorPalindromo = 0;
        const tamanhoDaFrase = fraseParaVerificar.length - 1;

        for(let i=tamanhoDaFrase; i>=0; i--){
            verificacaoPalindromo.push(fraseParaVerificar[i]);
        }

        for(let i = 0; i<=tamanhoDaFrase; i++){
            if (verificacaoPalindromo[tamanhoDaFrase-i] === fraseParaVerificar[i])
                verificadorPalindromo++;
        }

        if (verificadorPalindromo !== (tamanhoDaFrase+1))
            return false;

        return true;
}

let frase = prompt('Digite uma frase para realizar a verificação: ');
frase = frase.toLowerCase().replace(/\s+/g, '').split('');
let verificarFrase = palindromo(frase);
console.log(verificarFrase ? 'Palindromo': 'Não é Palindromo');

