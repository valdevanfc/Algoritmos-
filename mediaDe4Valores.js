var n1 = 7;
var n2 = 9;
var n3 = 9;
var n4 = 9;

var media = (n1+n2+n3+n4)/4;

console.log("");
console.log(`n1 = ${n1}`);
console.log(`n2 = ${n2}`);
console.log(`n3 = ${n3}`);
console.log(`n4 = ${n4}`);
console.log("");

if (media <= 3) {
    console.log(`Aluno possui média ${media}, está REPROVADO!`);
    console.log("");
} else {
    if (media <= 7) {
        console.log(`Aluno possui média ${media}, está de RECUPERAÇÃO!`);
        console.log("");
    } else {
        console.log(`Aluno possui média ${media}, PASSOU!`);
        console.log("");
    }
}
