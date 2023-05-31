let numero = Number(prompt("Digite um número"))
let i = 1

console.log("==========while==========");

while(i <= 10){
    console.log(numero * i);

   i++
}


console.log("==========com o for==========");

for (i=1; i<=10; i++){
    console.log(i * numero);
}