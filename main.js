let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let openImg1 = document.querySelector(".img1")
let btnReset = document.querySelector("button")

/*functions*/
function toggleScrenn(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

/*events*/
openImg1.addEventListener("click", toggleScrenn)
btnReset.addEventListener("click", toggleScrenn)


