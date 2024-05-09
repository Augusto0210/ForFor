const teclado = require(`prompt-sync`)();
console.clear();

let entrada: number[] = new Array(10);

for (let i = 0; i < 10; i++) {
    entrada[i] = parseInt(teclado(`Digite um número: `));
}

let saida: number[] = new Array(10);

for (let i = 0; i < 10; i++) {
    saida[i] = entrada[9 - i];
}

for (let i = 0; i < 10; i++) {
    console.log(`Posição ${i}: ${saida[i]}`);
}