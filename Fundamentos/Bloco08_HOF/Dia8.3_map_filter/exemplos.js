// const objPeople = [
//     { name: 'José', age: 21 },
//     { name: 'Lucas', age: 19 },
//     { name: 'Maria', age: 16 },
//     { name: 'Gilberto', age: 18 },
//     { name: 'Vitor', age: 15 },
// ];

// const teste = objPeople.filter((element) => element.age >= 18)
// console.log(teste);
//   // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

//maneira dificil de fazer
// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByName = (name, listStudents) =>
//     listStudents.filter((student) => student !== name);
// const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);

// // maneira facil de fazer

// const newArray = arrayMyStudents.filter((elemento) => elemento !== "Maria")
// console.log(newArray); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

//exemplo map:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

let produtosPrecos = []

function seila(produto, preco) {
    produtosPrecos.push(`${produto} :${preco}`)
}

function juntaLista(products, prices) {
    products.map((produto) => prices.forEach((preco) => seila(produto, preco)))
}

juntaLista(products, prices)
console.log(produtosPrecos)