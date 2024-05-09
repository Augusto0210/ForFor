console.clear();
var teclado = require("prompt-sync")();
var maior = 0;
var vetorMaior = new Array(10);
for (var x = 1; x <= 10; x++) {
    vetorMaior[x] = parseInt(teclado("Digite os n\u00FAmeros: "));
    if (vetorMaior[x] > maior) {
        maior = vetorMaior[x];
    }
}
console.log(maior);
