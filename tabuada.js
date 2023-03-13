// TABUADA 
// DEFINA UM VALOR ANTES DE RODAR NO NODE.JS

var valor = 2;
var tabuada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("")
console.log(`***TABUADA DE ${valor}!!***`)
console.log("")

// LAÇO UTILIZANDO FOR
for (i = 0; i < tabuada.length; i++) {
    const result = i * valor;
    console.log(`   ${i} x ${valor} = ${result}`)
}

console.log("")
