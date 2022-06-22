import './App.css';
import Cards from './Cards';
import { pokemons } from './data';
import { useState } from 'react'

function App() {

  const [pokedex, setPokedex] = useState(pokemons)

  const typefind = (type) => {
    const result = []
    pokemons.find((e) => {
      if (e.type === type) {
        result.push(e)
      }
      if (e.name === type) {
        result.push(e)
      }
      if (e.averageWeight.value >= type) {
        result.push(e)
      }
      if (type === '') {
        setPokedex(pokedex)
      }
    })
    setPokedex(result)
  }

  const buscaInput = (e) => {
    if (e.keyCode === 13) {
      const valor = e.target.value
      typefind(valor)
    }
  }

  return (
    <div className="App">
      <h1 className='tittle' >Pokedex</h1>
      <div className='containerInput' >
        <inpute />
      </div>
      <div className='containerCards'>
        {pokedex.map((pokemon) => {
          return <Cards
            className='card'
            key={pokemon.id}
            pesoMedio={pokemon.averageWeight.value + pokemon.averageWeight.measurementUnit}
            type={pokemon.type} img={pokemon.image}
            name={pokemon.name}
          />
        })}
      </div>
    </div>
  );
}

export default App;
