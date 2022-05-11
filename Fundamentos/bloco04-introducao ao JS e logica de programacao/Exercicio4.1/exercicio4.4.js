// testando o operador logico &&
const currentHour = 19;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour > 11 && currentHour < 14) {
  message = "Hora do rango";
} else if (currentHour >= 4 && currentHour <= 11) {
  message = "Hmmm, cheiro de café recém passado";
}
// console.log(message);

// testando o operador logico || = or

let weekDay = "quarta-feira";

if (
  weekDay == "segunda-feira" ||
  "Terca-feira" ||
  "Quarta-feira" ||
  "Quinta-feira" ||
  "sexta-feira"
) {
  //console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  // console.log("FINALMENTE, descanso merecido UwU");
}

// testando o operador logico ! = not
