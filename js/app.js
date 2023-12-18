function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);//pegar o elemento li pelo id
    let imagem = gameClicado.querySelector('.dashboard__item__img');//pegar o elemento img dentro do li
    let botao = gameClicado.querySelector('.dashboard__item__button');//pegar a tag a dentro do li
    // let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    // alert(nomeJogo.textContent)

    if (imagem.classList.contains('dashboard__item__img--rented')) { //verifica se a div contém a classe de alugado na imagem
        imagem.classList.remove //se ela tem, remova a classe da imagem (opaca)
        botao.classList.remove('dashboard__item__button--return') // remove a classe do botão
        botao.textContent = 'Alugar'; //alterar o texto do botão 
    } else {
      imagem.classList.add('dashboard__item__img--rented'); // se ela não tem, adicionar a classe na imagem
      botao.classList.add('dashboard__item__button--return'); // adiciona a classe no botão
      botao.textContent = 'Devolver'; //alterar o texto do botão
    }
}