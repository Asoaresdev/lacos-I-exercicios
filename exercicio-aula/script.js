let resposta = Number(prompt("digite um número"))


let soma = 0

while(resposta !== 0){

    soma  = soma + resposta

    resposta = Number(prompt("Digite outro número"))
}

console.log("A soma dos números é "+soma);


//EXERCICIO 2
let resposta2 = Number(prompt("digite um número"))
for (let index = 0; index <= resposta2; index++) {
    
    console.log(index);
}


//EXERCÍCIO 3
const array = [10,20,30,40,50,60,70]

for (let index = 0; index < array.length; index++) {
    console.log(`O Elemento de índice ${index} é o ${array[index]}`);
    
}

let respostaUsuario = prompt("Qual tipo de usuario, A, B, C?").toUpperCase()

while (respostaUsuario !== "A") {
    console.log("Acesso negado");
    respostaUsuario = prompt("Qual tipo de usuario, A, B, C?").toUpperCase()
}
console.log("Boas vindas, Admin");


//===============================
//COMO NÃO EXISTE UM LAÇO, UM LOOP, ELE IMPRIME O CONSOLE E NÃO VOLTA PARA EXECUTAR O SWITCH NOVAMENTE
//==================================
// if(respostaUsuario){
// switch (respostaUsuario.toLocaleUpperCase()) {
//     case "A":
//         console.log("Boas vindas, Admin");
//         break;
//     case "B":
//         console.log("Acesso negado");
//         respostaUsuario = prompt("Qual tipo de usuario, A, B, C?")
//         break;
//     case "C":
//         console.log("Acesso negado");
//         respostaUsuario = prompt("Qual tipo de usuario, A, B, C?")
//         break;

//     default:
//         break;
// }
// }

for (let index = 1; index <= 10; ++index) {
    console.log(`2 X ${index} = ${index*2}`);
    
}


const arrayString = ["alo", "boa", "Bode"]

for (let index = 0; index < arrayString.length; index++) {
  
    console.log(arrayString[index].toUpperCase());
}