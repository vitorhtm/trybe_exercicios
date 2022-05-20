//Spread [...]
// const specialFruit = ['Maracujá', 'Manga', 'Laranja'];

// const additionalItens = ['Uva', 'Bergamota', 'Tomate'];

// const fruitSalad = (fruit, additional) => [...fruit, ...additional]

// console.log(fruitSalad(specialFruit, additionalItens));

// rest

// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

// function quantosParams(...args) {
//     console.log('parâmetros:', args);
//     return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams()); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

// // Object destructuring

// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//         specieName: 'Human',
//         jedi: true,
//     },
//     homeWorld: {
//         name: 'Tatooine',
//         population: '200000',
//     },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

// //nesse caso usando o Spread[...] junto
// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


// object destructuring

// const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
//   };

//   const { a: name, b: classAssigned, c: subject } = student;

//   console.log(name); // Maria
//   console.log(classAssigned); // Turma B
//   console.log(subject); // Matemática


//   const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
//   };

//   const { workDays, weekend } = daysOfWeek;
//   console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//   console.log(weekend); // ['Saturday', 'Sunday']

//   const weekdays = [...workDays, ...weekend];
//   console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//         specieName: 'Human',
//         jedi: true,
//     },
//     homeWorld: {
//         name: 'Tatooine',
//         population: '200000',
//     },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


// desestruturação de arrays

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality);

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// // esse z = 0  eu estou dando um valor padrao para o z, assim se caso ele não receber nenhum valou ou não existir ele vai ser 0

// console.log(x);
// console.log(y);
// console.log(z);

// // outro exemplo para retornar uma variavel com o mesmo nome que vc esta recebendo:

// const newUser = (id, name, email) => {
//     return {
//       id,
//       name,
//       email,
//     };
//   };

//   console.log(newUser(54, 'isabella', 'isabella@email.com'));

// const usuario = () => "usuario"

// const greeting = (user = usuario()) => console.log(`Welcome ${user}!`);

// greeting("vitor"); 

