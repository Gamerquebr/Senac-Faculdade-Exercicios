const prompt = require("prompt-sync")()

/*4. Heloísa e suas amigas se reúnem no sábado para jogar cartas. Sabendo que o jogo pode ir até
tarde da noite ou terminar no domingo (mas, nunca durar mais que 24 horas), elabore um
programa que leia a hora inicial e final do jogo (somente horas inteiras). Informe a duração do
jogo.*/

const hora_i = Number(prompt("Hora inicial: "))
const hora_f = Number(prompt("Hora Final: "))


let hora_t = 0

if (hora_i > hora_f){
    hora_t = 24 - hora_i + hora_f
} 
else{
    hora_t = hora_f - hora_i
}


if(hora_i > 24 || hora_f > 24){
   console.log("O jogo não dura mais que 24 horas!") 
}
else if (hora_t > 24){
    console.log("O jogo não dura mais que 24 hora!")
}
else{
    console.log(`Duração do jogo: ${hora_t} horas(s)`)
}


