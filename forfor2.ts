console.clear();
const teclado = require (`prompt-sync`)();

for(let par = 0; par <= 60; par++){
    if(par % 2 == 0){
        console.log(`Os numeros pares: ${par}`);
    }
}