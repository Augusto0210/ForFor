console.clear();
const teclado = require (`prompt-sync`)();
let maior = 0
let vetorMaior: number [] = new Array (10);

for (let x = 1; x <= 10; x++){
    vetorMaior[x] = parseInt(teclado(`Digite os números: `));
    if (vetorMaior[x] > maior){
        maior = vetorMaior[x];
    }   
}
console.log(maior);