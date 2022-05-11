function palindromo(string) {
  let d = string.split("").reverse().join("");

  if (string === d) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}
palindromo("arara"); // exercicio1

function indiceMaiorValor(numbers) {
  let MaiorValor = 0;
  let maiorIndice = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (MaiorValor < numbers[i]) {
      MaiorValor = numbers[i];
      maiorIndice = i;
    }
  }
  console.log(numbers.indexOf(MaiorValor), maiorIndice);
}

indiceMaiorValor([12211, 323, 53, 1334, 65]); // exercicio2

function indiceMenorValor(numbers) {
  let menorValor = 0;
  let menorIndice = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (menorValor > numbers[i]) {
      menorValor = numbers[i];
      menorIndice = i;
    }
  }
  console.log(menorIndice, numbers.indexOf(menorValor));
}
const numbers = [2, -4, 6, 7, 10, 0, -33];
indiceMenorValor(numbers);
console.log(
  numbers.reduce((p, c) => {
    console.log(p, c);
    return p < c ? p : c;
  }, 0)
); //exercicio3 "esse exercicio foi resolvido de 3 formas"

let palavras = ["vitor", "raul", "carmelita"];

function maiorPalavra(array) {
  let inpalavra = 0;
  let palavra = "";
  for (let i = 0; i < array.length; i += 1) {
    if (inpalavra < array[i].length) {
      inpalavra = array[i].length;
      palavra = array[i];
    }
  }
  console.log(palavra);
}
maiorPalavra(palavras); // exercicio4
