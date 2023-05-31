let resposta = prompt("deseja mais coxinha?")
let conta = 0 //precisa ficar fora do laço para que não zere a conta


while (resposta.toLowerCase() === "sim" || resposta.toUpperCase() ==="S") {
    conta += 2.5

    console.log("sua conta é de "+conta);
    // conta = conta + 2.5

    resposta = prompt("deseja mais coxinha?")
}

console.log("valor total da conta: "+conta);






//PASSANDO PARA FUNÇÃO

function querCoxinha (respostaUsuario){
    let conta = 0
    while (resposta.toLowerCase() === "sim" || resposta.toUpperCase() ==="S") {
        // conta += 2.5
        conta = conta + 2.5
    
        resposta = prompt("deseja mais coxinha?")
    }
    
    console.log(conta);
}


querCoxinha(resposta)



console.log("teste");