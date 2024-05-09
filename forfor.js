console.clear();
var teclado = require("prompt-sync")();
var z = 1;
var arrayTodos = new Array(10);
for (var x = 1; x <= 10; x++) {
    arrayTodos[x] = parseInt(teclado("Digite os n\u00FAmeros: "));
    z++;
}
for (var y = 1; y <= 10; y++) {
    console.log("|O contandor est\u00E1 em |".concat(arrayTodos[y], "|"));
}
