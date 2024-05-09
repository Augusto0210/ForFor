var teclado = require("prompt-sync")();
console.clear();
var entrada = new Array(10);
for (var i = 0; i < 10; i++) {
    entrada[i] = parseInt(teclado("Digite um n\u00FAmero: "));
}
var saida = new Array(10);
for (var i = 0; i < 10; i++) {
    saida[i] = entrada[9 - i];
}
for (var i = 0; i < 10; i++) {
    console.log("Posi\u00E7\u00E3o ".concat(i, ": ").concat(saida[i]));
}
