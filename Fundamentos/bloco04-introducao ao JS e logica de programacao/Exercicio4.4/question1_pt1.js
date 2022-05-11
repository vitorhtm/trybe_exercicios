let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info["recorrente"] = "Sim";

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

if (info.recorrente === "Sim") {
  info.recorrente = "Ambos";
}

if (info2.recorrente === "Sim") {
  info2.recorrente = "recorrentes";
}

for (let key in info && info2) {
  console.log(info[key] + " " + info2[key]);
}
