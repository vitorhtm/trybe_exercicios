const valorCusto = 10;
const valorVenda = 15;
let quantidade = 1000;

let totalvenda = valorVenda * quantidade;
let totalCusto = valorCusto * quantidade;

let incidencia = totalCusto * 0.2;
let valorcustotal = valorCusto + incidencia;
let lucro = totalvenda - valorcustotal;
console.log(lucro);
