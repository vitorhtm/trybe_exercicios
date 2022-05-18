//exercicio 1

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (array, name) => array.some((nome) => nome === name)


// console.log(hasName(names, 'Ana'))

// exercicio2

// const people = [
//     { name: 'Mateus', age: 28 },
//     { name: 'José', age: 19 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
// ];

// console.log(people.every(item => item.age > 18))

//exercicio3 sort()

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => b.age - a.age)
console.log(people)