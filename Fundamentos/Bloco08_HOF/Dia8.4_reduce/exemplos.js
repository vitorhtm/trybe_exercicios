const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const verificaPar = (par, number) => ((number % 2 === 0) ? par + number : par)

const numPar = (array) => array.reduce(verificaPar, 0)

console.log(numPar(numbers))


const pokemons = [
    {
        name: 'pikachu',
        type: 'eletric'
    },
    {
        name: 'charizard',
        type: 'fire'
    },
    {
        name: 'squirtle',
        type: 'water'
    },
    {
        name: 'wartortle',
        type: 'water'
    }
]

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual) => {

    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || [];
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual)

    return pokemonsPorTipo

}, {})
console.log(pokemonsPorTipo)