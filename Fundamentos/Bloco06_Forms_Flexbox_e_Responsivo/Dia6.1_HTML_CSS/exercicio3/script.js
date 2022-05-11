const botaoEnviar = document.querySelector(".botao-submit");
const checkedImg = document.querySelector("#permisao-img");
const divFile = document.querySelector("#file");
const para = document.createElement("p");

botaoEnviar.addEventListener("click", function (event) {
  event.preventDefault();
});

para.innerText = "Adicione sua foto";
divFile.style.display = "none";
const file = document.createElement("input");
file.type = "file";
file.id = "arquivo";

divFile.appendChild(para);
divFile.appendChild(file);

checkedImg.addEventListener("change", function (event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    divFile.style.display = "block";
  } else {
    divFile.style.display = "none";
  }
});
