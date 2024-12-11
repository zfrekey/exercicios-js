let a = parseInt(prompt('Digite o coeficiente de a:'));
let b = parseInt(prompt('Digite o coeficiente de b:'));
let c = parseInt(prompt('Digite o coeficiente de c:'));

let delta = b**2 - (4*a*c);

if (delta < 0) {
    console.log('Não existem raízes reais');
} else if (delta > 0) {
    let raizPositiva = (-b + Math.sqrt(delta)) / (2*a);
    let raizNegativa = (-b - Math.sqrt(delta)) / (2*a);
    console.log(`x1 = ${raizPositiva} || x2 = ${raizNegativa}`);
} else {
    let raiz = (-b + Math.sqrt(delta)) / (2*a);
    console.log(`A única raiz é: ${raiz}`);
}







