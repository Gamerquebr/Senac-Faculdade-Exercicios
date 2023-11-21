addEventListener("scroll", () => {
  const barra = document.getElementById("hero").classList
  const logo = document.getElementById("hero__logo")
  const botao = document.getElementById("hero__botao").classList

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
}) 
