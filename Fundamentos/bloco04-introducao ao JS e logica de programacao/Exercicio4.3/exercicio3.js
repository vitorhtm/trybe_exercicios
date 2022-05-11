let array = ["java", "javascript", "python", "html", "css"];

let maior = "";

for (let i = 0; i < array.length; i++) {
  const tmp = array[i];
  if (maior.length < tmp.length) {
    maior = tmp;
  }
}
console.timeEnd("for");

console.log([array[0]]);
