addEventListener("scroll", () => {navPC(); navCEL();}) 

function navPC() {
  const barra = document.getElementById("heroPC").classList
  const logo = document.getElementById("heroPC__logo")
  const botao = document.getElementById("heroPC__botao").classList

  if (window.scrollY > 0){
    barra.add("navdefault")
    botao.add("border-[#F7F9F9]")
    logo.src = "../img/logo2.svg"
  }
  else{
    barra.remove("navdefault")
    botao.remove("border-[#F7F9F9]")
    logo.src = "../img/logo1.svg"
  }
}
function navCEL() {
  const barra = document.getElementById("heroCEL").classList
  const logo = document.getElementById("heroCEL__logo")
  const hamburguer = document.getElementById("heroCEL__hamburguer")

  if (window.scrollY > 0){
    barra.add("navdefault")
    hamburguer.src = "../img/hamburger1.png"
    logo.src = "../img/logo2.svg"
  }
  else{
    barra.remove("navdefault")
    hamburguer.src = "../img/hamburger2.png"
    logo.src = "../img/logo1.svg"
  }
}

function abrirMenu(){
    const menu = document.getElementById("heroMENU").classList
    if (menu.contains("hidden")){
        
        menu.replace("hidden", "flex")
    }
    else{
        menu.replace("flex", "hidden")
    }
}
