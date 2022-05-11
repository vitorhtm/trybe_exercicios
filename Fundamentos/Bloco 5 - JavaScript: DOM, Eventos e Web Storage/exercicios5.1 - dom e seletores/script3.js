let tagP = document.getElementById("texto");

function mudarTexto(texto) {
  texto.innerText = "asdgjiasghnasiughngnagsghasugabio";
}
mudarTexto(tagP);

let Quadrado = document.getElementsByClassName("main-content");

document.querySelector(".main-content").style.backgroundColor =
  "rgb(76,164,109)";
document.querySelector(".center-content").style.backgroundColor = "white";
document.getElementsByClassName("title")[0].innerText =
  "Exercicio 5.1 - JavaScript";

let listaPalavras = document.getElementsByTagName("p");

function upperText(listaP) {
  for (let i = 0; i < listaP.length; i += 1) {
    let msn = listaP[i].innerText;
    listaP[i].innerText = msn.toUpperCase();
  }
}

upperText(listaPalavras);

function exibirTexto(ltPalavras) {
  for (let i = 0; i < ltPalavras.length; i += 1) {
    console.log(ltPalavras[i].innerText);
  }
}

exibirTexto(listaPalavras);
