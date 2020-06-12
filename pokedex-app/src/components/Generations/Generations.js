import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon.js';
import '../PokemonList/PokemonList.css';

function Generations() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generation, setGeneration] = useState(1);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/generation/${generation}`)
      .then(res => {
        console.log(res.data.pokemon_species);
        let pokemonData = res.data.pokemon_species;
        let sortedPokemon = pokemonData.sort(sortPokemon);
        sortedPokemon.map(pokemon => {
          let regexPoke = /\/pokemon-species\/(\d+)\//;
          let id = pokemon.url.match(regexPoke)[1];
          return (pokemon['id'] = id)
        })
        setData(pokemonData);
        setLoading(false);
      })
      .catch(err => {
        console.log(err, 'error')
      });

      const sortPokemon = (a,b) => {
        let regexPoke = /\/pokemon-species\/(\d+)\//;
        let aId = a.url.match(regexPoke)[1];
        let bId = b.url.match(regexPoke)[1];
        return aId - bId;
      }
  }, [generation]);

  if(loading) return <p>I'm Loading! Please be patient</p>;

  return (
    <>
      <section className='genButton'>
        <button onClick={() => setGeneration(1)}>1st Gen</button>
        <button onClick={() => setGeneration(2)}>2nd Gen</button>
        <button onClick={() => setGeneration(3)}>3rd Gen</button>
        <button onClick={() => setGeneration(4)}>4th Gen</button>
        <button onClick={() => setGeneration(5)}>5th Gen</button>
        <button onClick={() => setGeneration(6)}>6th Gen</button>
        <button onClick={() => setGeneration(7)}>7th Gen</button>
      </section>
      <div className='cards'>
        {data.map(item => <Pokemon data={item} key={item.name} />)}
      </div>
      <section className='genButton'>
        <button onClick={() => setGeneration(1)}>1st Gen</button>
        <button onClick={() => setGeneration(2)}>2nd Gen</button>
        <button onClick={() => setGeneration(3)}>3rd Gen</button>
        <button onClick={() => setGeneration(4)}>4th Gen</button>
        <button onClick={() => setGeneration(5)}>5th Gen</button>
        <button onClick={() => setGeneration(6)}>6th Gen</button>
        <button onClick={() => setGeneration(7)}>7th Gen</button>
      </section>
    </>
  );
}

export default Generations;
