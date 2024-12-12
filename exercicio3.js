const anoAtual = 2024;

function verificarIdades(arr) {
    const arrTemp = [];
    for (let i = 0; i < arr.length; i++) {
        const idade = anoAtual - arr[i];
        const maioridade = idade >= 18 ? 'Maior' : 'Menor';
        console.log(`Pessoa ${i+1}: ${maioridade} de idade`);
        arrTemp.push(maioridade);
    }
    return arrTemp;
}