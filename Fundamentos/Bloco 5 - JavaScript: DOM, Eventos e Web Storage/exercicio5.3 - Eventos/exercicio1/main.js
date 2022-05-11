const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.addEventListener("click", addTech);
secondLi.addEventListener("click", addTech);
thirdLi.addEventListener("click", addTech);

function addTech(evento) {
  let elemento = evento.target;
  if (elemento.className == "tech") {
    elemento.className = "";
    return;
  }
  firstLi.className = "";
  secondLi.className = "";
  thirdLi.className = "";

  elemento.className = "tech";
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener("keyup", altereTexto);

function altereTexto() {
  if (firstLi.className == "tech") {
    firstLi.innerText = input.value;
  } else if (secondLi.className == "tech") {
    secondLi.innerText = input.value;
  } else if (thirdLi.className == "tech") {
    thirdLi.innerText = input.value;
  }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener("dblclick", dubleClick);

function dubleClick() {
  open("https:developer.mozilla.org/en-US/docs/Web/API/Window/open");
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

myWebpage.addEventListener("mouseover", colorTextRed);
myWebpage.addEventListener("mouseout", colorTextWhite);
myWebpage.addEventListener("mouseover", resetText);
myWebpage.addEventListener("mouseout", resetTextOrigin);

function colorTextRed(event) {
  event.target.style.color = "red";
}

function colorTextWhite(event) {
  event.target.style.color = "white";
}

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

function resetTextOrigin(event) {
  event.target.innerText = "Meu top 3 do Spotrybefy";
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
