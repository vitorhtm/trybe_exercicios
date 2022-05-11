let str = "banana";
let d = str.split("").reverse().join("");
console.log(d);
let ban = "";

for (let i = str.length - 1; i > -1; i--) {
  ban += str[i];
}

console.log(ban);
