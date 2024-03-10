const prompt = require("prompt-sync")()


/* Elaborar um programa que leia três lados e verifique se eles podem ou não formar
um triângulo.*/

let lados = []

console.log("Me dê o valor de três lados de um triângulo")

for (let i = 0; i < 3; i++){
    lados.push(+prompt("Me dê o valor de um lado: "))
}



if ((lados[0] + lados[1]) < lados[2]){
    console.log("Não é um triângulo!")
}
else if ((lados[0] + lados[2]) < lados[1]){
    console.log("Não é um triângulo!")
}
else if ((lados[1] + lados[2]) < lados[0]){
    console.log("Não é um triângulo!")
}
else{
    console.log("Lados podem formar um triângulo")

    if (lados[0] == lados[1] && lados[0] == lados[2]){
        console.log("Equilátero")
    }
    else if (lados[0] == lados[1] || lados[0] == lados[2]){
        console.log("Isósceles")
    }
    else{
        console.log("Escaleno")
    }
}

