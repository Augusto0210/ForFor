console.clear();
var teclado = require("prompt-sync")();
for (var par = 0; par <= 60; par++) {
    if (par % 2 == 0) {
        console.log("Os numeros pares: ".concat(par));
    }
}
