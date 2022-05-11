function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

var feriados = [];
function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const listaDays = document.getElementById("days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const dayNumbers = dezDaysList[i];
    const itemDay = document.createElement("li");
    itemDay.innerHTML = dayNumbers;
    itemDay.className = "day";
    listaDays.appendChild(itemDay);

    const dayOfHoliday = [24, 25, 31];
    if (dayOfHoliday.includes(dayNumbers)) {
      itemDay.classList.add("holiday");
      feriados.push(itemDay.innerHTML);
    }
    const fridays = [4, 11, 18, 25];
    if (fridays.includes(dayNumbers)) {
      itemDay.classList.add("friday");
    }
  }
}
createDays();

function diasFeriados(feriados) {
  const botao = document.createElement("button");
  botao.id = "btn-holiday";
  botao.innerHTML = "Feriados";

  botao.addEventListener("click", function () {
    for (let i = 0; i < feriados.length; i += 1) {
      feriados[i].style.color = "red";
    }
  });

  const botaoContainer = document.querySelector(".buttons-container");
  botaoContainer.appendChild(botao);
}

let itemDay1 = document.querySelectorAll(".holiday");
diasFeriados(itemDay1);
