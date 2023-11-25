function contraste() {
  // Seleciona o elemento do cabeçalho
  var header = document.getElementById("header");

  // Seleciona o ícone
  var icone = document.querySelector("#botao_contraste i");

  // Seleciona o elemento do corpo
  var corCorpo = document.getElementById("corpo");

  // Verifica a cor atual do cabeçalho
  var corAtual = window.getComputedStyle(header, null).getPropertyValue("background-color");

  // Verifica a cor atual do corpo
  var corCorpoAtual = window.getComputedStyle(corCorpo, null).getPropertyValue("background-color");

  // Muda a cor do corpo com base na cor atual
  if (corCorpoAtual.toLowerCase() === "rgb(255, 255, 255)") {
    corCorpo.style.backgroundColor = "gray";
  } else {
    corCorpo.style.backgroundColor = "white";
  }

  // Muda a cor do cabeçalho com base na cor atual
  if (corAtual.toLowerCase() === "rgb(255, 255, 255)") {
    header.style.backgroundColor = "gray";
    icone.classList.remove("fa-solid", "fa-moon");
    icone.classList.add("fa-solid", "fa-sun"); // Substitua pela classe do ícone para o modo claro
  } else {
    header.style.backgroundColor = "white";
    icone.classList.remove("fa-solid", "fa-sun");
    icone.classList.add("fa-solid", "fa-moon");
  }
}


