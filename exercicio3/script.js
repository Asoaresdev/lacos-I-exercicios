const frutas = ["banana", "bananinha", "maçã", "caju", "manga"]


console.log("===========WHILE com length===========")
let indiceExemplo2 = 0
while (indiceExemplo2 < frutas.length) {
    console.log(`${indiceExemplo2 + 1} - ${frutas[indiceExemplo2]}`);

    indiceExemplo2++
}



console.log("===========com FOR===========")

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1} - ${frutas[i]}`);
}



//RECOMENDADO USAR O LENGTH PORQUE O ARRAY PODE MUDAR DURANTE IMPLEMENTAÇÃO DE CÓDIGO E USANDO NUMERO FIXO NO TAMANHO DO ARRAY, VAI CAUSAR ERRO




console.log("===========FUNÇÂO COM WHILE===========")
const  imprimeFrutas = (array) => {
    let indice = 1
    
    while (indice <= array.length) {
        console.log(`${indice} - ${array[indice - 1]}`);

        indice++
    }
}
imprimeFrutas(frutas);
