let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let soma = 0;

// for (let contador = 0; contador < numbers.length; contador += 1) {
//   soma += numbers[contador];
// }

// console.log(soma); // exercicio 2
// let mediaAritmetica = soma / 10; // exercicio 3
// if (mediaAritmetica > 20) {
//   // exercicio 4
//   console.log("media maior que 20");
// } else if (mediaAritmetica <= 20) {
//   console.log("media menor ou igual á 20");
// }

// for (let i = 0; i < numbers.length; i += 1) { // exercicio 5
//   if (soma <= numbers[i]) {
//     soma = numbers[i];
//   }
// }
// console.log(soma);

// for (let i = 0; i < numbers.length; i += 1) { exercicio 6
//   n1 = numbers[i];
//   if (n1 % 2 == 0) {
//     soma += 1;
//   }
// }

// console.log(soma);

let soma = 100;
for (let i = 0; i < numbers.length; i += 1) {
  if (soma >= numbers[i]) {
    soma = numbers[i];
  }
}
console.log(soma);
