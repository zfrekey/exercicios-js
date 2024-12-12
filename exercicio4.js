let realParaConverter = parseFloat(prompt('Digite um valor em real: '));

function realParaEuro (valorReal){
    const euro = 6.1;
    return valorReal/euro;
}

function realParaDolar(valorReal){
    const dolar = 5.7;
    return valorReal/dolar;
}

let euroConvertido = realParaEuro(realParaConverter);
let dolarConvertido = realParaDolar(realParaConverter);

console.log(`R$:${realParaConverter} equivale a $${dolarConvertido} ou €${euroConvertido}`);