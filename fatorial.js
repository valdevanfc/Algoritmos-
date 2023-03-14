// FATORAR VALOR 
// x! = x.(x-1)...x.1
// DEFINA X ANTES DE RODAR NO NODE.JS

var x = 5;
var result = 1;

for (i = x; i > 0; i--) {
    // console.log("i = "+i);
    result = result*i;        
}

console.log(result);
