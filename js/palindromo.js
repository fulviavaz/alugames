
//function declaration

palindromo();

function palindromo() {
  let palavra = "rever";
  let separandoAsLetras = palavra.split("");
  let palavraInvertida = separandoAsLetras.reverse();
  palavraInvertida = palavraInvertida.join("");

  if (palavra == palavraInvertida) {
    console.log("A palavra" + palavra + "é um palíndromo!");
  } else {
    console.log("A palavra" + palavra + " não é um palíndromo!");
  }
}

//function expression

const palindromo = function(palavra) {  
  let separandoAsLetras = palavra.split("");
  let palavraInvertida = separandoAsLetras.reverse();
  palavraInvertida = palavraInvertida.join("");

  if (palavra == palavraInvertida) {
    console.log("A palavra" + palavra + "é um palíndromo!");
  } else {
    console.log("A palavra" + palavra + " não é um palíndromo!");
  }
}

palindromo("radar");

//function expression não aceita o hoisting (ela ser chamada antes de sua declaração)