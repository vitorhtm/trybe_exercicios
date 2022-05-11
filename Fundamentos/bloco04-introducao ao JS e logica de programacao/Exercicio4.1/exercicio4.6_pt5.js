let salarioBruto = 3000;

let salarioDescontoInss = salarioBruto - (salarioBruto * 11) / 100;

let salariodescontoIr = (salarioDescontoInss * 7.5) / 100 - 142.8;

let salarioliquido = salarioDescontoInss - salariodescontoIr;
console.log(salarioliquido);
