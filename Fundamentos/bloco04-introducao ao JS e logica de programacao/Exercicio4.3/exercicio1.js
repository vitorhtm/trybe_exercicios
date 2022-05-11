let fatorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let soma;
let contador = 0;

for (let i = 0; i < fatorial.length; i += 1) {
  if (soma == undefined) {
    soma = fatorial[i];
    contador += 1;
  } else if (contador == 1) {
    soma *= fatorial[i];
  }
}

console.log(soma);
