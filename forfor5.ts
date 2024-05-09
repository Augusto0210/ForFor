const teclado = require(`prompt-sync`)();
console.clear();

let vetor: number [] = new Array (10);
let crescente = 0

for (let x = 0; x <= 10; x++){
    vetor[x] = parseInt(teclado(`Digite os números: `));
        for (let y = 0; y <= 10; y++){
            if (vetor[x] < vetor[y]){
            crescente = vetor[x];
            vetor[x] = vetor[y];
        }
    }
}

for (let x = 0; x <= 10; x++){
    console.log(`|Em ordem crescente |${vetor[x]}|`);
}