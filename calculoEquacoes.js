// Equação do 2° grau  ->  ax² + bx + c = d   OU   ->  ax² + c = d;
// Equação de 1° grau  ->  bx + c = 0;
// RAIZ DA FUNÇÃO 2° GRAU x = (-b+-√(Δ)/2.a;
// CALCULO DE BHASKARA
// Δ = b^2-4.a.c;   
// CASO Δ SEJA NEGATIVO O ALGORITMO IRÁ PARAR.
// DEFINA OS VALORES DE 'a', 'b', 'c' e 'd'.

var a = 0;
var b = 5;
var c = 7;
var d = 4;

console.log("");
console.log(`     Função em questão: ${a}x² + ${b}x + ${c} = ${d}.`);

//!!!!!!!!!!!!LAÇO PARA EQUAÇÃO DE 1° GRAU!!!!!!!!!!!!!!!
if (a === 0) {
    const resto = ((c*-1)+d);
    const raiz = (resto/b);
    console.log("");
    console.log("     ***CALCULO DE RAÍZ DA FUNÇÃO DE 1° GRAU***");
    console.log("");
    console.log(`     Para a função: b = ${b}, c = ${c}, d = ${d}`);
    console.log("");
    console.log(`     x = ${b}x + ${c} = ${d}`);
    console.log("");
    console.log(`     x = ${b}x = ${resto}`);
    console.log("");
    console.log(`     x = ${raiz}`);
    console.log("");
} else {
    //!!!!!!!!!!!!DELTA NEGATIVO NÃO TEM SOLUÇÃO!!!!!!!!!!!!!!!
    const resto = (d*-1)+c;
    const delta = (b*b)-4*a*resto;
    //!!!!!!!!!!!!LAÇO PARA EQUAÇÃO DE 2° GRAU!!!!!!!!!!!!!!!
    if (delta > 0) {
        const raizPositiva = ((-b+(Math.sqrt(delta)))/(2*a)).toFixed(2);
        const raizNegativa = ((-b-(Math.sqrt(delta)))/(2*a)).toFixed(2);
        console.log("");
        console.log("     ***CALCULO DE RAÍZ DA FUNÇÃO DE 2° GRAU***");
        console.log("");
        console.log(`     Para a função: a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
        console.log("");
        console.log(`     Valor de Δ = (${b})²-4.${a}.${resto} = ${delta}.`);
        console.log("");
        console.log("     Para raíz positiva.");
        console.log("");
        console.log(`     + x = (-(${b})+√(${delta}))/2.${a} = ${raizPositiva}`);
        console.log(`     + x = ${raizPositiva}`);
        console.log("");
        console.log("     Para raíz negativa.");
        console.log("");
        console.log(`     - x = (-(${b})-√(${delta}))/2.${a} = ${raizNegativa}`);
        console.log(`     - x = ${raizNegativa}`);
        console.log("");
    } else {
        //!!!!!!!!!!!!DELTA NEGATIVO NÃO TEM SOLUÇÃO!!!!!!!!!!!!!!!
        console.log("");
        console.log(`     VALOR DE Δ É NEGATIVO (${delta}), PORTANTO NÃO CONSIDERAMOS CONTINUAR.`);
        console.log("");
    }
}

// function raizDaFuncaoPrimeiroGrau() {
//     const resto = ((c*-1)+d)
//     const raiz = (resto/b);
//     console.log("")
//     console.log("     ***CALCULO DE RAÍZ DA FUNÇÃO DE 1° GRAU***")
//     console.log("")
//     console.log(`     Para a função: b = ${b}, c = ${c}, d = ${d}`)
//     console.log("")   
//     console.log(`     x = ${b}x + ${c} = ${d}`)
//     console.log("")
//     console.log(`     x = ${b}x = ${resto}`)
//     console.log("")
//     console.log(`     x = ${raiz}`)
//     console.log("")
// }
// raizDaFuncaoPrimeiroGrau();

// function raizDaFuncaoSegundoGrau() {
//     const resto = (d*-1)+c;
//     const delta = (b*b)-4*a*resto;
//     const raizPositiva = ((-b+(Math.sqrt(delta)))/(2*a)).toFixed(2);
//     const raizNegativa = ((-b-(Math.sqrt(delta)))/(2*a)).toFixed(2);
//     console.log("")
//     console.log("     ***CALCULO DE RAÍZ DA FUNÇÃO DE 2° GRAU***")
//     console.log("")
//     console.log(`     Para a função: a = ${a}, b = ${b}, c = ${c}, d = ${d}`)
//     console.log("")
//     console.log(`     Valor de Δ = (${b})²-4.${a}.${resto} = ${delta}.`)
//     console.log("")
//     console.log("     Para raíz positiva.")
//     console.log("")
//     console.log(`     + x = (-(${b})+√(${delta}))/2.${a} = ${raizPositiva}`)
//     console.log(`     + x = ${raizPositiva}`)
//     console.log("")
//     console.log("     Para raíz negativa.")
//     console.log("")
//     console.log(`     - x = (-(${b})-√(${delta}))/2.${a} = ${raizNegativa}`)
//     console.log(`     - x = ${raizNegativa}`)
//     console.log("")
// }
// raizDaFuncaoSegundoGrau();
