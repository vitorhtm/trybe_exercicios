let peca = "";

if (peca == "peao") {
  console.log("para frente");
} else if (peca.toUpperCase() == "CAVALO") {
  console.log("em L");
} else if (peca.toUpperCase() == "TORRE") {
  console.log("pra frente ou lado");
} else if (peca.toUpperCase() == "BISPO") {
  console.log("diagonal");
} else if (peca.toUpperCase() == "REI") {
  console.log("um paço para qualquer lado");
} else if (peca.toUpperCase() == "RAINHA") {
  console.log("qualquer lado");
}

// ~~~~~~~~~~~~

let nota = 80;

if (nota < 0 || nota > 100) {
  console.log("Nota invalida");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80 && nota < 90) {
  console.log("B");
} else if (nota >= 70 && nota < 80) {
  console.log("C");
} else if (nota >= 60 && nota < 70) {
  console.log("D");
} else if (nota >= 50 && nota < 60) {
  console.log("E");
} else if (nota < 50 && nota >= 0) {
  console.log("F");
}
