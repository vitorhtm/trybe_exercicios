// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList)

// exercicio2

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => {
//     if (number / 3 === 1 && number / 5 === 1) {
//         console.log(number)
//     } else {
//         console.log(` ${number} não é divisivel por 3 e 5`)
//     }
// }
// const result = numbers.find(findDivisibleBy3And5)

//exercicio3 

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const result2 = names.find((nome) => {
//     if (nome.length === 5) {
//         return nome
//     }
// })

// console.log(result2)

//exercicio4

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
    if (id.id === '31031685') {
        return id
    }
}

const result = musicas.find(findMusic)

console.log(result)
