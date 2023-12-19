let listaALugados = [];

function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");
  let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    imagem.classList.remove("dashboard__item__img--rented");
    botao.classList.remove("dashboard__item__button--return");
    botao.textContent = "Alugar";
    listaALugados = listaALugados.filter(item => item !== id); // Remova o jogo da lista ao devolver.
    // console.log("foram alugados: ", listaALugados.length);
    alert("O jogo foi devolvido com sucesso!");
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
    listaALugados.push(id); // Adicione o jogo à lista ao alugar.
    console.log("foram alugados: ", listaALugados.length);
  
  }
}
