// Utilizar as 4 operações em 2 variáveis pré-determinadas
// Definir 'a' e 'b' antes de iniciar no NODE.js

var a = 22;
var b = 4;

function soma() {
    const som = a + b;
    console.log(`${a} + ${b} = ${som}`);
}

function subtracao() {
    const subt = a - b;
    console.log(`${a} - ${b} = ${subt}`);
}

function multiplicacao() {
    const mult = a * b;
    console.log(`${a} x ${b} = ${mult}`);
}

function dividir() {
    const div = a / b;
    console.log(`${a} / ${b} = ${div}`);
}

soma();
subtracao();
multiplicacao();
dividir();
