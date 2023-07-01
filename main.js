let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let openImg1 = document.querySelector(".img1")
let btnReset = document.querySelector("button")
let text = document.querySelector(".text")

/*functions*/
function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  randomMessage()
  
}

/*events*/
openImg1.addEventListener("click", toggleScreen)
btnReset.addEventListener("click", toggleScreen)

let message = [
  "A vida é um espelho: se você sorri para ela, ela sorri para você.",
      "Acredite em milagres, mas não dependa deles.",
      "O segredo para ficar à frente é começar.",
      "Aprenda com os erros dos outros. Você não consegue viver tempo suficiente para cometer todos eles.",
      "Um bom relacionamento é como a dança de um casal. Comece com um movimento em falso e siga com um ritmo constante.",
      "Seu sorriso será seu escudo contra os problemas.",
      "O conhecimento é o melhor investimento que você pode fazer.",
      "A sorte favorece a mente preparada.",
      "Nenhum inverno dura para sempre; nenhum verão se perde para sempre. Tudo o que você realmente possui é o dia de hoje.",
      "Uma jornada de mil milhas começa com um único passo."
    ];

function getSentence(){
  let randomLuck = Math.floor(Math.random() * message.length)
  return message[randomLuck]
}

function  randomMessage (){
  let randomMessage = getSentence()
  text.innerText = randomMessage
}





