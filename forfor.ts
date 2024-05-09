console.clear();
const teclado = require (`prompt-sync`) ();
let z = 1;
let arrayTodos: number [] = new Array (10);

for (let x = 1; x <= 10; x++){
    arrayTodos[x] = parseInt(teclado(`Digite os números: `));
    z++;
}

for (let y = 1; y <= 10; y++){
    console.log(`|O contandor está em |${arrayTodos[y]}|`);
} 